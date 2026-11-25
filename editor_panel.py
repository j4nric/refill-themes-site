#!/usr/bin/env python3
"""Nachbau der Shopify-Editor-Seitenleiste für einen Block oder eine Section des Themes Refill.

Zwei Teile:

1. Einlesen (braucht das Theme-Repo, nur lokal):

       python3 editor_panel.py --theme ../cadence-theme                 # Pilot-Blöcke + Block-Liste
       python3 editor_panel.py --theme ../cadence-theme text image      # nur diese
       python3 editor_panel.py --theme ../cadence-theme --print text de # HTML einer Seitenleiste ausgeben

   Liest das {% schema %} aus blocks/<name>.liquid bzw. sections/<name>.liquid, löst alle t:-Schlüssel über
   locales/en.default.schema.json und locales/de.schema.json auf und schreibt das Ergebnis nach
   content/blocks/<name>.json (beide Sprachen). Außerdem content/blocks/index.json: alle öffentlichen Blöcke,
   die in den Demo-Vorlagen (demo/<preset>/files/templates/*.json) vorkommen, mit Namen und Kategorie.
   Erneut laufen lassen, wenn sich ein Block im Theme ändert – die JSON-Dateien werden dann einfach ersetzt.

2. Darstellen (ohne Theme-Repo, nutzt build.py): render_panel(data, lang, prefix="") erzeugt HTML.
   Jede Einstellung bekommt die Sprungmarke <prefix><setting_id> (auf der Block-Seite ohne Präfix,
   z. B. #layout; eingebettet woanders mit Präfix, z. B. #image-banner-layout).
"""
from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "content" / "blocks"
PILOTS = ("image-banner", "text", "icon-with-text")
LANGS = ("en", "de")
LOCALE_FILES = {"en": "en.default.schema.json", "de": "de.schema.json"}
PRESETS = ("refill", "mortar", "pumice")


# --------------------------------------------------------------------------- Einlesen

def load_json(path: Path):
    """JSON mit Kommentar-Kopf (Shopify-Locales, Vorlagen)."""
    text = path.read_text(encoding="utf-8")
    text = re.sub(r"^\s*/\*.*?\*/", "", text, flags=re.S)
    return json.loads(text)


def read_schema(path: Path) -> dict:
    src = path.read_text(encoding="utf-8")
    m = re.search(r"{%-?\s*schema\s*-?%}(.*?){%-?\s*endschema\s*-?%}", src, re.S)
    if not m:
        raise SystemExit(f"{path}: kein {{% schema %}}")
    return json.loads(m.group(1))


class Translator:
    def __init__(self, theme: Path):
        self.locales = {lang: load_json(theme / "locales" / f) for lang, f in LOCALE_FILES.items()}
        self.missing: set[str] = set()

    def lookup(self, key: str, lang: str):
        node = self.locales[lang]
        for part in key.split("."):
            if not isinstance(node, dict) or part not in node:
                return None
            node = node[part]
        return node if isinstance(node, str) else None

    def t(self, value, lang: str) -> str:
        if not isinstance(value, str):
            return value
        if not value.startswith("t:"):
            return value
        key = value[2:]
        found = self.lookup(key, lang) or self.lookup(key, "en")
        if found is None:
            self.missing.add(key)
            return key.rsplit(".", 1)[-1].replace("_", " ").capitalize()
        return found

    def both(self, value) -> dict:
        return {lang: self.t(value, lang) for lang in LANGS}


def strip_tags(text: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", text)).strip()


CMP = re.compile(r"^(?P<ref>(?:block|section)\.settings\.\w+|settings\.\w+)\s*(?:(?P<op>==|!=|>=|<=|>|<|contains)\s*(?P<val>.+))?$")


def parse_visible_if(expr: str, by_id: dict, tr: Translator, theme_labels: dict) -> list | None:
    """„{{ block.settings.a == 'x' and block.settings.b }}“ → Liste aus Bedingungen und „and“/„or“."""
    body = re.sub(r"^\{\{\s*|\s*\}\}$", "", expr.strip())
    parts = re.split(r"\s+(and|or)\s+", body)
    out = []
    for i, part in enumerate(parts):
        if i % 2:
            out.append(part)
            continue
        m = CMP.match(part.strip())
        if not m:
            return None
        ref, op, val = m.group("ref"), m.group("op"), m.group("val")
        sid = ref.rsplit(".", 1)[-1]
        local = not ref.startswith("settings.")
        target = by_id.get(sid) if local else None
        if target is not None:
            label = tr.both(target.get("label", sid))
        elif not local and sid in theme_labels:
            label = theme_labels[sid]
        else:
            label = {lang: sid for lang in LANGS}
        cond = {"setting": sid if (local and target is not None) else None, "label": label}
        if op is None:
            cond["op"] = "on"
        else:
            val = val.strip()
            if val == "blank":
                cond["op"] = "filled" if op == "!=" else "empty"
            elif val in ("true", "false"):
                on = (val == "true") == (op == "==")
                cond["op"] = "on" if on else "off"
            elif val[:1] in "'\"":
                raw = val[1:-1]
                opt = next((o for o in (target or {}).get("options", []) if o["value"] == raw), None)
                cond["op"] = "is" if op == "==" else ("is_not" if op == "!=" else op)
                cond["value"] = tr.both(opt["label"]) if opt else {lang: raw for lang in LANGS}
            else:
                cond["op"] = op
                cond["value"] = {lang: val for lang in LANGS}
        out.append(cond)
    return out


def theme_setting_labels(theme: Path, tr: Translator) -> dict:
    path = theme / "config" / "settings_schema.json"
    labels = {}
    if path.exists():
        for group in load_json(path):
            for s in group.get("settings", []):
                if "id" in s:
                    labels[s["id"]] = tr.both(s.get("label", s["id"]))
    return labels


def default_value(s: dict, tr: Translator, lang: str):
    d = s.get("default")
    if d is None:
        return None
    if isinstance(d, str) and d.startswith("t:"):
        d = tr.t(d, lang)
    if s["type"] in ("richtext", "inline_richtext") and isinstance(d, str):
        d = strip_tags(d)
    return d


def extract(theme: Path, name: str, tr: Translator, theme_labels: dict) -> dict:
    for kind, folder in (("block", "blocks"), ("section", "sections")):
        path = theme / folder / f"{name}.liquid"
        if path.exists():
            break
    else:
        raise SystemExit(f"{name}: weder blocks/{name}.liquid noch sections/{name}.liquid gefunden")
    schema = read_schema(path)
    settings = schema.get("settings", [])
    by_id = {s["id"]: s for s in settings if "id" in s}
    category = None
    for p in schema.get("presets", []):
        if p.get("category"):
            category = p["category"]
            break
    data = {
        "slug": name,
        "kind": kind,
        "source": f"{folder}/{name}.liquid",
        "source_sha1": hashlib.sha1(path.read_bytes()).hexdigest()[:12],
        "accepts_blocks": bool(schema.get("blocks")),
    }
    for lang in LANGS:
        items = []
        for s in settings:
            t = s["type"]
            item = {"type": t}
            if t in ("header", "paragraph"):
                item["content"] = tr.t(s.get("content", ""), lang)
                items.append(item)
                continue
            item["id"] = s["id"]
            item["label"] = tr.t(s.get("label", s["id"]), lang)
            if s.get("info"):
                item["info"] = tr.t(s["info"], lang)
            dv = default_value(s, tr, lang)
            if dv is not None:
                item["default"] = dv
            if "options" in s:
                item["options"] = [{"value": o["value"], "label": tr.t(o["label"], lang)} for o in s["options"]]
            for k in ("min", "max", "step"):
                if k in s:
                    item[k] = s[k]
            if "unit" in s:
                item["unit"] = tr.t(s["unit"], lang)
            if "placeholder" in s:
                item["placeholder"] = tr.t(s["placeholder"], lang)
            if s.get("visible_if"):
                parsed = parse_visible_if(s["visible_if"], by_id, tr, theme_labels)
                item["visible_if"] = [c if isinstance(c, str) else {**c, "label": c["label"][lang],
                                                                     **({"value": c["value"][lang]} if "value" in c else {})}
                                      for c in parsed] if parsed is not None else s["visible_if"]
            items.append(item)
        data[lang] = {
            "name": tr.t(schema.get("name", name), lang),
            "category": tr.t(category, lang) if category else None,
            "settings": items,
        }
    return data


def demo_block_index(theme: Path, tr: Translator) -> list[dict]:
    """Alle öffentlichen Blöcke (ohne „_“), die in einer Demo-Vorlage sichtbar vorkommen."""
    uses: dict[str, list] = {}
    for preset in PRESETS:
        for f in sorted((theme / "demo" / preset / "files" / "templates").glob("*.json")):
            tpl = load_json(f)
            for sid, sec in tpl.get("sections", {}).items():
                if sec.get("disabled"):
                    continue

                def walk(blocks):
                    for bid, b in (blocks or {}).items():
                        if b.get("disabled"):
                            continue
                        uses.setdefault(b["type"], []).append(f"{preset}/{f.name}#{sid}/{bid}")
                        walk(b.get("blocks"))

                walk(sec.get("blocks"))
    out = []
    for slug in sorted(uses):
        if slug.startswith("_") or not (theme / "blocks" / f"{slug}.liquid").exists():
            continue
        schema = read_schema(theme / "blocks" / f"{slug}.liquid")
        category = next((p["category"] for p in schema.get("presets", []) if p.get("category")), None)
        out.append({
            "slug": slug,
            "name": tr.both(schema.get("name", slug)),
            "category": tr.both(category) if category else None,
            "demo_uses": len(uses[slug]),
        })
    return out


# --------------------------------------------------------------------------- Darstellen

UI = {
    "en": {
        "default": "Default:", "empty": "empty", "on": "On", "off": "Off", "select": "Select",
        "no_image": "No image selected", "no_video": "No video selected", "options": "{n} options",
        "only_if": "Only shown when ", "and": " and ", "or": " or ",
        "c_on": "{l} is on", "c_off": "{l} is off", "c_filled": "{l} is filled in", "c_empty": "{l} is empty",
        "c_is": "{l} is {v}", "c_is_not": "{l} is not {v}", "c_cmp": "{l} {op} {v}",
        "scheme": "Scheme {n}", "pick": "Select {what}", "link": "Paste a link or search",
        "align": {"left": "Left", "center": "Center", "right": "Right"},
        "what": {"product": "product", "collection": "collection", "page": "page", "blog": "blog",
                 "link_list": "menu", "product_list": "products", "collection_list": "collections",
                 "metaobject": "entry", "font_picker": "font"},
        "back": "Back", "q": ("“", "”"), "panel_note": "Shown with default values.",
        "nested": "Can contain other blocks (for example heading, text, button).",
    },
    "de": {
        "default": "Standard:", "empty": "leer", "on": "An", "off": "Aus", "select": "Auswählen",
        "no_image": "Kein Bild ausgewählt", "no_video": "Kein Video ausgewählt", "options": "{n} Optionen",
        "only_if": "Nur sichtbar, wenn ", "and": " und ", "or": " oder ",
        "c_on": "{l} an ist", "c_off": "{l} aus ist", "c_filled": "{l} ausgefüllt ist", "c_empty": "{l} leer ist",
        "c_is": "{l} auf {v} steht", "c_is_not": "{l} nicht auf {v} steht", "c_cmp": "{l} {op} {v} ist",
        "scheme": "Schema {n}", "pick": "{what} auswählen", "link": "Link einfügen oder suchen",
        "align": {"left": "Links", "center": "Mitte", "right": "Rechts"},
        "what": {"product": "Produkt", "collection": "Kollektion", "page": "Seite", "blog": "Blog",
                 "link_list": "Menü", "product_list": "Produkte", "collection_list": "Kollektionen",
                 "metaobject": "Eintrag", "font_picker": "Schrift"},
        "back": "Zurück", "q": ("„", "“"), "panel_note": "Angezeigt mit den Standardwerten.",
        "nested": "Kann weitere Blöcke enthalten (zum Beispiel Überschrift, Text, Button).",
    },
}

MD_LINK = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")


def esc(text) -> str:
    return html.escape(str(text), quote=True)


def info_html(text: str) -> str:
    """Info-Text: escapen, Markdown-Links als Links, **fett**."""
    out, pos = [], 0
    for m in MD_LINK.finditer(text):
        out.append(esc(text[pos:m.start()]))
        url = m.group(2)
        rel = ' rel="noopener"' if url.startswith("http") else ""
        out.append(f'<a href="{esc(url)}"{rel}>{esc(m.group(1))}</a>')
        pos = m.end()
    out.append(esc(text[pos:]))
    res = "".join(out)
    return re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", res)


def quote(text: str, lang: str) -> str:
    a, b = UI[lang]["q"]
    return f"{a}{text}{b}"


def condition_html(cond: list | str, lang: str, prefix: str, ids: set[str]) -> str:
    u = UI[lang]
    if isinstance(cond, str):  # nicht lesbar: roh zeigen
        return esc(u["only_if"]) + f"<code>{esc(cond)}</code>"
    parts = []
    i = 0
    while i < len(cond):
        c = cond[i]
        if isinstance(c, str):
            parts.append(esc(u[c]))
            i += 1
            continue
        # „A ist x oder A ist y“ zusammenfassen
        values = [c.get("value")]
        j = i
        while (c["op"] == "is" and j + 2 < len(cond) and cond[j + 1] == "or" and isinstance(cond[j + 2], dict)
               and cond[j + 2].get("setting") == c.get("setting") and cond[j + 2]["op"] == "is"):
            values.append(cond[j + 2]["value"])
            j += 2
        label = esc(quote(c["label"], lang))
        if c.get("setting") and c["setting"] in ids:
            label = f'<a href="#{prefix}{c["setting"]}">{label}</a>'
        if "value" in c:
            v = esc(u["or"]).join(esc(quote(x, lang)) for x in values)
        else:
            v = ""
        key = {"on": "c_on", "off": "c_off", "filled": "c_filled", "empty": "c_empty",
               "is": "c_is", "is_not": "c_is_not"}.get(c["op"], "c_cmp")
        parts.append(u[key].format(l=label, v=v, op=esc(c["op"])))
        i = j + 1
    return esc(u["only_if"]) + "".join(parts) + "."


def option_label(item: dict, value) -> str:
    for o in item.get("options", []):
        if o["value"] == value:
            return o["label"]
    return "" if value is None else str(value)


def fmt_number(n) -> str:
    return (f"{n:g}" if isinstance(n, float) else str(n))


SR = '<span class="visually-hidden">{}</span>'


def control_html(item: dict, lang: str) -> str:
    """Steuerelement: Bild aria-hidden, Wert als lesbarer Text."""
    u = UI[lang]
    t = item["type"]
    d = item.get("default")
    sr_default = SR.format(esc(u["default"]) + " ")
    if t == "checkbox":
        on = bool(d)
        return (f'<div class="ep__row"><span class="ep-check{" is-on" if on else ""}" aria-hidden="true"></span>'
                f'<span class="ep__value">{sr_default}{esc(u["on"] if on else u["off"])}</span></div>')
    if t in ("select", "radio"):
        opts = item.get("options", [])
        cur = option_label(item, d if d is not None else (opts[0]["value"] if opts else ""))
        cur_cls = ' class="is-current"'
        lst = "".join(f'<li{cur_cls if o["value"] == d else ""}>{esc(o["label"])}</li>' for o in opts)
        more = (f'<details class="ep__opts"><summary>{esc(u["options"].format(n=len(opts)))}</summary>'
                f'<ul>{lst}</ul></details>') if len(opts) > 1 else ""
        return (f'<div class="ep-select"><span class="ep__value">{sr_default}{esc(cur)}</span>'
                f'<span class="ep-select__chev" aria-hidden="true"></span></div>{more}')
    if t == "range":
        lo, hi = item.get("min", 0), item.get("max", 100)
        val = d if d is not None else lo
        pct = 0 if hi == lo else round((val - lo) / (hi - lo) * 100)
        unit = item.get("unit", "")
        sep = "" if unit in ("%", "°", "") and lang == "en" else (" " if unit in ("%",) else " ")
        if unit in ("°",):
            sep = ""
        text = f"{fmt_number(val)}{sep}{unit}".strip()
        return (f'<div class="ep__row"><span class="ep-range" aria-hidden="true" style="--p:{pct}%">'
                f'<span class="ep-range__fill"></span><span class="ep-range__thumb"></span></span>'
                f'<span class="ep__value ep__value--box">{sr_default}{esc(text)}</span></div>')
    if t == "color":
        col = d if isinstance(d, str) and re.fullmatch(r"#[0-9a-fA-F]{3,8}", d or "") else None
        style = f' style="--swatch:{col}"' if col else ""
        return (f'<div class="ep__row"><span class="ep-swatch{"" if col else " is-empty"}"{style} aria-hidden="true"></span>'
                f'<span class="ep__value">{sr_default}{esc(col.upper() if col else u["empty"])}</span></div>')
    if t == "color_scheme":
        n = re.sub(r"\D", "", str(d or "1")) or "1"
        return (f'<div class="ep__row"><span class="ep-scheme" aria-hidden="true">Aa</span>'
                f'<span class="ep__value">{sr_default}{esc(u["scheme"].format(n=n))}</span></div>')
    if t == "text_alignment":
        cur = d or "left"
        btns = "".join(f'<span class="ep-align__btn ep-align__btn--{a}{" is-on" if a == cur else ""}"><i></i><i></i><i></i></span>'
                       for a in ("left", "center", "right"))
        return (f'<div class="ep__row"><span class="ep-align" aria-hidden="true">{btns}</span>'
                f'<span class="ep__value">{sr_default}{esc(u["align"].get(cur, cur))}</span></div>')
    if t in ("image_picker", "video"):
        icon = "ep-media--video" if t == "video" else ""
        return (f'<div class="ep__row ep__row--stack"><span class="ep-media {icon}" aria-hidden="true">'
                f'<span class="ep-media__icon"></span><span class="ep-media__btn">{esc(u["select"])}</span></span>'
                f'<span class="ep__value ep__value--soft">{esc(u["no_video"] if t == "video" else u["no_image"])}</span></div>')
    if t in u["what"]:
        what = u["what"][t]
        return (f'<div class="ep-input ep-input--picker"><span class="ep__value ep__value--soft">'
                f'{esc(u["pick"].format(what=what))}</span></div>')
    if t in ("url", "video_url"):
        return f'<div class="ep-input"><span class="ep__value ep__value--soft">{esc(d or u["link"])}</span></div>'
    if t in ("liquid", "html"):
        return f'<div class="ep-input ep-input--code"><code class="ep__value">{esc(d or "")}</code></div>'
    # text, textarea, richtext, inline_richtext, number …
    tall = t in ("textarea", "richtext")
    rich = t in ("richtext", "inline_richtext")
    tools = ('<span class="ep-input__tools" aria-hidden="true"><b>B</b><i>I</i><u>U</u></span>' if rich else "")
    if d not in (None, ""):
        val = f'<span class="ep__value">{sr_default}{esc(d)}</span>'
    else:
        val = f'<span class="ep__value ep__value--soft">{esc(item.get("placeholder") or u["empty"])}</span>'
    return f'<div class="ep-input{" ep-input--tall" if tall else ""}">{tools}{val}</div>'


def render_panel(data: dict, lang: str, prefix: str = "", level: int = 3) -> str:
    """HTML der Seitenleiste. level = Überschriftenebene des Blocknamens (Felder darunter +1/+2)."""
    d = data[lang]
    u = UI[lang]
    h_title, h1, h2 = (f"h{min(level + i, 6)}" for i in range(3))
    ids = {s["id"] for s in d["settings"] if "id" in s}
    rows = []
    in_group = False
    for s in d["settings"]:
        t = s["type"]
        if t == "header":
            in_group = True
            rows.append(f'<{h1} class="ep__group">{esc(s["content"])}</{h1}>')
            continue
        if t == "paragraph":
            rows.append(f'<p class="ep__para">{info_html(s["content"])}</p>')
            continue
        h = h2 if in_group else h1
        parts = [f'<div class="ep__field" id="{esc(prefix + s["id"])}">',
                 f'<{h} class="ep__label">{esc(s["label"])}</{h}>',
                 control_html(s, lang)]
        if s.get("info"):
            parts.append(f'<p class="ep__info">{info_html(s["info"])}</p>')
        if s.get("visible_if"):
            parts.append(f'<p class="ep__cond">{condition_html(s["visible_if"], lang, prefix, ids)}</p>')
        parts.append("</div>")
        rows.append("".join(parts))
    nested = f'<p class="ep__para">{esc(u["nested"])}</p>' if data.get("accepts_blocks") else ""
    return (f'<div class="ep" lang="{lang}">'
            f'<div class="ep__head"><span class="ep__back" aria-hidden="true"></span>'
            f'<{h_title} class="ep__title">{esc(d["name"])}</{h_title}></div>'
            f'<p class="ep__note">{esc(u["panel_note"])}</p>'
            f'<div class="ep__body">{"".join(rows)}{nested}</div></div>')


def load_data(slug: str) -> dict:
    return json.loads((OUT / f"{slug}.json").read_text(encoding="utf-8"))


# --------------------------------------------------------------------------- Aufruf

def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("names", nargs="*", help="Blöcke/Sections (Dateiname ohne .liquid); leer = Pilot-Blöcke")
    ap.add_argument("--theme", default=str(ROOT.parent / "cadence-theme"), help="Pfad zum Theme-Repo")
    ap.add_argument("--print", nargs=2, metavar=("NAME", "LANG"), help="HTML einer Seitenleiste ausgeben")
    args = ap.parse_args()
    theme = Path(args.theme)
    if args.print:
        print(render_panel(load_data(args.print[0]), args.print[1]))
        return 0
    if not (theme / "locales").is_dir():
        raise SystemExit(f"Theme-Repo nicht gefunden: {theme} (--theme angeben)")
    tr = Translator(theme)
    labels = theme_setting_labels(theme, tr)
    OUT.mkdir(parents=True, exist_ok=True)
    names = args.names or list(PILOTS)
    for name in names:
        data = extract(theme, name, tr, labels)
        (OUT / f"{name}.json").write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        print(f"content/blocks/{name}.json: {data['de']['name']} / {data['en']['name']}, "
              f"{sum(1 for s in data['en']['settings'] if 'id' in s)} Einstellungen")
    index = demo_block_index(theme, tr)
    (OUT / "index.json").write_text(json.dumps(index, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"content/blocks/index.json: {len(index)} Blöcke aus den Demo-Vorlagen")
    if tr.missing:
        print("Ohne Übersetzung (Schlüsselname gezeigt):", ", ".join(sorted(tr.missing)), file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
