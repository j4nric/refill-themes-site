# Barrierefreiheit

Refill ist auf die Anforderungen der WCAG 2.2, Stufe AA, ausgelegt. Das Theme schafft die technische Grundlage. Barrierefrei wird Ihr Shop erst zusammen mit barrierefreien Inhalten – Alt-Texte, verständliche Texte, Untertitel – und Apps, die selbst barrierefrei sind.

## Was das Theme leistet

| Bereich | Umsetzung |
|---|---|
| Tastatur | Alle Funktionen ohne Maus: Mega-Menü, mobiles Menü, Schnellsuche, Filter, Variantenwahl, Mengenfelder, Warenkorb, Schnellansicht, Vollbild-Galerie (Pfeiltasten, Escape), Land/Sprache, Info-Popup, „Häufig zusammen gekauft“, Karussell, Laufband. Sprunglink „Zum Inhalt“. |
| Fokus | Sichtbarer Fokusring an allen Bedienelementen; der Fokus bleibt bei Filter- und Variantenwechsel erhalten; Dialoge halten den Fokus und geben ihn beim Schließen zurück. Der Fokus liegt nie unter der klebenden Kopfzeile oder der fixierten Kaufleiste. Nach „+“, „−“ oder „Entfernen“ im Warenkorb und nach dem Entfernen eines Filters bleibt er an einer sinnvollen Stelle. Der Filter-Bereich am Handy verhält sich wie ein Dialog; im Galerie-Slider liegt nur das aktuelle Bild in der Tab-Reihenfolge. |
| Screenreader | Landmarken, saubere Überschriftenhierarchie, beschriftete Formularfelder, Ansagen bei Änderungen im Warenkorb („Warenkorb aktualisiert. Zwischensumme …“), in der Suche und im Länderfilter („2 Länder gefunden“), Tabellen mit Kopfzellen. Menü-Links nennen die Produktanzahl („Vitamine (7 Produkte)“). |
| Formulare | Ungültige Felder werden nach dem Absenden farbig umrandet; Fehlermeldungen sind mit dem Feld verbunden (Kontakt, Passwort, Newsletter). |
| Kontrast | Alle Farbschemata der drei Stile mit mindestens 4,5 : 1 für Text und 3 : 1 für Bedienelemente. Statusfarben (Erfolg, Hinweis, Fehler) passen sich je Farbschema an und erreichen auch auf dunklen Schemata mindestens 4,5 : 1. |
| Vergrößerung | Layout bis 320 px Breite ohne waagerechtes Scrollen, Text bis 200 % vergrößerbar, Formularfelder am Handy mindestens 16 px. |
| Bewegung | Die Systemeinstellung „Bewegung reduzieren“ (oder dieselbe Option im Bedienhilfen-Panel) schaltet alle Effekte aus [Animation](08-animation.md), Übergänge, Laufband und Seitenübergänge ab; die Scroll-Story steht dann als normale Abschnitte untereinander. Das Laufband hat einen Pause-Button; Karussells wechseln nie automatisch. |
| Zeit | Der Countdown ist rein informativ. Das Popup erscheint frühestens nach der eingestellten Verzögerung und schließt mit Escape oder Klick daneben. |
| Zielgröße | Bedienelemente mindestens 44 × 44 px. |
| Sprache | Seitensprache aus der Shop-Sprache; alle Bedientexte in 12 Sprachen (Deutsch, Englisch, Französisch, Italienisch, Spanisch, Niederländisch, Dänisch, Schwedisch, Finnisch, Polnisch, Tschechisch, Portugiesisch). |

Geprüft wird automatisch mit axe-core und Lighthouse auf Start-, Kollektions-, Produkt-, Warenkorb- und Suchseite sowie mit Tastatur-Tests nach jeder Änderung.

## Was Sie beitragen

1. **Alt-Texte**: Jedes Produktbild braucht eine kurze Beschreibung (Produkt → Medien → Bild → Alt-Text). Für Bilder in Blöcken gibt es die Einstellung **„Alternativtext“**; leer übernimmt das Theme den Alt-Text aus Shopify.
2. **Kontraste eigener Farben**: Achten Sie in **Theme-Einstellungen → „Farben“** auf die Hinweise bei „Sekundärtext“ und „Text auf Akzent“.
3. **Überschriften**: Pro Seite eine H1. Im Block **„Überschrift“** wählen Sie die **„Gliederungsebene (SEO)“**.
4. **Videos** mit Untertiteln, **PDFs** barrierefrei, **keine Texte in Bildern**.
5. **Apps** (Bewertungen, Chat, Cookie-Banner) beim Anbieter auf Barrierefreiheit prüfen.

Alt-Texte und Kontraste prüfen Sie vor dem Start anhand der Liste [Vor dem Start prüfen](11-compliance.md#5-vor-dem-start-prüfen).

## Bedienhilfen-Panel (optional)

Unter **Theme-Einstellungen → „Bedienhilfen“** schalten Sie mit **„Bedienhilfen-Panel anzeigen“** einen schwebenden Button ein (standardmäßig aus). Er öffnet ein Panel, in dem Besucher die Darstellung für sich anpassen:

- **Schriftgröße** in vier Stufen (100 bis 150 %),
- **Hoher Kontrast** (Schwarz auf Weiß, mindestens 7 : 1),
- **Zeilen- und Buchstabenabstand**, **Gut lesbare Schrift** (Systemschrift), **Links unterstreichen**,
- **Fokus deutlich hervorheben**, **Lesemaske** und **Bewegung reduzieren** (Animationen, Seitenübergänge, Laufband und automatisch startende Videos aus).

Die Auswahl bleibt im Browser des Besuchers gespeichert und gilt ab dem ersten Bild jeder Seite; es wird nichts übertragen, kein Fremdskript geladen und kein Inhalt verändert. „Bewegung reduzieren“ im Panel wirkt wie die Systemeinstellung: Es schaltet alle Effekte aus [Animation](08-animation.md) ab, ebenso die Bewegung in Karussell, Galerie, Vollbild und Kopfzeile. Mit **„Position des Buttons“** wählen Sie links oder rechts unten, unter **„Angebotene Funktionen“** blenden Sie einzelne Optionen aus. Unter **„Barrierefreiheitserklärung“** wählen Sie die Seite, die im Panel verlinkt wird; leer nimmt das Theme die Seite mit dem Handle `barrierefreiheit` oder `accessibility`.

> Das Panel ist eine Komfortfunktion. Es ersetzt keine barrierefreien Inhalte und ist kein Nachweis für das BFSG – das Theme ist auch ohne Panel auf WCAG 2.2 AA ausgelegt.

## Barrierefreiheitserklärung anlegen

Das Theme bringt die Seitenvorlage **`accessibility`** mit einer Erklärung mit Platzhaltern mit.

1. Admin → **Onlineshop → Seiten → Seite hinzufügen**.
2. Titel „Barrierefreiheit“. Der Handle der Seite (Suchmaschinen-Eintrag → URL) sollte `barrierefreiheit` oder `accessibility` lauten.
3. Rechts unter **„Theme-Vorlage“** **`accessibility`** wählen, speichern.
4. Theme-Editor → oben die Seite „Barrierefreiheit“ öffnen.
5. Alle Platzhalter in eckigen Klammern ersetzen: Datum, Stand der Prüfung, bekannte Einschränkungen, Kontaktweg, Antwortfrist.
6. Den grau markierten „Hinweis für Händler“ am Ende löschen.
7. Seite im Footer-Menü verlinken.

Die Vorlage enthält die Abschnitte „Wie barrierefrei ist dieser Shop?“, „Was wir dafür tun“, „Bekannte Einschränkungen“ und „Barriere gefunden?“. Sie nennt als Durchsetzungsstelle die Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF). Für Shops außerhalb Deutschlands tragen Sie die zuständige nationale Behörde ein.

Listen Sie unter „Bekannte Einschränkungen“ ehrlich auf, was noch nicht barrierefrei ist, etwa Inhalte von Drittanbieter-Apps oder Videos ohne Untertitel.

## BFSG in Kürze

- Seit dem **28.06.2025** gilt in Deutschland das **Barrierefreiheitsstärkungsgesetz (BFSG)**, die Umsetzung des European Accessibility Act. Andere EU-Länder haben eigene Umsetzungsgesetze.
- Es betrifft Online-Shops, die sich an Verbraucher richten.
- Maßstab ist die Norm **EN 301 549**, die für Webinhalte auf **WCAG 2.1, Stufe AA** verweist. Refill ist auf WCAG 2.2 AA ausgelegt und erfüllt damit auch 2.1.
- Ausgenommen sind Kleinstunternehmen, die Dienstleistungen anbieten (weniger als 10 Beschäftigte und höchstens 2 Mio. € Jahresumsatz oder Jahresbilanzsumme).
- Verlangt ist unter anderem eine Information, wie der Shop die Anforderungen erfüllt – dafür ist die Barrierefreiheitserklärung gedacht.
- Die Kasse (Checkout) und die Kundenkonten stellt Shopify bereit; sie sind nicht Teil des Themes.

> Dies ist eine Kurzinformation, keine Rechtsberatung. Ob und wie das BFSG für Ihr Unternehmen gilt, klären Sie mit Ihrer Rechtsberatung.
