/**
 * Sitemap-Generator. Erzeugt zur Build-Zeit /sitemap.xml mit allen
 * bekannten Pfaden aus den Daten-Files plus den dynamisch geladenen
 * Blog-Posts.
 */
import type { APIRoute } from "astro";
import { cities } from "../data/cities";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { serviceCities } from "../data/service-cities";
import { plugins } from "../data/plugins";
import { references } from "../data/references";
import { legalList } from "../data/legal";
import { getAllPosts, getAllCategories } from "../lib/wp";

const SITE = "https://www.2fox4.de";

interface Entry {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split("T")[0];
  const entries: Entry[] = [];

  // Statische Top-Level
  entries.push(
    { loc: "/", changefreq: "weekly", priority: 1.0, lastmod: today },
    { loc: "/leistungen/", changefreq: "monthly", priority: 0.9, lastmod: today },
    { loc: "/regional/", changefreq: "monthly", priority: 0.9, lastmod: today },
    { loc: "/branchen/", changefreq: "monthly", priority: 0.85, lastmod: today },
    { loc: "/preise/", changefreq: "monthly", priority: 0.85, lastmod: today },
    { loc: "/wordpress-plugins/", changefreq: "monthly", priority: 0.8, lastmod: today },
    { loc: "/referenzen/", changefreq: "monthly", priority: 0.7, lastmod: today },
    { loc: "/blog/", changefreq: "daily", priority: 0.8, lastmod: today },
    { loc: "/kontakt/", changefreq: "yearly", priority: 0.7, lastmod: today },
    { loc: "/barrierefreiheit/", changefreq: "yearly", priority: 0.4, lastmod: today }
  );

  // Cities
  for (const city of cities) {
    entries.push({
      loc: `/${city.slug}/`,
      changefreq: "monthly",
      priority: 0.9,
      lastmod: today,
    });
  }

  // Services
  for (const svc of services) {
    entries.push({
      loc: `/leistungen/${svc.slug}/`,
      changefreq: "monthly",
      priority: 0.85,
      lastmod: today,
    });
  }

  // Branchen
  for (const ind of industries) {
    entries.push({
      loc: `/branchen/${ind.slug}/`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod: today,
    });
  }

  // Service × Stadt Matrix (z.B. /seo-stadthagen/, /wordpress-minden/)
  for (const sc of serviceCities) {
    entries.push({
      loc: `/${sc.slug}/`,
      changefreq: "monthly",
      priority: 0.9,
      lastmod: today,
    });
  }

  // Plugins
  for (const plugin of plugins) {
    entries.push({
      loc: `/wp-plugins/${plugin.slug}/`,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: today,
    });
  }

  // Legal
  for (const doc of legalList) {
    entries.push({
      loc: `/${doc.slug}/`,
      changefreq: "yearly",
      priority: 0.3,
      lastmod: today,
    });
  }

  // Blog posts — aus WP-REST-API (Cache vom Build)
  try {
    const posts = await getAllPosts();
    for (const post of posts) {
      entries.push({
        loc: `/blog/${post.slug}/`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: post.modified.split("T")[0],
      });
    }
    const cats = await getAllCategories();
    for (const cat of cats) {
      if (cat.count > 0) {
        entries.push({
          loc: `/blog/kategorie/${cat.slug}/`,
          changefreq: "weekly",
          priority: 0.5,
          lastmod: today,
        });
      }
    }
  } catch {
    /* offline-Build: Blogposts ohne sitemap-Eintrag */
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => {
    const loc = SITE + e.loc;
    return `  <url>
    <loc>${loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ""}${e.changefreq ? `\n    <changefreq>${e.changefreq}</changefreq>` : ""}${e.priority !== undefined ? `\n    <priority>${e.priority.toFixed(1)}</priority>` : ""}
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
