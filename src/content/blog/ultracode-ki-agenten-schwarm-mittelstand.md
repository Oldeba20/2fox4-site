---
title: "Ultracode: Wie ein ganzer KI-Agenten-Schwarm über Nacht für dich arbeitet"
date: 2026-06-09
description: "Ultracode lässt in Claude Code bis zu 1.000 KI-Agenten an einer Aufgabe arbeiten – sie planen, bauen und prüfen sich selbst. Was das ist, 3 Praxis-Tests und wann sich der Agenten-Schwarm für KMU lohnt."
cover:
  src: "/uploads/blog/ultracode-ki-agenten-schwarm-mittelstand/01.webp"
  alt: "Ultracode KI-Agenten-Schwarm – Grafik im 2fox4-Stil: ein Projektleiter-Agent verteilt Aufgaben an viele parallele KI-Agenten"
categories:
  - ki
categoryNames:
  - "KI / AI"
draft: false
seoTitle: "Ultracode: KI-Agenten-Schwarm in Claude Code (2026)"
seoDescription: "Ultracode startet mit einer Anweisung bis zu 1.000 KI-Agenten, die sich selbst organisieren und kontrollieren. Definition, 3 Praxis-Tests, Kosten & wann es sich für KMU lohnt."
---

Stell dir vor, du gibst am Abend eine einzige Anweisung ein, machst Feierabend – und am nächsten Morgen liegt ein komplettes Arbeitsergebnis fertig auf dem Tisch. Keine drei Stunden Fleißarbeit, keine zwanzig manuellen Einzelschritte. Genau das ist die Idee hinter **Ultracode**: einem neuen Modus, in dem nicht mehr nur ein KI-Assistent für dich arbeitet, sondern ein ganzer Schwarm aus KI-Agenten, der sich selbst organisiert und gegenseitig kontrolliert.

Das klingt nach Zukunftsmusik, läuft aber heute schon. In diesem Beitrag erklären wir dir verständlich, was Ultracode wirklich ist, zeigen dir drei echte Praxis-Tests mit ihren Ergebnissen – und sage dir am Ende ehrlich, wann sich der Aufwand lohnt und wann du besser beim ganz normalen KI-Assistenten bleibst.

> **Kurz gesagt:** Ultracode ist eine Einstellung im KI-Coding-Werkzeug *Claude Code* (Stand 2026 als Research Preview). Eine einzige Anweisung startet ein selbstorganisiertes Team aus bis zu **1.000 KI-Agenten**, von denen bis zu **16 gleichzeitig** arbeiten. Die Agenten planen die Aufgabe, zerlegen sie, erledigen die Teile parallel – und andere Agenten prüfen anschließend das Ergebnis. Für große oder gut zerlegbare Aufgaben ist das ein enormer Hebel; für kleine Einzelschritte ist es überdimensioniert und teuer.

![Ultracode – ein Projektleiter-Agent verteilt eine Aufgabe an einen Schwarm paralleler KI-Agenten](/uploads/blog/ultracode-ki-agenten-schwarm-mittelstand/01.webp)

## Was ist Ultracode überhaupt?

Ultracode ist ein Schalter im sogenannten *Effort-Menü* von Claude Code – dem KI-Werkzeug, mit dem man Software und ganze Arbeitsabläufe von einer KI erledigen lassen kann. Eingeführt wurde die Funktion Ende Mai 2026 zusammen mit dem neuen Sprachmodell **Claude Opus 4.8** und ist aktuell als sogenannte *Research Preview* verfügbar, also als frühe Vorschau-Version.

Schaltest du Ultracode ein, passieren zwei Dinge gleichzeitig:

Erstens wird die *Denktiefe* der KI auf die höchste verfügbare Stufe gesetzt. Das Modell überlegt also gründlicher und länger, bevor es handelt. Zweitens darf die KI von sich aus zusätzliche Helfer starten – sogenannte **Subagenten** – und entscheidet selbst, wann eine Aufgabe groß genug ist, um sie auf mehrere Agenten gleichzeitig zu verteilen.

Anthropic, das Unternehmen hinter dem Modell, nennt die technische Grundlage offiziell [Dynamic Workflows](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code). Dabei schreibt die KI im Hintergrund ein Steuerungsskript, das dutzende bis hunderte parallele Subagenten in einer einzigen Sitzung koordiniert, ihre Ergebnisse Schritt für Schritt überprüft und den Fortschritt speichert, sodass eine unterbrochene Aufgabe wieder aufgenommen werden kann. Die offizielle Obergrenze liegt bei **1.000 Subagenten** pro Auftrag, von denen bis zu **16 parallel** laufen.

Für dich als Unternehmer zählt aber nicht die Technik dahinter, sondern was sie leistet. Und das lässt sich an einer einzigen Zahl festmachen: Mit genau dieser Methode wurde testweise eine Software-Codebasis von rund **750.000 Zeilen** umgebaut – und am Ende waren **99,8 Prozent** der automatischen Tests erfolgreich. Das war zwar ein Experiment und lief nicht im echten Live-Betrieb, zeigt aber, in welcher Größenordnung hier gedacht wird.

## Vom einzelnen Agenten zum selbstorganisierten Schwarm

Mehrere KI-Agenten gleichzeitig laufen zu lassen, war auch vorher schon möglich. Der Unterschied: Bisher musstest du jeden Agenten selbst aufsetzen, ihm eine feste Rolle geben und alles von Hand ansteuern. Genau diese Arbeit nimmt Ultracode dir jetzt ab.

Du stößt mit einer einzigen Anweisung ein ganzes Team an, das sich selbst organisiert. Man kann es sich vorstellen wie ein kleines Projektteam:

- Ein **Projektleiter-Agent** zerlegt deine Aufgabe in einzelne Teilaufgaben und verteilt sie.
- Mehrere **Arbeits-Agenten** erledigen diese Teile gleichzeitig.
- Weitere **Prüf-Agenten** schauen den Arbeits-Agenten über die Schulter und kontrollieren das Ergebnis.

Der eigentliche Clou steckt im letzten Punkt: Die KI prüft sich selbst. Sie schaut, was sie gemacht hat, korrigiert Fehler – und du bekommst am Ende ein bereits geprüftes Ergebnis. Laut der [offiziellen Modellankündigung](https://www.anthropic.com/news/claude-opus-4-8) lässt das neue Modell Claude Opus 4.8 Fehler im selbst geschriebenen Code rund **viermal seltener** unkommentiert durchgehen als sein Vorgänger. Genau diese Selbstkontrolle ist der Grund, warum sich überhaupt so viele Agenten sinnvoll parallel betreiben lassen.

Übersetzt in den Arbeitsalltag heißt das: Stell dir einen Mitarbeiter vor, der sonst den ganzen Tag mit lauter kleinen Teilen Fleißarbeit beschäftigt wäre. Diese Fleißarbeit übernimmt jetzt der Agenten-Schwarm. Der Mitarbeiter wird genau von den Aufgaben entlastet, die ihn ausgebremst und viel Zeit gekostet haben – und kann sich um die Themen kümmern, für die man wirklich einen Menschen braucht.

![Ablauf eines Ultracode-Auftrags: planen, parallel ausführen, gegenseitig prüfen, fertiges Ergebnis](/uploads/blog/ultracode-ki-agenten-schwarm-mittelstand/02.webp)

## Praxis-Test 1: Das digitale Startpaket über Nacht

Um zu sehen, was tatsächlich dabei herauskommt, haben wir Ultracode mit einer bewusst großen Aufgabe gefüttert. Der Auftrag an den Agenten-Schwarm, in eigenen Worten: Erstelle für einen fiktiven Handwerksbetrieb ein komplettes digitales Startpaket – bestehend aus einer neuen Website, einer Marktanalyse, einem Marketingplan für die ersten 30 Tage, einem Kostenrechner für Kunden samt Angebots- und Rechnungsvorlagen sowie einem kurzen Werbespot zum Schluss.

Das ist genau die Art von Aufgabe, die einen Menschen tagelang beschäftigen würde: sechs eigenständige Bausteine, jeder für sich ein kleines Projekt. „Über Nacht laufen lassen" war hier eigentlich eingeplant – tatsächlich war der Schwarm aber schon nach knapp **20 Minuten** fertig. Das Ergebnis kann sich sehen lassen:

- Eine komplette, scrollbare **Startseite** mit Hero-Bereich, Leistungen, einer Sektion mit Zahlen und Fakten sowie einem abschließenden Handlungsaufruf – inklusive **Unterseiten** für Leistungen und „Über uns" und sogar einem fertigen Impressum mit Datenschutzhinweisen.
- Eine **Marktanalyse** mit Executive Summary, Einschätzung der stärksten Position, des größten Risikos und der wichtigsten Markttrends.
- Ein **30-Tage-Marketingplan** mit Posting-Rhythmus, Plattform-Aufteilung und ausformulierten Themen samt Hooks pro Woche.
- Ein **Kostenrechner**, der für eingegebene Leistungen direkt ein Angebot kalkuliert und ausgeben kann.
- **Angebots- und Rechnungsvorlagen**.
- Ein kurzer **Werbespot** zum Abschluss.

Perfekt war das Ergebnis nicht. An einer Stelle gab es einen doppelten Handlungsaufruf-Button, die Typografie war zwischen Website und Marktanalyse nicht durchgängig, und die Vorlagen verstanden das DIN-A4-Format noch nicht sauber, sodass eine PDF-Seite unschön umbrach. Wie gut eine rein KI-erstellte Website wirklich wird, haben wir übrigens separat ausprobiert – im Beitrag [Deine erste KI-generierte Landingpage in 90 Minuten](/blog/ki-generierte-landingpage-90-minuten-praxistest-tools/) zeigen wir den ehrlichen Praxistest mit vier Tools. Wichtig auch: Alle Marktzahlen waren von der KI erfunden, also exemplarische Schätzungen und nicht die echte Marktlage. Trotzdem: Für einen ersten Aufschlag, komplett ohne Spezial-Anpassungen, ist das ein verblüffend vollständiger Startpunkt – ideal als Grundgerüst und zur Inspiration.

## Praxis-Test 2: Speed-Duell – ein Agent gegen das Agenten-Team

Im zweiten Test wollte ich herausfinden, ob „mehr Agenten" automatisch „besser" heißt. Die Aufgabe: für die fiktive Firma eine Landingpage mit fertigen Textblöcken erstellen. Links lief ein **einzelner klassischer Agent** (mit dem neuen Modell und höchster Denkstufe), rechts der **Ultracode-Schwarm**.

Das Ergebnis war eindeutig – und überraschend:

| Kriterium | Klassischer Einzel-Agent | Ultracode-Schwarm |
|---|---|---|
| Dauer | ca. 1 Minute | über 5 Minuten (Faktor 5–6 langsamer) |
| Ergebnis | 12 fertige Textblöcke | noch in Arbeit, 13 Agenten parallel gestartet |
| Rechenaufwand | gering | deutlich höher (viele Tokens) |
| Fazit | passend für die Aufgabe | überdimensioniert, „mit Kanonen auf Spatzen" |

Für eine kleine, klar abgegrenzte Aufgabe wie das Schreiben einiger Textblöcke ist der Schwarm also **nicht** die richtige Wahl. Der Mehraufwand für Organisation, Parallelisierung und Selbstkontrolle lohnt sich erst, wenn die Aufgabe groß genug ist, um den zusätzlichen Apparat zu rechtfertigen. Diese Erkenntnis ist fast wichtiger als jedes beeindruckende Demo: Das stärkste Werkzeug ist nicht für jede Aufgabe das richtige.

## Praxis-Test 3: Tiefenrecherche mit echtem Faktencheck

Im dritten Test ging es um den Anwendungsfall, in dem der Schwarm seine Stärke wirklich ausspielt: prüfintensive Recherche. Der Auftrag, sinngemäß: Recherchiere gründlich, prüfe jede gefundene Behauptung gegen mehrere unabhängige Quellen, verwirf, was sich nicht sauber belegen lässt, kennzeichne Unsicherheiten offen und liefere am Ende einen Report mit Quellen. Die konkrete Frage betraf das Marktvolumen eines bestimmten Handwerks-Segments und dessen Entwicklung bis 2027.

Hier zählten ausdrücklich **echte, belegbare Zahlen** – keine erfundenen. Mehrere Agenten recherchierten parallel und kontrollierten sich gegenseitig. Das Ergebnis in Zahlen:

- **24 Quellen** gelesen.
- **101 Behauptungen** gefunden.
- davon **bestätigt** und übernommen: nur die belastbaren.
- **19 Behauptungen aussortiert**, weil nicht sauber belegbar.

Genau das ist der Punkt: Bei einer Recherche, bei der jeder falsche Wert später teuer werden kann, ist die gegenseitige Kontrolle durch mehrere Agenten Gold wert. Du bekommst nicht einfach die erstbeste Zahl, sondern eine geprüfte, mit Quellen hinterlegte Auswertung – und durch die Parallelisierung deutlich schneller, als ein einzelner Rechercheur es schaffen würde.

![Faktencheck-Recherche mit Ultracode: 24 Quellen gelesen, 101 Behauptungen geprüft, unbelegte aussortiert](/uploads/blog/ultracode-ki-agenten-schwarm-mittelstand/03.webp)

## Klassischer Agent oder Ultracode? Der direkte Vergleich

Damit du eine schnelle Entscheidungshilfe hast, hier die beiden Ansätze nebeneinander:

| Merkmal | Klassischer KI-Assistent | Ultracode (Agenten-Schwarm) |
|---|---|---|
| Anzahl Agenten | 1 | bis zu 1.000, davon 16 parallel |
| Organisation | du steuerst selbst | KI organisiert sich selbst |
| Selbstkontrolle | begrenzt | Prüf-Agenten kontrollieren Ergebnisse |
| Geschwindigkeit bei kleinen Aufgaben | sehr schnell | langsamer (Overhead) |
| Geschwindigkeit bei großen Aufgaben | langsam, seriell | schnell durch Parallelität |
| Rechenaufwand / Kosten | gering | deutlich höher |
| Stabilität | ausgereift | Research Preview, kann ausfallen |
| Idealer Einsatz | einzelne Handgriffe, schnelle Texte | große oder gut zerlegbare, prüfintensive Aufgaben |

## Grenzen, Kosten und Risiken – ehrlich betrachtet

So beeindruckend die Technik ist: Es gibt klare Grenzen, die du kennen solltest, bevor du dich darauf verlässt.

Erstens ist Ultracode aktuell eine **Research Preview**. Das heißt: Die Funktion kann zeitweise ausfallen, an Limits stoßen oder länger dauern als geplant. Für Experimente ist das völlig in Ordnung. Für einen wichtigen Termin am selben Tag würde ich mich darauf nicht verlassen.

Zweitens kostet das Tempo etwas – und zwar nicht wenig. Mehr Agenten bedeutet ein Vielfaches an Rechenleistung und damit deutlich mehr **Verbrauch (Tokens)**. Bei großen Aufgaben lohnt sich das, weil du am Ende viel Zeit und Arbeit sparst. Bei einer kurzen Aufgabe ist es schlicht Verschwendung, wie das Speed-Duell oben gezeigt hat.

Drittens ist das Ergebnis ein **Entwurf, kein Endprodukt**. Doppelte Buttons, uneinheitliche Typografie, erfundene Zahlen – all das muss ein Mensch am Ende prüfen und nachziehen. Die KI nimmt dir die Fleißarbeit ab, ersetzt aber nicht das fachliche Urteil und die letzte Qualitätskontrolle.

## Wann sich Ultracode wirklich lohnt

Die Faustregel ist erfreulich einfach. Setze den Agenten-Schwarm immer dann ein, wenn eine Aufgabe eine dieser beiden Eigenschaften hat:

1. **Sie ist richtig groß oder in viele Teile zerlegbar.** Beispiel: ein komplettes Digitalpaket aus Website, Analyse, Plan und Vorlagen. Hier spielen die vielen parallelen Agenten ihre Stärke aus.
2. **Sie ist sehr prüfintensiv**, also eine Aufgabe, bei der jeder Fehler teuer wird. Beispiel: eine Recherche, deren Zahlen belastbar sein müssen. Hier zahlt sich die gegenseitige Kontrolle der Agenten aus.

Für die kleinen, einzelnen Handgriffe nimmst du dagegen wie bisher den ganz normalen KI-Assistenten. Schneller, günstiger, völlig ausreichend.

## Was das für kleine und mittlere Unternehmen bedeutet

Hinter Ultracode steckt ein größeres Muster, das sich 2026 immer deutlicher zeigt: **KI übernimmt nicht mehr nur einzelne Aufgaben, sondern ganze Arbeitsabläufe – inklusive der eigenen Qualitätskontrolle.** Wer als Unternehmer früh versteht, was damit möglich wird, verschafft sich einen Vorsprung, den viele im Markt aktuell noch gar nicht sehen.

Für KMU ist der Hebel handfest: Aufgaben, die früher tagelange Fleißarbeit bedeutet haben – ein digitales Grundgerüst aufsetzen, Marktdaten zusammentragen, Vorlagen erstellen, prüfintensiv recherchieren – lassen sich an einen Agenten-Schwarm delegieren. Nicht, um Menschen zu ersetzen, sondern um sie von der Routine zu befreien. Wie KI-Agenten ganz konkret im Tagesgeschäft mitarbeiten, zeigen wir am Beispiel eines Onlineshops im Beitrag [WooCommerce-Umsatz durch KI-Agenten](/blog/woocommerce-umsatz-ki-agenten-automatisierungen-shop-optimierung-2026/).

Der entscheidende Punkt ist aber nicht die Technik an sich, sondern **wie du sie in deine konkreten Abläufe einbaust**. Genau hier setzen wir bei 2fox4 an: Wir helfen dir, KI- und Automatisierungs-Werkzeuge so in deinen Arbeitsalltag zu integrieren, dass sie wirklich Zeit sparen – von der ersten Idee über den passenden Anwendungsfall bis zum fertigen Workflow. Wenn du wissen möchtest, wo in deinem Unternehmen die größten Automatisierungs-Potenziale schlummern, [sprich uns einfach an](https://www.2fox4.de/kontakt/) oder wirf einen Blick auf unsere [Digitalisierungsberatung](https://www.2fox4.de/leistungen/digitalisierungsberatung/).

## So gehst du als Einsteiger vor – ohne dich zu verzetteln

Die größte Gefahr bei einem Werkzeug wie Ultracode ist nicht, dass es zu wenig kann, sondern dass man es auf die falschen Aufgaben loslässt und dann enttäuscht ist. Damit dir das nicht passiert, hilft eine einfache Reihenfolge.

Beginne nicht mit dem Werkzeug, sondern mit deinem **Engpass**. Frage dich: Welcher wiederkehrende Prozess kostet mich oder mein Team aktuell am meisten Zeit? Das ist fast immer der Punkt, an dem der größte Hebel liegt – und gleichzeitig der ehrlichste Test, ob sich der Einsatz lohnt. Erst wenn du eine konkrete, zeitfressende Aufgabe benennen kannst, lohnt sich der Blick auf das passende Werkzeug.

Im zweiten Schritt prüfst du anhand der Faustregel von oben, ob die Aufgabe überhaupt zum Agenten-Schwarm passt: Ist sie groß oder in viele Teile zerlegbar? Ist sie prüfintensiv? Wenn ja, ist Ultracode einen Versuch wert. Wenn nein, reicht der klassische KI-Assistent – und du sparst dir Kosten und Wartezeit.

Im dritten Schritt formulierst du den Auftrag so klar wie möglich. Je präziser du beschreibst, **was** am Ende herauskommen soll und **woran** du ein gutes Ergebnis erkennst, desto besser kann der Schwarm seine Teilaufgaben schneiden und sich selbst kontrollieren. Eine vage Anweisung führt zu einem vagen Ergebnis – das gilt für einen einzelnen Agenten genauso wie für tausend.

Und schließlich: Plane immer einen menschlichen **Abschluss-Check** ein. Der Schwarm liefert dir einen weit fortgeschrittenen Entwurf, kein fertiges Endprodukt. Die letzten zehn Prozent – fachliche Korrektheit, Markenstimme, echte statt erfundener Zahlen – bleiben deine Aufgabe. Genau in dieser Arbeitsteilung liegt der eigentliche Gewinn: Die KI übernimmt die 90 Prozent Fleißarbeit, du gibst die entscheidenden zehn Prozent Urteilsvermögen dazu.

## Häufige Fragen (FAQ)

<details>
<summary>Was ist Ultracode in einfachen Worten?</summary>
<p>Ultracode ist eine Einstellung im KI-Coding-Werkzeug Claude Code. Mit einer einzigen Anweisung startet sie ein selbstorganisiertes Team aus vielen KI-Agenten, die eine Aufgabe gemeinsam planen, in Teile zerlegen, parallel erledigen und anschließend gegenseitig kontrollieren. Du bekommst am Ende ein bereits geprüftes Ergebnis.</p>
</details>

<details>
<summary>Wie viele KI-Agenten arbeiten bei Ultracode gleichzeitig?</summary>
<p>Pro Auftrag sind bis zu 1.000 Agenten möglich, von denen bis zu 16 gleichzeitig laufen. Wie viele tatsächlich gestartet werden, entscheidet die KI je nach Größe und Zerlegbarkeit der Aufgabe selbst.</p>
</details>

<details>
<summary>Ist Ultracode immer schneller als ein einzelner KI-Assistent?</summary>
<p>Nein. Bei kleinen Aufgaben – etwa ein paar Texte schreiben – ist ein einzelner Agent oft fünf- bis sechsmal schneller, weil der Schwarm einen Organisations-Aufwand mitbringt. Schneller wird Ultracode erst bei großen oder gut in Teile zerlegbaren Aufgaben, die parallel abgearbeitet werden können.</p>
</details>

<details>
<summary>Was kostet der Einsatz eines KI-Agenten-Schwarms?</summary>
<p>Mehr Agenten bedeuten ein Vielfaches an Rechenleistung und damit deutlich höheren Verbrauch (Tokens). Bei großen, prüfintensiven Aufgaben lohnt sich dieser Mehraufwand, weil er viel Zeit spart. Bei kurzen Aufgaben ist er unwirtschaftlich.</p>
</details>

<details>
<summary>Kann ich mich für wichtige Termine auf Ultracode verlassen?</summary>
<p>Aktuell nur eingeschränkt. Ultracode ist als Research Preview, also Vorschau-Version, verfügbar. Die Funktion kann ausfallen, an Limits stoßen oder länger dauern als geplant. Für Experimente ist das in Ordnung, für zeitkritische Aufgaben am selben Tag sollte man sich nicht darauf verlassen.</p>
</details>

<details>
<summary>Wann lohnt sich Ultracode für mein Unternehmen?</summary>
<p>Immer dann, wenn eine Aufgabe entweder sehr groß bzw. in viele Teilaufgaben zerlegbar ist – etwa ein komplettes digitales Startpaket – oder sehr prüfintensiv, wo jeder Fehler teuer wird, etwa bei einer belegbaren Marktrecherche. Für kleine Einzelaufgaben bleibt der klassische KI-Assistent die bessere Wahl.</p>
</details>

## Fazit

Ultracode markiert einen Sprung: Eine einzige Anweisung, und ein ganzes Team aus KI-Agenten plant, baut und prüft sich selbst – und legt dir am Ende ein Ergebnis hin, für das du sonst deutlich länger gebraucht hättest. Drei Praxis-Tests zeigen sowohl das Potenzial (digitales Startpaket in 20 Minuten, geprüfte Recherche aus 24 Quellen) als auch die klare Grenze (für kleine Aufgaben überdimensioniert und teuer).

Das ist keine Zukunftsmusik mehr, sondern läuft heute schon. Der größte Hebel liegt aber nicht im Werkzeug selbst, sondern in der Frage, welcher deiner Prozesse aktuell am meisten Zeit frisst – und ob sich genau der an einen Agenten-Schwarm delegieren lässt. Wer das früh für sich klärt, ist morgen einen Schritt voraus.
