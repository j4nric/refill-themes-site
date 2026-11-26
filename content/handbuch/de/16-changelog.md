# Änderungsprotokoll

Versionen nach Semantic Versioning. Ab der ersten veröffentlichten Version werden Einstellungen und Block-Typen nicht umbenannt oder entfernt, nur ergänzt – Ihre Anpassungen bleiben bei Updates erhalten.

## 0.9.0 – November 2026

Erste vollständige Fassung aller Seiten und Kernfunktionen.

### 26. November 2026

Rückmeldungen aus dem Theme-Editor (Runde X, Editor-Komfort).

**Neu**
- **„Erneut bestellen“** und **„Zuletzt angesehen“:** **„Im Editor mit Beispieldaten zeigen“** (Standard aus) – im Theme-Editor erscheinen Beispielprodukte aus Ihrem Shop, damit Sie die Gestaltung sehen. Im Shop nie.

**Geändert**
- Vorlagen im Block-Picker heißen jetzt **„Gruppe: untereinander“** / **„Gruppe: nebeneinander“** (vorher „Elemente untereinander/nebeneinander“) und **„Info-Popup: Tabelle“**, **„Info-Popup: Dosiertabelle“**, **„Info-Popup: Größentabelle“**. Die Suche nach „Gruppe“ bzw. „Info-Popup“ findet sie.
- Handbuch: [warum sich ein Block nicht in eine Gruppe ziehen lässt](03-sections-and-blocks.md#bestehenden-block-in-eine-gruppe-oder-spalte-verschieben).

Rückmeldungen aus dem Theme-Editor (Runde X, Darstellung und Layout).

**Neu**
- **Leerraum:** Einstellung **„Richtung“** – in einer Gruppe „Nebeneinander“ wird er automatisch zum waagerechten Abstand. Siehe [Abschnitte und Blöcke](03-sections-and-blocks.md#gruppe-und-spalten).
- **Herkunftskarte:** **„Kartenhöhe“** (Automatisch, Niedrig, Mittel, Hoch).
- **Blogbeiträge** („Erster Beitrag groß“) und **Hervorgehobenes Produkt:** **„Aufteilung Bild / Inhalt“**, damit Bild und Text bündig mit Spalten darunter abschließen. Der Standard bleibt wie bisher.

**Geändert**
- **Parallax** läuft jetzt auch in Firefox und älterem Safari. Im Block „Bild mit Text“ wirkt „Parallax: An“ auch bei ausgeschalteten Animationen (nie bei „Bewegung reduzieren“).
- **Bild mit Markierungen:** **„Spalten der Produktliste“** (vorher „Produkte am Desktop“) mit 1, 2 oder 3 Spalten, bei jeder Anordnung und auch für „Alle Produkte in den Warenkorb“.

### 25. November 2026

Rückmeldungen aus dem Theme-Editor (Runde W).

**Neu**
- **Icons im Block „Text“:** optional ein Icon über oder links neben dem Text – aus der Icon-Bibliothek, als eigenes Bild oder als Freitext (z. B. „01“, mit Schriftgröße, Schrift, Stärke und Farbe). **„Icon mit Text“** hat dieselbe Auswahl und richtet das Icon oben, mittig oder unten zum Text aus. Siehe [Abschnitte und Blöcke](03-sections-and-blocks.md#text).
- **Gruppe:** horizontale Ausrichtung als Knöpfe (links, mittig, rechts) wie bei Text und Überschrift. **„Volle Breite nutzen“** ersetzt „Verteilen“ (Ihre Einstellung bleibt erhalten).
- **„Ausrichtung wie Gruppe“** (Standard an) in „Text“, „Überschrift“, „Linien-Grafik“, „Linien-Animation“, „Zähler-Leiste“ und „Dekor“ (im Inhalt): Der Block übernimmt die Ausrichtung der Gruppe; erst ohne Haken wählen Sie eine eigene. Siehe [Gruppe und Spalten](03-sections-and-blocks.md#gruppe-und-spalten).
- **Produktfinder → Antwort:** vertikale Ausrichtung der Auswahlfelder. **Bild mit Markierungen:** Produkte am Desktop in 2 Spalten. **Vorteilsliste:** nebeneinander in 2 oder 3 Spalten, Icon und Text zentriert. **Tab:** Abstand nach unten (Standard mittel). **Logo-Leiste:** weiches automatisches Durchlaufen für lange Listen (hält beim Überfahren an, still bei „Bewegung reduzieren“).
- **Produktkarten:** Profil-Skalen (z. B. Duft, Textur), Grundpreis und „Vergleichen“ lassen sich je Block abschalten – in „Produkte aus Kollektion“ (auch in Tabs), „Kollektion: Produktliste“, Suche, „Inhaltsstoff: Produkte“, „Zuletzt angesehen“, Produktfinder und „Produktempfehlungen“. Siehe [Kollektionen](05-collections.md#produktkarten).
- **„Kachel-Hintergrund“** für Reels, Inhaltsstoffe im Fokus, Zeitleisten-Einträge, Routine-Schritte, Zähler, Vorteile der Vorteilsliste und „Icon mit Text“: „Keiner“ (Standard, wie bisher), „Wie Sektionshintergrund“ oder eigene Farbe – damit Dekor die Schrift nicht unlesbar macht. Siehe [Abschnitte und Blöcke](03-sections-and-blocks.md#das-prinzip).
- **Kauf-Buttons:** Stil des Knopfs „Jetzt kaufen“ wählbar – „Umriss“ (Standard), „Fläche“ oder „Shopify-Standard“; Ecken und Höhe wie die Theme-Buttons. Siehe [Warenkorb und Checkout](07-cart-and-checkout.md#dynamische-checkout-buttons).
- **Text-Hervorhebung überall:** `[[…]]` markiert Wörter jetzt in allen Überschriften und Texten der Blöcke und Abschnitte, nicht nur in Überschrift, Text und Zitat. In Alternativtexten und Namen für Screenreader fallen die Klammern weg. Siehe [Abschnitte und Blöcke](03-sections-and-blocks.md#das-prinzip).
- Theme-Einstellung **„Hinweise „Nur im Editor sichtbar“ zeigen“** (Layout → Theme-Editor, Standard an).

**Geändert**
- „Jetzt kaufen“ erscheint ohne eigene Einstellung als Umriss statt im Shopify-Standard, damit „In den Warenkorb“ der auffälligste Knopf bleibt.
- „Hover und Buttons“ (Theme-Einstellungen → „Animation“) wirkt jetzt auch auf Primär-Buttons wie „In den Warenkorb“: Die Fläche läuft beim Überfahren ein.
- „Linien-Grafik“, „Linien-Animation“, „Zähler-Leiste“ und „Dekor“ (im Inhalt), die Sie vor diesem Update angelegt haben, folgen jetzt der Ausrichtung der Gruppe. Stand ein solcher Block bewusst anders als seine Gruppe (z. B. eine Linien-Grafik mittig in einer linksbündigen Gruppe), nehmen Sie den Haken „Ausrichtung wie Gruppe“ heraus. Die Vorlagen der Stile sind angepasst.
- Die Demo-Shops zeigen Beispiel-Bewertungen, damit die Sterne an Karten und Produktseite sichtbar sind.

**Entfernt**
- Effekt **„Linie zum Warenkorb“** (Theme-Einstellungen → „Animation“).

**Behoben**
- Primär-Buttons (z. B. Warenkorb im Stil Pumice) wurden beim Überfahren hell bis weiß und unlesbar. Die Fläche wird jetzt immer etwas dunkler, der Text bleibt lesbar.
- Eine Überschrift wie `[[Morgenroutine]]` zeigte in der Vorschau `Morgenroutine<!--hl-end-->`.
- Der Knopf zum Anhalten eines Hintergrundvideos steht nur noch da, wenn er etwas bewirkt (nicht, wenn der Browser das Video selbst angehalten hat oder nicht abspielen lässt).

### 24. November 2026

**Neu**
- Theme-Einstellung **„Warenkorb nach dem Hinzufügen“**: Seitenleiste (wie bisher), Hinweis unter der Kopfzeile oder Warenkorbseite. Siehe [Warenkorb](07-cart-and-checkout.md#warenkorb-nach-dem-hinzufügen).
- **„Proben in Produktlisten ausblenden“** (Standard an): Gratisproben erscheinen nicht mehr in Kollektionen, Suche und Empfehlungen.
- Mengenregeln und Mengenpreise aus Shopify B2B auf der Produktseite und im Warenkorb.
- Block **„Linien-Grafik“** und Gruppe **„Dekor“** im Abschnitt: 13 Linien-Motive, die beim Scrollen entstehen, mitlaufen, wandern, sich drehen oder einen Punkt entlangführen – ohne Layout-Sprung, bei „Bewegung reduzieren“ still. Siehe [Animation](08-animation.md#linien-grafik-und-dekor).

**Verbessert**
- Warenkorb: Änderungen treffen immer die richtige Position, auch wenn der Warenkorb in einem zweiten Tab geändert wurde. Nach „Zurück“ im Browser zeigt der Warenkorb den aktuellen Stand. Abo-Wechsel im Warenkorb nimmt einen Plan der gewählten Variante; Fehler erscheinen an der Position. Fehlermeldungen ohne Text von Shopify zeigen einen verständlichen Hinweis. Die Stufe „Kostenloser Versand“ entfällt, wenn nichts versendet wird (z. B. nur Gutscheine).
- Block **„Zähler-Leiste“**: Kennzahlen ohne Produktbezug mit Wert und Beschriftung, optional hochzählend beim Erscheinen (nie bei „Bewegung reduzieren“). Siehe [Abschnitte und Blöcke](03-sections-and-blocks.md#vorteile--vergleich).
- **Countdown** mit wiederkehrendem Ende: jede Woche, jedes Monatsende oder alle N Tage ab einem Datum – Aktionen laufen nicht mehr ab.
- **Blogbeiträge**: Darstellung „Raster“, „Liste“ oder „Erster Beitrag groß“ und feste Spaltenzahl.
- **Set zusammenstellen**: bis zu 50 Produkte mit „Weitere anzeigen“; feste Variante je Produkt (erste verfügbare oder per Optionswert).
- Abschnitte: Breite **„Schmal (Lesebreite)“** und **„Sprungmarke“** (auch in „FAQ“ und „Aufklappbare Inhalte“), damit Buttons auf Abschnitte verlinken können.
- Überschriftenebene wählbar in „FAQ“, „Aufklappbare Inhalte“, „Zeitleiste“, „Produktfinder“, Tab, Scroll-Story-Folie und Inhaltsstoff im Fokus.
- Produkte aus Kollektion: **„Bilder der ersten Reihe“** (Automatisch / Sofort / Verzögert).

**Verbessert**
- Inhaltsstoff-Lexikon und „Inhaltsstoff: Produkte“ berücksichtigen bis zu 250 Einträge bzw. Produkte (vorher 50); Buchstaben mit Akzent (É, Å) stehen beim Grundbuchstaben.
- Beschreibung eines Inhaltsstoffs als Rich-Text oder mehrzeiliger Text wird überall gleich dargestellt.
- Stumme Endlos-Videos starten erst, wenn Bewegung erlaubt ist, und halten außerhalb des Sichtfelds an; Vimeo ohne Tracking (`dnt`).
- Vollbild der Produktgalerie: vergrößerten Ausschnitt mit den Pfeiltasten verschieben. Videos und 3D-Modelle halten beim Weiterblättern an.
- Leere Blöcke (FAQ, Zeitleiste, Produktfinder, Pflichtangaben) erscheinen im Shop nicht mehr; im Editor erklärt ein Hinweis, was fehlt.
- Erneut bestellen: Liste und Knopf nutzen dieselben Positionen; Produkte, die es nur im Abo gibt, sind markiert und werden nicht hinzugefügt.

### 23. November 2026

**Neu**
- Block **„Reichweitenrechner“**: Kunden tragen ihren Verbrauch pro Tag oder Woche ein und sehen, wie lange eine Packung reicht, dazu das passende Abo-Intervall mit Knopf „Dieses Intervall wählen“. Auch im Block „Hervorgehobenes Produkt“ (Schalter „Reichweitenrechner anzeigen“). Siehe [Abo](10-subscriptions.md).
- Block **„Ersparnisrechner“**: Abo gegenüber Einzelkauf, hochgerechnet auf ein Jahr, optional mit „Weniger Verpackung“ aus einem Metafeld. Teilt den Verbrauch mit dem Reichweitenrechner.
- Beide Blöcke in den Produktvorlagen der Stile Refill, Mortar und Pumice.
- Block **„Profil-Skalen“**: Eigenschaften wie Geschmack, Textur oder Löslichkeit als Kästchen, Punkte oder Balken („3/5“), aus dem Metafeld `custom.profile` (JSON oder Text) oder aus Einträgen im Editor; optional als Kurzfassung auf Produktkarten. Siehe [Produktdaten](09-product-data.md#profil-skalen).
- Block **„Routine mit Produkten“**: Schritte mit Zeitpunkt, Text und verknüpftem Produkt, Gesamtpreis und „Alle in den Warenkorb“ (ausverkaufte werden übersprungen). Siehe [Produktseite](06-product-page.md#routine-mit-produkten).
- **Gratisprobe im Warenkorb**: Ab einem Bestellwert eine Probe aus einer Kollektion wählen; neue Stufe „Gratisprobe“ im Fortschrittsbalken, automatisches Entfernen unter der Schwelle. Siehe [Warenkorb](07-cart-and-checkout.md#gratisprobe-im-warenkorb).
- Stile: Mortar zeigt ein Geschmacksprofil und ein Tee-Ritual, Pumice Textur/Duft und eine Gesichtsroutine, Refill Löslichkeit/Geschmack und eine Morgen-/Abendroutine.

### 22. November 2026

**Neu**
- Kopfzeile: Logo-Größe nach **Höhe** statt Breite (Block „Logo“ → „Logo-Größe nach“): „Logo-Höhe Desktop“ (32 px), „Logo-Höhe Handy“ (28 px) und „Logo-Höhe beim Kleben“ (28 px); die Breite folgt dem Seitenverhältnis. Quadratische Scroll-Logos werden damit nicht mehr zu groß. „Breite (bisher)“ bleibt wählbar.
- Kopfzeile: Suche, Konto und Warenkorb einzeln als „Text“, „Symbol“ oder „Symbol und Text“ (Block „Suche, Konto, Warenkorb“ → „Darstellung“, ab 990 px; am Handy Symbole).
- Warenkorb: **„Anzahl im Warenkorb“** unter Theme-Einstellungen → „Warenkorb“ – „Automatisch“ (wie bisher), „In Klammern (2)“, „Blase mit Zahl“, „Punkt ohne Zahl“, „Nur Zahl“; Farbe der Blase aus dem Farbschema oder den Markenfarben. Gleich in Kopfzeile, Drawer-Titel und Warenkorbseite.
- Markenfarben auch für „Hintergrund/Text beim Kleben“ (Kopfzeile) und „Hervorgehobene Menüpunkte“ (Menü).
- **Buttons:** neuer Stil „Tertiär“ und „Button-Größe“ („Normal“, „Klein“) im Block „Button“, in Scroll-Story-Folien und beim Link „Alle Beiträge“; Aussehen des Tertiär-Buttons (Text mit Pfeil oder getönte Fläche, Farbe aus Schema oder Markenfarben) unter Theme-Einstellungen → „Buttons“.
- Blogbeiträge: Link „Alle Beiträge“ ein/aus, eigener Text, als Button mit Stil und Größe.
- Fußzeile: Stil der Spaltenüberschriften (Farbe, Schrift, Größe, fett, Versalien) im Abschnitt „Fußzeile“.
- Button „Nach oben“: Farbe, Schrift, fett und Größe (S/M/L) unter Theme-Einstellungen → „Layout“.
- Produktkarten: „Titelfarbe beim Überfahren“ auch in den Markenfarben.
- Produktkarten: „Titel beim Überfahren unterstreichen“ und „Titelfarbe beim Überfahren“ (Akzent, Text oder Sekundärtext aus dem Farbschema) unter Theme-Einstellungen → „Produktdaten“ → „Produktkarten“. Voreinstellung wie bisher.
- Kopfzeile: Land und Sprache im neuen Stil „Knopf mit Liste“. Neue Einstellung „Darstellung“ im Block „Suche, Konto, Warenkorb“: „Ein Knopf, zwei Spalten“ (Standard, Knopf „DE · EUR / DE“), „Zwei Knöpfe“ (wie in der Fußzeile), „In der Ankündigungsleiste“ oder die bisherige Darstellung als Panel. Im mobilen Menü öffnet die Fläche „Land und Sprache“ dieselbe Liste als Blatt von unten.
- Menü: neue Einstellung „Darstellung der Untermenüs“ – „Automatisch“ (Standard: einfache Untermenüs als schlanke Liste unter dem Menüpunkt, sonst Mega-Menü), „Klassisch: Mega-Menü“ oder „Liste wie Auswahlfelder“. Im Mega-Menü haben Linkzeilen ohne große Bilder jetzt dieselbe Fläche beim Überfahren.
- Theme-Einstellungen **„Markenfarben“**: fünf feste Farben (Akzent 1, Akzent 2, Aktion / Sale, Hervorhebung, Erfolg / Siegel). Blöcke mit Farbwahl – „Badge“, Badge-Farben unter „Produktdaten“, Streichpreis im Block „Preis“ – bieten „Schema-Farbe“, die Markenfarben und „Eigene Farbe“ an.
- **Preisfarben** unter „Markenfarben“ → „Preise“: Farbe für Angebotspreis und Streichpreis auf Produktseite, Produktkarten und im Warenkorb. Die Angebotsfarbe erscheint nur, wenn ein Streichpreis daneben steht; zu schwache Kontraste gleicht das Theme je Farbschema aus.
- Abschnitt „Produktempfehlungen“: „Abstand oben und unten“ und „Breite“ wie die übrigen Abschnitte.
- Zitat und Karussell: „Schriftgröße“ (S–XL) und „Schriftdicke“ (normal/fett) der Zitate; im Karussell für alle Zitate, im Zitat einzeln.
- „Inhaltsstoffe im Fokus“: Schalter „Linie über jedem Inhaltsstoff“.
- Fußzeile: „Länder in der Auswahl“ und „Ländercodes“ im Block „Untere Leiste“ (Positiv-/Negativliste wie in der Kopfzeile).

**Verbessert**
- Optionszeilen (Karte, Set, „Häufig zusammen gekauft“, Schnellansicht): bleiben nach der Wahl offen, bis Sie sie mit × oder Escape schließen; Screenreader melden den neuen Wert. Neues Bearbeiten-Symbol, Fläche dahinter folgt „Ecken“.

**Geändert**
- Stil Refill: Farbschema 2 heißt jetzt „Fläche“ (kühles Hellgrau für Abschnittswechsel), Schema 3 „Hellblau“ (leiser Akzent). Eigene Anpassungen an den Schemata bleiben erhalten.

**Behoben**
- „Bild mit Text“ (z. B. Aufmacher der Startseite): Die Textfläche übernimmt jetzt das Farbschema des Abschnitts. Ein eigenes Schema gibt es mit „Eigenes Farbschema für die Textfläche“.
- Kennzahlen und Kennwerte der Anwendung: lange Werte wie „1 gestrichener Messlöffel“ werden schrittweise kleiner und brechen notfalls um, statt überzulaufen.
- Hinweise, die nur im Theme-Editor erscheinen, sehen überall gleich aus und tragen die Marke „Nur im Editor sichtbar“.
- Brecher-Kachel: Der Knopf steht unter der Fläche, so hoch und so gestaltet wie „In den Warenkorb“ der Produktkarten und auf einer Linie mit ihnen.

### 21. November 2026

**Neu**
- Fußzeile: Land und Sprache als kompakte Knöpfe („Deutschland · EUR €“, „Deutsch“), die eine Liste nach oben öffnen (wie in der Kopfzeile, mit Suche ab neun Ländern und Flaggen; am Handy als Blatt von unten). Kein „Übernehmen“ mehr nötig, gewechselt wird per Klick auf einen Eintrag. Neue Einstellung „Flaggen anzeigen“ im Block „Untere Leiste“.
- Auswahllisten (Sortierung, Variantenliste ohne JavaScript, Land/Sprache ohne JavaScript) im Stil der Aufklapper: Fläche mit kleinem Label im Feld und Pfeil im hellen Punkt; am Handy weiter die gewohnte Systemauswahl.
- Aufklapper in neuem Stil (Akkordeon, FAQ, aufklappbare Produkt-Blöcke): jeder Eintrag als Fläche mit Plus/Minus-Punkt, geöffnet farbig hinterlegt; Rundung folgt „Ecken“, Farben dem Farbschema; dezente Animation beim Öffnen.
- Theme-Einstellung **„Anrede der Kundschaft“** (Theme-Einstellungen → „Sprache und Texte“): Shop-Texte persönlich (du) oder förmlich (Sie); gilt für alle Sprachen mit Höflichkeitsform (u. a. Deutsch, Französisch, Italienisch, Spanisch, Niederländisch, Polnisch, Tschechisch, Portugiesisch).
- **Sieben neue Sprachen** für Shop- und Editor-Texte: Niederländisch, Dänisch, Schwedisch, Finnisch, Polnisch, Tschechisch, Portugiesisch (Portugal). Damit 12 Sprachen; vor dem Einsatz von Muttersprachlern gegenlesen lassen.
- Warenkorbseite am Handy: Kasse-Leiste mit Zwischensumme und „Zur Kasse“, solange die Positionen durchlaufen.
- Warenkorb: Abo-Positionen mit kurzer Lieferzeitleiste („Heute · 21.12. · 20.01.“) und durchgestrichenem Preis ohne Abo; Stückpreis „je …“ ab Menge 2; Bestandsgrenze direkt am Mengenfeld („Nur noch 4 Stück verfügbar.“).
- Statusfarben (Erfolg, Hinweis, Fehler) passen sich je Farbschema an und bleiben auch auf dunklen Schemata lesbar.
- „Hervorgehobenes Produkt“: Galerie als Slider mit Vorschaubildern (neuer Standard) oder Raster.
- „Blogbeiträge“: Einstellung „Blog-Titel als Überschrift“.
- 404-Seite mit Knopf „Zur Suche“.
- Neue Video-Blöcke starten mit einem Beispielvideo von Shopify; die Logo-Leiste zeigt im Editor ein Logo-Symbol als Platzhalter.

**Verbessert**
- Editor: rund 20 Einstellungen erscheinen erst, wenn sie wirken (Warenkorb-Stufen, Hervorhebung im Mega-Menü, Brecher-Kachel, Scroll-Story, Kennzahlen in Produktrastern). Produktkarten-Einstellungen neu gegliedert („Kaufen auf Produktkarten“), „Bild beim Überfahren“ heißt jetzt „Bildbewegung beim Überfahren“.
- Live-Suche: steht erst ab 1200 px fest in der Kopfzeile, darunter und bei Platzmangel klappt sie aus.
- Produktseite ab Tablet-Breite zweispaltig, ohne Leerraum unter der Galerie; „Set zusammenstellen“ am Handy übersichtlicher.
- Theme-Editor: Auswahl von Popup, Info-Popup, Menü oder Menü-Kachel öffnet sie in der Vorschau; Folien und Ankündigungen rücken ins Bild; Animationen blenden im Editor nichts aus.
- Silbentrennung in Überschriften und Kartentiteln nur noch, wenn ein Wort nicht in die Zeile passt.
- Seiten: einheitlicher Abstand oben, Blog-Titelbild nicht mehr beschnitten, Blogtitel höchstens drei Zeilen, Lexikon ohne Leerraum, Ankündigungen am Desktop bei Bedarf zweizeilig, lange Titel in Warenkorb und Empfehlungen gekürzt, Countdown zweistellig.
- Zitat ohne vorgegebenen Namen; „Passt zur Packung“ in Textfarbe statt Akzentfarbe.

**Entfernt und geändert**
- Merkliste entfernt (Herz auf Produktkarten, Button auf der Produktseite, Link in der Kopfzeile, Vorlage `wishlist`): Shopify ordnet Wunschlisten im Theme Store den Apps zu. Bitte eine Wunschlisten-App nutzen.
- Prüfhinweise im Theme-Editor entfernt; die Punkte stehen jetzt als Liste unter [Pflichtangaben](11-compliance.md#5-vor-dem-start-prüfen).
- Knopf „Follow on Shop“ in der Fußzeile ist standardmäßig aus.

**Behoben**
- Land und Sprache ließen sich am Handy nicht öffnen.
- Ankündigungsleiste mit Gutscheincodes machte die Seite am Handy zu breit.
- Doppelte Überschrift im Block „Blogbeiträge“.
- Galerie-Slider mit einem Bild, Brecher-Kachel in der letzten Spalte und am Handy, Platzhaltergrafiken im Shop bei Menü-Kacheln und Scroll-Story-Folien ohne Bild.
- Warenkorbseite: „+“ zeigt die neue Menge sofort.
- Theme-Editor: Nach dem Verschieben eines Abschnitts reagierten Galerie, Karussell und Kopfzeile doppelt oder gar nicht; „Immer nur ein Eintrag offen“ wirkt jetzt auch auf der Landingpage.

**Barrierefreiheit**
- Der Fokus liegt nie mehr unter der klebenden Kopfzeile oder der Kaufleiste und bleibt nach Änderungen im Warenkorb, beim Entfernen von Filtern und im Galerie-Slider erhalten.
- Filter am Handy als Dialog; die Suche als Panel schließt beim Verlassen per Tab und öffnet auch mit der Leertaste.
- Ansagen für Treffer im Länderfilter, Produktanzahl in Menü-Links; im Galerie-Slider nur das aktuelle Bild in der Tab-Reihenfolge.
- Formulare: ungültige Felder farbig umrandet, Fehlermeldungen mit dem Feld verbunden.
- „Bewegung reduzieren“ aus dem Bedienhilfen-Panel wirkt in allen Skripten (Karussell, Galerie, Vollbild, Zahlen, Kopfzeile, Seitenübergänge).

**Ladezeit**
- Nachrangige Funktionen (Popup, Countdown, Set, Video, Scroll-Story u. a.) laden im Leerlauf oder bei der ersten Bedienung.
- Das große Bild oben auf der Startseite lädt zuerst, Kartenbilder unter dem Kollektionsbild später; render-blockierendes CSS um rund zwei Drittel kleiner, Länderliste erst beim Öffnen.
- Lighthouse mobil (Median): Startseite 90, Produktseite 89, Kollektion 87; Desktop 98–99.

### Ergänzungen vom 20./21. November 2026

**Kopfzeile und Navigation**
- Ein gemeinsames Panel unter der Kopfzeile für Untermenüs, Suche sowie Land und Sprache – ohne Flackern beim Wechsel zwischen Menüpunkten, Animation wählbar („Keine“, „Einblenden“, „Aufklappen“).
- Mega-Menü: Breite und Spalten einstellbar, Bilder an Links (klein oder groß), Hervorhebungsspalte mit Produkt, Kollektion oder Bild mit Link, hervorgehobene Menüpunkte mit Farbe und Badge, Öffnen per Klick statt beim Überfahren.
- Mobiles Menü mit Ebenen zum Durchklicken („Zurück“) und Bildkacheln vor, zwischen oder nach den Menüpunkten.
- Land und Sprache in der Kopfzeile: Flagge oder Globus, Flaggen in der Liste, Suchfeld ab neun Ländern, Länder ein- oder ausschließen per ISO-Code.
- Suche als Panel, ausklappendes Feld oder dauerhaft sichtbare Live-Suche; Schnelllinks und Produktvorschläge bei leerem Feld.
- Ankündigungsleiste mit Gutscheincode und Knopf „Kopieren“.
- Kopfzeile beim Kleben: eigene Farben, kompaktere Höhe, kleineres oder eigenes Logo; mehr Darstellungsoptionen für Menü-Links.

**Kollektion und Produktkarten**
- Bildbewegung beim Überfahren: leichter Zoom oder Zoom mit Bewegung zur Maus, kombinierbar mit dem zweiten Bild.
- Varianten auf der Karte wählen (Geschmack, Farbe, Packungsgröße) und direkt in den Warenkorb legen.
- Brecher-Kachel im Produktraster (Bild, Text, Link, Farbschema, 1 oder 2 Spalten breit).
- Endlos-Scrollen („Automatisch beim Scrollen“), Standard-Sortierung je Liste, Bildanpassung und Seitenverhältnis 9 : 16.
- Unterkollektionen per Kollektions-Metafeld; Bewertungssterne auf Karten; eigene Badge-Farben; gleich hohe Karten mit 44 px großen Knöpfen.

**Produktseite**
- Galerie-Anordnungen „Raster gleichmäßig“, „Mosaik“ und „Slider“ mit Vorschaubildern oben, unten, links, rechts oder Punkten/Zähler.
- Vollbild-Galerie statt Bild-Zoom: Bild wächst auf den Bildschirm, Produktinfo gleitet zur Seite, Blättern, Vergrößern, Schließen per Scrollen.
- Variantenbild rückt beim Wechsel an die erste Stelle; die Seite springt nicht mehr.
- Neue Blöcke: „Bewertungssterne“ (aus den Metafeldern der Bewertungs-App), „Häufig zusammen gekauft“, „Info-Popup“ mit Vorlagen Dosier- und Größentabelle, „Vorteilsliste (USPs)“, „Metafeld-Inhalt“.
- „Lieferdatum“ als eine Zeile „Voraussichtlich geliefert bis …“ mit Lieferzeit je Produkt; die Lieferzeitleiste des Abos zeigt dasselbe Datum als „Bei dir“.
- Datentafel: Zahlen rollen beim ersten Sichtbarwerden auf.
- „Hervorgehobenes Produkt“ als eigenständiger Block mit Schaltern für jeden Teil; Brotkrumen mit Eltern-Kollektion per Metafeld oder zuletzt besuchter Kollektion.
- Variantenauswahl mit Variantenbildern, drei Größen, Kacheln ohne Rahmen und „nur Farbfeld“; Farbe des Streichpreises, Position und Link der Marke.

**Warenkorb**
- Fortschrittsbalken mit bis zu drei Stufen (z. B. Gratisversand, Probe, Rabatt), auch in anderen Währungen.
- Empfohlene Produkte automatisch (Shopify-Empfehlungen), aus „Zuletzt angesehen“ oder fest; 1–4 Produkte, auch auf der Warenkorbseite.

**Animation und Bedienhilfen**
- Theme-Einstellungen „Animation“: Hauptschalter, Intensität, Abschnitte einblenden, Produktreihen, Überschriften, Parallax, Linie zum Warenkorb, Hover-Effekte, vier Seitenübergänge.
- Section „Scroll-Story“ mit Folien, die beim Scrollen ineinander übergehen.
- Optionales Bedienhilfen-Panel (Schriftgröße, Kontrast, Abstände, lesbare Schrift, Links, Fokus, Lesemaske, Bewegung reduzieren), standardmäßig aus.

**Editor**
- Einstellungen erscheinen, sobald sie relevant sind; klare Zwischenüberschriften in allen Blöcken.
- Block-Auswahl in 13 Kategorien, empfohlene Blöcke in Produkt und Kollektion, einheitliche Namen („Warenkorb: Positionen“ …).
- Schriftgröße für Fließtext und Labels, eigene Ecken für Buttons und Eingabefelder, „Eigener Text“ als Bezeichnung der Portion.
- Strukturierte Daten für Blogbeiträge (BlogPosting) und mehr Angaben zur Organisation.

**Entfernt vor der ersten Veröffentlichung**
- Social-Media-Felder für Pinterest, Threads und LinkedIn.
- Die Einstellung „Produkt“ in einzelnen Produkt-Blöcken (dafür gibt es „Hervorgehobenes Produkt“).
- Die Einstellung „Link: Abos verwalten“ im Block „Suche, Konto, Warenkorb“ (der Link gehört ins Kundenkonto-Menü).
- Das Bild-Zoom-Fenster (ersetzt durch das Vollbild) und die dreistufige Lieferdatum-Anzeige (ersetzt durch eine Zeile).

### Erste Fassung

**Gestaltung und Grundlagen**
- Drei Stile: Refill (Nahrungsergänzung), Mortar (Gewürze, Tee, Kaffee), Pumice (Naturkosmetik, Drogerie).
- Drei Schriftrollen (Überschriften, Fließtext, Daten und Preise), fünf Farbschemata mit je neun Rollen, Linien statt Flächen.
- Vollständig block-basiert: ein Abschnitt für alle Inhalte, 27 Abschnitt-Vorlagen, Gruppe und Spalten für eigene Layouts.
- Kopfzeile mit Mega-Menü (Produktanzahl je Kollektion, Produkt-Teaser), mobilem Menü, Schnellsuche, Konto-Menü und Warenkorb-Drawer; Fußzeile mit Menüs, Newsletter, Land/Sprache, Zahlungsarten.
- Bedientexte in Deutsch, Englisch, Französisch, Italienisch und Spanisch.
- Rechts-nach-links-Sprachen (Arabisch, Hebräisch, Persisch, Urdu): Layout, Warenkorb und Pfeile spiegeln sich automatisch.
- Block „Bild mit Markierungen“: Produkte direkt im Bild zeigen (Lookbook).

**Kaufen und Wiederkaufen**
- Hervorgehobenes Produkt (Block und Abschnitt-Vorlage), 3D-Modelle mit „In deinem Raum ansehen“, Shop Pay Ratenzahlung unter dem Preis, Geschenkgutschein an Empfänger, dynamische Checkout-Buttons standardmäßig an, Videos und 3D auch in der Schnellansicht.
- Social-Media-Profile (Theme-Einstellungen, Fußzeilen-Block „Social Media“, strukturierte Daten), Knopf „Follow on Shop“, Abschnitt „Eigenes Liquid“, Steuerhinweis im Warenkorb nach Steuereinstellung, Optionen je Warenkorb-Position, Passwortseite mit Logo oder Shopname, Seitenzahlen auf „Alle Kollektionen“, Farbfelder abschaltbar, Kollektionsbild standardmäßig sichtbar.
- Kaufoptionen Einmalkauf/Abo über Selling Plans mit Ersparnis in Prozent und Betrag, Lieferzeitleiste und Option „Abo vorauswählen“.
- Abo-Wechsel je Warenkorb-Position, „Erneut bestellen“ für angemeldete Kunden, Link „Abos verwalten“ im Konto-Menü.
- Mengenstaffel (Packungsgrößen oder Mengenrabatt), „Set zusammenstellen“, Set-Inhalt für feste Bundles.
- Schnellkauf und Schnellansicht von der Produktkarte, Vorbestellung, Benachrichtigung bei Verfügbarkeit, Farbfelder (Swatches), Combined Listings.
- Warenkorb mit Gratisversand-Fortschritt, „Passt dazu“, Bestellnotiz und Geschenkverpackung.
- Abo-Empfehlung passend zur Reichweite der Packung mit Hinweis bei zu langem Intervall.

**Produktangaben**
- Kennzahlen mit Portion, Preis pro Tag bzw. Portion, Reichweite („Reicht 30 Tage – bis …“) und Skalen-Werten („3/5“).
- Branchen-Einstellungen: Bezeichnung der Portion, Preis pro, Tafeltyp der Datentafel, Produktart der Pflichtangaben.
- Datentafel für Nahrungsergänzung, Lebensmittel, Futtermittel, Fütterungstabelle und eigene Spalten.
- Pflichtangaben je Produktart mit Prüfliste im Editor, Produktsicherheit (GPSR) mit Herstellerangaben aus den Theme-Einstellungen.
- Anwendung & Zubereitung mit Kennwerten, Siegel mit Prüfbericht, Inhaltsstoffe im Fokus.
- Inhaltsstoff-Lexikon mit Seite je Inhaltsstoff, „Enthalten in“ und A–Z-Übersicht.
- Lieferdatum mit Versandschluss, Werktagen und Feiertagen; eigene Badges aus Tags und Metafeld.

**Seiten**
- Kollektion und Suche mit Filtern, Sortierung, Unterkollektionen-Leiste und „Mehr laden“.
- Vorlagen für Kontakt, FAQ, Über uns, Landingpage ohne Navigation, Inhaltsstoff-Lexikon, Barrierefreiheitserklärung, Produkt (Abo), Produkt (Bundle), Kollektion mit Bild, Blog, Beitrag, 404, Passwortseite, Geschenkgutschein.
- Popup für Newsletter oder Aktion, Altersabfrage, Button „Nach oben“, Ankündigungsleiste, Countdown, Laufband, Karussell, Video, Logo-Leiste.

**Qualität**
- Barrierefreiheit nach WCAG 2.2 AA, automatisch geprüft.
- Seiten vorab laden (Speculation Rules), Seitenübergänge, bevorzugtes Laden des ersten Produktbilds.
- Strukturierte Daten für Produktgruppen mit GTIN, Grundpreis, Abo-Angeboten, Versand- und Rückgabebedingungen, Datentafel und Bewertungen; Brotkrumen, Organisation, FAQ.
