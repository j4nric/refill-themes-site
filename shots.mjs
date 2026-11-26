#!/usr/bin/env node
// Screenshots der Blöcke aus den Demo-Shops für das Handbuch (Block-Seiten, Block-Galerie) samt Markierungen.
//
//   STOREFRONT_PASSWORD=… node shots.mjs                      # alle Blöcke der Galerie (content/blocks/index.json)
//   STOREFRONT_PASSWORD=… node shots.mjs --only text,heading  # nur diese Blöcke
//   STOREFRONT_PASSWORD=… node shots.mjs --only text --variant desktop --lang de   # schneller Probelauf
//   STOREFRONT_PASSWORD=… node shots.mjs --candidates text --out /tmp/x   # alle Fundstellen eines Blocks zum Aussuchen
//   STOREFRONT_PASSWORD=… node shots.mjs --discover           # Seitenadressen der Vorlagen neu ermitteln
//   node shots.mjs --selectors                                # nur zeigen, über welche Klassen jeder Block gefunden wird
//   Optionen: --theme <pfad zum Theme-Repo> (Standard ../cadence-theme), --lang de|en, --variant desktop|mobile
//
// Fundstelle je Block: shots.config.json → "blocks" (fest), sonst automatisch die erste Fundstelle in einer
// Demo-Vorlage mit bekannter Seite (Reihenfolge "prefer"); klappt sie nicht, die nächste.
// Seiten zu Vorlagen: --discover über die Sitemap → content/shots-pages.json ("pages" in der Konfiguration hat Vorrang).
// Shopify rendert Abschnitte als #shopify-section-template--<nr>__<abschnitt-id>. Blöcke tragen im Shop keine ID:
// Der Block wird über die Klassen seines äußersten Elements gefunden (aus blocks/<name>.liquid; reicht der Block
// block.shopify_attributes an ein Snippet weiter, aus dem Snippet) und über seine Position unter den gleichartigen
// Blöcken des Abschnitts. Elemente mit display: contents oder ohne eigene Größe: Bereich über die Kinder.
// Ist ein Block klein (< minHeight), wird ein Ausschnitt drumherum aufgenommen und der Block gestrichelt markiert.
//
// Markierungen: Beim Bild „Computer“ werden die Teile des Blocks vermessen (Überschrift, Text, Bild, Knopf … bzw. die
// Unterblöcke) und als Prozent-Koordinaten gespeichert. Zuordnung Einstellung → CSS-Selektor: shots.config.json →
// "markers"; sonst Heuristik (erstes h1–h6 → Überschrift, .prose/p → Text, img → Bild, a.button → Knopf, Icon).
//
// Ausgabe je Block und Sprache: assets/shots/<de|en>/<block>-desktop.webp (bis 1600 px breit),
// <block>-desktop-800.webp, <block>-mobile.webp (780 px), thumbs/<block>.webp (Galerie, 640 px); jedes Bild < 200 KB.
// Daten (Größen, Quelle, Markierungen): content/shots/<block>.json. WebP über Python/Pillow.
//
// Das Passwort kommt nur aus der Umgebungsvariable STOREFRONT_PASSWORD und wird nirgends ausgegeben.

import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'shots.config.json'), 'utf8'));
const PAGES_FILE = path.join(ROOT, 'content', 'shots-pages.json');
const DATA_DIR = path.join(ROOT, 'content', 'shots');
const BLOCKS_DIR = path.join(ROOT, 'content', 'blocks');
const SHOTS = path.join(ROOT, 'assets', 'shots');
const MAX_BYTES = 200 * 1024;
const VIEWPORTS = {
  desktop: { width: 1280, height: 900, deviceScaleFactor: 1.25, maxHeight: 1000 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, maxHeight: 1400 },
};
const MIN_HEIGHT = { desktop: 110, mobile: 90 };
const CONTEXT_HEIGHT = { desktop: 260, mobile: 220 };

// ----------------------------------------------------------------------------- Argumente

function parseArgs(argv) {
  const a = { theme: path.join(ROOT, '..', 'cadence-theme'), only: null, candidates: null, out: null,
    discover: false, langs: ['de', 'en'], variants: ['desktop', 'mobile'] };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    if (v === '--theme') a.theme = argv[++i];
    else if (v === '--only') a.only = argv[++i].split(',');
    else if (v === '--gallery') { /* früher eigener Lauf; Vorschaubilder entstehen jetzt aus dem Computer-Bild */ }
    else if (v === '--candidates') a.candidates = argv[++i];
    else if (v === '--out') a.out = argv[++i];
    else if (v === '--discover') a.discover = true;
    else if (v === '--lang') a.langs = argv[++i].split(',');
    else if (v === '--variant') a.variants = argv[++i].split(',');
    else if (v === '--selectors') a.selectors = true;
    else throw new Error(`Unbekannte Option ${v}`);
  }
  return a;
}

// ----------------------------------------------------------------------------- Theme lesen

function loadJson(file) {
  const text = fs.readFileSync(file, 'utf8').replace(/^\s*\/\*[\s\S]*?\*\//, '');
  return JSON.parse(text);
}

function loadTemplates(theme) {
  const out = {};
  for (const shop of Object.keys(CONFIG.shops)) {
    const dir = path.join(theme, 'demo', CONFIG.shops[shop].preset, 'files', 'templates');
    out[shop] = {};
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) out[shop][f] = loadJson(path.join(dir, f));
  }
  return out;
}

// Alle sichtbaren Blöcke eines Abschnitts in Vorlagen-Reihenfolge (Tiefensuche): {id, type, parent}
function sectionBlocks(section) {
  const list = [];
  const walk = (blocks, order, parent) => {
    const ids = order || Object.keys(blocks || {});
    for (const id of ids) {
      const b = blocks?.[id];
      if (!b || b.disabled) continue;
      list.push({ id, type: b.type, parent });
      walk(b.blocks, b.block_order, id);
    }
  };
  walk(section.blocks, section.block_order, null);
  return list;
}

function stripLiquidDocs(src) {
  return src.split(/\{%-?\s*schema\s*-?%\}/)[0]
    .replace(/\{%-?\s*doc\s*-?%\}[\s\S]*?\{%-?\s*enddoc\s*-?%\}/g, '')
    .replace(/\{%-?\s*comment\s*-?%\}[\s\S]*?\{%-?\s*endcomment\s*-?%\}/g, '');
}

// Ganzer HTML-Tag um Position i (Liquid im Tag wird übersprungen).
function tagAt(src, i) {
  const start = src.lastIndexOf('<', i);
  let j = i;
  while (j < src.length) {
    if (src.startsWith('{{', j) || src.startsWith('{%', j)) {
      const end = src.indexOf(src[j + 1] === '{' ? '}}' : '%}', j + 2);
      if (end < 0) break;
      j = end + 2;
      continue;
    }
    if (src[j] === '>') break;
    j++;
  }
  return src.slice(start, j + 1);
}

function selectorOfTag(tag, src = '') {
  const m = tag.match(/\bclass="([^"]*)"/);
  if (m) {
    let cls = m[1];
    // class="{{ classes }}": erste feste Zeichenkette aus „assign classes = '…'“
    const v = cls.trim().match(/^\{\{-?\s*(\w+)\s*-?\}\}$/);
    if (v) cls = src.match(new RegExp(`assign\\s+${v[1]}\\s*=\\s*'([^']*)'`))?.[1] || '';
    // Bedingte Teile: direkt an eine Klasse angehängt → Klasse unbrauchbar („@“), sonst einfach weg.
    // Liquid-Ausgaben ebenso („banner--{{ x }}“ fällt heraus).
    const stat = cls.replace(/(\S?)(\{%-?\s*(?:if|unless|case)\b[\s\S]*?-?%\})([\s\S]*?)\{%-?\s*end(?:if|unless|case)\s*-?%\}/g,
      (all, pre, open, inner) => (pre && !/^\s/.test(inner) ? pre + '@' : pre + ' '))
      .replace(/\{[{%][\s\S]*?[}%]\}/g, '@').trim().split(/\s+/).filter((c) => /^[a-z][\w-]*[a-z0-9]$/.test(c));
    if (stat.length) return stat.map((c) => '.' + c).join('');
  }
  const p = tag.match(/data-partial="([\w-]+)"/);
  if (p) return `[data-partial="${p[1]}"]`;
  const t = tag.match(/^<([a-z][\w]*-[\w-]*)/);
  if (t) return t[1];
  return null;
}

// CSS-Selektoren des äußersten Elements eines Blocks.
const selCache = {};
function rootSelectors(theme, type) {
  if (selCache[type]) return selCache[type];
  const file = path.join(theme, 'blocks', `${type}.liquid`);
  const src = fs.existsSync(file) ? stripLiquidDocs(fs.readFileSync(file, 'utf8')) : '';
  const sels = new Set();
  let i = -1;
  while ((i = src.indexOf('block.shopify_attributes', i + 1)) >= 0) {
    const open = src.lastIndexOf('{%', i);
    const close = src.lastIndexOf('%}', i);
    if (open > close) {
      // {% render 'snippet', … attributes: block.shopify_attributes %} → im Snippet nach {{ attributes }} suchen
      const tagEnd = src.indexOf('%}', i);
      const call = src.slice(open, tagEnd);
      const sn = call.match(/render\s+'([\w-]+)'/);
      if (!sn) continue;
      const sfile = path.join(theme, 'snippets', `${sn[1]}.liquid`);
      if (!fs.existsSync(sfile)) continue;
      const ssrc = stripLiquidDocs(fs.readFileSync(sfile, 'utf8'));
      for (const m of ssrc.matchAll(/\{\{-?\s*attributes\s*-?\}\}/g)) {
        const sel = selectorOfTag(tagAt(ssrc, m.index), ssrc);
        if (sel) sels.add(sel);
      }
      continue;
    }
    const sel = selectorOfTag(tagAt(src, i), src);
    if (sel) sels.add(sel);
  }
  selCache[type] = CONFIG.selectors?.[type] || [...sels];
  return selCache[type];
}

function blockData(slug) {
  const f = path.join(BLOCKS_DIR, `${slug}.json`);
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
}

// ----------------------------------------------------------------------------- Shop

async function unlock(context, base) {
  const page = await context.newPage();
  await page.goto(base + '/', { waitUntil: 'domcontentloaded' });
  if (/\/password/.test(page.url())) {
    if (!process.env.STOREFRONT_PASSWORD) throw new Error(`${base} ist passwortgeschützt: STOREFRONT_PASSWORD setzen`);
    await page.fill('form[action*="password"] input[type="password"]', process.env.STOREFRONT_PASSWORD);
    await Promise.all([page.waitForURL((u) => !/\/password/.test(u.pathname), { timeout: 30000 }).catch(() => {}),
      page.click('form[action*="password"] [type="submit"]')]);
    if (/\/password/.test(page.url())) throw new Error(`${base}: Passwort abgelehnt`);
  }
  await page.close();
}

function langPath(p, lang) {
  if (lang === 'de') return p;
  const [pathname, query] = p.split('?');
  return '/en' + (pathname === '/' ? '' : pathname) + (query ? '?' + query : '');
}

function withNoskip(p) {
  return p + (p.includes('?') ? '&' : '?') + 'noskip';
}

// ----------------------------------------------------------------------------- Seiten zu Vorlagen

const SECTION_RE = /id="shopify-section-template--\d+__([\w-]+)"/g;

async function discover(browser, theme, templates) {
  const result = {};
  for (const [shop, cfg] of Object.entries(CONFIG.shops)) {
    const base = 'https://' + cfg.domain;
    const context = await browser.newContext();
    await unlock(context, base);
    const get = async (u) => { const r = await context.request.get(u); return r.ok() ? r.text() : ''; };
    const urls = new Set(['/', '/cart', '/collections', '/search?q=a', '/blogs/news', '/gibt-es-nicht-404']);
    const index = await get(base + '/sitemap.xml');
    for (const m of index.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const sub = m[1].replace(/&amp;/g, '&');
      if (!/sitemap_(products|pages|collections|blogs)/.test(sub)) continue;
      const xml = await get(sub);
      let n = 0;
      for (const u of xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)) {
        if (/products/.test(sub) && ++n > 60) break;
        const pth = new URL(u[1]).pathname;
        if (!/^\/pages\/[^/]+\/./.test(pth)) urls.add(pth); // Metaobjekt-Seiten (Lexikon) nicht nötig
      }
    }
    const blog = await get(base + '/blogs/news');
    const art = blog.match(/href="(\/blogs\/news\/[^"#?]+)"/);
    if (art) urls.add(art[1]);
    const seen = [];
    const list = [...urls];
    for (let i = 0; i < list.length; i += 6) {
      await Promise.all(list.slice(i, i + 6).map(async (u) => {
        const html = await get(base + u);
        const ids = new Set([...html.matchAll(SECTION_RE)].map((m) => m[1]));
        const classes = new Set();
        for (const m of html.matchAll(/class="([^"]*)"/g)) for (const c of m[1].split(/\s+/)) classes.add(c);
        if (ids.size) seen.push({ path: u, ids, classes });
      }));
    }
    const kindOf = (file) => file.split('.')[0];
    const kindOfPath = (u) => (u === '/' ? 'index' : u === '/cart' ? 'cart' : u === '/collections' ? 'list-collections'
      : u.startsWith('/search') ? 'search' : /^\/products\//.test(u) ? 'product' : /^\/collections\//.test(u) ? 'collection'
        : /^\/blogs\/[^/]+\/./.test(u) ? 'article' : /^\/blogs\//.test(u) ? 'blog' : /^\/pages\/[^/]+$/.test(u) ? 'page'
          : u.includes('404') ? '404' : 'other');
    const fingerprint = {};
    for (const [file, tpl] of Object.entries(templates[shop])) {
      const secs = Object.entries(tpl.sections || {}).filter(([, s]) => !s.disabled);
      const types = new Set(secs.flatMap(([, s]) => sectionBlocks(s).map((b) => b.type)));
      fingerprint[file] = { ids: secs.map(([id]) => id),
        classes: [...types].map((t) => rootSelectors(theme, t).map((s) => s.match(/^\.([\w-]+)/)?.[1]).filter(Boolean)).filter((c) => c.length) };
    }
    const assigned = {};
    for (const s of seen) {
      let best = null;
      for (const [file, fp] of Object.entries(fingerprint)) {
        if (kindOf(file) !== kindOfPath(s.path) || !fp.ids.length) continue;
        const hit = fp.ids.filter((id) => s.ids.has(id)).length;
        const jac = hit / (fp.ids.length + [...s.ids].filter((id) => !fp.ids.includes(id)).length);
        const cls = fp.classes.length ? fp.classes.filter((cs) => cs.some((c) => s.classes.has(c))).length / fp.classes.length : 0;
        const score = jac + cls;
        if (jac >= 0.75 && (!best || score > best.score)) best = { score, file };
      }
      if (!best) continue;
      const cur = assigned[best.file];
      if (!cur || best.score > cur.score || (best.score === cur.score && s.path.length < cur.path.length)) assigned[best.file] = { ...best, path: s.path };
    }
    result[shop] = Object.fromEntries(Object.entries(assigned).sort().map(([f, a]) => [f, a.path]));
    Object.assign(result[shop], CONFIG.pages?.[shop] || {});
    console.log(`${shop}: ${Object.keys(result[shop]).length} Vorlagen zugeordnet, ${seen.length} Seiten gelesen`);
    await context.close();
  }
  fs.writeFileSync(PAGES_FILE, JSON.stringify(result, null, 1) + '\n');
  return result;
}

// ----------------------------------------------------------------------------- Im Browser

// Wird in die Seite gegeben: Größe eines Elements; ohne eigene Box (display: contents, 0 Höhe) über die Kinder.
const BOX_FN = `(function boxOf(n) {
  const cs = getComputedStyle(n);
  if (cs.display === 'none' || cs.visibility === 'hidden') return null;
  const r = n.getBoundingClientRect();
  if (cs.display !== 'contents' && r.width > 1 && r.height > 1) {
    const fixed = cs.position === 'fixed';
    return { x: r.left + (fixed ? 0 : scrollX), y: r.top + (fixed ? 0 : scrollY), width: r.width, height: r.height, fixed };
  }
  let u = null;
  for (const c of n.children) {
    const b = boxOf(c);
    if (!b) continue;
    if (!u) { u = { ...b }; continue; }
    const x2 = Math.max(u.x + u.width, b.x + b.width), y2 = Math.max(u.y + u.height, b.y + b.height);
    u.x = Math.min(u.x, b.x); u.y = Math.min(u.y, b.y); u.width = x2 - u.x; u.height = y2 - u.y;
  }
  return u;
})`;

async function boxOf(page, handle) {
  return page.evaluate(([fn, n]) => (0, eval)(fn)(n), [BOX_FN, handle]);
}

async function preparePage(page, url) {
  await page.waitForTimeout(800);  // Shops schonen: Shopify sperrt bei zu vielen Abrufen (429, „Just a moment…“)
  for (let i = 0; ; i++) {
    const res = await page.goto(url, { waitUntil: 'load', timeout: 90000 });
    if (!res || res.status() !== 429) break;
    if (i >= 2) throw new Error(`gesperrt (429): ${url}`);
    console.warn(`  429 bei ${url} – warte`);
    await page.waitForTimeout(15000 * (i + 1));
  }
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => { img.loading = 'eager'; });
    await document.fonts?.ready;
  });
}

// Findet den Block: Abschnitt, dann n-ter gleichartiger Block im Abschnitt.
async function locate(page, theme, sectionId, blocks, blockId) {
  const sectionSel = `[id^="shopify-section-template--"][id$="__${sectionId}"]`;
  const section = await page.$(sectionSel);
  if (!section) return { error: `Abschnitt ${sectionId} nicht auf der Seite` };
  if (!blockId) return { handle: section, how: 'section', section };
  const block = blocks.find((b) => b.id === blockId);
  if (!block) return { error: `Block ${blockId} nicht in der Vorlage`, section };
  const sels = rootSelectors(theme, block.type);
  if (!sels.length) return { error: `kein Selektor für ${block.type}`, section };
  // Andere Blocktypen mit denselben Klassen (z. B. „Pflichtangaben“ und „Produktsicherheit“: .disclosure.legal)
  // zählen mit: Position unter allen Blöcken des Abschnitts, deren Selektoren sich überschneiden.
  // Ein Selektor eines anderen Typs trifft auch, wenn er alle Klassen eines unserer Selektoren enthält (.disclosure.legal ⊇ .disclosure).
  const parts = (x) => x.match(/[.#]?[\w-]+|\[[^\]]+\]/g) || [];
  const covers = (other, mine) => parts(mine).every((p) => parts(other).includes(p));
  const same = blocks.filter((b) => b.type === block.type
    || rootSelectors(theme, b.type).some((x) => sels.some((m) => covers(x, m))));
  const nth = same.indexOf(block);
  const handle = await section.evaluateHandle((root, { sels, nth }) => {
    const all = [...root.querySelectorAll(sels.join(','))];
    const outer = all.filter((el) => !all.some((o) => o !== el && o.contains(el)));
    return outer[nth] || null;
  }, { sels, nth });
  const el = handle.asElement();
  if (!el) return { error: `Block ${blockId} (${block.type}, Nr. ${nth + 1}) nicht gefunden (${sels.join(' | ')})`, section };
  return { handle: el, how: 'block', section };
}

async function settle(page, el) {
  await el.scrollIntoViewIfNeeded().catch(() => {});
  await page.evaluate(async (node) => {
    const imgs = [...node.querySelectorAll('img')];
    imgs.forEach((i) => { i.loading = 'eager'; });
    await Promise.race([
      Promise.all(imgs.map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; })))),
      new Promise((r) => setTimeout(r, 8000)),
    ]);
    for (const e of document.querySelectorAll('body *')) {
      const pos = getComputedStyle(e).position;
      if ((pos === 'fixed' || pos === 'sticky') && !e.contains(node) && !node.contains(e)) {
        e.style.setProperty('visibility', 'hidden', 'important');
        e.setAttribute('data-shot-hidden', '');
      }
    }
    document.querySelectorAll('dialog[open]').forEach((d) => d.close());
  }, el);
  await page.waitForTimeout(600);
}

// Vor der nächsten Aufnahme auf derselben Seite: ausgeblendete Elemente wieder zeigen
async function unsettle(page) {
  await page.evaluate(() => document.querySelectorAll('[data-shot-hidden]').forEach((e) => {
    e.style.removeProperty('visibility');
    e.removeAttribute('data-shot-hidden');
  }));
}

async function setHighlight(page, els, on) {
  await page.evaluate(({ nodes, on }) => {
    for (const n of nodes) {
      if (on) {
        n.style.setProperty('outline', '3px dashed #1f4fd1', 'important');
        n.style.setProperty('outline-offset', '4px', 'important');
      } else {
        n.style.removeProperty('outline');
        n.style.removeProperty('outline-offset');
      }
    }
  }, { nodes: els, on });
}

// Kleinster Vorfahre (bis zum Abschnitt), der hoch genug ist, damit man sieht, wo der Block steht.
async function contextOf(page, el, section, minH) {
  const h = await page.evaluateHandle(([fn, node, sec, minH]) => {
    const boxOf = (0, eval)(fn);
    let n = node.parentElement;
    while (n && n !== sec) {
      const b = boxOf(n);
      if (b && b.height >= minH && b.width >= 300) return n;
      n = n.parentElement;
    }
    return sec;
  }, [BOX_FN, el, section, minH]);
  return h.asElement();
}

// Ausschnitt: Zielbereich + Rand; ist er zu hoch, ein Fenster um den Block (focus).
function clipFor(box, focus, vp, pad, maxH = vp.maxHeight) {
  let x = Math.max(0, Math.floor(box.x - pad));
  let w = Math.min(Math.ceil(box.width + 2 * pad), vp.width);
  if (x + w > vp.width) x = Math.max(0, vp.width - w);
  let y = Math.max(0, Math.floor(box.y - pad));
  let h = Math.ceil(box.height + 2 * pad);
  if (h > maxH) {
    h = maxH;
    if (focus) {
      const want = focus.y - Math.max(0, (maxH - focus.height) / 2);
      y = Math.max(y, Math.min(Math.floor(want), Math.floor(box.y + box.height + pad - h)));
    }
  }
  return { x, y, width: w, height: h };
}

// Markierungen: Teile des Blocks vermessen. specs: [{setting|block, sel?, child?}]
async function measureMarkers(page, root, clip, specs, childHandles) {
  return page.evaluate(([fn, root, clip, specs, children]) => {
    const boxOf = (0, eval)(fn);
    const inChild = (el) => children.some((c) => c && c !== el && c.contains(el));
    const out = [];
    for (const s of specs) {
      let b = null;
      if (s.child !== undefined) {
        const c = children[s.child];
        b = c ? boxOf(c) : null;
      } else {
        for (const el of root.querySelectorAll(s.sel)) {
          if (inChild(el)) continue;
          const bb = boxOf(el);
          if (bb && bb.width >= 6 && bb.height >= 6) { b = bb; break; }
        }
        if (!b && root.matches(s.sel)) b = boxOf(root);
      }
      if (!b) continue;
      // Punkt links vor den Anfang des Teils (verdeckt so kaum Text), auf Höhe der ersten Zeile.
      const top = b.y + Math.min(14, b.height / 2);
      if (top < clip.y || top > clip.y + clip.height || b.x + b.width < clip.x || b.x > clip.x + clip.width) continue;
      const left = b.x - 16 >= clip.x + 12 ? b.x - 16 : b.x + Math.min(16, b.width / 2);
      const pct = (v, o, len) => Math.round((v - o) / len * 1000) / 10;
      out.push({ ...s, x: pct(left, clip.x, clip.width), y: pct(top, clip.y, clip.height),
        box: [pct(b.x, clip.x, clip.width), pct(b.y, clip.y, clip.height), pct(b.width, 0, clip.width), pct(b.height, 0, clip.height)] });
    }
    return out;
  }, [BOX_FN, root, clip, specs, childHandles]);
}

const PY_WEBP = `
import io, json, sys
from PIL import Image, ImageStat
spec = json.loads(sys.argv[1])
im = Image.open(io.BytesIO(sys.stdin.buffer.read())).convert("RGB")
if ImageStat.Stat(im.convert("L")).stddev[0] < 5:  # leere Fläche (Block nicht gerendert)
    print(json.dumps(None)); sys.exit(0)
res = []
for out, max_w, max_h, limit in spec:
    img = im
    if img.width > max_w:
        img = img.resize((max_w, round(img.height * max_w / img.width)), Image.LANCZOS)
    if max_h and img.height > max_h:
        img = img.crop((0, 0, img.width, max_h))
    for q in (80, 74, 68, 62, 56, 50, 44, 38):
        buf = io.BytesIO()
        img.save(buf, "WEBP", quality=q, method=6)
        if buf.tell() <= limit:
            break
    open(out, "wb").write(buf.getvalue())
    res.append({"width": img.width, "height": img.height, "bytes": buf.tell(), "quality": q})
print(json.dumps(res))
`;

// outputs: [[datei, maxBreite, maxHöhe]] → [{width, height, bytes}] oder null bei leerem Bild
function toWebp(png, outputs) {
  for (const [f] of outputs) fs.mkdirSync(path.dirname(f), { recursive: true });
  const spec = JSON.stringify(outputs.map(([f, w, h]) => [f, w, h || 0, MAX_BYTES]));
  const r = spawnSync('python3', ['-c', PY_WEBP, spec], { input: png, maxBuffer: 1 << 26 });
  if (r.status !== 0) throw new Error('WebP-Umwandlung: ' + r.stderr.toString());
  return JSON.parse(r.stdout.toString());
}

// ----------------------------------------------------------------------------- Markierungs-Spezifikation

const HEUR = [
  { kind: 'heading', sel: 'h1, h2, h3, h4, h5, h6', ids: /^(heading|title|headline)$|heading|title/, types: ['text', 'inline_richtext', 'richtext', 'textarea'] },
  { kind: 'text', sel: '.prose, .rte, p', ids: /^(text|body|content|description|message|subheading|caption|answer)$|text$/, types: ['richtext', 'inline_richtext', 'textarea', 'text'] },
  { kind: 'icon', sel: '.icon, svg', ids: /^(icon|icon_source)$/, types: ['select', 'image_picker'] },
  { kind: 'image', sel: 'img', ids: /image|logo|photo|picture/, types: ['image_picker'] },
  { kind: 'button', sel: 'a.button, .button, button[type="submit"]', ids: /button|link_label|^label$|cta/, types: ['text', 'inline_richtext'] },
];

function markerSpecs(slug, templateBlocks, blockId) {
  if (CONFIG.markers?.[slug]) return CONFIG.markers[slug].map((m) => ({ ...m }));
  const data = blockData(slug);
  const settings = (data?.en?.settings || []).filter((s) => s.id);
  const used = new Set();
  const specs = [];
  for (const h of HEUR) {
    const s = settings.find((x) => !used.has(x.id) && h.types.includes(x.type) && h.ids.test(x.id)
      && !(h.kind === 'text' && /button|label|link|alt|placeholder|icon_text/.test(x.id)));
    if (!s) continue;
    used.add(s.id);
    specs.push({ setting: s.id, sel: h.sel });
  }
  return specs;
}

function nestedSpecs(blocks, blockId, publicTypes) {
  // Direkte Unterblöcke (mit eigener Block-Seite), höchstens 4, je Typ einmal.
  const out = [];
  const seen = new Set();
  for (const b of blocks.filter((x) => x.parent === blockId)) {
    if (!publicTypes.has(b.type) || seen.has(b.type) || out.length >= 4) continue;
    seen.add(b.type);
    out.push(b);
  }
  return out;
}

// ----------------------------------------------------------------------------- Aufnahme eines Blocks

function occurrences(templates, type, pages) {
  const prefer = CONFIG.prefer || ['index.json'];
  const out = [];
  for (const [shop, files] of Object.entries(templates)) {
    for (const [file, tpl] of Object.entries(files)) {
      for (const [sid, sec] of Object.entries(tpl.sections || {})) {
        if (sec.disabled) continue;
        for (const b of sectionBlocks(sec)) if (b.type === type) out.push({ shop, template: file, section: sid, block: b.id });
      }
    }
  }
  const rank = (o) => { const i = prefer.indexOf(o.template); return i < 0 ? prefer.length : i; };
  return out.filter((o) => pages[o.shop]?.[o.template]).sort((a, b) => rank(a) - rank(b));
}

class Shooter {
  constructor(browser, theme, templates, pages, publicTypes) {
    Object.assign(this, { browser, theme, templates, pages, publicTypes, contexts: {}, pagesOpen: {} });
  }

  async context(shop, variant, lang, locked = true) {
    const key = [shop, variant, lang, locked].join(' ');
    if (!this.contexts[key]) {
      const vp = VIEWPORTS[variant];
      const ctx = await this.browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: vp.deviceScaleFactor,
        reducedMotion: 'reduce', locale: lang === 'de' ? 'de-DE' : 'en-US', isMobile: variant === 'mobile', hasTouch: variant === 'mobile' });
      if (locked) await unlock(ctx, 'https://' + CONFIG.shops[shop].domain);
      this.contexts[key] = ctx;
    }
    return this.contexts[key];
  }

  // Seite laden (wiederverwenden, wenn dieselbe Adresse schon offen ist und nichts vorbereitet werden muss)
  async open(job, variant, lang) {
    const locked = job.unlock !== false;
    const ctx = await this.context(job.shop, variant, lang, locked);
    const base = 'https://' + CONFIG.shops[job.shop].domain;
    const pth = job.path || this.pages[job.shop][job.template];
    const url = base + withNoskip(langPath(pth, lang));
    const key = [job.shop, variant, lang, locked].join(' ');
    const cur = this.pagesOpen[key];
    if (cur && cur.url === url && !job.visit && !job.scroll && !(job.cart && !this.cartFilled?.[key])) return cur.page;
    if (cur) await cur.page.close();
    if (job.cart && !this.cartFilled?.[key]) {
      // Warenkorb-Blöcke: vorher Produkte in den Warenkorb legen – wie Kundschaft über das Formular der Produktseite
      const p = await ctx.newPage();
      for (const pth of job.cart) {
        await p.goto(base + pth, { waitUntil: 'load', timeout: 90000 });
        // Klick auf „In den Warenkorb“ (das Theme legt per JavaScript in den Warenkorb, ohne Seitenwechsel)
        await p.locator('form[action*="/cart/add"] [type="submit"]:visible').first().click({ timeout: 15000 }).catch(() => {});
        await p.waitForTimeout(2500);
      }
      await p.close();
      this.cartFilled = { ...(this.cartFilled || {}), [key]: true };
    }
    if (job.visit) {
      // z. B. „Zuletzt angesehen“: vorher einige Produkte besuchen (localStorage)
      const p = await ctx.newPage();
      for (const v of job.visit) await p.goto(base + langPath(v, lang), { waitUntil: 'load', timeout: 90000 }).catch(() => {});
      await p.waitForTimeout(500);
      await p.close();
    }
    const page = await ctx.newPage();
    await preparePage(page, url);
    this.pagesOpen[key] = { url, page };
    return page;
  }

  async closeAll() {
    for (const c of Object.values(this.contexts)) await c.close();
  }

  // Ein Bild aufnehmen. Ergebnis: {png, clip, how, markers?} oder {error}
  async grab(job, variant, lang, withMarkers) {
    const vp = VIEWPORTS[variant];
    let page;
    if (this.blocked?.[job.shop]) return { error: `${job.shop} gesperrt (429)` };
    try {
      page = await this.open(job, variant, lang);
    } catch (e) {
      if (/gesperrt/.test(e.message)) this.blocked = { ...(this.blocked || {}), [job.shop]: true };
      return { error: e.message.split('\n')[0] };
    }
    await unsettle(page);
    const tpl = this.templates[job.shop][job.template];
    const blocks = sectionBlocks(tpl.sections[job.section]);
    let found = await locate(page, this.theme, job.section, blocks, job.block);
    if (!found.handle) return { error: found.error };
    const blockEl = found.handle;
    let target = blockEl;
    let how = 'block';
    let focus = null;
    const marks = [];
    if (job.open) await blockEl.evaluate((n) => (n.matches('details') ? n : n.querySelector('details'))?.setAttribute('open', ''));
    if (job.addClass?.[variant]) await blockEl.evaluate((n, c) => n.classList.add(c), job.addClass[variant]);
    if (job.scroll) {
      await page.evaluate((y) => window.scrollTo(0, y), job.scroll);
      await page.waitForTimeout(1200);
    }
    let bbox = await boxOf(page, blockEl);
    if (!bbox) return { error: 'Block ohne Größe (unsichtbar oder leer)' };
    if (job.scope === 'section') {
      target = found.section; how = 'section';
      if (job.highlight) marks.push(blockEl);
      focus = bbox;
    } else if (job.scope === 'parent') {
      const parentId = blocks.find((b) => b.id === job.block)?.parent;
      const type = blocks.find((b) => b.id === job.block).type;
      for (const b of blocks.filter((b) => b.type === type && b.parent === parentId)) {
        const f = await locate(page, this.theme, job.section, blocks, b.id);
        if (f.handle) marks.push(f.handle);
      }
      const p = parentId ? await locate(page, this.theme, job.section, blocks, parentId) : { handle: found.section };
      if (p.handle) { target = p.handle; how = 'parent'; }
      if (job.highlight === false) marks.length = 0;
      focus = bbox;
    } else if (!bbox.fixed && (bbox.height < (job.minHeight || MIN_HEIGHT[variant]) || bbox.width < 160)) {
      target = await contextOf(page, blockEl, found.section, CONTEXT_HEIGHT[variant]);
      how = 'context';
      marks.push(blockEl);
      focus = bbox;
    }
    await settle(page, target);
    if (marks.length) await setHighlight(page, marks, true);
    bbox = await boxOf(page, blockEl);
    let box = await boxOf(page, target);
    if (!box) return { error: 'Element ohne Größe' };
    if (focus) focus = bbox;
    let png;
    let clip;
    if (box.fixed) {
      // Fixierte Leiste (z. B. Kaufleiste): Ausschnitt des Fensters, etwas Seite darüber als Zusammenhang
      const above = variant === 'desktop' ? 180 : 160;
      clip = { x: 0, y: Math.max(0, Math.floor(box.y - above)), width: vp.width, height: 0 };
      clip.height = Math.min(vp.height, Math.ceil(box.y + box.height + 8)) - clip.y;
      await setHighlight(page, [blockEl], false);
      png = await page.screenshot({ clip, animations: 'disabled', type: 'png' });
      how = 'fixed';
    } else {
      // Kleiner Block in großem Umfeld: nur ein Fenster um den Block
      const maxH = how === 'context' ? Math.min(vp.maxHeight, Math.max(bbox.height + 380, 460)) : vp.maxHeight;
      clip = clipFor(box, focus, vp, how === 'section' ? 0 : 8, maxH);
      png = await page.screenshot({ clip, fullPage: true, animations: 'disabled', type: 'png' });
    }
    let markers = null;
    if (withMarkers) {
      const specs = markerSpecs(job.name, blocks, job.block);
      const kids = nestedSpecs(blocks, job.block, this.publicTypes);
      const kidHandles = [];
      for (const k of kids) {
        const f = await locate(page, this.theme, job.section, blocks, k.id);
        kidHandles.push(f.handle || null);
      }
      kids.forEach((k, i) => specs.push({ block: k.type, child: i }));
      // Fixierte Leiste: Teile darin sind nicht selbst fixiert, boxOf liefert für sie Seitenkoordinaten.
      const sy = box.fixed ? await page.evaluate(() => scrollY) : 0;
      const mclip = { ...clip, y: clip.y + sy };
      markers = await measureMarkers(page, blockEl, mclip, specs, kidHandles);
    }
    if (marks.length) await setHighlight(page, marks, false);
    return { png, clip, how, markers };
  }
}

// Markierungen aufräumen: nummerieren (Reihenfolge der Einstellungen, dann Unterblöcke), zu nahe Punkte verschieben.
function finishMarkers(raw, slug) {
  if (!raw) return [];
  const data = blockData(slug);
  const order = (data?.en?.settings || []).filter((s) => s.id).map((s) => s.id);
  const list = raw.map((m) => ({ ...(m.setting ? { setting: m.setting } : { block: m.block }), x: m.x, y: m.y, box: m.box }));
  list.sort((a, b) => {
    const ia = a.setting ? order.indexOf(a.setting) : 1000;
    const ib = b.setting ? order.indexOf(b.setting) : 1000;
    return ia - ib || a.y - b.y;
  });
  const placed = [];
  list.forEach((m, i) => {
    m.n = i + 1;
    for (let k = 0; k < 6 && placed.some((p) => Math.abs(p.x - m.x) < 3.5 && Math.abs(p.y - m.y) < 5); k++) m.x += 4;
    m.x = Math.round(Math.min(97, Math.max(2, m.x)) * 10) / 10;
    m.y = Math.round(Math.min(96, Math.max(3, m.y)) * 10) / 10;
    placed.push(m);
  });
  return list;
}

// ----------------------------------------------------------------------------- Start

function jobFor(slug, cand) {
  const cfg = CONFIG.blocks?.[slug] || {};
  return { scope: 'block', ...cand, ...cfg, name: slug };
}


async function shootBlock(sh, slug, cands, args) {
  const dataFile = path.join(DATA_DIR, `${slug}.json`);
  const old = fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile, 'utf8')) : {};
  const cfg = CONFIG.blocks?.[slug] || {};
  if (cfg.unavailable) {
    fs.writeFileSync(dataFile, JSON.stringify({ block: slug, unavailable: cfg.unavailable }, null, 1) + '\n');
    console.log(`${slug}: kein Bild (${cfg.unavailable})`);
    return { ok: false, reason: cfg.unavailable };
  }
  // Feste Fundstelle zuerst, dann die übrigen (mit den Zusatz-Einstellungen der Konfiguration)
  const { shop, template, section, block, ...extra } = cfg;
  const auto = cands.filter((c) => !(c.shop === shop && c.template === template && c.section === section && c.block === block))
    .map((c) => ({ scope: 'block', ...c, ...extra, name: slug }));
  const list = (cfg.template ? [jobFor(slug, {})] : []).concat(auto)
    .filter((j) => !sh.blocked?.[j.shop]);
  if (!list.length) { console.warn(`${slug}: keine Fundstelle auf einer bekannten Seite`); return { ok: false, reason: 'keine Fundstelle' }; }
  let lastErr = '';
  for (const job of list.slice(0, 4)) {
    const result = { block: slug, shop: job.shop, template: job.template, section: job.section, id: job.block };
    let ok = true;
    for (const lang of args.langs) {
      const entry = { ...(old[lang] || {}) };
      for (const variant of args.variants) {
        const g = await sh.grab(job, variant, lang, variant === 'desktop');
        if (g.error || !g.png) { ok = false; lastErr = `${job.shop}/${job.template}#${job.section}/${job.block} ${lang} ${variant}: ${g.error}`; break; }
        const base = path.join(SHOTS, lang, slug);
        const outs = variant === 'desktop'
          ? [[`${base}-desktop.webp`, 1600, 1250], [`${base}-desktop-800.webp`, 800, 625], [path.join(SHOTS, lang, 'thumbs', `${slug}.webp`), 640, 480]]
          : [[`${base}-mobile.webp`, 780, 2800]];
        const info = toWebp(g.png, outs);
        if (!info) { ok = false; lastErr = `${lang} ${variant}: Bild ist leer`; break; }
        const rel = (f) => path.relative(SHOTS, f).split(path.sep).join('/');
        if (variant === 'desktop') {
          entry.desktop = { file: rel(outs[0][0]), ...info[0], how: g.how };
          entry.desktop_small = { file: rel(outs[1][0]), ...info[1] };
          entry.thumb = { file: rel(outs[2][0]), ...info[2] };
          entry.markers = finishMarkers(g.markers, slug);
        } else {
          entry.mobile = { file: rel(outs[0][0]), ...info[0], how: g.how };
        }
        const i0 = info[0];
        console.log(`  ${slug} ${lang} ${variant}: ${i0.width}×${i0.height}, ${Math.round(i0.bytes / 1024)} KB (${g.how})`
          + (variant === 'desktop' ? `, ${entry.markers.length} Markierungen` : ''));
      }
      if (!ok) break;
      result[lang] = entry;
    }
    if (ok) {
      for (const lang of ['de', 'en']) if (!result[lang] && old[lang]) result[lang] = old[lang];
      fs.mkdirSync(DATA_DIR, { recursive: true });
      fs.writeFileSync(dataFile, JSON.stringify(result, null, 1) + '\n');
      return { ok: true };
    }
    console.warn(`  ${slug}: ${lastErr} – nächste Fundstelle`);
  }
  return { ok: false, reason: lastErr };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const theme = path.resolve(args.theme);
  if (!fs.existsSync(path.join(theme, 'blocks'))) throw new Error(`Theme-Repo nicht gefunden: ${theme} (--theme)`);
  const templates = loadTemplates(theme);
  if (args.selectors) {
    // Nur ausgeben, wie jeder Block im Shop gefunden wird (ohne Browser)
    const index = JSON.parse(fs.readFileSync(path.join(BLOCKS_DIR, 'index.json'), 'utf8'));
    for (const b of index) console.log(b.slug.padEnd(24), rootSelectors(theme, b.slug).join(' | ') || '–');
    return;
  }
  const browser = await chromium.launch();
  try {
    let pages = fs.existsSync(PAGES_FILE) ? JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8')) : null;
    if (args.discover || !pages) pages = await discover(browser, theme, templates);
    for (const [shop, extra] of Object.entries(CONFIG.pages || {})) pages[shop] = { ...(pages[shop] || {}), ...extra };
    if (args.discover && !args.candidates && !args.only) return;
    const index = JSON.parse(fs.readFileSync(path.join(BLOCKS_DIR, 'index.json'), 'utf8'));
    const publicTypes = new Set(index.map((b) => b.slug));
    const sh = new Shooter(browser, theme, templates, pages, publicTypes);
    if (args.candidates) {
      const outDir = path.resolve(args.out || path.join(ROOT, '_candidates'));
      fs.mkdirSync(outDir, { recursive: true });
      for (const [i, o] of occurrences(templates, args.candidates, pages).entries()) {
        const g = await sh.grab({ ...o, name: args.candidates, scope: 'block' }, 'desktop', 'de', false);
        if (g.error) { console.warn(`  ${o.shop}/${o.template}#${o.section}/${o.block}: ${g.error}`); continue; }
        const f = path.join(outDir, `${args.candidates}-${String(i).padStart(2, '0')}-${o.shop}-${o.template}-${o.section}-${o.block}.webp`);
        toWebp(g.png, [[f, 800, 900]]);
        console.log('  ' + f);
      }
      await sh.closeAll();
      return;
    }
    const slugs = index.map((b) => b.slug).filter((s) => !args.only || args.only.includes(s));
    // Nach erster Fundstelle sortieren: gleiche Seiten nacheinander (Seite wird wiederverwendet)
    const plan = slugs.map((s) => ({ slug: s, cands: occurrences(templates, s, pages) }));
    const keyOf = (p) => { const c = CONFIG.blocks?.[p.slug]?.template ? CONFIG.blocks[p.slug] : p.cands[0] || {}; return `${c.shop} ${c.template}`; };
    plan.sort((a, b) => keyOf(a).localeCompare(keyOf(b)));
    const failed = [];
    for (const p of plan) {
      const r = await shootBlock(sh, p.slug, p.cands, args);
      if (!r.ok) failed.push(`${p.slug} (${r.reason})`);
    }
    await sh.closeAll();
    if (failed.length) console.warn(`Ohne Bild: ${failed.join(', ')}`);
  } finally {
    await browser.close();
  }
}

main().catch((e) => { console.error(e.message); process.exit(1); });
