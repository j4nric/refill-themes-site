#!/usr/bin/env python3
"""Baut die statische Website refill-themes.com nach _site/.

Aufruf:  python3 build.py
Abhängigkeit: Python 3.9+ und das Paket `markdown` (pip install markdown).

Seiten (en = Hauptsprache, de unter /de/):
    /                     /de/
    /docs/                /de/docs/              Handbuch-Übersicht
    /docs/<kapitel>/      /de/docs/<kapitel>/    ein Kapitel aus content/handbuch/<lang>/NN-<kapitel>.md
    /changelog/           /de/changelog/         aus 16-changelog.md
    /support/             /de/support/
    /privacy/             /de/datenschutz/
    /legal-notice/        /de/impressum/
    /404.html

Sprungmarken: Jede Überschrift bekommt eine `id` aus ihrem Text (klein, Umlaute als ae/oe/ue,
ß als ss, alles andere außer a–z und 0–9 wird zu einem Bindestrich). Diese ids sind
Schnittstelle (Info-Texte im Theme-Editor verlinken darauf) – Überschriften im Handbuch
daher nur mit Bedacht umbenennen.

Alle internen Links sind relativ, damit die Seite auch unter einer Unteradresse
(z. B. Vorschau unter github.io/<repo>/) funktioniert. Ausnahme: 404.html (Wurzelpfade).
"""
from __future__ import annotations

import html
import posixpath
import re
import shutil
import unicodedata
from datetime import date
from pathlib import Path
from urllib.parse import unquote

import markdown

ROOT = Path(__file__).resolve().parent
CONTENT = ROOT / "content" / "handbuch"
ASSETS = ROOT / "assets"
OUT = ROOT / "_site"
DOMAIN = "refill-themes.com"
BASE_URL = f"https://{DOMAIN}/"
SUPPORT_MAIL = "support@refill-themes.com"
LANGS = ("en", "de")
CHANGELOG_SLUG = "changelog"
YEAR = date.today().year


# --------------------------------------------------------------------------- Sprungmarken

def slugify(value: str, separator: str = "-") -> str:
    """Stabile id aus einer Überschrift, z. B. „Überschriften“ → „ueberschriften“."""
    text = value.strip().lower()
    for src, dst in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        text = text.replace(src, dst)
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-z0-9]+", separator, text).strip(separator)
    return text or "section"


# --------------------------------------------------------------------------- Texte

T = {
    "en": {
        "skip": "Skip to content",
        "nav_label": "Main",
        "nav_docs": "Guide",
        "nav_changelog": "Changelog",
        "nav_support": "Support",
        "lang_label": "Language",
        "footer_label": "Footer",
        "legal": "Legal notice",
        "privacy": "Privacy",
        "footer_note": "Refill – a Shopify theme for products people buy again.",
        "docs_title": "Merchant guide",
        "docs_lead": "Everything about setting up and running Refill: styles, sections and blocks, product data, subscriptions and mandatory information. All labels in quotation marks appear exactly like this in the theme editor.",
        "chapters": "Chapters",
        "on_page": "On this page",
        "prev": "Previous",
        "next": "Next",
        "chapter_nav": "Chapter navigation",
        "table": "Table",
        "version": "Version",
        "changelog_title": "Changelog",
        "home_title": "Refill – Shopify theme for subscriptions and refills",
        "home_desc": "Refill is a Shopify theme for products people buy again and again: supplements, tea, coffee and spices, natural cosmetics, pet food. Subscriptions, pack sizes, reorder and clear product facts are built in.",
    },
    "de": {
        "skip": "Zum Inhalt springen",
        "nav_label": "Hauptmenü",
        "nav_docs": "Handbuch",
        "nav_changelog": "Änderungen",
        "nav_support": "Support",
        "lang_label": "Sprache",
        "footer_label": "Fußzeile",
        "legal": "Impressum",
        "privacy": "Datenschutz",
        "footer_note": "Refill – ein Shopify-Theme für Produkte, die man nachkauft.",
        "docs_title": "Händler-Handbuch",
        "docs_lead": "Alles zum Einrichten und Betreiben von Refill: Stile, Abschnitte und Blöcke, Produktdaten, Abo und Pflichtangaben. Alle Bezeichnungen in Anführungszeichen sind genau so im Theme-Editor zu finden.",
        "chapters": "Kapitel",
        "on_page": "Auf dieser Seite",
        "prev": "Zurück",
        "next": "Weiter",
        "chapter_nav": "Kapitelnavigation",
        "table": "Tabelle",
        "version": "Version",
        "changelog_title": "Änderungsprotokoll",
        "home_title": "Refill – Shopify-Theme für Abo und Nachkauf",
        "home_desc": "Refill ist ein Shopify-Theme für Produkte, die Kunden regelmäßig nachkaufen: Nahrungsergänzung, Tee, Kaffee und Gewürze, Naturkosmetik, Tiernahrung. Abo, Packungsgrößen, „Erneut bestellen“ und klare Produktangaben sind eingebaut.",
    },
}

# Seitenpaare (en-Schlüssel, de-Schlüssel); Schlüssel = Pfad relativ zur Wurzel mit „/“ am Ende.
PAIRS = {
    "home": ("", "de/"),
    "docs": ("docs/", "de/docs/"),
    "changelog": ("changelog/", "de/changelog/"),
    "support": ("support/", "de/support/"),
    "privacy": ("privacy/", "de/datenschutz/"),
    "legal": ("legal-notice/", "de/impressum/"),
}


def key_of(page: str, lang: str) -> str:
    return PAIRS[page][LANGS.index(lang)]


# --------------------------------------------------------------------------- Links

def href(from_key: str | None, to_key: str, fragment: str = "") -> str:
    """Link von Seite `from_key` zu `to_key` (Verzeichnis mit „/“ oder Datei)."""
    frag = f"#{fragment}" if fragment else ""
    if from_key is None:  # 404.html: Wurzelpfade
        return "/" + to_key + frag
    from_dir = from_key.rstrip("/")
    if to_key.endswith("/") or to_key == "":
        target = to_key.rstrip("/") or "."
        rel = posixpath.relpath(target, from_dir or ".")
        rel = "./" if rel == "." else rel + "/"
    else:
        rel = posixpath.relpath(to_key, from_dir or ".")
    return rel + frag


def esc(text: str) -> str:
    return html.escape(text, quote=True)


# --------------------------------------------------------------------------- Handbuch

class Chapter:
    def __init__(self, lang: str, path: Path):
        self.lang = lang
        self.file = path.name
        self.number = int(path.name[:2])
        self.slug = path.stem[3:]
        self.source = path.read_text(encoding="utf-8")
        m = re.search(r"^# (.+)$", self.source, re.M)
        self.title = m.group(1).strip() if m else self.slug
        self.summary = ""
        self.html = ""
        self.toc: list[tuple[str, str]] = []  # (id, Text) der h2
        self.ids: set[str] = set()

    @property
    def key(self) -> str:
        prefix = "" if self.lang == "en" else "de/"
        if self.slug == CHANGELOG_SLUG:
            return f"{prefix}changelog/"
        return f"{prefix}docs/{self.slug}/"


def load_chapters(lang: str) -> list[Chapter]:
    files = sorted((CONTENT / lang).glob("[0-9][0-9]-*.md"))
    return [Chapter(lang, p) for p in files]


def chapter_summaries(chapters: list[Chapter]) -> None:
    """Kurzbeschreibungen aus der Tabelle „In this guide“ des ersten Kapitels."""
    by_file = {c.file: c for c in chapters}
    first = chapters[0]
    for m in re.finditer(r"^\|\s*\[[^\]]+\]\((\d{2}-[a-z0-9-]+\.md)\)\s*\|\s*(.+?)\s*\|\s*$", first.source, re.M):
        if m.group(1) in by_file:
            by_file[m.group(1)].summary = m.group(2)
    for c in chapters:
        if not c.summary:  # erster Satz des ersten Absatzes
            para = next((b for b in c.source.split("\n\n")[1:] if b.strip() and not b.startswith(("#", "|", ">"))), "")
            c.summary = re.split(r"(?<=[.!?])\s", para.strip().replace("\n", " "), maxsplit=1)[0]


def md_inline(text: str) -> str:
    out = markdown.markdown(text)
    return re.sub(r"^<p>(.*)</p>$", r"\1", out, flags=re.S)


DUP_ID = re.compile(r'id="([a-z0-9-]+_\d+)"')


def dup_id(value: str) -> str:
    m = re.fullmatch(r"([a-z0-9-]+)_(\d+)", value)
    return f"{m.group(1)}-{int(m.group(2)) + 1}" if m else value


MD_LINK = re.compile(r'href="(\d{2}-[a-z0-9-]+\.md)?(?:#([^"]*))?"')


def render_chapter(ch: Chapter, by_file: dict[str, Chapter], lang: str) -> None:
    src = ch.source
    # Platzhalter im Handbuch durch die Support-Adresse ersetzen.
    src = src.replace("[support e-mail]", f"[{SUPPORT_MAIL}](mailto:{SUPPORT_MAIL})")
    md = markdown.Markdown(
        extensions=["tables", "fenced_code", "sane_lists", "toc"],
        extension_configs={"toc": {"slugify": slugify, "toc_depth": "2-4"}},
    )
    body = md.convert(src)

    def fix_link(m: re.Match) -> str:
        file, frag = m.group(1), m.group(2)
        frag = slugify(unquote(frag)) if frag else ""
        if file is None:
            return f'href="#{frag}"'
        target = by_file.get(file)
        if target is None:
            raise SystemExit(f"{lang}/{ch.file}: Link auf unbekanntes Kapitel {file}")
        return f'href="{href(ch.key, target.key, frag)}"'

    body = MD_LINK.sub(fix_link, body)
    # h1 entfernen (steht im Seitenkopf), Tabellen scrollbar machen.
    body = re.sub(r"<h1[^>]*>.*?</h1>\s*", "", body, count=1, flags=re.S)
    label = T[lang]["table"]
    body = body.replace("<table>", f'<div class="table-wrap" role="region" aria-label="{label}" tabindex="0"><table>')
    body = body.replace("</table>", "</table></div>")
    # Externe Links kennzeichnen.
    body = re.sub(r'<a href="(https?://[^"]+)"', r'<a href="\1" rel="noopener"', body)
    # Doppelte Überschriften: zweite Fassung „-2“ statt „_1“ (markdown-toc).
    body = DUP_ID.sub(lambda m: f'id="{dup_id(m.group(1))}"', body)
    ch.html = body
    ch.ids = set(re.findall(r'id="([^"]+)"', body))

    def walk(tokens):
        for t in tokens:
            if t["level"] == 2:
                ch.toc.append((dup_id(t["id"]), html.unescape(t["name"])))
            walk(t["children"])

    walk(md.toc_tokens)


# --------------------------------------------------------------------------- Seitenrahmen

def layout(*, lang: str, key: str | None, page: str | None, title: str, description: str,
           body: str, alt_key: str | None, body_class: str = "") -> str:
    t = T[lang]
    k = key  # None bei 404
    other = "de" if lang == "en" else "en"
    canonical = BASE_URL + (key or "")
    head_alt = ""
    if key is not None and alt_key is not None:
        en_key, de_key = (key, alt_key) if lang == "en" else (alt_key, key)
        head_alt = (
            f'<link rel="canonical" href="{canonical}">\n'
            f'<link rel="alternate" hreflang="en" href="{BASE_URL + en_key}">\n'
            f'<link rel="alternate" hreflang="de" href="{BASE_URL + de_key}">\n'
            f'<link rel="alternate" hreflang="x-default" href="{BASE_URL + en_key}">\n'
        )
    home = key_of("home", lang)

    def nav_item(name: str, label: str) -> str:
        target = key_of(name, lang)
        current = page == name
        if name == "docs" and page == "chapter":
            current = True
        aria = ' aria-current="page"' if page == name else (' aria-current="true"' if current else "")
        return f'<li><a href="{href(k, target)}"{aria}>{esc(label)}</a></li>'

    switch_target = alt_key if alt_key is not None else key_of("home", other)
    if lang == "en":
        lang_links = (
            f'<span class="lang__current" aria-current="true">EN</span>'
            f'<a href="{href(k, switch_target)}" hreflang="de" lang="de" aria-label="Deutsch">DE</a>'
        )
    else:
        lang_links = (
            f'<a href="{href(k, switch_target)}" hreflang="en" lang="en" aria-label="English">EN</a>'
            f'<span class="lang__current" aria-current="true">DE</span>'
        )
    title_full = title if page == "home" else f"{title} – Refill"
    return f"""<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title_full)}</title>
<meta name="description" content="{esc(description)}">
{head_alt}<meta name="color-scheme" content="light dark">
<link rel="icon" href="{href(k, 'favicon.svg')}" type="image/svg+xml">
<link rel="stylesheet" href="{href(k, 'assets/style.css')}">
</head>
<body class="{body_class}">
<a class="skip-link" href="#main">{esc(t['skip'])}</a>
<header class="site-header">
  <div class="wrap site-header__inner">
    <a class="brand" href="{href(k, home)}"><span class="brand__mark" aria-hidden="true"></span>Refill<span class="brand__sub">Themes</span></a>
    <nav class="site-nav" aria-label="{esc(t['nav_label'])}">
      <ul>
        {nav_item('docs', t['nav_docs'])}
        {nav_item('changelog', t['nav_changelog'])}
        {nav_item('support', t['nav_support'])}
      </ul>
    </nav>
    <div class="lang" role="group" aria-label="{esc(t['lang_label'])}">{lang_links}</div>
  </div>
</header>
<main id="main" tabindex="-1">
{body}
</main>
<footer class="site-footer">
  <div class="wrap site-footer__inner">
    <p class="site-footer__note">{esc(t['footer_note'])}</p>
    <nav aria-label="{esc(t['footer_label'])}">
      <ul>
        <li><a href="{href(k, key_of('docs', lang))}">{esc(t['nav_docs'])}</a></li>
        <li><a href="{href(k, key_of('support', lang))}">{esc(t['nav_support'])}</a></li>
        <li><a href="{href(k, key_of('legal', lang))}">{esc(t['legal'])}</a></li>
        <li><a href="{href(k, key_of('privacy', lang))}">{esc(t['privacy'])}</a></li>
      </ul>
    </nav>
    <p class="site-footer__meta label">© {YEAR} Refill Themes</p>
  </div>
</footer>
</body>
</html>
"""


# --------------------------------------------------------------------------- Seiten

STYLES = {
    "en": [
        ("Refill", "Supplements, sports nutrition", "Factual, lines instead of fills, square shapes. Headings in Geist.",
         ("#F7F7F5", "#16191C", "#1F4FD1")),
        ("Mortar", "Spices, tea, coffee", "Cream and brown with a paprika red accent and sage as a third scheme. Headings in Fraunces.",
         ("#F7F2E8", "#2B2118", "#A9431E")),
        ("Pumice", "Natural cosmetics, drugstore", "Light cool neutral with a dusty rose accent and mint as a third scheme. Headings in Gilda Display.",
         ("#FAF8F6", "#22201F", "#A64A60")),
    ],
    "de": [
        ("Refill", "Nahrungsergänzung, Sporternährung", "Sachlich, Linien statt Flächen, eckige Formen. Überschriften in Geist.",
         ("#F7F7F5", "#16191C", "#1F4FD1")),
        ("Mortar", "Gewürze, Tee, Kaffee", "Creme und Braun mit Paprikarot als Akzent, Salbei als drittes Schema. Überschriften in Fraunces.",
         ("#F7F2E8", "#2B2118", "#A9431E")),
        ("Pumice", "Naturkosmetik, Drogerie", "Helles, kühles Neutral mit Altrosa als Akzent, Mint als drittes Schema. Überschriften in Gilda Display.",
         ("#FAF8F6", "#22201F", "#A64A60")),
    ],
}

FEATURES = {
    "en": [
        ("Subscriptions and refills", "Purchase options with a delivery timeline, subscription items in the cart, “Reorder” for returning customers.", "subscriptions"),
        ("Product facts as design", "Key figures, facts table and ingredients from metafields – empty data is hidden cleanly.", "product-data"),
        ("Mandatory information", "Manufacturer details (GPSR), information per product type and unit prices.", "compliance"),
        ("Ingredient glossary", "A page per ingredient and an A–Z overview, linked from product pages.", "ingredient-glossary"),
        ("Accessible", "Keyboard, focus, contrast and reduced motion – plus an optional accessibility panel.", "accessibility"),
        ("Fast", "Pages load ahead, images are sized correctly, structured data is included.", "performance-and-seo"),
    ],
    "de": [
        ("Abo und Nachkauf", "Kaufoptionen mit Lieferzeitleiste, Abo-Positionen im Warenkorb, „Erneut bestellen“ für Stammkunden.", "subscriptions"),
        ("Produktangaben als Gestaltung", "Kennzahlen, Datentafel und Inhaltsstoffe aus Metafeldern – fehlende Daten werden sauber ausgeblendet.", "product-data"),
        ("Pflichtangaben", "Herstellerangaben (GPSR), Angaben je Produktart und Grundpreis.", "compliance"),
        ("Inhaltsstoff-Lexikon", "Eine Seite je Inhaltsstoff und eine Übersicht von A bis Z, verlinkt von den Produktseiten.", "ingredient-glossary"),
        ("Barrierearm", "Tastatur, Fokus, Kontrast und reduzierte Bewegung – dazu ein optionales Bedienhilfen-Panel.", "accessibility"),
        ("Schnell", "Seiten laden vor, Bilder in passender Größe, strukturierte Daten inklusive.", "performance-and-seo"),
    ],
}

HOME = {
    "en": {
        "eyebrow": "Shopify theme",
        "lead": "A Shopify theme for products people buy again and again: supplements, tea, coffee and spices, natural cosmetics and drugstore products, pet food. Subscriptions, pack sizes, reorder and clear product facts are built in.",
        "cta_docs": "Read the guide",
        "cta_support": "Get support",
        "figures": [("Styles", "3"), ("Guide chapters", "{chapters}"), ("Version", "{version}"), ("Languages", "EN · DE")],
        "figures_label": "Refill at a glance",
        "styles_title": "Three styles, one code base",
        "styles_lead": "All three styles share the same code, blocks and metafields. They differ in design, home page, product template and the terms used for servings and prices.",
        "styles_more": "Compare the styles",
        "features_title": "Built in",
        "demo_title": "Demo stores",
        "demo_status": "Coming soon",
        "demo_text": "The demo stores for Refill, Mortar and Pumice are being prepared and will be linked here. The theme will be available in the Shopify Theme Store; the link follows.",
    },
    "de": {
        "eyebrow": "Shopify-Theme",
        "lead": "Ein Shopify-Theme für Produkte, die Kunden regelmäßig nachkaufen: Nahrungsergänzung, Tee, Kaffee und Gewürze, Naturkosmetik und Drogerieartikel, Tiernahrung. Abo, Packungsgrößen, „Erneut bestellen“ und klare Produktangaben sind eingebaut.",
        "cta_docs": "Zum Handbuch",
        "cta_support": "Support",
        "figures": [("Stile", "3"), ("Handbuch-Kapitel", "{chapters}"), ("Version", "{version}"), ("Sprachen", "EN · DE")],
        "figures_label": "Refill in Zahlen",
        "styles_title": "Drei Stile, ein Code",
        "styles_lead": "Alle drei Stile teilen Code, Blöcke und Metafelder. Sie unterscheiden sich in Gestaltung, Startseite, Produktvorlage und den Begriffen für Portion und Preis.",
        "styles_more": "Stile vergleichen",
        "features_title": "Eingebaut",
        "demo_title": "Demo-Shops",
        "demo_status": "Folgen in Kürze",
        "demo_text": "Die Demo-Shops für Refill, Mortar und Pumice werden gerade vorbereitet und hier verlinkt. Das Theme erscheint im Shopify Theme Store; der Link folgt.",
    },
}


def page_home(lang: str, chapters: list[Chapter], version: str) -> str:
    h, t = HOME[lang], T[lang]
    key = key_of("home", lang)
    docs = key_of("docs", lang)
    prefix = "" if lang == "en" else "de/"
    figures = "".join(
        f'<div class="figures__cell"><dt class="label">{esc(l)}</dt><dd class="data">{esc(v.format(chapters=len(chapters), version=version))}</dd></div>'
        for l, v in h["figures"]
    )
    styles = "".join(
        f"""<li class="style">
  <div class="style__swatches" aria-hidden="true">{''.join(f'<span style="background:{c}"></span>' for c in colors)}</div>
  <h3 class="style__name">{esc(name)}</h3>
  <p class="label">{esc(industry)}</p>
  <p>{esc(text)}</p>
</li>"""
        for name, industry, text, colors in STYLES[lang]
    )
    features = "".join(
        f'<li class="feature"><h3 class="feature__title"><a href="{href(key, prefix + "docs/" + slug + "/")}">{esc(title)}</a></h3><p>{esc(text)}</p></li>'
        for title, text, slug in FEATURES[lang]
    )
    body = f"""<section class="hero wrap" aria-labelledby="hero-title">
  <p class="label">{esc(h['eyebrow'])}</p>
  <h1 id="hero-title" class="hero__title">Refill</h1>
  <p class="hero__lead">{esc(h['lead'])}</p>
  <p class="actions">
    <a class="button" href="{href(key, docs)}">{esc(h['cta_docs'])}</a>
    <a class="button button--secondary" href="{href(key, key_of('support', lang))}">{esc(h['cta_support'])}</a>
  </p>
  <dl class="figures" aria-label="{esc(h['figures_label'])}">{figures}</dl>
</section>
<section class="band wrap" aria-labelledby="styles-title">
  <h2 id="styles-title">{esc(h['styles_title'])}</h2>
  <p class="band__lead">{esc(h['styles_lead'])}</p>
  <ul class="styles">{styles}</ul>
  <p><a class="link-arrow" href="{href(key, prefix + 'docs/presets/')}">{esc(h['styles_more'])}</a></p>
</section>
<section class="band wrap" aria-labelledby="features-title">
  <h2 id="features-title">{esc(h['features_title'])}</h2>
  <ul class="features">{features}</ul>
</section>
<section class="band wrap" aria-labelledby="demo-title">
  <div class="notice">
    <h2 id="demo-title">{esc(h['demo_title'])} <span class="badge">{esc(h['demo_status'])}</span></h2>
    <p>{esc(h['demo_text'])}</p>
  </div>
</section>"""
    return layout(lang=lang, key=key, page="home", title=t["home_title"], description=t["home_desc"],
                  body=body, alt_key=key_of("home", "de" if lang == "en" else "en"), body_class="page-home")


def docs_sidebar(lang: str, key: str, chapters: list[Chapter], current: Chapter | None) -> tuple[str, str]:
    t = T[lang]
    items = []
    for c in chapters:
        aria = ' aria-current="page"' if c is current else ""
        items.append(f'<li><a href="{href(key, c.key)}"{aria}><span class="data">{c.number:02d}</span> {esc(c.title)}</a></li>')
    lst = "<ol class=\"chapter-list\">" + "".join(items) + "</ol>"
    desktop = f'<nav class="docs-nav docs-nav--wide" aria-label="{esc(t["chapters"])}"><p class="label">{esc(t["chapters"])}</p>{lst}</nav>'
    mobile = (
        f'<nav class="docs-nav docs-nav--narrow" aria-label="{esc(t["chapters"])}"><details><summary>'
        f'{esc(t["chapters"])}</summary>{lst}</details></nav>'
    )
    return desktop, mobile


def page_docs_index(lang: str, chapters: list[Chapter]) -> str:
    t = T[lang]
    key = key_of("docs", lang)
    rows = "".join(
        f'<li class="toc-card"><a href="{href(key, c.key)}"><span class="data">{c.number:02d}</span>'
        f'<span class="toc-card__title">{esc(c.title)}</span></a><p>{md_inline(c.summary)}</p></li>'
        for c in chapters
    )
    desktop, mobile = docs_sidebar(lang, key, chapters, None)
    body = f"""<div class="wrap docs">
  {desktop}
  <div class="docs__main">
    <h1>{esc(t['docs_title'])}</h1>
    <p class="lead">{esc(t['docs_lead'])}</p>
    <ol class="toc-cards">{rows}</ol>
  </div>
</div>"""
    return layout(lang=lang, key=key, page="docs", title=t["docs_title"], description=t["docs_lead"],
                  body=body, alt_key=key_of("docs", "de" if lang == "en" else "en"))


def page_chapter(lang: str, ch: Chapter, chapters: list[Chapter], alt: Chapter | None) -> str:
    t = T[lang]
    key = ch.key
    i = chapters.index(ch)
    prev_c = chapters[i - 1] if i > 0 else None
    next_c = chapters[i + 1] if i + 1 < len(chapters) else None
    desktop, mobile = docs_sidebar(lang, key, chapters, ch)
    toc = ""
    if len(ch.toc) > 1 and ch.slug != CHANGELOG_SLUG:
        toc = (f'<nav class="on-page" aria-labelledby="on-page-title"><h2 id="on-page-title" class="label">{esc(t["on_page"])}</h2><ul>'
               + "".join(f'<li><a href="#{i_}">{esc(n)}</a></li>' for i_, n in ch.toc)
               + "</ul></nav>")
    pager = '<nav class="pager" aria-label="' + esc(t["chapter_nav"]) + '">'
    if prev_c:
        pager += f'<a class="pager__prev" href="{href(key, prev_c.key)}" rel="prev"><span class="label">{esc(t["prev"])}</span>{esc(prev_c.title)}</a>'
    if next_c:
        pager += f'<a class="pager__next" href="{href(key, next_c.key)}" rel="next"><span class="label">{esc(t["next"])}</span>{esc(next_c.title)}</a>'
    pager += "</nav>"
    page = "changelog" if ch.slug == CHANGELOG_SLUG else "chapter"
    body = f"""<div class="wrap docs">
  {desktop}
  <div class="docs__main">
    {mobile}
    <article class="prose">
      <p class="label"><a href="{href(key, key_of('docs', lang))}">{esc(t['docs_title'])}</a> · {ch.number:02d}</p>
      <h1>{esc(ch.title)}</h1>
      {toc}
      {ch.html}
    </article>
    {pager}
  </div>
</div>"""
    return layout(lang=lang, key=key, page=page, title=ch.title, description=re.sub(r"<[^>]+>", "", md_inline(ch.summary)),
                  body=body, alt_key=alt.key if alt else None)


def page_simple(lang: str, page: str, title: str, description: str, inner: str) -> str:
    key = key_of(page, lang)
    body = f'<div class="wrap simple"><article class="prose">\n<h1>{esc(title)}</h1>\n{inner}\n</article></div>'
    return layout(lang=lang, key=key, page=page, title=title, description=description, body=body,
                  alt_key=key_of(page, "de" if lang == "en" else "en"))


def page_support(lang: str) -> str:
    key = key_of("support", lang)
    docs = href(key, key_of("docs", lang))
    faq = href(key, ("" if lang == "en" else "de/") + "docs/faq/")
    changelog = href(key, key_of("changelog", lang))
    mail = f'<a href="mailto:{SUPPORT_MAIL}">{SUPPORT_MAIL}</a>'
    if lang == "en":
        title, desc = "Support", "Questions about the Refill theme? Write to support@refill-themes.com – with your store address, theme version and a screenshot."
        inner = f"""<p class="lead">Questions about Refill, something not working as described? Write to us – we are happy to help.</p>
<div class="contact">
  <p class="label">E-mail</p>
  <p class="contact__mail">{mail}</p>
</div>
<h2 id="what-to-include">What to include in your request</h2>
<ul>
  <li><strong>Store address</strong> – your <code>…myshopify.com</code> address (not only your own domain).</li>
  <li><strong>Theme version</strong> – for example <span class="data">0.9.0</span>. Changes per version are listed in the <a href="{changelog}">changelog</a>.</li>
  <li><strong>The page concerned</strong> – a link to the product, collection or page where it happens.</li>
  <li><strong>A screenshot</strong> or short screen recording, ideally with the theme editor open on the block or section concerned.</li>
  <li>What you expected and what happened instead. If it only happens on phones or in one browser, please say so.</li>
</ul>
<p>Please do not send passwords or staff account access by e-mail. If we need access to your store, we will ask for it as a collaborator request.</p>
<h2 id="response-time">When you will hear back</h2>
<p>We answer requests in the order they arrive, on working days. Complete information (above) saves a round of questions.</p>
<h2 id="before-you-write">Before you write</h2>
<p>Many questions are answered in the <a href="{docs}">merchant guide</a>. A good place to start is the <a href="{faq}">FAQ</a> – for example when a block does not appear or a metafield shows no value.</p>"""
    else:
        title, desc = "Support", "Fragen zum Theme Refill? Schreiben Sie an support@refill-themes.com – mit Shop-Adresse, Theme-Version und Screenshot."
        inner = f"""<p class="lead">Fragen zu Refill, oder etwas funktioniert nicht wie beschrieben? Schreiben Sie uns – wir helfen gern.</p>
<div class="contact">
  <p class="label">E-Mail</p>
  <p class="contact__mail">{mail}</p>
</div>
<h2 id="was-in-die-anfrage-gehoert">Was in Ihre Anfrage gehört</h2>
<ul>
  <li><strong>Shop-Adresse</strong> – Ihre Adresse <code>…myshopify.com</code> (nicht nur die eigene Domain).</li>
  <li><strong>Theme-Version</strong> – zum Beispiel <span class="data">0.9.0</span>. Was sich je Version geändert hat, steht im <a href="{changelog}">Änderungsprotokoll</a>.</li>
  <li><strong>Die betroffene Seite</strong> – ein Link auf das Produkt, die Kollektion oder Seite, auf der es auftritt.</li>
  <li><strong>Ein Screenshot</strong> oder eine kurze Bildschirmaufnahme, am besten mit geöffnetem Theme-Editor beim betroffenen Block oder Abschnitt.</li>
  <li>Was Sie erwartet haben und was stattdessen passiert ist. Wenn es nur am Handy oder in einem Browser auftritt, schreiben Sie das bitte dazu.</li>
</ul>
<p>Bitte senden Sie keine Passwörter oder Zugänge zu Mitarbeiterkonten per E-Mail. Brauchen wir Zugriff auf Ihren Shop, fragen wir über eine Mitarbeiteranfrage (Collaborator) an.</p>
<h2 id="wann-sie-antwort-bekommen">Wann Sie Antwort bekommen</h2>
<p>Wir beantworten Anfragen in der Reihenfolge ihres Eingangs, an Werktagen. Vollständige Angaben (oben) ersparen eine Rückfrage.</p>
<h2 id="bevor-sie-schreiben">Bevor Sie schreiben</h2>
<p>Viele Fragen beantwortet das <a href="{docs}">Händler-Handbuch</a>. Ein guter Einstieg sind die <a href="{faq}">häufigen Fragen</a> – zum Beispiel, wenn ein Block nicht erscheint oder ein Metafeld keinen Wert zeigt.</p>"""
    return page_simple(lang, "support", title, desc, inner)


def page_legal(lang: str) -> str:
    if lang == "de":
        inner = """<div class="placeholder" role="note">
  <p class="label">Platzhalter</p>
  <p><strong>Angaben folgen.</strong> Die Anbieterkennzeichnung nach § 5 DDG (Name und Anschrift, Kontakt, gegebenenfalls Registereintrag und Umsatzsteuer-Identifikationsnummer) wird hier ergänzt, bevor die Seite öffentlich beworben wird.</p>
</div>
<h2 id="kontakt">Kontakt</h2>
<p>E-Mail: <a href="mailto:support@refill-themes.com">support@refill-themes.com</a></p>"""
        return page_simple(lang, "legal", "Impressum", "Impressum von refill-themes.com.", inner)
    de_link = href(key_of("legal", "en"), key_of("legal", "de"))
    inner = f"""<p class="lead">The legal notice (Impressum) required by German law is published in German.</p>
<p><a class="link-arrow" href="{de_link}" hreflang="de">Impressum (German)</a></p>
<h2 id="contact">Contact</h2>
<p>E-mail: <a href="mailto:support@refill-themes.com">support@refill-themes.com</a></p>"""
    return page_simple(lang, "legal", "Legal notice", "Legal notice of refill-themes.com.", inner)


def page_privacy(lang: str) -> str:
    legal = href(key_of("privacy", lang), key_of("legal", lang))
    if lang == "de":
        inner = f"""<p class="lead">Diese Website ist bewusst schlicht: keine Cookies, kein Tracking, keine Analyse-Werkzeuge, keine Schriften oder Skripte von fremden Servern.</p>
<h2 id="verantwortlicher">Verantwortlicher</h2>
<p>Verantwortlich für die Datenverarbeitung auf dieser Website ist der im <a href="{legal}">Impressum</a> genannte Anbieter.</p>
<h2 id="hosting">Hosting bei GitHub Pages</h2>
<p>Die Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf einer Seite verarbeitet GitHub technisch notwendige Daten, insbesondere Ihre IP-Adresse, Datum und Uhrzeit, die aufgerufene Adresse sowie Browser- und Systemangaben (Server-Logs). GitHub nutzt diese Daten, um die Seite auszuliefern und die Sicherheit des Dienstes zu gewährleisten. Dabei können Daten in die USA übermittelt werden.</p>
<p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in einer sicheren und zuverlässigen Bereitstellung der Website. Einzelheiten: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">Datenschutzerklärung von GitHub</a>.</p>
<h2 id="keine-cookies-kein-tracking">Keine Cookies, kein Tracking</h2>
<p>Diese Website setzt keine Cookies, verwendet keine Analyse- oder Tracking-Dienste und lädt keine Inhalte von Drittanbietern (keine externen Schriften, Skripte oder eingebetteten Medien).</p>
<h2 id="kontakt-per-e-mail">Kontakt per E-Mail</h2>
<p>Wenn Sie uns per E-Mail schreiben, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Wir löschen sie, wenn sie dafür nicht mehr nötig sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
<h2 id="ihre-rechte">Ihre Rechte</h2>
<p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO) sowie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</p>
<p class="label">Stand: November 2026</p>"""
        return page_simple(lang, "privacy", "Datenschutz", "Datenschutzerklärung von refill-themes.com: GitHub Pages, keine Cookies, kein Tracking.", inner)
    inner = f"""<p class="lead">This website is deliberately simple: no cookies, no tracking, no analytics, no fonts or scripts from third-party servers.</p>
<h2 id="controller">Controller</h2>
<p>The controller for data processing on this website is the provider named in the <a href="{legal}">legal notice</a>.</p>
<h2 id="hosting">Hosting on GitHub Pages</h2>
<p>This website is served by GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you open a page, GitHub processes technically necessary data, in particular your IP address, date and time, the requested address and browser and system information (server logs). GitHub uses this data to deliver the page and to keep the service secure. Data may be transferred to the USA.</p>
<p>The legal basis is Art. 6(1)(f) GDPR; our legitimate interest is providing the website securely and reliably. Details: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub's privacy statement</a>.</p>
<h2 id="no-cookies-no-tracking">No cookies, no tracking</h2>
<p>This website sets no cookies, uses no analytics or tracking services and loads no content from third parties (no external fonts, scripts or embedded media).</p>
<h2 id="contact-by-e-mail">Contact by e-mail</h2>
<p>If you write to us by e-mail, we process your details to answer your request (Art. 6(1)(b) or (f) GDPR). We delete them once they are no longer needed for this and no statutory retention obligations apply.</p>
<h2 id="your-rights">Your rights</h2>
<p>You have the right of access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR), and the right to lodge a complaint with a data protection supervisory authority.</p>
<p class="label">Last updated: November 2026</p>"""
    return page_simple(lang, "privacy", "Privacy", "Privacy policy of refill-themes.com: GitHub Pages, no cookies, no tracking.", inner)


def page_404() -> str:
    body = """<div class="wrap simple"><article class="prose">
<p class="label">404</p>
<h1>Page not found</h1>
<p>This page does not exist (anymore). Try the <a href="/docs/">merchant guide</a> or go to the <a href="/">home page</a>.</p>
<p lang="de">Diese Seite gibt es nicht (mehr). Zum <a href="/de/docs/">Händler-Handbuch</a> oder zur <a href="/de/">Startseite</a>.</p>
</article></div>"""
    return layout(lang="en", key=None, page=None, title="Page not found", description="Page not found.",
                  body=body, alt_key=None)


# --------------------------------------------------------------------------- Build

def write(key: str, content: str) -> None:
    path = OUT / key / "index.html" if (key == "" or key.endswith("/")) else OUT / key
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def main() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    shutil.copytree(ASSETS, OUT / "assets")
    shutil.copyfile(ASSETS / "favicon.svg", OUT / "favicon.svg")

    chapters = {lang: load_chapters(lang) for lang in LANGS}
    by_slug = {lang: {c.slug: c for c in chapters[lang]} for lang in LANGS}
    version = "0.0.0"
    log = by_slug["en"].get(CHANGELOG_SLUG)
    if log:
        m = re.search(r"^## (\d+\.\d+\.\d+)", log.source, re.M)
        version = m.group(1) if m else version

    pages: list[tuple[str, str]] = []  # (en_key, de_key) für die Sitemap
    for lang in LANGS:
        other = "de" if lang == "en" else "en"
        by_file = {c.file: c for c in chapters[lang]}
        chapter_summaries(chapters[lang])
        for c in chapters[lang]:
            render_chapter(c, by_file, lang)
        write(key_of("home", lang), page_home(lang, chapters[lang], version))
        write(key_of("docs", lang), page_docs_index(lang, chapters[lang]))
        for c in chapters[lang]:
            write(c.key, page_chapter(lang, c, chapters[lang], by_slug[other].get(c.slug)))
        write(key_of("support", lang), page_support(lang))
        write(key_of("legal", lang), page_legal(lang))
        write(key_of("privacy", lang), page_privacy(lang))

    for name, (en_key, de_key) in PAIRS.items():
        pages.append((en_key, de_key))
    for c in chapters["en"]:
        if c.slug != CHANGELOG_SLUG and c.slug in by_slug["de"]:
            pages.append((c.key, by_slug["de"][c.slug].key))

    (OUT / "404.html").write_text(page_404(), encoding="utf-8")
    (OUT / "CNAME").write_text(DOMAIN + "\n", encoding="utf-8")
    (OUT / ".nojekyll").write_text("", encoding="utf-8")
    (OUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\n\nSitemap: {BASE_URL}sitemap.xml\n", encoding="utf-8")

    urls = []
    for en_key, de_key in pages:
        alts = (f'<xhtml:link rel="alternate" hreflang="en" href="{BASE_URL + en_key}"/>'
                f'<xhtml:link rel="alternate" hreflang="de" href="{BASE_URL + de_key}"/>'
                f'<xhtml:link rel="alternate" hreflang="x-default" href="{BASE_URL + en_key}"/>')
        for k in (en_key, de_key):
            urls.append(f"  <url><loc>{BASE_URL + k}</loc>{alts}</url>")
    (OUT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + "\n".join(urls) + "\n</urlset>\n", encoding="utf-8")
    count = len(list(OUT.rglob("*.html")))
    print(f"_site/: {count} HTML-Seiten, {len(urls)} URLs in sitemap.xml, Version {version}")


if __name__ == "__main__":
    main()
