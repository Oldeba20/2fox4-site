# 2FOX4 — Corporate Identity / CI-Richtlinien

> Lebendes Dokument. Hier landen alle verbindlichen Vorgaben für das Erscheinungsbild
> von 2FOX4 — Logo, Farben, Typografie, Anwendung. Bei jeder neuen Festlegung wird
> dieses Dokument erweitert, damit Website, Berichte, Print und Social konsistent bleiben.

Stand: 18.06.2026

---

## 1. Logo

Die Wortmarke ist **2FOX4** — in **Großbuchstaben** geschrieben.

- **2FOX** in Weiß (auf dunklem Grund) bzw. Dunkel (auf hellem Grund)
- Die **4** immer in Orange (`#ff6b35`)

**Verbindliche Regeln:**

- Niemals klein schreiben (kein „2fox4" als Logo/Wortmarke). Ausnahme: die Domain
  `2fox4.de` und E-Mail-Adressen werden klein geschrieben — das ist eine URL, kein Logo.
- Nur Weiß + Orange. **Kein Gelb im Logo** — Gelb ist allenfalls ein Zusatz-Akzent
  in Grafiken, niemals Teil der Wortmarke.
- Die 4 wird nicht eingefärbt, abgeschwächt oder durch eine andere Farbe ersetzt.
- Genug Schutzraum lassen; das Logo nicht verzerren oder neu kerning.

**Offizielle Dateien (in diesem Ordner unter `logo/`):**

| Datei | Verwendung |
|-------|-----------|
| `2fox4-logo-weiss.svg` / `.png` | auf dunklem Grund (Website-Header, dunkle Briefköpfe, Report-Header) |
| `2fox4-logo-dunkel.svg` / `.png` | auf hellem Grund (helle Dokumente, Rechnungen, Print) |

SVG ist die Master-Quelle (skaliert verlustfrei). PNG nur dort verwenden, wo SVG nicht
unterstützt wird (z. B. eingebettet in PDF-Reports via ReportLab).

**Wo das Logo aktuell im Einsatz ist:**

- Website-Header (`site/src/components/Header.astro`) — als Text `2FOX<span accent>4</span>`
- Automatisierte GSC-/SEO-Berichte (`gsc-tools/gsc_pdf_report.py`) — über `2fox4-logo-weiss.png`
- Muster-/Beispiel-Berichte auf der SEO-Leistungsseite — über die offizielle Logo-SVG

---

## 2. Farben

| Rolle | Hex | Notiz |
|-------|-----|-------|
| Hintergrund (dunkel) | `#0a0a0a` | Primärer Seitenhintergrund |
| Hintergrund erhöht | `#111111` | Abgesetzte Sektionen |
| Akzent (Orange) | `#ff6b35` | **Markenfarbe** — Logo-4, CTAs, Hervorhebungen |
| Akzent weich | `rgba(255,107,53,0.12)` | Badges, Soft-Backgrounds |
| Text | `#ededed` | Fließtext auf Dunkel |
| Text gedämpft | `#999999` | Sekundärtext |
| Text fein | `#666666` | Tertiär / Footer |
| Rahmen | `rgba(255,255,255,0.08)` | Karten, Trennlinien |

Helles Theme (Website-Light-Mode): Akzent dunkler `#c2410c`, Text `#0a0a0a`,
Hintergrund `#ffffff`. Quelle: `site/src/styles/` (CSS-Variablen).

**Gelb** ist kein Bestandteil der Kernpalette und darf nur sehr sparsam als
Zusatz-Akzent in Grafiken auftauchen — nie im Logo, nie als Ersatz für Orange.

---

## 3. Typografie

- Website: System-/Sans-Serif-Stack, kräftige, eng laufende Headlines
  (`font-bold`, `tracking-tight` / negatives Letter-Spacing).
- Headlines groß und selbstbewusst, Fließtext ruhig und gut lesbar.
- In PDF-Reports kommt eine serifenlose Schrift zum Einsatz (ReportLab-Default
  bzw. eingebettete Sans).

---

## 4. Tonalität (kurz)

- Wir sprechen von **„wir"**, nicht von „ich" — 2FOX4 ist ein Team.
- Klar, ehrlich, ohne Buzzword-Bingo. Lieber konkret als marketing-laut.
- In Kundenberichten: verständlich erklären, auch schlechte Zahlen offen benennen.

---

## 5. Beispieldaten / Muster

Öffentlich gezeigte Berichte (z. B. auf der Website) sind immer **anonymisierte
Muster mit frei erfundenen Zahlen**. Echte Kundendaten werden vertraulich behandelt
und nie öffentlich gezeigt. Muster sind als „Beispielbericht" zu kennzeichnen.

---

## 6. Angebote (verbindlich seit 21.09.2026)

Alle Angebote werden im Angebotsdesign gesetzt, das mit dem Angebot für Schüßler & Sohn
(September 2026) eingeführt wurde. Vorlage-Skripte:
`Kunden/Naturstein-Schuessler/build_angebot.py` und
`../Liederkranz/angebot/build_angebot.py` (mit Positions-Tabelle und Optionen).

- ReportLab-PDF, A4, weißer Grund, Liberation Sans, Akzent `#c2410c`, Linien `#e2e2e2`
- Logo `logo/2fox4-logo-dunkel.png` oben links (26 mm), rechts Angebotsnummer, Datum, Gültigkeit
- Seite 1: Titel, Designentwurf/Mockup mit „Bitte beachten“-Hinweis, „Angebot an / von“
- Nummerierte Abschnitte mit oranger Ziffer, Preis-Tabelle Netto/USt/Brutto,
  Fachbegriffe-Glossar, Auftragserteilung mit Unterschriftszeile
- Wird ein altes Angebot neu gesetzt: Positionen und Preise bleiben exakt gleich.
- Formulare mit personenbezogenen oder Bankdaten (z. B. Online-Beitritt mit SEPA): Double-Opt-in
  immer erwähnen – als Schutz vor Missbrauch, nicht als Rechtspflicht. Empfänger wird nur per
  E-Mail benachrichtigt und ruft die Daten geschützt ab; Bankdaten nie unverschlüsselt per E-Mail.
  Musterformulierung: Liederkranz-Angebot, Position O2.
