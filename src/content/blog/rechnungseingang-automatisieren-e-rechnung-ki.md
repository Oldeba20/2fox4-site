---
title: "Rechnungseingang automatisieren: E-Rechnung und KI im KMU richtig kombinieren"
date: 2026-10-16
description: "Rechnungseingang automatisieren: Wie KMU E-Rechnungen, PDFs und Papierbelege in einem Ablauf sammeln, prüfen und buchen, wo KI hilft und was bis 2027 zu tun ist."
cover:
  src: "/uploads/blog/rechnungseingang-automatisieren-e-rechnung-ki/cover.webp"
  alt: "Rechnungseingang automatisieren: Schreibtisch im Handwerksbetrieb mit Rechnungsstapel und Laptop mit Ablaufdiagramm"
categories:
  - digitalisierung
categoryNames:
  - "Digitalisierung"
draft: false
seoTitle: "Rechnungseingang automatisieren: E-Rechnung & KI für KMU"
seoDescription: "Rechnungseingang automatisieren mit E-Rechnung und KI: Ablauf in fünf Stationen, Fristen bis 2028, passende Werkzeuge, GoBD-Archiv und typische Fehler für KMU."
---

Wer den Rechnungseingang automatisieren will, hat 2026 einen guten Grund, jetzt anzufangen. Seit Januar 2025 muss jedes Unternehmen in Deutschland E-Rechnungen empfangen können, ab Januar 2027 müssen die ersten Lieferanten sie verschicken. Damit kommen immer mehr Rechnungen als Datensatz statt als Bild an, und genau das macht Automatisierung einfach. PDF und Papier verschwinden trotzdem nicht über Nacht. Eine ganze Weile wirst du mit einer Mischung aus XML, PDF und Papier arbeiten. Wir zeigen dir, wie ein Ablauf aussieht, der alle drei Sorten sauber verarbeitet, wo KI wirklich etwas bringt und wo sie überflüssig ist.

> **Kurz gesagt:** Ein automatisierter Rechnungseingang sammelt alle Rechnungen an einer Stelle, liest E-Rechnungen direkt aus dem XML, lässt PDFs und Scans von einer KI erfassen, prüft Pflichtangaben und Dubletten und legt jede Rechnung einem Menschen zur Freigabe vor. Danach wird gebucht und mit dem strukturierten Datenteil acht Jahre archiviert. Für den Empfang reicht laut Finanzverwaltung schon ein E-Mail-Postfach, für einen effizienten Ablauf brauchst du aber Software, die XRechnung und ZUGFeRD lesen kann.

## Warum lohnt es sich gerade jetzt, den Rechnungseingang zu automatisieren?

Weil sich die Rechnungen selbst verändern. Bis vor Kurzem war fast jede Eingangsrechnung ein PDF oder ein Blatt Papier. Jemand musste Rechnungsnummer, Betrag, Lieferant und Fälligkeit abtippen oder eine Texterkennung darüberlaufen lassen. Mit der E-Rechnung stehen diese Angaben bereits maschinenlesbar in der Datei. Software muss sie nicht mehr erraten, sondern nur noch übernehmen.

Viele Betriebe nutzen das noch nicht. Laut einer Bitkom-Umfrage unter 1.103 Unternehmen ab 20 Beschäftigten konnten im Frühjahr 2024 erst 45 % E-Rechnungen empfangen. 96 % erhielten Rechnungen per E-Mail, und 93 % ließen ihren Geschäftspartnern weiterhin die Wahl, Rechnungen per Briefpost zu schicken ([Bitkom, Dezember 2024](https://www.bitkom.org/Presse/Presseinformation/Weniger-als-die-Haelfte-deutscher-Unternehmen-empfaengt-E-Rechnungen)). Auch beim Versand ist der Mittelstand noch nicht fertig. In einer YouGov-Befragung von 502 Unternehmen im Auftrag des Anbieters easybill gaben 24 % an, die Umstellung abgeschlossen zu haben. 33 % hatten noch nie eine E-Rechnung verschickt, und 21 % schreiben Rechnungen weiterhin in Word oder Excel ([Markt und Mittelstand, Juni 2026](https://www.marktundmittelstand.de/ratgeber/studie-zur-e-rechnung-2027)).

Für dich als Empfänger heißt das: Deine Lieferanten stellen bis Anfang 2028 nach und nach um. Wenn dein Rechnungseingang darauf vorbereitet ist, wird jede umgestellte Lieferantenrechnung automatisch weniger Arbeit. Wenn nicht, druckst du am Ende XML-Dateien aus oder suchst nach einem Programm, das sie überhaupt anzeigt. Klingt absurd, erleben wir aber öfter.

## Welche Fristen gelten für E-Rechnungen?

Die E-Rechnungspflicht betrifft Umsätze zwischen inländischen Unternehmen. Das Bundesfinanzministerium fasst die Regeln in seinen Fragen und Antworten zur E-Rechnung zusammen, hier mit Stand März 2026 ([BMF-FAQ zur E-Rechnung](https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html)). Für deinen Rechnungseingang sind diese Stichtage wichtig:

| Zeitraum | Empfang | Versand durch deine Lieferanten |
|---|---|---|
| seit 1. Januar 2025 | Pflicht für alle Unternehmen, auch für Kleinunternehmer | bis Ende 2026 Papier weiter erlaubt, PDF und andere elektronische Formate nur mit Zustimmung des Empfängers |
| ab 1. Januar 2027 | unverändert Pflicht | E-Rechnung Pflicht für Lieferanten mit mehr als 800.000 Euro Vorjahresumsatz |
| bis 31. Dezember 2027 | unverändert Pflicht | Lieferanten bis 800.000 Euro Vorjahresumsatz dürfen noch Papier schicken, PDF nur mit deiner Zustimmung; Rechnungen per EDI-Verfahren bleiben mit Zustimmung übergangsweise erlaubt |
| ab 1. Januar 2028 | unverändert Pflicht | E-Rechnung Pflicht für alle Lieferanten im Inland |

Einige Rechnungen bleiben auch danach ausgenommen. Kleinbetragsrechnungen bis 250 Euro brutto, Fahrausweise und Rechnungen von Kleinunternehmern müssen keine E-Rechnungen sein. Daraus folgt etwas, das viele unterschätzen: Dein Rechnungseingang wird nie zu 100 % aus E-Rechnungen bestehen. Die Tankquittung, der Fahrschein und die Rechnung des Kleinunternehmers kommen weiterhin als Papier oder PDF. Ein guter Ablauf ist deshalb auf einen dauerhaften Mischbetrieb ausgelegt.

## Was ist eine E-Rechnung und was nicht?

Eine E-Rechnung ist eine Rechnung in einem strukturierten elektronischen Format, das der europäischen Norm EN 16931 entspricht und sich automatisch verarbeiten lässt. In Deutschland sind das vor allem zwei Formate:

- **XRechnung** ist eine reine XML-Datei. Ohne passende Software siehst du nur Programmcode.
- **ZUGFeRD** ist ein hybrides Format: ein PDF mit eingebetteter XML-Datei. Laut BMF erfüllt ZUGFeRD ab Version 2.0.1 die Anforderungen, ausgenommen die Profile MINIMUM und BASIC-WL.

Ein normales PDF, das per E-Mail kommt, ist keine E-Rechnung, auch wenn es elektronisch verschickt wurde. Es zählt als „sonstige Rechnung“.

Wichtig für deinen Ablauf: Bei hybriden Rechnungen wie ZUGFeRD gilt im Zweifel der XML-Teil, nicht das, was im PDF steht. Weichen die beiden voneinander ab, sind die strukturierten Daten maßgeblich. Wer bisher nur auf das PDF geschaut hat, prüft also unter Umständen die falsche Version. Zum Ansehen einzelner Dateien bietet die Finanzverwaltung einen kostenlosen E-Rechnungs-Viewer im ELSTER-Portal an, der ohne Anmeldung einzelne XML-Dateien lesbar darstellt ([ELSTER E-Rechnungs-Viewer](https://www.elster.de/eportal/e-rechnung)). Für einzelne Rechnungen ist das eine Hilfe, für den täglichen Rechnungseingang ersetzt es keine Software.

Im zweiten Anwendungsschreiben vom 15. Oktober 2025 hat das BMF außerdem unterschieden, welche Fehler eine E-Rechnung haben kann. Bei einem Formatfehler entspricht die Datei technisch nicht der Norm und gilt deshalb nur als sonstige Rechnung. Verstöße gegen Geschäftsregeln des Formats haben nur dann Folgen, wenn umsatzsteuerliche Pflichtangaben betroffen sind. Inhaltliche Fehler wie ein falscher Steuersatz können dagegen wie bisher den Vorsteuerabzug gefährden. Für einen automatisierten Eingang heißt das: Eine technische Prüfung (Validierung) der Datei gehört an den Anfang, und den Prüfbericht hebst du am besten mit auf. Die inhaltliche Prüfung bleibt trotzdem nötig.

## Wie sieht ein automatisierter Rechnungseingang aus?

Ein automatisierter Rechnungseingang ist ein fester Ablauf, der jede Eingangsrechnung vom Empfang bis ins Archiv führt, ohne dass jemand Daten abtippt. Er besteht aus fünf Stationen. Die KI ist dabei ein Werkzeug an bestimmten Stellen, nicht der ganze Prozess.

![Rechnungseingang automatisieren in fünf Stationen: Sammeln, Auslesen, Prüfen, Freigeben, Buchen](/uploads/blog/rechnungseingang-automatisieren-e-rechnung-ki/ablauf.webp)

### Station 1: Alle Rechnungen an einer Stelle sammeln

Die meisten Betriebe haben mehrere Eingänge. Rechnungen landen im Postfach der Chefin, im Sammelpostfach, bei der Buchhaltung, in Lieferantenportalen und als Brief auf dem Schreibtisch. Der erste und wichtigste Schritt hat mit Technik wenig zu tun: Lege eine einzige Rechnungsadresse fest, zum Beispiel rechnung@deinbetrieb.de, und teile sie allen Lieferanten mit.

Papierrechnungen scannst du am Eingang ein, etwa mit einer Scan-App auf dem Smartphone oder einem Dokumentenscanner, und schickst sie an dieselbe Adresse oder in denselben Ordner. Rechnungen aus Portalen wie Telekom, Amazon Business oder Energieversorgern holt entweder deine Buchhaltungssoftware über eine Schnittstelle ab oder ein Automatisierungswerkzeug lädt sie regelmäßig herunter.

### Station 2: Daten auslesen

Hier trennt sich der Weg. Bei einer E-Rechnung liest die Software die Daten direkt aus dem XML: Lieferant, Rechnungsnummer, Datum, Netto, Steuer, Brutto, Fälligkeit, Bankverbindung, oft sogar einzelne Positionen. Das ist exakt und braucht keine KI.

Bei PDFs, Scans und Fotos muss die Information erst aus dem Bild gewonnen werden. Früher hat das eine klassische Texterkennung mit festen Vorlagen pro Lieferant erledigt. Heute übernehmen das Sprachmodelle, die Rechnungen auch ohne Vorlage verstehen. Sie erkennen, welche Zahl der Bruttobetrag ist, auch wenn jeder Lieferant ihn an einer anderen Stelle druckt.

### Station 3: Automatisch prüfen

Jetzt prüft der Ablauf, ob die Rechnung plausibel ist. Typische Prüfregeln sind:

- Sind alle Pflichtangaben nach § 14 UStG vorhanden, etwa Steuernummer, fortlaufende Rechnungsnummer und Leistungsdatum?
- Ist die Rechnung schon einmal eingegangen, etwa als PDF per Mail und zusätzlich per Post?
- Stimmt die Bankverbindung mit der gespeicherten des Lieferanten überein?
- Passt der Betrag zur Bestellung oder zum Lieferschein, falls es die gibt?
- Ist die E-Rechnung technisch gültig?

Der Abgleich der Bankverbindung ist dabei mehr als Formsache. Gefälschte Rechnungen mit geänderter IBAN sind eine verbreitete Betrugsmasche, auch gegen kleine Firmen. Ein Ablauf, der jede neue oder geänderte Bankverbindung rot markiert, schützt wirksam. Die Schulung deines Teams ersetzt er nicht, aber er ergänzt sie gut.

### Station 4: Ein Mensch gibt frei

Die Freigabe bleibt beim Menschen, denn hier liegt die Verantwortung. Hier bestätigt jemand: Wurde die Leistung erbracht, stimmt die Menge, ist der Preis vereinbart? Das weiß der Bauleiter, die Praxismanagerin oder der Inhaber, nicht die Software. Gute Lösungen schicken die Rechnung mit allen ausgelesenen Daten an die zuständige Person, die per Klick freigibt oder eine Rückfrage stellt. Wer viele kleine, wiederkehrende Rechnungen hat, kann Regeln festlegen, etwa dass die monatliche Telefonrechnung bis zu einem bestimmten Betrag ohne Einzelfreigabe durchläuft.

### Station 5: Buchen und archivieren

Nach der Freigabe wird die Rechnung gebucht und zur Zahlung vorgemerkt. Die Archivierung ist der Teil, bei dem die E-Rechnung etwas ändert. Laut BMF musst du ein Doppel jeder Rechnung acht Jahre aufbewahren, und bei einer E-Rechnung zumindest den strukturierten Teil unversehrt in seiner ursprünglichen Form. Ein ausgedrucktes PDF oder ein Screenshot reicht nicht. Die Frist für Buchungsbelege wurde mit dem Vierten Bürokratieentlastungsgesetz von zehn auf acht Jahre verkürzt ([Haufe](https://www.haufe.de/steuern/gesetzgebung-politik/viertes-buerokratieentlastungsgesetz_168_613390.html)). Die Grundsätze ordnungsmäßiger Buchführung in elektronischer Form, kurz GoBD, gelten weiterhin. Dazu gehört eine Verfahrensdokumentation, die beschreibt, wie Rechnungen bei dir eingehen, geprüft und abgelegt werden.

## Wo hilft KI beim Rechnungseingang und wo nicht?

Diese Frage wird oft falsch beantwortet, meist in Richtung „überall“. Ehrlicher ist ein genauer Blick. Denn je mehr E-Rechnungen ankommen, desto mehr verschiebt sich die Aufgabe der KI.

![Rechnungseingang automatisieren mit KI: Bei E-Rechnungen kaum nötig, bei PDF und Papier hilfreich, bei der Zuordnung als Vorschlag](/uploads/blog/rechnungseingang-automatisieren-e-rechnung-ki/ki.webp)

**Bei E-Rechnungen braucht es zum Auslesen keine KI.** Die Daten liegen strukturiert vor. Ein Sprachmodell darüberlaufen zu lassen, wäre teurer und fehleranfälliger als das XML direkt zu lesen.

**Bei PDFs, Scans und Belegfotos lohnt sich KI.** Bis Ende 2027 kommen bei vielen Betrieben noch viele Rechnungen in diesen Formaten, und Kleinbeträge, Fahrausweise und Kleinunternehmer bleiben dauerhaft dabei. Moderne Sprachmodelle lesen solche Belege deutlich flexibler als alte Texterkennung mit Vorlagen. Ganz fehlerfrei sind sie nicht. Bei schlechten Scans, Handschrift oder ungewöhnlichen Layouts verwechseln sie Beträge oder Daten. Deshalb gilt: Die KI schlägt vor, die Prüfung in Station 3 und die Freigabe in Station 4 fangen Fehler ab.

**Bei der Zuordnung hilft KI für alle Rechnungsarten.** Welches Sachkonto, welche Kostenstelle, welches Projekt? Hier lernen viele Buchhaltungsprogramme aus deinen bisherigen Buchungen und machen Vorschläge. Auch das Erkennen von Auffälligkeiten, etwa ein Lieferant, der plötzlich doppelt so viel berechnet wie sonst, ist eine typische KI-Aufgabe.

**Bei der Entscheidung hilft KI nicht.** Ob eine Rechnung bezahlt wird, entscheidet ein Mensch. Wie man diese Grenze sauber zieht, beschreiben wir ausführlich im Beitrag [KI-Automatisierung für KMU: 7 Prozesse, die sich zuerst lohnen](/blog/ki-automatisierung-kmu-prozesse/).

## Welche Werkzeuge passen zu welchem Betrieb?

Für den Rechnungseingang gibt es drei typische Wege. Welcher passt, hängt weniger von der Technik ab als davon, wie du heute buchst und mit wem.

| Ausgangslage | Passender Weg | Worauf du achten solltest |
|---|---|---|
| Solo-Selbstständige und kleine Betriebe mit Cloud-Buchhaltung | Rechnungsfunktion der vorhandenen Buchhaltungssoftware, etwa Lexware Office, sevdesk oder DATEV Unternehmen online | Kann sie XRechnung und ZUGFeRD empfangen, anzeigen und das XML archivieren? Gibt es ein eigenes Rechnungspostfach? |
| Betriebe mit Steuerbüro, das über DATEV bucht | Belegübergabe an das Steuerbüro digital und mit dem XML, Freigabe vorher im eigenen Ablauf | Absprache mit dem Steuerbüro, welches Format und welcher Übertragungsweg gewünscht sind |
| Betriebe mit vielen Lieferanten, Projekten oder Kostenstellen | Spezialisierte Software für Eingangsrechnungen mit Freigabe-Workflow | Schnittstelle zu deiner Buchhaltung, Freigaberegeln, Rollen, Kosten pro Rechnung |
| Betriebe mit besonderen Abläufen oder vielen Insellösungen | Eigener Ablauf mit einer Automatisierungsplattform wie n8n oder Make, plus Sprachmodell für PDFs | Wartung, Datenschutz, saubere Fehlerbehandlung, Dokumentation für die GoBD |

Ein eigener Ablauf mit n8n oder Make klingt verlockend, weil er genau auf deinen Betrieb passt. Er ist aber auch Software, die jemand pflegen muss. Für die meisten kleinen Betriebe ist die Rechnungsfunktion der Buchhaltungssoftware der bessere Start, ergänzt um wenige Automatisierungen an den Rändern, etwa das Abholen von Portalrechnungen. Einen Überblick über die Plattformen findest du in unserem [Vergleich von n8n, Make und Zapier](/blog/n8n-make-zapier-vergleich-2026/).

## Was kostet ein manueller Rechnungseingang?

Mehr, als die meisten schätzen, weil die Arbeit auf viele Schultern verteilt ist. Die Analysten von Ardent Partners haben 2025 für die Kreditorenbuchhaltung durchschnittlich 9,40 US-Dollar Prozesskosten pro Rechnung ermittelt, bei den effizientesten Unternehmen 2,78 US-Dollar. Die Zahlen stammen aus einer internationalen Studie unter Kreditorenabteilungen und lassen sich nicht eins zu eins auf einen Handwerksbetrieb übertragen. Sie zeigen aber das Verhältnis: Ein gut organisierter Eingang kostet nur einen Bruchteil.

Für deinen Betrieb kannst du selbst grob rechnen. Ein Beispiel mit angenommenen Werten: Ein Betrieb erhält 150 Eingangsrechnungen im Monat. Für Öffnen, Abtippen, Weiterleiten, Nachfragen, Ablegen und Zahlung vorbereiten gehen pro Rechnung zusammen etwa sechs Minuten drauf. Das sind 15 Stunden im Monat. Halbiert ein automatisierter Ablauf die Zeit, gewinnst du rund 90 Stunden im Jahr. Bei einem internen Stundensatz von 40 Euro entspricht das 3.600 Euro, ohne die Kosten für verspätete Zahlungen, verlorene Skonti oder doppelt bezahlte Rechnungen mitzurechnen.

Dem stehen die Kosten gegenüber: Software, meist als Monatsabo, die Einrichtung und die Zeit, bis das Team den neuen Ablauf lebt. In kleinen Betrieben amortisiert sich das häufig über gesparte Zeit und vermiedene Fehler. Wer weniger als 20 Rechnungen im Monat hat, kommt mit der Basisfunktion seiner Buchhaltungssoftware und einem sauberen Postfach oft schon aus.

## Welche Fehler solltest du beim Automatisieren vermeiden?

In unserer Beratung begegnen uns immer wieder dieselben Stolpersteine:

**Mehrere Eingänge bleiben bestehen.** Die neue Rechnungsadresse wird eingerichtet, aber die Hälfte der Lieferanten schickt weiter an die alte. Schreib jedem Lieferanten aktiv, und richte im alten Postfach eine Regel ein, die Rechnungen weiterleitet.

**Das XML wird weggeworfen.** Manche Abläufe speichern nur das PDF oder eine Vorschau. Bei einer E-Rechnung ist aber der strukturierte Teil der Beleg. Prüfe, ob deine Software die Originaldatei unverändert archiviert.

**Die KI bucht ohne Kontrolle.** Eine Extraktion mit 95 % Trefferquote klingt gut, bedeutet aber bei 150 Rechnungen im Monat mehrere fehlerhafte Datensätze. Ohne Prüfung und Freigabe landen diese Fehler in der Buchhaltung.

**Sonderfälle werden vergessen.** Gutschriften, Abschlagsrechnungen, Rechnungen in Fremdwährung oder mit Reverse-Charge brauchen eigene Regeln. Plane sie von Anfang an ein, statt sie später händisch zu korrigieren.

**Das Steuerbüro erfährt es zuletzt.** Wenn du deinen Rechnungseingang umstellst, ändert sich auch, was bei deinem Steuerbüro ankommt. Sprich vorher über Format, Übergabeweg und die Frage, wer die Verfahrensdokumentation schreibt.

## Wie bleibt der Ablauf datenschutzkonform?

Rechnungen enthalten personenbezogene Daten, etwa Namen von Ansprechpartnern, bei Einzelunternehmern auch Privatadressen und Bankverbindungen. Für jeden Dienst, der Rechnungen verarbeitet, brauchst du deshalb einen Vertrag zur Auftragsverarbeitung. Achte darauf, wo die Daten verarbeitet werden, und ob ein KI-Anbieter deine Belege für das Training seiner Modelle nutzen darf. Bei Cloud-Buchhaltung aus Deutschland ist das meist geklärt. Bei einem selbst gebauten Ablauf mit einem Sprachmodell musst du es selbst prüfen. Grundlagen dazu findest du in unserem Beitrag [KI datenschutzkonform einsetzen](/blog/ki-datenschutzkonform-einsetzen/).

## Dein Fahrplan bis zum Jahreswechsel

Bis zum 1. Januar 2027 sind es noch etwa elf Wochen. Ab dann müssen dir alle Lieferanten mit mehr als 800.000 Euro Vorjahresumsatz E-Rechnungen schicken. Das ist nicht viel Zeit, reicht aber gut für diese Schritte:

1. **Bestandsaufnahme:** Zähle, wie viele Rechnungen pro Monat kommen, über welche Wege und in welchem Format.
2. **Rechnungsadresse festlegen:** Eine Adresse für alle Eingangsrechnungen, den Lieferanten mitteilen.
3. **Software prüfen:** Kann deine Buchhaltung XRechnung und ZUGFeRD empfangen, anzeigen, auslesen und revisionssicher archivieren? Teste es mit einer echten E-Rechnung.
4. **Freigabe klären:** Wer gibt welche Rechnungen frei, ab welchem Betrag braucht es eine zweite Person?
5. **Prüfregeln einrichten:** mindestens Dublettenprüfung und Abgleich der Bankverbindung.
6. **Steuerbüro einbinden:** Format, Übergabe und Verfahrensdokumentation abstimmen.
7. **Erst dann KI ergänzen:** für PDFs, Scans und Kontierungsvorschläge, mit Prüfung.

Die Reihenfolge ist Absicht. Ein Ablauf, der sauber steht, wird durch KI schneller. Ein chaotischer Ablauf wird durch KI nur schneller chaotisch.

## Fazit: Erst den Ablauf ordnen, dann automatisieren

Den Rechnungseingang zu automatisieren ist eines der dankbarsten Digitalisierungsprojekte für kleine und mittlere Unternehmen. Die E-Rechnung liefert dir die Daten frei Haus, und bei allem, was noch als PDF oder Papier kommt, hilft KI. Die Entscheidung, was bezahlt wird, bleibt bei dir und deinem Team. Wer jetzt beginnt, merkt den Unterschied schon im Januar, wenn die ersten großen Lieferanten umstellen. Fang klein an: eine Rechnungsadresse, eine echte Test-E-Rechnung, ein klarer Freigabeweg.

Wenn du Unterstützung beim Aufsetzen brauchst, vom passenden Werkzeug bis zum fertigen Ablauf, helfen wir dir in unserer [Digitalisierungsberatung](/leistungen/digitalisierungsberatung/). Für die Beratung kann die BAFA-Förderung je nach Region 50 oder 80 % der Kosten übernehmen, Anträge sind nach aktueller Richtlinie bis Ende 2026 möglich. Schreib uns einfach über die [Kontaktseite](/kontakt/).

## Häufige Fragen (FAQ)

<details>
<summary>Musst du seit 2025 E-Rechnungen empfangen können?</summary>
<p>Ja. Seit dem 1. Januar 2025 müssen alle Unternehmen in Deutschland E-Rechnungen von anderen inländischen Unternehmen empfangen können, auch Kleinunternehmer. Laut Bundesfinanzministerium reicht dafür bereits ein E-Mail-Postfach. Für eine effiziente Verarbeitung brauchst du zusätzlich Software, die XRechnung und ZUGFeRD anzeigen und auslesen kann.</p>
</details>

<details>
<summary>Ab wann müssen deine Lieferanten E-Rechnungen schicken?</summary>
<p>Lieferanten mit mehr als 800.000 Euro Vorjahresumsatz müssen ab dem 1. Januar 2027 E-Rechnungen ausstellen, alle übrigen ab dem 1. Januar 2028. Ausgenommen bleiben unter anderem Kleinbetragsrechnungen bis 250 Euro brutto, Fahrausweise und Rechnungen von Kleinunternehmern.</p>
</details>

<details>
<summary>Braucht man für den automatisierten Rechnungseingang KI?</summary>
<p>Für E-Rechnungen nicht, denn ihre Daten liegen strukturiert im XML vor und lassen sich direkt auslesen. KI lohnt sich bei PDFs, Scans und Belegfotos sowie für Vorschläge zu Sachkonto und Kostenstelle. Die Freigabe zur Zahlung sollte immer ein Mensch erteilen.</p>
</details>

<details>
<summary>Wie lange musst du E-Rechnungen aufbewahren?</summary>
<p>Rechnungen müssen acht Jahre aufbewahrt werden. Bei einer E-Rechnung muss zumindest der strukturierte Teil, also die XML-Datei, unversehrt in seiner ursprünglichen Form archiviert werden. Ein Ausdruck oder nur das PDF reicht nicht.</p>
</details>

<details>
<summary>Ist ein PDF per E-Mail eine E-Rechnung?</summary>
<p>Nein. Ein normales PDF ist eine sonstige Rechnung. Eine E-Rechnung muss in einem strukturierten Format nach der Norm EN 16931 vorliegen, etwa als XRechnung oder als ZUGFeRD ab Version 2.0.1 ohne die Profile MINIMUM und BASIC-WL.</p>
</details>

<details>
<summary>Womit kannst du eine einzelne XRechnung ansehen?</summary>
<p>Die Finanzverwaltung bietet einen kostenlosen E-Rechnungs-Viewer im ELSTER-Portal unter <a href="https://www.elster.de/eportal/e-rechnung">elster.de/eportal/e-rechnung</a> an, nutzbar ohne Anmeldung. Daneben gibt es kostenlose Viewer privater Anbieter. Für den laufenden Rechnungseingang ist eine Buchhaltungssoftware mit E-Rechnungsfunktion aber deutlich praktischer.</p>
</details>
