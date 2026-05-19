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
  /** Veröffentlichungsdatum als String, z. B. "April 2026" */
  date: string;
  /** Anzeige-Titel */
  title: string;
  /** Untertext z. B. "WordPress · Beratung & Coaching" */
  meta: string;
  /** Wenn true: Detail-Seite wird generiert, Karte ist klickbar. Sonst Schaufenster-Tile. */
  featured?: boolean;
  /** Case-Study-Inhalt, falls featured */
  story?: ReferenceStory;
}

export const references: Reference[] = [
  {
    slug: "liveperfekt",
    category: "websites",
    domain: "liveperfekt.de",
    image: "/images/referenzen/liveperfekt.png",
    date: "Mai 2026",
    title: "LivePerfekt",
    meta: "Renovierung · Dresden",
  },
  {
    slug: "yogaeule",
    category: "websites",
    domain: "yogaeule.de",
    image: "https://www.2fox4.de/wp-content/uploads/2026/05/yogaeule.jpg",
    date: "Mai 2026",
    title: "Yogaeule",
    meta: "WordPress · Yoga & Coaching",
  },
  {
    slug: "systemische-beratung",
    category: "websites",
    domain: "systemische-beratung.de",
    image: "https://www.2fox4.de/wp-content/uploads/2026/04/Systemische-Beratung.png",
    date: "April 2026",
    title: "Systemische Beratung",
    meta: "WordPress · Beratung & Coaching",
  },
  {
    slug: "friseursalon-leverkusen",
    category: "websites",
    domain: "friseur-leverkusen.de",
    image: "https://www.2fox4.de/wp-content/uploads/2026/03/Bildschirmfoto-2026-03-23-um-09.35.13.png",
    date: "März 2026",
    title: "Friseursalon Leverkusen",
    meta: "WordPress · Lokale Auffindbarkeit",
  },
  {
    slug: "fake-tattoo-studio",
    category: "onlineshops",
    domain: "fake-tattoo-studio.de",
    image: "https://www.2fox4.de/wp-content/uploads/2026/01/Referenz-Fake-Tattoo-Studio.jpg",
    date: "Januar 2026",
    title: "Fake Tattoo Studio",
    meta: "WooCommerce · Shop",
  },
  {
    slug: "tattoo-studio-magdeburg",
    category: "websites",
    domain: "blackskull-tattoo.de",
    image: "https://www.2fox4.de/wp-content/uploads/2026/01/Referenz-Blackskull-Tattoo.png",
    date: "Januar 2026",
    title: "Tattoo- & Piercing Studio Magdeburg",
    meta: "WordPress · Studio-Website",
  },
  {
    slug: "blitzzscale-ki-vertrieb",
    category: "websites",
    domain: "blitzzscale.com",
    image: "https://www.2fox4.de/wp-content/uploads/2026/01/Referenz-Blitzzscale.png",
    date: "Dezember 2025",
    title: "Blitzzscale — KI-Vertrieb",
    meta: "Custom Build · KI-Automation",
  },
  {
    slug: "tattoo-studio-stadthagen",
    category: "websites",
    domain: "tattoo-stadthagen.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/10/Tattoo-Studio-Stadthagen-Website.jpg",
    date: "Oktober 2025",
    title: "Tattoo Studio Stadthagen",
    meta: "WordPress · Studio-Website",
  },
  {
    slug: "schule-fuer-sicherheitsmitarbeiter",
    category: "websites",
    domain: "sad-sicherheit.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/08/Website-SAD-Sicherheit-Referenz.png",
    date: "August 2025",
    title: "Schule für Sicherheitsmitarbeiter",
    meta: "WordPress · Bildung",
  },
  {
    slug: "entspannungs-trainerin",
    category: "websites",
    domain: "healthy-horizons.de",
    image: "/images/referenzen/healthy-horizons.jpg",
    date: "August 2025",
    title: "Entspannungs-Trainerin",
    meta: "WordPress · Coaching",
  },
  {
    slug: "renaissance-stadthagen",
    category: "websites",
    domain: "renaissance-stadthagen.de",
    image: "/images/referenzen/renaissance-stadthagen.jpg",
    date: "August 2025",
    title: "Renaissanceverein Stadthagen",
    meta: "WordPress · Vereins-Website",
  },
  {
    slug: "bauunternehmen-gebah",
    category: "websites",
    domain: "gebah-bau.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/08/Gebah.jpg",
    date: "August 2025",
    title: "Bauunternehmen",
    meta: "WordPress · Handwerk",
  },
  {
    slug: "verfahrensbeistand",
    category: "websites",
    domain: "verfahrensbeistand.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/08/Verfahrensbegleitung.jpg",
    date: "August 2025",
    title: "Verfahrensbeistand",
    meta: "WordPress · Recht",
  },
  {
    slug: "unternehmensberatung-suk",
    category: "websites",
    domain: "suk-beratung.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/08/Suk-Beratung.jpg",
    date: "August 2025",
    title: "Unternehmensberatung",
    meta: "WordPress · Beratung",
  },
  {
    slug: "freie-rednerin",
    category: "websites",
    domain: "freie-rednerin.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/08/SUK-Reden.jpg",
    date: "August 2025",
    title: "Freie Rednerin",
    meta: "WordPress · Persönliche Marke",
  },
  {
    slug: "malerbetrieb-hannover",
    category: "websites",
    domain: "raumgestaltung-hannover.de",
    image: "/images/referenzen/haumgestaltung-hannover.jpg",
    date: "Juli 2025",
    title: "Malerbetrieb Hannover",
    meta: "WordPress · Handwerk",
  },
  {
    slug: "tiergesundheit",
    category: "websites",
    domain: "tiergesundheit-info.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/08/Smilla-Henry-Tiergesundheit.jpg",
    date: "Juli 2025",
    title: "Tiergesundheit",
    meta: "WordPress · Gesundheit",
  },
  {
    slug: "thc-abbau-rechner",
    category: "websites",
    domain: "hanf-planet.de",
    image: "https://www.2fox4.de/wp-content/uploads/2026/05/thc-abbau-rechner.jpg",
    date: "Juli 2025",
    title: "THC-Abbau-Rechner",
    meta: "Custom Tool · Web-App",
  },
  {
    slug: "primus-natura",
    category: "onlineshops",
    domain: "primus-natura.de",
    image: "/images/referenzen/primus1.jpg",
    date: "Juli 2025",
    title: "Primus Natura — Möbelhaus",
    meta: "WooCommerce · mit Reservierungs-System",
  },
  {
    slug: "gaming-clan-website",
    category: "websites",
    domain: "gilden-page.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/08/Gildenpage.jpg",
    date: "Juli 2025",
    title: "Gaming Clan Website",
    meta: "WordPress · Community",
  },
  {
    slug: "ki-partei",
    category: "websites",
    domain: "ki-partei.de",
    image: "https://www.2fox4.de/wp-content/uploads/2026/05/ki-partei.jpg",
    date: "Juli 2025",
    title: "KI-Partei",
    meta: "WordPress · Politik & KI",
  },
  {
    slug: "natur-buddy",
    category: "onlineshops",
    domain: "natur-buddy.de",
    image: "/images/referenzen/natur-buddy-webshop.jpg",
    date: "Februar 2024",
    title: "Natur Buddy",
    meta: "Shopware 6 · Onlineshop",
  },
  {
    slug: "ergotherapeutin-trainerin",
    category: "websites",
    domain: "alena-schoessler.de",
    image: "https://www.2fox4.de/wp-content/uploads/2026/05/alena-schoessler.jpg",
    date: "Januar 2024",
    title: "Alena Schößler — Lerntherapie",
    meta: "WordPress · Therapie",
  },
  {
    slug: "psychologischer-coach",
    category: "websites",
    domain: "for-your-life.de",
    image: "/images/referenzen/for-your-life.jpg",
    date: "Januar 2024",
    title: "Psychologischer Coach",
    meta: "WordPress · Coaching",
  },
  {
    slug: "watercoach",
    category: "websites",
    domain: "watercoach.de",
    image: "/images/referenzen/watercoach-1.jpg",
    date: "Januar 2024",
    title: "Watercoach — Wasserfilter",
    meta: "WordPress · Produkt-Website",
  },
  {
    slug: "tarifakademie",
    category: "websites",
    domain: "tarifakademie.de",
    image: "/images/referenzen/tarifakademie-2.jpg",
    date: "Januar 2024",
    title: "Tarifakademie",
    meta: "WordPress · Bildung",
  },
  {
    slug: "moringa-deutschland",
    category: "onlineshops",
    domain: "moringa-deutschland.de",
    image: "/images/referenzen/moringa-deutschland.jpg",
    date: "Januar 2024",
    title: "Moringa Deutschland",
    meta: "Oxid 6 · Onlineshop",
  },
  {
    slug: "soaply-seifen",
    category: "onlineshops",
    domain: "soaply.de",
    image: "/images/referenzen/soaply.jpg",
    date: "Januar 2024",
    title: "Soaply — Seifen",
    meta: "WooCommerce · Onlineshop",
  },
  {
    slug: "msc-garbsen",
    category: "websites",
    domain: "msc-garbsen.de",
    image: "/images/referenzen/msc-garbsen.jpg",
    date: "Januar 2024",
    title: "Modelflugverein MSC-Garbsen",
    meta: "WordPress · Vereins-Website",
  },
  {
    slug: "vital-engel",
    category: "websites",
    domain: "vital-engel.de",
    image: "/images/referenzen/vital-engel.jpg",
    date: "Januar 2024",
    title: "Vital Engel — Nahrungsergänzung",
    meta: "WordPress · Produkt-Website",
  },
  {
    slug: "tiergesundheit-ratgeber",
    category: "websites",
    domain: "tiergesundheit-ratgeber.de",
    image: "https://www.2fox4.de/wp-content/uploads/2025/08/Tiergesundheit-Ratgeber.png",
    date: "Januar 2024",
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
