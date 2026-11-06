# Kevin Gómez Portfolio — Astro

Portfolio profesional y blog de Kevin Gómez Lázaro, Full Stack Developer en Lima, Perú. Desplegado en **Cloudflare Workers** en https://kevin-gomez.dev.

## Stack

- **Framework:** Astro 4 (`output: "hybrid"`: páginas estáticas + endpoints en el Worker)
- **Hosting:** Cloudflare Workers (`@astrojs/cloudflare`), config en `wrangler.jsonc`
- **Estilos:** Tailwind CSS + variables CSS (`src/styles/global.css`)
- **Animaciones:** GSAP (ScrollTrigger, SplitText) + Lenis smooth scroll
- **Carruseles:** Embla Carousel
- **Fuentes e iconos:** Inter y un subset de Phosphor, self-hosted en `public/fonts/`
- **i18n:** español (`/`) e inglés (`/en/`); el blog es solo en español
- **Formulario:** `/api/contact` → Brevo (email de aviso + lista) con respaldo en Cloudflare D1
- **Analítica:** GA4 + Microsoft Clarity con Consent Mode v2

## Primeros pasos

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción
npm run preview   # build + wrangler dev (Worker local, D1 local)
npm run deploy    # build + wrangler deploy
```

Variables y secretos:

| Nombre | Dónde | Uso |
|---|---|---|
| `BREVO_API_KEY` | `.env` en local, secreto del Worker en producción | Envío del formulario |
| `LEADS_PASSWORD` | `wrangler secret put LEADS_PASSWORD` (16+ caracteres) | Descarga de `/api/leads.csv` |
| `PUBLIC_GA_ID`, `PUBLIC_CLARITY_ID` | Opcionales | Sobrescriben los IDs de analítica |

## Estructura

```
src/
├── layouts/Layout.astro        # <head> SEO, JSON-LD, analítica, GSAP/Lenis
├── components/
│   ├── HomePage.astro          # One-page (secciones + scripts), usado por / y /en/
│   ├── Nav, Hero, About, Services, Experience, Projects, SkillsBars,
│   │   Testimonials, Workflow, Contact, Footer, ...
│   └── ProjectCase.astro       # Plantilla de caso de estudio
├── content/
│   ├── config.ts               # Schema del blog
│   └── blog/*.md               # Posts
├── assets/
│   ├── images/                 # Fotos y capturas de proyectos
│   └── blog/                   # Portadas de los posts
├── data/projects.ts            # Proyectos y casos de estudio
├── i18n/                       # Traducciones
├── lib/                        # blog, analytics, consent
└── pages/
    ├── index.astro, en/index.astro
    ├── blog/index.astro, blog/[slug].astro
    ├── proyectos/[slug].astro, en/projects/[slug].astro
    ├── rss.xml.ts              # Feed del blog
    └── api/
        ├── contact.ts          # Formulario (anti-spam + D1 + Brevo)
        └── leads.csv.ts        # Exportación de leads (Basic auth)
migrations/                     # Esquema de la base D1 (portfolio-leads)
public/                         # og-image, iconos, fuentes, PDFs, _headers
```

## Blog

Frontmatter de un post (`src/content/blog/mi-post.md`):

```yaml
---
title: "Título del post"
description: "Meta description, máximo 170 caracteres."
pubDate: 2026-11-10
updatedDate: 2026-12-01                    # opcional
category: "SEO"                            # ver enum en content/config.ts
tags: ["seo", "lima"]
featured: false                            # true = destacado en /blog/ (solo uno)
image: "../../assets/blog/mi-post.jpg"     # opcional, exportar a 1200×630
imageAlt: "Descripción de la imagen"       # obligatorio si hay image
---
```

La portada se usa en el post, en las tarjetas de `/blog/` y como `og:image`. Sin `image`, se usa `public/og-image.jpg`.

## Formulario y leads

1. `/api/contact` valida el Origin, aplica rate limit (5/min por IP), un honeypot y un tiempo mínimo de llenado.
2. Guarda el lead en D1 (`LEADS_DB`) **antes** de llamar a Brevo, y registra en la fila si el email (`notify_status`) y la lista (`list_status`) funcionaron.
3. Descarga todos los leads en CSV (compatible con Excel): `https://kevin-gomez.dev/api/leads.csv`, con cualquier usuario y la contraseña `LEADS_PASSWORD`.

Cambios de esquema: agrega un archivo en `migrations/` y aplícalo con
`npx wrangler d1 migrations apply portfolio-leads --remote`.
