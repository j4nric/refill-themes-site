# Ladezeit und SEO

Refill ist auf kurze Ladezeiten gebaut: wenig CSS und JavaScript, Bilder in passenden Größen, Teil-Aktualisierungen statt Seitenwechsel bei Filtern und Varianten. Die folgenden Einstellungen holen das Meiste heraus.

## Seiten vorab laden

**Theme-Einstellungen → „Layout“ → „Seitenwechsel“ → „Seiten vorab laden“**:

| Option | Wirkung |
|---|---|
| „Aus“ | Seiten laden erst beim Klick. |
| „Laden beim Zeigen (empfohlen)“ | Zeigt jemand auf einen Link (oder tippt ihn an), lädt der Browser die Seite schon vorher. Der Klick fühlt sich sofort an. |
| „Vollständig vorbereiten (am schnellsten)“ | Produkt- und Kollektionsseiten werden komplett im Hintergrund aufgebaut. Analyse-Tools von Drittanbietern können solche Seiten in seltenen Fällen als Aufruf zählen. |

Warenkorb, Kasse und Konto werden nie vorab geladen. Im Theme-Editor ist die Funktion aus.

**Seitenübergänge:** In Browsern, die es unterstützen, wandert beim Klick auf eine Produktkarte das Bild sanft in die Galerie, die Kopfzeile bleibt stehen. Bei „Bewegung reduzieren“ und im Editor ist das aus. Art und Abschalten: Theme-Einstellungen → „Animation“ → „Seitenübergang“, siehe [Animation](08-animation.md).

## Bilder

- **Größe**: Laden Sie Bilder in ausreichender Auflösung hoch (Produktbilder z. B. 2000 × 2000 px). Shopify liefert automatisch passende Größen und moderne Formate.
- **Seitenverhältnis**: Einheitliche Produktbilder (z. B. alle 1 : 1) wirken ruhiger. Blöcke wie **„Produktbilder“**, **„Produkte aus Kollektion“** und **„Kollektion: Produktliste“** haben eine Einstellung **„Seitenverhältnis“** bzw. **„Bild-Seitenverhältnis“**.
- **Freigestellte Produktfotos**: Im Block **„Bild“** passt **„Einpassen“ → „Ganzes Bild anzeigen“** zu Bildern auf der Farbe „Bildhintergrund“.
- **Erstes großes Bild**: Schalten Sie bei **„Bild“** bzw. **„Bild mit Text“** ganz oben auf der Seite **„Sofort laden (Bild ganz oben auf der Seite)“** ein – und nur dort. Alle anderen Bilder laden erst, wenn sie in die Nähe des Sichtbereichs kommen. Das erste Produktbild auf Produktseiten lädt das Theme automatisch bevorzugt.
- **Zweites Bild beim Überfahren** (Theme-Einstellungen → „Produktdaten“) lädt zusätzliche Bilder; lassen Sie es aus, wenn Ladezeit Vorrang hat.
- **Videos** von YouTube oder Vimeo laden erst nach einem Klick (YouTube im datenschutzfreundlichen Modus). Ein **„Vorschaubild (YouTube/Vimeo)“** verbessert die Darstellung.
- **Hintergrundvideos** (Abschnitt → „Hintergrund“, „Bild mit Text“ → „Video statt Bild“) laden erst, wenn sie sichtbar werden; vorher steht das Standbild. Ganz oben auf der Seite „Standbild sofort laden“ bzw. „Sofort laden“ einschalten; das Video lädt nie vorab.

## Apps und eigener Code

Jede App, die Skripte in den Shop einbindet, kostet Ladezeit. Deaktivieren Sie App-Einbettungen, die Sie nicht nutzen (Theme-Editor → **App-Einbettungen**). Code im Block oder Abschnitt **„Eigenes Liquid“** lädt auf jeder Seite, auf der er steht.

Auch der Knopf **„Follow on Shop“** (Fußzeile, Block „Social Media“) lädt Shopify-Module, die den ersten Bildaufbau am Handy verzögern können, und setzt Cookies von shop.app. Der Knopf ist deshalb standardmäßig aus; schalten Sie **„„Follow on Shop“ anzeigen“** nur ein, wenn Sie die Shop-App nutzen.

## Suchmaschinen: Grundlagen

- **Meta-Beschreibung**: Für die Startseite unter **Onlineshop → Einstellungen**, für Produkte, Kollektionen und Seiten unter **Suchmaschinen-Eintrag → Bearbeiten**.
- **Überschriften**: genau eine H1 pro Seite. Die Vorlagen sind so eingerichtet; bei eigenen Abschnitten wählen Sie im Block „Überschrift“ die **„Gliederungsebene (SEO)“**.
- **Alt-Texte** für alle Bilder, siehe [Barrierefreiheit](13-accessibility.md).
- **Brotkrumen** auf Kollektion, Produkt und Beitrag – sichtbar und als strukturierte Daten.

## Strukturierte Daten für Google und KI-Assistenten

Refill beschreibt Produkte für Suchmaschinen und KI-Einkaufsassistenten (z. B. ChatGPT, Perplexity) als strukturierte Daten nach schema.org. Diese Angaben sind im Shop nicht sichtbar.

**Automatisch enthalten:**

| Seite | Daten |
|---|---|
| Produkt | Produktgruppe mit allen Varianten, Preis und Verfügbarkeit, GTIN aus dem Barcode der Variante (nur gültige Längen), Größe/Farbe aus Optionsnamen, Grundpreis, Abo-Angebote je Plan, Zeilen der Datentafel als Produkteigenschaften, Bewertungen aus den Standard-Metafeldern `reviews.rating` und `reviews.rating_count` (von Bewertungs-Apps befüllt), Herkunftsland, Material und Zielgruppe aus optionalen Metafeldern |
| Startseite | Organisation (Name, Firmenname, Logo, Beschreibung, Kontakt, optional Adresse und USt-IdNr., Social-Media-Profile) und Website mit Suchfunktion |
| Kollektion, Produkt, Beitrag | Brotkrumen-Pfad |
| Beitrag | Blogbeitrag (Überschrift, Beschreibung, Beitragsbild, Autor, Veröffentlichungs- und Änderungsdatum, Herausgeber mit Logo, Schlagwörter) |
| Seiten mit Block „FAQ“ | Fragen und Antworten |

**Einstellungen:** **Theme-Einstellungen → „Strukturierte Daten“**. Die Werte müssen mit Ihren tatsächlichen Versand- und Rückgabebedingungen übereinstimmen.

| Einstellung | Bedeutung |
|---|---|
| „Versandkosten (Standard)“ | Betrag ohne Währung, z. B. `3.90`. Leer: keine Versandangaben. Ab der „Schwelle für kostenlosen Versand“ (Warenkorb) wird 0 gemeldet. |
| „Bearbeitungszeit bis Versand (Tage)“ | Tage bis zum Versand. |
| „Laufzeit mindestens (Tage)“ / „Laufzeit höchstens (Tage)“ | Zustelldauer. |
| „Rückgabefrist (Tage)“ | 0: keine Angaben zur Rückgabe. |
| „Rücksendekosten“ | „Kostenlos“ oder „Trägt die Kundschaft“. |
| „Metafeld: Datentafel“ | Für jede Art von Datentafel. Produkt-Metafeld vom Typ „Liste von Metaobjekten“, je Eintrag `amount` (Text) und `label` (Text) oder `ingredient` (Verweis mit Feld `name`); die Zeilen werden als Produkteigenschaften gemeldet. Im Stil Refill vorbelegt mit `custom.data_table`. |
| **Organisation** | |
| „Logo“ | Leer: Logo aus **Einstellungen → Marke**. |
| „Firmenname (rechtlich)“, „USt-IdNr.“ | Wie im Impressum. |
| „E-Mail für Kundenanfragen“, „Telefon“ | Leer: Angaben aus **Einstellungen → Shop-Details**. |
| „Geschäftsadresse übermitteln“ | Standard aus. Nur einschalten, wenn die Adresse öffentlich sein darf. |
| **Produkte** | |
| „Marke“ | „Hersteller des Produkts“ oder „Shopname (Eigenmarke)“. Ohne Hersteller gilt immer der Shopname. |
| „Metafeld: Herkunftsland“, „Metafeld: Material oder Zusammensetzung“, „Metafeld: Zielgruppe“ | Optionale Produkt-Metafelder (Text oder Textliste), vorbelegt mit `custom.country_of_origin`, `custom.material`, `custom.target_audience`. Fehlt das Metafeld, entfällt die Angabe. |

> Stil Mortar: Die Produktvorlage liest die Datentafel aus `custom.data_table`. Tragen Sie denselben Schlüssel unter „Metafeld: Datentafel“ ein, damit die Nährwerte auch in den strukturierten Daten erscheinen.

**Tipps:**

- Pflegen Sie den **Barcode** (GTIN/EAN) bei jeder Variante.
- Benennen Sie Optionen eindeutig, z. B. „Größe“, „Packungsgröße“, „Inhalt“, „Gewicht“ oder „Farbe“ – dann erkennt das Theme Größe und Farbe.
- Prüfen Sie Startseite und Produktseiten mit dem Test für Rich-Suchergebnisse von Google (search.google.com/test/rich-results). Leere Angaben lässt das Theme weg, damit die Daten gültig bleiben.

## Animation und Ladezeit

Effekte aus **Theme-Einstellungen → „Animation“** laden ihren Code nur, wenn mindestens einer eingeschaltet ist, und erst nach dem Seitenaufbau; das erste Bild (LCP) wird nie verzögert und es entsteht kein Layout-Versatz. In Messungen mit allen Effekten lagen die Werte innerhalb der üblichen Schwankung. Einzelheiten zu den Effekten stehen in [Animation](08-animation.md).

Weitere Funktionen, die Ladezeit sparen:

- **Bewertungssterne** lesen die Metafelder der Bewertungs-App direkt; auf Kollektionsseiten ist kein Skript der App nötig (siehe [Produktseite](06-product-page.md#bewertungssterne)).
- **„Automatisch beim Scrollen“** lädt weitere Produkte erst, wenn das Ende der Liste naht.
- **Vollbild-Galerie** und **„Häufig zusammen gekauft“** laden ihren Code erst, wenn der Block auf der Seite steht.
- **Nachrangige Funktionen** wie Popup, Countdown, „Set zusammenstellen“, Video und Scroll-Story laden ihren Code erst, wenn der Browser frei ist oder jemand die Seite bedient. Den ersten Bildaufbau blockiert nur das CSS für Grundgerüst und Kopfzeile; das große Bild ganz oben lädt der Browser zuerst.

## Messwerte

Mit Lighthouse erreichte der Demo-Shop am 21.11.2026 mobil (Median aus drei Läufen) auf der Startseite 90, der Produktseite 89 und der Kollektionsseite 87 Punkte, am Desktop 98–99; in der Barrierefreiheit 100 Punkte, beim Layout-Versatz (CLS) 0. Die Ladezeit Ihres Shops hängt stark von Bildern, Apps und Shopify-eigenen Skripten ab; messen Sie nach jeder größeren Änderung selbst, z. B. mit Lighthouse in den Entwicklertools von Chrome oder mit den Leistungsberichten im Shopify-Admin.
