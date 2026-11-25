# Pflichtangaben

Refill stellt Herstellerangaben, Lebensmittel- und Kosmetik-Pflichtangaben, Grundpreise und Rechtstexte dort dar, wo sie hingehören: im Produktangebot selbst, vor dem Kaufabschluss. Das Theme hilft beim Ausfüllen und zeigt im Editor, was fehlt.

> **Keine Rechtsberatung.** Dieses Kapitel beschreibt, wie das Theme Angaben darstellt. Welche Angaben für Ihre Produkte gelten und wie sie lauten müssen, klären Sie mit Ihrer Rechtsberatung, Ihrem Verband oder der zuständigen Behörde. Lassen Sie Ihre Produktseiten vor dem Start prüfen.

## 1. Hersteller (GPSR)

Nach der EU-Produktsicherheitsverordnung (GPSR) gehören Name, Anschrift und Kontakt des Herstellers auf die Produktseite. Ein Link auf eine andere Seite genügt in der Regel nicht.

**Für alle Produkte einmal eintragen:**

1. Theme-Editor → **Theme-Einstellungen → „Pflichtangaben“**.
2. **„Name des Herstellers“** – bei Eigenmarken Ihr Unternehmen.
3. **„Anschrift des Herstellers“**.
4. **„E-Mail oder Website des Herstellers“**.
5. **„Verantwortliche Person in der EU“** – nötig, wenn der Hersteller außerhalb der EU sitzt: Name, Anschrift, Kontakt.

Diese Angaben erscheinen im Block **„Produktsicherheit“** und in den **„Pflichtangaben“** als Lebensmittel-, Futtermittelunternehmer bzw. verantwortliche Person.

**Abweichender Hersteller für einzelne Produkte:** Legen Sie das Produkt-Metafeld `custom.manufacturer` (Mehrzeiliger Text) an und tragen Sie dort Name, Anschrift und Kontakt ein. Es ersetzt die Theme-Einstellungen für dieses Produkt.

**Sicherheitshinweise:** Produkt-Metafeld `custom.safety_information` (Mehrzeiliger Text). Der Block **„Produktsicherheit“** zeigt sie unter „Sicherheitshinweise“.

## 2. Block „Pflichtangaben“

Der Block bündelt die vor dem Kauf üblichen Angaben in einem aufklappbaren Bereich der Produktseite. **„Produktart“** bestimmt Bezeichnungen und die Prüfliste:

| Produktart | Angaben und Bezeichnungen |
|---|---|
| „Nahrungsergänzung“ | Bezeichnung, Zutaten, Nettofüllmenge, Verzehrempfehlung, Hinweise, Lebensmittelunternehmer. Standard-Bezeichnung und Standard-Hinweise für alle Produkte ohne eigenes Metafeld. |
| „Lebensmittel (z. B. Tee, Gewürze)“ | wie oben, „Zubereitung“ statt „Verzehrempfehlung“, ohne Standardtexte. |
| „Kosmetik“ | „Inhaltsstoffe (INCI)“, „Anwendung“, „Verantwortliche Person“, „Haltbarkeit nach dem Öffnen“. |
| „Futtermittel“ | „Tierart“, „Futtermittelart“, „Zusammensetzung“, „Zusatzstoffe“, „Fütterungsempfehlung“, „Futtermittelunternehmer“. |
| „Sonstiges“ | neutrale Bezeichnungen, „Anwendung“. |

### Metafelder

| Angabe | Einstellung im Block | Vorschlag | Typ |
|---|---|---|---|
| Bezeichnung | „Metafeld: Bezeichnung“ | `custom.legal_name` | Einzeiliger Text |
| Zutaten / INCI / Zusammensetzung | „Metafeld: Zutaten bzw. Inhaltsstoffe …“ | `custom.other_ingredients` | Mehrzeiliger Text oder Rich Text |
| Nettofüllmenge | „Metafeld: Nettofüllmenge“ | `custom.net_quantity` | Einzeiliger Text |
| Verzehr- / Anwendungsempfehlung | „Metafeld: Verzehr- bzw. Anwendungsempfehlung“ | `custom.usage` | Mehrzeiliger Text |
| Hinweise | „Metafeld: Hinweise“ | `custom.warnings` | Mehrzeiliger Text |
| Hersteller | „Metafeld: Hersteller (überschreibt Theme-Einstellungen)“ | `custom.manufacturer` | Mehrzeiliger Text |
| Haltbarkeit nach dem Öffnen (Kosmetik) | „Metafeld: Haltbarkeit nach dem Öffnen (z. B. 12 M)“ | `custom.pao` | Einzeiliger Text |
| Tierart (Futtermittel) | „Metafeld: Tierart“ | `custom.animal_species` | Einzeiliger Text |
| Futtermittelart | „Metafeld: Futtermittelart (z. B. Alleinfuttermittel)“ | `custom.feed_type` | Einzeiliger Text |
| Zusatzstoffe | „Metafeld: Zusatzstoffe“ | `custom.additives` | Mehrzeiliger Text |

Die Stile Mortar und Pumice lesen die Zutaten aus `custom.ingredients` bzw. `custom.inci`. Maßgeblich ist der Eintrag im Block.

### Allergene hervorheben

Markieren Sie Allergene in der Zutatenliste mit `*Sternchen*` (z. B. `*Soja*lecithin`) oder fett, wenn das Metafeld Rich Text ist. Das Theme zeigt sie fett und ergänzt „Allergene sind fett hervorgehoben.“ Bei der Produktart „Kosmetik“ bleiben Sternchen als Zeichen stehen, weil sie in INCI-Listen meist Bio-Anteile kennzeichnen.

### Nettofüllmenge automatisch

Ist `custom.net_quantity` leer, übernimmt das Theme die Füllmenge aus dem Grundpreis der Variante (siehe Abschnitt 3), z. B. „120 g“.

### Standardangaben für Nahrungsergänzung

Bei der Produktart „Nahrungsergänzung“:

- **„Standard-Bezeichnung (Nahrungsergänzung)“** – gilt für Produkte ohne `custom.legal_name`.
- **„Standard-Hinweise“** – gelten für Produkte ohne `custom.warnings`.
- **„Ausschluss-Tag für Standardangaben“** (Standard `kein-nem`) – Produkte mit diesem Tag, etwa ein Proteinriegel, erhalten keine Standard-Bezeichnung und keine Warnhinweise.
- Ein Metafeld-Wert `-` blendet eine einzelne Angabe für ein Produkt aus.

### Prüfliste im Editor

Im Theme-Editor zeigt der Block unter „Fehlt bei diesem Produkt (nur im Theme-Editor sichtbar):“ die üblichen Angaben, die beim angezeigten Produkt fehlen. Die Liste ist eine Ausfüllhilfe. Sie prüft nicht, ob Ihre Angaben inhaltlich vollständig oder richtig sind.

## 3. Grundpreis

Für Ware nach Gewicht oder Volumen ist in der EU in der Regel ein Grundpreis anzugeben (in Deutschland nach der Preisangabenverordnung).

1. Produkt öffnen → Variante wählen → **Grundpreis anzeigen** aktivieren.
2. **Gesamtmenge** (z. B. 120 g) und **Grundeinheit** (z. B. 100 g bzw. 1 kg) eintragen.

Refill zeigt den Grundpreis auf Produktkarten, auf der Produktseite, in der Mengenstaffel und in den strukturierten Daten.

## 4. Rechtstexte

Hinterlegen Sie unter **Einstellungen → Richtlinien**:

- Widerrufs- bzw. Rückgaberichtlinie
- Datenschutzerklärung
- Allgemeine Geschäftsbedingungen
- Versandrichtlinie
- Kündigungsrichtlinie für Abos (bei Abo-Produkten)
- Impressum bzw. Kontaktinformationen

Die **„Untere Leiste“** der Fußzeile verlinkt die Richtlinien automatisch, wenn **„Links zu Rechtstexten anzeigen“** aktiv ist. Weitere Seiten (z. B. Impressum, Barrierefreiheit) nehmen Sie in ein Footer-Menü auf.

Der Hinweis „inkl. MwSt.“ bzw. „zzgl. MwSt.“ mit „zzgl. Versand“ unter dem Preis kommt aus der Einstellung **„Hinweis zu Steuern und Versand anzeigen“** im Block „Preis“. Ist eine Versandrichtlinie hinterlegt, verlinkt der Versandhinweis auf sie.

## 5. Vor dem Start prüfen

Diese Punkte werden häufig übersehen. Gehen Sie sie vor dem Veröffentlichen für Startseite, eine Produktseite und den Warenkorb durch:

| Punkt | Wo beheben |
|---|---|
| Herstellerangaben (GPSR) fehlen | Theme-Einstellungen → „Pflichtangaben“ |
| Datenschutzerklärung, AGB, Widerrufs-/Rückgaberichtlinie, Versandrichtlinie fehlen | Einstellungen → Richtlinien |
| Produkt im Abo ohne Abo-Richtlinie | Einstellungen → Richtlinien |
| Kein Grundpreis | Produkt → Variante → Grundpreis |
| Keine Barrierefreiheitserklärung | Seite mit Vorlage `accessibility`, siehe [Barrierefreiheit](13-accessibility.md) |
| Produktbild(er) ohne Alt-Text, Produkt ohne Bild | Produkt → Medien |
| Bild(er) im Seiteninhalt ohne Alt-Text | Block „Bild“ → „Alternativtext“ |
| Kontrast eines Farbschemas unter 4,5 : 1 | Theme-Einstellungen → „Farben“ |
| Keine Meta-Beschreibung | Suchmaschinen-Eintrag der Seite bearbeiten |

## 6. Altersabfrage

Für Produkte mit Altersgrenze gibt es den Abschnitt **„Altersabfrage“** in der Fußzeilen-Gruppe. Er ist in der Vorlage ausgeblendet.

1. Theme-Editor → Abschnitt **„Altersabfrage“** mit dem Augen-Symbol einblenden.
2. **„Mindestalter“**, **„Überschrift“** (`[age]` wird durch das Mindestalter ersetzt), **„Text“**, **„Button: bestätigen“**, **„Button: ablehnen“** einstellen.
3. **„Ziel bei Ablehnung“**: Adresse, zu der „Ablehnen“ führt (leer: Google-Startseite).
4. **„Antwort merken (Tage)“**: So lange erscheint die Abfrage in diesem Browser nach einer Bestätigung nicht mehr.

Die Abfrage öffnet beim ersten Besuch und lässt sich nicht mit Escape schließen. Sie ist eine Abfrage, keine technische Sperre: Ohne JavaScript erscheint sie nicht. Prüfen Sie, ob für Ihre Produkte eine echte Altersprüfung nötig ist.

## 7. Texte ohne Wirkversprechen

Formulieren Sie Produkttexte sachlich: Mengen, Inhaltsstoffe, Herkunft, Prüfungen. Gesundheitsbezogene Angaben bei Lebensmitteln und Nahrungsergänzung sind in der EU nur eingeschränkt zulässig (Health-Claims-Verordnung). Die Beispieltexte des Themes enthalten bewusst keine Wirkversprechen. Blöcke wie „Zeitleiste“, „Produktfinder“ und „Vergleichstabelle“ enthalten nur Platzhalter – ihr Inhalt liegt in Ihrer Verantwortung.
