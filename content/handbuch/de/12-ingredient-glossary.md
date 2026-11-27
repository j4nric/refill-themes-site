# Inhaltsstoff-Lexikon

Mit dem Lexikon bekommt jeder Inhaltsstoff eine eigene Seite: Name, Form, Herkunft, Beschreibung, Bild und die Produkte, die ihn enthalten. Eine Übersichtsseite listet alle Inhaltsstoffe von A bis Z. Im Block „Inhaltsstoffe: Im Fokus“ auf Produktseiten verlinken die Namen automatisch auf ihre Lexikon-Seite.

Das Lexikon nutzt die Metaobjekte „Inhaltsstoff“, die Sie auch für den Block „Inhaltsstoffe: Im Fokus“ anlegen (siehe [Produktdaten](09-product-data.md)).

## Voraussetzung: Metaobjekt „Inhaltsstoff“

Die Metaobjekt-Definition muss den **Typ-Handle `ingredient`** haben, mit den Feldern `name`, `form`, `source`, `description`, `image` und optional `vegan`. Unter **Zugriff** muss **Storefronts** aktiv sein.

## Schritt 1: Webseiten für das Metaobjekt aktivieren

1. Admin → **Einstellungen → Metafelder und Metaobjekte** (bzw. „Benutzerdefinierte Daten“) → **Metaobjekte** → **Inhaltsstoff**.
2. Unter **Optionen** bzw. Funktionen **„Webseiten“** aktivieren.
3. Speichern. Shopify vergibt nun jedem Eintrag eine eigene Adresse, z. B. `/pages/ingredient/magnesium`.

Für die Darstellung bringt das Theme die Vorlage **Metaobjekt „Inhaltsstoff“** mit (Abschnitte „Inhaltsstoff“ mit dem Block **„Inhaltsstoff: Steckbrief“** und „Produkte mit Inhaltsstoff“ mit dem Block **„Inhaltsstoff: Produkte“**). Sie müssen nichts zuweisen.

## Schritt 2: Einträge auf „Aktiv“ stellen

> **Wichtig:** Mit aktivierten Webseiten hat jeder Eintrag einen Status. Beim Aktivieren der Webseiten setzt Shopify alle vorhandenen Einträge auf **„Entwurf“** – dann sind sie im Shop **unsichtbar**: Die Lexikon-Seite fehlt, die A–Z-Liste bleibt leer, und auch auf Produktseiten verschwinden die Einträge (z. B. aus „Inhaltsstoffe: Im Fokus“). Das gilt auch für neu angelegte Einträge im Entwurf.

1. Admin → **Inhalt → Metaobjekte → Inhaltsstoff**.
2. Jeden Eintrag öffnen und den Status auf **„Aktiv“** setzen, speichern. In der Liste können Sie mehrere Einträge markieren und gemeinsam umstellen.

Prüfen Sie danach einen Eintrag im Shop über seine Adresse.

## Schritt 3: Übersichtsseite A–Z anlegen

1. Admin → **Onlineshop → Seiten → Seite hinzufügen**.
2. Titel z. B. „Inhaltsstoffe“, optional ein einleitender Text.
3. Rechts unter **„Theme-Vorlage“** die Vorlage **`ingredients`** wählen, speichern.
4. Seite in ein Menü aufnehmen (Onlineshop → Navigation).

Die Vorlage enthält den Seiteninhalt und den Abschnitt „Inhaltsstoffe A–Z“ mit dem Block **„Inhaltsstoffe: Lexikon“**: alle Einträge nach Anfangsbuchstaben gruppiert, mit Sprungleiste und Form neben dem Namen. Ohne aktivierte Webseiten zeigt der Block nur die Namen ohne Links.

## Die Blöcke im Detail

| Block | Einstellungen | Hinweis |
|---|---|---|
| „Inhaltsstoffe: Lexikon“ | „Überschrift“ | Listet alle aktiven Einträge. |
| „Inhaltsstoff: Steckbrief“ | „Handle des Inhaltsstoffs“, „Bild anzeigen“ | Auf Lexikon-Seiten automatisch der aktuelle Eintrag; außerhalb den Handle des Eintrags eintragen (Inhalt → Metaobjekte → Inhaltsstoff → Eintrag → „Handle“, z. B. `magnesium`). |
| „Inhaltsstoff: Produkte“ | „Überschrift“ (`[name]` wird durch den Namen ersetzt), „Handle des Inhaltsstoffs“, „Produkte aus Kollektion“, „Anzahl Produkte“ | Findet Produkte über `custom.key_ingredients` und die Datentafel-Zeilen (Feld `ingredient`). |

> **Warum ein Handle statt einer Auswahlliste?** Der Shopify Theme Store erlaubt Auswahlfelder für Metaobjekte nur bei Shopifys Standard-Definitionen. „Inhaltsstoff“ ist eine eigene Definition, deshalb tragen Sie den Handle als Text ein.

**Grenze von „Inhaltsstoff: Produkte“:** Der Block durchsucht höchstens 250 Produkte der gewählten Kollektion (leer: alle Produkte). Bei größeren Sortimenten wählen Sie unter **„Produkte aus Kollektion“** eine passende Kollektion, z. B. „Mineralstoffe“.

## Inhaltsstoffe mit Produkten verknüpfen

Ein Produkt gilt als „enthält Inhaltsstoff X“, wenn

- X im Metafeld `custom.key_ingredients` des Produkts ausgewählt ist, oder
- eine Zeile seiner Datentafel (`custom.data_table`) im Feld `ingredient` auf X verweist.

Haben Sie in den Blöcken andere Metafelder eingetragen, passen Sie im Block „Inhaltsstoff: Produkte“ unter **„Datenquelle“** die Felder **„Metafeld: Hauptinhaltsstoffe“** und **„Metafeld: Datentafel“** an.

## Fehlerbehebung

| Problem | Ursache und Lösung |
|---|---|
| A–Z-Liste leer, Editor zeigt „Noch keine Inhaltsstoffe angelegt“ | Keine Einträge, Typ-Handle nicht `ingredient` oder Storefront-Zugriff aus. |
| Einträge im Admin vorhanden, im Shop unsichtbar | Status „Entwurf“ – auf „Aktiv“ stellen. |
| Namen ohne Links | „Webseiten“ für das Metaobjekt nicht aktiviert oder Eintrag im Status „Entwurf“. |
| „Inhaltsstoff: Produkte“ findet keine Produkte | Produkt-Metafeld oder Datentafel-Zeilen verweisen nicht auf den Eintrag; Produkt liegt außerhalb der ersten 250 der Kollektion. |
