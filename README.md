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

Adressen: Englisch ist Hauptsprache (`/`), Deutsch unter `/de/`. Handbuch `/docs/<kapitel>/` bzw.
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

Keine Cookies, kein Tracking, keine externen Schriften oder Skripte, kein JavaScript. Bitte so lassen – die
Datenschutzerklärung (`/privacy/`, `/de/datenschutz/`) setzt das voraus.

## Offen

- **Impressum:** `/de/impressum/` ist ein markierter Platzhalter („Angaben folgen“). Die Angaben in `build.py`,
  Funktion `page_legal`, eintragen.
- Demo-Shops und Theme-Store-Link auf der Startseite (`HOME` in `build.py`), sobald sie öffentlich sind.
