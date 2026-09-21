/**
 * Referenz-Projekte für /referenzen/.
 * Kategorien: "websites" und "onlineshops" — der Filter auf der Übersichtsseite
 * basiert genau auf diesen beiden Werten.
 *
 * Reihenfolge: neueste zuerst.
 *
 * Klickbarkeit / Detail-Seiten:
 *   - Solange `featured: true` NICHT gesetzt ist, wird die Karte als
 *     reines Schaufenster-Tile gerendert (nicht klickbar, keine Detail-Seite).
 *   - Sobald eine Referenz auf `featured: true` gesetzt wird, MUSS sie auch
 *     `story` befüllen — dann generiert Astro automatisch eine Detail-Seite
 *     unter /referenzen/{slug}/ und die Karte wird klickbar.
 */

export type RefCategory = "websites" | "onlineshops";

/** Eine ausführliche Case-Study, optional je Referenz. */
export interface ReferenceStory {
  /** Kurzbeschreibung der Ausgangssituation, 1-3 Sätze */
  challenge: string;
  /** Was wurde gemacht, 1-3 Sätze */
  solution: string;
  /** Optional: ein-Satz-Ergebnis */
  outcome?: string;
  /** Leistungs-Bullets: z. B. ["Webdesign", "WordPress-Plugin", "Flyer", "Messestand"] */
  scope: string[];
  /** Optional: zusätzliche Bilder (volle URLs) — z. B. Flyer-Foto, Messestand */
  extraImages?: Array<{ src: string; alt: string; caption?: string }>;
  /** Optional: externe Live-URL der Kundenseite */
  liveUrl?: string;
}

export interface Reference {
  /** URL-Slug (für /referenzen/[slug]/) */
  slug: string;
  /** Kategorie für Filter */
  category: RefCategory;
  /** Anzeige in der URL-Bar des Monitor-Mockups */
  domain: string;
  /** Hintergrund-Screenshot */
  image: string;
  /** Optional: Mobil-Screenshot als Basis-Pfad OHNE Endung, z. B.
   *  "/images/referenzen/<slug>-mobile". Erwartet werden drei WebP-Größen
   *  daneben: -240.webp, -360.webp, -540.webp (aus 1170px-Screenshot,
   *  Lanczos + leichtes Nachschärfen). Wenn gesetzt, zeigt das
   *  Monitor-Mockup unten rechts ein kleines Smartphone. */
  mobileImage?: string;
  /** Optional: weitere Handy-Screenshots von Unterseiten für den Abschnitt
   *  „So sieht es auf dem Handy aus" auf der Detailseite. `image` ist wieder
   *  ein Basis-Pfad ohne Endung (siehe lib/phone.ts). Die Startseite
   *  (mobileImage) wird dort automatisch als erstes Handy gezeigt. */
  mobileShots?: Array<{ image: string; label: string }>;
  /** Veröffentlichungsjahr als String, z. B. "2026". Bewusst nur Jahr,
   *  damit die Veröffentlichungs-Frequenz nicht abzählbar ist. */
  date: string;
  /** Anzeige-Titel */
  title: string;
  /** Untertext: Branche/Thema, z. B. "Beratung & Coaching".
   *  Bei Websites bewusst OHNE Technik-Nennung (kein Astro/WordPress/Custom Build).
   *  Bei Onlineshops bleibt das Shopsystem drin, z. B. "Shopware 6 · Onlineshop". */
  meta: string;
  /** Wenn true: Detail-Seite wird generiert, Karte ist klickbar. Sonst Schaufenster-Tile. */
  featured?: boolean;
  /** Case-Study-Inhalt, falls featured */
  story?: ReferenceStory;
  /** Optional: externe Live-URL der Kundenseite. Wenn gesetzt, zeigt die Karte
   *  ein „Live ansehen"-Badge rechts in der Beschreibung (öffnet in neuem Tab,
   *  Follow-Link). Nur für geprüft aktive, unproblematische Seiten setzen. */
  liveUrl?: string;
}

export const references: Reference[] = [
  {
    slug: "isolierklinker-zentral",
    category: "websites",
    domain: "isolierklinker-zentral.de",
    image: "/images/referenzen/isolierklinker-zentral.jpg",
    mobileImage: "/images/referenzen/isolierklinker-zentral-mobile",
    mobileShots: [
      { image: "/images/referenzen/isolierklinker-zentral-mobile-klinkerauswahl", label: "Klinkerauswahl" },
      { image: "/images/referenzen/isolierklinker-zentral-mobile-visualisierung", label: "Fassaden-Visualisierung" },
    ],
    date: "2026",
    title: "Isolierklinker Zentralvertrieb Nord",
    meta: "Fassadensanierung & Klinker",
    liveUrl: "https://isolierklinker-zentral.de",
    featured: true,
    story: {
      challenge:
        "Der Zentralvertrieb Nord verkauft seit 1998 fundamentfreie Isolierklinker-Systeme — im Netz war davon wenig zu sehen. Die alte Baukasten-Seite tauchte bei keinem der zehn geprüften Suchbegriffe auf Seite 1 auf. Sogar beim eigenen Kernthema, dem Dämmen und Klinkern ohne neues Fundament, standen Wettbewerber vorn. Im Heimatmarkt Schaumburg rankte ausgerechnet die Impressumsseite, und für die Marke „Kess“ lag die Schwesterdomain kess-klinker.de vor der eigenen Seite.",
      solution:
        "Vor dem ersten Entwurf stand eine Marktanalyse: zehn Suchbegriffe, fünf Wettbewerber im 100-km-Umkreis, dazu die Rollenverteilung innerhalb der eigenen Marke. Daraus entstand die Struktur der Seite, bevor über Gestaltung gesprochen wurde: isolierklinker-zentral.de übernimmt klar die Rolle Vertrieb Nord, damit sich die beiden Domains nicht weiter gegenseitig Konkurrenz machen. Das Thema fundamentfrei bekam eine eigene Systemseite, dazu kamen lokale Landingpages mit echtem Ortsbezug und LocalBusiness-Markup. Ausgeliefert wird die Seite statisch — sie lädt schnell und ist vollständig indexierbar.",
      outcome:
        "Der Baukasten ist abgelöst, und das Kernthema fundamentfrei hat endlich eine Seite für sich. Dazu gehört eine Fassadenvisualisierung: Interessenten sehen ihr eigenes Haus im Wunschklinker, bevor sie anfragen.",
      scope: [
        "Marktanalyse & SEO-Konzept",
        "Website-Relaunch",
        "Lokale Landingpages",
        "Strukturierte Daten",
        "Fassadenvisualisierung",
      ],
      liveUrl: "https://isolierklinker-zentral.de",
    },
  },
  {
    slug: "muckundpipp",
    category: "websites",
    domain: "muckundpipp.de",
    image: "/images/referenzen/muckundpipp.jpg",
    mobileImage: "/images/referenzen/muckundpipp-mobile",
    mobileShots: [
      { image: "/images/referenzen/muckundpipp-mobile-freunde", label: "Die beiden Freunde" },
      { image: "/images/referenzen/muckundpipp-mobile-mitmachen", label: "Zum Mitmachen" },
    ],
    date: "2026",
    title: "Muck & Pipp und das Mutfunkeln",
    meta: "Buch-Website & Kinderbuch",
    liveUrl: "https://muckundpipp.de",
    featured: true,
    story: {
      challenge:
        "Ein Bilderbuch, das erst am 1. November 2026 erscheint, und eine Autorin, die bis dahin sichtbar sein muss: Die Seite sollte tragen, obwohl es noch nichts zu kaufen gibt. Der Großteil der Besucher kommt über Social-Media-Reels — also von Menschen, die in wenigen Sekunden erkennen wollen, worum es geht.",
      solution:
        "Die Startseite erzählt das Buch, statt es zu bewerben: zwei Wesen, ein Junge, der sich vor dem Abschied fürchtet. Einen Shop-Link gibt es noch nicht, also stehen dort Erscheinungsdatum und ISBN. Wer erinnert werden möchte, öffnet mit einem Klick eine E-Mail — das erspart einen Newsletter-Dienst samt Einwilligungen und Vertrag. Das Begleitmaterial zum Vorlesen haben wir selbst entwickelt, Impressum und Datenschutz laufen auf die Autorin als Betreiberin. Die Reels, über die die Besucher kommen, entstehen ebenfalls bei uns.",
      outcome:
        "Die Seite ist seit Monaten online, lange vor dem Erscheinungstermin. Jedes Reel hat damit ein Ziel, auf das es verweisen kann.",
      scope: [
        "Webdesign",
        "Buch-Landingpage",
        "Social-Media-Reels",
        "Rechtstexte & Datenschutz",
      ],
      liveUrl: "https://muckundpipp.de",
    },
  },
  {
    slug: "entdecke-stadthagen",
    category: "websites",
    domain: "entdecke-stadthagen.de",
    image: "/images/referenzen/entdecke-stadthagen.jpg",
    mobileImage: "/images/referenzen/entdecke-stadthagen-mobile",
    mobileShots: [
      { image: "/images/referenzen/entdecke-stadthagen-mobile-renaissance", label: "Renaissance-Rallye" },
      { image: "/images/referenzen/entdecke-stadthagen-mobile-kinder", label: "Kinder-Rallye" },
    ],
    date: "2026",
    title: "Entdecke Stadthagen",
    meta: "Digitale Stadtrallye · Stadthagen",
    liveUrl: "https://entdecke-stadthagen.de",
    featured: true,
    story: {
      challenge:
        "Eine Stadtführung braucht einen Termin, einen Guide und eine Gruppe, die zur selben Zeit am selben Ort steht. Für Familien und Schulklassen, die spontan losziehen wollen, passt das selten. Die Idee: eine Rallye, die jederzeit startbar ist, ohne dass jemand vorher etwas installieren muss.",
      solution:
        "Für diese Rallye ist eine eigene Plattform entstanden: Stadtdetektiv. Sie läuft komplett im Browser — ohne App und ohne Konto. Die Spieler folgen einer Geschichte rund um Fürst Ernst durch die Stadthagener Innenstadt. An echten Orten lösen sie Rätsel und tragen die Lösungen am Handy ein. Gehostet wird in Deutschland, ohne Tracking der Teilnehmer.",
      outcome:
        "Die Plattform dahinter ist inzwischen ein eigenes Angebot. Kommunen können ihre eigene Rallye buchen, ohne selbst Technik aufzubauen.",
      scope: [
        "Konzept & Story",
        "Plattform-Entwicklung",
        "Mobile Web-App",
        "Hosting in Deutschland",
      ],
      liveUrl: "https://entdecke-stadthagen.de",
    },
  },
  {
    slug: "liveperfekt",
    category: "websites",
    domain: "liveperfekt.de",
    image: "/images/referenzen/liveperfekt-new.jpg",
    mobileImage: "/images/referenzen/liveperfekt-mobile",
    mobileShots: [
      { image: "/images/referenzen/liveperfekt-mobile-renovierungen", label: "Renovierungen" },
      { image: "/images/referenzen/liveperfekt-mobile-galerie", label: "Galerie" },
    ],
    date: "2026",
    title: "LivePerfekt",
    meta: "Renovierung · Dresden",
    liveUrl: "https://liveperfekt.de",
    featured: true,
    story: {
      challenge:
        "Liveperfekt renoviert in Dresden für zwei Gruppen, die wenig gemeinsam haben. Vermieter und Hausverwaltungen brauchen eine Wohnung pünktlich zum nächsten Mieter, Eigentümer wollen ihr Bad oder ihr Zuhause neu planen. Beide sollen sofort ihren Weg finden, und weil Handwerk Vertrauen braucht, sollte die Arbeit sichtbar sein, bevor jemand anfragt.",
      solution:
        "Gleich zu Beginn teilt sich die Startseite in zwei Wege, „Für Vermieter“ und „Für Eigentümer“, die auf der Leistungsseite jeweils weitergeführt werden. Renovierungen, Küchen und Maßmöbel sowie der Außenbereich haben eigene Seiten. In der Galerie stehen Projekte aus Dresdner Stadtteilen, sortiert nach Bädern, Küchen und Komplettrenovierungen und ergänzt durch Bewertungen von Google und MyHammer. Fotos lassen sich direkt über das Kontaktformular mitschicken, und die ganze Seite gibt es auch auf Englisch.",
      scope: [
        "Webdesign",
        "Projektgalerie",
        "Zweisprachig DE/EN",
        "Foto-Upload",
      ],
      liveUrl: "https://liveperfekt.de",
    },
  },
  {
    slug: "stadtdetektiv",
    category: "websites",
    domain: "stadtdetektiv.de",
    image: "/images/referenzen/stadtdetektiv.jpg",
    mobileImage: "/images/referenzen/stadtdetektiv-mobile",
    mobileShots: [
      { image: "/images/referenzen/stadtdetektiv-mobile-so-funktioniert-s", label: "So funktioniert's" },
      { image: "/images/referenzen/stadtdetektiv-mobile-pakete-und-preise", label: "Pakete & Preise" },
    ],
    date: "2026",
    title: "Stadtdetektiv",
    meta: "Digitale Stadtrallyes",
    liveUrl: "https://stadtdetektiv.de",
    featured: true,
    story: {
      challenge:
        "Hinter der Stadthagener Rallye steckt eine Plattform, die auch andere Städte nutzen können. Für Tourismus, Stadtmarketing und Kommunen brauchte sie deshalb eine eigene Seite. Wer dort landet, soll in kurzer Zeit verstehen, wie eine Rallye abläuft, was die Stadt selbst beitragen muss und was das Ganze kostet.",
      solution:
        "In vier Schritten, vom QR-Code bis zum Ziel, erklärt die Seite den Ablauf. Danach folgt der Paketinhalt, von Story, GPS-Karte und eigenem Avatar über Nutzungsreport und Hosting bis zum Vermarktungspaket mit Plakat und Flyer. Die beiden Stadthagener Rallyes sind verlinkt und lassen sich direkt im Browser ausprobieren. Die Preise stehen offen da, mit einem Rechenbeispiel je Machart, damit niemand erst ein Angebot anfordern muss, um die Größenordnung zu kennen.",
      outcome:
        "Seit dem Entdeckertag am 6. September 2026 laufen in Stadthagen zwei Rallyes auf der Plattform. Am ersten Tag wurden 144 Spielsitzungen gezählt.",
      scope: [
        "Konzept & Vermarktung",
        "Landingpage",
        "Offene Preise",
      ],
      liveUrl: "https://stadtdetektiv.de",
    },
  },
  {
    slug: "yogaeule",
    category: "websites",
    domain: "yogaeule.de",
    image: "/images/referenzen/yogaeule.jpg",
    mobileImage: "/images/referenzen/yogaeule-mobile",
    mobileShots: [
      { image: "/images/referenzen/yogaeule-mobile-kursplan", label: "Kursplan" },
      { image: "/images/referenzen/yogaeule-mobile-aerial-yoga", label: "Aerial Yoga" },
    ],
    date: "2026",
    title: "Yogaeule",
    meta: "Yoga & Coaching",
    liveUrl: "https://yogaeule.de",
    featured: true,
    story: {
      challenge:
        "Yogaeule in Düsseldorf spricht sehr unterschiedliche Menschen an, von Babys mit ihren Eltern über Kita- und Schulkinder bis zu Teenagern und Erwachsenen. Dazu kommen Aerial Yoga im Tuch und Angebote für Kitas und Schulen. Eltern möchten schnell sehen, was zu ihrem Kind passt und wann es stattfindet, Einrichtungen suchen etwas ganz anderes.",
      solution:
        "Das Angebot ist nach Zielgruppen geordnet, mit eigenen Seiten für Kinder, Familien, Aerial Yoga, Erwachsene, Geburtstage sowie Kitas und Schulen. Im Kursplan steht die ganze Woche, von dort geht es direkt zur Online-Buchung. Svenja stellt sich mit ihrem pädagogischen Hintergrund selbst vor, Google-Bewertungen von Eltern ergänzen das. Wer auf dem Laufenden bleiben will, trägt sich in den Newsletter ein.",
      scope: [
        "Webdesign",
        "Kursplan & Online-Buchung",
        "Zielgruppenseiten",
        "Newsletter",
      ],
      liveUrl: "https://yogaeule.de",
    },
  },
  {
    slug: "events-stadthagen",
    category: "websites",
    domain: "events-stadthagen.de",
    image: "/images/referenzen/events-stadthagen.jpg",
    mobileImage: "/images/referenzen/events-stadthagen-mobile",
    mobileShots: [
      { image: "/images/referenzen/events-stadthagen-mobile-veranstaltungsorte", label: "Veranstaltungsorte" },
      { image: "/images/referenzen/events-stadthagen-mobile-konzerte", label: "Konzerte" },
    ],
    date: "2026",
    title: "Events Stadthagen",
    meta: "Veranstaltungs-Portal Schaumburg",
    liveUrl: "https://events-stadthagen.de",
    featured: true,
    story: {
      challenge:
        "Was am Wochenende in Stadthagen los ist, musste man an vielen Stellen zusammensuchen, bei Vereinen, im Kulturzentrum, beim Stadtmarketing und in sozialen Netzwerken. Wir wollten einen Ort schaffen, an dem alle Veranstaltungen der Stadt und der Umgebung gebündelt sind. Aktuell bleiben sollte er, ohne dass jemand jeden Termin von Hand pflegt.",
      solution:
        "Alle kommenden Termine stehen in einer Liste mit Suche und Schnellfiltern wie „Heute“, „Wochenende“ oder „Diesen Monat“, ergänzt um einen Monatskalender. Jede Veranstaltung bekommt eine eigene Seite mit Ort, Zeit und Beschreibung. Zum Stöbern gibt es Kategorien wie Konzerte, Märkte oder Partys und eine Übersicht der Veranstaltungsorte. Der Kalender lässt sich als ICS abonnieren, und Veranstalter können ihr Event über den Event-Boost zusätzlich in der Region bewerben.",
      outcome:
        "Das Verzeichnis aktualisiert sich täglich automatisch. Mitte September 2026 standen 68 Termine bis Dezember im Kalender.",
      scope: [
        "Konzept & Entwicklung",
        "Automatische Aktualisierung",
        "Suche & Filter",
        "Kalender-Abo (ICS)",
      ],
      liveUrl: "https://events-stadthagen.de",
    },
  },
  {
    slug: "systemische-beratung",
    category: "websites",
    domain: "systemische-beratung-hilden.de",
    image: "/images/referenzen/systemische-beratung.jpg",
    mobileImage: "/images/referenzen/systemische-beratung-mobile",
    mobileShots: [
      { image: "/images/referenzen/systemische-beratung-mobile-fuer-wen", label: "Für wen" },
      { image: "/images/referenzen/systemische-beratung-mobile-ablauf", label: "Ablauf" },
    ],
    date: "2026",
    title: "Systemische Beratung",
    meta: "Beratung & Coaching",
    liveUrl: "https://systemische-beratung-hilden.de",
    featured: true,
    story: {
      challenge:
        "Zusätzlich zu Lerntherapie und Kursen bietet Alena Schößler in Hilden systemische Beratung für Familien, Paare und Eltern an, derzeit im Rahmen ihrer Ausbildung am ifs. Menschen in einer belastenden Lage sind vor dem ersten Kontakt oft unsicher, ob ihr Anliegen überhaupt in eine Beratung gehört. Für dieses Angebot brauchte es deshalb eine eigene Adresse, die den Ansatz in Ruhe erklärt und die Ausbildungssituation offen anspricht.",
      solution:
        "Die Seite ist ein One-Pager mit klarer Reihenfolge: sechs typische Anlässe von Erziehungsfragen bis Trennung, die drei Grundprinzipien des Ansatzes und ein Ablauf in drei Schritten, vom Erstgespräch bis zum eigenen Tempo. Ein eigener Abschnitt erklärt, was „in Ausbildung“ heißt, wie Supervision die Gespräche begleitet und warum das Honorar deshalb niedriger ausfällt. Ein FAQ beantwortet Fragen zu Dauer, Kosten und Schweigepflicht und nennt das Einzugsgebiet von Düsseldorf bis Mettmann. Für das Erstgespräch führen die Buttons auf das Kontaktformular der Hauptseite alena-schoessler.de.",
      scope: [
        "Webdesign",
        "One-Pager",
        "FAQ-Bereich",
        "Strukturierte Daten",
      ],
      liveUrl: "https://systemische-beratung-hilden.de",
    },
  },
  {
    slug: "friseursalon-leverkusen",
    category: "websites",
    domain: "friseursalon-leverkusen.de",
    image: "/images/referenzen/friseursalon-leverkusen.jpg",
    mobileImage: "/images/referenzen/friseursalon-leverkusen-mobile",
    mobileShots: [
      { image: "/images/referenzen/friseursalon-leverkusen-mobile-extensions", label: "Extensions" },
      { image: "/images/referenzen/friseursalon-leverkusen-mobile-preisliste", label: "Preisliste" },
    ],
    date: "2026",
    title: "Friseursalon Leverkusen",
    meta: "Lokale Auffindbarkeit",
    liveUrl: "https://friseursalon-leverkusen.de/",
    featured: true,
    story: {
      challenge:
        "Bei der Friseursuche in Leverkusen zählen meist drei Fragen: Wann ist geöffnet, was kostet es, und kann der Salon das, was man braucht? Hair Collection ist außerdem auf Extensions spezialisiert, ein Thema, das eine eigene Erklärung verdient. Beides, den Salonalltag und das Fachthema, sollte die Website abdecken.",
      solution:
        "Öffnungszeiten und Preise stehen direkt auf der Startseite und sind über das Menü per Sprungmarke erreichbar. Reiter für Damen, Herren, Mädchen und Jungen halten die Preisliste auch auf dem Handy übersichtlich. Extensions haben eine eigene Seite mit Vorher-nachher-Bildern und Erklärungen zu Echthaar, Methode und der langjährigen Erfahrung der Salonleitung. Adresse und Telefonnummer stehen auf allen Seiten, die Nummer sogar schon im Kopfbereich.",
      scope: [
        "Webdesign",
        "Lokale Landingpage",
        "Preisliste",
        "Extensions-Seite",
      ],
      liveUrl: "https://friseursalon-leverkusen.de/",
    },
  },
  {
    slug: "fake-tattoo-studio",
    category: "onlineshops",
    domain: "fake-tattoo-studio.de",
    image: "/images/referenzen/fake-tattoo-studio.jpg",
    mobileImage: "/images/referenzen/fake-tattoo-studio-mobile",
    mobileShots: [
      { image: "/images/referenzen/fake-tattoo-studio-mobile-eigenes-design", label: "Eigenes Design" },
      { image: "/images/referenzen/fake-tattoo-studio-mobile-jga-motive", label: "JGA-Motive" },
    ],
    date: "2026",
    title: "Fake Tattoo Studio",
    meta: "WooCommerce · Shop",
    liveUrl: "https://fake-tattoo-studio.de",
    featured: true,
    story: {
      challenge:
        "Fake Tattoos kauft man selten ohne Grund. Meist steht ein Anlass dahinter, ob Kindergeburtstag, Junggesellenabschied oder Firmenfeier. Der Shop sollte die Motive deshalb nach Anlässen sortieren, eigene Designs ermöglichen und die Fragen klären, die vor jeder Bestellung auftauchen, etwa wie lange ein Tattoo hält und wie es wieder abgeht.",
      solution:
        "Die Kategorien des WooCommerce-Shops folgen den Anlässen, von Kinder über Romantik und Horror bis Junggesellenabschied, jede mit einem kurzen Einleitungstext. Für ein persönliches Fake Tattoo laden Kunden ihre Grafik direkt auf der Produktseite hoch und legen fest, wie oft das Motiv auf den DIN-A4-Bogen soll. Ein FAQ auf der Startseite beantwortet die häufigsten Fragen zu Haltbarkeit, Anbringen, Entfernen und Versand. Merkliste, Schnellansicht und Produktsuche machen das Stöbern auf dem Handy leichter.",
      scope: [
        "Onlineshop",
        "WooCommerce",
        "Motiv-Upload",
        "FAQ",
      ],
      liveUrl: "https://fake-tattoo-studio.de",
    },
  },
  {
    slug: "tattoo-studio-magdeburg",
    category: "websites",
    domain: "blackskulltattoo.de",
    image: "/images/referenzen/blackskull-tattoo.jpg",
    mobileImage: "/images/referenzen/tattoo-studio-magdeburg-mobile",
    mobileShots: [
      { image: "/images/referenzen/tattoo-studio-magdeburg-mobile-portfolio", label: "Portfolio" },
      { image: "/images/referenzen/tattoo-studio-magdeburg-mobile-ablauf", label: "Ablauf" },
    ],
    date: "2026",
    title: "Tattoo- & Piercing Studio Magdeburg",
    meta: "Studio-Website",
    liveUrl: "https://blackskulltattoo.de",
    featured: true,
    story: {
      challenge:
        "Marco betreibt Black Skull Tattoo in Magdeburg-Stadtfeld und ist seit 2001 in der Tattooszene unterwegs. Seine Preise von Tattoomessen in ganz Deutschland sagen viel über seine Arbeit, genauso wie die Motive selbst. Beides brauchte einen Ort, an dem Interessierte es sehen können, bevor sie einen Termin anfragen.",
      solution:
        "Die Startseite stellt Marco persönlich vor, zusammen mit seinen Stilen Realistic, Black & Grey, Color und Fineline. Darunter folgen das Studio, eine Galerie mit Auszeichnungen von Messen in Köln, Erfurt, Chemnitz und weiteren Städten sowie das Portfolio. In vier Schritten wird erklärt, wie ein Tattoo von der Beratung bis zur Sitzung entsteht. Öffnungszeiten, der Hinweis auf Walk-ins, das Terminformular und ein FAQ zu Preisen, Heilung und Nachbesserungen stehen auf derselben Seite.",
      scope: [
        "Webdesign",
        "One-Pager",
        "Bildergalerien",
        "Terminanfrage",
      ],
      liveUrl: "https://blackskulltattoo.de",
    },
  },
  {
    slug: "pc-service-schaumburg",
    category: "websites",
    domain: "pc-service-aus-schaumburg.de",
    image: "/images/referenzen/pc-service-schaumburg.jpg",
    mobileImage: "/images/referenzen/pc-service-schaumburg-mobile",
    mobileShots: [
      { image: "/images/referenzen/pc-service-schaumburg-mobile-smart-home", label: "Smart Home" },
      { image: "/images/referenzen/pc-service-schaumburg-mobile-festpreise", label: "Festpreise" },
    ],
    date: "2026",
    title: "PC-Service Schaumburg",
    meta: "IT-Dienstleister",
    liveUrl: "https://pc-service-aus-schaumburg.de",
    featured: true,
    story: {
      challenge:
        "Seit 2014 hilft Tobias Möller Privatleuten, Familien und kleinen Betrieben im Landkreis Schaumburg bei Computer, Internet und Smart Home. Viele seiner Kunden sind keine Technikprofis und wollen vor allem wissen, wer kommt, was es kostet und wie schnell es geht. Sechs Leistungsbereiche galt es verständlich zu erklären, ohne den Weg zur Hilfe lang zu machen.",
      solution:
        "Jeder Bereich, von der Computerreparatur bis zum Hardwareverkauf, hat eine eigene Seite mit typischen Situationen und Einstiegspreisen. Die Festpreise sind auf einer Preisseite gesammelt, getrennt für Privat- und Firmenkunden. Termine bucht man online in einem Kalender mit tatsächlich freien Zeiten, über die Sofort-Hilfe startet eine Fernwartung in wenigen Schritten. Eine Übersicht zeigt die Orte im Service-Gebiet, für einige gibt es zusätzlich Ortsseiten.",
      scope: [
        "Webdesign",
        "Leistungsseiten",
        "Online-Terminbuchung",
        "Lokale Ortsseiten",
      ],
      liveUrl: "https://pc-service-aus-schaumburg.de",
    },
  },
  {
    slug: "basianer",
    category: "websites",
    domain: "basianer.de",
    image: "/images/referenzen/basianer.jpg",
    mobileImage: "/images/referenzen/basianer-mobile",
    mobileShots: [
      { image: "/images/referenzen/basianer-mobile-zehn-schritte", label: "Zehn Schritte" },
      { image: "/images/referenzen/basianer-mobile-mineralstofftabellen", label: "Mineralstofftabellen" },
    ],
    date: "2026",
    title: "Deutsche Gesellschaft für basisches Leben",
    meta: "Vereins-Website",
    liveUrl: "https://basianer.de",
    featured: true,
    story: {
      challenge:
        "Die Deutsche Gesellschaft für basisches Leben ist ein gemeinnütziger Verein mit Sitz in Goldenbek und versteht sich als Informationsstelle. Ihre Besucher suchen Erklärungen, praktische Empfehlungen und Zahlen zur basischen Lebensweise. Das sollte geordnet zugänglich sein, zusammen mit einem klaren Bild davon, wer dahintersteht.",
      solution:
        "Nach einer kurzen Einführung verzweigt die Startseite in vier Rubriken. Es gibt Themen mit Berichten aus der Praxis, die zehn Empfehlungen der Gesellschaft, Mineralstofftabellen mit dem Vergleich zwischen biologischem und konventionellem Anbau und eine Giftliste. Die Tabellen sind echte Tabellen, keine Bilder. Satzung, Finanzordnung, Impressum und Datenschutz liegen gebündelt in einem Fenster mit Reitern, das sich von jeder Seite aus öffnen lässt.",
      scope: [
        "Webdesign",
        "Vereins-Website",
        "Informationsarchitektur",
        "Mineralstofftabellen",
      ],
      liveUrl: "https://basianer.de",
    },
  },
  {
    slug: "blitzzscale-ki-vertrieb",
    category: "websites",
    domain: "blitzzscale.com",
    image: "/images/referenzen/blitzzscale.jpg",
    mobileImage: "/images/referenzen/blitzzscale-ki-vertrieb-mobile",
    mobileImage: "/images/referenzen/blitzzscale-ki-vertrieb-mobile",
    date: "2025",
    title: "Blitzzscale — KI-Vertrieb",
    meta: "KI-Automation",
    liveUrl: "https://blitzzscale.com",
  },
  {
    slug: "tattoo-studio-stadthagen",
    category: "websites",
    domain: "tattoo-studio-stadthagen.de",
    image: "/images/referenzen/tattoo-stadthagen.jpg",
    mobileImage: "/images/referenzen/tattoo-studio-stadthagen-mobile",
    mobileShots: [
      { image: "/images/referenzen/tattoo-studio-stadthagen-mobile-leistungen", label: "Leistungen" },
      { image: "/images/referenzen/tattoo-studio-stadthagen-mobile-kuenstler", label: "Künstler" },
    ],
    date: "2025",
    title: "Tattoo Studio Stadthagen",
    meta: "Studio-Website",
    liveUrl: "https://tattoo-studio-stadthagen.de",
    featured: true,
    story: {
      challenge:
        "Ein Tattoo bleibt ein Leben lang, entsprechend viele Fragen gibt es vor dem ersten Termin. Wie sauber wird gearbeitet, was kostet ein kleines Motiv, ab welchem Alter ist es erlaubt? Für das Studio in der Stadthagener Fußgängerzone ging es darum, diese Fragen online zu beantworten und den Weg zum Termin kurz zu halten.",
      solution:
        "Die Website ist ein One-Pager, der vom Studio über Service, Hygiene und Materialien bis zu den Künstlern und ihren Arbeiten führt. Im Hygiene-Teil steht, was nach jeder Sitzung desinfiziert wird und welche Materialien nur einmal zum Einsatz kommen. Die Marken hinter Nadeln, Farben und Maschinen sind verlinkt. Ein ausführliches FAQ klärt Preise, Heilung, Altersgrenze und Vorbereitung, und das Anfrageformular unterscheidet zwischen Tattoo und Piercing und erklärt, wie es nach dem Absenden weitergeht.",
      scope: [
        "Webdesign",
        "One-Pager",
        "FAQ-Bereich",
        "Anfrageformular",
      ],
      liveUrl: "https://tattoo-studio-stadthagen.de",
    },
  },
  {
    slug: "schule-fuer-sicherheitsmitarbeiter",
    category: "websites",
    domain: "sad-sicherheit.de",
    image: "/images/referenzen/sad-sicherheit.jpg",
    mobileImage: "/images/referenzen/schule-fuer-sicherheitsmitarbeiter-mobile",
    mobileShots: [
      { image: "/images/referenzen/schule-fuer-sicherheitsmitarbeiter-mobile-ausbildung-basic", label: "Ausbildung Basic" },
      { image: "/images/referenzen/schule-fuer-sicherheitsmitarbeiter-mobile-bildungsgutschein", label: "Bildungsgutschein" },
    ],
    date: "2025",
    title: "Schule für Sicherheitsmitarbeiter",
    meta: "Bildung",
    liveUrl: "https://sad-sicherheit.de",
    featured: true,
    story: {
      challenge:
        "Die Schutz- und Sicherheitsakademie aus Stadthagen bildet bundesweit online Sicherheitsmitarbeiter aus, meist finanziert über einen Bildungsgutschein. Interessenten fragen sich vorab, wie lange eine Ausbildung dauert, welche Voraussetzungen gelten und wie die Förderung abläuft. Diese Antworten braucht es für jede Ausbildung einzeln, und das Beratungsgespräch sollte nur einen Schritt entfernt sein.",
      solution:
        "Die Startseite zeigt alle Ausbildungen als Karten, jeweils mit Dauer und Hinweis zur Finanzierung. Zu jeder Ausbildung gibt es eine Seite mit Teilnahmevoraussetzungen und Lerninhalten, von der Sachkundeprüfung nach § 34a GewO bis zum Ersthelfer. Wie man zum Bildungsgutschein kommt, erklärt eine eigene Seite Schritt für Schritt. Telefonnummer, Sprechzeiten und Kontakt-Button sind auf jeder Seite sichtbar, außerdem gibt es einen Bereich zur Arbeitsvermittlung.",
      scope: [
        "Webdesign",
        "Kursseiten",
        "Förderinfo Bildungsgutschein",
        "Kontaktformular",
      ],
      liveUrl: "https://sad-sicherheit.de",
    },
  },
  {
    slug: "entspannungs-trainerin",
    category: "websites",
    domain: "healthy-horizons.de",
    image: "/images/referenzen/healthy-horizons.jpg",
    mobileImage: "/images/referenzen/entspannungs-trainerin-mobile",
    mobileShots: [
      { image: "/images/referenzen/entspannungs-trainerin-mobile-kursangebot-pmr", label: "Kursangebot PMR" },
      { image: "/images/referenzen/entspannungs-trainerin-mobile-kinderkurse", label: "Kinderkurse" },
    ],
    date: "2025",
    title: "Entspannungs-Trainerin",
    meta: "Coaching",
    liveUrl: "https://healthy-horizons.de",
    featured: true,
    story: {
      challenge:
        "Helena Schimrosczik bietet in Apelern Entspannungskurse, Workshops, Retreats und Beratung zu Stress und Burnout an. Ihre Formate richten sich an Kinder ebenso wie an Erwachsene kurz vor der Erschöpfung. Jeder soll schnell erkennen, welches Angebot zu ihm passt, und ohne Umwege zu einem Termin kommen.",
      solution:
        "Auf der Startseite sind alle Leistungen als Kacheln angeordnet, jede mit einem knappen Satz zum Inhalt. Jedes Angebot hat seine eigene Seite, etwa Progressive Muskelrelaxation mit Preisen für Einzelstunden und Achterkarte, die Kinderkurse, Retreats mit Alpakas oder Rentieren und Autogenes Training. Die Termine stehen unter „Kurse“, angefragt wird über das Kontaktformular. Helena stellt sich und ihre Qualifikationen auf einer separaten Seite vor.",
      scope: [
        "Webdesign",
        "Angebotsseiten",
        "Kurstermine & Anfrage",
      ],
      liveUrl: "https://healthy-horizons.de",
    },
  },
  {
    slug: "renaissance-stadthagen",
    category: "websites",
    domain: "stadthagen-renaissance.de",
    image: "/images/referenzen/renaissance-stadthagen.jpg",
    mobileImage: "/images/referenzen/renaissance-stadthagen-mobile",
    mobileShots: [
      { image: "/images/referenzen/renaissance-stadthagen-mobile-konzertreihe", label: "Konzertreihe" },
      { image: "/images/referenzen/renaissance-stadthagen-mobile-das-mausoleum", label: "Das Mausoleum" },
    ],
    date: "2025",
    title: "Renaissanceverein Stadthagen",
    meta: "Vereins-Website",
    liveUrl: "https://www.stadthagen-renaissance.de",
    featured: true,
    story: {
      challenge:
        "Der Renaissance Stadthagen e.V. kümmert sich um das Mausoleum von Fürst Ernst und organisiert Führungen, eine Konzertreihe und einen offenen Stammtisch. Besucher interessiert vor allem, wann geöffnet ist, was eine Führung kostet und wann das nächste Konzert stattfindet. Der Verein selbst möchte zugleich neue Mitglieder und junge Unterstützer gewinnen.",
      solution:
        "Ganz oben auf der Startseite stehen Öffnungszeiten, geänderte Termine, Eintrittspreise und Ansprechpartner, also das, wonach Besucher zuerst suchen. Darunter folgen das nächste Konzert, die Stammtisch-Termine und Neuigkeiten aus dem Verein. Alle Konzerte des Jahres sind auf einer eigenen Seite mit eingebundenem Ticketverkauf versammelt. Außerdem startet hier die Renaissance-Rallye durch Stadthagen, und das Mitgliedsformular liegt direkt im Menü.",
      scope: [
        "Webdesign",
        "Vereins-Website",
        "Veranstaltungen & Tickets",
        "Mitgliedsformular",
      ],
      liveUrl: "https://www.stadthagen-renaissance.de",
    },
  },
  {
    slug: "bauunternehmen-gebah",
    category: "websites",
    domain: "gebah-bau.de",
    image: "/images/referenzen/gebah.jpg",
    date: "2025",
    title: "Bauunternehmen",
    meta: "Handwerk",
  },
  {
    slug: "verfahrensbeistand",
    category: "websites",
    domain: "verfahrensbeistand.de",
    image: "/images/referenzen/verfahrensbeistand.jpg",
    date: "2025",
    title: "Verfahrensbeistand",
    meta: "Recht",
  },
  {
    slug: "unternehmensberatung-suk",
    category: "websites",
    domain: "suk-beratung.de",
    image: "/images/referenzen/suk-beratung.jpg",
    date: "2025",
    title: "Unternehmensberatung",
    meta: "Beratung",
  },
  {
    slug: "freie-rednerin",
    category: "websites",
    domain: "freie-rednerin.de",
    image: "/images/referenzen/freie-rednerin.jpg",
    date: "2025",
    title: "Freie Rednerin",
    meta: "Persönliche Marke",
  },
  {
    slug: "malerbetrieb-hannover",
    category: "websites",
    domain: "raumgestaltung-hannover.de",
    image: "/images/referenzen/haumgestaltung-hannover.jpg",
    date: "2025",
    title: "Malerbetrieb Hannover",
    meta: "Handwerk",
  },
  {
    slug: "tiergesundheit",
    category: "websites",
    domain: "tiergesundheit-info.de",
    image: "/images/referenzen/tiergesundheit.jpg",
    date: "2025",
    title: "Tiergesundheit",
    meta: "Gesundheit",
  },
  {
    slug: "thc-abbau-rechner",
    category: "websites",
    domain: "hanf-planet.de",
    image: "/images/referenzen/thc-abbau-rechner.jpg",
    date: "2025",
    title: "THC-Abbau-Rechner",
    meta: "Web-App",
  },
  {
    slug: "primus-natura",
    category: "onlineshops",
    domain: "primus-natura.de",
    image: "/images/referenzen/primus1.jpg",
    date: "2025",
    title: "Primus Natura — Möbelhaus",
    meta: "WooCommerce · mit Reservierungs-System",
  },
  {
    slug: "gaming-clan-website",
    category: "websites",
    domain: "gilden-page.de",
    image: "/images/referenzen/gildenpage.jpg",
    date: "2025",
    title: "Gaming Clan Website",
    meta: "Community",
  },
  {
    slug: "ki-partei",
    category: "websites",
    domain: "ki-partei.de",
    image: "/images/referenzen/ki-partei.jpg",
    date: "2025",
    title: "KI-Partei",
    meta: "Politik & KI",
  },
  {
    slug: "natur-buddy",
    category: "onlineshops",
    domain: "natur-buddy.de",
    image: "/images/referenzen/natur-buddy-webshop.jpg",
    mobileImage: "/images/referenzen/natur-buddy-mobile",
    mobileShots: [
      { image: "/images/referenzen/natur-buddy-mobile-produktseite", label: "Produktseite" },
      { image: "/images/referenzen/natur-buddy-mobile-themenwelt", label: "Themenwelt" },
    ],
    date: "2024",
    title: "Natur Buddy",
    meta: "Shopware 6 · Onlineshop",
    liveUrl: "https://natur-buddy.de",
    featured: true,
    story: {
      challenge:
        "Natur Buddy verbindet Ratgeber und Shop für Nahrungsergänzung, Naturheilmittel und natürliche Pflege. Die meisten Besucher möchten erst verstehen, was ein Mittel ist und wofür es traditionell verwendet wird, bevor sie kaufen. Beides musste zusammenfinden, ohne Heilversprechen zu machen.",
      solution:
        "Nahrungsergänzung, Naturheilmittel und Naturkosmetik & Pflege bilden die drei Themenwelten, erreichbar über ein großes Menü und die Suche. Zu jeder gehören Ratgeberartikel mit Lesezeit, etwa die Pflanzen-Steckbriefe rund um Schwedenbitter. Basische Pflegeprodukte kauft man direkt im Shop, mit Grundpreis, Lieferzeit und Warenkorb. Bei anderen Produkten führt ein klar gekennzeichneter Affiliate-Link weiter, und ein Hinweis auf jeder Seite ordnet die Inhalte ein.",
      scope: [
        "Onlineshop",
        "Ratgeber & Magazin",
        "Themenwelten",
        "Affiliate-Kennzeichnung",
      ],
      liveUrl: "https://natur-buddy.de",
    },
  },
  {
    slug: "ergotherapeutin-trainerin",
    category: "websites",
    domain: "alena-schoessler.de",
    image: "/images/referenzen/alena-schoessler.jpg",
    mobileImage: "/images/referenzen/ergotherapeutin-trainerin-mobile",
    mobileShots: [
      { image: "/images/referenzen/ergotherapeutin-trainerin-mobile-lerntherapie", label: "Lerntherapie" },
      { image: "/images/referenzen/ergotherapeutin-trainerin-mobile-selbstbehauptungskurse", label: "Selbstbehauptungskurse" },
    ],
    date: "2024",
    title: "Alena Schößler — Lerntherapie",
    meta: "Therapie",
    liveUrl: "https://alena-schoessler.de",
    featured: true,
    story: {
      challenge:
        "Alena Schößler arbeitet in Hilden als Lerntherapeutin, gibt Selbstbehauptungskurse für Kinder und bietet systemische Beratung für Familien an. Eltern kommen meist mit einem konkreten Anliegen, etwa Problemen beim Lesen und Rechnen oder Ärger auf dem Schulhof. Bevor sie sich melden, sollen sie verstehen, was hinter den Angeboten steckt, wie der Ablauf aussieht und wer die Therapeutin ist.",
      solution:
        "Die Startseite trennt die Angebote für das Kind von denen für die ganze Familie und nennt jeweils die wichtigsten Eckdaten wie Dauer und Hausbesuche. Auf der Lerntherapie-Seite geht es um LRS und Dyskalkulie und ihre typischen Anzeichen, die Kursseite beschreibt Ansatz und Methoden des Trainings. Ausbildung, Werdegang und Mitgliedschaften sind ebenfalls auf der Startseite zusammengefasst. Hinzu kommen ein Terminkalender für die Kurse, ein Blog mit Elternthemen und ein Formular für das unverbindliche Erstgespräch.",
      scope: [
        "Webdesign",
        "Terminkalender",
        "Blog",
        "Erstgespräch-Anfrage",
      ],
      liveUrl: "https://alena-schoessler.de",
    },
  },
  {
    slug: "psychologischer-coach",
    category: "websites",
    domain: "for-your-life.de",
    image: "/images/referenzen/for-your-life.jpg",
    date: "2024",
    title: "Psychologischer Coach",
    meta: "Coaching",
  },
  {
    slug: "watercoach",
    category: "websites",
    domain: "watercoach.de",
    image: "/images/referenzen/watercoach-1.jpg",
    date: "2024",
    title: "Watercoach — Wasserfilter",
    meta: "Produkt-Website",
  },
  {
    slug: "tarifakademie",
    category: "websites",
    domain: "tarifakademie.de",
    image: "/images/referenzen/tarifakademie-2.jpg",
    date: "2024",
    title: "Tarifakademie",
    meta: "Bildung",
  },
  {
    slug: "moringa-deutschland",
    category: "onlineshops",
    domain: "moringa-deutschland.de",
    image: "/images/referenzen/moringa-deutschland.jpg",
    date: "2024",
    title: "Moringa Deutschland",
    meta: "Oxid 6 · Onlineshop",
  },
  {
    slug: "soaply-seifen",
    category: "onlineshops",
    domain: "soaply.de",
    image: "/images/referenzen/soaply.jpg",
    mobileImage: "/images/referenzen/soaply-seifen-mobile",
    mobileShots: [
      { image: "/images/referenzen/soaply-seifen-mobile-seifensortiment", label: "Seifensortiment" },
      { image: "/images/referenzen/soaply-seifen-mobile-produktseite", label: "Produktseite" },
    ],
    date: "2024",
    title: "Soaply — Seifen",
    meta: "WooCommerce · Onlineshop",
    liveUrl: "https://soaply.de",
    featured: true,
    story: {
      challenge:
        "Soaply siedet in Nienburg Seifen von Hand, stellt Pflegeprodukte her und führt Zubehör wie Seifenschalen und Handtücher. Rund 190 Artikel in vielen Kategorien müssen sich im Shop leicht durchsuchen lassen, auch auf dem Handy. Da die Manufaktur zusätzlich vor Ort und auf Märkten verkauft, gehört auch das auf die Seite.",
      solution:
        "Der WooCommerce-Shop teilt das Sortiment in Seifen, Körperpflege, Badekosmetik, Haarpflege und Accessoires, jeweils mit eigenen Unterkategorien. Die Kategorieseiten sind sortierbar, und jedes Produkt zeigt Preis, Grundpreis, Lagerbestand und eine Beschreibung mit Anwendungshinweisen. Angebote und ausgewählte Kategorien finden sich gleich auf der Startseite. Für die Ausstellungstermine gibt es eine eigene Seite, ebenso für die Seifenkiste am Ladengeschäft, aus der man rund um die Uhr abholen kann.",
      scope: [
        "Onlineshop",
        "WooCommerce",
        "Produktkategorien",
        "Abholung & Märkte",
      ],
      liveUrl: "https://soaply.de",
    },
  },
  {
    slug: "msc-garbsen",
    category: "websites",
    domain: "msc-garbsen.de",
    image: "/images/referenzen/msc-garbsen.jpg",
    date: "2024",
    title: "Modelflugverein MSC-Garbsen",
    meta: "Vereins-Website",
  },
  {
    slug: "vital-engel",
    category: "websites",
    domain: "vital-engel.de",
    image: "/images/referenzen/vital-engel.jpg",
    date: "2024",
    title: "Vital Engel — Nahrungsergänzung",
    meta: "Produkt-Website",
  },
  {
    slug: "tiergesundheit-ratgeber",
    category: "websites",
    domain: "tiergesundheit-ratgeber.de",
    image: "/images/referenzen/tiergesundheit-ratgeber.jpg",
    date: "2024",
    title: "Tiergesundheit Ratgeber",
    meta: "Content-Hub",
  },
  {
    slug: "cafe-xs",
    category: "websites",
    domain: "cafe-xs.de",
    image: "/images/referenzen/cafe-xs.jpg",
    date: "2022",
    title: "Cafe XS",
    meta: "Gastronomie",
  },
  {
    slug: "saba-getoepfert",
    category: "onlineshops",
    domain: "saba-getoepfert.de",
    image: "/images/referenzen/saba-getoepfert.jpg",
    date: "2022",
    title: "Saba-Getöpfert — Kunst",
    meta: "WooCommerce · Onlineshop",
  },
  {
    slug: "q-bautrocknung",
    category: "websites",
    domain: "q-bautrocknung.de",
    image: "/images/referenzen/q-bautrocknung.jpg",
    date: "2022",
    title: "Bautrocknung-Unternehmen",
    meta: "Handwerk",
  },
  {
    slug: "keim-ade",
    category: "websites",
    domain: "keim-ade.de",
    image: "/images/referenzen/keim-ade-referenz.jpg",
    date: "2022",
    title: "Keim Ade — Oberflächendesinfektion",
    meta: "Produkt-Website",
  },
];

/** Wie viele Projekte pro Kategorie? — für Filter-Pill-Badges */
export function referenceCounts() {
  return {
    alle: references.length,
    websites: references.filter((r) => r.category === "websites").length,
    onlineshops: references.filter((r) => r.category === "onlineshops").length,
  };
}

/** Nur Referenzen mit ausführlicher Case-Study (klickbar). */
export function featuredReferences(): Reference[] {
  return references.filter((r) => r.featured === true && r.story);
}

/** Liefert eine Referenz per Slug (oder undefined). */
export function referenceBySlug(slug: string): Reference | undefined {
  return references.find((r) => r.slug === slug);
}
