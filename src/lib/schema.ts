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

/** LocalBusiness / ProfessionalService Schema mit City-Override. */
export function localBusinessSchema(opts?: {
  description?: string;
  image?: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    image: opts?.image,
    telephone: site.nap.phone,
    email: site.nap.email,
    priceRange: "€€",
    description: opts?.description,
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
      "Wunstorf",
      "Hameln",
      "Rinteln",
      "Minden",
    ]).map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}
