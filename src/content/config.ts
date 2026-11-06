import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    // Meta description — keep it within Google's ~160-char snippet.
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      "Precios",
      "Estrategia",
      "E-commerce",
      "SEO",
      "Rendimiento",
      "Automatización",
      "IA",
      "Seguridad",
      "Legal",
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Shown first on /blog/ regardless of date (only one post should set it).
    featured: z.boolean().default(false),
    // Cover + og:image. Path relative to the .md file, e.g.
    // "../../assets/blog/mi-post.jpg". Export it at 1200x630 (1.91:1).
    image: image().optional(),
    imageAlt: z.string().optional(),
  }).refine((d) => !d.image || d.imageAlt, {
    message: "imageAlt is required when image is set",
    path: ["imageAlt"],
  }),
});

export const collections = { blog };
