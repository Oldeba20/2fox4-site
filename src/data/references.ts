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
    slug: "stadtdetektiv",
    category: "websites",
    domain: "stadtdetektiv.de",
    image: "/images/referenzen/stadtdetektiv.jpg",
    date: "2026",
    title: "Stadtdetektiv",
    meta: "Digitale Stadtrallyes",
    liveUrl: "https://stadtdetektiv.de",
  },
  {
    slug: "liveperfekt",
    category: "websites",
    domain: "liveperfekt.de",
    image: "/images/referenzen/liveperfekt-new.jpg",
    date: "2026",
    title: "LivePerfekt",
    meta: "Renovierung · Dresden",
    liveUrl: "https://liveperfekt.de",
  },
  {
    slug: "yogaeule",
    category: "websites",
    domain: "yogaeule.de",
    image: "/images/referenzen/yogaeule.jpg",
    date: "2026",
    title: "Yogaeule",
    meta: "Yoga & Coaching",
    liveUrl: "https://yogaeule.de",
  },
  {
    slug: "events-stadthagen",
    category: "websites",
    domain: "events-stadthagen.de",
    image: "/images/referenzen/events-stadthagen.jpg",
    date: "2026",
    title: "Events Stadthagen",
    meta: "Veranstaltungs-Portal Schaumburg",
    liveUrl: "https://events-stadthagen.de",
  },
  {
    slug: "systemische-beratung",
    category: "websites",
    domain: "systemische-beratung.de",
    image: "/images/referenzen/systemische-beratung.jpg",
    date: "2026",
    title: "Systemische Beratung",
    meta: "Beratung & Coaching",
    liveUrl: "https://systemische-beratung.de",
  },
  {
    slug: "friseursalon-leverkusen",
    category: "websites",
    domain: "friseursalon-leverkusen.de",
    image: "/images/referenzen/friseursalon-leverkusen.jpg",
    date: "2026",
    title: "Friseursalon Leverkusen",
    meta: "Lokale Auffindbarkeit",
    liveUrl: "https://friseursalon-leverkusen.de/",
  },
  {
    slug: "fake-tattoo-studio",
    category: "onlineshops",
    domain: "fake-tattoo-studio.de",
    image: "/images/referenzen/fake-tattoo-studio.jpg",
    date: "2026",
    title: "Fake Tattoo Studio",
    meta: "WooCommerce · Shop",
    liveUrl: "https://fake-tattoo-studio.de",
  },
  {
    slug: "tattoo-studio-magdeburg",
    category: "websites",
    domain: "blackskull-tattoo.de",
    image: "/images/referenzen/blackskull-tattoo.jpg",
    date: "2026",
    title: "Tattoo- & Piercing Studio Magdeburg",
    meta: "Studio-Website",
    liveUrl: "https://blackskull-tattoo.de",
  },
  {
    slug: "pc-service-schaumburg",
    category: "websites",
    domain: "pc-service-aus-schaumburg.de",
    image: "/images/referenzen/pc-service-schaumburg.jpg",
    date: "2026",
    title: "PC-Service Schaumburg",
    meta: "IT-Dienstleister",
    liveUrl: "https://pc-service-aus-schaumburg.de",
  },
  {
    slug: "basianer",
    category: "websites",
    domain: "basianer.de",
    image: "/images/referenzen/basianer.jpg",
    date: "2026",
    title: "Deutsche Gesellschaft für basisches Leben",
    meta: "Vereins-Website",
    liveUrl: "https://basianer.de",
  },
  {
    slug: "blitzzscale-ki-vertrieb",
    category: "websites",
    domain: "blitzzscale.com",
    image: "/images/referenzen/blitzzscale.jpg",
    date: "2025",
    title: "Blitzzscale — KI-Vertrieb",
    meta: "KI-Automation",
    liveUrl: "https://blitzzscale.com",
  },
  {
    slug: "tattoo-studio-stadthagen",
    category: "websites",
    domain: "tattoo-stadthagen.de",
    image: "/images/referenzen/tattoo-stadthagen.jpg",
    date: "2025",
    title: "Tattoo Studio Stadthagen",
    meta: "Studio-Website",
    liveUrl: "https://tattoo-stadthagen.de",
  },
  {
    slug: "schule-fuer-sicherheitsmitarbeiter",
    category: "websites",
    domain: "sad-sicherheit.de",
    image: "/images/referenzen/sad-sicherheit.jpg",
    date: "2025",
    title: "Schule für Sicherheitsmitarbeiter",
    meta: "Bildung",
    liveUrl: "https://sad-sicherheit.de",
  },
  {
    slug: "entspannungs-trainerin",
    category: "websites",
    domain: "healthy-horizons.de",
    image: "/images/referenzen/healthy-horizons.jpg",
    date: "2025",
    title: "Entspannungs-Trainerin",
    meta: "Coaching",
  },
  {
    slug: "renaissance-stadthagen",
    category: "websites",
    domain: "renaissance-stadthagen.de",
    image: "/images/referenzen/renaissance-stadthagen.jpg",
    date: "2025",
    title: "Renaissanceverein Stadthagen",
    meta: "Vereins-Website",
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
    date: "2024",
    title: "Natur Buddy",
    meta: "Shopware 6 · Onlineshop",
    liveUrl: "https://natur-buddy.de",
  },
  {
    slug: "ergotherapeutin-trainerin",
    category: "websites",
    domain: "alena-schoessler.de",
    image: "/images/referenzen/alena-schoessler.jpg",
    date: "2024",
    title: "Alena Schößler — Lerntherapie",
    meta: "Therapie",
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
    date: "2024",
    title: "Soaply — Seifen",
    meta: "WooCommerce · Onlineshop",
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
    slug: "hanf-planet",
    category: "onlineshops",
    domain: "hanf-planet.de",
    image: "/images/referenzen/hanf-planet.jpg",
    date: "2022",
    title: "Hanf-Planet",
    meta: "Shopware 6 · Onlineshop",
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
