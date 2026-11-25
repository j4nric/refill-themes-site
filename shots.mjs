#!/usr/bin/env node
// Screenshots von Blöcken aus den Demo-Shops für das Handbuch (Block-Seiten und Block-Galerie).
//
//   STOREFRONT_PASSWORD=… node shots.mjs                      # Pilot-Blöcke (shots.config.json → "pilots")
//   STOREFRONT_PASSWORD=… node shots.mjs --only text          # nur diese Pilot-Blöcke (Komma-Liste)
//   STOREFRONT_PASSWORD=… node shots.mjs --gallery            # Vorschaubilder aller Blöcke der Galerie
//   STOREFRONT_PASSWORD=… node shots.mjs --candidates text --out /tmp/x   # alle Fundstellen eines Blocks zum Aussuchen
//   STOREFRONT_PASSWORD=… node shots.mjs --discover           # Seitenadressen der Vorlagen neu ermitteln
//   Optionen: --theme <pfad zum Theme-Repo> (Standard ../cadence-theme), --lang de|en (Standard beide)
//
// Ablauf: Welche Seite eine Vorlage (z. B. page.about.json) zeigt, ermittelt --discover über die Sitemap des Shops
// (Abschnitts-IDs der Seite = Abschnitte der Vorlage) und speichert es in content/shots-pages.json. Shopify rendert
// Abschnitte als #shopify-section-template--<nr>__<abschnitt-id>. Blöcke tragen im Shop keine ID: Der Block wird über
// die Klasse seines äußersten Elements (aus blocks/<name>.liquid) und seine Position unter den gleichartigen Blöcken des
// Abschnitts (Reihenfolge in der Vorlage) gefunden. Seiten werden mit ?noskip geladen (kein content-visibility),
// Bewegung reduziert, Bilder abgewartet; fixierte Elemente (Kopfzeile, Popups) ausgeblendet.
// Ausgabe: assets/shots/<de|en>/<block>-<shop>-<desktop|mobile>.webp (Pilot) bzw. assets/shots/<de|en>/thumbs/<block>.webp
// (Galerie), Maße und Quelle in content/shots.json. WebP über Python/Pillow, unter 150 KB je Bild.
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
const MANIFEST_FILE = path.join(ROOT, 'content', 'shots.json');
const SHOTS = path.join(ROOT, 'assets', 'shots');
const MAX_BYTES = 150 * 1024;
const VIEWPORTS = {
  desktop: { width: 1280, height: 900, deviceScaleFactor: 1, maxHeight: 1100, maxWidth: 1400 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, maxHeight: 1500, maxWidth: 780 },
};
const THUMB = { width: 640, maxHeight: 480 };

// ----------------------------------------------------------------------------- Argumente

function parseArgs(argv) {
  const a = { theme: path.join(ROOT, '..', 'cadence-theme'), only: null, gallery: false, candidates: null, out: null,
    discover: false, langs: ['de', 'en'] };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    if (v === '--theme') a.theme = argv[++i];
    else if (v === '--only') a.only = argv[++i].split(',');
    else if (v === '--gallery') a.gallery = true;
    else if (v === '--candidates') a.candidates = argv[++i];
    else if (v === '--out') a.out = argv[++i];
    else if (v === '--discover') a.discover = true;
    else if (v === '--lang') a.langs = argv[++i].split(',');
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

// Klassen des äußersten Elements eines Blocks (Tags mit block.shopify_attributes), erste feste Klasse je Tag.
const classCache = {};
function rootClasses(theme, type) {
  if (classCache[type]) return classCache[type];
  const file = path.join(theme, 'blocks', `${type}.liquid`);
  const src = fs.existsSync(file) ? fs.readFileSync(file, 'utf8').split('{% schema %}')[0] : '';
  const classes = new Set();
  let i = -1;
  while ((i = src.indexOf('block.shopify_attributes', i + 1)) >= 0) {
    const tag = src.slice(src.lastIndexOf('<', i), i);
    const m = tag.match(/class="([^"]*)"/);
    const first = m && m[1].replace(/\{[{%][\s\S]*?[}%]\}/g, ' ').trim().split(/\s+/)[0];
    if (first && /^[a-z][\w-]*$/.test(first)) classes.add(first);
  }
  classCache[type] = [...classes];
  return classCache[type];
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
    // Seite → passendste Vorlage gleicher Art (Abschnitts-IDs + Klassen der Blöcke), dann je Vorlage die kürzeste Adresse.
    const kindOf = (file) => file.split('.')[0];
    const kindOfPath = (u) => (u === '/' ? 'index' : u === '/cart' ? 'cart' : u === '/collections' ? 'list-collections'
      : u.startsWith('/search') ? 'search' : /^\/products\//.test(u) ? 'product' : /^\/collections\//.test(u) ? 'collection'
        : /^\/blogs\/[^/]+\/./.test(u) ? 'article' : /^\/blogs\//.test(u) ? 'blog' : /^\/pages\/[^/]+$/.test(u) ? 'page'
          : u.includes('404') ? '404' : 'other');
    const fingerprint = {};
    for (const [file, tpl] of Object.entries(templates[shop])) {
      const secs = Object.entries(tpl.sections || {}).filter(([, s]) => !s.disabled);
      const types = new Set(secs.flatMap(([, s]) => sectionBlocks(s).map((b) => b.type)));
      fingerprint[file] = { ids: secs.map(([id]) => id), classes: [...types].map((t) => rootClasses(theme, t)).filter((c) => c.length) };
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
    // Feste Zuordnungen aus der Konfiguration haben Vorrang.
    Object.assign(result[shop], CONFIG.pages?.[shop] || {});
    console.log(`${shop}: ${Object.keys(result[shop]).length} Vorlagen zugeordnet, ${seen.length} Seiten gelesen`);
    await context.close();
  }
  fs.writeFileSync(PAGES_FILE, JSON.stringify(result, null, 1) + '\n');
  return result;
}

// ----------------------------------------------------------------------------- Aufnahme

async function preparePage(page, url) {
  await page.goto(url, { waitUntil: 'load', timeout: 90000 });
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => { img.loading = 'eager'; });
    await document.fonts?.ready;
  });
}

// Findet das Element: Abschnitt, dann ggf. Block (Typ, n-ter gleichartiger Block im Abschnitt).
async function locate(page, theme, sectionId, blocks, blockId) {
  const sectionSel = `[id^="shopify-section-template--"][id$="__${sectionId}"]`;
  const section = await page.$(sectionSel);
  if (!section) return { error: `Abschnitt ${sectionId} nicht auf der Seite` };
  if (!blockId) return { handle: section, how: 'section' };
  const block = blocks.find((b) => b.id === blockId);
  if (!block) return { error: `Block ${blockId} nicht in der Vorlage` };
  const same = blocks.filter((b) => b.type === block.type);
  const nth = same.indexOf(block);
  const classes = rootClasses(theme, block.type);
  if (!classes.length) return { error: `keine Klasse für ${block.type}`, section };
  const handle = await section.evaluateHandle((root, { classes, nth }) => {
    const sel = classes.map((c) => '.' + CSS.escape(c)).join(',');
    const all = [...root.querySelectorAll(sel)];
    const outer = all.filter((el) => !all.some((o) => o !== el && o.contains(el)));
    return outer[nth] || null;
  }, { classes, nth });
  const el = handle.asElement();
  if (!el) return { error: `Block ${blockId} (${block.type}, Nr. ${nth + 1}) nicht gefunden`, section };
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
    // Fixierte Elemente (Kopfzeile, Popups, Hinweise) verdecken sonst den Ausschnitt.
    for (const e of document.querySelectorAll('body *')) {
      const pos = getComputedStyle(e).position;
      if ((pos === 'fixed' || pos === 'sticky') && !e.contains(node) && !node.contains(e)) e.style.setProperty('visibility', 'hidden', 'important');
    }
    document.querySelectorAll('dialog[open]').forEach((d) => d.close());
  }, el);
  await page.waitForTimeout(700);
}

async function highlight(page, els) {
  await page.evaluate((nodes) => {
    for (const n of nodes) {
      n.style.setProperty('outline', '3px dashed #1f4fd1', 'important');
      n.style.setProperty('outline-offset', '4px', 'important');
    }
  }, els);
}

async function capture(page, el, vp, pad = 8) {
  const box = await page.evaluate((node) => {
    const r = node.getBoundingClientRect();
    return { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: r.height };
  }, el);
  if (!box.width || !box.height) return null;
  const clip = {
    x: Math.max(0, Math.floor(box.x - pad)),
    y: Math.max(0, Math.floor(box.y - pad)),
    width: Math.min(Math.ceil(box.width + 2 * pad), vp.width),
    height: Math.min(Math.ceil(box.height + 2 * pad), vp.maxHeight),
  };
  if (clip.x + clip.width > vp.width) clip.x = Math.max(0, vp.width - clip.width);
  return page.screenshot({ clip, fullPage: true, animations: 'disabled', type: 'png' });
}

const PY_WEBP = `
import io, sys
from PIL import Image, ImageStat
out, max_w, max_h, limit = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
im = Image.open(io.BytesIO(sys.stdin.buffer.read())).convert("RGB")
if im.width > max_w:
    im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
if max_h and im.height > max_h:
    im = im.crop((0, 0, im.width, max_h))
if ImageStat.Stat(im.convert("L")).stddev[0] < 6:  # leere Fläche (Block nicht gerendert)
    print(0, 0, 0, 0)
    sys.exit(0)
for q in (82, 76, 70, 64, 58, 50, 42):
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=q, method=6)
    if buf.tell() <= limit:
        break
open(out, "wb").write(buf.getvalue())
print(im.width, im.height, buf.tell(), q)
`;

function toWebp(png, out, maxW, maxH) {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const r = spawnSync('python3', ['-c', PY_WEBP, out, String(maxW), String(maxH || 0), String(MAX_BYTES)], { input: png });
  if (r.status !== 0) throw new Error('WebP-Umwandlung: ' + r.stderr.toString());
  const [w, h, bytes, q] = r.stdout.toString().trim().split(/\s+/).map(Number);
  if (!w) return null;
  return { width: w, height: h, bytes, quality: q };
}

// ----------------------------------------------------------------------------- Aufträge

function occurrences(templates, type) {
  const out = [];
  for (const [shop, files] of Object.entries(templates)) {
    for (const [file, tpl] of Object.entries(files)) {
      for (const [sid, sec] of Object.entries(tpl.sections || {})) {
        if (sec.disabled) continue;
        for (const b of sectionBlocks(sec)) if (b.type === type) out.push({ shop, template: file, section: sid, block: b.id });
      }
    }
  }
  return out;
}

async function shoot(browser, theme, templates, pages, jobs, manifest) {
  // Nach Shop, Sprache, Breite und Seite gruppieren: jede Seite nur einmal laden.
  const groups = new Map();
  for (const j of jobs) {
    const pagePath = pages[j.shop]?.[j.template];
    if (!pagePath) { console.warn(`  ${j.name}: keine Seite für ${j.shop}/${j.template} (--discover oder "pages" in shots.config.json)`); continue; }
    const key = [j.shop, j.lang, j.variant, pagePath].join(' ');
    if (!groups.has(key)) groups.set(key, { ...j, pagePath, jobs: [] });
    groups.get(key).jobs.push(j);
  }
  const contexts = {};
  for (const g of groups.values()) {
    const vp = VIEWPORTS[g.variant];
    const ctxKey = g.shop + g.variant + g.lang;
    if (!contexts[ctxKey]) {
      contexts[ctxKey] = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: vp.deviceScaleFactor,
        reducedMotion: 'reduce', locale: g.lang === 'de' ? 'de-DE' : 'en-US', isMobile: g.variant === 'mobile', hasTouch: g.variant === 'mobile' });
      await unlock(contexts[ctxKey], 'https://' + CONFIG.shops[g.shop].domain);
    }
    const page = await contexts[ctxKey].newPage();
    const url = 'https://' + CONFIG.shops[g.shop].domain + withNoskip(langPath(g.pagePath, g.lang));
    try {
      await preparePage(page, url);
    } catch (e) {
      console.warn(`  ${url}: ${e.message.split('\n')[0]}`);
      await page.close();
      continue;
    }
    for (const j of g.jobs) {
      const tpl = templates[j.shop][j.template];
      const blocks = sectionBlocks(tpl.sections[j.section]);
      let found = await locate(page, theme, j.section, blocks, j.scope === 'section' ? null : j.block);
      let target = found.handle;
      let how = found.how;
      if (target && j.scope === 'parent') {
        const parentId = blocks.find((b) => b.id === j.block)?.parent;
        const marks = [];
        for (const b of blocks.filter((b) => b.type === blocks.find((x) => x.id === j.block).type && b.parent === parentId)) {
          const f = await locate(page, theme, j.section, blocks, b.id);
          if (f.handle) marks.push(f.handle);
        }
        const p = parentId ? await locate(page, theme, j.section, blocks, parentId) : { handle: found.section, how: 'section' };
        if (p.handle) { if (j.highlight !== false) await highlight(page, marks); target = p.handle; how = 'parent'; }
      }
      if (!target && found.section && j.fallback !== false) { target = found.section; how = 'section'; }
      if (target && how === 'block' && j.minHeight) {
        const h = await target.evaluate((n) => n.getBoundingClientRect().height);
        if (h < j.minHeight && found.section) { await highlight(page, [target]); target = found.section; how = 'section'; }
      }
      if (j.scope === 'section' && j.block) {
        const b = await locate(page, theme, j.section, blocks, j.block);
        if (b.handle && j.highlight) await highlight(page, [b.handle]);
      }
      if (!target) { console.warn(`  ${j.name}: ${found.error}`); continue; }
      await settle(page, target);
      const png = await capture(page, target, vp, how === 'section' ? 0 : 8);
      if (!png) { console.warn(`  ${j.name}: Element ohne Größe (${url})`); continue; }
      const outRel = j.out;
      const info = j.thumb ? toWebp(png, path.join(SHOTS, outRel), THUMB.width, THUMB.maxHeight)
        : toWebp(png, path.join(SHOTS, outRel), vp.maxWidth, 0);
      if (!info) { console.warn(`  ${j.name}: Bild ist leer (${url}) – nicht gespeichert`); continue; }
      manifest[outRel] = { width: info.width, height: info.height, block: j.name, shop: j.shop, lang: j.lang,
        variant: j.variant, template: j.template, section: j.section, found: how };
      console.log(`  ${outRel}: ${info.width}×${info.height}, ${Math.round(info.bytes / 1024)} KB (${how})`);
    }
    await page.close();
  }
  for (const c of Object.values(contexts)) await c.close();
}

// ----------------------------------------------------------------------------- Start

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const theme = path.resolve(args.theme);
  if (!fs.existsSync(path.join(theme, 'blocks'))) throw new Error(`Theme-Repo nicht gefunden: ${theme} (--theme)`);
  const templates = loadTemplates(theme);
  const browser = await chromium.launch();
  try {
    let pages = fs.existsSync(PAGES_FILE) ? JSON.parse(fs.readFileSync(PAGES_FILE, 'utf8')) : null;
    if (args.discover || !pages) pages = await discover(browser, theme, templates);
    if (args.discover && !args.gallery && !args.candidates && !args.only) return;
    const manifest = fs.existsSync(MANIFEST_FILE) ? JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf8')) : {};
    const jobs = [];
    if (args.candidates) {
      const outDir = path.resolve(args.out || path.join(ROOT, '_candidates'));
      occurrences(templates, args.candidates).forEach((o, i) => {
        jobs.push({ ...o, name: args.candidates, lang: 'de', variant: 'desktop', scope: 'block', thumb: true,
          out: path.relative(SHOTS, path.join(outDir, `${args.candidates}-${String(i).padStart(2, '0')}-${o.shop}-${o.template}-${o.section}-${o.block}.webp`)) });
      });
      await shoot(browser, theme, templates, pages, jobs, {});
      return;
    }
    if (args.gallery) {
      const index = JSON.parse(fs.readFileSync(path.join(ROOT, 'content', 'blocks', 'index.json'), 'utf8'));
      const prefer = CONFIG.gallery_prefer || ['index.json'];
      for (const b of index) {
        const pick = CONFIG.pilots[b.slug] || CONFIG.gallery?.[b.slug] || occurrences(templates, b.slug)
          .filter((o) => pages[o.shop]?.[o.template])
          .sort((x, y) => (prefer.indexOf(y.template) >= 0) - (prefer.indexOf(x.template) >= 0))[0];
        if (!pick) { console.warn(`  ${b.slug}: keine Fundstelle auf einer bekannten Seite`); continue; }
        for (const lang of args.langs) {
          jobs.push({ ...pick, scope: pick.scope === 'parent' ? 'parent' : 'block', name: b.slug, lang, variant: 'desktop',
            thumb: true, minHeight: 90, out: `${lang}/thumbs/${b.slug}.webp` });
        }
      }
    } else {
      for (const [name, p] of Object.entries(CONFIG.pilots)) {
        if (args.only && !args.only.includes(name)) continue;
        for (const lang of args.langs) for (const variant of ['desktop', 'mobile']) {
          jobs.push({ ...p, name, lang, variant, out: `${lang}/${name}-${p.shop}-${variant}.webp` });
        }
      }
    }
    await shoot(browser, theme, templates, pages, jobs, manifest);
    const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
    fs.writeFileSync(MANIFEST_FILE, JSON.stringify(sorted, null, 1) + '\n');
  } finally {
    await browser.close();
  }
}

main().catch((e) => { console.error(e.message); process.exit(1); });
