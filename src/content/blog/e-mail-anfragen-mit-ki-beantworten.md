---
title: "E-Mail-Anfragen mit KI beantworten: Praxisleitfaden für kleine Unternehmen"
date: 2026-09-03
description: "E-Mail-Anfragen mit KI beantworten, ohne die Kontrolle abzugeben: Stufenmodell, Tools (Copilot, Gemini, n8n), Kosten, Datenschutz, AI Act und typische Fehler."
cover:
  src: "/uploads/blog/e-mail-anfragen-mit-ki-beantworten/cover.webp"
  alt: "E-Mail-Anfragen mit KI beantworten: Postfach eines kleinen Unternehmens mit KI-Assistent am Schreibtisch"
categories:
  - ki
categoryNames:
  - "KI / AI"
draft: false
seoTitle: "E-Mail-Anfragen mit KI beantworten: Leitfaden für KMU"
seoDescription: "E-Mail-Anfragen mit KI beantworten: So sortiert, priorisiert und beantwortet dein Betrieb Anfragen mit KI. Stufenmodell, Tools, Kosten, DSGVO und AI Act."
---

Der erste Kaffee nach dem Wochenende, und im info@-Postfach stapeln sich die Anfragen. Irgendwo dazwischen steckt der Auftrag, auf den du gewartet hast. Wer E-Mail-Anfragen mit KI beantworten will, setzt genau hier an: beim Sortieren. Die automatische Antwort kommt ganz zum Schluss. Die KI liest jede neue Nachricht im info@-Postfach oder aus dem Kontaktformular, erkennt das Anliegen, fasst es in zwei Sätzen zusammen und legt einen Antwortentwurf bereit. Ein Mensch prüft und schickt ab. Erst wenn das ein paar Wochen sauber läuft, dürfen klar umrissene Standardfälle ganz ohne Freigabe rausgehen. In diesem Leitfaden zeigen wir dir, wie dieses Stufenmodell aufgebaut ist, welche Werkzeuge es gibt, was das ungefähr kostet und wo die rechtlichen Stolpersteine liegen.

> **Kurz gesagt:** Ein KI-E-Mail-Assistent ist ein System, das eingehende Nachrichten liest, einordnet und Antworten vorbereitet. Für kleine Unternehmen funktioniert ein Drei-Stufen-Modell am besten: erst klassifizieren und zusammenfassen, dann Entwürfe zur Freigabe, und nur für eng definierte Standardfälle eine automatische Antwort. Technisch geht das mit Copilot in Outlook, Gemini in Gmail oder einer eigenen Lösung mit n8n oder Make. Die Grundlage ist immer eine gepflegte Wissensbasis, und vor dem Start müssen Auftragsverarbeitungsvertrag, Serverstandort und Transparenz geklärt sein.

## Warum E-Mail der beste Startpunkt für KI im Betrieb ist

Im Postfach versickert in fast jedem kleinen Unternehmen Zeit: lesen, Preisliste suchen, in den Kalender schauen, formulieren, noch mal lesen. Bei fünf Anfragen am Tag ist das lästig. Bei dreißig wird es zum Engpass, und die wirklich wichtige Anfrage geht zwischen Newsletter-Abmeldungen und Lieferantenwerbung unter.

Gleichzeitig ist das Postfach ein dankbarer Einstieg. Du siehst das Ergebnis sofort und musst keine Software umbauen. Und weil jede Antwort erst mal über deinen Tisch geht, bleibt die Entscheidung bei dir.

Ein Nischenthema ist das nicht mehr. Laut einer [Bitkom-Umfrage vom März 2026](https://www.bitkom.org/Presse/Presseinformation/Digitalisierung-der-Wirtschaft-Fast-jedes-Unternehmen-beschaeftigt-sich-mit-KI) setzen 41 % der Unternehmen ab 20 Beschäftigten KI ein, ein Jahr zuvor waren es 17 %. Und im ausführlichen [Bitkom-Studienbericht zu Künstlicher Intelligenz](https://www.bitkom.org/sites/main/files/2026-02/bitkom-studienbericht-ki.pdf) nennen die Firmen, die KI nutzen, den Kundenkontakt als häufigsten Einsatzbereich.

## Was ein KI-E-Mail-Assistent konkret leistet

Ein KI-E-Mail-Assistent arbeitet im Hintergrund, direkt in deinem Postfach. Mit dem Chatbot auf der Website hat er erst mal wenig zu tun. Er übernimmt drei Aufgaben, die du einzeln einschalten kannst:

1. **Lesen und einordnen.** Ist das eine Angebotsanfrage, eine Terminfrage, eine Reklamation, eine Bewerbung oder Werbung? Wie dringend ist es?
2. **Zusammenfassen.** Lange Mails mit drei Anhängen und einer Vorgeschichte werden zu zwei, drei Sätzen: Wer will was bis wann?
3. **Antworten vorbereiten.** Auf Basis deiner Infos zu Leistungen, Preisen und Abläufen entsteht ein Entwurf in deinem Tonfall.

Anders als ein Autoresponder, der jedem denselben Text schickt, versteht die KI, worum es in der Nachricht geht. Genau deshalb braucht sie Leitplanken, denn ein Sprachmodell formuliert im Zweifel auch dann flüssig, wenn es die Antwort gar nicht kennt.

Wenn du eher an einen Assistenten direkt auf der Website denkst, der Besuchern live antwortet, lohnt sich ein Blick in unseren [Guide zu KI-Chatbots für Unternehmen](/blog/ki-chatbots-fuer-unternehmen-2026-der-ultimative-guide/). Chatbot und Postfach können später dieselbe Wissensbasis nutzen.

## Das Stufenmodell: Wie du E-Mail-Anfragen mit KI beantworten kannst, ohne die Kontrolle abzugeben

Statt sofort alles zu automatisieren, baust du das System in drei Stufen auf. Jede Stufe bringt für sich schon Nutzen, und du gehst erst weiter, wenn die vorherige zuverlässig funktioniert.

![Ablaufgrafik: E-Mail-Anfragen mit KI beantworten im Drei-Stufen-Modell von der Einordnung bis zur automatischen Antwort](/uploads/blog/e-mail-anfragen-mit-ki-beantworten/stufenmodell-ki-e-mail-assistent.webp)

### Stufe 1: Klassifizieren und zusammenfassen

In der ersten Stufe schreibt die KI noch keine einzige Antwort. Sie liest jede eingehende Mail und vergibt ein Label, etwa „Angebotsanfrage", „Termin", „Reklamation", „Rechnung", „Bewerbung" oder „Werbung". Dazu kommen eine Priorität und eine Kurzfassung.

Ein Handwerksbetrieb sieht morgens auf einen Blick: drei neue Angebotsanfragen, eine dringende Reklamation, zwei Terminverschiebungen, der Rest kann warten. Nebenbei siehst du, welche Anfragen wie oft vorkommen, und weißt später, was sich automatisieren lässt.

Das Risiko ist gering. Sortiert die KI falsch ein, landet eine Mail im falschen Ordner, aber niemand bekommt eine falsche Antwort.

### Stufe 2: Antwortentwurf zur Freigabe

In der zweiten Stufe formuliert die KI zu jeder relevanten Anfrage einen Entwurf. Der liegt im Postfach oder in einem Freigabe-Kanal bereit, ein Mensch liest ihn, passt ihn an und schickt ihn ab. Man nennt das auch „Human in the Loop".

Hier entsteht der eigentliche Zeitgewinn, denn du prüfst einen Vorschlag, statt bei null anzufangen. Bei Routinefragen ist der oft fast fertig, bei kniffligen Anfragen wenigstens ein brauchbarer Anfang. Wichtig ist, dass sich der Entwurf auf deine eigenen Inhalte stützt und nicht auf das Allgemeinwissen des Modells.

### Stufe 3: Automatische Antwort nur für klar definierte Standardfälle

Erst in der dritten Stufe schickt das System Antworten ohne menschliche Freigabe, und zwar nur für Fälle, die du vorher schriftlich festgelegt hast. Typische Kandidaten sind:

- Öffnungszeiten, Anfahrt, Erreichbarkeit: Die Antwort steht fest und ändert sich selten.
- Terminbestätigungen, wenn der Termin bereits in einem Buchungssystem steht und die Mail nur bestätigt, was dort eingetragen ist.
- Eingangsbestätigungen mit Inhalt. Nicht „Wir haben deine Nachricht erhalten", sondern: Wir haben deine Anfrage zur Dachrinnenreinigung erhalten, für ein Angebot brauchen wir noch Fotos und die ungefähre Länge, du hörst bis Donnerstag von uns.

So eine Eingangsbestätigung fragt fehlende Informationen gleich mit ab und spart eine komplette Rückfrage-Runde. Tabu für die Automatik ist dagegen alles mit Preisen, Zusagen, Beschwerden, rechtlichen Fragen oder Gesundheitsdaten.

## Welche Anfrage in welche Stufe gehört

Die Grenze zwischen Entwurf und Automatik ist die wichtigste Entscheidung im Projekt. Die Faustregel: Je größer der Schaden einer falschen Antwort, desto mehr Mensch gehört dazwischen.

![Entscheidungshilfe Kontaktformular Auto-Antwort mit KI: welche Anfragen automatisch, als Entwurf oder nur vom Menschen beantwortet werden](/uploads/blog/e-mail-anfragen-mit-ki-beantworten/ampel-e-mails-automatisch-beantworten-ki.webp)

Ein Beispiel aus einer Arztpraxis: Die Frage nach den Öffnungszeiten am Brückentag darf automatisch beantwortet werden. Die Bitte um Befundübermittlung oder eine Frage zu Beschwerden geht dagegen direkt an das Praxisteam, ohne Umweg über einen KI-Dienst, für den kein passender Vertrag besteht. Bei einem Onlineshop dürfen Fragen zum Versandstatus automatisiert laufen, eine Reklamation mit Foto vom kaputten Paket bekommt einen Entwurf, und die Drohung mit dem Anwalt landet sofort bei der Geschäftsführung.

## Die Wissensbasis: Woher die KI weiß, was ihr anbietet

Die Wissensbasis ist eine Sammlung deiner verbindlichen Inhalte, auf die das System bei jedem Entwurf zugreift. Für die meisten kleinen Unternehmen reicht ein überschaubarer Satz:

- FAQ mit den 20 bis 30 häufigsten Fragen und euren abgestimmten Antworten
- Leistungsbeschreibungen: was ihr macht und was ihr ausdrücklich nicht macht
- Preisrahmen, sofern ihr sie öffentlich kommunizieren wollt, mit dem Hinweis, wann ein individuelles Angebot nötig ist
- Abläufe: Wie läuft eine Terminvereinbarung, welche Unterlagen braucht ihr, wie lange dauert ein Angebot?
- Tonalität: Duzt oder siezt ihr? Wie unterschreibt ihr? Welche Formulierungen sind tabu?

Halte diese Inhalte in einem Dokument oder Ordner, den eine Person verantwortet. Wenn sich ein Preis ändert, muss er an genau einer Stelle angepasst werden. Wie man Unternehmenswissen grundsätzlich KI-tauglich aufbereitet, haben wir im Beitrag zum [KI-Wissensmanagement](/blog/ki-wissensmanagement-unternehmen-2026/) beschrieben.

## Technische Wege: Copilot, Gemini oder eigene Lösung

Für kleine Betriebe gibt es drei realistische Wege. Welcher passt, hängt vor allem davon ab, wo dein Postfach heute liegt.

### Outlook und Microsoft 365 mit Copilot

Wer ohnehin mit Microsoft 365 arbeitet, bekommt mit Copilot Funktionen direkt in Outlook: Mail-Verläufe zusammenfassen und aus einer kurzen Anweisung Entwürfe erzeugen, deren Ton und Länge du anpassen kannst. Laut der [Microsoft-Hilfe zu Copilot in Outlook](https://support.microsoft.com/office/draft-an-outlook-email-message-with-copilot-3eb1d053-89b8-491c-8a6e-746015238d9b) übernimmst du den Entwurf bewusst mit „Behalten", bearbeitest ihn und schickst ihn selbst ab. Das ist im Kern Stufe 2.

Wichtig für viele kleine Firmen: Microsoft unterstützt dort Geschäfts- und Schulkonten sowie Microsoft-Konten wie outlook.com oder hotmail.com, nicht aber Drittanbieter-Konten wie Gmail, Yahoo oder iCloud. Liegt dein info@-Postfach bei einem Webhoster und ist nur per IMAP in Outlook eingebunden, prüfe also vorher, ob Copilot dort überhaupt greift.

Eine eigenständige Automatik, die Mails nach Regeln beantwortet, bringt Copilot in Outlook nicht mit. Für Stufe 3 brauchst du zusätzliche Bausteine wie Power Automate oder eine externe Lösung.

### Gmail und Google Workspace mit Gemini

Bei Google Workspace ist Gemini in Gmail in den Business-Tarifen enthalten. Google beschreibt die Funktion als Hilfe beim Finden, Zusammenfassen und Schreiben von E-Mails. Auch hier klickt am Ende ein Mensch auf „Senden". Für ein kleines Team, das ohnehin auf Google setzt, ist das der einfachste Einstieg in Stufe 1 und 2, weil keine zusätzliche Lizenz nötig ist.

### Eigene Lösung mit n8n oder Make

Am flexibelsten ist ein eigener Workflow. Ein Automatisierungswerkzeug wie n8n oder Make holt neue Mails per IMAP ab, schickt Text und Wissensbasis an ein KI-Modell, schreibt das Ergebnis zurück und versendet bei freigegebenen Standardfällen die Antwort per SMTP. n8n bringt dafür den Baustein „Email Trigger (IMAP)" mit, der neue Nachrichten aus einem bestimmten Ordner abholt.

Der Vorteil: Du bestimmst jede Regel selbst, schickst Entwürfe etwa in einen Teams- oder Slack-Kanal zur Freigabe, legst Anfragen direkt im CRM an und eskalierst bei bestimmten Stichworten sofort. Für eine KI-Auto-Antwort auf das Kontaktformular ist das meist der sauberste Weg, weil das Formular ohnehin strukturierte Felder liefert.

Der Haken: Jemand muss den Workflow aufbauen und pflegen. Ob dafür n8n, Make oder doch Zapier besser zu deinem Betrieb passt, klärt unser [Vergleich der Automatisierungstools n8n, Make und Zapier](/blog/n8n-make-zapier-vergleich-2026/). Wie solche Abläufe grundsätzlich funktionieren, zeigt der Beitrag zur [n8n- und WordPress-Automatisierung](/blog/n8n-wordpress-automatisierung/).

| Weg | Gut für | Stufen | Stärken | Grenzen |
|---|---|---|---|---|
| Copilot in Outlook | Teams mit Microsoft 365 und Exchange-Postfach | 1 und 2 | direkt im gewohnten Postfach, kein Zusatztool | Zusatzlizenz pro Nutzer, Automatik nur mit weiteren Bausteinen |
| Gemini in Gmail | Teams mit Google Workspace | 1 und 2 | in Business-Tarifen enthalten, sofort nutzbar | wenig Steuerung über Regeln und Wissensbasis |
| n8n oder Make mit KI-Modell | individuelle Abläufe, Kontaktformulare, Hoster-Postfächer | 1, 2 und 3 | volle Kontrolle, eigene Wissensbasis, Eskalationsregeln | Einrichtung und Pflege nötig |

## Was kostet ein KI-E-Mail-Assistent ungefähr?

Die Übersicht gibt grobe Orientierung (Stand September 2026). Preise ändern sich regelmäßig, prüfe vor einer Entscheidung die aktuelle Preisseite.

| Variante | Laufende Kosten (Richtwert) | Was zusätzlich anfällt |
|---|---|---|
| Microsoft 365 Copilot Business | regulär 21 US-Dollar pro Nutzer und Monat bei Jahreszahlung, zeitweise als Aktion 18 US-Dollar | Microsoft-365-Grundlizenz, Einarbeitung |
| Google Workspace Business Standard | rund 13,60 € netto pro Nutzer und Monat bei Jahresvertrag, Gemini in Gmail enthalten | Umzug des Postfachs, falls noch nicht bei Google |
| n8n Cloud Starter | ab 20 € pro Monat bei jährlicher Zahlung, 2.500 Workflow-Ausführungen | KI-Modell nach Verbrauch, Einrichtung |
| n8n selbst gehostet | Community-Version für interne Nutzung kostenlos | eigener Server, Wartung, Updates, KI-Modell nach Verbrauch |

Lizenzen kosten pro Person, der Eigenbau eher pro Postfach und Menge. Für ein Team aus fünf Leuten, das gemeinsam ein info@-Postfach bearbeitet, kann der Eigenbau deshalb günstiger sein, während ein Einzelunternehmer mit Google Workspace oft schon alles Nötige hat.

Rechne bei der eigenen Lösung auch die ersten zwei bis drei Wochen ein, in denen ihr Entwürfe gegenlest und Regeln nachschärft.

## Spielregeln, bevor das erste Postfach angeschlossen wird

Technik ist schnell eingerichtet. Was danach über die Qualität entscheidet, sind ein paar Regeln, die ihr vorher schriftlich festhaltet. Diese haben sich in der Praxis bewährt:

**Tonalität festlegen.** Gib dem System Beispiele für gute Antworten aus eurem Alltag. Zwei, drei echte Mails, die ihr gelungen findet, wirken besser als jede abstrakte Beschreibung.

**Keine Preiszusagen ohne Freigabe.** Die KI darf Preisrahmen aus der Wissensbasis nennen, aber kein verbindliches Angebot formulieren. „Ein genaues Angebot erstellen wir, sobald wir die Fotos gesehen haben" ist in Ordnung. „Das kostet 480 Euro" ist es nicht.

**Eskalation definieren.** Lege fest, bei welchen Signalen eine Mail sofort an einen Menschen geht: Beschwerde, Kündigung, Anwalt, Frist, Unfall, Gesundheit, ein wichtiger Bestandskunde. Lieber zu viel eskalieren als zu wenig.

**Halluzinationen vermeiden.** Sprachmodelle erfinden im Zweifel plausible Antworten. Das Gegenmittel: Die KI darf nur auf Basis der Wissensbasis antworten und muss fehlende Informationen ausdrücklich markieren, damit ein Mensch an dieser Stelle ergänzt. „Wir klären das und melden uns" ist immer besser als eine erfundene Lieferzeit.

**Keine Anhänge blind verarbeiten.** Rechnungen, Ausweise oder Atteste gehören nicht ungeprüft in einen KI-Dienst.

## Datenschutz und AI Act: Was du klären musst

E-Mails enthalten personenbezogene Daten. Bevor du Anfragen durch einen KI-Dienst schickst, kläre vier Punkte.

**Auftragsverarbeitungsvertrag (AV-Vertrag).** Verarbeitet ein externer Anbieter die Mails für dich, brauchst du nach Art. 28 DSGVO einen Vertrag zur Auftragsverarbeitung. Bei Microsoft 365 und Google Workspace ist das Teil der Geschäftsbedingungen für Firmenkunden. Bei einer eigenen Lösung brauchst du ihn für jeden Dienst in der Kette: Automatisierungsplattform, KI-Modell, gegebenenfalls Hosting.

**Serverstandort und Drittlandtransfer.** Prüfe, wo die Daten verarbeitet werden. Eine selbst gehostete n8n-Instanz auf einem Server in Deutschland nimmt zumindest die Automatisierungsschicht aus dieser Frage heraus.

**Keine sensiblen Daten an Dienste ohne Vertrag.** Kostenlose KI-Chats aus dem Browser gehören nicht in den Mail-Workflow. Das gilt besonders für Gesundheitsdaten, Bankverbindungen und alles, was unter das Berufsgeheimnis fällt.

**Transparenz.** Ergänze deine Datenschutzerklärung um die KI-gestützte Bearbeitung von Anfragen, und sag bei automatischen Antworten offen, dass sie automatisch erstellt wurden.

Damit sind wir beim AI Act. Seit dem 2. August 2026 gelten die Transparenzpflichten aus [Artikel 50 der KI-Verordnung](https://www.artificialintelligenceact.eu/article/50/). Nach Absatz 1 müssen Anbieter von KI-Systemen, die direkt mit Menschen interagieren, diese Systeme so gestalten, dass die Personen erfahren, dass sie es mit einer KI zu tun haben. Ausgenommen ist, was aus dem Zusammenhang offensichtlich ist. Ob eine einzelne automatisch versendete E-Mail darunter fällt, ist noch nicht abschließend geklärt, und dieser Absatz richtet sich zunächst an die Anbieter solcher Systeme.

Unsere Empfehlung ist pragmatisch: Kennzeichne Antworten aus Stufe 3 mit einem kurzen, freundlichen Satz, etwa „Diese Nachricht wurde automatisch erstellt. Wenn du Fragen hast, antworte einfach, dann meldet sich jemand aus unserem Team." Das kostet dich einen Satz und nimmt dem Kunden das ungute Gefühl, heimlich mit einer Maschine zu schreiben. Wie solche Hinweise auf der Website und in der Kommunikation konkret aussehen können, zeigt unser Beitrag zur [KI-Kennzeichnungspflicht auf Websites](/blog/ki-kennzeichnungspflicht-website-2026/). Entwürfe, die ein Mensch prüft und abschickt, sind dagegen deine eigene Antwort. Einen breiteren Überblick über die Pflichten für kleine Betriebe findest du in unserem Beitrag zum [EU AI Act für KMU](/blog/eu-ai-act-kmu-2026-was-jetzt-gilt/), die Datenschutzseite im Leitfaden [KI datenschutzkonform einsetzen](/blog/ki-datenschutzkonform-einsetzen/).

## Woran du merkst, ob der Assistent wirklich hilft

Miss vor dem Start zwei, drei Wochen lang ein paar einfache Werte, sonst weißt du später nicht, ob sich der Aufwand gelohnt hat. Eine Strichliste oder ein Export aus dem Postfach reicht.

| Kennzahl | Was sie zeigt | So misst du sie |
|---|---|---|
| Erste Antwortzeit | Wie lange wartet ein Interessent auf eine Reaktion? | Zeit zwischen Eingang und erster Antwort, als Durchschnitt pro Woche |
| Bearbeitungszeit pro Mail | Wie viel Arbeit steckt in einer Antwort? | Stichprobe: 20 Mails mit Stoppuhr, vorher und nachher |
| Anteil übernommener Entwürfe | Wie gut passen die Vorschläge? | Entwürfe ohne oder mit kleinen Änderungen geteilt durch alle Entwürfe |
| Rückfragen-Quote | Fehlen in Antworten Informationen? | Anteil der Vorgänge, bei denen eine zweite Runde nötig war |
| Eskalationen | Greifen die Sicherheitsregeln? | Anzahl der Mails, die korrekt an einen Menschen gingen |

Der Anteil übernommener Entwürfe ist die ehrlichste Zahl. Wenn ihr fast jeden Entwurf umschreibt, liegt das meist an einer lückenhaften Wissensbasis oder an fehlenden Beispielen für den Tonfall, selten am Modell selbst.

## Typische Fehler beim Einstieg

Die meisten Stolpersteine sehen wir immer wieder, und fast alle lassen sich vermeiden. Der Klassiker ist, am ersten Tag die automatische Antwort einzuschalten. Meist geht dann schon in der ersten Woche eine peinliche Mail raus. Fast genauso oft fehlt ein Verantwortlicher: Irgendwer muss Regeln pflegen, Preise aktualisieren und auffällige Entwürfe auswerten, sonst verwildert das System nach ein paar Monaten. Und den AV-Vertrag erst anzuschauen, wenn der Workflow schon läuft, ist zu spät. Kläre ihn, bevor die erste echte Kundenmail durch das System geht.

## So startest du in vier Wochen

Ein Monat reicht für einen soliden Start. Woche 1: Ausgangswerte messen, häufigste Fragen sammeln. Woche 2: Wissensbasis aufbauen, Regeln für Tonalität, Preise und Eskalation festlegen. Woche 3: Stufe 1 läuft, die KI sortiert und fasst zusammen. Woche 4: Die Entwürfe kommen dazu. Stufe 3 nimmst du dir erst vor, wenn die Entwürfe über mehrere Wochen zuverlässig passen, und dann zuerst für einen einzigen Standardfall.

## Fazit: Erst sortieren, dann schreiben, dann automatisieren

E-Mail-Anfragen mit KI beantworten heißt nicht, das Postfach einer Maschine zu überlassen. Der größte Nutzen entsteht in den ersten beiden Stufen: Die KI ordnet ein, fasst zusammen und schreibt vor, und ihr behaltet die Entscheidung. Automatische Antworten bleiben eng umrissenen, gekennzeichneten Fällen vorbehalten. Fang klein an, mit einem Postfach und ein paar Wochen Sortieren. Der Montagmorgen fühlt sich danach anders an. Statt dich durch den Stapel zu wühlen, siehst du zuerst die Anfragen, die wirklich zählen.

Wenn du für deinen Betrieb herausfinden willst, welcher Weg passt und wie ein sicherer Start aussieht, unterstützen wir dich im Rahmen unserer [Digitalisierungsberatung](/leistungen/digitalisierungsberatung/), von der Auswahl des Werkzeugs bis zum fertigen Workflow. Schreib uns einfach über die [Kontaktseite](/kontakt/).

## Häufige Fragen (FAQ)

<details>
<summary>Kann man E-Mail-Anfragen mit KI beantworten, ohne dass Kunden es merken?</summary>
<p>Entwürfe, die ein Mensch prüft und selbst abschickt, sind deine eigene Antwort. Bei vollautomatischen Antworten empfehlen wir einen kurzen Hinweis, dass die Nachricht automatisch erstellt wurde. Das schafft Vertrauen und passt zu den <strong>Transparenzpflichten aus Artikel 50 des AI Act</strong>.</p>
</details>

<details>
<summary>Welche E-Mails darf eine KI automatisch beantworten?</summary>
<p>Nur klar definierte Standardfälle mit geringem Risiko, zum Beispiel Öffnungszeiten, Anfahrt, Terminbestätigungen aus einem Buchungssystem und Eingangsbestätigungen mit konkretem nächsten Schritt. <strong>Preise, Zusagen, Beschwerden, rechtliche Fragen und Gesundheitsdaten</strong> gehören immer zu einem Menschen.</p>
</details>

<details>
<summary>Braucht man für einen KI-E-Mail-Assistenten einen AV-Vertrag?</summary>
<p>Ja, sobald ein externer Dienst die Mails mit personenbezogenen Daten verarbeitet, brauchst du nach Art. 28 DSGVO einen Vertrag zur Auftragsverarbeitung. Bei einer eigenen Lösung gilt das für jeden Dienst in der Kette, also Automatisierungsplattform, KI-Modell und Hosting.</p>
</details>

<details>
<summary>Funktioniert Copilot in Outlook auch mit einem Postfach beim Webhoster?</summary>
<p>Das solltest du vorher prüfen. Microsoft nennt Geschäfts- und Schulkonten sowie Microsoft-Konten als unterstützt, Drittanbieter-Konten wie Gmail, Yahoo oder iCloud dagegen nicht. Ein per IMAP eingebundenes Hoster-Postfach ist oft ein Fall für eine eigene Lösung mit <a href="/blog/n8n-wordpress-automatisierung/">n8n</a> oder Make.</p>
</details>

<details>
<summary>Wie lässt sich verhindern, dass die KI falsche Antworten erfindet?</summary>
<p>Lass die KI nur auf Basis einer gepflegten Wissensbasis mit FAQ, Leistungen und Preisrahmen antworten und weise sie an, fehlende Informationen offen zu markieren statt zu raten. Dazu kommen klare Eskalationsregeln und in der Anfangszeit eine Freigabe jedes Entwurfs durch einen Menschen.</p>
</details>
