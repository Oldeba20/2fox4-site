/**
 * Sitemap-Generator. Erzeugt zur Build-Zeit /sitemap.xml mit allen
 * bekannten Pfaden aus den Daten-Files plus den dynamisch geladenen
 * Blog-Posts.
 *
 * lastmod = EHRLICH: echtes letztes Commit-Datum der jeweiligen Quelldatei
 * (via `git log`), nicht „heute". Grund: Wenn jede Seite bei jedem Deploy
 * lastmod=heute meldet, lernt Google, das Feld zu ignorieren, und crawlt
 * unveränderte Seiten seltener neu. Voraussetzung: GitHub-Actions-Checkout
 * mit `fetch-depth: 0` (volle History) — siehe .github/workflows/deploy.yml.
 * Bei Offline-/Sandbox-Builds ohne Git greift FALLBACK_DATE.
 */
import type { APIRoute } from "astro";
import { execSync } from "node:child_process";
import { cities } from "../data/cities";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { serviceCities } from "../data/service-cities";
import { plugins } from "../data/plugins";
import { references } from "../data/references";
import { legalList } from "../data/legal";
import { getAllPosts, getAllCategories } from "../lib/wp";

const SITE = "https://www.2fox4.de";

// Fallback, falls Git nicht verfügbar ist (Offline-Build). Bewusst KEIN
// `today`, um das „immer heute"-Antimuster auch im Fallback zu vermeiden.
const FALLBACK_DATE = "2026-06-26";

const _dateCache = new Map<string, string>();
/** Letztes Commit-Datum (YYYY-MM-DD) einer Quelldatei, gecacht. */
function gitDate(file: string): string {
  const cached = _dateCache.get(file);
  if (cached) return cached;
  let d = FALLBACK_DATE;
  try {
    const out = execSync(`git log -1 --format=%cs -- "${file}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) d = out;
  } catch {
    /* offline-Build ohne Git → FALLBACK_DATE */
  }
  _dateCache.set(file, d);
  return d;
}

interface Entry {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export const GET: APIRoute = async () => {
  const entries: Entry[] = [];

  // Statische Top-Level — lastmod = Commit-Datum der jeweiligen .astro-Seite
  const staticPages: Array<[string, string, number, Entry["changefreq"]]> = [
    ["/", "src/pages/index.astro", 1.0, "weekly"],
    ["/leistungen/", "src/pages/leistungen/index.astro", 0.9, "monthly"],
    ["/regional/", "src/pages/regional/index.astro", 0.9, "monthly"],
    ["/branchen/", "src/pages/branchen/index.astro", 0.85, "monthly"],
    ["/preise/", "src/pages/preise/index.astro", 0.85, "monthly"],
    ["/wordpress-plugins/", "src/pages/wordpress-plugins/index.astro", 0.8, "monthly"],
    ["/referenzen/", "src/pages/referenzen/index.astro", 0.7, "monthly"],
    ["/ueber-uns/", "src/pages/ueber-uns/index.astro", 0.6, "yearly"],
    ["/blog/", "src/pages/blog/index.astro", 0.8, "daily"],
    ["/kontakt/", "src/pages/kontakt/index.astro", 0.7, "yearly"],
    ["/barrierefreiheit/", "src/pages/barrierefreiheit/index.astro", 0.4, "yearly"],
  ];
  for (const [loc, file, priority, changefreq] of staticPages) {
    entries.push({ loc, changefreq, priority, lastmod: gitDate(file) });
  }

  // Cities — lastmod = Commit-Datum der Daten-Datei
  const citiesDate = gitDate("src/data/cities.ts");
  for (const city of cities) {
    entries.push({ loc: `/${city.slug}/`, changefreq: "monthly", priority: 0.9, lastmod: citiesDate });
  }

  // Services
  const servicesDate = gitDate("src/data/services.ts");
  for (const svc of services) {
    entries.push({ loc: `/leistungen/${svc.slug}/`, changefreq: "monthly", priority: 0.85, lastmod: servicesDate });
  }

  // Branchen
  const industriesDate = gitDate("src/data/industries.ts");
  for (const ind of industries) {
    entries.push({ loc: `/branchen/${ind.slug}/`, changefreq: "monthly", priority: 0.8, lastmod: industriesDate });
  }

  // Service × Stadt Matrix (z.B. /seo-stadthagen/, /wordpress-minden/)
  const serviceCitiesDate = gitDate("src/data/service-cities.ts");
  for (const sc of serviceCities) {
    entries.push({ loc: `/${sc.slug}/`, changefreq: "monthly", priority: 0.9, lastmod: serviceCitiesDate });
  }

  // Plugins
  const pluginsDate = gitDate("src/data/plugins.ts");
  for (const plugin of plugins) {
    entries.push({ loc: `/wp-plugins/${plugin.slug}/`, changefreq: "monthly", priority: 0.7, lastmod: pluginsDate });
  }

  // Legal
  const legalDate = gitDate("src/data/legal.ts");
  for (const doc of legalList) {
    entries.push({ loc: `/${doc.slug}/`, changefreq: "yearly", priority: 0.3, lastmod: legalDate });
  }

  // Blog posts — ehrliches lastmod aus WP (post.modified)
  const blogIndexDate = gitDate("src/pages/blog/index.astro");
  try {
    const posts = await getAllPosts();
    for (const post of posts) {
      const mod = post.modified ? post.modified.split("T")[0] : blogIndexDate;
      entries.push({ loc: `/blog/${post.slug}/`, changefreq: "monthly", priority: 0.6, lastmod: mod });
    }
    const cats = await getAllCategories();
    for (const cat of cats) {
      if (cat.count > 0) {
        entries.push({ loc: `/blog/kategorie/${cat.slug}/`, changefreq: "weekly", priority: 0.5, lastmod: blogIndexDate });
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
