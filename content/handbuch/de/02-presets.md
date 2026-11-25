# Stile (Presets)

Refill gibt es in drei Stilen. Alle drei nutzen denselben Code, dieselben Blöcke und dieselben Metafelder. Sie unterscheiden sich in Gestaltung, Startseite, Produktvorlage und den Begriffen für Portion und Preis.

## Überblick

| | Refill | Mortar | Pumice |
|---|---|---|---|
| Branche | Nahrungsergänzung, Sporternährung | Gewürze, Tee, Kaffee | Naturkosmetik, Drogerie |
| Gestaltung | sachlich, Linien statt Flächen, eckige Formen | Creme und Braun, Paprikarot als Akzent, Salbei als drittes Schema | helles, kühles Neutral, Altrosa als Akzent, Mint als drittes Schema |
| Überschriften-Schrift | Geist | Fraunces | Gilda Display |
| „Ecken“ | „Eckig“ | „Leicht gerundet“ | „Weich gerundet“ |
| „Bezeichnung der Portion“ | „Tagesdosis“ | „Tasse“ | „Anwendung“ |
| „Preis pro“ | „Tag“ | „Tasse“ | „Anwendung“ |
| „Stil eigener Badges“ | „Neutral (Rahmen)“ | „Akzentfarbe“ | „Neutral (Rahmen)“ |
| Pflichtangaben: „Produktart“ | „Nahrungsergänzung“ | „Lebensmittel (z. B. Tee, Gewürze)“ | „Kosmetik“ |
| Datentafel: „Tafeltyp“ | „Nahrungsergänzung (Menge · % NRV)“ | „Lebensmittel (pro 100 g · pro Portion)“ | keine Datentafel |
| Kopfzeile | Unterstrichene Links, Ankündigung dunkel | Versalien mit weitem Abstand, Untermenü gleitet auf, Suche klappt in der Leiste aus, Globus, klebt immer | Menüpunkte als Pillen, Untermenü nach Inhalt mit Bildkacheln, ohne Linie |
| Produktgalerie | Raster | Slider mit Vorschaubildern links | Mosaik |
| Kollektion | 5 Spalten, 4 : 5 | 4 Spalten, 1 : 1, Brecher-Kachel nach Produkt 4 | 3 Spalten, 4 : 5, breite Brecher-Kachel |
| Produktkarten beim Überfahren | Zoom mit Bewegung zur Maus | Zweites Bild, kein Zoom | Leichter Zoom |
| Animation (alle „Dezent“) | Abschnitte steigen auf, Seitenwechsel blendet über | Abschnitte blenden ein, Buttons geben beim Drücken nach | Abschnitte steigen auf, Überschriften zeilenweise, Seitenwechsel steigt auf |

Alle Werte lassen sich nachträglich ändern. Die Begriffe stehen unter **Theme-Einstellungen → „Produktdaten“**, Produktart und Tafeltyp in den Blöcken **„Pflichtangaben“** und **„Datentafel“** der Produktvorlage, Kopfzeile in [Kopfzeile und Navigation](04-header.md), Karten und Kollektion in [Kollektionen und Produktkarten](05-collections.md), Galerie in [Produktseite](06-product-page.md), Animation in [Animation](08-animation.md).

## Refill – Nahrungsergänzung

**Startseite:** Aufmacher, „Erneut bestellen“, „Vorteile mit Icons“, Bestseller, Kategorien, „Set zusammenstellen“, „So funktioniert es“, Angebot.

**Produktseite:** Produktbilder, Titel, Bewertungssterne, Preis, Kennzahlen (Tagesdosis, Portionen, Preis pro Tag, Reichweite), Variantenauswahl, Kaufoptionen mit Lieferzeitleiste, Kauf-Buttons, Lieferdatum, Abholung, „Häufig zusammen gekauft“, Siegel, Vorteilsliste, Beschreibung, „Pflege und Handhabung“ (Metafeld-Inhalt), Pflichtangaben, Produktsicherheit. Darunter der Abschnitt „Datentafel und Inhaltsstoffe“ mit **„Datentafel“** und **„Inhaltsstoffe: Im Fokus“**.

**Pflichtangaben:** Produktart „Nahrungsergänzung“. Die **„Standard-Bezeichnung (Nahrungsergänzung)“** und die **„Standard-Hinweise“** gelten für alle Produkte ohne eigenes Metafeld. Produkte, die keine Nahrungsergänzung sind (z. B. Proteinriegel), erhalten das Tag aus **„Ausschluss-Tag für Standardangaben“** (Standard `kein-nem`).

**Vorgeschlagene Metafelder:** `custom.data_table` (Datentafel), `custom.other_ingredients` (Zutaten), `custom.usage` (Verzehrempfehlung), `custom.warnings`, `custom.certifications`.

Die Vorlage **Produkt (Abo)** (`product.subscription`) stellt die Kaufoptionen direkt unter den Preis, siehe [Abo](10-subscriptions.md).

## Mortar – Gewürze, Tee, Kaffee

**Startseite:** Aufmacher (großer Titel links, Text rechts), „Gerade im Regal“ mit vier Produkten, „Erneut bestellen“, Kategorien, Herkunft, Probierset, Produktfinder, „So funktioniert es“, Blogbeiträge (aus dem Blog `news`; fehlt er, blendet sich der Abschnitt aus).

**Produktseite:** wie Refill, ohne Siegel-Block, mit Info-Popup „Welche Beutelgröße?“ und Vorteilen untereinander. Unter der Kaufspalte stehen **„Datentafel“** mit Tafeltyp Lebensmittel (Nährwert · pro 100 g · pro Portion) und **„Anwendung“** mit der Überschrift „Zubereitung“ und Kennwerten wie „85 °C · 3 min · 2 g / 250 ml“.

**Kennzahl als Skala:** Im Block **„Kennzahlen“** lassen sich bis zu zwei weitere Werte ergänzen. Ein Wert wie „3/5“ erscheint als Balken – gut für Röstgrad, Schärfe oder Intensität.

**Vorgeschlagene Metafelder:** `custom.data_table` (Nährwerte), `custom.ingredients` (Zutaten), `custom.preparation` (Zubereitungsschritte).

> Die Zubereitungsschritte und Kennwerte in der Vorlage sind ein Tee-Beispiel. Solange `custom.preparation` bei einem Produkt leer ist, erscheint dieser Beispieltext. Befüllen Sie das Metafeld je Produkt oder ändern Sie Schritte und Kennwerte im Block.

## Pumice – Naturkosmetik und Drogerie

**Startseite:** mittiger Aufmacher, „Beliebt“ mit Brecher-Kachel, „Erneut bestellen“, „Vorteile mit Icons“, „Nachfüllen statt neu kaufen“, Produktfinder, Kategorien, Kundenstimmen, „So funktioniert es“.

**Produktseite:** wie Refill, ohne Siegel-Block, mit Info-Popup „Welche Größe passt?“ und Vorteilen nebeneinander. Darunter **„Anwendung“** mit der Überschrift „Anwendung“ und **„Inhaltsstoffe: Im Fokus“**. Eine Datentafel ist nicht enthalten; bei Bedarf fügen Sie den Block **„Datentafel“** mit **„Eigene Spalten“** hinzu.

**Pflichtangaben:** Produktart „Kosmetik“: „Inhaltsstoffe (INCI)“, „Anwendung“, „Verantwortliche Person“ und „Haltbarkeit nach dem Öffnen“ aus `custom.pao` (z. B. „12 M“).

**Vorgeschlagene Metafelder:** `custom.inci` (INCI-Liste), `custom.usage` (Anwendung), `custom.pao`, `custom.key_ingredients`.

> Die Kundenstimmen auf der Startseite sind Beispieltexte (mit Angaben wie „Abo-Kundin“ statt Namen). Ersetzen Sie sie nur durch echte, belegbare Bewertungen oder löschen Sie den Abschnitt. Lassen Sie im Block „Zitat“ den **„Name der Person“** leer, erscheint das Zitat ohne Namenszeile.

## Gemeinsam in allen Stilen

- **Kollektionen und Produkte** sind in den Vorlagen von Mortar und Pumice nicht vorbelegt: Die Kollektionsliste zeigt alle Kollektionen mit Produkten, Produktfinder und Probierset verweisen auf „Alle Produkte“, bis Sie eigene Kollektionen wählen.
- **Menüs**: Mortar und Pumice nutzen die in jedem Shop vorhandenen Menüs „Main menu“ und „Footer menu“.
- **Logo-Leisten** sind bewusst ohne Beispiel-Logos: Erfundene Presse-Erwähnungen wären irreführend.
- **Bewertungssterne** und **„Häufig zusammen gekauft“** (Quelle „Automatisch“) stehen in allen Produktvorlagen; ohne Bewertungs-App bzw. ohne Empfehlungen bleiben sie unsichtbar.
- **Bedienhilfen-Panel** und der Knopf **„Follow on Shop“** sind in allen Stilen aus.

## Tiernahrung und andere Branchen

Für Tiernahrung gibt es keinen eigenen Stil. Stellen Sie einen der drei Stile so ein:

| Einstellung | Wert |
|---|---|
| Theme-Einstellungen → „Produktdaten“ → „Bezeichnung der Portion“ | „Fütterung“ |
| Theme-Einstellungen → „Produktdaten“ → „Preis pro“ | „Tag“ |
| Block „Datentafel“ → „Tafeltyp“ | „Futtermittel (analytische Bestandteile)“ oder „Fütterungstabelle (Gewicht · Menge)“ |
| Block „Pflichtangaben“ → „Produktart“ | „Futtermittel“ |

Im Block-Picker gibt es die Datentafel direkt in den passenden Varianten: „Datentafel: Supplemente“, „Datentafel: Nährwerte“, „Datentafel: Futtermittel“, „Datentafel: Fütterung“, „Datentafel: Zusammensetzung“ und „Datentafel: Zusammensetzung (INCI)“.

Für alle übrigen Verbrauchsgüter wählen Sie „Portion“ bzw. „Anwendung“ und die Produktart „Sonstiges“.

## Was „Portion“ und „Preis pro“ bewirken

- **„Bezeichnung der Portion“** erscheint in der Kennzahlenleiste, auf Produktkarten, im Kopf der Datentafel und in den strukturierten Daten, z. B. „Tasse 2 g“.
- **„Preis pro“** steuert den Wert „€ pro Tag“ bzw. „€ pro Tasse“. „Tag“ rechnet mit den Portionen pro Tag, alle anderen Werte mit einer Portion (Preis geteilt durch Portionen je Packung).

Woher die Zahlen kommen, beschreibt [Produktdaten](09-product-data.md).
