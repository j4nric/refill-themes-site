# Erste Schritte

Refill ist ein Shopify-Theme für Produkte, die Kunden regelmäßig nachkaufen: Nahrungsergänzung, Tee, Kaffee und Gewürze, Naturkosmetik und Drogerieartikel, Tiernahrung. Abo, Packungsgrößen, „Erneut bestellen“ und klare Produktangaben sind eingebaut.

Dieses Handbuch beschreibt Version 0.9.0. Alle Bezeichnungen in Anführungszeichen sind genau so im Theme-Editor zu finden.

## Inhalt dieses Handbuchs

| Kapitel | Worum es geht |
|---|---|
| [Stile (Presets)](02-presets.md) | Refill, Mortar, Pumice und die Branchen-Einstellungen |
| [Abschnitte und Blöcke](03-sections-and-blocks.md) | Wie Seiten aufgebaut sind, Einstellungen, alle Blöcke im Überblick |
| [Kopfzeile und Navigation](04-header.md) | Mega-Menü, mobiles Menü, Suche, Land und Sprache, Ankündigungsleiste |
| [Kollektionen und Produktkarten](05-collections.md) | Karten, Filter, Sortierung, Endlos-Scrollen, Brecher-Kachel |
| [Produktseite](06-product-page.md) | Galerie, Bewertungen, Lieferdatum, „Häufig zusammen gekauft“, Info-Popup |
| [Warenkorb und Kasse](07-cart-and-checkout.md) | Warenkorb, Kasse-Leiste am Handy, Fortschrittsbalken, Empfehlungen, Sets, Mengenstaffel |
| [Animation](08-animation.md) | Effekte beim Scrollen, Seitenübergänge, Scroll-Story |
| [Produktdaten](09-product-data.md) | Metafelder und Metaobjekte für Kennzahlen, Datentafel, Inhaltsstoffe |
| [Abo](10-subscriptions.md) | Abo-App, Kaufoptionen, Lieferzeitleiste |
| [Pflichtangaben](11-compliance.md) | Hersteller (GPSR), Pflichtangaben je Produktart, Grundpreis |
| [Inhaltsstoff-Lexikon](12-ingredient-glossary.md) | Eigene Seiten je Inhaltsstoff, A–Z-Übersicht |
| [Barrierefreiheit](13-accessibility.md) | Was das Theme leistet, Bedienhilfen-Panel, Barrierefreiheitserklärung |
| [Ladezeit und SEO](14-performance-and-seo.md) | Seiten vorab laden, Bilder, strukturierte Daten |
| [Häufige Fragen](15-faq.md) | Fehlerbehebung |
| [Änderungsprotokoll](16-changelog.md) | Versionen |

## 1. Theme installieren

1. Öffnen Sie Refill im Shopify Theme Store.
2. Wählen Sie einen Stil: **Refill** (Nahrungsergänzung), **Mortar** (Gewürze, Tee, Kaffee) oder **Pumice** (Naturkosmetik, Drogerie). Die Unterschiede beschreibt [Stile (Presets)](02-presets.md).
3. Klicken Sie auf „Theme ausprobieren“ bzw. fügen Sie das Theme Ihrer Theme-Bibliothek hinzu.
4. Im Admin unter **Onlineshop → Themes** erscheint Refill in der Theme-Bibliothek. Klicken Sie auf **Anpassen**, um den Theme-Editor zu öffnen.

Arbeiten Sie zuerst in der unveröffentlichten Kopie. Veröffentlichen Sie das Theme erst, wenn die Punkte unten erledigt sind.

> Der Stil legt Farben, Schriften, Startseite, Produktvorlage, Kopf- und Fußzeile fest. Möchten Sie später einen anderen Stil, fügen Sie das Theme mit diesem Stil erneut aus dem Theme Store hinzu und übertragen Ihre Inhalte.

## 2. Die ersten 10 Minuten

### Logo und Favicon

1. Theme-Editor → Abschnitt **„Kopfzeile“** → Block **„Logo“**.
2. Unter **„Logo-Bild“** Ihr Logo hochladen, mit **„Logo-Höhe Desktop“** (ab 990 px Fensterbreite) und **„Logo-Höhe Handy“** (darunter, also auch auf Tablets) die Größe einstellen; die Breite folgt dem Seitenverhältnis. Steht **„Logo-Größe nach“** auf „Breite (bisher)“, gilt stattdessen **„Logo-Breite“**. Ohne Bild erscheint der Shop-Name.
3. **Theme-Einstellungen** (Zahnrad-Symbol) → **„Layout“** → **„Favicon“**: quadratisches Bild, mindestens 180 × 180 px. Das Favicon erscheint im Browser-Tab, in Lesezeichen und im Verlauf (32 × 32 px) sowie auf dem Startbildschirm von Handys. Einfache Formen bleiben in dieser Größe am besten erkennbar.
4. Optional im Block „Logo“ unter **„Beim Scrollen“**: **„Logo-Größe beim Kleben“** und **„Eigenes Logo beim Kleben“**, siehe [Kopfzeile und Navigation](04-header.md#logo-und-verhalten-beim-scrollen).

### Farben

**Theme-Einstellungen → „Farben“** enthält fünf Farbschemata. Jedes Schema hat dieselben Rollen:

| Rolle | Wofür |
|---|---|
| „Hintergrund“ | Fläche des Abschnitts |
| „Hintergrundverlauf“ | optional, ersetzt den einfarbigen Hintergrund auf großen Flächen |
| „Text“ | Fließtext und Überschriften |
| „Sekundärtext“ | Labels und Formularrahmen – braucht mindestens 4,5 : 1 Kontrast zum Hintergrund |
| „Trennlinien“ | Linien zwischen Bereichen und Spalten |
| „Akzent“ | Buttons, Badges, Hervorhebungen |
| „Text auf Akzent“ | Schrift auf Akzentflächen – braucht mindestens 4,5 : 1 Kontrast zur Akzentfarbe |
| „Bildhintergrund“ | Fläche hinter freigestellten Produktbildern |
| „Ausgewählte Option“ | gewählte Variante, gewählte Kaufoption |

Jeder Abschnitt, die Kopf- und die Fußzeile haben eine eigene Einstellung **„Farbschema“** (Standard: Schema 1). **Um die Farben im ganzen Shop zu ändern, bearbeiten Sie Schema 1.** **„Farbschema des Seitenhintergrunds“** gilt nur für den Hintergrund hinter und zwischen den Abschnitten sowie für Warenkorb, Schnellsuche und Dialoge – wählen Sie dort am besten dasselbe Schema wie für Ihre Abschnitte.

Wofür die fünf Schemata gedacht sind (gilt sinngemäß in allen Stilen):

| Schema | Refill-Standard | Einsatz |
|---|---|---|
| 1 | „Papier“, fast weiß | Standard für alle Abschnitte |
| 2 | „Fläche“, kühles Hellgrau | ruhiger Wechsel zwischen Abschnitten (Abo-Erklärung, FAQ, Produktfläche) |
| 3 | „Hellblau“, aus der Akzentfarbe abgeleitet | leiser Akzent (Aufmacher, Vergleich, Brecher-Kachel) |
| 4 | „Tinte“, dunkel | Laufband, Kennzahlen, Zitate |
| 5 | „Signal“, Akzentfläche | die eine laute Stelle einer Seite (Angebot, Aufruf zum Abo) |

Tipp: Ändern Sie zuerst „Akzent“ und „Text auf Akzent“ – das sind die Hauptfarben Ihrer Marke. Die übrigen Rollen sind im gewählten Stil bereits aufeinander abgestimmt.

### Markenfarben

**Theme-Einstellungen → „Markenfarben“** enthält fünf feste Farben für einzelne Elemente, unabhängig vom Farbschema:

| Einstellung | Refill-Standard | Gedacht für |
|---|---|---|
| „Akzent 1“ | `#1F4FD1` (Signalblau) | Badges, Linien, Markenelemente |
| „Akzent 2“ | `#0F5E6E` (Petrol) | zweite Markenfarbe |
| „Aktion / Sale“ | `#B42318` (Rot) | Angebotspreise, Aktions-Badges |
| „Hervorhebung“ | `#F2C230` (Gelb) | Flächen wie Badges – als Textfarbe auf hellem Grund zu hell |
| „Erfolg / Siegel“ | `#1A6E46` (Grün) | Prüfsiegel, „laborgeprüft“ |

Überall, wo ein Block eine Farbe anbietet, wählen Sie zwischen **„Schema-Farbe“**, einer **Markenfarbe** und **„Eigene Farbe“** (dann erscheint der Farbwähler): Block **„Badge“** (Einstellung „Stil“), Badge-Farben unter **„Produktdaten“** (Einstellung „Farbe“ je Badge) und **„Farbe des Streichpreises“** im Block **„Preis“**. Ändern Sie eine Markenfarbe, ändert sie sich überall, wo sie gewählt ist. Text auf einer Markenfarbe ist automatisch Schwarz oder Weiß, je nachdem, was besser lesbar ist.

**Preise:** Unter „Markenfarben“ → **„Preise“** legen Sie **„Angebotspreis“** (Standard im Stil Refill: „Markenfarbe: Aktion / Sale“) und **„Streichpreis“** (Standard: „Schema: Sekundärtext“) fest. Das gilt für Produktseite, Produktkarten und Warenkorb. Die Angebotsfarbe erscheint **nur, wenn ein Streichpreis daneben steht** (Vergleichspreis höher als der Preis, Abo-Ersparnis oder Rabatt im Warenkorb); Produkte ohne Streichpreis behalten die normale Textfarbe. Erreicht eine Markenfarbe auf dem Hintergrund eines Farbschemas keinen Kontrast von 4,5 : 1 (z. B. Rot auf dem dunklen Schema 4), nimmt das Theme dort automatisch die Text- bzw. Sekundärtextfarbe des Schemas.

**Statusfarben** für Erfolg, Hinweis und Fehler (z. B. „Auf Lager“, Rabatte, Fehlermeldungen) sind fest im Theme und haben keine eigene Einstellung. Wäre eine davon auf dem Hintergrund eines Farbschemas schwer lesbar (unter 4,5 : 1, etwa auf dunklen oder kräftig farbigen Schemata), nimmt das Theme dort automatisch eine dunklere bzw. hellere Variante, notfalls die Textfarbe des Schemas. Status steht nie nur als Farbe da, sondern immer mit Text oder Symbol.

### Schriften

**Theme-Einstellungen → „Typografie“**: drei Schriften für **„Überschriften“**, **„Fließtext“** und **„Daten und Preise“**. Die Daten-Schrift erscheint bei Zahlen, Preisen, Einheiten und kurzen Labels; eine Schrift mit fester Zeichenbreite eignet sich am besten. Unter **„Schriftgrößen“** skaliert **„Größe der Überschriften“** alle Überschriften und Titel, **„Größe von Text und Labels“** Fließtext, Labels, Preise, Kennzahlen, Formulare und Buttons – jeweils in allen Abschnitten und Blöcken (90–120 %). Eingabefelder bleiben mindestens 16 px groß.

### Ecken

**Theme-Einstellungen → „Layout“ → „Ecken“**: **„Karten, Bilder und Flächen“** (eckig, leicht oder weich gerundet), dazu getrennt **„Buttons“** und **„Eingabefelder“** (wie Karten und Bilder, eckig bis rund oder „Pille“). Auswahllisten zeigen einen eigenen Pfeil mit festem Abstand zum Rand.

### Buttons

Es gibt drei Button-Stile: **„Primär“** (Fläche in der Akzentfarbe – die eine auffällige Stelle einer Ansicht), **„Sekundär“** (Rahmen) und **„Tertiär“** (am leisesten). Stil und **„Button-Größe“** („Normal“ oder „Klein“) wählen Sie je Button im Block, z. B. im Block „Button“, in Scroll-Story-Folien und beim Link „Alle Beiträge“ der Blogbeiträge. Kleine Buttons sind etwas niedriger, bleiben aber mit dem Finger gut zu treffen.

Wie der Tertiär-Button aussieht, legen Sie unter **Theme-Einstellungen → „Buttons“** fest: **„Stil“** „Text mit Pfeil“ (Standard: unterstrichener Text mit →) oder „Getönte Fläche“ (leicht eingefärbte Fläche ohne Rahmen), dazu die **„Farbe“** aus dem Farbschema („Schema: Text“ ist Standard, „Schema: Akzent“) oder einer Markenfarbe. Ist eine Markenfarbe auf einem Farbschema als Text zu schwach (unter 4,5 : 1), nimmt das Theme dort die Textfarbe des Schemas.

### Menüs

1. Legen Sie im Admin unter **Onlineshop → Navigation** ein Hauptmenü und ein Footer-Menü an (in neuen Shops gibt es bereits „Main menu“ und „Footer menu“).
2. Theme-Editor → **„Kopfzeile“** → Block **„Menü“** → **„Menü“**: Hauptmenü auswählen. Das Menü darf bis zu drei Ebenen haben; auf großen Bildschirmen erscheint es als Mega-Menü, am Handy als Menü mit Ebenen zum Durchklicken.
3. Theme-Editor → **„Fußzeile“** → Blöcke **„Menü“**: je Spalte ein Menü wählen (z. B. Service, Rechtliches).

> Prüfen Sie diesen Schritt beim Stil Refill besonders: Die Vorlage nennt Menüs aus dem Demo-Shop. Gibt es diese Menüs in Ihrem Shop nicht, bleibt das Menü leer, bis Sie Ihres auswählen.

Bilder und Hervorhebungen im Mega-Menü, Bildkacheln im mobilen Menü, die Suche, Land und Sprache sowie das Verhalten der Kopfzeile beim Scrollen beschreibt [Kopfzeile und Navigation](04-header.md).

### Button „Nach oben“

Unter **Theme-Einstellungen → „Layout“** blenden Sie mit **Button „Nach oben“ anzeigen** auf langen Seiten einen Button zum Seitenanfang ein. Darunter: **„Darstellung“** („Symbol“: ein Quadrat mit Pfeil, Tippfläche mindestens 44 px, verdeckt am wenigsten Inhalt; „Symbol und Text“; oder „Symbol am Handy, Symbol und Text am Desktop“ – Screenreader lesen in jedem Fall „Nach oben“ vor), **„Farbe“** („Schema: Umriss“ wie bisher, „Schema: Akzent“ oder eine Markenfarbe als Fläche mit schwarzer oder weißer Schrift), **„Schrift“** (Daten-, Überschriften- oder Fließtext-Schrift; nur die Daten-Schrift steht in Versalien), **„Fett“** und **„Größe“** (S, M, L).

Der Button weicht fixierten Leisten aus: Er steht über der fixierten Kaufleiste, der Vergleichsleiste und dem Cookie-Banner, solange diese sichtbar sind. Auf der Produktseite am Handy erscheint er erst zusammen mit der fixierten Kaufleiste (über ihr), damit er im Kaufbereich keine Preise verdeckt.

### Ankündigungsleiste

Abschnitt **„Ankündigungsleiste“** über der Kopfzeile: Jeder Block **„Ankündigung“** ist eine Zeile mit optionalem Link und optionalem **„Gutscheincode“** zum Kopieren (Einzelheiten in [Kopfzeile und Navigation](04-header.md#ankündigungsleiste)). Passen Sie Texte wie „Kostenloser Versand ab 49 €“ an Ihre tatsächlichen Bedingungen an oder löschen Sie sie.

### Startseite

Die Startseite ist mit Beispielabschnitten gefüllt. Gehen Sie sie von oben nach unten durch:

1. **Bilder ersetzen**: Abschnitt anklicken, Block **„Bild“** bzw. **„Bild mit Text“** wählen, eigenes Bild hochladen. Für das erste große Bild oben auf der Seite **„Sofort laden (Bild ganz oben auf der Seite)“** einschalten.
2. **Kollektionen wählen**: Blöcke **„Produkte aus Kollektion“**, **„Kollektionsliste“** und **„Set zusammenstellen“** brauchen eine Kollektion aus Ihrem Shop.
3. **Texte anpassen**: Überschriften, Texte, Buttons. Formulieren Sie sachlich, ohne Heil- oder Wirkversprechen.
4. Nicht benötigte Abschnitte mit dem Augen-Symbol ausblenden oder löschen.

Neue Abschnitte fügen Sie über **„Abschnitt hinzufügen“** ein. Fertige Vorlagen wie „Bild mit Text“, „Häufige Fragen“ oder „Produktraster“ stehen dort direkt zur Auswahl, siehe [Abschnitte und Blöcke](03-sections-and-blocks.md).

### Fußzeile

Abschnitt **„Fußzeile“** mit Blöcken **„Text“**, **„Menü“**, **„Newsletter“** und **„Social Media“** (zusammen bis zu acht Blöcke). Lassen Sie die **„Überschrift“** eines Menüs leer, erscheint der Name des Menüs; neue Menü-Blöcke sind mit dem Shopify-Menü **„Footer“** vorbelegt. Die **„Untere Leiste“** zeigt optional **„Auswahl Land/Region anzeigen“**, **„Sprachauswahl anzeigen“**, **„Zahlungssymbole anzeigen“**, **„Links zu Rechtstexten anzeigen“**, dazu **„Flaggen anzeigen“** für die Länderauswahl. Land und Sprache erscheinen als kompakte Knöpfe mit Liste (siehe [Kopfzeile und Navigation](04-header.md#land-und-sprache-in-der-fu%C3%9Fzeile)), erst, wenn unter **Einstellungen → Märkte** mehr als ein Land bzw. eine Sprache aktiv ist.

Im Abschnitt **„Fußzeile“** selbst stellen Sie unter **„Spaltenüberschriften“** ein, wie die Überschriften der Spalten aussehen: **„Farbe“** (Schema-Farbe, Markenfarbe oder eigene Farbe; zu schwache Kontraste ersetzt das Theme durch die Schema-Farbe), **„Schrift“** (Daten-, Überschriften- oder Fließtext-Schrift), **„Größe“** (S, M, L), **„Fett“** und **„Versalien“**. Voreinstellung wie bisher: Daten-Schrift, klein, in Versalien, Sekundärtext.

### Social Media und „Follow on Shop“

1. Theme-Einstellungen → **„Social Media“**: vollständige Profil-Adressen eintragen, z. B. `https://www.instagram.com/ihrshop` (Instagram, Facebook, TikTok, YouTube, X). Leere Felder übernehmen die Links aus **Einstellungen → Marke**, falls dort welche stehen.
2. Der Fußzeilen-Block **„Social Media“** zeigt nur Netzwerke mit Link, als Icons (Name für Screenreader) oder unter **„Darstellung“** als **„Icons mit Namen“**. Ohne Links und ohne Shop-Knopf blendet er sich aus.
3. Die Profile gehen außerdem als `sameAs` in die strukturierten Daten des Shops (Startseite) ein, das X-Profil als `twitter:site`.
4. Die Einstellung **„Follow on Shop“ anzeigen** (Standard aus) zeigt den Knopf, mit dem Kundschaft Ihrem Shop in der Shop-App folgt. Shopify legt Aussehen und Farben fest. Voraussetzung sind **Shop Pay** und der Vertriebskanal **Shop**.

### Anrede der Kundschaft

**Theme-Einstellungen → „Sprache und Texte“ → „Anrede der Kundschaft“** legt fest, wie die Texte des Themes Ihre Kundschaft ansprechen: **„Persönlich (du)“** (Standard) oder **„Förmlich (Sie)“**. Die Einstellung gilt für alle Sprachen des Themes mit Höflichkeitsform – Deutsch (du/Sie), Französisch (tu/vous), Italienisch (tu/Lei), Spanisch (tú/usted), Niederländisch (je/u), Polnisch, Tschechisch (ty/vy) und Portugiesisch. Englisch und die nordischen Sprachen (Dänisch, Finnisch, Schwedisch) bleiben unverändert. Betroffen sind Sätze wie „Dein Warenkorb ist leer.“ / „Ihr Warenkorb ist leer.“, Bestätigungen nach Kontaktformular, Newsletter und Kommentar, Hinweise bei Suche, Lieferzeitleiste und Verfügbarkeits-Benachrichtigung.

Texte, die Sie selbst in Abschnitten und Blöcken eingeben (Überschriften, Absätze, Button-Beschriftungen), ändert die Einstellung nicht. Einige Vorlagen und neue Blöcke starten mit Beispieltexten in der Du-Form, etwa „Abo nach deinem Takt“, „10 % auf deine erste Bestellung“, „Stell dein Set zusammen“, „Das könnte dir auch gefallen“ oder „Bist du mindestens 18 Jahre alt?“. Passen Sie diese bei förmlicher Anrede im Editor an. Passen Sie Shop-Texte unter Onlineshop → Themes → … → **Standard-Theme-Inhalte bearbeiten** an, finden Sie die förmlichen Fassungen dort unter **„Sections › Formal“**.

## 3. Vor dem Veröffentlichen

1. **Herstellerangaben eintragen**: Theme-Einstellungen → **„Pflichtangaben“**, siehe [Pflichtangaben](11-compliance.md).
2. **Produktdaten verbinden**: Theme-Einstellungen → **„Produktdaten“**, siehe [Produktdaten](09-product-data.md).
3. **Pflichtpunkte durchgehen**: Rechtstexte, Herstellerangaben, Grundpreise, Alt-Texte, Kontrast und Meta-Beschreibungen anhand der Liste [Vor dem Start prüfen](11-compliance.md#5-vor-dem-start-prüfen). Öffnen Sie Startseite, eine Produktseite und den Warenkorb und arbeiten Sie die Punkte ab.
4. **Optionale Funktionen prüfen**: Animation (Theme-Einstellungen → „Animation“), Bedienhilfen-Panel (Theme-Einstellungen → „Bedienhilfen“) und „Follow on Shop“ (Fußzeile, Block „Social Media“) – siehe [Animation](08-animation.md) und [Barrierefreiheit](13-accessibility.md).
5. **Veröffentlichen**: Onlineshop → Themes → bei Refill **„Veröffentlichen“**.

## Hilfe

Fragen zum Theme beantwortet der Support unter [support@refill-themes.com](mailto:support@refill-themes.com). Bitte nennen Sie Shop-Adresse (`…myshopify.com`), Theme-Version und die betroffene Seite.
