# Abo

Refill arbeitet mit jeder Abo-App, die Shopify **Selling Plans** nutzt, zum Beispiel mit der App „Shopify Subscriptions“. Das Theme zeigt die Abo-Pläne an, berechnet Ersparnis, Preis pro Tag und Liefertermine. Abschluss, Abrechnung und Verwaltung der Abos übernimmt die App.

## 1. Abo-Plan anlegen

1. Installieren Sie eine Abo-App, z. B. „Shopify Subscriptions“.
2. Legen Sie in der App einen Plan an, z. B. „Spar-Abo“ mit Lieferung alle 30, 60 und 90 Tage und einem Rabatt.
3. Ordnen Sie den Plan den gewünschten Produkten zu.
4. Hinterlegen Sie unter **Einstellungen → Richtlinien** eine Kündigungsrichtlinie für Abos.

**Benennung der Lieferintervalle:** Die Lieferzeitleiste liest das Intervall aus der ersten Option bzw. dem Namen des Plans. Erkannt werden eine Zahl plus Tag, Woche oder Monat, z. B. „30 Tage“, „Alle 2 Wochen“, „1 Monat“, „Every 2 weeks“. Monate zählen 30 Tage. Ohne erkennbares Intervall entfällt die Zeitleiste; das Abo funktioniert trotzdem.

### Plannamen in der Sprache des Shops

Die Namen der Pläne kommen aus der Abo-App. „Shopify Subscriptions“ legt sie in der Sprache des Admins an, z. B. „Deliver every 3 weeks, 15% off“, und übersetzt sie selbst in die Sprachen Ihres Shops – aber nur, wenn die Sprache beim Speichern des Plans schon im Shop aktiv war. Stehen auf Ihrer deutschen Seite englische Plannamen, haben Sie zwei Wege:

**A. Im Theme benennen (Storefront):** **Theme-Einstellungen → „Produktdaten“ → „Abo-Pläne mit eigenem Text benennen“** (standardmäßig aus). Das Theme setzt den Namen dann aus Intervall und Rabatt des Plans in der Sprache der Seite zusammen, z. B. „Alle 3 Wochen · 15 % Rabatt“, auf Englisch „Every 3 weeks · 15% off“. Das gilt für Kaufoptionen, Schnellansicht, Produktkarten, fixierte Kaufleiste, „Häufig zusammen gekauft“, Rechner und Warenkorb.
- Erkennt das Theme das Intervall nicht sicher (z. B. „Monatsabo“ ohne Zahl, „alle dreizehn Tage“) oder liefert der Plan nicht wiederkehrend (Vorbestellung, Testkauf), bleibt der Name aus der App.
- Rabatt: Prozent oder fester Betrag. Bei einem Festpreis oder zwei Preisstufen („erste Lieferung −20 %, danach −10 %“) zeigt der Name nur das Intervall; den Preis zeigt die Zeile ohnehin.
- Zusätze im Plannamen wie „jederzeit kündbar“ entfallen dabei. Deshalb ist die Einstellung standardmäßig aus.
- **Checkout, Bestellbestätigung, Kundenkonto und E-Mails zeigen immer den Namen aus der App.** Diese Seiten rendert Shopify, nicht das Theme.

**B. In der App übersetzen (überall, auch Checkout und Bestellbestätigung):**
1. Prüfen Sie unter **Einstellungen → Sprachen**, dass alle Sprachen Ihres Shops aktiv bzw. veröffentlicht sind.
2. Öffnen Sie **Apps → Subscriptions → Pläne** und den Plan (die Abo-Gruppe, z. B. „Spar-Abo“).
3. Klicken Sie ohne Änderung auf **Speichern**. Shopify Subscriptions erzeugt dann die Übersetzungen der Plannamen für alle unterstützten Sprachen (u. a. Deutsch, Englisch, Französisch, Italienisch, Spanisch, Niederländisch, Dänisch, Schwedisch, Finnisch, Polnisch, Tschechisch, Portugiesisch). Das kann einige Minuten dauern; prüfen Sie es im Shop mit der Sprachauswahl. Nötig ist das für Pläne, die vor dem 20. März 2024 angelegt, aus einem anderen Shop importiert oder vor dem Hinzufügen einer Sprache gespeichert wurden.
4. Eigene Formulierungen (wenn der Export den Inhalt „Selling plans“ anbietet; in Shopifys Hilfe nicht ausdrücklich genannt): **Einstellungen → Sprachen → Exportieren**, Inhalt „Selling plans“ (Verkaufspläne) wählen, in der CSV-Datei die Spalte „Translated content“ ausfüllen und unter **Einstellungen → Sprachen → Importieren** wieder einlesen. Achtung: Erneutes Speichern des Plans in der App überschreibt importierte Übersetzungen der Plannamen.
5. Die App „Translate & Adapt“ führt Abo-Pläne laut Händlerberichten nicht als übersetzbaren Inhalt; technisch sind Plan- und Gruppennamen übersetzbare Ressourcen (Typen `SELLING_PLAN` mit `name`, `option1`–`option3`, `description` und `SELLING_PLAN_GROUP` mit `name`, `option1`–`option3`), andere Übersetzungs-Apps können sie also über die Shopify-Schnittstelle bearbeiten.

Quellen: Shopify-Hilfe „Translations for subscription plans“ (help.shopify.com/en/manual/products/purchase-options/shopify-subscriptions/translate-subscription-plans), Shopify-Hilfe „Übersetzungen exportieren und importieren“ (help.shopify.com/de/manual/markets/languages/translate), Admin-API `TranslatableResourceType` (shopify.dev/docs/api/admin-graphql/latest/enums/TranslatableResourceType). Stand 27.11.2026.

Mit Weg B sind die Namen schon richtig; die Theme-Einstellung brauchen Sie dann nicht.

## 2. Kaufoptionen auf der Produktseite

Der Block **„Kaufoptionen“** ist in allen Produktvorlagen enthalten. Er erscheint nur bei Produkten mit Abo-Plänen.

- Abo-Zeilen stehen zuerst, mit Ersparnis in Prozent und als Betrag („Du sparst 1,99 € pro Lieferung“), der Einmalkauf zuletzt.
- Ein Wechsel aktualisiert Preis, Kennzahlen (Preis pro Tag mit Abo-Preis) und Zeitleiste ohne Neuladen der Seite.
Einstellungen im Block: **„Lieferzeitleiste anzeigen“** und **„Intervall passend zur Reichweite empfehlen“**.

### Intervall passend zur Reichweite

Mit **„Intervall passend zur Reichweite empfehlen“** (standardmäßig an) vergleicht der Block die Reichweite der gewählten Packung mit den Lieferintervallen der Pläne:

- Empfohlen wird der Plan mit dem längsten Intervall, das die Packung noch abdeckt (mit etwa 10 % Spielraum). Er trägt den Hinweis „Passt zur Packung · reicht 30 Tage“.
- Ist bei „Abo vorauswählen“ noch kein Plan gewählt, wird dieser Plan vorausgewählt statt des ersten.
- Ist das gewählte Intervall länger, als die Packung reicht, erscheint ein Hinweis („Diese Packung reicht etwa 30 Tage, geliefert wird alle 60 Tage. Ein kürzeres Intervall verhindert eine Lücke.“).

Dafür braucht das Produkt Portionen-Angaben (Portionen pro Packung, optional Portionen pro Tag), siehe [Produktdaten](09-product-data.md). Ohne diese Angaben verhält sich der Block wie ohne die Einstellung.

### Vorlage „Produkt (Abo)“

Die Vorlage `product.subscription` stellt die Kaufoptionen direkt unter den Preis, vor die Kennzahlen. Weisen Sie sie Produkten zu, die Sie vor allem im Abo verkaufen: Produkt öffnen → **„Theme-Vorlage“** → `subscription`.

## 3. Abo vorauswählen

**Theme-Einstellungen → „Produktdaten“ → „Abo vorauswählen“** (standardmäßig an):

- Produkte mit Abo-Plänen öffnen mit einem Abo-Plan statt mit dem Einmalkauf.
- Links im Theme (Produktkarten, Suche, Empfehlungen) führen direkt zum ersten Plan, damit Preis und Auswahl von Anfang an übereinstimmen.
- Wird die Produktseite ohne Plan aufgerufen (z. B. aus einer Suchmaschine), wählt das Theme den zur Reichweite passenden Plan, sonst den ersten.
- Kunden können jederzeit „Einmalkauf“ wählen; diese Wahl bleibt erhalten.

Wenn ein Produkt in der App als „nur im Abo erhältlich“ eingerichtet ist, ist der erste Plan immer gewählt.

## 4. Lieferzeitleiste

Bei gewähltem Abo zeigt die Zeitleiste „Nächste Lieferungen“ als Punkte auf einer Linie:

| Punkt | Beispiel | Woher |
|---|---|---|
| Heute | „Heute – Bestellt“ | – |
| Erste Lieferung | „bis 25.11. – Bei dir“ | dasselbe Datum wie im Block „Lieferdatum“ (Bestellschluss, Bearbeitungszeit, Laufzeit, Lieferzeit des Produkts), siehe [Produktseite](06-product-page.md#lieferdatum) |
| Folgelieferungen | „26.12. – 2. Lieferung“, „25.1. – 3. Lieferung“ | Bestelltag plus Intervall des gewählten Plans – wie die Abo-App die Folgebestellungen auslöst und genauso wie im Warenkorb |

Darunter steht „Danach alle 30 Tage. Ändern oder kündigen im Kundenkonto.“ Steht kein Block „Lieferdatum“ auf der Seite, zählt die Zeitleiste die Lieferungen ab heute. Die Termine sind eine Vorschau aus dem Intervall des Plans; maßgeblich sind die Termine der Abo-App. Ohne JavaScript zeigt die Zeitleiste die Termine ab heute.

## 5. Abo auf Produktkarten

Produktkarten von Abo-Produkten zeigen das Badge „Abo −10 %“ mit der höchsten prozentualen Ersparnis der Pläne.

Ist **„Schnellkauf auf Produktkarten“** aktiv, gilt:

- Produkte **ohne** Varianten landen direkt im Warenkorb – bei aktivem „Abo vorauswählen“ mit dem ersten Abo-Plan, sonst als Einmalkauf.
- Produkte **mit** Varianten: Mit **„Varianten auf der Karte wählen“** wählen Kunden Geschmack oder Packungsgröße direkt auf der Karte, der Knopf legt die Variante mit dem ersten Abo-Plan in den Warenkorb (bei aktivem „Abo vorauswählen“). Produkte mit weiteren Optionen oder nur im Abo öffnen die Schnellansicht, in der Kunden Variante und Kaufoption wählen. Siehe [Kollektionen und Produktkarten](05-collections.md#varianten-auf-der-karte).

## 6. Abo im Warenkorb

- Abo-Positionen zeigen den Namen des Plans und darunter eine kurze Lieferzeitleiste mit den nächsten Terminen und ihrer Bedeutung, z. B. „Heute – Bestellt · 26.12. – 2. Lieferung · 25.1. – 3. Lieferung“. Die Termine rechnen wie auf der Produktseite ab dem Bestelltag (ohne erkennbares Intervall entfällt die Leiste).
- Der Preis ohne Abo steht durchgestrichen neben dem Abo-Preis, damit die Ersparnis sichtbar bleibt.
- **Abo ändern:** Unter dem Plannamen einer Abo-Position öffnet „Abo ändern“ dieselbe Liste wie beim Wechsel zum Abo, mit allen Plänen der Variante und „Einmalkauf“ (nicht bei Produkten, die es nur im Abo gibt); der aktuelle Plan ist gewählt, „Übernehmen“ stellt um. Ohne JavaScript führt „Abo ändern“ zur Produktseite.
- Positionen **ohne** Abo, deren Produkt einen Plan hat, bieten einen Wechsel an: kurz mit Symbol „Im Abo 10 % sparen“ bzw. „Als Abo bestellen“. Hat die Variante einen Plan, stellt ein Klick die Position darauf um (den Plannamen hören nur Screenreader). Bei mehreren Plänen öffnet der Hinweis eine Liste der Pläne mit Planname und Ersparnis (der erste ist gewählt, lange Namen brechen um und bleiben am Handy ganz lesbar), „Übernehmen“ stellt um; unterscheiden sich die Ersparnisse, heißt der Hinweis „Im Abo bis zu 15 % sparen“. Ohne JavaScript führt er zur Produktseite.
- Dynamische Checkout-Buttons (PayPal, Apple Pay, Shop Pay) sind auf Produktseiten mit Abo ausgeblendet, weil sie Abos nicht abbilden.

## 7. Kundenportal verlinken

Das Konto in der Kopfzeile ist Shopifys **Konto-Komponente**: Ein Klick öffnet ein Fenster mit Anmeldung (auch „Mit Shop anmelden“) und den Links des Menüs **„Customer account main menu“**. Den Link zum Abo-Portal fügen Sie dort hinzu:

1. Kopieren Sie in der Abo-App die Adresse des Kundenportals (bei Shopify Subscriptions erscheint „Abonnements“ im Kundenkonto automatisch).
2. **Onlineshop → Navigation** → Menü **„Customer account main menu“** öffnen.
3. Menüpunkt hinzufügen, z. B. „Abos verwalten“, und die Adresse eintragen.

Voraussetzung: Kundenkonten sind unter **Einstellungen → Kundenkonten** aktiviert, und im Block **„Suche, Konto, Warenkorb“** ist **„Konto anzeigen“** eingeschaltet.

## 8. Nachkaufen ohne Abo

Für Kunden ohne Abo gibt es den Block **„Erneut bestellen“** (auf der Startseite enthalten): Angemeldete Kunden sehen ihre letzte Bestellung und legen alle verfügbaren Positionen mit einem Klick erneut in den Warenkorb. Abo-Positionen werden dabei als Einmalkauf übernommen. Für Gäste blendet sich der Abschnitt aus.

## 9. Reichweiten- und Ersparnisrechner

Zwei Blöcke für die Produktseite helfen beim Entscheiden fürs Abo. Beide rechnen nur mit Ihren Produktdaten und Preisen – ohne Aussagen zur Wirkung. Sie brauchen **Portionen pro Packung** (optional **Portionen pro Tag**), siehe [Produktdaten](09-product-data.md). Fehlen diese Angaben bei einem Produkt oder einer Variante, blenden sich die Blöcke aus; im Editor steht dann ein Hinweis.

### Reichweitenrechner „Wie lange reicht das?“

Kunden tragen ihren Verbrauch ein (Zahl und „pro Tag“ oder „pro Woche“) und sehen sofort:

- **Reicht etwa:** wie lange eine Packung der gewählten Variante reicht (Portionen pro Packung ÷ Verbrauch).
- **Passendes Abo-Intervall:** der Abo-Plan mit dem längsten Lieferintervall, das der Vorrat noch abdeckt (wie die Empfehlung in den Kaufoptionen, mit etwa 10 % Spielraum). Ist jedes Intervall länger als der Vorrat, erscheint das kürzeste mit einem Hinweis.
- **„Dieses Intervall wählen“** wählt den Plan im Block „Kaufoptionen“; Preis, Kennzahlen und Lieferzeitleiste ändern sich wie bei einer Auswahl von Hand.

Der Startwert ist „Portionen pro Tag“ aus den Produktdaten. Das Eingabefeld heißt passend zur Theme-Einstellung **„Bezeichnung der Portion“**, z. B. „Anzahl Tagesdosen“, „Anzahl Tassen“ oder „Anzahl Anwendungen“.

Einstellungen: **Überschrift** (leer: „Wie lange reicht das?“), **Text**, **Verbrauch eingeben pro** Tag oder Woche (Voreinstellung, Kunden können wechseln), **Bezeichnung des Eingabefelds** (leer: automatisch), **Passendes Abo-Intervall empfehlen**. Ohne Abo-Pläne zeigt der Block nur die Reichweite.

Auch im Block **„Hervorgehobenes Produkt“** verfügbar: **„Reichweitenrechner anzeigen“** (Standard aus).

### Ersparnisrechner

Vergleicht Abo und Einzelkauf, hochgerechnet auf ein Jahr:

- **Packungen** im Jahr: 365 Tage ÷ Reichweite, gerundet.
- **Einzelkauf:** Packungen × Preis der gewählten Variante.
- **Im Abo:** dieselben Packungen zum Preis des passenden Plans. Staffelt die Abo-App den Rabatt (z. B. „erste 3 Lieferungen −20 %, danach −10 %“), rechnet der Block jede Stufe mit.
- **Ersparnis:** die Differenz. Ohne Preisvorteil entfallen die drei Beträge.
- **Weniger Verpackung** (optional): Gramm Verpackung, die eine Packung gegenüber dem Neukauf spart, × Packungen. Quelle: ein Zahlen-Metafeld (Einstellung **„Metafeld: gesparte Verpackung je Packung (g)“**, z. B. `custom.packaging_saved`; Varianten-Metafeld vor Produkt-Metafeld, so gilt der Wert nur für den Nachfüllbeutel) oder ein fester Wert.

Einstellungen: **Überschrift** (leer: „Abo oder Einzelkauf?“), **Text**, **Verbrauch eingeben lassen**, **Verbrauch eingeben pro**, **Bezeichnung des Eingabefelds**, **Hinweis zur Schätzung anzeigen** („Schätzung … ohne Versandkosten“), dazu die Verpackungsangaben.

**Zusammenspiel:** Stehen beide Blöcke auf einer Seite, teilen sie den Verbrauch – eine Eingabe im Reichweitenrechner rechnet auch die Ersparnis neu. Schalten Sie dann im Ersparnisrechner **„Verbrauch eingeben lassen“** aus, damit es nur ein Eingabefeld gibt (so in den mitgelieferten Produktvorlagen).

**Ohne JavaScript** zeigen beide Blöcke das Ergebnis für den Startwert, ohne Eingabefeld.

| Branche | Reichweitenrechner | Ersparnisrechner |
|---|---|---|
| Nahrungsergänzung (Refill) | „Wie lange reicht eine Dose?“ – Tagesdosen pro Tag | Spar-Abo gegenüber Einzelkauf |
| Tee und Gewürze (Mortar) | „Wie lange reicht der Tee?“ – Tassen pro Tag | Lieblingstee im Abo |
| Naturkosmetik (Pumice) | „Wie lange reicht eine Nachfüllung?“ – Anwendungen pro Woche | Nachfüllen im Abo, dazu weniger Verpackung |

## Häufige Probleme

| Problem | Lösung |
|---|---|
| Reichweiten- oder Ersparnisrechner fehlt | „Portionen pro Packung“ für das Produkt bzw. die Variante befüllen. Der Ersparnisrechner braucht außerdem einen Abo-Plan mit Rabatt oder eine Verpackungsangabe. |
| Kein „Passendes Abo-Intervall“ | Intervall im Plan-Namen bzw. der ersten Option als Zahl plus Tag/Woche/Monat benennen (Abschnitt 1). |
| „Dieses Intervall wählen“ fehlt | Der Block „Kaufoptionen“ muss auf derselben Seite (bzw. im selben „Hervorgehobenen Produkt“) stehen. |
| Kaufoptionen erscheinen nicht | Plan in der Abo-App dem Produkt zuordnen; Block „Kaufoptionen“ in der Produktvorlage prüfen. |
| Keine Lieferzeitleiste | „Lieferzeitleiste anzeigen“ aktivieren; Intervall im Plan-Namen bzw. der ersten Option als Zahl plus Tag/Woche/Monat benennen. |
| Preis pro Tag fehlt im Abo | Portionen-Metafelder befüllen, siehe [Produktdaten](09-product-data.md). |
| Plannamen englisch auf der deutschen Seite | Plan in der Abo-App ohne Änderung speichern (erzeugt die Übersetzungen) oder „Abo-Pläne mit eigenem Text benennen“ einschalten, siehe [Plannamen in der Sprache des Shops](#plannamen-in-der-sprache-des-shops). Checkout und Bestellbestätigung ändert nur der erste Weg. |
| Link „Abos verwalten“ fehlt | Kundenkonten aktivieren, Link im Menü „Customer account main menu“ eintragen (Abschnitt 7), als Kunde anmelden. |
