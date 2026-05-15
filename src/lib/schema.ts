/**
 * Helfer zur Erzeugung von Schema.org-JSON-LD.
 * Wird in Pages als `schema={...}` an `BaseLayout` übergeben.
 */
import { site } from "../data/site";
import type { FAQItem } from "../components/FAQ.astro";

/** Plain-Text aus möglichem HTML extrahieren (für Schema-Answer). */
function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/** FAQPage-Schema aus FAQItems generieren. */
export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          item.answerText ?? (item.answerHtml ? stripHtml(item.answerHtml) : ""),
      },
    })),
  };
}

/** BreadcrumbList-Schema aus einer Liste von {name, url}. */
export function breadcrumbSchema(
  crumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : new URL(c.url, site.url).href,
    })),
  };
}

/** LocalBusiness / ProfessionalService Schema mit City-Override.
 *
 * Felder optimiert für Local-Pack-Rankings:
 * - image: Default-Branding-Bild (og-default.jpg) wenn nichts übergeben
 * - sameAs: Social-Profile (Facebook + Instagram) für Entity-Verifikation
 * - aggregateRating: Google-Reviews-Aggregate, ratingValue + reviewCount
 * - areaServed: erweitert um alle aktuellen Stadt-Pages
 */
export function localBusinessSchema(opts?: {
  description?: string;
  image?: string;
  areaServed?: string[];
  includeAggregateRating?: boolean;
}) {
  const defaultDescription =
    "Webdesign-Agentur mit Sitz in Sachsenhagen für Unternehmen in Schaumburg, der Region Hannover, dem Weserbergland und dem Mittelweser-Gebiet. Spezialisiert auf WordPress, WooCommerce, SEO und KI-gestützte Lösungen — seit 2008.";

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    image: opts?.image ?? `${site.url}/og-default.jpg`,
    logo: `${site.url}/favicon.svg`,
    telephone: site.nap.phone,
    email: site.nap.email,
    priceRange: "€€",
    description: opts?.description ?? defaultDescription,
    foundingDate: "2008",
    slogan: "Websites and more — persönlich, regional, seit 2008.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.nap.street,
      addressLocality: site.nap.city,
      postalCode: site.nap.zip,
      addressRegion: "Niedersachsen",
      addressCountry: site.nap.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: (opts?.areaServed ?? [
      "Stadthagen",
      "Bückeburg",
      "Sachsenhagen",
      "Wunstorf",
      "Hameln",
      "Rinteln",
      "Minden",
      "Nienburg",
      "Bad Münder",
      "Barsinghausen",
    ]).map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: site.social
      .filter((s) => s.url)
      .map((s) => s.url),
  };

  // AggregateRating optional aktivierbar — vor allem Startseite & /referenzen/
  // sollten das setzen, Stadt-Pages haben separate Review-Aggregates via
  // FAQPage + ProfessionalService.
  if (opts?.includeAggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "19",
      bestRating: "5",
      worstRating: "1",
    };
  }

  return schema;
}

/** Service-Schema für /leistungen/<slug>/- oder /branchen/<slug>/-Pages.
 *
 * Bindet als provider die LocalBusiness-Entität via @id-Referenz an, sodass
 * Google die Service-Page eindeutig 2fox4 zuordnen kann (statt isoliert zu
 * verarbeiten). serviceType wird in Google's Knowledge Panel angezeigt. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
  /** Slug ohne führenden Slash. Wird mit `basePath` (Default "/leistungen/")
   *  zur kanonischen URL zusammengesetzt. */
  slug: string;
  /** Pfad-Prefix mit führendem und nachfolgendem Slash. Default
   *  "/leistungen/". Für Branchen-Pages "/branchen/" übergeben. */
  basePath?: string;
  areaServed?: string[];
}) {
  const basePath = opts.basePath ?? "/leistungen/";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: (opts.areaServed ?? [
      "Stadthagen",
      "Bückeburg",
      "Sachsenhagen",
      "Wunstorf",
      "Hameln",
      "Rinteln",
      "Minden",
      "Nienburg",
      "Bad Münder",
      "Barsinghausen",
    ]).map((name) => ({ "@type": "City", name })),
    url: `${site.url}${basePath}${opts.slug}/`,
  };
}
