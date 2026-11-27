# Produktdaten

Refill zeigt Kennzahlen, Datentafel, Inhaltsstoffe und Siegel aus **Produkt-Metafeldern**. Das Theme legt selbst keine Metafelder an – Sie bestimmen, welche Felder es liest. Die vorgeschlagenen Schlüssel (`custom.…`) sind in allen Einstellungen schon eingetragen; wenn Sie Ihre Metafelder genau so anlegen, müssen Sie im Theme nichts ändern.

Jeder datengetriebene Block arbeitet in drei Stufen:

1. **Metafeld** des Produkts, wenn befüllt.
2. **Eingabe im Block** (z. B. „Zeilen (wenn kein Metafeld befüllt ist)“), wenn das Metafeld leer ist. Achtung: Diese Eingabe gilt dann für alle Produkte mit dieser Vorlage.
3. **Ausblenden**, wenn beides leer ist.

## Übersicht

| Wert | Wo eingestellt | Vorgeschlagenes Metafeld | Typ |
|---|---|---|---|
| Unterzeile unter dem Titel | Theme-Einstellungen → „Produktdaten“ → „Metafeld: Unterzeile“ | `custom.subtitle` | Einzeiliger Text |
| Menge je Portion („4 Kapseln“) | „Metafeld: Menge je Portion“ | `custom.serving_size` | Einzeiliger Text |
| Portionen pro Packung | „Metafeld: Portionen pro Packung“ | `custom.servings_per_container` | Ganzzahl |
| Portionen pro Tag | „Metafeld: Portionen pro Tag“ | `custom.servings_per_day` | Ganzzahl oder Dezimalzahl |
| Eigene Badges | „Metafeld: eigene Badges“ | `custom.badge` | Einzeiliger Text oder Liste |
| Datentafel | Block „Datentafel“ → „Metafeld: Zeilen (Liste von Metaobjekten)“ | `custom.data_table` | Liste von Metaobjekt-Einträgen |
| Profil-Skalen (Geschmack, Textur, Löslichkeit …) | „Metafeld: Profil-Skalen“ bzw. Block „Profil-Skalen“ → „Metafeld (namespace.key)“ | `custom.profile` | JSON, Liste von einzeiligen Texten oder mehrzeiliger Text |
| Datentafel | Block „Datentafel“ → „Metafeld: Zeilen (Liste von Metaobjekten)“ | `custom.supplement_facts` | Liste von Metaobjekt-Einträgen |
| Hauptinhaltsstoffe | Block „Inhaltsstoffe: Im Fokus“ → „Metafeld: Inhaltsstoffe (Liste von Metaobjekten)“ | `custom.key_ingredients` | Liste von Metaobjekt-Einträgen „Inhaltsstoff“ |
| Anwendung / Zubereitung | Block „Anwendung“ → „Metafeld: Schritte“ | `custom.usage` | Mehrzeiliger Text |
| Siegel | Block „Siegel & Zertifikate“ → „Metafeld: Siegel (Liste von Texten)“ | `custom.certifications` | Liste von einzeiligen Texten |
| Prüfbericht | Block „Siegel & Zertifikate“ → „Metafeld: Prüfbericht (Datei)“ | `custom.lab_report` | Datei |
| Voraussichtlicher Versand | Block „Kauf-Buttons“ → „Metafeld: voraussichtlicher Versand (Vorbestellung)“ | `custom.preorder_date` | Einzeiliger Text |
| Lieferzeit des Produkts (Werktage, `3` oder `3-5`) | Block „Lieferdatum“ → „Metafeld: Lieferzeit des Produkts“ | `custom.delivery_days` | Einzeiliger Text |
| Vorteile (USPs) | Block „Vorteilsliste (USPs)“ → „Metafeld: Vorteile“ | `custom.usps` | Liste von einzeiligen Texten oder mehrzeiliger Text |
| Eltern-Kollektion in den Brotkrumen | Block „Brotkrumen“ → „Metafeld: Eltern-Kollektion“ | `custom.breadcrumb_collection` | Kollektion |
| Bewertung | Block „Bewertungssterne“ (fester Schlüssel) | `reviews.rating`, `reviews.rating_count` | Bewertung, Ganzzahl – befüllt die Bewertungs-App |
| Ergänzungen für „Häufig zusammen gekauft“ | Block „Häufig zusammen gekauft“ → „Metafeld (namespace.key)“ | eigener Schlüssel, z. B. `custom.bought_together` | Produkt (Liste) |
| Freie Angaben (Pflege, Material, Größentabelle …) | Blöcke „Metafeld-Inhalt“ und „Info-Popup“ → „Metafeld“ | eigener Schlüssel, z. B. `custom.care` | je nach Inhalt |

**Kollektions-Metafeld:** `custom.subcollections` (Kollektion, Liste) für die Leiste „Unterkollektionen“, siehe [Kollektionen und Produktkarten](05-collections.md#unterkollektionen). Wofür die Metafelder der Produktseite im Einzelnen dienen, beschreibt [Produktseite](06-product-page.md#metafelder-der-produktseite).

Die Metafelder für Pflichtangaben und Produktsicherheit stehen in [Pflichtangaben](11-compliance.md).

Die Stile Mortar und Pumice lesen in ihrer Produktvorlage teils andere Schlüssel (z. B. `custom.data_table`, `custom.preparation`, `custom.inci`), siehe [Stile (Presets)](02-presets.md). Maßgeblich ist immer, was im jeweiligen Block unter **„Datenquelle (nur bei eigenen Metafeldern ändern)“** steht.

## Metafeld anlegen – Grundablauf

1. Admin → **Einstellungen → Metafelder und Metaobjekte** (in älteren Admin-Versionen „Benutzerdefinierte Daten“) → **Produkte** → **Definition hinzufügen**.
2. Name eingeben, z. B. „Portionen pro Packung“.
3. **Namespace und Schlüssel** genau wie in der Theme-Einstellung, z. B. `custom.servings_per_container`.
4. Typ wählen (siehe Tabelle), speichern.
5. Produkt öffnen → ganz unten unter **Metafelder** den Wert eintragen.

Haben Sie bereits Metafelder mit anderen Schlüsseln, tragen Sie diese im Theme ein (Format `namespace.schlüssel`) statt neue anzulegen.

## Kennzahlen: Portion, Preis pro Tag, Reichweite

Der Block **„Kennzahlen“** auf der Produktseite und die Produktkarten zeigen:

| Anzeige | Berechnung |
|---|---|
| Portion, z. B. „Tagesdosis 2 Kapseln“ | Bezeichnung aus „Bezeichnung der Portion“ + `custom.serving_size` |
| Portionen | `custom.servings_per_container` |
| Preis pro Tag / Portion | Preis der gewählten Variante (bzw. Abo-Preis) ÷ Portionen pro Packung; bei „Preis pro“ = „Tag“ zusätzlich × Portionen pro Tag |
| „Reicht 30 Tage – bis …“ | Portionen pro Packung ÷ Portionen pro Tag; das Datum rechnet der Browser des Besuchers |

So richten Sie es ein:

1. Metafelder `custom.serving_size` (Einzeiliger Text) und `custom.servings_per_container` (Ganzzahl) anlegen.
2. Optional `custom.servings_per_day` anlegen. Ohne Wert gilt 1.
3. Produkte befüllen, z. B. „2 Kapseln“ und „60“.
4. Im Block **„Kennzahlen“** die Schalter **„Preis pro Tag bzw. Portion anzeigen“** und **„Reichweite anzeigen („Reicht 30 Tage – bis …“)“** prüfen.
5. Auf Kollektionsseiten und in Produktrastern steuert **„Portion und Preis pro Tag bzw. Portion anzeigen“** dieselben Werte auf den Karten.

**Bezeichnung der Portion:** Theme-Einstellungen → „Produktdaten“ → **„Bezeichnung der Portion“** („Tagesdosis“, „Portion“, „Tasse“, „Anwendung“, „Fütterung“). Passt keiner der Begriffe, wählen Sie **„Eigener Text“** und tragen unter **„Eigene Bezeichnung“** z. B. „Riegel“ ein. Den Text übersetzen Sie für weitere Sprachen mit der App „Translate & Adapt“.

**Varianten mit unterschiedlicher Packungsgröße** (500 g / 1 kg): Legen Sie `custom.servings_per_container` zusätzlich als **Varianten-Metafeld** mit demselben Schlüssel an (Einstellungen → Metafelder und Metaobjekte → **Varianten**). Die Produktseite rechnet dann je Variante. Auf Produktkarten erscheint der Preis pro Tag nur, wenn alle Varianten denselben Preis haben; Karten rechnen mit dem Produkt-Metafeld.

**Zusätzliche Kennzahlen:** Im Block „Kennzahlen“ ergänzen Sie unter **„Zusätzliche Kennzahl 1“** und **„Zusätzliche Kennzahl 2“** je **„Bezeichnung“** und **„Wert (z. B. 3/5 für eine Skala)“**. Verbinden Sie den Wert über das Symbol für dynamische Quellen mit einem Metafeld, damit jedes Produkt seinen eigenen Wert zeigt. Ein Wert wie „3/5“ (3 bis 10 Stufen) erscheint als Balken.

## Datentafel einrichten

Die Datentafel liest eine **Liste von Metaobjekt-Einträgen**. Jeder Eintrag ist eine Zeile.

### Schritt 1: Metaobjekt-Definition „Datentafel-Zeile“

1. Admin → **Einstellungen → Metafelder und Metaobjekte → Metaobjekte → Definition hinzufügen**.
2. Name z. B. „Datentafel-Zeile“.
3. Felder anlegen – die **Schlüssel** müssen genau so heißen:

| Schlüssel | Typ | Inhalt |
|---|---|---|
| `label` | Einzeiliger Text | Name der Zeile, z. B. „Magnesium“ oder „Energie“ |
| `amount` | Einzeiliger Text | zweite Spalte, z. B. „300 mg“ |
| `nrv` | Einzeiliger Text oder Zahl | dritte Spalte; bei Nahrungsergänzung die Zahl ohne %-Zeichen (das Theme ergänzt „%“) |
| `indent` | Wahr oder falsch | optional: „davon“-Zeile, wird eingerückt |
| `ingredient` | Metaobjekt-Verweis auf „Inhaltsstoff“ | optional: verknüpft die Zeile mit dem Lexikon; ohne `label` erscheint dann der Name des Inhaltsstoffs |

4. Unter **Zugriff** den Zugriff für **Storefronts** aktivieren, speichern.

### Schritt 2: Produkt-Metafeld

1. **Einstellungen → Metafelder und Metaobjekte → Produkte → Definition hinzufügen**.
2. Namespace und Schlüssel `custom.data_table`, Typ **Metaobjekt**, Verweis auf „Datentafel-Zeile“, **Liste von Einträgen**.

### Schritt 3: Zeilen anlegen und zuordnen

1. Admin → **Inhalt → Metaobjekte → Datentafel-Zeile** → Einträge anlegen.
2. Produkt öffnen → Metafeld „Datentafel“ → Einträge in der gewünschten Reihenfolge auswählen.

### Schritt 4: Block einstellen

Block **„Datentafel“** → **„Tafeltyp“**:

| Tafeltyp | Spalten |
|---|---|
| „Nahrungsergänzung (Menge · % NRV)“ | Inhaltsstoff · pro Tagesdosis · % NRV |
| „Lebensmittel (pro 100 g · pro Portion)“ | Nährwert · pro 100 g · pro Portion |
| „Futtermittel (analytische Bestandteile)“ | analytische Bestandteile |
| „Fütterungstabelle (Gewicht · Menge)“ | Körpergewicht · Menge pro Tag |
| „Zusammensetzung (Bestandteil · Anteil oder Funktion)“ | Bestandteil · Anteil · Funktion; leere Spaltenköpfe zeigen diese Standards, eigene ersetzen sie |
| „Eigene Spalten“ | „Spaltenkopf 1“ bis „Spaltenkopf 3“ selbst eintragen |

Außer bei Nahrungsergänzung ist die dritte Spalte optional: Haben die Zeilen keine Werte dafür, entfällt sie. Eine eigene **„Fußnote“** ersetzt bei jedem Tafeltyp die voreingestellte.

**Zusammensetzung und INCI-Liste:** Der Tafeltyp „Zusammensetzung“ passt für Mischungen (Chai: Zimt 30 %, Ingwer 20 % …) und für Kosmetik (INCI-Name · Funktion). Unter **„Quelle“** wählen Sie **„Datentafel-Metafeld (Zeilen)“** (Metaobjekte wie oben) oder **„Text-Metafeld (Liste, z. B. INCI)“**. Das Text-Metafeld (Standard `custom.inci`, ein- oder mehrzeiliger Text) enthält die Einträge durch Komma oder Zeilenumbruch getrennt, z. B. `Aqua, Glycerin, Butyrospermum Parkii Butter*, Parfum`; die Tafel zeigt sie als fortlaufende Liste in dieser Reihenfolge. Im Block-Picker: „Datentafel: Zusammensetzung“ und „Datentafel: Zusammensetzung (INCI)“.

**Ohne Metaobjekte:** Tragen Sie die Zeilen in **„Zeilen (wenn kein Metafeld befüllt ist)“** ein, eine Zeile je Eintrag: `Name | Wert | dritte Spalte`. Ein `-` am Anfang rückt die Zeile ein. Diese Eingabe gilt für alle Produkte ohne befülltes Metafeld – sinnvoll vor allem in einer eigenen Produktvorlage für ein einzelnes Produkt.

Hat das Metafeld einen anderen Typ als erwartet, zeigt der Editor einen Hinweis und das Theme nutzt die Eingabe aus dem Block.

## Inhaltsstoffe

Der Block **„Inhaltsstoffe: Im Fokus“** zeigt Hauptinhaltsstoffe mit Bild, Form, Herkunft und Beschreibung.

1. Metaobjekt-Definition **„Inhaltsstoff“** mit dem Typ-Handle `ingredient` anlegen (Einstellungen → Metafelder und Metaobjekte → Metaobjekte → Definition hinzufügen):

| Schlüssel | Typ |
|---|---|
| `name` | Einzeiliger Text |
| `form` | Einzeiliger Text, z. B. „Bisglycinat“ |
| `source` | Einzeiliger Text, z. B. „Deutschland“ |
| `description` | Mehrzeiliger Text |
| `image` | Datei (Bild) |
| `vegan` | Wahr oder falsch (optional, erscheint im Steckbrief) |

2. Zugriff für **Storefronts** aktivieren.
3. Produkt-Metafeld `custom.key_ingredients` anlegen: Typ **Metaobjekt** → „Inhaltsstoff“, **Liste von Einträgen**.
4. Unter **Inhalt → Metaobjekte → Inhaltsstoff** Einträge anlegen und beim Produkt auswählen.

Dieselben Einträge speisen das [Inhaltsstoff-Lexikon](12-ingredient-glossary.md). Der Typ-Handle `ingredient` ist dafür Pflicht.

**Steckbrief:** Der Block **„Inhaltsstoff: Steckbrief“** zeigt bis zu drei Angaben. Unter **„Angaben“** tragen Sie je Angabe eine **Beschriftung** und den **Feldschlüssel** des Metaobjekts ein. Standard sind Form (`form`), Herkunft (`source`) und Vegan (`vegan`); für Naturkosmetik etwa „Funktion“ (`function`), für Tee „Anbaugebiet“ (`region`) und „Höhe“ (`altitude`). Ein leerer Schlüssel blendet die Angabe aus.

**Produkte zum Inhaltsstoff über die INCI-Liste:** Im Block **„Inhaltsstoff: Produkte“** unter „Metafeld: Zutatenliste (Text, optional)“ `custom.inci` eintragen. Ein Produkt passt, wenn seine Liste den Wert aus dem Feld `inci_name` des Inhaltsstoffs enthält (z. B. „Butyrospermum Parkii Butter“), ohne dieses Feld den Namen.

**Ohne Metaobjekte:** Ist das Metafeld leer, zeigt der Block seine Unterblöcke **„Inhaltsstoff“** mit „Bild“, „Name“, „Form und Herkunft“ und „Beschreibung“.

## Badges auf Produktkarten

Neben „Ausverkauft“, „Angebot“ und „Abo −10 %“ zeigen Karten bis zu zwei eigene Badges:

- **Produkt-Tag** in der Form `badge:Neu` – das Tag `badge:Neu` erzeugt das Badge „Neu“.
- **Metafeld** aus **„Metafeld: eigene Badges“** (Standard `custom.badge`), Einzeiliger Text oder Liste von Texten.

**„Stil eigener Badges“**: „Neutral (Rahmen)“ oder „Akzentfarbe“. Einzelne Badges färben Sie unter **„Badge-Farben“** eigens ein, siehe [Kollektionen und Produktkarten](05-collections.md#badges).

## Profil-Skalen

Der Block **„Profil-Skalen“** (Kategorie „Produkt: Angaben“) zeigt Eigenschaften als Skala – etwa das Geschmacksprofil eines Tees (herb, blumig, rauchig), die Textur einer Creme (leicht ↔ reichhaltig) oder die Löslichkeit eines Pulvers. Je Eigenschaft stehen Bezeichnung und Wert („3/5“) in der Daten-Schrift, darunter Kästchen, Punkte oder ein Balken und die Beschriftung der beiden Enden. Screenreader hören „Säure: 2 von 5, Skala von mild bis kräftig“.

**Daten je Produkt:** Legen Sie ein Produkt-Metafeld `custom.profile` an (Schlüssel änderbar unter Theme-Einstellungen → „Produktdaten“ → „Metafeld: Profil-Skalen“ oder im Block). Zwei Formate:

| Typ | Inhalt |
|---|---|
| **JSON** | Liste mit `label`, `value` und optional `left`, `right`, `max`:<br>`[{"label": "Säure", "value": 2, "left": "mild", "right": "kräftig"}, {"label": "Körper", "value": "3/5"}]`<br>Kurzform ohne Enden: `{"Säure": 2, "Süße": 3.5}` |
| **Liste von einzeiligen Texten** oder **Mehrzeiliger Text** | eine Eigenschaft pro Eintrag bzw. Zeile: `Bezeichnung \| Wert \| links \| rechts`, z. B. `Textur \| 4 \| leicht \| reichhaltig`; ohne Enden auch `Duft: 2` |

Werte sind Zahlen mit Komma oder Punkt (halbe Stufen füllen ein Kästchen zur Hälfte) oder Brüche wie `3/5`. Ohne Bruch gilt **„Stufen bei Metafeld-Werten“** (Standard 5, möglich 3–10). Einträge ohne Bezeichnung oder ohne Zahl werden übersprungen.

**Ohne Metafeld:** Im Block unter **„Eigenschaft“** Einträge hinzufügen – **„Bezeichnung“**, **„Wert“** (0–10, halbe Stufen), **„Stufen“**, **„Beschriftung links (niedrig)“** und **„Beschriftung rechts (hoch)“**. Diese Einträge gelten für alle Produkte der Vorlage ohne Metafeld-Werte. Ist das Metafeld befüllt, hat es Vorrang; der Editor weist darauf hin.

**Einstellungen:** „Überschrift“, **„Darstellung“** (Kästchen, Punkte – rund oder eckig nach „Ecken“ –, Balken), **„Skalenbreite“** („Automatisch“: Punkte schmal, Kästchen und Balken über die ganze Breite; „Schmal“: Skala und Beschriftung der Enden höchstens etwa 190 px breit; „Volle Breite“), **„Wert als Zahl zeigen (3/5)“**, „Hinweis“ (z. B. „Einschätzung unseres Verkostungsteams“) und **„Produkt“** – leer ist es das Produkt der Seite; mit gewähltem Produkt funktioniert der Block auf jeder Seite, etwa neben „Hervorgehobenes Produkt“. Punkte verteilen sich über die ganze Skala: Der erste und der letzte Punkt stehen immer über den Beschriftungen der Enden („Mild“ – „Herb“). In schmalen Spalten (z. B. zwei Spalten in der Kaufspalte) bleibt die Skala mit „Schmal“ kompakt und lesbar.

**Auf Produktkarten:** Theme-Einstellungen → „Produktdaten“ → „Produktkarten“ → **„Profil-Skalen in Produktkarten zeigen“**: bis zu drei Eigenschaften aus demselben Metafeld als einzeilige Skala unter den Kennzahlen (Kollektionen, Suche, Produktlisten).

Skalen beschreiben Eigenschaften, keine Wirkung. Schreiben Sie keine Gesundheits- oder Wirkversprechen in Bezeichnungen oder Hinweise.

## Siegel und Prüfbericht

1. Metafeld `custom.certifications` als **Liste von einzeiligen Texten** anlegen und je Produkt befüllen, z. B. „Vegan“, „Laborgeprüft“. Nennen Sie nur Siegel, die Sie belegen können.
2. Optional `custom.lab_report` als **Datei** – der Block verlinkt den Nachweis mit „Nachweis ansehen“; unter **„Linktext zum Nachweis“** z. B. „Prüfbericht ansehen“ oder „Zertifikat ansehen“.
3. Ohne Metafeld: Siegel im Block unter **„Siegel (wenn kein Metafeld befüllt ist)“**, ein Siegel pro Zeile.

## Anwendung und Zubereitung

Block **„Anwendung“**: Schritte aus `custom.usage` (Mehrzeiliger Text, eine Zeile = ein Schritt) oder aus **„Schritte (wenn kein Metafeld befüllt ist)“**. Unter **„Kennwerte“** stehen **„Temperatur“**, **„Zeit“** und **„Menge“**, z. B. „85 °C · 3 min · 2 g / 250 ml“. Leere Felder entfallen; per dynamischer Quelle lassen sie sich an Metafelder binden.

## Weitere Inhalte aus Metafeldern

- **„Metafeld-Inhalt“**: Überschrift eingeben, Metafeld verknüpfen (**„Metafeld“**), Darstellung wählen; mit **„Aufklappbar“** als aufklappbarer Bereich. Ohne Metafeld-Wert zeigt er den Text im Block. Einzelheiten in [Produktseite](06-product-page.md#metafeld-inhalt). (Der ältere Block „Aufklapper aus Metafeld“ funktioniert in bestehenden Vorlagen weiter, steht aber nicht mehr im Picker.)
- **„Info-Popup“**: Inhalt aus einem Produkt-Metafeld (Rich Text, Text, Seiten-Verweis, Bild, Metaobjekt) in einem Fenster, z. B. eine Größen- oder Dosiertabelle je Produkt, siehe [Produktseite](06-product-page.md#info-popup-größen-und-dosiertabelle).
- **„Registerkarten (Tabs)“**: Den **„Inhalt“** eines Tabs über das Symbol für dynamische Quellen an ein Metafeld (Rich Text oder mehrzeiliger Text) binden. Leere Tabs entfallen.

## Vorbestellung und Swatches

- **Vorbestellung:** Aktivieren Sie bei der Variante „Weiterverkaufen, wenn nicht auf Lager“. Bei Bestand 0 heißt der Knopf „Vorbestellen“. Einen Text wie „Mitte Dezember“ tragen Sie im Varianten- oder Produkt-Metafeld `custom.preorder_date` ein; er erscheint als „Voraussichtlicher Versand: …“. Welches Metafeld gelesen wird, legen Sie auf der Produktseite im Block „Kauf-Buttons“ fest und für die Schnellansicht unter **Theme-Einstellungen → „Produktdaten“ → „Metafeld: voraussichtlicher Versand (Schnellansicht)“**.
- **Farbfelder:** Legen Sie in Shopify für Optionswerte (z. B. Geschmack) Swatches an (Farbe oder Bild). Refill zeigt sie in der Variantenauswahl, auf Karten und in Filtern.
