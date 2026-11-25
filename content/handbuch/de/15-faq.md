# Häufige Fragen

## Ein Block erscheint nicht

Gehen Sie diese Punkte der Reihe nach durch:

1. **Produkt-Block außerhalb der Produktseite?** Blöcke der Kategorien „Produkt: Kauf“, „Produkt: Inhalte“ und „Produkt: Angaben“ zeigen Daten des aktuellen Produkts. Auf Startseite oder normalen Seiten zeigt der Editor „Zeigt Daten des Produkts – wirkt nur auf Produktseiten.“
2. **Metafeld leer?** Datengetriebene Blöcke (Datentafel, Siegel & Zertifikate, Inhaltsstoffe: Im Fokus, Anwendung, Metafeld-Inhalt, Vorteilsliste, Info-Popup) blenden sich aus, wenn weder das Metafeld noch die Eingabe im Block befüllt ist. Prüfen Sie beim Produkt den Wert und im Block unter **„Datenquelle“** den Schlüssel (`namespace.schlüssel`, z. B. `custom.data_table`).
3. **Falscher Metafeld-Typ?** Dann zeigt der Editor „Metafeld … hat einen anderen Typ als erwartet“. Die Datentafel braucht eine **Liste von Metaobjekt-Einträgen**, Siegel eine **Liste von Texten**. Siehe [Produktdaten](09-product-data.md).
4. **Bedingung nicht erfüllt?**

| Block | erscheint nur, wenn … |
|---|---|
| „Kaufoptionen“ | das Produkt Abo-Pläne hat |
| „Abholung im Geschäft“ | Abholung unter Einstellungen → Versand und Zustellung aktiv ist |
| „Erneut bestellen“ | ein Kunde angemeldet ist und mindestens eine Bestellung hat |
| „Zuletzt angesehen“ | der Besucher schon Produkte angesehen hat |
| „Countdown“ | das Ende in der Zukunft liegt oder ein „Text nach Ablauf“ eingetragen ist |
| „Fixierte Kaufleiste“ | der Block „Kauf-Buttons“ auf der Seite steht und beim Scrollen verschwindet; auf großen Bildschirmen nur mit „Auch auf großen Bildschirmen“ |
| „Set-Inhalt (Bundle)“ | die Variante Bundle-Metafelder hat |
| „Bewertungssterne“ | eine Bewertungs-App `reviews.rating` befüllt und es mindestens eine Bewertung gibt |
| „Häufig zusammen gekauft“ | die gewählte Variante verfügbar ist und die Quelle mindestens eine Ergänzung liefert |
| „Info-Popup“ | die gewählte Quelle (Text, Seite, Metafeld) Inhalt hat |
| „Brecher-Kachel“ | Überschrift, Text oder Bild gesetzt sind; in der Kollektion nur auf der ersten Seite |
| „Lieferdatum“ | die Variante verfügbar ist (nicht bei ausverkauft oder Vorbestellung) |

5. **Leerer Abschnitt?** Abschnitte ohne sichtbaren Inhalt klappen im Shop ein, bleiben aber im Editor sichtbar.

## Eine Einstellung aus dem Handbuch fehlt im Editor

Viele Einstellungen erscheinen erst, wenn sie etwas bewirken – etwa „Vorschaubilder“ nur bei der Galerie-Anordnung „Slider“ oder die Farben beim Kleben nur, wenn die Kopfzeile klebt. Prüfen Sie die Einstellung darüber. Eine Übersicht steht in [Abschnitte und Blöcke](03-sections-and-blocks.md#einstellungen-erscheinen-wenn-sie-relevant-sind).

## Bilder fehlen

- **Produkt ohne Bild**: Bilder unter Produkt → Medien hinzufügen.
- **Startseite nach der Installation**: Bilder in Aufmacher und Bild-Blöcken stammen aus dem Demo-Shop oder sind leer. Wählen Sie in jedem Block **„Bild“** Ihr eigenes Bild.
- **Inhaltsstoffe ohne Bild**: Feld `image` im Metaobjekt-Eintrag befüllen bzw. im Block „Inhaltsstoff“ ein Bild wählen.
- **Zweites Bild beim Überfahren fehlt**: Die Einstellung wirkt nur auf Geräten mit Maus und nur bei Produkten mit mindestens zwei Bildern.
- **Logo-Leiste leer**: Die Vorlagen enthalten bewusst keine Logos. Fügen Sie Blöcke „Logo“ mit eigenen Bildern hinzu.

## Das Abo ist nicht sichtbar

1. Ist eine Abo-App installiert und ein Plan angelegt?
2. Ist der Plan **diesem Produkt** zugeordnet?
3. Steht der Block **„Kaufoptionen“** in der Produktvorlage, die das Produkt nutzt?
4. Das Badge „Abo −…%“ auf Karten erscheint nur bei prozentualen Rabatten.
5. Die Lieferzeitleiste braucht ein erkennbares Intervall im Plan („30 Tage“, „Alle 2 Wochen“).

Mehr in [Abo](10-subscriptions.md).

## „Preis pro Tag“ oder „Reicht … Tage“ fehlt

- Metafeld für Portionen pro Packung (Standard `custom.servings_per_container`) befüllen.
- In **Theme-Einstellungen → „Produktdaten“** darf der Schlüssel nicht leer sein.
- Im Block „Kennzahlen“ **„Preis pro Tag bzw. Portion anzeigen“** und **„Reichweite anzeigen“** prüfen.
- Auf Produktkarten erscheint der Preis pro Tag nur, wenn alle Varianten denselben Preis haben.

## Die Live-Suche erscheint nur als Link „Suche“

Mit der Darstellung „Live-Suche in der Kopfzeile“ steht das Suchfeld erst ab 1200 px Fensterbreite fest in der Kopfzeile. Auf kleineren Bildschirmen – und wenn das Feld das Menü in eine zweite Zeile drängen würde – klappt es per Klick auf „Suche“ aus. Weniger Menüpunkte oder eine kleinere „Schriftgröße“ im Block „Menü“ schaffen Platz. Siehe [Kopfzeile und Navigation](04-header.md#suche).

## Über den Blogbeiträgen fehlt die Überschrift

Ist im Block „Blogbeiträge“ das Feld **„Überschrift“** leer, erscheint keine Überschrift (damit sie nicht doppelt neben einem eigenen Block „Überschrift“ steht). Tragen Sie eine Überschrift ein oder schalten Sie **„Blog-Titel als Überschrift“** ein.

## Das Menü ist nach der Installation leer

Wählen Sie im Theme-Editor → „Kopfzeile“ → Block **„Menü“** Ihr Menü. Beim Stil Refill verweist die Vorlage auf Menüs des Demo-Shops; in der Fußzeile gilt dasselbe für die Blöcke „Menü“.

## Die Zubereitung zeigt bei allen Produkten denselben Text (Mortar)

Der Block „Anwendung“ zeigt die Beispielschritte aus dem Block, solange das Metafeld (`custom.preparation`) beim Produkt leer ist. Befüllen Sie das Metafeld je Produkt oder leeren bzw. ändern Sie die Schritte im Block.

## Die Pflichtangaben zeigen „Nahrungsergänzungsmittel“ bei einem normalen Lebensmittel

Ändern Sie im Block „Pflichtangaben“ die **„Produktart“** oder versehen Sie einzelne Produkte mit dem **„Ausschluss-Tag für Standardangaben“** (Standard `kein-nem`). Siehe [Pflichtangaben](11-compliance.md).

## Das Inhaltsstoff-Lexikon ist leer

Einträge auf „Aktiv“ stellen, „Webseiten“ für das Metaobjekt aktivieren, Typ-Handle `ingredient` und Storefront-Zugriff prüfen. Siehe [Inhaltsstoff-Lexikon](12-ingredient-glossary.md).

## Land- oder Sprachauswahl fehlt

Sie erscheint erst, wenn unter **Einstellungen → Märkte** mehr als ein Land bzw. unter **Einstellungen → Sprachen** mehr als eine Sprache aktiv ist. In der Fußzeile muss sie in der „Unteren Leiste“ eingeschaltet sein, in der Kopfzeile im Block „Suche, Konto, Warenkorb“ (**„Land/Region anzeigen“**, **„Sprache anzeigen“**). Fehlt ein bestimmtes Land, prüfen Sie **„Länder in der Auswahl“** und **„Ländercodes“**, siehe [Kopfzeile und Navigation](04-header.md#land-und-sprache).

## Das Konto oder „Abos verwalten“ fehlt

Kundenkonten unter **Einstellungen → Kundenkonten** aktivieren und im Block „Suche, Konto, Warenkorb“ **„Konto anzeigen“** einschalten. Den Link „Abos verwalten“ fügen Sie im Menü **„Customer account main menu“** (Onlineshop → Navigation) hinzu – das Konto-Fenster ist Shopifys Konto-Komponente und zeigt dieses Menü.

## Der Fortschrittsbalken fehlt

„Schwelle für kostenlosen Versand“ und die Schwellen der Stufen stehen auf 0, oder die Kundschaft zahlt in einer anderen Währung und der Browser kann den Umrechnungskurs nicht ermitteln. Siehe [Warenkorb und Kasse](07-cart-and-checkout.md#fortschrittsbalken-mit-stufen).

## Bewertungssterne erscheinen nicht

Die Sterne lesen die Standard-Metafelder `reviews.rating` und `reviews.rating_count`. Prüfen Sie in der Hilfe Ihrer Bewertungs-App, ob sie diese Felder befüllt (bei manchen Apps muss man das in den App-Einstellungen einschalten). Produkte ohne Bewertungen zeigen keine Sterne. Auf Karten: Theme-Einstellungen → „Produktdaten“ → „Bewertungssterne“.

## Animationen sind nicht zu sehen

Prüfen Sie **Theme-Einstellungen → „Animation“ → „Animationen aktivieren“** und den einzelnen Effekt. Ist auf Ihrem Gerät „Bewegung reduzieren“ eingestellt (Betriebssystem oder Bedienhilfen-Panel), bleibt alles ruhig. Inhalte im ersten sichtbaren Bereich werden bewusst nie animiert. Siehe [Animation](08-animation.md).

## Gibt es eine Merkliste?

Nein, Refill bringt keine eigene Merkliste mit (Theme-Store-Regeln). Nutzen Sie eine Wunschlisten-App, siehe [Merkliste](05-collections.md#merkliste).

## Filter fehlen auf der Kollektionsseite

Filter richten Sie in der App **Search & Discovery** ein (z. B. Verfügbarkeit, Preis, Produkttyp, Marke). Im Block „Kollektion: Produktliste“ muss **„Filter anzeigen“** aktiv sein.

## Das Popup erscheint nicht (mehr)

Das Popup erscheint nach der eingestellten **„Verzögerung“**, nie auf Warenkorb- und Passwortseite und nach dem Schließen erst wieder nach **„Höchstens alle … Tage“**. Nach einer Newsletter-Anmeldung erscheint es in diesem Browser nie mehr. Zum Testen ein privates Browserfenster verwenden. Versprechen Sie im Popup einen Rabatt, legen Sie den Rabattcode unter **Rabatte** selbst an. Ausschalten: Abschnitt „Popup“ in der Fußzeilen-Gruppe ausblenden.

## Das Lieferdatum stimmt nicht

Prüfen Sie im Block „Lieferdatum“ **„Bestellschluss für Versand am selben Tag (Uhr)“**, **„Bearbeitungszeit (Werktage)“**, die Laufzeiten und **„Tage ohne Versand und Zustellung“**. Feiertage tragen Sie jedes Jahr neu ein (`JJJJ-MM-TT`, ein Datum pro Zeile). Hat ein Produkt eine eigene Lieferzeit im Metafeld `custom.delivery_days`, ersetzt sie die Laufzeit aus dem Block. Gerechnet wird in der Zeitzone des Shops. Dasselbe Datum erscheint als „Bei dir“ in der Lieferzeitleiste des Abos.

## Benachrichtigungen bei Verfügbarkeit – wo kommen sie an?

Bei ausverkauften Varianten können Kunden ihre E-Mail-Adresse hinterlassen (Block „Kauf-Buttons“ → **„Benachrichtigung bei Verfügbarkeit anbieten“**). Sie erhalten eine Nachricht über das Kontaktformular des Shops mit Produkt, Variante, SKU und der Adresse des Kunden. Den Kunden benachrichtigen Sie selbst, sobald die Ware wieder da ist.

## Support

Antworten auf weitere Fragen erhalten Sie unter [support e-mail]. Bitte nennen Sie Shop-Adresse (`…myshopify.com`), Theme-Version und die betroffene Seite, am besten mit Screenshot.
