# refill-themes.com

Website zum Shopify-Theme **Refill**: Vorstellung, Händler-Handbuch (en/de), Support, Änderungsprotokoll,
Impressum und Datenschutz. Statisch gebaut mit einem kleinen Python-Skript, veröffentlicht über GitHub Pages.

## Bauen

```sh
pip install markdown
python3 build.py        # schreibt alles nach _site/
python3 check_links.py  # tote interne Links und fehlende Sprungmarken
python3 -m http.server -d _site 8000   # Vorschau unter http://localhost:8000/
```

Beim Push auf `main` baut `.github/workflows/pages.yml` die Seite, prüft die Links und veröffentlicht `_site/`
(manuell auch über „Run workflow“). `_site/` wird nicht eingecheckt.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `build.py` | Markdown → HTML, Seitenrahmen, Texte der festen Seiten, `sitemap.xml`, `robots.txt`, `404.html`, `CNAME` |
| `check_links.py` | Linkprüfung über `_site/` |
| `sync_handbuch.py` | holt die Handbuch-Kapitel aus dem Theme-Repo |
| `content/handbuch/{en,de}/NN-name.md` | Kapitel (Kopie aus dem Theme-Repo – dort bearbeiten, nicht hier) |
| `assets/style.css` | die einzige CSS-Datei (Tokens nach `DESIGN.md` des Themes, Systemschriften) |
| `assets/favicon.svg` | Favicon |
| `editor_panel.py` | liest Block-Schemas aus dem Theme-Repo → `content/blocks/<block>.json`, `content/blocks/index.json`; erzeugt den Nachbau der Editor-Seitenleiste |
| `content/blocks/texts.json` | Texte der Block-Seiten (Einleitung, Tipps, Verweis ins Handbuch; optional Klickweg, Hinweis, Alt-Texte) – für jeden Block der Galerie Pflicht |
| `shots.mjs`, `shots.config.json` | Screenshots aus den Demo-Shops → `assets/shots/<de\|en>/`, Maße, Quelle und Markierungen in `content/shots/<block>.json` |

Adressen: Englisch ist Hauptsprache (`/`), Deutsch unter `/de/`. Handbuch-Einstieg „Was möchten Sie tun?“ `/docs/`,
Block-Galerie `/docs/blocks/`, Block-Seiten `/docs/blocks/<block>/` für alle 86 Blöcke (jeweils auch unter `/de/`), Kapitel `/docs/<kapitel>/` bzw.
`/de/docs/<kapitel>/` (Kapitelname = Dateiname ohne Nummer), Änderungsprotokoll `/changelog/` bzw. `/de/changelog/`
(aus `16-changelog.md`), Support `/support/`, Datenschutz `/privacy/` bzw. `/de/datenschutz/`, Impressum
`/de/impressum/` (englisch `/legal-notice/` als Verweis).

## Sprungmarken

Jede Überschrift im Handbuch bekommt eine `id` aus ihrem Text: klein geschrieben, ä/ö/ü/ß als ae/oe/ue/ss, alles
außer a–z und 0–9 wird zu einem Bindestrich. Beispiel: „Überschriften“ → `#ueberschriften`, „Land und Sprache in der
Fußzeile“ → `#land-und-sprache-in-der-fusszeile`. Doppelte Überschriften auf einer Seite bekommen `-2`, `-3` …

Die ids sind Schnittstelle: Info-Texte im Theme-Editor verlinken z. B. auf
`https://refill-themes.com/de/docs/sections-and-blocks/#seitenvorlagen`. Überschriften daher nur mit Bedacht umbenennen.
Links zwischen Kapiteln im Markdown (`06-product-page.md#häufig-zusammen-gekauft`) rechnet `build.py` auf dieselben ids
um; `check_links.py` meldet Sprungmarken, die es nicht gibt.

## Block-Seiten: Editor-Nachbau und Screenshots

Jeder Block der Galerie (`content/blocks/index.json`, alle öffentlichen Blöcke aus den Demo-Vorlagen) hat eine
Block-Seite in en und de, immer mit demselben Aufbau:

1. **So sieht es aus** – über die volle Inhaltsbreite: Computer-Bild groß (srcset 800/1600 px), darunter Handy-Bild und
   die Liste „Im Bild markiert“. Nummern-Punkte liegen als HTML über dem Computer-Bild (Prozent-Koordinaten aus
   `content/shots/<block>.json`); dieselben Nummern stehen im Editor-Nachbau neben dem Feld. Die Punkte sind
   `aria-hidden`, die Liste darunter ist die Text-Alternative (mit Links zum Feld bzw. zur Seite des Unterblocks).
   Klick auf ein Bild öffnet es groß in einem `<dialog>` (Escape schließt, Fokus geht zurück); ohne JavaScript öffnet
   der Link einfach die Bilddatei.
2. **Wo finde ich das?** – Klickweg; die Seite im Editor ergibt sich aus der Vorlage des Bilds. Für Produkt- und
   Vorlagen-Blöcke ein Hinweis, wo sie wirken.
3. **So stellen Sie es ein** – Nachbau der Seitenleiste mit den Standardwerten. Sichtbar sind nur die Felder, die in der
   Standard-Konfiguration sichtbar sind; bedingte Felder stehen darunter zugeklappt, gruppiert nach der auslösenden
   Einstellung („Weitere Felder, wenn „Icon-Quelle“ auf „Eigenes Bild“ steht“).
4. **Tipps** – höchstens drei, aus Handbuch und Info-Texten; dazu ein Verweis ins Handbuch.

Blöcke ohne Bild: „Erneut bestellen“ (nur für angemeldete Kundschaft mit Bestellung) und „Passwortseite: Formular“
(die Demo-Shops zeigen unter `/password` die Seite von Shopify, nicht die des Themes) – dort steht ein Hinweis.

**Editor-Nachbau** – nach jeder Änderung eines Blocks im Theme neu erzeugen (braucht das Theme-Repo daneben):

```sh
python3 editor_panel.py --theme ../cadence-theme                    # alle Blöcke der Galerie + Block-Liste
python3 editor_panel.py --theme ../cadence-theme image-banner text  # nur diese
python3 editor_panel.py --print text de                             # HTML einer Seitenleiste ansehen
```

Das Skript liest das `{% schema %}` aus `blocks/<name>.liquid` (oder `sections/<name>.liquid`), löst die
`t:`-Schlüssel über `locales/en.default.schema.json` und `locales/de.schema.json` auf, wertet jedes `visible_if` mit den
Standardwerten aus (Block-Standard, bei `settings.*` der Standard aus `config/settings_schema.json`) und schreibt
`content/blocks/<name>.json`. `build.py` braucht das Theme-Repo nicht. Jede Einstellung bekommt auf der Block-Seite die
Sprungmarke `#<setting_id>` (z. B. `/de/docs/blocks/image-banner/#layout`); eingebettet woanders `#<block>-<setting_id>`
(`render_panel(data, lang, prefix="image-banner-")`). Info-Texte im Editor können darauf verlinken – Setting-IDs im
Theme daher nicht leichtfertig umbenennen. Liegt das Feld zugeklappt, öffnet ein kleines Inline-Skript den Bereich
beim Laden und bei `hashchange`; ohne JavaScript klappt man ihn selbst auf. Fehlt eine Übersetzung, meldet das Skript
den Schlüssel.

**Screenshots** (Node, Playwright mit Chromium, Python mit Pillow für WebP):

```sh
export STOREFRONT_PASSWORD=…        # Passwort der Demo-Shops; nie committen oder ausgeben
node shots.mjs                      # alle Blöcke, de + en, Computer (1280 px, Bild 1600 px) und Handy (390 px, Bild 780 px)
node shots.mjs --only text,heading  # nur diese Blöcke
node shots.mjs --only text --lang de --variant desktop   # schneller Probelauf
node shots.mjs --candidates text --out /tmp/text          # alle Fundstellen eines Blocks zum Aussuchen
node shots.mjs --selectors          # zeigt, über welche Klassen jeder Block im Shop gefunden wird
node shots.mjs --discover           # Seitenadressen der Demo-Vorlagen neu ermitteln (Sitemap)
```

Fundstelle: `shots.config.json` → `blocks` (fest; Shop, Vorlage, Abschnitt, Block, `scope` `block`/`section`/`parent`,
`highlight`), sonst automatisch die erste Fundstelle auf einer bekannten Seite (Reihenfolge `prefer`); klappt sie nicht,
die nächste. Kleine Blöcke (Produkttitel, Badge …) werden mit etwas Umgebung aufgenommen und gestrichelt markiert.
Sonderfälle in `blocks`: `scroll` (Fixierte Kaufleiste erscheint erst nach dem Scrollen), `addClass` (Kaufleiste am
Computer wie mit „Auch auf großen Bildschirmen“), `visit` (Zuletzt angesehen: vorher Produkte besuchen), `cart`
(Warenkorb-Blöcke: vorher Produkte über das Formular der Produktseite in den Warenkorb legen), `open` (Aufklapper
geöffnet), `unlock: false`, `unavailable` (kein Bild, Hinweis auf der Seite). `selectors` legt die Klassen eines Blocks
fest, wenn die automatische Erkennung (aus `blocks/<name>.liquid` bzw. dem Snippet, das `block.shopify_attributes`
bekommt) nicht reicht.

Markierungen: `markers` in `shots.config.json` ordnet je Block Einstellung → CSS-Selektor zu
(`{"setting": "show_vendor", "sel": ".product-title__vendor-link"}`). Ohne Eintrag gilt eine Heuristik: erstes h1–h6 →
Überschrift-Einstellung, `.prose`/`p` → Text, Icon, `img` → Bild, `a.button` → Knopf; dazu die direkten Unterblöcke mit
eigener Block-Seite (Überschrift, Text, Button …). Ausgabe je Block und Sprache:
`assets/shots/<de|en>/<block>-desktop.webp` (bis 1600 px), `<block>-desktop-800.webp`, `<block>-mobile.webp`,
`thumbs/<block>.webp` (Galerie), jedes Bild unter 200 KB. Danach `python3 build.py && python3 check_links.py`, dann
Bilder und `content/shots/` committen.

Die Demo-Shops sperren bei zu vielen Abrufen kurz (HTTP 429, „Just a moment…“). `shots.mjs` wartet dann, versucht es
noch zweimal und nimmt sonst die Fundstelle in einem anderen Shop. Nicht mehrere Läufe gleichzeitig starten.

Neuer Block im Theme: `editor_panel.py`, Eintrag in `content/blocks/texts.json` (sonst bricht `build.py` ab), bei
Bedarf Fundstelle/Markierungen in `shots.config.json`, `node shots.mjs --only <block>`.

**Links aus dem Handbuch:** `build.py` verlinkt in den Kapiteln Block-Namen auf die Block-Seiten – je Abschnitt (h2) das
erste Vorkommen, und nur eindeutige Stellen: erste Spalte einer Tabelle mit Spaltenkopf „Block“ und Namen in
Anführungszeichen direkt neben dem Wort Block (Block „Gruppe“, “Group” block). Die Markdown-Dateien bleiben unverändert.

## Handbuch aus dem Theme-Repo übernehmen

Das Handbuch wird im Theme-Repo gepflegt (`docs/handbuch/{de,en}/`). Zum Aktualisieren:

```sh
python3 sync_handbuch.py /pfad/zum/theme-repo
python3 build.py && python3 check_links.py
git add content/handbuch && git commit -m "Handbuch aus dem Theme-Repo übernommen"
git push
```

Das Skript kopiert geänderte Kapitel und löscht Kapitel, die es im Theme-Repo nicht mehr gibt. Der Platzhalter
`[support e-mail]` im Handbuch wird beim Bauen durch die Support-Adresse ersetzt.

## Datenschutz

Keine Cookies, kein Tracking, keine externen Schriften oder Skripte. JavaScript nur als kleines Inline-Skript auf den
Block-Seiten (zugeklapptes Feld bei Sprungmarke öffnen, Bild groß im `<dialog>`); es speichert nichts und lädt nichts
nach, die Seiten funktionieren ohne. Bitte so lassen – die Datenschutzerklärung (`/privacy/`, `/de/datenschutz/`)
setzt das voraus.

## Offen

- **Impressum:** `/de/impressum/` ist ein markierter Platzhalter („Angaben folgen“). Die Angaben in `build.py`,
  Funktion `page_legal`, eintragen.
- Demo-Shops und Theme-Store-Link auf der Startseite (`HOME` in `build.py`), sobald sie öffentlich sind.
- Seiten für Sections (`sections/*.liquid`: Kopfzeile, Fußzeile, Produktempfehlungen …) nach dem Muster der
  Block-Seiten; `editor_panel.py` liest Sections schon, es fehlen Galerie, Texte und Fundstellen in `shots.mjs`.
- Bilder für „Erneut bestellen“ (braucht ein Kundenkonto mit Bestellung) und „Passwortseite: Formular“.
