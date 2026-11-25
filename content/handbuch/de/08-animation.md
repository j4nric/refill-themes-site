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
| „Animationen aktivieren“ | Hauptschalter für alle Effekte, die Scroll-Story und Seitenübergänge. Aus: alle anderen Einstellungen verschwinden. | an |
| „Intensität“ | Weg, Dauer und Staffelung aller Effekte: „Dezent“, „Normal“, „Ausdrucksstark“. | Dezent |
| **Beim Scrollen** | | |
| „Abschnitte einblenden“ | Inhalte von „Abschnitt“-Sections erscheinen beim Hineinscrollen. **„Art“**: „Aufsteigen“ oder „Nur einblenden“. | an, Aufsteigen |
| „Produktreihen einfliegen lassen“ | Produktkarten in Rastern kommen gestaffelt von der Seite – beim Scrollen nach unten von rechts, nach oben von links. | aus |
| „Überschriften aufbauen“ | Große Überschriften erscheinen **„Wortweise“** oder **„Zeilenweise“** (Einstellung „Aufbau“). Der Text bleibt für Suchmaschinen und Screenreader vollständig. | aus |
| „Parallax für Bilder“ | Bilder im Block „Bild mit Text“ und im Block „Bild“ (Einpassen „Fläche füllen“) bewegen sich etwas langsamer als die Seite. | aus |
| **Rückmeldung und Übergänge** | | |
| „Linie zum Warenkorb“ | Nach „In den Warenkorb“ läuft eine feine Linie mit einem Punkt vom Button zum Warenkorb in der Kopfzeile. | aus |
| „Hover und Buttons“ | Buttons geben beim Drücken leicht nach, Sekundär-Buttons füllen sich beim Überfahren, Links in der Fußzeile bekommen eine wachsende Unterstreichung. | aus |
| „Seitenübergang“ | „Überblenden“, „Aufsteigen“, „Seitlich schieben“ oder „Kein Übergang“ beim Wechsel zwischen Seiten. | Überblenden |

Einstellungen wie „Art“ oder „Aufbau“ erscheinen erst, wenn der zugehörige Effekt eingeschaltet ist.

**Intensität im Detail:** „Dezent“ bewegt Inhalte um 12 px in einer halben Sekunde – kaum bemerkbar, gut für jeden Shop. „Normal“ ist die Obergrenze für Produktreihen und Überschriften. „Ausdrucksstark“ ist für Kampagnen- und Landingpages gedacht.

**Empfehlung:** Schalten Sie Effekte einzeln ein und prüfen Sie die Wirkung am Handy. Mehr als zwei, drei Effekte gleichzeitig lenken vom Produkt ab. Jeder Stil bringt eine dezente Auswahl mit (siehe [Stile](02-presets.md)).

**Browser:** Parallax und die flüssige Scroll-Story laufen in Chrome, Edge und Safari ab Version 26; in anderen Browsern bleiben Bilder ruhig, die Scroll-Story blendet stattdessen weich über. Seitenübergänge zeigen Chrome, Edge und Safari ab 18.2; andere Browser wechseln die Seite ohne Übergang.

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

## Weitere Bewegung im Theme

Diese Effekte stellen Sie dort ein, wo sie wirken. Auch für sie gilt „Bewegung reduzieren“.

| Effekt | Wo |
|---|---|
| Aufklappen der Untermenüs, Suche, Land/Sprache | Kopfzeile → „Aufklappende Bereiche“ → „Animation“, siehe [Kopfzeile](04-header.md) |
| Zoom und Zweitbild beim Überfahren von Produktkarten | Theme-Einstellungen → „Produktdaten“ → „Produktkarten“, siehe [Kollektionen](05-collections.md#bildbewegung-beim-überfahren) |
| Vollbild-Galerie | Block „Produktbilder“ → „Vollbild beim Klick auf ein Bild“, siehe [Produktseite](06-product-page.md#vollbild) |
| Rollende Zahlen in der Datentafel | Block „Datentafel“ → „Zahlen beim ersten Sichtbarwerden einrollen“ |
| Laufband | Block „Laufband“ (mit Pause-Button) |
| Linien-Motive beim Scrollen | Block „Linien-Grafik“ und Abschnitt → „Dekor“, siehe oben |
| Hintergrundvideo (mit Pause-Knopf) | Abschnitt → „Hintergrund“ und Block „Bild mit Text“ → „Video statt Bild“, siehe [Abschnitte und Blöcke](03-sections-and-blocks.md#das-prinzip) |

Die Seitenübergänge haben eine Besonderheit: Klickt jemand auf eine Produktkarte, wandert das Produktbild in die Galerie der Produktseite, und die Kopfzeile bleibt stehen. Das gehört zum „Seitenübergang“ und entfällt mit „Kein Übergang“.
