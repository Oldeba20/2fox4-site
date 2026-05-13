/**
 * Daten für die 9 Stadt-Landingpages.
 *
 * Die Reihenfolge im Array bestimmt die Reihenfolge in der `/regional/`-Übersicht.
 * Distanzen sind grobe Maps-Schätzungen ab Sachsenhagen — bei Bedarf in der
 * `distance.note` nachschärfen (oder einmal exakt in Google Maps prüfen).
 *
 * `localRefs` ist optional: Nur Städte mit echten Projekt-Referenzen befüllt.
 * Wenn leer, wird die LocalRefs-Sektion auf der Stadt-Seite ausgeblendet.
 */
import type { LocalRef } from "../components/LocalRefs.astro";
import type { FAQItem } from "../components/FAQ.astro";

export interface City {
  slug: string;
  name: string;
  /** Vollständiger Genitiv ("Stadthagener", "Bückeburger") */
  inhabitantAdjective: string;
  /** km-Distanz von Sachsenhagen */
  distance: { km: number; note: string };
  /** Geo-Koordinaten der Stadt für meta-Tags */
  geo: { latitude: number; longitude: number };
  /** Eyebrow im Hero (kurz) */
  heroEyebrow: string;
  /** Zwei-Zeilen-Titel im Hero */
  heroTitleLine1: string;
  heroTitleLine2: string;
  /** Sub-Text im Hero */
  heroSub: string;
  /** Lokale Referenzen (max. 2) */
  localRefs?: LocalRef[];
  /** Stadt-spezifische FAQs (optional) — sonst werden Default-FAQs verwendet */
  faq?: FAQItem[];
}

/** Default-FAQs, die für jede Stadt gelten, wenn keine eigenen definiert sind. */
function defaultFAQ(city: string, distanceKm: number): FAQItem[] {
  return [
    {
      question: `Was kostet eine Website in ${city}?`,
      answerHtml: `Eine schlanke Visitenkartenseite ist dank unserer KI-gestützten Umsetzung schon ab rund <strong>500 €</strong> machbar — kleine Projekte werden so endlich auch für Solo-Selbstständige und Vereine bezahlbar. Ein vollwertiger WordPress-Auftritt mit SEO und individuellem Design liegt typischerweise zwischen <strong>1.500 € und 5.000 €</strong>. Onlineshops auf WooCommerce oder Shopware ab <strong>2.500 €</strong>. Vorab machen wir ein kostenloses Erstgespräch und kalkulieren transparent — ohne versteckte Kosten oder Lock-in.`,
    },
    {
      question: "Trefft ihr euch persönlich vor Ort?",
      answerHtml: `Selbstverständlich. Unser Büro in Sachsenhagen liegt rund ${distanceKm} km von ${city} entfernt. Wir kommen gerne zu dir — oder du kommst zu uns. Für Erstgespräche bieten wir auch Videocalls an, falls du es schnell und unkompliziert magst.`,
    },
    {
      question: "Wie lange dauert ein Website-Projekt?",
      answerHtml: `Eine kompakte WordPress-Website ist in 3-4 Wochen umgesetzt. Größere Projekte mit Shop oder umfangreichem Content nehmen 6-10 Wochen in Anspruch. Wir planen gemeinsam einen realistischen Zeitplan und halten ihn auch ein — du kennst ja die typischen Agentur-Klagen über Verzögerungen.`,
    },
    {
      question: "Bietet ihr auch SEO und laufende Betreuung?",
      answerHtml: `Ja. Auf Wunsch übernehmen wir nach dem Launch die Wartung, Sicherheits-Updates, Backups und kontinuierliche SEO-Optimierung. Auch lokale Suchmaschinenoptimierung speziell für ${city} ist Teil unseres Angebots — inklusive Google Business Profile, Schema.org-Markup und regionalem Content.`,
    },
    {
      question: "Kann ich später eigenständig Inhalte pflegen?",
      answerHtml: `Absolut. WordPress ist genau dafür gebaut. Wir liefern dir eine Einführung und kurze Video-Anleitungen mit. Wer keine Zeit oder Lust hat, kann uns die Pflege auch komplett überlassen — auf Stunden- oder Pauschalbasis.`,
    },
  ];
}

export const cities: City[] = [
  {
    slug: "webdesign-stadthagen",
    name: "Stadthagen",
    inhabitantAdjective: "Stadthagener",
    distance: { km: 9, note: "ca. 12 Minuten mit dem Auto über die L450" },
    geo: { latitude: 52.3244, longitude: 9.2074 },
    heroEyebrow: "Webagentur für Stadthagen · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Stadthagen — direkt aus der Region.",
    heroSub:
      "Wir bauen Websites, Onlineshops und SEO-Strategien für Unternehmen aus Stadthagen, Bückeburg und dem Schaumburger Land. Unser Büro liegt in Sachsenhagen — nur 9 km von deiner Innenstadt entfernt. Kein anonymer Agentur-Konzern, sondern deine Ansprechpartner aus der Region.",
    localRefs: [
      {
        url: "renaissance-stadthagen.de",
        image:
          "https://www.2fox4.de/wp-content/uploads/2024/01/Stadthagen-renaissance.jpg",
        href: "/referenzen/renaissance-stadthagen/",
        tag: "Vereins-Website · Stadthagen",
        title: "Renaissanceverein Stadthagen",
        description:
          "Webdesign und Wartung für den Verein, der die Renaissance-Geschichte Stadthagens lebendig hält.",
      },
      {
        url: "tattoo-stadthagen.de",
        image:
          "https://www.2fox4.de/wp-content/uploads/2025/10/Tattoo-Studio-Stadthagen-Website.jpg",
        href: "/referenzen/tattoo-studio-stadthagen/",
        tag: "Studio-Website · Stadthagen",
        title: "Tattoo- & Piercing Studio Stadthagen",
        description:
          "WordPress-Website mit lokaler SEO-Optimierung, Google-Business-Eintrag und Buchungs-Hinweisen.",
      },
    ],
    faq: [
      {
        question: "Was kostet eine Website in Stadthagen?",
        answerHtml: `Eine schlanke Visitenkartenseite ist dank unserer KI-gestützten Umsetzung schon ab rund <strong>500 €</strong> machbar — kleine Projekte werden so endlich auch für Solo-Selbstständige und Vereine bezahlbar. Ein vollwertiger WordPress-Auftritt mit SEO und individuellem Design liegt typischerweise zwischen <strong>1.500 € und 5.000 €</strong>. Onlineshops auf WooCommerce oder Shopware ab <strong>2.500 €</strong>. Vorab machen wir ein kostenloses Erstgespräch und kalkulieren transparent — ohne versteckte Kosten oder Lock-in.`,
      },
      {
        question: "Trefft ihr euch persönlich vor Ort?",
        answerHtml: `Selbstverständlich. Unser Büro in Sachsenhagen liegt rund 9 km von der Stadthagener Innenstadt entfernt. Wir kommen gerne zu dir — oder du kommst zu uns. Für Erstgespräche bieten wir auch Videocalls an, falls du es schnell und unkompliziert magst.`,
      },
      {
        question: "Wie lange dauert ein Website-Projekt?",
        answerHtml: `Eine kompakte WordPress-Website ist in 3-4 Wochen umgesetzt. Größere Projekte mit Shop oder umfangreichem Content nehmen 6-10 Wochen in Anspruch. Wir planen gemeinsam einen realistischen Zeitplan und halten ihn auch ein.`,
      },
      {
        question: "Habt ihr Referenzen aus Stadthagen?",
        answerHtml: `Ja: unter anderem die Website des Renaissancevereins Stadthagen und ein Tattoo- und Piercing-Studio in Stadthagen. Beide findest du weiter oben auf dieser Seite oder in unserer kompletten <a href="/referenzen/" class="text-[var(--color-accent)]">Referenzübersicht</a>.`,
      },
      {
        question: "Bietet ihr auch SEO und laufende Betreuung?",
        answerHtml: `Ja. Auf Wunsch übernehmen wir nach dem Launch die Wartung, Sicherheits-Updates, Backups und kontinuierliche SEO-Optimierung. Auch lokale Suchmaschinenoptimierung speziell für Stadthagen ist Teil unseres Angebots — inklusive Google Business Profile, Schema.org-Markup und regionalem Content.`,
      },
      {
        question: "Kann ich später eigenständig Inhalte pflegen?",
        answerHtml: `Absolut. WordPress ist genau dafür gebaut. Wir liefern dir eine Einführung und kurze Video-Anleitungen mit. Wer keine Zeit oder Lust hat, kann uns die Pflege auch komplett überlassen — auf Stunden- oder Pauschalbasis.`,
      },
    ],
  },
  {
    slug: "webdesign-bueckeburg",
    name: "Bückeburg",
    inhabitantAdjective: "Bückeburger",
    distance: { km: 18, note: "ca. 20 Minuten mit dem Auto" },
    geo: { latitude: 52.2611, longitude: 9.0517 },
    heroEyebrow: "Webagentur für Bückeburg · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Bückeburg & die Residenz.",
    heroSub:
      "Wir bauen Websites, Onlineshops und SEO-Strategien für Unternehmen aus Bückeburg, dem Hofstaat und dem Schaumburger Land. Unser Büro liegt in Sachsenhagen — nur 18 km von der Schloss-Stadt entfernt. Persönlich, regional, mit langjähriger Erfahrung im Mittelstand.",
  },
  {
    slug: "webdesign-wunstorf",
    name: "Wunstorf",
    inhabitantAdjective: "Wunstorfer",
    distance: { km: 12, note: "ca. 14 Minuten mit dem Auto" },
    geo: { latitude: 52.4231, longitude: 9.4267 },
    heroEyebrow: "Webagentur für Wunstorf · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Wunstorf & Steinhuder Meer.",
    heroSub:
      "Websites und Onlineshops für Wunstorf, Steinhude und die Region rund ums Steinhuder Meer. Unser Sitz in Sachsenhagen ist quasi um die Ecke — 12 km, 14 Minuten. Wir helfen Handwerk, Gastronomie, Tourismus und Mittelstand zu mehr Sichtbarkeit.",
  },
  {
    slug: "webdesign-hameln",
    name: "Hameln",
    inhabitantAdjective: "Hamelner",
    distance: { km: 50, note: "ca. 50 Minuten mit dem Auto" },
    geo: { latitude: 52.1031, longitude: 9.3568 },
    heroEyebrow: "Webagentur für Hameln · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Hameln & das Weserbergland.",
    heroSub:
      "Websites und Onlineshops für die Rattenfänger-Stadt und das Weserbergland. Wir sind zwar 50 km entfernt — dafür mit echter Mittelstands-Erfahrung und einer Liebe zu detailverliebten Projekten. Termine vor Ort sind selbstverständlich möglich.",
  },
  {
    slug: "webdesign-rinteln",
    name: "Rinteln",
    inhabitantAdjective: "Rintelner",
    distance: { km: 30, note: "ca. 30 Minuten mit dem Auto" },
    geo: { latitude: 52.1853, longitude: 9.0793 },
    heroEyebrow: "Webagentur für Rinteln · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Rinteln an der Weser.",
    heroSub:
      "Websites, SEO und WordPress-Service für Rintelner Unternehmen. Wir sitzen in Sachsenhagen, sind in 30 Minuten bei dir und kennen die Region wie unsere Westentasche. Persönliche Betreuung statt Großagentur-Anonymität.",
  },
  {
    slug: "webdesign-minden",
    name: "Minden",
    inhabitantAdjective: "Mindener",
    distance: { km: 38, note: "ca. 35 Minuten mit dem Auto" },
    geo: { latitude: 52.2887, longitude: 8.9171 },
    heroEyebrow: "Webagentur für Minden · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Minden & Ostwestfalen-Lippe.",
    heroSub:
      "Websites, Onlineshops und SEO für Mindener und OWL-Unternehmen. Wir liefern WordPress-Lösungen, die ohne Pagebuilder-Ballast schnell und mobil-optimiert sind. Aus Sachsenhagen — 38 km, 35 Minuten Fahrtzeit.",
  },
  {
    slug: "webdesign-nienburg",
    name: "Nienburg",
    inhabitantAdjective: "Nienburger",
    distance: { km: 35, note: "ca. 35 Minuten mit dem Auto" },
    geo: { latitude: 52.6396, longitude: 9.2189 },
    heroEyebrow: "Webagentur für Nienburg · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Nienburg an der Weser.",
    heroSub:
      "Websites und WordPress-Service für Nienburger Unternehmen. Aus Sachsenhagen sind wir in 35 Minuten bei dir — und betreuen Mittelstand, Handwerk und Vereine in der gesamten Region Mittelweser.",
  },
  {
    slug: "webdesign-bad-muender",
    name: "Bad Münder",
    inhabitantAdjective: "Bad Münderaner",
    distance: { km: 45, note: "ca. 45 Minuten mit dem Auto" },
    geo: { latitude: 52.1932, longitude: 9.4666 },
    heroEyebrow: "Webagentur für Bad Münder · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Bad Münder am Deister.",
    heroSub:
      "Webdesign, SEO und WordPress-Wartung für Unternehmen aus Bad Münder und der Deister-Region. Unser Sitz in Sachsenhagen ist 45 Minuten entfernt — Termine vor Ort planen wir gerne langfristig in Tagespaketen.",
  },
  {
    slug: "webdesign-barsinghausen",
    name: "Barsinghausen",
    inhabitantAdjective: "Barsinghausener",
    distance: { km: 17, note: "ca. 20 Minuten mit dem Auto" },
    geo: { latitude: 52.3056, longitude: 9.4574 },
    heroEyebrow: "Webagentur für Barsinghausen · seit 2008",
    heroTitleLine1: "Webdesigner für",
    heroTitleLine2: "Barsinghausen am Deister.",
    heroSub:
      "Websites, Onlineshops und SEO-Strategien für Barsinghausener Unternehmen. Unser Büro in Sachsenhagen liegt nur 17 km entfernt — wir kommen gerne vorbei für ein persönliches Erstgespräch.",
  },
];

/** Hole eine Stadt per Slug; wirft, wenn nicht gefunden. */
export function cityBySlug(slug: string): City {
  const city = cities.find((c) => c.slug === slug);
  if (!city) throw new Error(`City not found: ${slug}`);
  return city;
}

/** Hilfsfunktion: FAQs für eine Stadt — eigene oder Default. */
export function faqFor(city: City): FAQItem[] {
  return city.faq ?? defaultFAQ(city.name, city.distance.km);
}
