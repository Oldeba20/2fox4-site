/**
 * Blog-Daten-Quelle (Hybrid).
 *
 * Posts kommen aus zwei Quellen, die zur Build-Zeit gemerged werden:
 *
 *   1) WP-Cache (blog-cache.json)
 *      → Die historischen Posts aus WordPress. Werden Schritt für Schritt
 *        nach Markdown migriert.
 *
 *   2) Astro Content Collection "blog" (src/content/blog/*.md)
 *      → Neue Posts, geschrieben über Pages CMS (oder direkt im Repo).
 *        Pages CMS legt Bilder unter public/uploads/blog/ ab.
 *
 * Merge-Regel: Bei Slug-Konflikt gewinnt die MD-Version (Migration-Pfad).
 * `draft: true` in MD-Frontmatter schließt den Post aus dem Build aus.
 *
 * Wenn ein Post in MD existiert, wird sein WP-Pendant ignoriert — so kann
 * man Posts einzeln migrieren, ohne URLs zu brechen oder Duplikate zu erzeugen.
 */

import blogCache from "../data/blog-cache.json";
import { getCollection } from "astro:content";
import { marked } from "marked";

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: string;
  /** HTML, schon von Inline-Styles bereinigt */
  contentHtml: string;
  /** Auszug, von HTML befreit */
  excerpt: string;
  link: string;
  featuredImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  /** Slugs der zugeordneten Kategorien */
  categorySlugs: string[];
  /** Namen der Kategorien (parallel zu slugs) */
  categoryNames: string[];
  /** RankMath SEO-Felder, wenn vorhanden */
  rankMath?: {
    title?: string;
    description?: string;
  };
}

export interface WPCategory {
  id: number;
  slug: string;
  name: string;
  description: string;
  count: number;
}

interface BlogCache {
  posts: WPPost[];
  categories: WPCategory[];
}

const cache = blogCache as unknown as BlogCache;

/**
 * Wandelt einen Markdown-Post aus der Content-Collection in das gleiche
 * Shape wie WPPost. So bleibt der Rest der Codebase (blog/index.astro,
 * blog/[slug].astro, kategorie/*) unverändert.
 *
 * Wir nutzen `marked` für die MD→HTML-Konvertierung, weil wir den HTML-String
 * für `set:html` brauchen — Astros native <Content />-Komponente kann nicht
 * außerhalb einer Astro-Page als String gerendert werden.
 */
function mdToPost(entry: {
  id: string;
  body: string;
  data: {
    title: string;
    date: Date;
    modified?: Date;
    description: string;
    cover?: { src: string; alt: string };
    categories: string[];
    categoryNames: string[];
    seoTitle?: string;
    seoDescription?: string;
  };
}): WPPost {
  const slug = entry.id.replace(/\.(md|mdx)$/, "");
  const html = marked.parse(entry.body, { async: false }) as string;
  const data = entry.data;

  return {
    id: -1, // MD-Posts haben keine WP-ID
    slug,
    date: data.date.toISOString(),
    modified: (data.modified ?? data.date).toISOString(),
    title: data.title,
    contentHtml: html,
    excerpt: data.description,
    link: `/blog/${slug}/`,
    featuredImage: data.cover
      ? { src: data.cover.src, alt: data.cover.alt }
      : undefined,
    categorySlugs: data.categories,
    categoryNames: data.categoryNames,
    rankMath: {
      title: data.seoTitle,
      description: data.seoDescription,
    },
  };
}

/**
 * Alle Posts — gemerged aus WP-Cache und Markdown-Collection.
 * MD gewinnt bei Slug-Konflikt; draft:true wird ausgeschlossen.
 */
export async function getAllPosts(): Promise<WPPost[]> {
  const mdEntries = await getCollection(
    "blog",
    ({ data }: { data: { draft?: boolean } }) => data.draft !== true,
  );
  const mdPosts = mdEntries.map(mdToPost);
  const mdSlugs = new Set(mdPosts.map((p) => p.slug));

  const wpFiltered = cache.posts.filter((p) => !mdSlugs.has(p.slug));
  const merged = [...mdPosts, ...wpFiltered];

  // Neueste zuerst
  merged.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return merged;
}

/**
 * Alle Kategorien — aus WP-Cache, plus dynamisch zusammengezählt aus MD-Posts.
 * Count = wirkliche Anzahl im finalen Merge, damit Pill-Badges stimmen.
 */
export async function getAllCategories(): Promise<WPCategory[]> {
  const posts = await getAllPosts();
  const base = new Map<string, WPCategory>();

  // Start mit WP-Kategorien (haben id/description), count auf 0 setzen
  for (const c of cache.categories) {
    base.set(c.slug, { ...c, count: 0 });
  }

  // Aus den finalen Posts hochzählen + ggf. neue Kategorien aus MD aufnehmen
  for (const p of posts) {
    p.categorySlugs.forEach((slug, i) => {
      let cat = base.get(slug);
      if (!cat) {
        cat = {
          id: -1,
          slug,
          name: p.categoryNames[i] ?? slug,
          description: "",
          count: 0,
        };
        base.set(slug, cat);
      }
      cat.count++;
    });
  }

  return Array.from(base.values());
}
