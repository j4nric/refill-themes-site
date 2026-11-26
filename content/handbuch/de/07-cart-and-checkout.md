# Warenkorb und Kasse

Refill hat einen Warenkorb als seitliches Fenster (Drawer) und eine Warenkorbseite. Beide zeigen dieselben Inhalte und werden ohne Neuladen aktualisiert. Die Kasse (Checkout) stellt Shopify bereit; sie ist nicht Teil des Themes.

## Warenkorb-Drawer

- Öffnet sich, wenn Kunden ein Produkt in den Warenkorb legen oder auf das Warenkorb-Symbol klicken.
- Enthält Positionen mit Mengenauswahl, Abo-Wechsel je Position, den Fortschrittsbalken und „Passt dazu“.
- Bei vielen Positionen scrollt nur die Liste; Zwischensumme und „Zur Kasse“ bleiben unten stehen. Lange Produkttitel stehen in höchstens drei Zeilen.
- Schließt mit Escape, Klick daneben oder dem Schließen-Button; der Fokus kehrt zum Auslöser zurück.
- Ohne JavaScript führt das Warenkorb-Symbol auf die Warenkorbseite.

Der Drawer folgt den Theme-Einstellungen unter **„Warenkorb“** und dem **„Farbschema des Seitenhintergrunds“**.

## Warenkorb nach dem Hinzufügen

Theme-Einstellungen → **„Warenkorb“** → **„Warenkorb nach dem Hinzufügen“**:

| Auswahl | Nach „In den Warenkorb“ | Warenkorb-Symbol |
|---|---|---|
| **„Seitenleiste“** (Standard) | Der Drawer öffnet sich. | öffnet den Drawer |
| **„Hinweis“** | Unter der Kopfzeile erscheint kurz „In den Warenkorb gelegt“ mit Produktname, „Zum Warenkorb“ und „Zur Kasse“. Kunden kaufen ohne Unterbrechung weiter; der Hinweis schließt mit Escape, Klick daneben oder dem Schließen-Button. | öffnet den Drawer |
| **„Seite“** | Die Warenkorbseite öffnet sich. | führt auf die Warenkorbseite, kein Drawer |

Screenreader hören bei „Hinweis“ „In den Warenkorb gelegt: Produktname“; der Fokus bleibt am Kaufknopf. Ohne JavaScript führt jeder Kauf auf die Warenkorbseite. Auf Landingpages (Vorlage „Landing“, Kopfzeile ohne Drawer) öffnet sich immer die Warenkorbseite.

## Anzahl im Warenkorb

Theme-Einstellungen → **„Warenkorb“** → **„Anzahl im Warenkorb“**. Die Darstellung gilt gleich in der Kopfzeile, im Titel des Drawers und auf der Warenkorbseite und aktualisiert sich beim Hinzufügen und Ändern ohne Neuladen.

| Darstellung | Kopfzeile | Drawer-Titel und Warenkorbseite |
|---|---|---|
| **„Automatisch“** (Standard, wie bisher) | „WARENKORB (2)“ neben Text, Blase am Symbol (Handy) | „WARENKORB (2)“; Seite: Label „2 Artikel“ rechts |
| **„In Klammern (2)“** | „(2)“ hinter Wort bzw. Symbol | „Warenkorb (2)“ |
| **„Blase mit Zahl“** | farbige Blase am Symbol bzw. hinter dem Wort | Blase hinter „Warenkorb“ |
| **„Punkt ohne Zahl“** | Punkt am Symbol bzw. hinter dem Wort | Punkt hinter „Warenkorb“ |
| **„Nur Zahl“** | „2“ hinter Wort bzw. Symbol | „Warenkorb 2“ |

**„Farbe von Blase und Punkt“** (bei „Automatisch“, „Blase“ und „Punkt“): „Schema: Akzent“ (Standard), „Schema: Text“ oder eine der Markenfarben; die Zahl darauf ist automatisch Schwarz oder Weiß. Die Rundung folgt „Ecken“ (eckig, leicht gerundet oder rund). Ein leerer Warenkorb zeigt in der Kopfzeile keine Anzahl. Screenreader hören „Warenkorb, 2 Artikel“.

## Warenkorbseite

Vorlage „Warenkorb“ mit dem Abschnitt **„Warenkorb“** und zwei Blöcken:

- **„Warenkorb: Positionen“**: Artikel mit Bild, Optionen (z. B. „Größe: 500 g“), Abo-Plan, Mengenauswahl und Entfernen. **„Empfohlene Produkte zeigen“** (Standard an) blendet „Passt dazu“ unter den Positionen ein.
- **„Warenkorb: Übersicht“**: Zwischensumme, Hinweis zu Steuern und Versand, Fortschrittsbalken, Kasse-Button. Einstellungen: **„Bestellnotiz anzeigen“**, **„Dynamische Checkout-Buttons anzeigen“**.

**Hinweis zu Steuern und Versand** (Bestellübersicht und Drawer): folgt Ihren Steuereinstellungen und dem Land der Kundschaft. Bei Preisen inklusive Steuern erscheint „Inkl. MwSt. Versand wird an der Kasse berechnet.“, sonst „Steuern und Versand werden an der Kasse berechnet.“ Gibt es eine Versandrichtlinie (Einstellungen → Richtlinien), ist „Versand“ ein Link darauf. Enthält der Warenkorb nur Artikel ohne Versand (z. B. Gutscheine), entfällt der Versandteil. Die Texte ändern Sie unter Onlineshop → Themes → … → **Standard-Theme-Inhalte bearbeiten** (Suche „Steuern“).

### Was jede Position zeigt

| Angabe | Beispiel |
|---|---|
| Zeilenpreis, bei Rabatt oder Abo mit durchgestrichenem Normalpreis | ~~19,90 €~~ 17,91 € |
| Stückpreis ab Menge 2 | „je 19,90 €“ |
| Grundpreis | „23,43 €/100 g“ |
| Abo-Plan mit kurzer Lieferzeitleiste | „Heute · 21.12. · 20.01.“ (siehe [Abo](10-subscriptions.md#6-abo-im-warenkorb)) |

**Bestand:** Verfolgt Shopify den Bestand einer Variante und ist Überverkauf aus, lässt sich die Menge nicht über den Bestand erhöhen – statt einer Anfrage erscheint sofort „Nur noch 4 Stück verfügbar.“. Ist der Bestand inzwischen gesunken oder die Position ausverkauft, steht über der Menge „Nur noch 2 Stück verfügbar.“ bzw. „Ausverkauft – bitte entfernen, um zur Kasse zu gehen.“. In allen anderen Fällen korrigiert Shopify die Menge, und das Theme zeigt dessen Meldung.

**Mengenregeln (B2B):** Haben Varianten in einem Katalog Mindestmenge, Schrittweite oder Höchstmenge (Shopify B2B, „Mengenregeln“), zeigt die Position „Mindestmenge: 6 · Schrittweite: 6“. „+“ und „−“ zählen in dieser Schrittweite, „−“ an der Mindestmenge entfernt die Position, eine Eingabe wie 7 wird auf 6 gesetzt (mit Hinweis). Auf der Produktseite gilt dasselbe am Mengenfeld; ohne Mengenfeld legt „In den Warenkorb“ die Mindestmenge hinein. Gibt es Mengenpreise, steht unter dem Kaufknopf die Liste „Mengenpreise: ab 1 je 9,90 € · ab 10 je 8,90 €“.

Rabatte, Bestands- und Fehlermeldungen erscheinen in den Statusfarben, die sich dem Farbschema anpassen – auch im dunklen Drawer gut lesbar (siehe [Erste Schritte](01-getting-started.md#farben)).

### Kasse-Leiste am Handy

Auf der Warenkorbseite steht am Handy ab zwei Positionen eine Leiste mit Zwischensumme und **„Zur Kasse“** am unteren Bildschirmrand, solange die Positionen durchlaufen. Sobald der Kasse-Button der Übersicht ins Bild kommt, verschwindet sie – es stehen nie zwei Kasse-Buttons im Bild. Die Leiste hat keine Einstellung; auf großen Bildschirmen steht die Übersicht ohnehin neben den Positionen.

### Geschenkverpackung

1. Legen Sie ein Produkt „Geschenkverpackung“ mit Preis an – ohne Versand und ohne Kollektion, damit es nicht in Produktlisten erscheint.
2. Theme-Editor → Warenkorbseite → Block **„Warenkorb: Übersicht“** → **„Geschenkverpackung (Produkt)“**: dieses Produkt wählen.

Auf der Warenkorbseite erscheint dann ein Schalter „Als Geschenk verpacken (+2,50 €)“, der das Produkt als eigene Position hinzufügt oder entfernt. Für eine Grußkarte schalten Sie **„Bestellnotiz anzeigen“** ein; Kunden schreiben den Text in die Bestellnotiz.

### Leerer Warenkorb und Suche ohne Treffer

Im Block **Warenkorb: Positionen** (Warenkorbseite) und im Block **Suche: Ergebnisse** (Suchseite) gibt es die Einstellung **Vorschläge, wenn leer**. Wählen Sie eine Kollektion, zum Beispiel „Bestseller“: Ist der Warenkorb leer oder findet die Suche nichts, zeigt der Shop bis zu vier Produkte daraus unter der Überschrift „Beliebt bei anderen“. Ohne Kollektion bleibt es beim Hinweis mit dem Button zum Sortiment.

## Fortschrittsbalken mit Stufen

Der Balken zeigt, wie viel bis zum nächsten Vorteil fehlt – etwa Gratisversand ab 49 €, eine Probe ab 75 € und 10 % Rabatt ab 100 €.

**Theme-Einstellungen → „Warenkorb“ → „Fortschrittsbalken“:**

| Einstellung | Bedeutung |
|---|---|
| „Schwelle für kostenlosen Versand“ | Stufe 1, Betrag in Shop-Währung, z. B. `49`. `0` = aus. |
| „Stufe 2: Schwelle“, „Stufe 2: Vorteil“ | z. B. `75` und „Gratis-Probe“. Stufe 2 erscheint, sobald Stufe 1 über 0 liegt; „Vorteil“, sobald die eigene Schwelle über 0 liegt. |
| „Stufe 3: Schwelle“, „Stufe 3: Vorteil“ | z. B. `100` und „10 % Rabatt“. Stufe 3 erscheint, sobald Stufe 2 über 0 liegt. |

Standard aller Schwellen ist `0` (aus). Eine eingetragene Schwelle bleibt immer sichtbar.

So sieht es im Warenkorb aus: Der Balken reicht bis zur höchsten Stufe, die übrigen Stufen sind als Markierungen eingezeichnet. Darüber steht „Noch 19,79 € bis zur nächsten Stufe: 10 % Rabatt“ (für Stufe 1 „Noch 12,10 € bis zum kostenlosen Versand“), darunter ab zwei Stufen eine Liste mit Betrag und Häkchen für erreichte Stufen. Sind alle erreicht, steht dort „Alle Stufen erreicht“. Mit nur einer Schwelle bleibt es beim einfachen Gratisversand-Hinweis.

**Wichtig:** Das Theme zeigt den Fortschritt nur an. Jeden Vorteil legen Sie selbst in Shopify an:

1. Gratisversand: **Einstellungen → Versand und Zustellung** → Versandtarif mit Bedingung „ab 49 €“.
2. Geschenk oder Rabatt: **Rabatte → Rabatt erstellen** → automatischer Rabatt mit Mindestbestellwert (z. B. „Kaufe X, erhalte Y“ für eine Gratis-Probe oder 10 % ab 100 €).
3. Beträge in Theme und Rabatt gleich halten. Versprechen Sie im Text nur, was ein Rabatt tatsächlich einlöst.

**Andere Währungen (Märkte):** Bezahlt jemand in einer anderen Währung, rechnet der Balken die Schwellen mit dem aktuellen Kurs um und rundet auf ganze Beträge auf. Shopify rundet Preise je Markt eigenständig – der Balken ist dort eine Näherung. Kann der Browser den Kurs nicht ermitteln, bleibt der Balken ausgeblendet.

Die Schwelle für Gratisversand fließt auch in die strukturierten Daten ein, siehe [Ladezeit und SEO](14-performance-and-seo.md).

## Gratisprobe im Warenkorb

Ab einem Bestellwert wählen Kunden im Warenkorb eine Gratisprobe aus einer Kollektion – etwa einen Probierbeutel Protein, 10 g Tee oder eine Probiergröße Creme. Die Probe kommt als eigene Position in den Warenkorb (mit „Gratisprobe“ gekennzeichnet, Menge höchstens 1).

**1. Probe-Produkte anlegen.** Das Theme ändert keine Preise. Damit die Probe nichts kostet, gibt es zwei Wege:

- Probe-Produkte mit **Preis 0 €** anlegen (empfohlen). Versand nach Bedarf, Bestand verfolgen, damit leere Proben nicht erscheinen.
- Oder Probe-Produkte mit Preis und einer **automatischen Rabattaktion** (z. B. „Kaufe X, erhalte Y“ oder 100 % auf die Proben-Kollektion ab Mindestbestellwert). Der Editor weist auf Proben mit Preis hin.

Proben in keine andere Kollektion legen. Bequem: eine **automatische Kollektion** mit der Bedingung „Produkt-Tag ist gleich *probe*“. Die Einstellung **„Proben in Produktlisten ausblenden“** (Standard an) hält sie aus Kollektionsseiten, „Alle Produkte“, Suche und Schnellsuche, Produktempfehlungen, „Häufig zusammen gekauft“, „Passt dazu“ und dem Block „Produktraster“ heraus – nur die Seite der Proben-Kollektion selbst zeigt sie. Grenzen: Shopify zählt die Proben bei „24 Produkte“ und der Seitenzahl weiter mit (auf einer Seite stehen dann eine oder zwei Karten weniger), und es gelten die ersten 50 Produkte der Proben-Kollektion. Ganz aus der Suche (auch für Suchmaschinen) nehmen Sie eine Probe mit dem Metafeld `seo.hidden` = 1.

**2. Theme-Einstellungen → „Warenkorb“ → „Gratisprobe“:**

| Einstellung | Wirkung |
|---|---|
| „Kollektion mit Proben“ | Ohne Kollektion ist die Funktion aus. Es erscheinen bis zu 8 verfügbare Produkte. |
| „Ab Bestellwert“ | Betrag in Shop-Währung **ohne** Proben, z. B. `40`. `0` = ohne Mindestwert (mindestens ein anderes Produkt muss im Warenkorb liegen). |
| „Proben pro Bestellung“ | 1–3, Standard 1. |
| „Auswahl im Warenkorb-Drawer zeigen“ | Standard an. Auf der Warenkorbseite steuert der Block **„Warenkorb: Übersicht“** → **„Gratisprobe zeigen“** die Anzeige (unter dem Fortschrittsbalken). |
| „Proben in Produktlisten ausblenden“ | Standard an. Siehe oben. |

**So sieht es aus:**

- **Unter der Schwelle** zeigt der [Fortschrittsbalken](#fortschrittsbalken-mit-stufen) die Stufe „Gratisprobe“ und „Noch 12,10 € bis zur Gratisprobe“ – ein eigener Hinweis entfällt, damit nichts doppelt steht.
- **Ab der Schwelle** erscheint „Gratisprobe – Wähle deine Gratisprobe.“ mit den Proben (Bild, Titel, „Gratis“, Button „Wählen“). Eine gewählte Probe ist mit „✓ Gewählt“ und „Entfernen“ markiert. Bei einer erlaubten Probe lässt sie sich mit „Tauschen“ gegen eine andere wechseln.
- **Fällt der Warenkorb unter die Schwelle** (Menge verringert, Artikel entfernt), entfernt das Theme die Probe und zeigt „Gratisprobe entfernt: Der Bestellwert ohne Proben liegt unter 40,00 €.“ Liegen mehr Proben im Warenkorb als erlaubt oder eine Probe mehrfach, korrigiert es das ohne Hinweis.
- **Andere Währungen (Märkte):** Die Schwelle wird wie beim Fortschrittsbalken umgerechnet; ohne Kurs bleibt die Auswahl verborgen.
- **Ohne JavaScript** lassen sich Proben wählen (die Seite lädt neu), aber nicht tauschen, und das automatische Entfernen entfällt. Für eine harte Grenze an der Kasse legen Sie die Rabattaktion mit Mindestbestellwert an (Weg 2 oben).

## Empfohlene Produkte („Passt dazu“)

Im Warenkorb-Fenster und auf der Warenkorbseite schlägt „Passt dazu“ weitere Produkte vor, jeweils mit „Hinzufügen“. **Theme-Einstellungen → „Warenkorb“ → „Empfohlene Produkte“:**

| Einstellung | Wirkung |
|---|---|
| „Quelle“ | „Automatisch (Shopify-Empfehlungen)“ (Standard): passende Produkte zum zuletzt hinzugefügten Artikel. „Zuletzt angesehen“: Produkte, die sich die Person zuletzt angesehen hat. „Feste Auswahl“: nur Ihre Liste. |
| „Art der Empfehlung“ | nur bei „Automatisch“: „Ähnliche Produkte“ oder „Ergänzende Produkte“ (gepflegt in der App Search & Discovery; ohne Einträge nimmt das Theme ähnliche Produkte). |
| „Anzahl Produkte“ | 1–4, Standard 2. |
| „Feste Auswahl“ | Produkte, z. B. Probiergrößen oder Zubehör. Bei den anderen Quellen füllen sie fehlende Plätze auf; ohne JavaScript erscheinen nur sie. |

Produkte, die schon im Warenkorb liegen, werden nie empfohlen. Titel stehen in höchstens zwei Zeilen. Produkte mit mehreren Varianten oder nur im Abo bekommen „Optionen wählen“ (Link zur Produktseite) statt „Hinzufügen“. Auf der Warenkorbseite schalten Sie den Bereich im Block „Warenkorb: Positionen“ mit **„Empfohlene Produkte zeigen“** aus.

Für Empfehlungen auf der Produktseite gibt es den Abschnitt **„Produktempfehlungen“** („Art der Empfehlung“: „Ähnliche Produkte“ oder „Ergänzende Produkte“) und den Block **„Häufig zusammen gekauft“**, siehe [Produktseite](06-product-page.md#häufig-zusammen-gekauft).

## Set zusammenstellen

Kunden wählen aus einer Kollektion mehrere Produkte und legen sie gemeinsam in den Warenkorb – etwa „3 Tees nach Wahl, 10 % Rabatt“.

1. Legen Sie eine Kollektion mit den Produkten für das Set an.
2. Fügen Sie auf einer beliebigen Seite die Abschnitt-Vorlage **„Set zusammenstellen“** ein (oder den Block **„Set zusammenstellen“**).
3. Einstellungen:
   - **„Kollektion“**
   - **„Anzahl Produkte“** – wie viele Produkte der Kollektion zur Wahl stehen
   - **„Mindestmenge im Set (Stück)“**
   - **„Davon mindestens verschiedene Produkte“** – verhindert, dass die Mindestmenge mit einem einzigen Produkt erreicht wird
   - **„Höchstmenge pro Produkt (Stück)“**
   - **„Angebotstext“** – beschreibt den Rabatt
4. Legen Sie unter **Rabatte** einen passenden **automatischen Rabatt** an, z. B. 10 % auf Produkte dieser Kollektion ab 3 Artikeln. Das Theme gewährt selbst keinen Rabatt – der Angebotstext muss zur Rabattregel passen.

Produkte mit mehreren verfügbaren Varianten erhalten im Set je Option eine Zeile mit Stift wie auf den Produktkarten (siehe [Varianten auf der Karte](05-collections.md#varianten-auf-der-karte)); Werte, die es nicht mehr gibt, sind gesperrt. Ohne JavaScript steht dort eine einfache Auswahlliste. Bereits vorhandene Positionen im Warenkorb bleiben erhalten. Ist die Mindestanzahl mit den Einstellungen nicht erreichbar, zeigt der Editor einen Hinweis.

## Mengenstaffel

Block **„Mengenstaffel“** auf der Produktseite, **„Art der Staffel“**:

### Packungsgrößen (Varianten)

1. Legen Sie Packungsgrößen als Varianten an, z. B. Option „Packungsgröße“ mit „1 Dose“, „3 Dosen“, „6 Dosen“.
2. Im Block **„Varianten-Option“** den Optionsnamen eintragen (leer: die letzte Option).

Der Block zeigt je Größe Preis, Grundpreis und die Ersparnis gegenüber der kleinsten Packung. Ein Klick wechselt die Variante.

### Mengenrabatt

1. Legen Sie unter **Rabatte** einen automatischen Mengenrabatt an, z. B. ab 3 Stück 10 %, ab 6 Stück 15 %.
2. Tragen Sie dieselben Stufen im Block unter **„Stufen“** ein, eine Stufe pro Zeile: `Menge | Rabatt in %`, z. B.

```
1 | 0
3 | 10
6 | 15
```

Die Auswahl setzt die Menge; den Rabatt berechnet Shopify im Warenkorb („Der Mengenrabatt wird im Warenkorb berechnet.“). Halten Sie die Stufen im Block und die Rabattregel immer gleich.

## Feste Bundles

Für Bundles, die als eigenes Produkt verkauft werden (z. B. mit der App „Shopify Bundles“), gibt es die Vorlage `product.bundle` mit dem Block **„Set-Inhalt (Bundle)“**. Er listet die enthaltenen Produkte und ihre Mengen und zeigt die Ersparnis gegenüber dem Einzelkauf.

Der Block liest die Varianten-Metafelder **„Metafeld: Produkte im Bundle“** (Standard `custom.component_reference`) und **„Metafeld: Mengen“** (Standard `custom.component_quantities`). Ohne diese Daten blendet er sich aus.

## Erneut bestellen

Der Block **„Erneut bestellen“** zeigt angemeldeten Kunden ihre letzte Bestellung (**„Angezeigte Positionen“**) und legt alle verfügbaren Positionen mit einem Klick erneut in den Warenkorb. Für Gäste und Kunden ohne Bestellung blendet er sich aus. Voraussetzung: Kundenkonten sind aktiviert.

## Dynamische Checkout-Buttons

Buttons wie PayPal, Apple Pay oder Shop Pay schalten Sie getrennt ein:

- Produktseite: Block **„Kauf-Buttons“** → **„Dynamische Checkout-Buttons anzeigen“** (standardmäßig an; bei Produkten mit Abo immer ausgeblendet, bei Geschenkgutscheinen, solange „An jemand anderen senden“ gewählt ist).
- Warenkorbseite: Block **„Warenkorb: Übersicht“** → **„Dynamische Checkout-Buttons anzeigen“**.

Welche Zahlungsarten erscheinen, legen Sie unter **Einstellungen → Zahlungen** fest.

**Aussehen:** Im Block **„Kauf-Buttons“** wählen Sie unter **„Stil des Knopfs „Jetzt kaufen““**, wie der Knopf ohne Markenlogo aussieht: **„Umriss (wie Sekundär-Buttons)“** (Standard, damit „In den Warenkorb“ der auffälligste Knopf bleibt), **„Fläche (wie Primär-Buttons)“** oder **„Shopify-Standard“**. Ecken und Höhe folgen in allen Fällen den Theme-Buttons (Theme-Einstellungen → „Layout“ → „Ecken“ → „Buttons“). Gebrandete Knöpfe wie Shop Pay, PayPal, Apple Pay oder Google Pay stellt Shopify in einem abgeschlossenen Bereich dar: Das Theme kann dort nur Ecken und Höhe anpassen (auch im Warenkorb), Farben, Schrift und Hover legt der Zahlungsanbieter fest.
