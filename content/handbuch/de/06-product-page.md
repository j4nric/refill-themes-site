# Produktseite

Die Produktseite ist der Abschnitt **„Produkt“** in der Vorlage `product` (dazu `product.subscription` und `product.bundle`). Jeder Teil ist ein eigener Block, den Sie verschieben, ausblenden oder löschen können. Beim Hinzufügen zeigt der Picker zuerst die passenden Blöcke; alle übrigen finden Sie unter **„Alle anzeigen“**.

Produkt-Blöcke zeigen immer das Produkt der Seite. Ein anderes Produkt auf einer beliebigen Seite zeigen Sie mit **„Hervorgehobenes Produkt“** (unten).

## Aufbau der Vorlage

So ist die Vorlage `product` im Stil Refill bestückt (von oben nach unten in der Kaufspalte):

| Block | Kurz | Mehr dazu |
|---|---|---|
| Produktbilder | Galerie links | [Galerie](#produktbilder) |
| Produkttitel, Bewertungssterne, Preis | Kopf der Kaufspalte | [unten](#titel-und-preis) |
| Kennzahlen | Portion, Preis pro Tag, Reichweite | [Produktdaten](09-product-data.md) |
| Variantenauswahl, Kaufoptionen, Kauf-Buttons | Auswahl und Kauf | [unten](#variantenauswahl), [Abo](10-subscriptions.md) |
| Lieferdatum, Abholung im Geschäft | Lieferung | [unten](#lieferdatum) |
| Häufig zusammen gekauft | Ergänzungen | [unten](#häufig-zusammen-gekauft) |
| Profil-Skalen | Eigenschaften als Skala (Geschmack, Textur …) | [Produktdaten](09-product-data.md#profil-skalen) |
| Siegel & Zertifikate, Vorteilsliste (USPs) | Vertrauen | [unten](#vorteilsliste-usps) |
| Produktbeschreibung, Metafeld-Inhalt, Pflichtangaben, Produktsicherheit | aufklappbare Angaben | [unten](#metafeld-inhalt), [Pflichtangaben](11-compliance.md) |
| Fixierte Kaufleiste | beim Scrollen | – |

Darunter folgen die Abschnitte „Datentafel und Inhaltsstoffe“, „Routine mit Produkten“, Produktempfehlungen und „Zuletzt angesehen“. „Produktempfehlungen“ hat wie jeder Abschnitt „Farbschema“, „Abstand oben und unten“, „Breite“ und „Linie über dem Abschnitt“. Mortar und Pumice ergänzen ein Info-Popup und eine andere Galerie, siehe [Stile](02-presets.md).

Aufklappbare Blöcke, die direkt untereinander stehen (Beschreibung, Metafeld-Inhalt, Pflichtangaben, Produktsicherheit), teilen sich eine Trennlinie und wirken wie ein gemeinsamer Stapel.

Galerie und Kaufspalte stehen ab Tablet-Breite (Fenster ab etwa 765 px, auch Tablet hochkant) nebeneinander, am Handy untereinander.

## Produktbilder

Block **„Produktbilder“** → **„Anordnung auf großen Bildschirmen“**:

| Anordnung | Darstellung ab Tablet-Breite |
|---|---|
| „Raster“ (Standard) | erstes Bild groß, darunter zwei Spalten; ein übriges letztes Bild nimmt die volle Breite |
| „Untereinander“ | alle Bilder in voller Breite untereinander |
| „Raster gleichmäßig (2 Spalten)“ | gleich große Bilder in zwei Spalten |
| „Mosaik (ein großes, zwei kleine)“ | abwechselnd ein großes und zwei kleine Bilder |
| „Slider“ | ein Bild, Pfeile beim Überfahren, Pfeiltasten |

Beim **Slider** erscheinen zwei weitere Einstellungen: **„Vorschaubilder“** („Unten“, „Oben“, „Links“, „Rechts“ oder „Keine (Punkte oder Zähler)“) und – nur bei „Keine“ – **„Position anzeigen als“** („Zähler (1 / 4)“ oder „Punkte“). Vorschaubilder links oder rechts stehen am Handy unten. Hat ein Produkt nur ein Bild, entfallen die Vorschaubilder.

**„Seitenverhältnis“**: 1 : 1 oder 4 : 5. Am Handy ist die Galerie immer eine Wischleiste mit Zähler bzw. Vorschaubildern. Videos, YouTube/Vimeo und 3D-Modelle stehen in derselben Galerie; auf Handys mit AR erscheint „In deinem Raum ansehen“.

### Variantenbild

Hat eine Variante ein eigenes Bild (Admin → Produkt → Variante → Bild), zeigt die Galerie es beim Wechsel der Variante:

- **Raster, Untereinander, Mosaik:** Das Bild der gewählten Variante rückt an die erste Stelle, die übrigen folgen in ihrer Reihenfolge. Das gilt auch beim Aufruf über einen Variantenlink.
- **Slider:** Der Slider blättert zum Variantenbild.

Die Seite selbst scrollt dabei nicht – Kundinnen und Kunden bleiben bei der Auswahl.

### Vollbild

**„Vollbild beim Klick auf ein Bild“** (Standard an): Ein Klick auf ein Bild lässt es auf den ganzen Bildschirm wachsen, die Produktinfo gleitet zur Seite (am Handy nach unten).

- Blättern: Wischen, Pfeile oder Pfeiltasten; der Zähler zeigt „2 / 4“.
- Vergrößern: Lupen-Knopf, Klick mit der Maus oder Doppeltippen; der Ausschnitt folgt Maus oder Finger.
- Schließen: ×, Escape, Scrollen mit Mausrad oder Trackpad, am Handy senkrecht ziehen.

Das Vollbild lädt Bilder in der Auflösung, die der Bildschirm braucht. Bei „Bewegung reduzieren“ öffnet es ohne Animation. Ist die Einstellung aus, sind die Bilder nicht klickbar.

## Titel und Preis

**„Produkttitel“**: **„Marke anzeigen“** mit **„Position der Marke“** (über oder unter dem Titel) und **„Marke verlinken“** (Seite mit allen Produkten der Marke). **„Unterzeile anzeigen“** erscheint, sobald unter Theme-Einstellungen → „Produktdaten“ ein **„Metafeld: Unterzeile“** eingetragen ist.

**„Preis“**: **„Hinweis zu Steuern und Versand anzeigen“**, **„Shop Pay Ratenzahlung anzeigen“** (erscheint nur, wenn Ratenzahlung im Shop aktiv ist) und **„Farbe des Streichpreises“** (leer = Sekundärtext des Farbschemas).

### Bewertungssterne

Der Block **„Bewertungssterne“** zeigt Sterne, Durchschnitt und Anzahl der Bewertungen – ohne Skript einer Bewertungs-App.

**Voraussetzung:** eine Bewertungs-App, die Shopifys Standard-Metafelder für Bewertungen befüllt (z. B. Judge.me, Loox, Yotpo, Shopify Product Reviews; prüfen Sie das in der Hilfe der App). Die Felder sind im Admin nicht sichtbar, die App schreibt sie selbst.

| Metafeld | Typ | Inhalt |
|---|---|---|
| `reviews.rating` | Bewertung | Durchschnitt mit Skala, z. B. 4,6 von 5 |
| `reviews.rating_count` | Ganzzahl | Anzahl der Bewertungen |

**Einrichten:**

1. Produktseite → **„Block hinzufügen“** → **„Bewertungssterne“** (Kategorie „Produkt: Inhalte“), unter den Titel ziehen. In den Vorlagen steht er dort bereits.
2. **„Darstellung“**: **„Zahl zeigen (z. B. 4,6)“** und **„Anzahl der Bewertungen zeigen“**.
3. Optional **„Link zu den Bewertungen“** → **„Anker des Bewertungsbereichs“**: die ID des Bereichs, in dem Ihre App die Bewertungen zeigt (mit oder ohne `#`). Dann springen die Sterne dorthin.
4. Auf Produktkarten: Theme-Einstellungen → „Produktdaten“ → „Produktkarten“ → **„Bewertungssterne“**.

Ohne Bewertungen (oder mit 0 Bewertungen) bleibt der Block unsichtbar; im Editor erscheint ein Hinweis. Screenreader hören „4,6 von 5 Sternen, 128 Bewertungen“. Die Werte fließen auch in die strukturierten Daten ein.

## Variantenauswahl

Block **„Variantenauswahl“**:

| Einstellung | Wirkung |
|---|---|
| „Stil“ | „Kacheln“, „Zeilen“ oder „Bilder (Variantenbilder)“ – Bildkacheln für Optionen, deren Varianten eigene Bilder haben. |
| „Größe“ | Klein, Mittel, Groß (Trefferfläche immer mindestens 44 px). |
| „Kacheln ohne Rahmen“ | Fläche statt Rahmen; nicht bei „Zeilen“. |
| „Bei Farbfeldern nur das Feld zeigen“ | Nur das Farbfeld, der Name erscheint beim Überfahren und über der Auswahl; nur sichtbar, wenn „Farbfelder anzeigen“ in den Theme-Einstellungen an ist. |

**Farbfelder** kommen aus Shopify: Wählen Sie beim Produkt eine Produktkategorie mit einem Attribut wie „Farbe“ und verbinden Sie die Option mit diesem Kategorie-Metafeld; jeder Wert bekommt dort eine Farbe oder ein Bild.

Kaufoptionen (Einmalkauf oder Abo) beschreibt [Abo](10-subscriptions.md). Im Block **„Kauf-Buttons“** stellen Sie Menge, dynamische Checkout-Buttons, Bestandsanzeige (**„Geringer Bestand unter“**), **„Benachrichtigung bei Verfügbarkeit anbieten“** und unter **„Erweitert“** das Metafeld für den Vorbestell-Termin ein.

## Lieferdatum

Der Block **„Lieferdatum“** zeigt eine Zeile wie „Voraussichtlich geliefert bis Mi., 25.11.“, an Versandtagen vor dem Bestellschluss ergänzt um „bei Bestellung bis 14 Uhr“. Das Datum rechnet der Browser in der Zeitzone des Shops.

| Gruppe | Einstellung | Bedeutung |
|---|---|---|
| „Versand“ | „Bestellschluss für Versand am selben Tag (Uhr)“ | Bis zu dieser Stunde geht die Bestellung noch heute raus. |
| | „Bearbeitungszeit (Werktage)“ | Werktage bis zum Versand. |
| „Zustellung“ | „Laufzeit mindestens / höchstens (Werktage)“ | Zustelldauer; bei unterschiedlichen Werten erscheint ein Zeitraum. |
| | „Zustellung auch samstags“ | Samstag als Zustelltag. |
| | „Tage ohne Versand und Zustellung“ | Feiertage, ein Datum pro Zeile (`JJJJ-MM-TT`). Jedes Jahr neu eintragen. |
| „Datenquelle“ | „Metafeld: Lieferzeit des Produkts“ | ersetzt die Laufzeit für einzelne Produkte. |

**Lieferzeit je Produkt:** Legen Sie das Produkt-Metafeld `custom.delivery_days` (Einzeiliger Text) an und tragen Sie die Werktage ein, z. B. `3` oder `3-5`.

Bei ausverkauften Varianten und bei Vorbestellungen blendet sich die Zeile aus. Ohne JavaScript steht dort „Lieferzeit: 1–2 Werktage nach Versand“. Die Lieferzeitleiste des Abos nutzt dasselbe Datum für „Bei dir“, siehe [Abo](10-subscriptions.md#4-lieferzeitleiste).

## Häufig zusammen gekauft

Der Block **„Häufig zusammen gekauft“** (Kategorie „Produkt: Kauf“) zeigt das Produkt der Seite mit bis zu drei Ergänzungen. Jede Zeile hat ein Kontrollkästchen, Bild, Titel und Preis, darunter stehen der Gesamtpreis und **„Alle hinzufügen“** bzw. **„Auswahl hinzufügen“**. Ein Klick legt alles mit einem Schritt in den Warenkorb, der sich danach öffnet.

| Einstellung | Wirkung |
|---|---|
| „Überschrift“ | Standard „Häufig zusammen gekauft“. |
| „Angebotstext“ | z. B. „Zusammen 10 % günstiger“ – nur, wenn Sie den Rabatt angelegt haben (siehe unten). |
| „Quelle“ | „Automatisch (Shopify-Empfehlungen)“, „Feste Auswahl“ oder „Produktlisten-Metafeld“. |
| „Feste Auswahl“ | bis zu drei Produkte; bei „Automatisch“ füllt sie fehlende Plätze auf. |
| „Metafeld (namespace.key)“ | nur bei „Produktlisten-Metafeld“; vorbelegt mit Shopifys Metafeld für ergänzende Produkte. |
| „Anzahl Ergänzungen“ | 1–3, Standard 2. |
| „Ergänzungen vorab auswählen“ | Kästchen sind beim Laden angehakt. |

**Woher die Ergänzungen kommen:**

- **Automatisch:** zuerst die **ergänzenden Produkte**, die Sie in der App **Search & Discovery** pflegen (App → Produktempfehlungen → Produkt wählen → ergänzende Produkte hinzufügen), sonst Shopifys ähnliche Produkte.
- **Produktlisten-Metafeld:** je Produkt eigene Ergänzungen, z. B. ein Metafeld `custom.bought_together` vom Typ **Produkt, Liste mit Werten**.

Das Produkt der Seite folgt der gewählten Variante und Kaufoption (Einmalkauf oder Abo). Ergänzungen mit mehreren Varianten bekommen je Option eine Zeile mit Stift wie auf den Produktkarten; Produkte nur im Abo mit mehreren Plänen zusätzlich eine Zeile „Kaufoption“. Auch die **Schnellansicht** wählt Varianten über diese Zeilen. Ist die Variante der Seite ausverkauft, gibt es keine Ergänzungen, oder findet keine Quelle etwas, blendet sich der Block aus.

**Rabatt:** Das Theme ändert keine Preise. Für ein Bundle-Angebot legen Sie unter **Rabatte** einen automatischen Rabatt an (z. B. „Kaufe X, erhalte Y“ oder ein Betrag ab zwei Artikeln) und beschreiben ihn im „Angebotstext“. Shopify rechnet den Rabatt im Warenkorb ab.

## Routine mit Produkten

Der Block **„Routine mit Produkten“** (Kategorie „Produkte & Kollektionen“) zeigt Schritte mit verknüpften Produkten und legt alle mit einem Klick in den Warenkorb – etwa eine Morgen- und Abendroutine, ein Tee-Ritual oder eine Gesichtsroutine. Er funktioniert auf jeder Seite, auch auf der Produktseite (in den Stilen als eigener Abschnitt unter der Datentafel).

Jeder **„Schritt“** hat **„Zeitpunkt“** (kurzes Label wie „Morgens“ oder „Schritt 1“), **„Titel“**, **„Text“** und optional ein **„Produkt“**. Mit Produkt erscheint eine kleine Karte mit Bild, Titel (Link zur Produktseite), Preis und – bei mehreren verfügbaren Varianten – einer kompakten Auswahl.

| Einstellung | Wirkung |
|---|---|
| „Überschrift“, „Einleitung“ | Kopf des Blocks; beides optional. |
| „Anordnung“ | „Untereinander“ (Standard, nummerierte Liste mit Karte rechts ab 600 px Breite) oder „Nebeneinander“ (Spalten ab 600 px, schmaler untereinander). |
| „Schritte nummerieren“ | „01“, „02“ … in der Daten-Schrift. |
| „„Alle in den Warenkorb“ zeigen“ | Gesamtpreis und Button unter den Schritten. |
| „Button-Stil“, „Button-Größe“ | Standard Sekundär, damit der Kauf-Button der Seite die laute Stelle bleibt. |

**So verhält sich „Alle in den Warenkorb“:**

- Legt alle **verfügbaren** Produkte der Schritte in einem Schritt in den Warenkorb (gewählte Variante, Menge 1); danach öffnet sich der Warenkorb wie bei jedem Hinzufügen.
- **Ausverkaufte** Produkte stehen mit „Ausverkauft“ im Schritt und werden übersprungen; unter dem Button steht „1 ausverkauftes Produkt wird übersprungen.“
- Lehnt Shopify das gemeinsame Hinzufügen ab (z. B. weil ein Bestand inzwischen fehlt), legt das Theme die Produkte einzeln hinein und nennt, was nicht ging („Nicht hinzugefügt: …“).
- Produkte mit Abo-Option kommen als Einmalkauf in den Warenkorb, Produkte nur im Abo mit ihrem ersten Plan.
- Ohne JavaScript bleiben die Schritte mit Links zu den Produkten; Gesamtpreis und Button entfallen.

Das Theme gewährt keinen Routine-Rabatt. Möchten Sie einen anbieten, legen Sie unter **Rabatte** einen automatischen Rabatt an (z. B. ab drei Produkten aus einer Kollektion) und erwähnen ihn in der Einleitung. Schreiben Sie Schritte sachlich (Menge, Reihenfolge, Zeitpunkt), ohne Wirkversprechen.

## Info-Popup: Größen- und Dosiertabelle

Ein Link oder Button öffnet ein Fenster mit Zusatzinformationen – etwa eine Größentabelle, Dosier- oder Fütterungstabelle oder einen Mahlgrad-Überblick. Im Picker (Kategorie „Aufklappen & Tabs“) gibt es vier Vorlagen: **„Info-Popup“**, **„Info-Popup: Tabelle“**, **„Info-Popup: Dosiertabelle“** und **„Info-Popup: Größentabelle“**.

| Einstellung | Wirkung |
|---|---|
| „Art“ | „Allgemein“, „Dosiertabelle“ oder „Größentabelle“ – setzt Beschriftung und Symbol, solange „Beschriftung“ leer ist. |
| „Beschriftung“, „Titel im Fenster“ | Text des Links und Überschrift im Fenster (leer = Beschriftung). |
| „Darstellung“ | „Textlink“ oder „Button“; „Symbol zeigen“. |
| „Quelle“ | „Text“, „Seite“ oder „Produkt-Metafeld“. |
| „Text“ | nur bei Quelle „Text“: formatierter Text ohne Tabellen. |
| „Seite“ | Shopify-Seite, deren Inhalt im Fenster erscheint. |
| „Metafeld (namespace.key)“, „Feld im Metaobjekt“ | nur bei Quelle „Produkt-Metafeld“. |

**Größentabelle für alle Produkte (Seite):**

1. Admin → **Onlineshop → Seiten → Seite hinzufügen**, z. B. „Größentabelle“. Die Tabelle im Seiteneditor anlegen (Tabellen-Symbol in der Werkzeugleiste).
2. Produktseite → **„Block hinzufügen“** → **„Info-Popup: Größentabelle“** → **„Seite“**: diese Seite wählen.

**Tabelle je Produkt (Metafeld):** Quelle **„Produkt-Metafeld“** und den Schlüssel eintragen. Unterstützt werden Rich Text, ein- und mehrzeiliger Text, Seiten-Verweis, Datei (Bild) und Metaobjekt-Verweis – bei Metaobjekten liest der Block das Feld aus **„Feld im Metaobjekt“** (Standard `content`).

Ohne Inhalt bleibt der Block unsichtbar. Das Fenster schließt mit ×, Escape oder Klick daneben; ohne JavaScript klappt der Inhalt an Ort und Stelle auf.

## Vorteilsliste (USPs)

Block **„Vorteilsliste (USPs)“** – kurze Punkte wie „Versand in 24 h“ oder „Laborgeprüft“, z. B. unter den Kauf-Buttons. **„Anordnung“**: „Untereinander“ oder „Nebeneinander“. Nebeneinander legt **„Spalten“** die Spaltenzahl fest: „Automatisch“ (so viele, wie Platz ist), 2 oder 3 – am Handy steht eine Spalte. **„Icon und Text zentrieren“** stellt das Icon über den Text, beides mittig.

- **Für alle Produkte gleich:** Unterblöcke **„Vorteil“** mit **„Text“** und **„Icon“**.
- **Je Produkt:** Metafeld `custom.usps` (Liste von einzeiligen Texten oder mehrzeiliger Text, eine Zeile je Vorteil). Ist es befüllt, ersetzt es die Unterblöcke; dann gilt das **„Icon“** im Block unter „Datenquelle“ für alle Einträge.

## Metafeld-Inhalt

Für jede Produktangabe ohne eigenen Block – Pflege, Material, Maße, Herkunft. Block **„Metafeld-Inhalt“**:

1. **„Überschrift“** eingeben, z. B. „Pflege und Handhabung“.
2. **„Metafeld“**: Schlüssel eintragen, z. B. `custom.care`.
3. **„Darstellung“** (erscheint, sobald ein Metafeld eingetragen ist): „Automatisch“, „Text“, „Liste“ (eine Zeile je Punkt) oder „Tabelle“ (Zeilen `Bezeichnung: Wert` oder JSON).
4. **„Text (wenn kein Metafeld befüllt ist)“**: Rückfall für Produkte ohne Wert. Gilt für alle Produkte mit dieser Vorlage.
5. **„Aufklappbar“** (Standard an) und **„Standardmäßig geöffnet“** (nur mit Überschrift).

Ohne Wert und ohne Rückfalltext blendet sich der Block aus. Er funktioniert auch innerhalb eines Tabs.

## Datentafel: rollende Zahlen

Im Block **„Datentafel“** ist **„Zahlen beim ersten Sichtbarwerden einrollen“** standardmäßig an: Scrollt jemand zur Tafel, rollen die Werte einmal wie ein Zählwerk auf ihre echte Zahl. Einheiten und Trennzeichen bleiben stehen, die Tafel verändert ihre Größe nicht. Keine Animation, wenn die Tafel beim Laden schon sichtbar ist, bei „Bewegung reduzieren“ und ohne JavaScript; Screenreader lesen immer die echte Zahl. Wie Sie die Tafel befüllen, steht in [Produktdaten](09-product-data.md#datentafel-einrichten).

## Brotkrumen

Block **„Brotkrumen“** über dem Produkt: Startseite › Kollektion › Produkt. Die Kollektion wählt das Theme so:

1. Produkt-Metafeld **„Metafeld: Eltern-Kollektion“** (Standard `custom.breadcrumb_collection`, Typ Kollektion),
2. sonst die Kollektion, aus der die Person kommt (**„Zuletzt besuchte Kollektion verwenden“**, Standard an),
3. sonst die erste Kollektion des Produkts.

Suchmaschinen sehen immer Stufe 1 oder 3.

## Hervorgehobenes Produkt

Block und Abschnitt-Vorlage **„Hervorgehobenes Produkt“** zeigen ein beliebiges Produkt auf jeder Seite, mit Galerie (inklusive Video und 3D), Titel, Preis, Variantenauswahl, Kaufoptionen und Kauf-Buttons wie auf der Produktseite.

1. **„Produkt“** wählen. Ohne Produkt zeigt der Editor eine Aufforderung.
2. Unter **„Inhalt“** die Teile ein- oder ausschalten: **„Galerie anzeigen“** (mit **„Anordnung auf großen Bildschirmen“** – „Slider“ mit Vorschaubildern, Standard, oder „Raster“ – und **„Seitenverhältnis“**), **„Titel anzeigen“** (mit **„Marke anzeigen“**), **„Preis anzeigen“**, **„Variantenauswahl anzeigen“** (mit **„Stil“**), **„Kaufoptionen (Abo) anzeigen“**, **„Kauf-Buttons anzeigen“** (mit **„Menge anzeigen“** und **„Dynamische Checkout-Buttons anzeigen“**) und **„Link „Details ansehen“ anzeigen“**.

Eigene Texte oder Badges setzen Sie als weitere Blöcke daneben in denselben Abschnitt; innerhalb des Blocks sind nur App-Blöcke möglich.

## Metafelder der Produktseite

| Metafeld | Typ | Wofür |
|---|---|---|
| `reviews.rating`, `reviews.rating_count` | Bewertung, Ganzzahl | Bewertungssterne (von der Bewertungs-App befüllt) |
| `custom.delivery_days` | Einzeiliger Text, z. B. `3` oder `3-5` | Lieferzeit je Produkt im Block „Lieferdatum“ |
| `custom.usps` | Liste von einzeiligen Texten oder mehrzeiliger Text | Vorteilsliste je Produkt |
| `custom.breadcrumb_collection` | Kollektion | Eltern-Kollektion in den Brotkrumen |
| `shopify--discovery--product_recommendation.complementary_products` | Produkt (Liste) | ergänzende Produkte aus Search & Discovery |
| eigener Schlüssel, z. B. `custom.bought_together` | Produkt (Liste) | „Häufig zusammen gekauft“ mit Quelle „Produktlisten-Metafeld“ |
| eigener Schlüssel, z. B. `custom.care`, `custom.size_chart` | Rich Text, Text, Seite, Datei oder Metaobjekt | „Metafeld-Inhalt“, „Info-Popup“ |

Alle Metafelder für Kennzahlen, Datentafel, Inhaltsstoffe und Siegel stehen in [Produktdaten](09-product-data.md), die Pflichtangaben in [Pflichtangaben](11-compliance.md).
