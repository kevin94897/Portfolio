// src/lib/blog.ts — blog collection helpers shared by the index and post pages.
import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export const SITE_URL = "https://kevin-gomez.dev";

/** BreadcrumbList JSON-LD node for the Layout `schema` prop. */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/** Published posts, newest first (ties keep a stable alphabetical order). */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) =>
      b.data.pubDate.getTime() - a.data.pubDate.getTime() ||
      a.data.title.localeCompare(b.data.title, "es"),
  );
}

export function postUrl(post: Post): string {
  return `/blog/${post.slug}/`;
}

/** Minutes to read at ~200 words/min, ignoring Markdown syntax. */
export function readingTime(body: string): number {
  const words = body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#>*_`|\-\[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Posts most related to `post`: shared tags weigh most, same category next,
 * links already made from the post body last. Falls back to newest posts.
 */
export function relatedPosts(post: Post, all: Post[], count = 3): Post[] {
  const linked = new Set(
    [...post.body.matchAll(/\]\(\/blog\/([^/)]+)\/?\)/g)].map((m) => m[1]),
  );
  return all
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score:
        p.data.tags.filter((t) => post.data.tags.includes(t)).length * 3 +
        (p.data.category === post.data.category ? 2 : 0) +
        (linked.has(p.slug) ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ p }) => p);
}

export function formatDate(date: Date, lang: "es" | "en" = "es"): string {
  return date.toLocaleDateString(lang === "en" ? "en-US" : "es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
