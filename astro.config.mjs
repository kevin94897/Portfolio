import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",
  site: 'https://kevin-gomez.dev',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap(), tailwind()],
  compressHTML: true,

  build: {
    // Inline all CSS into HTML — eliminates the render-blocking external stylesheet
    // Trade-off: slightly larger HTML, but zero additional CSS requests on first load
    inlineStylesheets: 'always',
  },

  adapter: cloudflare()
});