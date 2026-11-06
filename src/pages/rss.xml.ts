// RSS feed of the blog — /rss.xml
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getPosts, postUrl, SITE_URL } from "../lib/blog";

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  return rss({
    title: "Blog de Kevin Gómez — Desarrollo web para empresas",
    description:
      "Guías prácticas sobre precios de páginas web, tiendas virtuales, pasarelas de pago, SEO y velocidad para empresas en Perú.",
    site: SITE_URL,
    customData: "<language>es-PE</language>",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: postUrl(post),
      pubDate: post.data.pubDate,
      categories: [post.data.category, ...post.data.tags],
    })),
  });
};
