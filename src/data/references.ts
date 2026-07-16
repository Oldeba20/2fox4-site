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
  /** Untertext z. B. "WordPress · Beratung & Coaching" */
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
    slug: "entdecke-stadthagen",
    category: "websites",
    domain: "entdecke-stadthagen.de",
    image: "/images/referenzen/entdecke-stadthagen.jpg",
    date: "2026",
    title: "Entdecke Stadthagen",
    meta: "Digitale Stadtrallye · Stadthagen",
    liveUrl: "https://entdecke-stadthagen.de",
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
    meta: "WordPress · Yoga & Coaching",
    liveUrl: "https://yogaeule.de",
  },
  {
    slug: "events-stadthagen",
    category: "websites",
    domain: "events-stadthagen.de",
    image: "/images/referenzen/events-stadthagen.jpg",
    date: "2026",
    title: "Events Stadthagen",
    meta: "Astro · Veranstaltungs-Portal Schaumburg",
    liveUrl: "https://events-stadthagen.de",
  },
  {
    slug: "systemische-beratung",
    category: "websites",
    domain: "systemische-beratung.de",
    image: "/images/referenzen/systemische-beratung.jpg",
    date: "2026",
    title: "Systemische Beratung",
    meta: "WordPress · Beratung & Coaching",
    liveUrl: "https://systemische-beratung.de",
  },
  {
    slug: "friseursalon-leverkusen",
    category: "websites",
    domain: "friseursalon-leverkusen.de",
    image: "/images/referenzen/friseursalon-leverkusen.jpg",
    date: "2026",
    title: "Friseursalon Leverkusen",
    meta: "WordPress · Lokale Auffindbarkeit",
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
    meta: "WordPress · Studio-Website",
    liveUrl: "https://blackskull-tattoo.de",
  },
  {
    slug: "pc-service-schaumburg",
    category: "websites",
    domain: "pc-service-aus-schaumburg.de",
    image: "/images/referenzen/pc-service-schaumburg.jpg",
    date: "2026",
    title: "PC-Service Schaumburg",
    meta: "WordPress · IT-Dienstleister",
    liveUrl: "https://pc-service-aus-schaumburg.de",
  },
  {
    slug: "basianer",
    category: "websites",
    domain: "basianer.de",
    image: "/images/referenzen/basianer.jpg",
    date: "2026",
    title: "Deutsche Gesellschaft für basisches Leben",
    meta: "WordPress · Vereins-Website",
    liveUrl: "https://basianer.de",
  },
  {
    slug: "blitzzscale-ki-vertrieb",
    category: "websites",
    domain: "blitzzscale.com",
    image: "/images/referenzen/blitzzscale.jpg",
    date: "2025",
    title: "Blitzzscale — KI-Vertrieb",
    meta: "Custom Build · KI-Automation",
    liveUrl: "https://blitzzscale.com",
  },
  {
    slug: "tattoo-studio-stadthagen",
    category: "websites",
    domain: "tattoo-stadthagen.de",
    image: "/images/referenzen/tattoo-stadthagen.jpg",
    date: "2025",
    title: "Tattoo Studio Stadthagen",
    meta: "WordPress · Studio-Website",
    liveUrl: "https://tattoo-stadthagen.de",
  },
  {
    slug: "schule-fuer-sicherheitsmitarbeiter",
    category: "websites",
    domain: "sad-sicherheit.de",
    image: "/images/referenzen/sad-sicherheit.jpg",
    date: "2025",
    title: "Schule für Sicherheitsmitarbeiter",
    meta: "WordPress · Bildung",
    liveUrl: "https://sad-sicherheit.de",
  },
  {
    slug: "entspannungs-trainerin",
    category: "websites",
    domain: "healthy-horizons.de",
    image: "/images/referenzen/healthy-horizons.jpg",
    date: "2025",
    title: "Entspannungs-Trainerin",
    meta: "WordPress · Coaching",
  },
  {
    slug: "renaissance-stadthagen",
    category: "websites",
    domain: "renaissance-stadthagen.de",
    image: "/images/referenzen/renaissance-stadthagen.jpg",
    date: "2025",
    title: "Renaissanceverein Stadthagen",
    meta: "WordPress · Vereins-Website",
  },
  {
    slug: "bauunternehmen-gebah",
    category: "websites",
    domain: "gebah-bau.de",
    image: "/images/referenzen/gebah.jpg",
    date: "2025",
    title: "Bauunternehmen",
    meta: "WordPress · Handwerk",
  },
  {
    slug: "verfahrensbeistand",
    category: "websites",
    domain: "verfahrensbeistand.de",
    image: "/images/referenzen/verfahrensbeistand.jpg",
    date: "2025",
    title: "Verfahrensbeistand",
    meta: "WordPress · Recht",
  },
  {
    slug: "unternehmensberatung-suk",
    category: "websites",
    domain: "suk-beratung.de",
    image: "/images/referenzen/suk-beratung.jpg",
    date: "2025",
    title: "Unternehmensberatung",
    meta: "WordPress · Beratung",
  },
  {
    slug: "freie-rednerin",
    category: "websites",
    domain: "freie-rednerin.de",
    image: "/images/referenzen/freie-rednerin.jpg",
    date: "2025",
    title: "Freie Rednerin",
    meta: "WordPress · Persönliche Marke",
  },
  {
    slug: "malerbetrieb-hannover",
    category: "websites",
    domain: "raumgestaltung-hannover.de",
    image: "/images/referenzen/haumgestaltung-hannover.jpg",
    date: "2025",
    title: "Malerbetrieb Hannover",
    meta: "WordPress · Handwerk",
  },
  {
    slug: "tiergesundheit",
    category: "websites",
    domain: "tiergesundheit-info.de",
    image: "/images/referenzen/tiergesundheit.jpg",
    date: "2025",
    title: "Tiergesundheit",
    meta: "WordPress · Gesundheit",
  },
  {
    slug: "thc-abbau-rechner",
    category: "websites",
    domain: "hanf-planet.de",
    image: "/images/referenzen/thc-abbau-rechner.jpg",
    date: "2025",
    title: "THC-Abbau-Rechner",
    meta: "Custom Tool · Web-App",
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
    meta: "WordPress · Community",
  },
  {
    slug: "ki-partei",
    category: "websites",
    domain: "ki-partei.de",
    image: "/images/referenzen/ki-partei.jpg",
    date: "2025",
    title: "KI-Partei",
    meta: "WordPress · Politik & KI",
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
    meta: "WordPress · Therapie",
  },
  {
    slug: "psychologischer-coach",
    category: "websites",
    domain: "for-your-life.de",
    image: "/images/referenzen/for-your-life.jpg",
    date: "2024",
    title: "Psychologischer Coach",
    meta: "WordPress · Coaching",
  },
  {
    slug: "watercoach",
    category: "websites",
    domain: "watercoach.de",
    image: "/images/referenzen/watercoach-1.jpg",
    date: "2024",
    title: "Watercoach — Wasserfilter",
    meta: "WordPress · Produkt-Website",
  },
  {
    slug: "tarifakademie",
    category: "websites",
    domain: "tarifakademie.de",
    image: "/images/referenzen/tarifakademie-2.jpg",
    date: "2024",
    title: "Tarifakademie",
    meta: "WordPress · Bildung",
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
    meta: "WordPress · Vereins-Website",
  },
  {
    slug: "vital-engel",
    category: "websites",
    domain: "vital-engel.de",
    image: "/images/referenzen/vital-engel.jpg",
    date: "2024",
    title: "Vital Engel — Nahrungsergänzung",
    meta: "WordPress · Produkt-Website",
  },
  {
    slug: "tiergesundheit-ratgeber",
    category: "websites",
    domain: "tiergesundheit-ratgeber.de",
    image: "/images/referenzen/tiergesundheit-ratgeber.jpg",
    date: "2024",
    title: "Tiergesundheit Ratgeber",
    meta: "WordPress · Content-Hub",
  },
  {
    slug: "cafe-xs",
    category: "websites",
    domain: "cafe-xs.de",
    image: "/images/referenzen/cafe-xs.jpg",
    date: "2022",
    title: "Cafe XS",
    meta: "WordPress · Gastronomie",
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
    meta: "WordPress · Handwerk",
  },
  {
    slug: "keim-ade",
    category: "websites",
    domain: "keim-ade.de",
    image: "/images/referenzen/keim-ade-referenz.jpg",
    date: "2022",
    title: "Keim Ade — Oberflächendesinfektion",
    meta: "WordPress · Produkt-Website",
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
