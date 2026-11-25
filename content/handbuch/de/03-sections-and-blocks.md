# Abschnitte und Blöcke

Jede Seite in Refill besteht aus **Abschnitten**, jeder Abschnitt aus **Blöcken**. Der Abschnitt bestimmt Farbschema, Abstand und Breite; die Blöcke bestimmen den Inhalt. Fast jeder Block lässt sich in jeden Abschnitt setzen, auch ineinander.

## Das Prinzip

| Ebene | Beispiel | Einstellungen |
|---|---|---|
| Abschnitt | „Abschnitt“ | „Farbschema“, „Abstand oben und unten“, „Breite“ („Seitenbreite“ / „Volle Breite“ / „Schmal (Lesebreite)“), „Linie über dem Abschnitt“, „Sprungmarke“, Gruppen „Dekor“ und „Hintergrund“ |
| Layout-Block | „Gruppe“, „Spalten“, „Karussell“ | Anordnung der Blöcke darin |
| Inhalts-Block | „Überschrift“, „Bild“, „Kennzahlen“ | Inhalt und Darstellung |

**Schmal (Lesebreite):** Der Inhalt steht mittig in einer gut lesbaren Breite (etwa 75–80 Zeichen), z. B. für eine FAQ oder einen längeren Text. **Sprungmarke:** Ein Name wie `versand` (ohne # und Leerzeichen). Ein Button oder Link mit dem Ziel `#versand` springt dann zu diesem Abschnitt – auch von einer anderen Seite aus (`/pages/faq#versand`). Die Blöcke „FAQ“ und „Aufklappbare Inhalte“ haben dieselbe Einstellung, damit mehrere Fragengruppen in einem Abschnitt eigene Sprungmarken bekommen. So entsteht z. B. eine FAQ mit Inhaltsverzeichnis: oben eine Gruppe mit Buttons (Stil „Tertiär“ oder Textlink) auf `#abo`, `#versand`, `#konto`, darunter je Gruppe ein FAQ-Block mit dieser Sprungmarke.

Blöcke fügen Sie im Theme-Editor mit **„Block hinzufügen“** unter einem Abschnitt oder innerhalb einer Gruppe hinzu. Der Picker zeigt eine Vorschau und ordnet die Blöcke in Kategorien (siehe unten).

Dieselben vier Layout-Einstellungen haben auch **„Eigenes Liquid“** und **„Produktempfehlungen“**. Ausnahmen mit Absicht: „Scroll-Story“ (jede Folie füllt das Fenster und hat ein eigenes Farbschema), „Popup“ und „Altersabfrage“ (Overlays über der Seite) sowie Kopf- und Fußzeile mit eigenen Einstellungen.

**Dekor:** Jeder „Abschnitt“ kann ein Linien-Motiv hinter dem Inhalt tragen. Unter **„Dekor“** wählen Sie „Motiv“ (Standard „Keins“), „Position“ („Hintergrund (ganze Fläche)“, eine der vier Ecken, „Rand links“/„Rand rechts“, „Hinter der Überschrift (oben)“, „Übergang zum nächsten Abschnitt (Unterkante)“), „Größe“ (Breite im Verhältnis zum Abschnitt), „Farbe“ (Rollen des Farbschemas oder Markenfarbe; für ruhigen Hintergrund „Schema: Linie“), „Deckkraft“, „Beim Scrollen“, „Strichstärke“ und „Spiegeln“. Das Motiv verschiebt nichts, fängt keine Klicks ab und ist für Screenreader unsichtbar; in den Ecken und an den Rändern ragt es etwas über die Kante und wird dort abgeschnitten. Motive und Scroll-Verhalten sind dieselben wie beim Block „Linien-Grafik“ (unten unter „Medien“ und in [Animation](08-animation.md#linien-grafik-und-dekor)). In Rechts-nach-links-Sprachen tauschen „links“ und „rechts“ die Seiten.

**Hintergrundvideo:** Unter **„Hintergrund“** wählen Sie ein „Hintergrundvideo“ aus Ihren Shopify-Dateien (Standard leer = kein Video). Es läuft stumm in Schleife hinter dem Inhalt, startet erst, wenn der Abschnitt sichtbar ist, und hält außerhalb des Sichtbereichs an. Unten rechts erscheint ein kleiner Knopf zum Anhalten (für Besucherinnen und Besucher, die bewegte Inhalte stören). „Vorschaubild“ ist das Standbild vor dem Start; leer nimmt das Theme das Vorschaubild des Videos. Bei „Bewegung reduzieren“ (Betriebssystem oder [Bedienhilfen-Panel](13-accessibility.md#bedienhilfen-panel-optional)) bleibt es beim Standbild, das Video wird gar nicht geladen. „Überlagerung“ legt die Hintergrundfarbe des Farbschemas über das Video – bei hellen Schemata hellt das auf, bei dunklen dunkelt es ab. Stellen Sie sie so hoch, dass der Text mindestens 4,5 : 1 Kontrast hat (Standard 50 %; ruhige, helle Videos brauchen weniger). „Bildausschnitt“ bestimmt, welcher Teil des Videos sichtbar bleibt, wenn es beschnitten wird (Mitte, oben, unten, links, rechts). Steht der Abschnitt ganz oben auf der Seite, schalten Sie **„Standbild sofort laden (Abschnitt ganz oben)“** ein – und nur dort; das Video selbst lädt nie vorab. Kurze, ruhige Videos ohne Ton und ohne Text im Bild eignen sich am besten (z. B. 10 s, 1920 × 1080).

Leere Abschnitte – etwa „Zuletzt angesehen“ ohne Verlauf – klappen im Shop ein. Im Editor bleiben sie sichtbar, damit Sie sie finden.

**Hinweise im Editor:** Fehlt einem Block etwas (kein Produkt auf dieser Seite, leeres Metafeld, noch keine Bewertungen, Verlauf von „Zuletzt angesehen“), zeigt der Editor an seiner Stelle einen Hinweis mit orangem Balken und der Marke **„Nur im Editor sichtbar“**. Kundinnen und Kunden sehen ihn nie; im Shop entfällt der Block oder er bleibt leer.

**Auswählen im Editor:** Klicken Sie in der Seitenleiste auf ein Popup, ein Info-Popup, den Block „Menü“ oder ein „Bild“ im Menü, öffnet die Vorschau es (Mega-Menü am Desktop, Menü am Handy). Gewählte Folien im Karussell und Ankündigungen in der Leiste rücken ins Bild. Effekte aus [Animation](08-animation.md) blenden im Editor keine Inhalte aus.

## Einstellungen erscheinen, wenn sie relevant sind

Viele Einstellungen zeigt der Editor erst, wenn sie etwas bewirken. So bleibt die Seitenleiste übersichtlich, ohne dass Möglichkeiten fehlen. Beispiele:

| Sie wählen … | … dann erscheint |
|---|---|
| Block „Produktbilder“ → „Anordnung“ „Slider“ | „Vorschaubilder“, bei „Keine“ zusätzlich „Position anzeigen als“ |
| Kopfzeile → „Kopfzeile beim Scrollen“ ≠ „Scrollt mit“ | Farben und Größe beim Kleben |
| Theme-Einstellungen → „Animation“ → „Animationen aktivieren“ | alle Effekte; „Art“ bzw. „Aufbau“ erst mit dem jeweiligen Effekt |
| „Bedienhilfen-Panel anzeigen“ | Position und angebotene Funktionen |
| Warenkorb → „Schwelle für kostenlosen Versand“ größer als 0 | „Stufe 2: Schwelle“; mit einer Schwelle über 0 „Stufe 2: Vorteil“ und „Stufe 3: Schwelle“ |
| Block „Menü“ → Hervorhebung mit Produkt, Kollektion, Bild oder Titel | „Dachzeile“, „Position“, „Nur bei diesen Menüpunkten“ |
| Brecher-Kachel oder Folie der Scroll-Story mit Link bzw. Beschriftung | „Beschriftung des Knopfs“ bzw. „Link“ und „Stil“ |
| Theme-Einstellungen → „Produktdaten“ → Metafeld für Portionen eingetragen | in Produktrastern „Kennzahlen anzeigen“ und „Preis pro Tag bzw. Portion anzeigen“ |
| „Länder in der Auswahl“ ≠ „Alle Länder der Märkte“ | „Ländercodes“ |
| Block „Bild“ mit Bild | „Alternativtext“ und „Sofort laden“ |
| Block „Button“ mit Beschriftung | „Link“ und „Stil“ |
| Badge-Farben: „Badge 1: Text“ ausgefüllt | „Hintergrund“ und „Textfarbe“ |

Ausgeblendete Einstellungen behalten ihren Wert. Schalten Sie die Bedingung später wieder ein, ist alles wie vorher.

Auswahlfelder für Produkte, Kollektionen und Seiten kann Shopify nicht ausblenden; sie bleiben immer sichtbar und wirken nur, wenn die zugehörige Option gewählt ist (der Info-Text darunter sagt, wann).

> Sie vermissen eine Einstellung, die im Handbuch steht? Prüfen Sie, ob die Einstellung darüber eingeschaltet bzw. passend gewählt ist.

## Abschnitt-Vorlagen

Über **„Abschnitt hinzufügen“** finden Sie fertig bestückte Abschnitte. Sie müssen das Block-Prinzip nicht kennen, um sie zu nutzen – alle Teile bleiben danach einzeln bearbeitbar. Die Kategorien sind dieselben wie bei den Blöcken.

| Kategorie | Abschnitt-Vorlagen |
|---|---|
| Text | „Einleitung“, „Textspalten“, „Kundenstimmen“, „Blogbeiträge“ |
| Buttons & Aktionen | „Countdown“, „Laufband“, „Popup“, „Ankündigungsleiste“ |
| Medien | „Bild mit Text“, „Bild mit Markierungen“, „Logo-Leiste“, „Scroll-Story“, „Video“ |
| Layout | „Leerer Abschnitt“ |
| Aufklappen & Tabs | „Häufige Fragen“, „Aufklappbare Inhalte“, „Registerkarten (Tabs)“ |
| Vorteile & Vergleich | „Vorteile mit Icons“, „Vergleichstabelle“, „Zeitleiste“ |
| Formulare | „Newsletter“, „Produktfinder“, „Altersabfrage“ |
| Produkte & Kollektionen | „Produktraster“, „Hervorgehobenes Produkt“, „Kollektionsliste“, „Set zusammenstellen“, „Erneut bestellen“, „Zuletzt angesehen“, „Produktempfehlungen“ |
| Produkt: Angaben | „Siegel & Zertifikate“ |
| Inhaltsstoffe | „Inhaltsstoffe im Fokus“ |
| Seitenvorlagen | „Eigenes Liquid“ |

Dazu kommen Abschnitte mit festen Aufgaben, die nur in ihrer Vorlage stehen: **„Produkt“**, **„Kollektion“**, **„Suche“**, **„Warenkorb“**, **„Kopfzeile“** und **„Fußzeile“**.

**„Scroll-Story“** ist eine eigene Section mit Folien, die beim Scrollen ineinander übergehen, siehe [Animation](08-animation.md#section-scroll-story).

**Abschnitt „Eigenes Liquid“** (Kategorie „Seitenvorlagen“): ein eigener Abschnitt mit einem Code-Feld (Liquid und HTML), auf allen Vorlagen verfügbar, mit Farbschema, Abstand, Breite und Linie wie andere Abschnitte. Gedacht für Code-Schnipsel von Apps oder Agenturen, die einen eigenen Abschnitt erwarten. Code innerhalb eines bestehenden Abschnitts setzen Sie mit dem gleichnamigen Block ein. Fehlerhafter Code kann die Seite stören; prüfen Sie die Seite nach dem Einfügen in der Vorschau.

## Gruppe und Spalten

**„Gruppe“** fasst Blöcke zusammen. Im Picker gibt es sie als **„Elemente untereinander“** und **„Elemente nebeneinander“**.

- **„Richtung“**: „Untereinander“ oder „Nebeneinander“. Nebeneinander teilen sich alle Inhalte den Platz und brechen um, wenn es eng wird; Buttons und Badges behalten ihre Breite.
- **„Horizontale Ausrichtung“**, **„Vertikale Ausrichtung“**, **„Abstand zwischen Blöcken“**.
- **„Innenabstand“**, **„Rahmenlinie anzeigen“**, **„Eigenes Farbschema verwenden“** – damit wird eine Gruppe zur Karte oder Infobox.

**„Spalten“** erzeugt gleich breite Spalten, die auf dem Handy umbrechen.

- **„Spalten auf großen Bildschirmen“** und **„Spalten auf kleinen Bildschirmen“** (1 oder 2).
- **„Linien zwischen Spalten“** für den sachlichen Datenblatt-Stil.

Faustregel: Für Raster mit gleich breiten Kacheln „Spalten“, für Text neben Button oder Bild neben Text „Gruppe“.

## Alle Blöcke nach Picker-Kategorie

Der Picker **„Block hinzufügen“** ordnet die Blöcke in 13 Kategorien; innerhalb einer Kategorie stehen sie alphabetisch. Über das Suchfeld oben finden Sie jeden Block auch direkt.

- **Empfohlene Blöcke:** In den Abschnitten **„Produkt“**, **„Kollektion“**, **„Suche“** und **„Warenkorb“** zeigt der Picker zuerst die passenden Blöcke (z. B. Produktbilder, Preis, Kauf-Buttons); alle übrigen erreichen Sie über **„Alle anzeigen“**. In Gruppen und Spalten stehen immer alle Blöcke zur Wahl.
- **Seitenvorlagen:** Blöcke mit einem Doppelpunkt im Namen, etwa **„Warenkorb: Positionen“**, gehören zu einer bestimmten Vorlage. An anderer Stelle zeigen sie nichts oder nur einen Hinweis im Editor. Sie stehen gesammelt in der Kategorie „Seitenvorlagen“, damit Sie sie nach versehentlichem Löschen wieder einfügen können. Ganz ausblenden lassen sie sich in anderen Vorlagen nicht: Shopify erlaubt diese Einschränkung nur für Abschnitte, nicht für Blöcke.
- **Unterblöcke** wie „Eintrag“, „Frage“, „Tab“, „Vorteil“, „Brecher-Kachel“, „Folie“ oder „Bild“ (im Menü) erscheinen nur im Picker ihres Eltern-Blocks und stehen dort ohne Kategorie oben.

### Text

| Block | Zweck |
|---|---|
| Überschrift | Überschrift mit optionaler Dachzeile; „Gliederungsebene (SEO)“ wählbar. |
| Text | Formatierter Text in drei Größen, normal oder gedämpft. |
| Zitat | Zitat mit Name und Rolle; ohne **„Name der Person“** erscheint es ohne Namenszeile, „Rolle oder Ort“ erst mit Namen. Unter **„Darstellung“**: **„Schriftgröße“** (S–XL) und **„Schriftdicke“** („Normal“, „Fett“); **„Standard“** übernimmt die Einstellung des Karussells, in dem das Zitat steht. |
| Badge | Kleines Label, „Rahmen“ oder „Akzent“. |
| Blogbeiträge | Beiträge eines Blogs. **„Darstellung“**: „Raster“ (Standard), „Liste“ (Bild links, Text rechts, Beiträge durch Linien getrennt) oder „Erster Beitrag groß“ (der neueste über die ganze Breite, darunter das Raster); **„Spalten“**: „Automatisch“ (so viele, wie gut passen) oder fest 2, 3 oder 4 – in schmalen Bereichen werden es weniger. **„Überschrift“** leer lassen, wenn darüber ein eigener Block „Überschrift“ steht; **„Blog-Titel als Überschrift“** (erscheint bei leerem Feld) zeigt stattdessen den Namen des Blogs. Der Link **„Alle Beiträge“** lässt sich ausblenden, umbenennen („Text des Links“) und als Button zeigen („Button-Stil“, „Button-Größe“; Standard Textlink). |

### Buttons & Aktionen

| Block | Zweck |
|---|---|
| Button | Link als Button („Primär“, „Sekundär“, „Tertiär“) oder Textlink; „Button-Größe“ „Normal“ oder „Klein“. Aussehen des Tertiär-Buttons unter Theme-Einstellungen → „Buttons“. |
| Countdown | Zeit bis zu einem Datum; danach ausgeblendet oder mit Ersatztext. **„Ende“**: „Einmalig (Datum)“, „Jede Woche“ (Wochentag und Uhrzeit, z. B. Sonntag 23:59), „Jedes Monatsende“ (Uhrzeit) oder „Alle N Tage ab Datum“ (erstes Ende als Datum, „Abstand in Tagen“). Wiederkehrende Enden laufen nie ab: Bei 0 beginnt der Zähler mit dem nächsten Termin. Alle Zeiten gelten in der Zeitzone des Shops. Ein nicht lesbares Datum (Format `JJJJ-MM-TT HH:MM`) oder eine nicht lesbare Uhrzeit (`HH:MM`) blendet den Block aus; im Editor steht dann ein Hinweis. |
| Laufband | Durchlaufende Textzeile; steht still bei reduzierter Bewegung und hat einen Pause-Button. |

### Medien

| Block | Zweck |
|---|---|
| Bild | Einzelbild mit Seitenverhältnis (2 : 3 bis 3 : 1), Einpassung, **„Bildausrichtung“** für den Ausschnitt und optionalem Link. |
| Bild mit Text | Bild und Textfläche nebeneinander oder untereinander; die Textfläche nimmt weitere Blöcke auf (Überschrift, Text, Button …). Sie übernimmt das Farbschema des Abschnitts; mit **„Eigenes Farbschema für die Textfläche“** bekommt sie ein eigenes. Mit **„Video statt Bild“** läuft in der Bildfläche ein stummes Endlos-Video wie beim Hintergrundvideo des Abschnitts (Start erst sichtbar, Knopf zum Anhalten, bei „Bewegung reduzieren“ nur Standbild); das Bild dient dann als Standbild. Darstellung: Seitenverhältnis (2 : 3 bis 3 : 1) oder **„Bildhöhe“** am Bildschirm (ein Drittel, halb, drei Viertel; ab 750 px Breite), **„Breite der Bildspalte“** (ein Drittel bis zwei Drittel) und **„Bildausrichtung“** (ein in Shopify gesetzter Fokuspunkt hat Vorrang). Unter „Bewegung“: **„Parallax“** (wie Theme-Einstellungen, an oder aus) und **„Text-Animation der Textfläche“** – „Automatisch“ zeigt den Text des Aufmachers ganz oben (mit „Sofort laden“) ohne Verzögerung. |
| Bild mit Markierungen | Bild mit nummerierten Punkten („Markierung“), je Punkt ein Produkt oder ein eigener Eintrag (Titel, Text, Link). Ein Klick auf den Punkt öffnet eine Karte mit Bild, Name, Preis, „Ansehen“ und optional Schnellkauf; am Handy steht stattdessen eine nummerierte Liste unter dem Bild. Position je Punkt mit „Waagerecht“/„Senkrecht“ in %, dazu optional eine „Beschriftung“ und das „Farbschema der Punkte“. **„Anordnung“** „2 Spalten“ bzw. „3 Spalten“ stellt die Liste ab 750 px Breite neben das Bild (ein Punkt springt zu seinem Eintrag); Seitenverhältnis und **„Bildausrichtung“** wie beim Bild. |
| Video | Video aus Shopify oder YouTube/Vimeo; externe Videos laden erst nach Klick. Neu eingefügt mit einem Beispielvideo von Shopify – Link ersetzen. |
| Logo-Leiste | Logos von Partnern oder Presse, auf Wunsch einfarbig in Textfarbe. |
| Linien-Grafik | Dekoratives Linien-Motiv aus 13 Motiven (Wellen, Kreislauf, Höhenlinien, Pfad mit Punkten, Verbindungslinie, Schwung, Rahmen-Ecken, Zweig, Dampf-Kringel, Tropfen mit Ringen, Messlinien, Orbit, geschwungener Pfeil), z. B. neben einem Bild, zwischen Spalten oder unter einer Überschrift. Einstellungen: „Motiv“, „Beim Scrollen“, „Farbe“, „Strichstärke“ (Fein / Mittel / Kräftig), „Breite“ in % der Spalte, „Ausrichtung“, „Spiegeln“, „Wiederholungen nebeneinander“, „Deckkraft“. Die Höhe folgt dem Motiv. Siehe [Animation](08-animation.md#linien-grafik-und-dekor). |

### Layout

| Block | Zweck |
|---|---|
| Elemente untereinander / Elemente nebeneinander | Block „Gruppe“: fasst Blöcke zusammen, optional mit Rahmen und eigenem Farbschema. |
| Spalten | Gleich breite Spalten, die auf kleinen Bildschirmen umbrechen. |
| Karussell | Waagerecht blätterbare Reihe beliebiger Blöcke, ohne automatischen Wechsel. Unter **„Zitate“** legen **„Schriftgröße“** und **„Schriftdicke“** das Aussehen aller Zitate darin fest. |
| Trennlinie | Horizontale Linie zwischen Inhalten. |
| Leerraum | Zusätzlicher senkrechter Abstand. |
| Brotkrumen | Pfad zur aktuellen Seite, z. B. Startseite › Kollektion › Produkt. |

### Aufklappen & Tabs

| Block | Zweck |
|---|---|
| Aufklappbare Inhalte | Aufklappbare Einträge, optional „Immer nur ein Eintrag offen“ (auch auf der Landingpage ohne Kopfzeile). |
| FAQ | Fragen und Antworten zum Aufklappen, mit strukturierten Daten für Suchmaschinen. „Gliederungsebene (SEO)“ der Überschrift und „Sprungmarke“ wählbar; ohne Fragen im Shop ausgeblendet. |
| Registerkarten (Tabs) | Inhalte in Tabs; ein Tab kann an ein Produkt-Metafeld gebunden werden und weitere Blöcke enthalten. |
| Info-Popup / Dosiertabelle / Größentabelle | Link oder Button öffnet ein Fenster mit Inhalt aus Text, einer Seite oder einem Produkt-Metafeld – z. B. eine Größentabelle. Ersetzt Größentabellen-Apps. Siehe [Produktseite](06-product-page.md#info-popup-größen-und-dosiertabelle). |

**Aussehen aller Aufklapper** („Aufklappbare Inhalte“, „FAQ“ und die aufklappbaren Produkt-Blöcke „Produktbeschreibung“, „Produktangaben“, „Metafeld-Inhalt“, „Pflichtangaben“, „Produktsicherheit“): Jeder Eintrag ist eine eigene Fläche mit 8 px Abstand, rechts ein kleiner Punkt mit Plus. Ein geöffneter Eintrag wird farbig hinterlegt, Titel und Minus erscheinen in der Signalfarbe. Die Farben kommen aus dem Farbschema des Abschnitts (Flächen: Rolle „Hintergrund hinter Produktbildern“, geöffnet: „Auswahl“), die Rundung aus **Theme-Einstellungen → „Layout“ → „Ecken“ → „Karten, Bilder und Flächen“**: eckig, leicht gerundet (Punkt mit 4 px Rundung) oder weich gerundet (Punkt als Kreis). Eine eigene Einstellung gibt es dafür nicht. Das Öffnen ist dezent animiert, außer bei „Bewegung reduzieren“. Die Filter auf Kollektions- und Suchseiten bleiben schlichte Listen mit Linien.

### Vorteile & Vergleich

| Block | Zweck |
|---|---|
| Icon mit Text | Ein Symbol mit Überschrift und Text, z. B. als Kachel in „Spalten“. |
| Vorteilsliste (USPs) | Kompakte Liste mit Icons, z. B. unter den Kauf-Buttons; Einträge aus einem Produkt-Metafeld oder als Unterblöcke „Vorteil“. |
| Vergleichstabelle | Zwei Spalten im Vergleich; „ja“/„nein“ werden zu ✓ und –. |
| Zeitleiste | Abfolge von Schritten mit Zeitpunkt, z. B. Ablauf einer Bestellung oder eines Abos. |
| Zähler-Leiste | Kennzahlen ohne Produktbezug, z. B. „12.500 · Bestellungen im Jahr“, „48 h · Versandzeit“. Je Wert ein Unterblock **„Zähler“** mit „Wert“ (Zahl mit Einheit, Text davor und danach erlaubt) und „Beschriftung“. Einstellungen: „Größe der Werte“ (Klein wie die Kennzahlenleiste bis Sehr groß), „Beschriftung“ über oder unter dem Wert, „Ausrichtung“, „Spalten am Handy“, „Linie oben“ und **„Beim Erscheinen hochzählen“**: Die Zahl zählt von 0 hoch, sobald die Leiste ins Bild scrollt – nur unterhalb des ersten Bildschirms und nie bei „Bewegung reduzieren“; Tausender- und Dezimalzeichen bleiben wie eingegeben. Ohne JavaScript steht der Endwert da. |

### Formulare

| Block | Zweck |
|---|---|
| Kontaktformular | Shopify-Kontaktformular, optional mit Telefonfeld. |
| Newsletter-Anmeldung | E-Mail-Feld für Shopify-Kunden mit wählbaren Kunden-Tags. |
| Produktfinder | Eine Frage mit Antworten, die auf Kollektionen oder Seiten verlinken. |

### Produkte & Kollektionen

| Block | Zweck |
|---|---|
| Produkte aus Kollektion | Produktkarten einer Kollektion als Raster. **„Kennzahlen anzeigen“** und **„Preis pro Tag bzw. Portion anzeigen“** sind getrennt schaltbar. Unterblock **„Brecher-Kachel“** für eine Aktions-Kachel im Raster, siehe [Kollektionen](05-collections.md#brecher-kachel). |
| Hervorgehobenes Produkt | Ein gewähltes Produkt mit Galerie (Standard „Slider“, wahlweise „Raster“), Preis, Varianten, Kaufoptionen und Kauf-Buttons auf jeder Seite; jeder Teil ist schaltbar. Auch als Abschnitt-Vorlage. Siehe [Produktseite](06-product-page.md#hervorgehobenes-produkt). |
| Kollektionsliste | Kollektionen als Kacheln; leer gelassen alle Kollektionen mit Produkten. Auf der Seite „Alle Kollektionen“ seitenweise. |
| Unterkollektionen | Unterkollektionen als Leiste: aus einem Kollektions-Metafeld, sonst aus einer festen Auswahl, sonst aus dem Menü. Siehe [Kollektionen](05-collections.md#unterkollektionen). |
| Set zusammenstellen | Kunden wählen mehrere Produkte einer Kollektion und legen sie gemeinsam in den Warenkorb. Bis zu 50 Produkte; **„Sichtbar“** legt fest, wie viele sofort zu sehen sind, die weiteren stehen unter „Weitere … anzeigen“. **„Variante“**: „Kundschaft wählt“ (Standard), „Erste verfügbare Variante“ oder „Variante mit Optionswert“ (z. B. `100 g`; Produkte ohne diesen Wert nehmen die erste verfügbare Variante, ist der Wert ausverkauft, entfällt das Produkt). |
| Erneut bestellen | Letzte Bestellung angemeldeter Kunden mit einem Klick erneut in den Warenkorb. |
| Zuletzt angesehen | Zuletzt besuchte Produkte, nur im Browser des Besuchers gespeichert. |

Wie Produktkarten in allen Rastern aussehen (Bildbewegung beim Überfahren, Varianten auf der Karte, Bewertungssterne, Badges), stellen Sie zentral ein: [Kollektionen und Produktkarten](05-collections.md#produktkarten).

### Produkt: Kauf

Die drei Produkt-Kategorien zeigen Daten des aktuellen Produkts und wirken nur auf Produktseiten. Außerhalb zeigt der Editor den Hinweis „Zeigt Daten des Produkts – wirkt nur auf Produktseiten.“ Für ein Produkt auf anderen Seiten nehmen Sie **„Hervorgehobenes Produkt“**.

| Block | Zweck |
|---|---|
| Preis | Preis, Streichpreis, Grundpreis, optional Hinweis zu Steuern und Versand und Shop Pay Ratenzahlung (**„Shop Pay Ratenzahlung anzeigen“**, standardmäßig an; erscheint nur, wenn Shop Pay Ratenzahlung im Shop aktiv ist). |
| Variantenauswahl | Optionen als Kacheln, Zeilen oder Variantenbilder, mit Farbfeldern (Swatches; abschaltbar unter Theme-Einstellungen → „Produktdaten“ → **„Farbfelder anzeigen“**, gilt auch für Produktkarten und Filter). |
| Kaufoptionen | Einmalkauf oder Abo mit Ersparnis und Lieferzeitleiste. |
| Kauf-Buttons | Menge, „In den Warenkorb“, dynamische Checkout-Buttons, Bestand, Vorbestellung, Benachrichtigung bei Verfügbarkeit; bei Geschenkgutscheinen „An jemand anderen senden“ mit E-Mail, Name, Nachricht und Versanddatum. |
| Mengenstaffel | Packungsgrößen oder Mengenrabatt mit Preis je Stufe. |
| Fixierte Kaufleiste | Kaufleiste beim Scrollen, sobald die Kauf-Buttons nicht mehr sichtbar sind. |
| Lieferdatum | Eine Zeile „Voraussichtlich geliefert bis Mi., 25.11.“ aus Bestellschluss, Bearbeitungszeit, Laufzeit und Feiertagen, optional mit Lieferzeit je Produkt. |
| Abholung im Geschäft | Abholbarkeit je Standort, wenn Abholung aktiviert ist. |
| Häufig zusammen gekauft | Produkt der Seite plus bis zu drei Ergänzungen mit Kontrollkästchen, Gesamtpreis und „Alle hinzufügen“. Siehe [Produktseite](06-product-page.md#häufig-zusammen-gekauft). |

### Produkt: Inhalte

| Block | Zweck |
|---|---|
| Produktbilder | Galerie mit Videos und 3D-Modellen; Raster, Untereinander, Mosaik oder Slider mit Vorschaubildern; Variantenbild und Vollbild. Siehe [Produktseite](06-product-page.md#produktbilder). |
| Produkttitel | Titel, optional Marke und Unterzeile. |
| Bewertungssterne | Sterne, Zahl und Anzahl aus den Standard-Metafeldern einer Bewertungs-App. Siehe [Produktseite](06-product-page.md#bewertungssterne). |
| Produktbeschreibung | Beschreibung aus dem Admin, optional einklappbar. |
| Kennzahlen | Portion, Portionen, Preis pro Tag bzw. Portion, Reichweite und bis zu zwei eigene Werte. Lange Werte wie „1 gestrichener Messlöffel“ werden automatisch kleiner und brechen notfalls um, statt überzulaufen. |
| Metafeld-Inhalt | Überschrift eingeben, Metafeld verknüpfen, Darstellung wählen (Text, Liste, Tabelle), optional aufklappbar. Für alle Produktangaben ohne eigenen Block (Pflege, Material, Maße …). Siehe [Produktseite](06-product-page.md#metafeld-inhalt). |
| Set-Inhalt (Bundle) | Bestandteile eines festen Bundles, z. B. aus Shopify Bundles. |

### Produkt: Angaben

| Block | Zweck |
|---|---|
| Datentafel: Supplemente / Nährwerte / Futtermittel / Fütterung | Block „Datentafel“ mit voreingestelltem Tafeltyp: Nährstoffe je Tagesdosis, Nährwerttabelle pro 100 g, analytische Bestandteile oder Fütterungstabelle. Unter **„Tafeltyp“** auch „Eigene Spalten“. **„Zahlen beim ersten Sichtbarwerden einrollen“** (Standard an) lässt die Werte einmal wie ein Zählwerk aufrollen. |
| Pflichtangaben | Bezeichnung, Zutaten, Füllmenge, Verzehr- bzw. Anwendungsempfehlung, Hinweise und Hersteller je nach Produktart. |
| Produktsicherheit | Hersteller, verantwortliche Person und Sicherheitshinweise (GPSR). |
| Siegel & Zertifikate | Zertifikate als Liste, optional mit Prüfbericht zum Download. |
| Anwendung | Schritte zu Anwendung oder Zubereitung und bis zu drei Kennwerte (Temperatur, Zeit, Menge). |

### Inhaltsstoffe

| Block | Zweck |
|---|---|
| Inhaltsstoffe: Im Fokus | Hauptinhaltsstoffe mit Bild, Form, Herkunft und Beschreibung. **„Linie über jedem Inhaltsstoff“** schaltet die Trennlinie über den Einträgen aus. |
| Inhaltsstoff: Steckbrief | Ein Inhaltsstoff im Detail, z. B. auf seiner Lexikon-Seite. |
| Inhaltsstoff: Produkte | Produkte, die einen bestimmten Inhaltsstoff enthalten. |
| Inhaltsstoffe: Lexikon | Alle Inhaltsstoffe von A bis Z mit Sprungleiste. |

### Seitenvorlagen

| Block | Vorlage | Zweck |
|---|---|---|
| Warenkorb: Positionen | Warenkorb | Artikel mit Mengenauswahl, Abo-Wechsel und optional Empfehlungen. |
| Warenkorb: Übersicht | Warenkorb | Zwischensumme, Fortschrittsbalken mit bis zu drei Stufen (Theme-Einstellungen → „Warenkorb“ → **„Fortschrittsbalken“**), optional Geschenkverpackung, Bestellnotiz und dynamische Checkout-Buttons. |
| Kollektion: Kopfbereich | Kollektion | Titel, Beschreibung und Bild der Kollektion (**„Kollektionsbild anzeigen“**, Standard an; ohne Bild entfällt die Bildspalte). |
| Kollektion: Produktliste | Kollektion | Produkte der Kollektion mit Filtern, Sortierung und Seitenzahlen, „Mehr laden“ oder Endlos-Scrollen. |
| Suche: Kopfbereich | Suche | Titel mit Suchbegriff und Suchfeld. |
| Suche: Ergebnisse | Suche | Produkte, Seiten und Beiträge zur Suche, mit Filtern. |
| Blogbeitrag: Inhalt | Beitrag | Inhalt eines Beitrags. |
| Seite: Inhalt | Seite | Titel und Text einer Shopify-Seite. |
| Passwortseite: Formular | Passwort | Logo (eigenes Bild, sonst Logo aus Einstellungen → Marke, sonst Shopname), Überschrift, Nachricht und Passwortfeld. |
| Eigenes Liquid | alle | Code von Apps oder Agenturen; fehlerhafter Code kann die Seite stören. |

### Nicht mehr im Picker

Diese Blöcke funktionieren in bestehenden Vorlagen weiter, lassen sich aber nicht mehr neu hinzufügen, weil ein anderer Block dasselbe kann:

| Block | Stattdessen |
|---|---|
| Aufklapper aus Metafeld | „Metafeld-Inhalt“ mit **„Aufklappbar“** (Standard an). |

### Apps

In Abschnitten, Gruppen und Spalten lassen sich auch **App-Blöcke** einsetzen, z. B. Bewertungen. Diese bringen ihre eigene Darstellung mit.

## Kopf- und Fußzeile

Die Kopfzeile (Logo, Menü, Suche, Konto, Warenkorb, Land und Sprache) und die Ankündigungsleiste beschreibt [Kopfzeile und Navigation](04-header.md), die Fußzeile [Erste Schritte](01-getting-started.md#fußzeile).

## Seitenvorlagen

Weisen Sie einer Seite, einem Produkt oder einer Kollektion im Admin rechts unter **„Theme-Vorlage“** eine andere Vorlage zu.

| Vorlage | Zweck |
|---|---|
| `page` | Standardseite |
| `page.contact` | Seite mit Kontaktformular |
| `page.faq` | Seite mit FAQ-Block (strukturierte Daten) |
| `page.about` | „Über uns“ mit Grundsätzen in Spalten |
| `page.landing` | Kampagnenseite ohne Navigation |
| `page.ingredients` | Inhaltsstoff-Lexikon A–Z, siehe [Inhaltsstoff-Lexikon](12-ingredient-glossary.md) |
| `page.accessibility` | Barrierefreiheitserklärung, siehe [Barrierefreiheit](13-accessibility.md) |
| `product` | Produktseite |
| `product.subscription` | Produktseite mit Kaufoptionen direkt unter dem Preis |
| `product.bundle` | Produktseite für feste Bundles |
| `collection` | Kollektion mit Kollektionsbild (falls vorhanden), Unterkollektionen-Leiste und Filtern, siehe [Kollektionen](05-collections.md) |
| `collection.featured` | Kollektion mit Kollektionsbild im Kopf |

Dazu kommen Vorlagen für Startseite, Suche, Warenkorb, Blog, Beitrag, Kollektionsübersicht, 404, Passwortseite, Geschenkgutschein und die Lexikon-Seite je Inhaltsstoff.
