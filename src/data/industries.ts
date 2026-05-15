/**
 * Branchen-Landingpages unter /branchen/.
 *
 * Strategie: dünne 9 Stadt-Pages × 4 Branchen-Pages = 13 Local-SEO-Pages,
 * die alle unter dem LocalBusiness-Schema verlinkt sind. Branchen-Pages
 * sind nicht stadt-gebunden, sondern thematisch — sie fangen Long-Tails
 * wie „Webdesign für Handwerker“, „Praxis-Website Schaumburg“,
 * „Vereins-Homepage“ usw. ab, die mit reinen Stadt-Pages nicht erreichbar
 * sind. Wettbewerber wie ytpi.de und emit-solution.com dominieren dieses
 * Segment bisher — wir bringen Branchenseiten mit echtem Tiefen-Content.
 */
import type { FAQItem } from "../components/FAQ.astro";

export interface IndustrySection {
  /** Eyebrow über der Headline */
  eyebrow?: string;
  headline: string;
  /** HTML-Body (kann <p>, <strong>, <ul>, <a> enthalten) */
  body: string;
  /** Optionale Bullet-Liste rechts neben Body */
  bullets?: string[];
}

export interface IndustryPainPoint {
  /** Was der User typischerweise als Problem wahrnimmt */
  problem: string;
  /** Wie 2fox4 das löst */
  solution: string;
}

export interface Industry {
  /** URL-Slug, z. B. "aerzte" */
  slug: string;
  /** Anzeige-Name z. B. "Ärzte & Therapeuten" */
  name: string;
  /** Eyebrow auf der Detail-Seite */
  kicker: string;
  /** SEO Title (≤ 60 Zeichen) */
  seoTitle: string;
  /** SEO Description (≤ 155 Zeichen) */
  seoDescription: string;
  /** Hero-Titel: Zeile 1 weiß, Zeile 2 orange */
  heroTitleLine1: string;
  heroTitleLine2: string;
  /** Hero-Subtitle */
  heroSub: string;
  /** Card-Beschreibung für die Hub-Übersicht */
  cardSummary: string;
  /** Inline-SVG-Path für das Icon */
  iconSvg: string;
  /** Content-Sections (typischerweise 2-3) */
  sections: IndustrySection[];
  /** Typische Probleme + unsere Lösung — gut für Conversion */
  painPoints: IndustryPainPoint[];
  /** Branchen-spezifische FAQs */
  faq: FAQItem[];
}

export const industries: Industry[] = [
  // ===================================================================
  // 1. ÄRZTE / THERAPEUTEN / HEILPRAKTIKER
  // ===================================================================
  {
    slug: "aerzte",
    name: "Ärzte, Therapeuten & Heilberufe",
    kicker: "Branche · Heilberufe",
    seoTitle: "Praxis-Website für Ärzte · 2FOX4 Sachsenhagen",
    seoDescription:
      "Websites für Arztpraxen, Therapeuten, Heilpraktiker: DSGVO-konform, mit Online-Terminbuchung. Heilmittelwerbegesetz-sicher. Aus Sachsenhagen.",
    heroTitleLine1: "Websites für Heilberufe.",
    heroTitleLine2: "Diskret, DSGVO-fest, einladend.",
    heroSub:
      "Praxis-Websites haben eine eigene Logik: Du musst Vertrauen aufbauen, ohne werblich zu wirken, Termine möglich machen, ohne den Heilmittelwerbegesetz-Rahmen zu reißen, und dabei modern aussehen, ohne wie eine Lifestyle-Marke daherzukommen. Wir bauen genau das — für Hausärzte, Therapeuten, Heilpraktiker, Physiotherapeuten und Heilberufe rund um Schaumburg, Hannover, Hameln und das Weserbergland.",
    cardSummary:
      "Praxis-Websites, die Patienten finden, statt sie zu überfordern. Mit Online-Termin, DSGVO-Anfrage-Formular und sauberem Heilmittelwerbegesetz-Rahmen.",
    iconSvg: `<path d="M12 8v8M8 12h8"/><circle cx="12" cy="12" r="10"/>`,
    sections: [
      {
        eyebrow: "Was eine Praxis-Website wirklich leisten muss",
        headline: "Drei Aufgaben — alle gleichzeitig.",
        body: `<p><strong>1. Vertrauen vermitteln, bevor der Patient den Hörer in die Hand nimmt.</strong> Über 60 % der Patienten googeln die Praxis vor dem Anruf. Was sie finden, entscheidet, ob sie sich melden — Bilder, Team-Kurzporträts, Lebensläufe, Praxisräume, Schwerpunkte.</p>
<p><strong>2. Den Anruf vermeiden.</strong> Eine gute Praxis-Website beantwortet 80 % der Standard-Fragen so, dass die Sprechstundenhilfe entlastet wird: Öffnungszeiten, Krankenkassen, Privatleistungen, Anfahrt, Parkplätze, Aufnahmebedingungen für Neupatienten. Das macht die Praxis effizienter — und Patienten zufriedener.</p>
<p><strong>3. Termine erleichtern.</strong> Online-Terminbuchung via Doctolib, Jameda, Samedi oder eigene Lösung. Oder zumindest ein DSGVO-konformes Kontaktformular, das ohne Telefon-Hürde funktioniert.</p>`,
        bullets: [
          "Team-Vorstellung mit Bildern + Qualifikationen",
          "Behandlungsschwerpunkte sauber strukturiert",
          "Krankenkassen-Übersicht (GKV / PKV / Selbstzahler)",
          "Online-Terminbuchung oder DSGVO-Formular",
          "Anfahrtskarte + Parkplatz-Info",
          "Notfall-Nummer & Vertretungsregelung",
        ],
      },
      {
        eyebrow: "Heilmittelwerbegesetz",
        headline: "Was du auf der Praxis-Website NICHT schreiben darfst.",
        body: `<p>Das Heilmittelwerbegesetz (HWG) macht aus jeder Praxis-Website ein juristisches Minenfeld. Verboten sind unter anderem:</p>
<ul>
<li>Vorher-Nachher-Bilder bei operativen Eingriffen oder ästhetischen Behandlungen (§ 11 Abs. 1 Nr. 5 HWG)</li>
<li>Werbeaussagen zur garantierten Heilung oder Verbesserung („wird Sie kurieren“, „garantierter Erfolg“)</li>
<li>Persönliche Patienten-Erfolgsstorys mit Krankheitsverlauf</li>
<li>Aussagen, die Angst erzeugen, um eine Behandlung zu verkaufen</li>
</ul>
<p>Wir kennen die Spielregeln und formulieren mit dir gemeinsam — so dass deine Website rechtssicher bleibt und trotzdem überzeugt. Bei Bedarf binden wir auch einen Medizinrechtler ein.</p>`,
      },
    ],
    painPoints: [
      {
        problem: "Meine bisherige Website sieht aus wie 2008 und hat keine Online-Termine.",
        solution: "Wir bauen eine moderne, mobile Praxis-Website inkl. Anbindung an Doctolib oder Samedi (oder eigene Buchungslösung), die in ~4 Wochen live gehen kann.",
      },
      {
        problem: "Ich habe Angst vor DSGVO-Abmahnungen bei Praxis-Websites.",
        solution: "Wir setzen DSGVO-konforme Formulare, AVV mit allen Dienstleistern und eine wasserdichte Datenschutzerklärung auf — Standard bei jedem unserer Praxis-Projekte.",
      },
      {
        problem: "Patienten rufen ständig wegen Standard-Fragen an, die auf der Website stehen müssten.",
        solution: "Eine gute FAQ-Sektion, klare Öffnungszeiten und Krankenkassen-Übersicht reduzieren Standard-Anrufe um 30-50 % laut Erfahrungswerten unserer Praxis-Kunden.",
      },
    ],
    faq: [
      {
        question: "Was kostet eine Praxis-Website?",
        answerHtml: `Eine moderne Praxis-Website mit Online-Termin, Team-Vorstellung und Behandlungs-Schwerpunkten liegt typischerweise zwischen <strong>2.500 € und 4.500 €</strong>. Reine Visitenkarten-Sites ohne Buchung gehen ab <strong>1.500 €</strong>. Laufende Wartung (Sicherheits-Updates, Backups, kleine Inhalts-Änderungen) ab <strong>45 € / Monat</strong>.`,
      },
      {
        question: "Bindet ihr Doctolib, Jameda oder Samedi an?",
        answerHtml: `Ja, alle drei. Doctolib und Samedi sind technisch unproblematisch — die liefern Embed-Codes, die wir DSGVO-konform integrieren (Consent-Hook erst nach Klick). Jameda haben wir auch schon angebunden, aber dort ist die Bewertungsfunktion ein zweischneidiges Schwert; das besprechen wir vorab.`,
      },
      {
        question: "Übernehmt ihr auch die rechtssichere Praxis-Datenschutzerklärung?",
        answerHtml: `Wir liefern eine fundierte Datenschutzerklärung mit, die auf Basis aktueller Rechtsprechung formuliert ist. Für die finale juristische Abnahme empfehlen wir aber, einen Medizinrechtler oder einen DSGVO-Anwalt drüber schauen zu lassen — wir kennen entsprechende Partner und können einen Kontakt vermitteln.`,
      },
      {
        question: "Bietet ihr einen Notfall-Kontakt für die Website-Wartung?",
        answerHtml: `Im Rahmen unserer Wartungs-Pakete bekommst du eine Reaktionszeit-Garantie von max. 4 Stunden während der Bürozeiten und am Wochenende eine separate Notfall-Nummer für „Website komplett offline“-Fälle. Für eine Arztpraxis ist Erreichbarkeit der Website oft genauso kritisch wie die der Praxis selbst.`,
      },
      {
        question: "Ist eure Lösung barrierefrei?",
        answerHtml: `Ja — alle unsere Websites werden nach WCAG 2.1 AA gebaut. Das ist nicht nur ethisch richtig, sondern auch SEO-relevant und seit dem BFSG (Barrierefreiheitsstärkungsgesetz) für viele Praxen rechtlich relevant. Wir haben sogar ein eigenes <a href="/wp-plugins/accessibility-suite/" class="text-[var(--color-accent)]">WordPress-Plugin zur Barrierefreiheit</a> entwickelt.`,
      },
    ],
  },

  // ===================================================================
  // 2. HANDWERK / BAUUNTERNEHMEN
  // ===================================================================
  {
    slug: "handwerk",
    name: "Handwerk & Bauunternehmen",
    kicker: "Branche · Handwerk",
    seoTitle: "Webdesign für Handwerker · 2FOX4 Schaumburg",
    seoDescription:
      "Websites für Handwerker, Bauunternehmen, Maler, Tischler, Elektriker, SHK. Mit Anfrage-Formular, Referenz-Galerie, Google-Maps-Pflege. Aus Sachsenhagen.",
    heroTitleLine1: "Websites für Handwerker,",
    heroTitleLine2: "die Aufträge bringen.",
    heroSub:
      "Im Handwerk hat sich in den letzten Jahren etwas verschoben: Aufträge kommen seltener vom Bekannten, häufiger über Google. Wer nicht in den Top 3 für „Maler Bückeburg“ oder „SHK-Notdienst Stadthagen“ auftaucht, verliert Aufträge an Konkurrenten — manchmal sogar an Plattformen wie MyHammer. Wir bauen Handwerks-Websites, die das Gegenteil bewirken: Anfragen rein, ohne dass du auf eine Plattform zahlen musst.",
    cardSummary:
      "Anfrage-starke Websites für Maler, Tischler, Elektriker, SHK, Bauunternehmen — mit Referenzen, klaren Leistungen und Google-Local-Pack-Optimierung.",
    iconSvg: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`,
    sections: [
      {
        eyebrow: "Was Handwerks-Websites brauchen",
        headline: "Anfragen statt Image. Vor-Ort-Bilder statt Stock-Photos.",
        body: `<p>Handwerks-Auftraggeber wollen schnell wissen: <strong>Macht der mein Projekt?</strong> Konkret heißt das, dass deine Website binnen 5 Sekunden zeigen muss: was du machst, in welcher Region, und wie man dich erreicht. Kein Marketing-Sprech, sondern Klartext: „Maler-Meister-Betrieb, Stadthagen, seit 1998, Fassaden + Innenanstrich, Anfrage in 24 h beantwortet.“</p>
<p>Dazu kommen <strong>echte Referenz-Fotos</strong> (keine Bildagentur-Bilder mit lächelnden Modellen in Bauhelmen), eine <strong>einfache Anfrage-Möglichkeit</strong> (Formular ODER WhatsApp ODER Anruf — Hauptsache niederschwellig) und eine <strong>klare Verortung</strong> (Google Maps, Anfahrt, Einzugsgebiet).</p>`,
        bullets: [
          "Foto-Galerie eigener Projekte (mit Vorher-Nachher)",
          "Leistungs-Übersicht klar strukturiert",
          "Einzugsgebiet auf Karte (z. B. „bis 30 km um Stadthagen“)",
          "Anfrage-Formular mit Foto-Upload",
          "WhatsApp-Button für direkte Kommunikation",
          "Notdienst-Hinweis (falls relevant) prominent",
          "Mitarbeiter-Vorstellung — Vertrauen ist enorm",
        ],
      },
      {
        eyebrow: "Lokale Sichtbarkeit",
        headline: "Google-Local-Pack: das wichtigste Tool für Handwerks-Marketing.",
        body: `<p>Wenn jemand „Elektriker Stadthagen“ googelt, erscheinen oben die <strong>drei lokalen Treffer im Local Pack</strong> mit Karte, Bewertungen und Öffnungszeiten. Wer da nicht steht, ist quasi unsichtbar — die Klick-Rate auf Position 4+ ist im lokalen Suchergebnis verschwindend gering.</p>
<p>Wir setzen für deinen Betrieb das Google Business Profile sauber auf, optimieren es laufend (Beiträge, Bilder, Q&A) und verlinken es mit deiner Website via LocalBusiness-Schema. Plus: wir helfen dir bei einer aktiven Bewertungs-Strategie — denn Bewertungen sind im Local Pack der Schlüssel-Hebel.</p>`,
      },
    ],
    painPoints: [
      {
        problem: "Auf Plattformen wie MyHammer zahle ich pro Lead 30–80 €, ohne sicher zu sein, ob ich den Auftrag kriege.",
        solution: "Eine eigene Website mit Google-Local-Pack-Ranking holt Anfragen, die nichts pro Lead kosten. Die Investition rechnet sich oft schon nach 5-10 abgeschlossenen Aufträgen.",
      },
      {
        problem: "Ich habe keine Zeit, ständig Fotos und Texte zu pflegen.",
        solution: "Wir setzen die Site einmal sauber auf und übernehmen die Pflege als Service: monatlich neue Projekt-Fotos, vierteljährlich SEO-Checks, jährlich Inhalts-Update. Ab ~80 € / Monat.",
      },
      {
        problem: "Meine alte Website ist langsam und sieht auf dem Handy schlecht aus.",
        solution: "Mobile sind ~70 % der Handwerks-Anfragen — Mobile-Optimierung ist kein nice-to-have. Wir bauen mobile-first, mit echten Core-Web-Vitals im grünen Bereich.",
      },
    ],
    faq: [
      {
        question: "Was kostet eine Handwerks-Website?",
        answerHtml: `Eine schlanke, schnelle Handwerks-Website mit Foto-Galerie, Leistungs-Übersicht und Anfrage-Formular liegt typischerweise zwischen <strong>1.500 € und 3.500 €</strong>. Komplett-Pakete inkl. Google-Business-Profil-Pflege, lokalem SEO und monatlichem Reporting ab <strong>2.500 €</strong> + monatlicher Wartung.`,
      },
      {
        question: "Helft ihr beim Aufbau des Google-Business-Profils?",
        answerHtml: `Ja — das ist Teil unserer Handwerks-Pakete. Wir richten das Google Business Profile ein (oder optimieren das bestehende), holen Bewertungen aktiv ein, posten regelmäßig Updates, beantworten Q&A und sorgen dafür, dass der Eintrag mit deiner Website über strukturierte Daten verknüpft ist.`,
      },
      {
        question: "Bietet ihr auch WhatsApp-Anbindung statt Kontaktformular?",
        answerHtml: `Ja — für viele Handwerker funktioniert WhatsApp besser als ein Formular: Kunden können ein Foto vom Schaden schicken, du antwortest mit einer schnellen Einschätzung, alles dokumentiert. Wir bauen WhatsApp-Buttons DSGVO-konform ein, mit klarer Aufklärung, dass die Kommunikation über Meta läuft.`,
      },
      {
        question: "Macht ihr auch Notdienst-spezifische Optimierung?",
        answerHtml: `Ja. Notdienst-Anfragen verhalten sich anders als reguläre: meist mobile, oft nachts, hohe Conversion-Rate. Wir bauen separate „Notdienst“-Landingpages mit direkter Anruf-Funktion, Standort-Erkennung und klarem Versprechen (z. B. „Heizungs-Notdienst Schaumburg · 24/7 erreichbar · in 60 Minuten vor Ort“). Spezifische SEO-Optimierung „Heizungs-Notdienst + Stadtname“ gibt's obendrauf.`,
      },
      {
        question: "Wie lange dauert eine Handwerks-Website-Umsetzung?",
        answerHtml: `Eine kompakte WordPress-Site ist in <strong>3-4 Wochen</strong> live, vorausgesetzt du lieferst Fotos und Inhalte zeitnah. Wenn wir die Fotos selber machen sollen (vor Ort bei dir im Betrieb, halber Tag), kommt eine Woche dazu. Komplexere Projekte mit mehreren Standorten oder spezifischen Funktionen 6-8 Wochen.`,
      },
    ],
  },

  // ===================================================================
  // 3. GASTRONOMIE / HOTELLERIE
  // ===================================================================
  {
    slug: "gastronomie",
    name: "Gastronomie, Hotels & Cafés",
    kicker: "Branche · Gastronomie",
    seoTitle: "Webdesign für Gastronomie · 2FOX4 Schaumburg",
    seoDescription:
      "Websites für Restaurants, Hotels, Cafés: Speisekarte, Tisch-Reservierung, Buchung, Anfahrt. Mobile-first, schnell, mit Google-Reviews-Anbindung. Aus Sachsenhagen.",
    heroTitleLine1: "Websites für Gastronomie,",
    heroTitleLine2: "die Tische und Zimmer füllen.",
    heroSub:
      "Gastronomie-Websites haben einen einzigen ehrlichen Auftrag: Reservierungen, Buchungen und Anfahrtsklicks erzeugen — und zwar auf dem Handy, das jemand in einem fremden Stadtkern hält. Wir bauen mobile-first, mit klaren Buchungs-Wegen, schnellen Karten-Embeds und Bildern, die den Besuch unwiderstehlich machen. Für Restaurants, Hotels, Cafés und Pensionen in Schaumburg, Hannover-Umland und Weserbergland.",
    cardSummary:
      "Restaurant- und Hotel-Websites mit klaren Buchungs- und Reservierungs-Wegen, schöner Bildsprache und Google-Reviews-Anbindung.",
    iconSvg: `<path d="M3 11l1-7h16l1 7M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8M9 11V4M15 11V4"/>`,
    sections: [
      {
        eyebrow: "Was eine Gastro-Website wirklich leisten muss",
        headline: "Vier kritische Klicks: Karte, Reservierung, Anfahrt, Bewertungen.",
        body: `<p>Bei Gastronomie zählt nicht „schöne Website“, sondern „funktionierender Funnel“. Wir messen den Erfolg in vier konkreten Aktionen, die ein Besucher machen kann — und wie schnell er sie macht:</p>
<p><strong>1. Speisekarte anschauen.</strong> Aktuell, mobiloptimiert, kein PDF-Download. Saisonal sortiert, mit Preisen, Allergenen, Veganen Markern. Bei Hotels: Zimmerübersicht inkl. Preisliste pro Saison.</p>
<p><strong>2. Reservieren / Buchen.</strong> Tisch- oder Zimmerbuchung in unter 3 Klicks. OpenTable, Quandoo, Booking.com, eigene Lösung. Plus Telefonnummer ein-Klick-erreichbar.</p>
<p><strong>3. Anfahrt erkennen.</strong> Google-Maps-Embed mit Pin, Adresse, „Route starten“-Button. Parkplatz-Info, ÖPNV.</p>
<p><strong>4. Bewertungen einsehen.</strong> Google-Reviews-Aggregate, prominent. Niemand bucht ein Hotel ohne Reviews zu checken — also zeig sie, statt sie zu verstecken.</p>`,
        bullets: [
          "Aktualisierte Speisekarte direkt im HTML (kein PDF)",
          "Reservierungs-Widget (OpenTable/Quandoo/Booking)",
          "Hero-Bilder professionell + saisonal wechselbar",
          "Google-Reviews-Aggregat eingebunden",
          "Anfahrtskarte + Parkplatz/ÖPNV-Hinweise",
          "Mehrsprachigkeit (DE/EN für Tourismus)",
          "Telefonnummer ein-Klick-erreichbar",
        ],
      },
      {
        eyebrow: "Tourismus-Sichtbarkeit",
        headline: "Wer Tagestouristen will, muss in Google Maps stehen.",
        body: `<p>Tagestouristen googeln direkt: „Restaurant Bückeburg“, „Café Stadthagen Altstadt“, „Hotel Steinhuder Meer“. Die Top-3 im Google-Local-Pack bekommen 70-80 % aller Klicks. Wer da nicht steht, sieht keine Anfrage.</p>
<p>Wir optimieren dein Google Business Profile mit professionellen Bildern, vollständigem Branchen-Eintrag, regelmäßigen Posts (Saison-Specials, Events), Q&A-Pflege und einer aktiven Bewertungs-Strategie. Zudem bauen wir die Website mit LocalBusiness- und Restaurant-/Hotel-Schema, damit Google die Daten direkt in Karten- und Suchergebnisse übernimmt.</p>`,
      },
    ],
    painPoints: [
      {
        problem: "Meine Speisekarte ist ein PDF, das niemand am Handy lesen kann.",
        solution: "Wir bauen die Karte direkt ins HTML mit responsivem Layout, Kategorien-Navigation, Allergen-Filter — und du kannst sie selbst in WordPress pflegen.",
      },
      {
        problem: "Ich bezahle Booking.com 15 % Provision für jede Hotelbuchung.",
        solution: "Mit einer eigenen Buchungslösung (z. B. Beds24, Cloudbeds, eigenes System) reduzierst du Direkt-Buchungen-Provisions auf 0-3 %. Investition rechnet sich oft in 6-12 Monaten.",
      },
      {
        problem: "Meine Website hat keine aktuellen Bilder, die letzten sind von 2019.",
        solution: "Wir organisieren professionelle Foto-Sessions (vor Ort, halber Tag, eigener Fotograf oder Partner) — Speisen, Räume, Außenansicht, Team. Bilder werden saisonal in der Website rotieren.",
      },
    ],
    faq: [
      {
        question: "Was kostet eine Gastronomie-Website?",
        answerHtml: `Eine schlanke Restaurant-Website mit Speisekarte, Reservierung und Anfahrtskarte liegt zwischen <strong>2.000 € und 4.000 €</strong>. Hotel-Websites mit eigener Buchungslösung und mehreren Sprachen <strong>4.000 € bis 8.000 €</strong>. Plus monatliche Wartung + Saison-Updates ab 70 € / Monat. Professionelle Foto-Session separat ab 500 €.`,
      },
      {
        question: "Bindet ihr OpenTable, Quandoo, Booking.com an?",
        answerHtml: `Ja. OpenTable und Quandoo sind technisch einfach (Widget-Embed, Consent-konform). Booking.com hat ein API-Channel-Management-System, das wir typischerweise mit Beds24 oder Cloudbeds koppeln. Direktbuchungen versus Plattformbuchungen kannst du dann steuern.`,
      },
      {
        question: "Macht ihr auch professionelle Foto-Sessions?",
        answerHtml: `Wir machen die Sessions nicht selbst, aber wir koordinieren sie mit einem unserer regionalen Foto-Partner aus Hannover oder Bielefeld. Vor-Ort-Tag, alle Räume, Speisen, Team — ab ca. 500-900 € all-in, alle Bilder lizenziert für deine Website + Social Media.`,
      },
      {
        question: "Helft ihr beim aktiven Reviews-Sammeln?",
        answerHtml: `Ja. Wir richten ein System ein, mit dem du nach jedem Gast (oder Hotel-Aufenthalt) automatisch eine freundliche Erinnerung mit dem Google-Bewertungslink schicken kannst — entweder per QR-Code auf der Quittung oder per E-Mail. Konversionsrate von „Gast“ zu „Bewertung“ steigt erfahrungsgemäß um 3-5x.`,
      },
      {
        question: "Wie schnell ist eine Gastro-Website auf dem Handy ladbar?",
        answerHtml: `Unser Ziel: Largest Contentful Paint unter 2 Sekunden, auch auf einem mittelmäßigen Handy bei mobilem Netz. Wir liefern echte Mobile-First-Sites, nicht „Desktop mit responsive draufgelegt“. Im Google PageSpeed Insights typischerweise 90+ Punkte mobile.`,
      },
    ],
  },

  // ===================================================================
  // 4. VEREINE / STIFTUNGEN / NGOs
  // ===================================================================
  {
    slug: "vereine",
    name: "Vereine & Gemeinnützige Organisationen",
    kicker: "Branche · Vereine",
    seoTitle: "Vereins-Website · 2FOX4 Sachsenhagen",
    seoDescription:
      "Websites für Vereine, Stiftungen, NGOs: Mitgliedergewinnung, Veranstaltungs-Kalender, Spenden, ehrenamtliche Pflege. Aus Sachsenhagen, oft förderfähig.",
    heroTitleLine1: "Vereins-Websites,",
    heroTitleLine2: "die ehrenamtlich gepflegt werden können.",
    heroSub:
      "Vereine haben besondere Anforderungen: Die Website muss von Ehrenamtlichen ohne IT-Hintergrund gepflegt werden können, sie muss Mitglieder gewinnen helfen, Veranstaltungen kommunizieren, Spenden ermöglichen — und sie darf nicht das ganze Vereinsbudget verschlingen. Wir bauen genau das. Renaissance-Verein Stadthagen, mehrere Sport-Vereine und Kulturinitiativen in der Region zählen zu unseren Kunden.",
    cardSummary:
      "Pflegeleichte Vereins-Websites mit Veranstaltungs-Kalender, Mitglieder-Bereich, Spenden-Anbindung — oft über DSEE oder andere Programme förderfähig.",
    iconSvg: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>`,
    sections: [
      {
        eyebrow: "Was eine Vereins-Website wirklich braucht",
        headline: "Pflegbar von Ehrenamtlichen — ohne IT-Studium.",
        body: `<p>Der häufigste Tod einer Vereins-Website: Die Webagentur hat etwas Komplexes gebaut, der ehrenamtliche Vorsitzende kann es nach 6 Monaten nicht mehr pflegen, die Veranstaltungen sind veraltet, niemand kommt. Wir bauen das Gegenteil.</p>
<p>Unsere Vereins-Sites haben drei Pfeiler: <strong>einfache Inhaltspflege</strong> über klare WordPress-Strukturen (so dass eine Veranstaltung in 5 Minuten eintragbar ist), <strong>Mitgliedergewinnung</strong> über klare Aufnahme-Formulare und Mitglieder-Vorteile-Beschreibungen, und <strong>Spenden-/Förder-Funktionalität</strong> über PayPal-, Giropay- oder Bank-Verlinkung (oder bei Bedarf Spenden-Plattformen wie betterplace.org).</p>`,
        bullets: [
          "Pflegeleichter Veranstaltungs-Kalender",
          "Mitglieder-Aufnahme-Formular",
          "Vorstands-Vorstellung mit Bildern",
          "Spenden-Anbindung (PayPal/Bank/Plattform)",
          "Newsletter-Anbindung (Mailchimp/Brevo)",
          "DSGVO-konform (oft mit ehrenamtlichem Datenschutzbeauftragten)",
          "Schulungs-Video für neue Vorstands-Mitglieder",
        ],
      },
      {
        eyebrow: "Förderung",
        headline: "Vereins-Websites sind oft förderfähig — wir helfen beim Antrag.",
        body: `<p>Viele Vereine wissen nicht: für die Digitalisierung der Vereinsarbeit gibt es Förderprogramme, die einen Teil der Website-Kosten übernehmen.</p>
<ul>
<li><strong>DSEE (Deutsche Stiftung für Engagement und Ehrenamt):</strong> Förderprogramme für digitale Vereinsarbeit, oft bis 5.000 € Pauschalbetrag.</li>
<li><strong>Land Niedersachsen — Ehrenamtsservicestelle:</strong> regionale Programme für Vereins-Digitalisierung.</li>
<li><strong>BAFA — Unternehmensberatung:</strong> für gemeinnützige Vereine mit wirtschaftlicher Tätigkeit teilweise zugänglich.</li>
<li><strong>Aktion Mensch / Aktion Mensch-Förderung:</strong> für inklusiv arbeitende Vereine.</li>
</ul>
<p>Wir kennen die Programme und helfen beim Antragstexte schreiben — kostenlos, weil wir uns über die Förderung mit-finanzieren.</p>`,
      },
    ],
    painPoints: [
      {
        problem: "Unsere Website ist von 2014 und niemand traut sich, sie anzufassen.",
        solution: "Wir bauen sie sauber neu auf moderner WordPress-Basis und schulen 1-2 Vorstands-Mitglieder so, dass Pflege keine Angst mehr macht. Inkl. Schulungs-Video für Nachfolge.",
      },
      {
        problem: "Wir haben kein Budget für teure Webagenturen.",
        solution: "Vereins-Pakete starten bei uns ab ~1.200 €. Plus: DSEE oder Land Niedersachsen fördern oft 50-80 % der Kosten — wir helfen beim Antrag.",
      },
      {
        problem: "Unsere Mitglieder sind gemischtes Alter, manche sehr digital-fern.",
        solution: "Wir bauen barrierearm — große Schriftgrößen, hoher Kontrast, klare Navigation. Plus: Print-Plakate mit QR-Code als Brücke für die Älteren.",
      },
    ],
    faq: [
      {
        question: "Was kostet eine Vereins-Website?",
        answerHtml: `Schlanke Vereins-Websites mit Veranstaltungs-Kalender, Vorstands-Seite und Mitglieder-Formular ab <strong>1.200 €</strong> (einmalig). Größere Sites mit Spenden-Anbindung und Mitglieder-Bereich <strong>2.000 € bis 3.500 €</strong>. Laufende Pflege optional ab <strong>30 € / Monat</strong> — viele Vereine pflegen aber selbst, nach unserer Schulung.`,
      },
      {
        question: "Helft ihr beim DSEE- oder Land-Niedersachsen-Förder-Antrag?",
        answerHtml: `Ja, kostenlos. Wir schreiben den Maßnahmen-Teil des Antrags (technische Beschreibung der Vereins-Website) und stellen das Kosten-Angebot bereit. Antrags-Erfolgsquote bei den Programmen liegt erfahrungsgemäß bei ~60-70 %. Bei DSEE „MikroProjekte“ sogar höher.`,
      },
      {
        question: "Können wir die Website nach dem Launch selbst pflegen?",
        answerHtml: `Genau das ist der Plan. Wir richten WordPress so ein, dass Veranstaltungen, Vorstands-Updates und Mitglieds-Aufnahmen in 5-10 Minuten machbar sind. Plus: wir liefern ein <strong>30-minütiges Schulungs-Video</strong> mit, das auch neue Vorstands-Mitglieder nach 5 Jahren noch verstehen.`,
      },
      {
        question: "Wir wollen Spenden online annehmen. Was empfehlt ihr?",
        answerHtml: `Drei gute Optionen: <strong>1) Eigene PayPal-Integration</strong> (einfach, kostenlos einrichten, ~2,5 % Gebühr) — gut für kleine Vereine. <strong>2) betterplace.org</strong> (sehr seriös, Spendenquittungen automatisch, ~3 % Gebühr) — gut für mittelgroße Vereine mit Förderambitionen. <strong>3) GLS-Bank-Spendenkonto + Direkt-IBAN</strong> — günstig, aber manuell. Wir besprechen, was zu eurer Vereins-Struktur passt.`,
      },
      {
        question: "Habt ihr Vereins-Referenzen aus der Region?",
        answerHtml: `Ja — unter anderem den <strong>Renaissance-Verein Stadthagen</strong>, der die Renaissance-Geschichte der Stadt lebendig hält. Weitere Vereins-Projekte unter <a href="/referenzen/" class="text-[var(--color-accent)]">/referenzen/</a>.`,
      },
    ],
  },
];

/** Hole eine Branche per Slug; wirft, wenn nicht gefunden. */
export function industryBySlug(slug: string): Industry {
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) throw new Error(`Industry not found: ${slug}`);
  return ind;
}
