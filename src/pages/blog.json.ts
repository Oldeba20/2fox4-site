/**
 * JSON-Index aller Blog-Posts.
 *
 * Wird vom Blockagent (2fox4.de/blockagent) gelesen, damit der Topic Scout
 * weiß, was schon geschrieben wurde, und keine Duplikate vorschlägt.
 *
 * Bewusst schlankes Schema — nur das, was Topic-Generation und
 * Duplikat-Erkennung brauchen:
 *   - title, slug, date
 *   - excerpt (Kurzfassung für Kontext, kein voller Content)
 *   - categories (Slugs)
 *
 * Wird zur Build-Zeit erzeugt; nach Deploy unter:
 *   https://www.2fox4.de/blog.json
 */
import type { APIRoute } from "astro";
import { getAllPosts } from "../lib/wp";

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();

  const payload = {
    generated: new Date().toISOString(),
    count: posts.length,
    posts: posts.map((p) => ({
      title: p.title,
      slug: p.slug,
      date: p.date,
      // Excerpt knapp halten, damit Topic-Scout-Prompts nicht explodieren
      excerpt: (p.excerpt || "").slice(0, 280),
      categories: p.categorySlugs,
      categoryNames: p.categoryNames,
    })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      // Erlaubt dem Blockagent-Backend (selbe Domain, aber sicher ist sicher),
      // diese Datei auch von einer anderen Subdomain / lokal zu laden.
      "access-control-allow-origin": "*",
      // 5 Minuten Browser-Cache reicht — Topic Scout wird selten aufgerufen.
      "cache-control": "public, max-age=300",
    },
  });
};
