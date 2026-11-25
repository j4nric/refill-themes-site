# Kopfzeile und Navigation

Die Kopfzeile ist der Abschnitt **„Kopfzeile“** mit drei Blöcken: **„Logo“**, **„Menü“** und **„Suche, Konto, Warenkorb“**. Darüber steht der Abschnitt **„Ankündigungsleiste“**. Beide finden Sie im Theme-Editor ganz oben in der linken Leiste (Gruppe „Kopfzeile“).

| Teil | Wo einstellen |
|---|---|
| Farbschema, Linie, Verhalten beim Scrollen, Animation der Panels | Abschnitt „Kopfzeile“ |
| Logo, Logo beim Kleben | Block „Logo“ |
| Hauptmenü, Mega-Menü, mobiles Menü, hervorgehobene Menüpunkte | Block „Menü“ |
| Suche, Konto, Land und Sprache | Block „Suche, Konto, Warenkorb“ |
| Hinweise mit Link oder Gutscheincode | Abschnitt „Ankündigungsleiste“ → Blöcke „Ankündigung“ |

## Ein Panel für alles, was aufklappt

Untermenüs, die Suche und die Auswahl von Land und Sprache öffnen sich in derselben Fläche direkt unter der Kopfzeile. Fahren Kundinnen und Kunden mit der Maus von einem Menüpunkt zum nächsten, bleibt die Fläche stehen und nur der Inhalt wechselt – nichts flackert. Escape oder ein Klick daneben schließt das Panel, der Fokus kehrt zum Auslöser zurück.

**Kopfzeile → „Aufklappende Bereiche“ → „Animation“:**

| Wert | Wirkung |
|---|---|
| „Keine“ | Panel erscheint sofort. |
| „Einblenden“ (Standard) | Panel blendet weich ein. |
| „Aufklappen“ | Panel wächst von der Kopfzeile nach unten. |

Wer im Betriebssystem oder im [Bedienhilfen-Panel](13-accessibility.md) „Bewegung reduzieren“ wählt, sieht keine Animation. Ohne JavaScript öffnen Untermenüs und Land/Sprache per Klick.

Die Farben der Panels stellen Sie getrennt ein: **Block „Menü“ → „Farbschema des Menüs“** für Untermenüs und das mobile Menü, **Block „Suche, Konto, Warenkorb“ → „Panels“ → „Farbschema von Suche und Land/Sprache“** für die beiden anderen Panels (erscheint, solange Suche oder Land/Sprache eingeschaltet ist).

## Logo und Verhalten beim Scrollen

1. **Block „Logo“**: **„Logo-Bild“** und **„Logo-Größe nach“**. Standard ist **„Höhe (empfohlen)“**: Das Logo ist immer gleich hoch – **„Logo-Höhe Desktop“** (Standard 32 px, ab 990 px Fensterbreite) und **„Logo-Höhe Handy“** (Standard 28 px) –, die Breite ergibt sich aus dem Seitenverhältnis des Bildes. So passen breite Wortmarken und quadratische Bildmarken gleichermaßen. **„Breite (bisher)“** stellt die frühere Einstellung „Logo-Breite“ wieder her. Ohne Bild erscheint der Shopname als Text; bei „Höhe“ richtet sich seine Schriftgröße nach der Logo-Höhe.
2. **Abschnitt „Kopfzeile“ → „Beim Scrollen“ → „Kopfzeile beim Scrollen“**: „Scrollt mit“, „Immer sichtbar“ oder „Beim Hochscrollen einblenden“ (Standard).
3. Sobald die Kopfzeile klebt, erscheinen darunter **„Hintergrund beim Kleben“** und **„Text beim Kleben“** – jeweils „Schema-Farbe“, eine der [Markenfarben](01-getting-started.md) oder „Eigene Farbe“ (Standard; ein leerer Farbwähler = Farben des Farbschemas, ein halbtransparenter Hintergrund zeichnet den Inhalt darunter weich). Für den Text gibt es zusätzlich **„Passend zur Markenfarbe des Hintergrunds (Schwarz/Weiß)“**. Dazu **„Text und Höhe beim Kleben“** („Unverändert“, „Etwas kleiner (90 %)“, „Kompakt (80 %)“).
4. Im Block „Logo“ unter **„Beim Scrollen“**: **„Logo-Höhe beim Kleben“** (Standard 28 px, auf Desktop und Handy) und **„Eigenes Logo beim Kleben“**, z. B. nur die Bildmarke. Weil die Höhe zählt, wird ein quadratisches Signet nicht größer als die Wortmarke. Bei „Logo-Größe nach: Breite“ steht hier wie bisher „Logo-Größe beim Kleben“ in Prozent.

**„Linie unter der Kopfzeile“** blendet die Trennlinie zum Seiteninhalt ein oder aus.

## Hauptmenü und Mega-Menü

1. Admin → **Onlineshop → Navigation**: Hauptmenü anlegen oder bearbeiten. Bis zu drei Ebenen sind möglich.
2. Theme-Editor → Block **„Menü“** → **„Menü“**: Ihr Hauptmenü wählen.
3. Auf großen Bildschirmen öffnen Menüpunkte mit Untermenü ein Mega-Menü (die zweite Ebene steht als Spaltenüberschrift, die dritte als Liste darunter) oder eine schlanke Liste unter dem Menüpunkt – siehe „Darstellung der Untermenüs“.

### Untermenüs

Block „Menü“ → **„Untermenüs“**:

| Einstellung | Wirkung |
|---|---|
| „Untermenüs beim Überfahren öffnen“ | Aus: Untermenüs öffnen nur per Klick. |
| „Darstellung der Untermenüs“ | **„Automatisch“** (Standard): Untermenüs mit nur einer Ebene erscheinen als Liste wie die Auswahlfelder, das Mega-Menü bleibt für Untermenüs mit dritter Ebene, mit „Bildern an Links“ oder mit Hervorhebungsspalte. **„Klassisch: Mega-Menü“**: immer das Mega-Menü. **„Liste wie Auswahlfelder“**: immer die Liste (eine dritte Ebene steht eingerückt darunter). Die Liste ist eine Karte direkt unter dem Menüpunkt: Zeilen mit Fläche beim Überfahren, die aktuelle Seite fett mit Haken, am Ende „Alle anzeigen“. Pfeiltasten wandern durch die Zeilen. „Breite“, „Spalten“ und die Bild-Einstellungen gelten nur für das Mega-Menü; die Animation (Section „Kopfzeile“) gilt für beide. Das mobile Menü bleibt gleich. |
| „Breite“ | „Ganze Seite“ oder „Nach Inhalt, unter dem Menüpunkt“ (schmales Panel mit Rahmen, bleibt im Fenster). |
| „Spalten“ | „Automatisch“ oder 2–5 Spalten. |
| „Dritte Ebene im Mega-Menü“ | „Immer sichtbar“ (Standard) oder „Beim Überfahren aufklappen“: Die Links der dritten Ebene erscheinen unter dem Link der zweiten Ebene, sobald die Maus darauf zeigt oder er per Tab-Taste erreicht wird; ein kleiner Pfeil am Titel zeigt sie an. Auf Touch-Geräten bleiben sie sichtbar. |
| „Schriftgröße der Untermenüs“ | „Klein“, „Mittel“ (Standard) oder „Groß“ für die Links der zweiten Ebene im Mega-Menü und in der Liste. „Klein“ hilft bei langen Namen wie „Gewürzmischungen“. Zu lange Wörter werden mit Silbentrennung umbrochen. |
| „Produktanzahl anzeigen“ | Zahl der Produkte neben Kollektionen. |
| „Bilder an Links“ | „Keine“, „Klein neben dem Titel“ oder „Groß über dem Titel“. Gezeigt wird das Bild der verlinkten Kollektion bzw. des Produkts, bei Kollektionen ohne Bild das Bild des ersten Produkts. |
| „Bildkacheln bei diesen Menüpunkten“ | Titel oder Handles der Hauptmenüpunkte, durch Komma getrennt (z. B. `Tee`). Diese Untermenüs zeigen große Bilder über dem Titel – unabhängig von „Bilder an Links“, bei Spalten „Automatisch“ höchstens vier nebeneinander. |
| „Bildformat“ | bei „Groß über dem Titel“ und bei Bildkacheln: Quadratisch, Hochformat (4:5), Querformat (3:2). |
| „Farbschema des Menüs“ | Farben von Mega-Menü und mobilem Menü. |

### Hervorhebung im Untermenü

Eine eigene Spalte im Mega-Menü für ein Angebot. Block „Menü“ → **„Hervorhebung im Untermenü“**:

1. **„Inhalt“** wählen: „Produkt“, „Kollektion“ oder „Bild mit Link“.
2. Je nach Inhalt **„Produkt“** bzw. **„Kollektion“** auswählen (Bild, Titel und Produktanzahl kommen aus der Kollektion) oder bei „Bild mit Link“ **„Bild“**, **„Titel“** und **„Link“** eintragen.
3. Optional **„Dachzeile“**, z. B. „Neu im Sortiment“. Dachzeile, „Position“ und „Nur bei diesen Menüpunkten“ erscheinen, sobald ein Produkt, eine Kollektion oder ein Bild bzw. Titel eingetragen ist.
4. **„Position“**: „Rechts (am Ende)“ oder „Links (am Anfang)“.
5. **„Nur bei diesen Menüpunkten“**: Titel oder Handles der Hauptmenüpunkte, durch Komma getrennt (z. B. `Tee, Kaffee`). Leer: bei allen Menüpunkten mit Untermenü.

Die Auswahlfelder für Produkt und Kollektion bleiben immer sichtbar (Shopify kann sie nicht ausblenden); es zählt nur das Feld, das zum gewählten „Inhalt“ passt.

### Hervorgehobene Menüpunkte

Einzelne Menüpunkte, etwa „Sale“ oder „Neu“, heben Sie farbig hervor. Block „Menü“ → **„Hervorgehobene Menüpunkte“**:

- **„Menüpunkte“**: Titel oder Handles, durch Komma getrennt, z. B. `Sale, Neu`. Gilt auf allen Ebenen, am Desktop und im mobilen Menü.
- **„Farbe der Hervorhebung“**: „Akzent des Farbschemas“, eine Markenfarbe oder „Eigene Farbe“ (Standard; dann **„Farbe“**, leer = Akzentfarbe des Farbschemas).
- **„Stil der Hervorhebung“**: „Farbe“ (Standard: der Text steht in der Farbe), „Unterstrichen“, „Gestrichelt unterstrichen“ oder „Fett“. Bei den drei letzten bleibt der Text in der Textfarbe, die Linie hat die gewählte Farbe. So unterscheiden Kundinnen und Kunden hervorgehobene Punkte von der aktuellen Seite, die beim Link-Stil „Text“ ebenfalls in der Akzentfarbe steht.
- **„Badge-Text“**: optional, z. B. „Neu“; erscheint als kleines Badge mit Rahmen neben dem Menüpunkt.

### Darstellung am Desktop

Block „Menü“ → **„Darstellung (Desktop)“**: **„Link-Stil“** („Text (Akzentfarbe beim Überfahren)“, „Unterstrichen beim Überfahren“, „Fläche (wie Buttons)“), **„Abstand zwischen Menüpunkten“**, **„Schriftgröße“**, **„Großbuchstaben“** und **„Pfeile bei Untermenüs zeigen“**. Hat das Menü mehr Punkte, als in eine Zeile passen, bricht es in eine zweite Zeile um.

## Mobiles Menü

Auf dem Handy öffnet das Menü-Symbol eine Liste. Der **Text** eines Menüpunkts führt zu seiner Seite, der **Pfeil** daneben öffnet das Untermenü als eigene Ebene. Oben in der Ebene stehen **„Zurück“** und der Titel des Übermenüs als Link; Escape geht ebenfalls eine Ebene zurück. Die dritte Ebene funktioniert genauso. Ohne JavaScript klappen die Untermenüs in der Liste auf.

### Bilder im mobilen Menü

Bildkacheln mit Titel, Text und Link, z. B. für Kategorien oder eine Aktion:

1. Block „Menü“ aufklappen → **„Block hinzufügen“** → **„Bild“**.
2. **„Bild“**, **„Titel“**, **„Text“** und **„Link“** eintragen. Mehrere Bilder sind möglich.
3. Im Block „Menü“ unter **„Mobiles Menü“**: **„Position der Bilder“** („Vor dem Menü“, „Zwischen den Menüpunkten“, „Nach dem Menü“), bei „Zwischen“ zusätzlich **„Nach Menüpunkt“**, dazu **„Spalten der Bilder“** (1–3) und **„Bildformat“**.

Die Bilder erscheinen nur im mobilen Menü, nicht im Mega-Menü am Desktop. Ein „Bild“ ohne Bilddatei erscheint als Textkachel mit Titel und Text.

**„Land und Sprache im Menü“** legt fest, was am Ende des mobilen Menüs steht: „Land und Sprache“, „Nur Land/Region“, „Nur Sprache“ oder „Aus“.

## Suche

Block „Suche, Konto, Warenkorb“ → **„Suche anzeigen“**, darunter unter **„Suche“**:

| Einstellung | Wirkung |
|---|---|
| „Darstellung“ | „Panel unter der Kopfzeile“ (Standard): Klick auf „Suche“ öffnet Feld und Vorschläge unter der Kopfzeile. „Feld klappt in der Kopfzeile aus“: das Feld legt sich über die Kopfzeile, Vorschläge erscheinen im Panel. „Live-Suche in der Kopfzeile“: das Feld steht ab 1200 px Fensterbreite dauerhaft in der Kopfzeile; darunter und immer dann, wenn das Feld das Menü in eine zweite Zeile drängen würde, verhält es sich wie „Feld klappt in der Kopfzeile aus“. |
| „Schnelllinks“ | Menü mit Links, die bei leerem Suchfeld erscheinen, z. B. beliebte Kategorien. |
| „Produktvorschläge“ | Kollektion, aus der bei leerem Suchfeld bis zu vier Produkte erscheinen. |

Beim Tippen zeigt die Suche Suchbegriffe, Kollektionen, Seiten und Produkte mit Preis und Grundpreis; „Alle Ergebnisse für …“ führt zur Suchseite. Pfeiltasten wählen einen Vorschlag, Enter öffnet ihn, Escape hebt erst die Auswahl auf und schließt dann. Die Suchseite selbst beschreibt [Kollektionen und Produktkarten](05-collections.md).

## Land und Sprache

Die Auswahl erscheint, sobald Ihr Shop mehr als ein Land (**Einstellungen → Märkte**) oder mehr als eine Sprache (**Einstellungen → Sprachen**) anbietet. Rechts in der Kopfzeile steht dann ein Knopf mit Flagge und Kürzeln, z. B. „DE · EUR / DE“; ein Klick öffnet darunter eine Liste mit Land/Region (Flagge, Währung rechts) und Sprache nebeneinander. Der aktuelle Wert ist hinterlegt und mit Haken markiert. Jede Auswahl ist ein eigener Knopf – nichts wechselt, bevor jemand klickt. Ab neun Ländern erscheint ein Suchfeld über der Liste. Escape oder ein Klick daneben schließt die Liste, Pfeiltasten wandern durch die Einträge.

**„Darstellung“** wählt, wie die Auswahl aussieht:

| Darstellung | Wirkung |
|---|---|
| „Ein Knopf, zwei Spalten“ (Standard) | Ein Knopf mit Kürzeln; Land und Sprache nebeneinander in einer Liste. Bietet der Shop nur Länder oder nur Sprachen an, zeigt der Knopf nur diesen Teil. |
| „Zwei Knöpfe“ | Wie in der Fußzeile: je ein Knopf für Land („DE · EUR €“) und Sprache („Deutsch“), jeder öffnet seine Liste nach unten. Braucht mehr Platz neben Suche, Konto und Warenkorb. |
| „In der Ankündigungsleiste“ | Die zwei Knöpfe stehen rechts in der dunklen Leiste über der Kopfzeile, die Kopfzeile bleibt frei. Voraussetzung: Die Section „Ankündigungsleiste“ ist in der Kopfzeile vorhanden und eingeblendet. Fehlt sie, erscheint automatisch die Standard-Darstellung in der Kopfzeile. Am Handy steht die Auswahl im mobilen Menü. |
| „Panel unter der Kopfzeile (bisherige Darstellung)“ | Die frühere Darstellung: breites Panel unter der Kopfzeile wie das Mega-Menü, mit mehrspaltiger Länderliste. |

Ohne JavaScript öffnet der Knopf die Liste trotzdem; die Einträge wechseln dann ebenfalls per Klick.

Weitere Einstellungen im selben Bereich:

Block „Suche, Konto, Warenkorb“ → **„Land und Sprache“**:

| Einstellung | Wirkung |
|---|---|
| „Land/Region anzeigen“, „Sprache anzeigen“ | Teile der Auswahl ein- oder ausschalten. |
| „Symbol“ | „Flagge des aktuellen Landes“ (Standard), „Globus“ oder „Kein Symbol“ (nicht bei „Zwei Knöpfe“; dort steuert „Flaggen in der Länderliste“ auch die Flagge im Knopf). |
| „Flaggen in der Länderliste“ | Flagge vor jedem Land. |
| „Auch am Handy in der Kopfzeile zeigen“ | Symbol zusätzlich in der mobilen Kopfzeile (Standard: nur im mobilen Menü). |
| „Länder in der Auswahl“ | „Alle Länder der Märkte“, „Nur diese Länder“ oder „Alle außer diesen Ländern“. |
| „Ländercodes“ | erscheint bei „Nur diese“ bzw. „Alle außer“: zweistellige ISO-Codes, durch Komma oder Leerzeichen getrennt, z. B. `DE, AT, CH`. Bei „Nur diese Länder“ gilt Ihre Reihenfolge. |

Das Land, in dem jemand gerade einkauft, steht immer in der Liste, auch wenn es herausgefiltert ist. Der Filter wirkt in der Kopfzeile (auch in der Ankündigungsleiste) und im mobilen Menü; die Fußzeile hat eigene Einstellungen (siehe unten).

Im **mobilen Menü** steht am Ende eine Fläche „Land und Sprache“ mit dem aktuellen Wert. Ein Tipp öffnet dieselbe Liste als Blatt von unten über die ganze Breite.

### Land und Sprache in der Fußzeile

In der „Unteren Leiste“ der Fußzeile stehen Land und Sprache als zwei dezente Knöpfe, z. B. „Deutschland · EUR €“ und „Deutsch“. Ein Klick öffnet eine Liste nach oben – dieselbe wie im Panel der Kopfzeile: aktueller Wert hervorgehoben, Suchfeld ab neun Ländern, jeder Eintrag wechselt erst beim Anklicken. Am Handy erscheint die Liste als Blatt von unten über die ganze Breite. Escape oder ein Klick daneben schließt sie. Welche Länder die Fußzeile anbietet, steuern **„Länder in der Auswahl“** und **„Ländercodes“** im Block „Untere Leiste“ – gleiche Logik wie in der Kopfzeile, aber eigene Einstellungen (Standard: alle Länder der Märkte). **„Flaggen anzeigen“** im Block „Untere Leiste“ steuert die Flagge im Knopf und in der Liste unabhängig von der Kopfzeile. Ohne JavaScript erscheinen stattdessen Auswahllisten mit dem Knopf „Übernehmen“.

## Konto, Warenkorb

- **„Konto anzeigen“**: Shopifys Konto-Komponente mit Anmeldung (auch „Mit Shop anmelden“) und den Links des Menüs **„Customer account main menu“**. Einen Link zum Abo-Portal fügen Sie dort hinzu, siehe [Abo](10-subscriptions.md). Voraussetzung: **Einstellungen → Kundenkonten** aktiv.
- **Warenkorb**: öffnet den Warenkorb als seitliches Fenster, siehe [Warenkorb und Kasse](07-cart-and-checkout.md).

**„Darstellung“** (Block „Suche, Konto, Warenkorb“): für **„Suche“**, **„Konto“** und **„Warenkorb“** je **„Text“** (Standard, Wort in Versalien), **„Symbol“** oder **„Symbol und Text“**. Gilt ab 990 px Fensterbreite; am Handy stehen immer die Symbole. Screenreader lesen in jeder Darstellung den Namen vor, beim Warenkorb mit Anzahl („Warenkorb, 2 Artikel“). Angemeldete Kundinnen und Kunden sehen beim Konto ihre Initiale bzw. ihr Profilbild (von Shopify).

Wie die **Anzahl im Warenkorb** aussieht – in Klammern, als Blase, als Punkt oder nur als Zahl –, stellen Sie unter Theme-Einstellungen → **„Warenkorb“** → **„Anzahl im Warenkorb“** ein, siehe [Warenkorb und Kasse](07-cart-and-checkout.md#anzahl-im-warenkorb).

## Ankündigungsleiste

Abschnitt **„Ankündigungsleiste“** über der Kopfzeile. Jeder Block **„Ankündigung“** ist eine Zeile:

| Einstellung | Wirkung |
|---|---|
| „Text“ | Hinweis, z. B. „Kostenloser Versand ab 49 €“. |
| „Link“ | macht die Zeile zum Link, mit Pfeil. |
| „Gutscheincode“ | zeigt den Code als Marke mit dem Knopf **„Kopieren“**. Nach dem Klick steht „Kopiert“ im Knopf; Kundinnen und Kunden fügen den Code an der Kasse ein. |

**Gutscheincode einrichten:**

1. Admin → **Rabatte → Rabatt erstellen** → Rabattcode anlegen, z. B. `WILLKOMMEN10`.
2. Theme-Editor → Ankündigungsleiste → Block „Ankündigung“ → **„Gutscheincode“**: genau denselben Code eintragen.
3. Im **„Text“** die Bedingungen nennen, z. B. „10 % auf die erste Bestellung“.

Das Theme zeigt den Code nur an und kopiert ihn; ob er gilt, entscheidet der Rabatt in Shopify. Ein Rabattfeld im Warenkorb gibt es bewusst nicht: Themes im Shopify Theme Store dürfen keines anbieten, Rabattcodes gibt die Kundschaft an der Kasse ein. Ohne JavaScript bleibt der Code markierbar, nur der Knopf fehlt.

Mehrere Ankündigungen stehen am Handy in einer wischbaren Leiste; am Desktop brechen sie in eine zweite Zeile um, wenn sie nicht nebeneinander passen.

Passen Sie Texte wie „Kostenloser Versand ab 49 €“ an Ihre tatsächlichen Bedingungen an oder löschen Sie den Block.
