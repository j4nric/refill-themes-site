# Animation

Bewegung ist bei Refill sparsam und schaltbar. Alle Effekte stehen an einer Stelle: **Theme-Einstellungen → „Animation“**. Dazu kommen die Section **„Scroll-Story“** und einzelne Effekte, die zu einem Bereich gehören (Kopfzeile, Produktkarten, Datentafel).

Drei Regeln gelten für alles:

- **Keine Ladezeit-Einbußen.** Der Code für Effekte lädt nur, wenn mindestens ein Effekt eingeschaltet ist, und erst nach dem Seitenaufbau. Inhalte im ersten sichtbaren Bereich werden nie ausgeblendet oder verzögert.
- **Ohne JavaScript ist alles sofort sichtbar.**
- **„Bewegung reduzieren“ hat Vorrang.** Wer das im Betriebssystem oder im [Bedienhilfen-Panel](13-accessibility.md#bedienhilfen-panel-optional) einstellt, sieht keine Animationen – auch nicht nachträglich während des Besuchs. Das gilt ebenso für Karussell, Galerie, Vollbild, rollende Zahlen und die Panels der Kopfzeile.

Im Theme-Editor blenden die Effekte nichts aus, damit Sie alle Inhalte sehen und bearbeiten können.

## Theme-Einstellungen → Animation

| Einstellung | Wirkung | Standard |
|---|---|---|
| „Animationen aktivieren“ | Hauptschalter für alle Effekte, die Scroll-Story und Seitenübergänge. Aus: alle anderen Einstellungen verschwinden. Kurze Rückmeldungen beim Öffnen und Schließen (z. B. Warenkorb) bleiben. | an |
| „Intensität“ | Weg, Dauer und Staffelung aller Effekte: „Dezent“, „Normal“, „Ausdrucksstark“. | Dezent |
| **Beim Scrollen** | | |
| „Abschnitte einblenden“ | Inhalte von „Abschnitt“-Sections erscheinen beim Hineinscrollen. **„Art“**: „Aufsteigen“ oder „Nur einblenden“. | an, Aufsteigen |
| „Produktreihen einfliegen lassen“ | Produktkarten in Rastern kommen gestaffelt von der Seite – beim Scrollen nach unten von rechts, nach oben von links. | aus |
| „Text-Animation“ | Texte bauen sich beim ersten Sichtbarwerden auf. „Nur Überschriften“: Überschriften Wort für Wort bzw. Zeile für Zeile, die kleine Überschrift (Label) darüber blendet mit ein. „Überschriften + Akzent“: auch Profil-Skalen, Zeitleisten, Kennzahlen, Schritte, Vorteile und Text-Hervorhebungen (der Marker folgt dem Scrollen). „Alle Texte“: auch Fließtext und Zitate – jeder Absatz erscheint, sobald er selbst ins Bild kommt. Welche Überschriften dazugehören, steht unter [Was sich aufbaut](#was-sich-aufbaut). | Aus |
| „Geschwindigkeit der Textanimation“ | „Langsam“, „Normal“ oder „Schnell“ – Dauer und Abstand aller Text-Animationen, überall gleich (Überschriften, Akzente, Fließtext, Marker; auch im Blogbeitrag). Wirkt zusätzlich zur „Intensität“; „Normal“ entspricht dem bisherigen Tempo. Erscheint, sobald eine Text-Animation gewählt ist. | Normal |
| „Überschriften aufbauen“ (ältere Einstellung) | Ersetzt durch „Text-Animation“; wirkt nur, solange dort „Aus“ gewählt ist. Große Überschriften erscheinen **„Wortweise“** oder **„Zeilenweise“** (Einstellung „Aufbau“). Der Text bleibt für Suchmaschinen und Screenreader vollständig. | aus |
| „Parallax für Bilder“ | Bilder im Block „Bild mit Text“ und im Block „Bild“ (Einpassen „Fläche füllen“) bewegen sich etwas langsamer als die Seite. Im Block „Bild mit Text“ lässt sich Parallax je Block an- oder abschalten; „An“ wirkt dort auch ohne diese Einstellung und ohne den Hauptschalter. | aus |
| **Rückmeldung und Übergänge** | | |
| „Hover und Buttons“ | Beim Überfahren läuft die Hover-Farbe von Primär- und Sekundär-Buttons von der Seite ein, statt umzuschalten; Buttons geben beim Drücken leicht nach, Links in der Fußzeile bekommen eine wachsende Unterstreichung. Nur mit Maus. Ohne die Einstellung wechseln Buttons beim Überfahren nur die Farbe. | aus |
| „Seitenübergang“ | „Überblenden“, „Aufsteigen“, „Seitlich schieben“ oder „Kein Übergang“ beim Wechsel zwischen Seiten. | Überblenden |

Einstellungen wie „Art“ oder „Aufbau“ erscheinen erst, wenn der zugehörige Effekt eingeschaltet ist.

**Intensität im Detail:** „Dezent“ bewegt Inhalte um 12 px in einer halben Sekunde – kaum bemerkbar, gut für jeden Shop. „Normal“ ist die Obergrenze für Produktreihen und Überschriften. „Ausdrucksstark“ ist für Kampagnen- und Landingpages gedacht.

### Was sich aufbaut

Die Text-Animation folgt einer Regel: **Alles, was beim Laden der Seite schon im Bild ist, bleibt ruhig; was später ins Bild scrollt, baut sich auf** – einmal, beim ersten Erscheinen.

- **Überschriften:** jede Überschrift im Hauptinhalt, in jedem Abschnitt – auch auf Produkt- und Kollektionsseiten, in „Passt dazu“-Empfehlungen und im Blogbeitrag, auch als „H3“. Dazu gehört die kleine Überschrift (Label) des Blocks „Überschrift“.
- **Nicht:** Titel von Produkt-, Beitrags- und Kollektionskarten, Einträge von Listen (Schritte, Zutaten, Antworten), Aufklapp-Zeilen, Überschriften in Karussells und Tab-Leisten (sie scrollen seitlich) sowie Kopf- und Fußzeile.
- **Ganz oben:** Aufmacher, Kollektionskopf und Produkttitel stehen meist im ersten sichtbaren Bereich und erscheinen deshalb sofort – das hält die Ladezeit (größtes Element) kurz und verhindert Flackern. Steht dieselbe Überschrift weiter unten, baut sie sich auf. Im Block „Bild mit Text“ schaltet „Sofort zeigen“ die Animation für die Textfläche bewusst ab.
- **Ganz unten:** Inhalte, die die Seite nicht mehr weit genug hochscrollen kann, stehen sofort fertig da.

**Empfehlung:** Schalten Sie Effekte einzeln ein und prüfen Sie die Wirkung am Handy. Mehr als zwei, drei Effekte gleichzeitig lenken vom Produkt ab. Jeder Stil bringt eine dezente Auswahl mit (siehe [Stile](02-presets.md)).

**Browser:** Die flüssige Scroll-Story läuft in Chrome, Edge und Safari ab Version 26; in anderen Browsern blendet sie stattdessen weich über. Parallax läuft in allen Browsern: Chrome, Edge und Safari ab 26 rechnen ihn selbst, in Firefox und älterem Safari übernimmt ein kleines Skript, das erst lädt, wenn Parallax eingeschaltet ist. Seitenübergänge zeigen Chrome, Edge und Safari ab 18.2; andere Browser wechseln die Seite ohne Übergang.

## Section „Scroll-Story“

Folien, die beim Scrollen ineinander übergehen: Die aktuelle Folie bleibt stehen, die nächste blendet darüber ein, der Text wechselt. Gut für Herkunft, Herstellung oder „So funktioniert das Abo“.

1. **„Abschnitt hinzufügen“** → Kategorie **„Medien“** → **„Scroll-Story“**.
2. Je **„Folie“**: **„Bild“**, **„Kleine Überschrift“**, **„Überschrift“**, **„Text“**, optional ein **„Button“** (erst **„Beschriftung“**, dann erscheinen **„Link“** und – mit Link – **„Stil“**) und unter **„Gestaltung“** ein **„Farbschema“**. Eine Folie ohne Bild wird zur Textfolie über die ganze Breite.
3. Abschnitt-Einstellungen:

| Gruppe | Einstellung | Wirkung |
|---|---|---|
| „Animation“ | „Übergang“ | „Überblenden“, „Überblenden mit Bild-Zoom“ (Standard) oder „Bild gleitet herein“. |
| | „Scrollweg je Folie“ | „Kurz“, „Mittel“ (Standard), „Lang“ – wie weit gescrollt wird, bis die nächste Folie vollständig da ist. |
| „Gestaltung“ | „Bild (Desktop)“ | Bild „Vorne“ (Standard), „Hinten“ oder „Abwechselnd“ neben dem Text. |
| | „Folien nummerieren (01, 02 …)“ | Nummer mit Fortschrittslinie über jeder Folie (Standard an). |

Die Gruppe „Animation“ erscheint nur, wenn unter Theme-Einstellungen → „Animation“ **„Animationen aktivieren“** eingeschaltet ist; sonst steht dort der Hinweis, dass die Folien untereinander stehen.

Tipps:

- Höchstens sechs Folien und kurze Texte – eine Aussage pro Folie. Jede Folie füllt den Bildschirm; am Handy steht der Text unter dem Bild.
- Steht die Scroll-Story ganz oben auf der Seite, schalten Sie bei der ersten Folie **„Bild sofort laden“** ein (erscheint, sobald ein Bild gewählt ist).
- Ist „Animationen aktivieren“ aus oder „Bewegung reduzieren“ eingestellt, stehen die Folien untereinander wie normale Abschnitte.
- Im Theme-Editor springt die Vorschau beim Auswählen einer Folie an die Stelle, an der sie vollständig zu sehen ist.

## Akzente

**„Überschrift“**, **„Text“** und **„Button“** haben eine Gruppe **„Akzent“**: ein fertig gestaltetes Linien-Motiv aus derselben Bibliothek wie Linien-Grafik und Dekor, ohne eigenen Block und ohne Positionieren von Hand. Standard ist **„Kein Akzent“** – dann ändert sich am Block nichts.

| Einstellung | Wirkung |
|---|---|
| **„Motiv“** | Eines der 27 Motive (Liste unter [Motive nach Zweck](#motive-nach-zweck)). Für Überschrift und Text passen die Motive zum Hervorheben, für Buttons der Pfeil oder Funkeln. |
| **„Position“** (Überschrift, Text) | **„Am markierten Wort“** (Standard): Setzen Sie ein Wort in doppelte eckige Klammern, z. B. `Nachfüllen statt [[wegwerfen]]`. „Kreis um ein Wort“ und „Rahmen-Ecken“ umschließen das Wort, „Schwung“, „Doppelte Unterstreichung“, „Zickzack“ und „Wellen“ stehen darunter, alle anderen Motive klein oben am Wortende. Das Motiv ersetzt dort den Textmarker. Bei mehreren Markierungen gilt die erste. Ohne Markierung steht der Akzent unter dem Text, im Theme-Editor mit dem Hinweis „Nur im Editor sichtbar“. Weitere Positionen: **„Unter dem Text“**, **„Über dem Text“** (beide nehmen etwas Platz ein), **„Links“**, **„Rechts“**, **„Ecke oben rechts“**, **„Ecke unten links“**, **„Hinter dem Text“** (für ruhige Motive wie Höhenlinien in „Schema: Linie“). |
| **„Position“** (Button) | **„Zeigt auf den Button (links)“** (Standard) bzw. **„(rechts)“**: Pfeil neben dem Button; **„Über dem Button“**; **„Funkeln beim Hover“**: das Motiv erscheint nur, solange die Maus über dem Button steht oder er per Tastatur angesteuert ist. |
| **„Größe“** | Klein, Mittel, Groß – im Verhältnis zur Schriftgröße des Blocks, also bei großen Überschriften größer als bei Fließtext. |
| **„Farbe“** | Rollen des Farbschemas oder Markenfarben, Standard „Schema: Akzent“. |
| **„Strichstärke“** | Fein, Mittel, Kräftig – wie bei der Linien-Grafik. |
| **„Animation“** | **„Zeichnen“** (die Linie entsteht), **„Schweben“**, **„Pulsieren“**, **„Leicht wackeln“** oder **„Ohne“**. |
| **„Abspielen“** | **„Einmal beim Sichtbarwerden“** (Standard; „Zeichnen“ wartet unsichtbar, bis der Akzent zur Hälfte im Fenster steht), **„Beim Überfahren mit der Maus“** oder **„Beim Laden (ca. 5 s)“** (wiederholt sich gut 4 Sekunden lang und bleibt dann stehen – so bleibt die Seite ohne Pause-Knopf barrierefrei; sparsam, höchstens einmal je Ansicht). Tipp: Kurze Markierungen von ein bis drei Wörtern wirken am besten; lange Markierungen brechen mit Akzent als Block um. |
| **„Am Handy zeigen“** | Aus: Der Akzent entfällt unter 750 px Fensterbreite. |

- Akzente verschieben nichts, fangen keine Klicks ab und werden von Screenreadern übersprungen. „Unter dem Text“ und „Über dem Text“ halten ihren Platz von Anfang an frei; alle anderen Positionen liegen über bzw. hinter dem Block.
- Bei „Bewegung reduzieren“ (System oder Bedienhilfen), ohne JavaScript und in erzwungenen Farben steht das Motiv fertig gezeichnet still; „Hinter dem Text“ entfällt bei „Hoher Kontrast“.
- Am Handy rücken „Links“, „Rechts“ und die Pfeile an die obere Ecke des Textes bzw. Buttons, damit nichts über den Bildschirmrand ragt.
- Anders als Linien-Grafik und Dekor bewegen sich Akzente nach Zeit, nicht beim Scrollen. Die Einstellungen unter „Theme-Einstellungen → Animation“ gelten auch hier nicht.
- Im Theme-Editor spielt der Akzent beim Auswählen des Blocks noch einmal ab.

**Wann „Freies Dekor“?** Wenn ein Motiv frei im Abschnitt stehen soll (an x/y), eine eigene Grafik gebraucht wird oder sich das Motiv beim Scrollen bewegen soll. Für alles, was an einer Überschrift, einem Wort oder einem Button hängt, ist der Akzent einfacher.
## Section „Durchblick“

Ein Abschnitt wie ein Fenster in der Seite: Dahinter liegt ein Bild, ein Video, eine Farbe oder ein Muster. Beim Scrollen bleibt der Hintergrund stehen (oder läuft langsamer mit), die Seite gleitet darüber. Gut als ruhiger Brecher zwischen Produktabschnitten, z. B. für ein Stimmungsbild mit einem Satz und einem Button.

1. **„Abschnitt hinzufügen“** → Kategorie **„Medien“** → **„Durchblick: Bild“** oder **„Durchblick: Muster“**.
2. Inhalte fügen Sie als **„Platzierter Inhalt“** hinzu; darin wie in einer Gruppe **„Überschrift“**, **„Text“**, **„Button“**, **„Bild“** usw. Mehrere „Platzierte Inhalte“ stehen an verschiedenen Stellen im Fenster. Zusätzlich passt der Block **„Freies Dekor“** hinein (eigene x/y-Position, siehe [Block „Freies Dekor“](#block-freies-dekor)).
3. Abschnitt-Einstellungen:

| Gruppe | Einstellung | Wirkung |
|---|---|---|
| – | „Farbschema (Text und Überlagerung)“ | Schrift- und Überlagerungsfarbe. Helles Bild → helles Schema, dunkles Bild → dunkles Schema (Standard „Tinte“). |
| | „Überlagerung“ | Grundfarbe des Schemas über dem Hintergrund, 0–90 % (Standard 40 %). |
| „Hintergrund“ | „Art“ | „Bild“ (Standard), „Video“, „Farbe“ oder „Muster“. |
| | „Bild“, „Bildausrichtung“ | Querformat ab 1600 px. Ein Fokuspunkt aus Shopify (Inhalte › Dateien) hat Vorrang vor der Bildausrichtung. Beim Video ist das Bild das Standbild. |
| | „Sofort laden (Abschnitt ganz oben)“ | Nur für einen Durchblick im ersten Bildschirm: Bild lädt mit hoher Priorität, die Inhalte erscheinen ohne Animation. |
| | „Muster“, „Größe des Musters“, „Farbe des Musters“, „Farbschema des Hintergrunds“ | Punkte, Raster, Linien oder Schraffur in den Farben eines Schemas; „Farbe“ nimmt dessen Hintergrund (auch Verlauf). |
| „Bewegung“ | „Beim Scrollen“ | „Fest (Seite gleitet darüber)“ (Standard), „Parallax: läuft langsam mit“, „Parallax: läuft schneller mit“, „Ohne (scrollt mit)“. |
| „Fenster“ | „Höhe“ | „Klein“, „Mittel“ (Standard), „Groß“, „Bildschirmhöhe“ oder „Nach Inhalt“. Längerer Inhalt macht das Fenster immer höher, nichts wird abgeschnitten. |
| | „Breite“ | „Volle Breite (randlos)“, „Mit Rand“ (Standard: rundum Abstand zum Seitenrand, das Fenster sitzt in der Seite) oder „Seitenbreite“. |
| | „Form“ | „Rechteckig“, „Abgerundet“ oder „Bogen“ (oben gewölbt). |
| | „Innenabstand“, „Am Handy“ | „Untereinander“ (Standard: alle Inhalte in der Reihenfolge der Seitenleiste, volle Breite) oder „Frei platziert“ (Position wie am Desktop mit „Breite am Handy“). |

**„Platzierter Inhalt“:** **„Position“** „Am Raster (9 Punkte)“ mit **„Stelle im Fenster“** (oben links … unten rechts) oder „Frei (x/y)“ mit **„Waagerecht“** und **„Senkrecht“** in Prozent (0 % = links bzw. oben, 100 % = rechts bzw. unten; der Inhalt bleibt ganz im Fenster). **„Breite“** in Prozent der Fensterfläche, **„Breite am Handy“** (nur mit „Am Handy: Frei platziert“), **„Horizontale Ausrichtung“**, **„Abstand zwischen Blöcken“** und **„Fläche hinter dem Text“**: „Keine“ (Standard), „Deckend“ oder „Durchscheinend“, jeweils mit **„Farbschema der Fläche“**. In Rechts-nach-links-Sprachen tauschen links und rechts die Seiten.

Tipps:

- **Lesbarkeit:** Text steht direkt auf dem Bild nur mit genug Überlagerung (Kontrast mindestens 4,5 : 1). Bei unruhigen Bildern „Fläche hinter dem Text: Deckend“ wählen.
- **Reihenfolge:** Screenreader und Tastatur folgen der Reihenfolge in der Seitenleiste, nicht der Position im Fenster. Stellen Sie die Inhalte in Lesereihenfolge an.
- **Bewegung reduzieren** (Betriebssystem oder [Bedienhilfen-Panel](13-accessibility.md#bedienhilfen-panel-optional)): Der Hintergrund liegt still im Fenster. Browser ohne Parallax-Unterstützung (Firefox, Safari vor Version 26) zeigen Parallax wie „Fest“. Bei „Hoher Kontrast“ und erzwungenen Farben entfällt der Hintergrund.
- Der Effekt braucht kein JavaScript und funktioniert auch auf dem iPhone. Er hängt nicht am Schalter „Animationen aktivieren“; nur das Einblenden der Inhalte folgt den Theme-Einstellungen.
- Im Theme-Editor umrahmt die Auswahl bei „Frei (x/y)“ die ganze Fensterfläche – der Inhalt selbst steht an seiner Position.

## Linien-Grafik und Dekor

Der Block **„Linien-Grafik“** und die Gruppe **„Dekor“** jedes Abschnitts zeigen dieselben Linien-Motive. Unter **„Beim Scrollen“** wählen Sie, was das Motiv tut, während es durch das Fenster läuft:

| Einstellung | Wirkung |
|---|---|
| Zeichnen (Strich entsteht beim Scrollen) | Die Linie entsteht, bis das Motiv etwa die Mitte des Fensters erreicht; danach bleibt sie fertig stehen. |
| Mitlaufen (Parallaxe) | Das Motiv verschiebt sich leicht gegen die Scrollrichtung. |
| Welle (wandert seitlich) | Das Motiv wandert um eine Breite zur Seite; Wellen laufen dabei nahtlos weiter. |
| Drehen | Das Motiv dreht sich um bis zu 40° in jede Richtung, in der Mitte steht es gerade. |
| Punkt läuft entlang | Ein Punkt wandert auf der Linie vom Anfang zum Ende (z. B. Zeitleiste, Orbit). |
| Ruhig (ohne Bewegung) | Keine Bewegung. |

- Die Bewegung folgt nur dem Scrollen, nie der Zeit; nichts läuft von selbst.
- Bei „Bewegung reduzieren“ (System oder Bedienhilfen) und ohne JavaScript steht das Motiv fertig gezeichnet still; der Punkt steht am Ende der Linie.
- Aktuelle Browser (Chrome, Edge, Safari ab 26) bewegen die Motive ohne zusätzliches Skript. Andere Browser laden ein kleines Skript nach, das nur rechnet, solange ein Motiv sichtbar ist.
- Die Einstellungen unter „Theme-Einstellungen → Animation“ gelten hier nicht: Wer ein Scroll-Verhalten wählt, hat die Bewegung bewusst eingeschaltet.

### Welcher Block wofür

Drei Blöcke und die [Akzente](#akzente) nutzen dieselben 27 Motive:

- **„Linien-Grafik“** steht im Inhalt wie ein Bild (z. B. unter einer Überschrift oder zwischen Spalten) und nimmt Platz ein.
- **„Freies Dekor“** (für Fortgeschrittene) liegt frei über oder hinter dem Bereich, in dem es steht, und verschiebt nichts – oder steht mit „Im Inhalt“ wie eine Linien-Grafik im Fluss. Es kann statt eines Motivs eine eigene Grafik zeigen.
- **„Linien-Animation“** zeigt Wellenlinien, die beim Scrollen seitlich wandern (eigene Bewegung, keine Motivauswahl).

Für ein Motiv hinter einem ganzen Abschnitt genügt die Gruppe **„Dekor“** des Abschnitts (siehe [Abschnitte und Blöcke](03-sections-and-blocks.md#das-prinzip)).

### Motive nach Zweck

Die Auswahl „Motiv“ ist nach Zweck geordnet:

| Zweck | Motive |
|---|---|
| Hervorheben | Kreis um ein Wort, Schwung, Doppelte Unterstreichung, Zickzack-Linie, Funkeln (drei Sterne), Rahmen-Ecken |
| Hinweisen | Geschwungener Pfeil, Häkchen im Kreis, Lupe |
| Stimmung | Herz, Geschenk, Wellen, Höhenlinien, Zweig, Dampf-Kringel, Tropfen mit Ringen, Orbit |
| Kommunikation | Sprechblase, Brief (Umschlag) |
| Struktur | Pfad mit Punkten, Verbindungslinie, Messlinien |
| Abo und Nachfüllen | Kreislauf, Kalenderblatt mit Häkchen, Paket mit Bewegungslinien, Füllstand, Uhr |

- **Brief** passt zu Newsletter-Anmeldung und Kontakt, z. B. als Linien-Grafik über dem Formular oder als [Akzent](#akzente) an der Überschrift; mit „Zeichnen“ entsteht erst der Umschlag, dann Klappe und Falze.
- **Kreis um ein Wort**, **Doppelte Unterstreichung** und **Schwung** setzen Sie am einfachsten als [Akzent](#akzente) „Am markierten Wort“ an ein Wort der Überschrift.
- **Füllstand:** Mit „Zeichnen“ steigt die Linie im Glas vom Boden auf ihre Höhe; mit „Punkt läuft entlang“ steigt ein Punkt wie eine Blase auf.

### Block „Freies Dekor“

Der Block **„Freies Dekor“** (Kategorie „Medien“, bis 27.11.2026 „Dekor“) setzt ein Linien-Motiv oder eine eigene Grafik in einen Abschnitt, eine Gruppe oder eine Spalte. Er ist rein schmückend: Screenreader überspringen ihn, und er fängt keine Klicks ab.

| Einstellung | Wirkung |
|---|---|
| **„Motiv“** | Eines der Linien-Motive. Ausgeblendet, sobald eine eigene Grafik gewählt ist. |
| **„Eigene Grafik“** | SVG oder PNG aus „Dateien“, ersetzt das Motiv. **„Grafik in der gewählten Farbe zeigen“** färbt sie in „Farbe“ ein (für einfarbige Grafiken mit transparentem Hintergrund). Strichstärke, Spiegeln und Wiederholungen wirken auf eigene Grafiken nicht und sind dann ausgeblendet; von den Bewegungen wirken nur „Mitlaufen“ und „Drehen“, die übrigen stehen still. |
| **„Platzierung“** | **„Frei“**: Das Dekor liegt über oder hinter dem Bereich, in dem der Block steht (Abschnitt, Gruppe oder Spalte), und verschiebt nichts. Die Position setzen **„Waagerecht“** und **„Senkrecht“** in Prozent dieses Bereichs; was über den Rand ragt, wird abgeschnitten. **„Im Inhalt“**: Das Dekor nimmt Platz ein wie eine Linien-Grafik und steht zwischen den anderen Blöcken. |
| **„Ebene“** | Nur bei „Frei“: **„Hinter dem Inhalt“** (Standard) oder **„Vor dem Inhalt“**. Vor dem Inhalt kann es Text überdecken – sparsam und mit geringer „Deckkraft“ einsetzen. |
| **„Ausrichtung der Gruppe übernehmen“**, **„Ausrichtung“** | Nur bei „Im Inhalt“, wie unter [Gruppe und Spalten](03-sections-and-blocks.md#gruppe-und-spalten). |
| **„Größe“**, **„Größe am Handy“** | Breite in Prozent des Bereichs. „Handy“ heißt hier: Fenster schmaler als 750 px, unabhängig von der Spaltenbreite. |
| **„Drehung“** | −180° bis 180°. |
| **„Anzeigen auf“** | „Allen Geräten“, „Nur Desktop“ (ab 750 px Fensterbreite) oder „Nur Handy“. Im Theme-Editor steht in der anderen Vorschau ein Hinweis „Nur im Editor sichtbar“ an der Stelle des Dekors, damit der Block auffindbar bleibt. |
| **„Farbe“**, **„Strichstärke“**, **„Deckkraft“**, **„Spiegeln“**, **„Wiederholungen nebeneinander“** | Aussehen wie bei der Linien-Grafik; die Strichstärke frei in px. |
| **„Beim Scrollen“**, **„Geschwindigkeit“** | Bewegung wie oben; bei „Bewegung reduzieren“ steht das Dekor still. |

In erzwungenen Farben („Hoher Kontrast“) entfällt frei platziertes Dekor, weil es hinter oder über Text läge.

## Weitere Bewegung im Theme

Diese Effekte stellen Sie dort ein, wo sie wirken. Auch für sie gilt „Bewegung reduzieren“.

| Effekt | Wo |
|---|---|
| Aufklappen der Untermenüs, Suche, Land/Sprache | Kopfzeile → „Aufklappende Bereiche“ → „Animation“, siehe [Kopfzeile](04-header.md) |
| Zoom und Zweitbild beim Überfahren von Produktkarten | Theme-Einstellungen → „Produktdaten“ → „Produktkarten“, siehe [Kollektionen](05-collections.md#bildbewegung-beim-überfahren) |
| Vollbild-Galerie | Block „Produktbilder“ → „Vollbild beim Klick auf ein Bild“, siehe [Produktseite](06-product-page.md#vollbild) |
| Rollende Zahlen in der Datentafel | Block „Datentafel“ → „Zahlen beim ersten Sichtbarwerden einrollen“ |
| Einträge der Zeitleiste nacheinander | Block „Zeitleiste“ → „Animationsgeschwindigkeit der Einträge“: „Schnell“, „Wie Theme-Einstellung“ (Standard, folgt „Geschwindigkeit der Textanimation“), „Langsam“, „Sehr langsam“ – Dauer und Abstand, mit denen Linie, Punkt und Text jedes Eintrags erscheinen. Erscheint mit Text-Animation „Überschriften + Akzent“ oder „Alle Texte“ |
| Laufband | Block „Laufband“ (mit Pause-Button). Den Knopf zeigen Laufband und durchlaufende Logo-Leiste als Symbol (Standard) oder Text: Theme-Einstellungen → „Animation“ → „Laufband“ → „Schalter zum Anhalten“ |
| Linien-Motive beim Scrollen | Block „Linien-Grafik“ und Abschnitt → „Dekor“, siehe oben |
| Hintergrundvideo (mit Pause-Knopf) | Abschnitt → „Hintergrund“ und Block „Bild mit Text“ → „Video statt Bild“, siehe [Abschnitte und Blöcke](03-sections-and-blocks.md#das-prinzip) |

Die Seitenübergänge haben eine Besonderheit: Klickt jemand auf eine Produktkarte, wandert das Produktbild in die Galerie der Produktseite, und die Kopfzeile bleibt stehen. Das gehört zum „Seitenübergang“ und entfällt mit „Kein Übergang“.
