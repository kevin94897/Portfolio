# Kevin Gómez Portfolio — Astro

Portfolio profesional migrado a **Astro** con SEO técnico avanzado, animación de carga y container desktop.

## Stack

- **Framework:** Astro 4.x (Static Generation)
- **Styling:** CSS Variables + Tailwind CSS
- **Interactions:** Bento Grid UI (Desktop) + Custom Vertical Slider (Mobile)
- **Carousel:** Embla Carousel (Testimonials)
- **Contact Form:** Brevo Iframe Integration
- **Icons:** Phosphor Icons
- **Fonts:** Syne + DM Mono + DM Sans (Google Fonts)
- **SEO:** JSON-LD, Open Graph, Twitter Card, Canonical, Geo tags
- **Sitemap:** @astrojs/sitemap (auto-generated)

## Primeros pasos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura

```
src/
├── layouts/
│   └── Layout.astro          # Head SEO + JSON-LD + fuentes
├── pages/
│   └── index.astro           # Página principal + todos los scripts
├── components/
│   ├── LoadingScreen.astro   # Animación de carga
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Services.astro
│   ├── Experience.astro
│   ├── Projects.astro        # Embla carousel x11 proyectos
│   ├── SkillsBars.astro
│   ├── Testimonials.astro    # Embla carousel x4
│   ├── Workflow.astro
│   ├── Pricing.astro
│   ├── Contact.astro
│   └── Footer.astro
└── styles/
    └── global.css            # Design system + container
public/
├── robots.txt
├── favicon.svg
└── site.webmanifest
```

## SEO implementado

- ✅ Un solo `<h1>` en Hero
- ✅ `<h2>` semántico por sección con keywords
- ✅ Meta title / description optimizados para "full stack developer lima peru"
- ✅ Open Graph + Twitter Card
- ✅ Canonical URL
- ✅ JSON-LD: Person + ProfessionalService + WebSite
- ✅ Geo tags (Lima, Perú)
- ✅ robots.txt + sitemap automático
- ✅ `<time>` en fechas de experiencia
- ✅ `aria-label`, `role`, `aria-live` en carruseles
- ✅ Skip-to-content link
- ✅ `rel="noopener noreferrer"` en links externos

## Antes de hacer deploy

1. Reemplaza `https://kevin.grupo-gomez.com` en `astro.config.mjs` y `Layout.astro` con tu dominio real
2. Agrega el archivo `public/KevinGomezLazaro_CV2026.pdf`
3. Crea `public/og-image.jpg` (1200×630px) para Open Graph
4. Agrega `public/icon-192.png` y `public/icon-512.png` para el web manifest
