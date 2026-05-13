/**
 * Astro Content Collections.
 *
 * Aktuell nur "blog" — wird nach und nach mit Markdown-Posts gefüttert.
 * Bis die Migration von WordPress (blog-cache.json) komplett ist, mergen
 * wir beide Quellen in lib/wp.ts. Bei Slug-Konflikt gewinnt MD.
 *
 * Pages CMS (pagescms.org) schreibt direkt in src/content/blog/ und legt
 * Bilder unter public/uploads/blog/ ab.
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Glob-Loader liest *.md / *.mdx aus src/content/blog/
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    /** ISO-Datum, z. B. "2026-05-13". Pages CMS schreibt das so raus. */
    date: z.coerce.date(),
    /** Letztes Änderungsdatum (optional). */
    modified: z.coerce.date().optional(),
    /** Kurzbeschreibung — Meta-Description + Listing-Excerpt */
    description: z.string().min(20).max(220),
    /** Optional: Coverbild. Pages CMS legt es unter /uploads/blog/ ab. */
    cover: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    /** Slugs der Kategorien (müssen mit blog-cache.json-Slugs konsistent sein). */
    categories: z.array(z.string()).default([]),
    /** Anzeige-Namen der Kategorien — wird parallel zu slugs gepflegt. */
    categoryNames: z.array(z.string()).default([]),
    /** Wenn true: Post wird nicht gebuildet. */
    draft: z.boolean().default(false),
    /** SEO-Override für Title-Tag (sonst = title) */
    seoTitle: z.string().optional(),
    /** SEO-Override für Meta-Description (sonst = description) */
    seoDescription: z.string().optional(),
  }),
});

export const collections = { blog };
