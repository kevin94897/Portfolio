import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
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
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
