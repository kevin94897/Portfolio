// src/data/projects.ts
// Single source of truth for portfolio projects: the home coverflow
// (components/Projects.astro) and the case-study pages
// (pages/proyectos/[slug].astro, pages/en/projects/[slug].astro) read from here.
//
// Case-study copy only states what was actually built. Add real outcomes
// (speed, sales, leads) to `results` when the client can share them.

import imgLiwilu from "../assets/images/portfolio/Liwilu.webp";
import imgAstra from "../assets/images/portfolio/Astramedical.webp";
import imgAicon from "../assets/images/portfolio/Aiconstruye.webp";
import imgGustos from "../assets/images/portfolio/Gustoscoffee.webp";
import imgWhaticket from "../assets/images/portfolio/whaticket.webp";
import imgChapa from "../assets/images/portfolio/Chapatubeca.webp";
import imgSegway from "../assets/images/portfolio/Segwaysports.webp";
import imgColecciones from "../assets/images/portfolio/KGFront.webp";
import imgKGStore from "../assets/images/portfolio/KGStore.webp";
import imgPuntoAzul from "../assets/images/portfolio/Puntoazul.webp";
import imgCafePlaza from "../assets/images/portfolio/CafePlaza.webp";
import imgNeoRun from "../assets/images/portfolio/NeoRun.webp";

export type Lang = "es" | "en";

export interface CaseStudy {
  /** Page <title> — search-oriented, ~60 chars. */
  seoTitle: string;
  /** Meta description, 140–160 chars. */
  seoDescription: string;
  /** Industry / sector shown in the facts sidebar. */
  sector: string;
  challenge: string;
  solution: string;
  /** What was delivered, one line each. */
  highlights: string[];
  /** Measured outcomes — leave empty until there is real data. */
  results?: string[];
}

export interface Project {
  slug: string;
  name: string;
  /** Category label, already English on the home page — kept as-is. */
  category: string;
  categoryEs: string;
  /** i18n key of the short description used on the home page. */
  descKey: string;
  stack: string[];
  url: string;
  img: ImageMetadata;
  demo?: { user: string; pass: string };
  /** Blog posts (slugs) related to this project, for internal linking. */
  blog: string[];
  caseStudy: Record<Lang, CaseStudy>;
}

export const projects: Project[] = [
  {
    slug: "neorun",
    name: "NEOrun",
    category: "Interactive Game",
    categoryEs: "Juego interactivo",
    descKey: "p.neorun.desc",
    stack: ["React", "Phaser 3", "Supabase", "Vite"],
    url: "https://neorun.neoingredients.com.pe/",
    img: imgNeoRun,
    blog: ["landing-page-que-convierte", "freelance-vs-agencia-desarrollo-web"],
    caseStudy: {
      es: {
        seoTitle: "NEOrun — Juego interactivo para evento de marca en React y Phaser",
        seoDescription:
          "Caso de estudio: experiencia interactiva en tótem para NEOingredients con onboarding de marca, juego runner en Phaser 3 y certificado descargable.",
        sector: "Activación de marca / eventos",
        challenge:
          "NEOingredients necesitaba una experiencia que atrajera a los visitantes de su stand durante un evento, presentara la marca de forma memorable y dejara un registro de cada participante.",
        solution:
          "Desarrollé una aplicación para tótem táctil: un onboarding con la identidad de la marca, un juego tipo endless runner construido con Phaser 3, una pantalla de resultados y un certificado descargable. React gestiona el flujo de pantallas y Supabase guarda participantes y puntajes.",
        highlights: [
          "Juego runner en Phaser 3 integrado dentro de una app React",
          "Onboarding de marca y flujo completo pensado para uso en tótem",
          "Registro de participantes y puntajes en Supabase",
          "Certificado descargable al finalizar la partida",
        ],
      },
      en: {
        seoTitle: "NEOrun — Interactive brand event game built with React and Phaser",
        seoDescription:
          "Case study: a kiosk experience for NEOingredients with brand onboarding, a Phaser 3 endless runner and a downloadable certificate.",
        sector: "Brand activation / events",
        challenge:
          "NEOingredients wanted an experience that would draw visitors to its booth during an event, present the brand in a memorable way and keep a record of every participant.",
        solution:
          "I built a touch-kiosk application: a branded onboarding, an endless-runner game built with Phaser 3, a results screen and a downloadable certificate. React drives the screen flow and Supabase stores participants and scores.",
        highlights: [
          "Phaser 3 runner game embedded in a React app",
          "Branded onboarding and a flow designed for kiosk use",
          "Participant and score storage in Supabase",
          "Downloadable certificate at the end of each run",
        ],
      },
    },
  },
  {
    slug: "colecciones-grupo-gomez",
    name: "Colecciones Grupo Gómez",
    category: "SPA",
    categoryEs: "Aplicación web (SPA)",
    descKey: "p.colecciones.desc",
    stack: ["React", "React Router", "Lucide", "Vercel"],
    url: "https://colecciones.grupo-gomez.com/",
    img: imgColecciones,
    blog: ["velocidad-web-core-web-vitals", "wordpress-vs-shopify-vs-desarrollo-a-medida"],
    caseStudy: {
      es: {
        seoTitle: "Colecciones Grupo Gómez — SPA en React con Supabase y Cloudflare",
        seoDescription:
          "Caso de estudio: aplicación web en React con base de datos PostgreSQL vía Supabase y distribución por Cloudflare CDN con HTTP/3.",
        sector: "Catálogo / colecciones",
        challenge:
          "Se necesitaba un catálogo web rápido y fácil de mantener, sin la carga de administrar un servidor de aplicaciones propio.",
        solution:
          "Planteé una arquitectura BaaS + Edge: una SPA en React con React Router, datos en PostgreSQL a través de Supabase y entrega mediante Cloudflare CDN (HTTP/3 y métricas RUM), con Apache como servidor de origen.",
        highlights: [
          "SPA en React con navegación del lado del cliente",
          "Base de datos PostgreSQL gestionada con Supabase",
          "Cloudflare CDN con HTTP/3 y monitoreo de usuarios reales (RUM)",
          "Arquitectura sin backend propio que mantener",
        ],
      },
      en: {
        seoTitle: "Colecciones Grupo Gómez — React SPA with Supabase and Cloudflare",
        seoDescription:
          "Case study: a React web app backed by PostgreSQL through Supabase and delivered via Cloudflare CDN with HTTP/3.",
        sector: "Catalog / collections",
        challenge:
          "The goal was a fast, easy-to-maintain web catalog without the overhead of running a dedicated application server.",
        solution:
          "I proposed a BaaS + Edge architecture: a React SPA with React Router, PostgreSQL data through Supabase and delivery via Cloudflare CDN (HTTP/3 and RUM metrics), with Apache as the origin server.",
        highlights: [
          "React SPA with client-side routing",
          "Managed PostgreSQL database via Supabase",
          "Cloudflare CDN with HTTP/3 and real-user monitoring (RUM)",
          "No custom backend to maintain",
        ],
      },
    },
  },
  {
    slug: "liwilu",
    name: "Liwilu",
    category: "Headless E-Commerce",
    categoryEs: "E-commerce headless",
    descKey: "p.liwilu.desc",
    stack: ["Next.js", "NestJS", "PrestaShop", "Tailwind"],
    url: "https://liwilu-staging.vercel.app/",
    img: imgLiwilu,
    blog: [
      "como-crear-una-tienda-virtual-en-peru",
      "wordpress-vs-shopify-vs-desarrollo-a-medida",
      "velocidad-web-core-web-vitals",
    ],
    caseStudy: {
      es: {
        seoTitle: "Liwilu — E-commerce headless con Next.js, NestJS y PrestaShop",
        seoDescription:
          "Caso de estudio: tienda online con arquitectura headless desacoplada. Frontend Next.js con SSR/SSG, API en NestJS y PrestaShop como motor de e-commerce.",
        sector: "E-commerce / retail",
        challenge:
          "Liwilu quería una tienda con la experiencia y la velocidad de un sitio moderno, sin renunciar a la gestión de catálogo, pedidos y stock que ya ofrece PrestaShop.",
        solution:
          "Separé la tienda en capas: PrestaShop como motor de e-commerce, una API intermedia en NestJS que normaliza y expone los datos, y un frontend en Next.js que combina renderizado en servidor (SSR) y generación estática (SSG), con animaciones en Framer Motion y estilos en Tailwind.",
        highlights: [
          "Arquitectura headless: frontend y e-commerce desacoplados",
          "Next.js con SSR/SSG para velocidad y SEO",
          "API propia en NestJS entre el frontend y PrestaShop",
          "Interfaz con animaciones en Framer Motion",
        ],
      },
      en: {
        seoTitle: "Liwilu — Headless e-commerce with Next.js, NestJS and PrestaShop",
        seoDescription:
          "Case study: an online store on a decoupled headless architecture. Next.js frontend with SSR/SSG, a NestJS API and PrestaShop as the commerce engine.",
        sector: "E-commerce / retail",
        challenge:
          "Liwilu wanted a store with the experience and speed of a modern site, while keeping the catalog, order and stock management PrestaShop already provides.",
        solution:
          "I split the store into layers: PrestaShop as the commerce engine, a NestJS API that normalizes and exposes the data, and a Next.js frontend combining server rendering (SSR) and static generation (SSG), with Framer Motion animations and Tailwind styling.",
        highlights: [
          "Headless architecture: frontend decoupled from commerce",
          "Next.js with SSR/SSG for speed and SEO",
          "Custom NestJS API between the frontend and PrestaShop",
          "Interface animated with Framer Motion",
        ],
      },
    },
  },
  {
    slug: "kg-store-admin",
    name: "KG Store Admin",
    category: "PWA",
    categoryEs: "PWA / panel administrativo",
    descKey: "p.kgstore.desc",
    stack: ["React", "Supabase", "PostgreSQL", "Cloudflare"],
    url: "https://kg-admin-delta.vercel.app/",
    img: imgKGStore,
    demo: { user: "demo", pass: "QCyJ iNW7 sFpl BPPS FoAR cka8" },
    blog: ["como-crear-una-tienda-virtual-en-peru", "wordpress-vs-shopify-vs-desarrollo-a-medida"],
    caseStudy: {
      es: {
        seoTitle: "KG Store Admin — Panel administrativo PWA en React y Supabase",
        seoDescription:
          "Caso de estudio: dashboard administrativo instalable (PWA) con autenticación, métricas en tiempo real y CRUD completo sobre Supabase y PostgreSQL.",
        sector: "Retail / gestión interna",
        challenge:
          "Hacía falta un panel para gestionar la operación de una tienda desde cualquier dispositivo, con acceso seguro y datos al día.",
        solution:
          "Construí una SPA en React instalable como PWA, con autenticación, métricas en tiempo real y operaciones CRUD completas sobre PostgreSQL mediante Supabase, desplegada en Vercel y servida con Cloudflare.",
        highlights: [
          "Aplicación instalable (PWA) usable en móvil y escritorio",
          "Autenticación y control de acceso",
          "Métricas en tiempo real con Supabase",
          "Gestión completa de registros (crear, editar, eliminar)",
        ],
      },
      en: {
        seoTitle: "KG Store Admin — PWA admin dashboard with React and Supabase",
        seoDescription:
          "Case study: an installable (PWA) admin dashboard with authentication, real-time metrics and full CRUD on Supabase and PostgreSQL.",
        sector: "Retail / internal tools",
        challenge:
          "The store needed a dashboard to run its operation from any device, with secure access and up-to-date data.",
        solution:
          "I built a React SPA installable as a PWA, with authentication, real-time metrics and full CRUD on PostgreSQL through Supabase, deployed on Vercel and served through Cloudflare.",
        highlights: [
          "Installable app (PWA) for mobile and desktop",
          "Authentication and access control",
          "Real-time metrics with Supabase",
          "Full record management (create, edit, delete)",
        ],
      },
    },
  },
  {
    slug: "cafe-de-la-plaza",
    name: "Café de la Plaza",
    category: "Corporate",
    categoryEs: "Web corporativa",
    descKey: "p.cafeplaza.desc",
    stack: ["WordPress", "Elementor", "GSAP", "Kinsta"],
    url: "https://cafedelaplazapr.com/",
    img: imgCafePlaza,
    blog: ["pagina-web-para-empresas-checklist", "velocidad-web-core-web-vitals", "cuanto-cuesta-una-pagina-web-en-peru"],
    caseStudy: {
      es: {
        seoTitle: "Café de la Plaza — Web para restaurante en WordPress con GSAP",
        seoDescription:
          "Caso de estudio: sitio corporativo para un restaurante en Puerto Rico con WordPress, Elementor, animaciones GSAP, Cloudflare CDN y hosting Kinsta.",
        sector: "Restaurantes / gastronomía",
        challenge:
          "El restaurante necesitaba una web que transmitiera su ambiente, mostrara su propuesta y que el propio equipo pudiera actualizar sin depender de un desarrollador.",
        solution:
          "Desarrollé el sitio en WordPress con Elementor para que el equipo edite contenidos con facilidad, y le di carácter con animaciones GSAP y un slider Swiper. Lo publiqué en hosting administrado Kinsta con Cloudflare CDN delante.",
        highlights: [
          "Contenido editable por el cliente con Elementor",
          "Animaciones GSAP y slider Swiper",
          "Hosting administrado en Kinsta",
          "Cloudflare CDN para entrega rápida",
        ],
      },
      en: {
        seoTitle: "Café de la Plaza — Restaurant website on WordPress with GSAP",
        seoDescription:
          "Case study: a corporate site for a Puerto Rico restaurant built on WordPress and Elementor, with GSAP animations, Cloudflare CDN and Kinsta hosting.",
        sector: "Restaurants / hospitality",
        challenge:
          "The restaurant needed a site that conveyed its atmosphere, showcased what it offers and that its own team could update without relying on a developer.",
        solution:
          "I built the site on WordPress with Elementor so the team can edit content easily, and gave it character with GSAP animations and a Swiper slider. It runs on Kinsta managed hosting behind Cloudflare CDN.",
        highlights: [
          "Client-editable content with Elementor",
          "GSAP animations and Swiper slider",
          "Managed hosting on Kinsta",
          "Cloudflare CDN for fast delivery",
        ],
      },
    },
  },
  {
    slug: "gustos-coffee",
    name: "Gustos Coffee Co.",
    category: "E-Commerce",
    categoryEs: "E-commerce",
    descKey: "p.gustos.desc",
    stack: ["Shopify", "Vue.js", "Cloudflare", "Apple Pay"],
    url: "https://www.gustoscoffeeco.com/",
    img: imgGustos,
    blog: [
      "como-crear-una-tienda-virtual-en-peru",
      "wordpress-vs-shopify-vs-desarrollo-a-medida",
      "pasarelas-de-pago-en-peru",
    ],
    caseStudy: {
      es: {
        seoTitle: "Gustos Coffee Co. — Tienda Shopify con frontend en Vue.js",
        seoDescription:
          "Caso de estudio: tienda online en Shopify para una marca de café de Puerto Rico, con frontend en Vue.js, Apple Pay, Shop Pay y Cloudflare CDN.",
        sector: "E-commerce / alimentos y bebidas",
        challenge:
          "La marca quería vender online con un checkout confiable y rápido, y una experiencia de compra más cuidada que la de un tema estándar.",
        solution:
          "Usé Shopify como plataforma de comercio por su checkout y su gestión de pedidos, y desarrollé la capa visual con Vue.js. Activé pagos con Apple Pay y Shop Pay, puse Cloudflare CDN delante y trabajé la optimización de la conversión en las páginas de producto y el carrito.",
        highlights: [
          "Tienda Shopify con interfaz personalizada en Vue.js",
          "Pagos con Apple Pay y Shop Pay",
          "Cloudflare CDN",
          "Optimización del recorrido de compra",
        ],
      },
      en: {
        seoTitle: "Gustos Coffee Co. — Shopify store with a Vue.js frontend",
        seoDescription:
          "Case study: a Shopify online store for a Puerto Rico coffee brand, with a Vue.js frontend, Apple Pay, Shop Pay and Cloudflare CDN.",
        sector: "E-commerce / food & beverage",
        challenge:
          "The brand wanted to sell online with a reliable, fast checkout and a more polished shopping experience than a stock theme offers.",
        solution:
          "I used Shopify as the commerce platform for its checkout and order management, and built the visual layer with Vue.js. I enabled Apple Pay and Shop Pay, put Cloudflare CDN in front and worked on conversion across product pages and the cart.",
        highlights: [
          "Shopify store with a custom Vue.js interface",
          "Apple Pay and Shop Pay payments",
          "Cloudflare CDN",
          "Optimized purchase journey",
        ],
      },
    },
  },
  {
    slug: "aicon",
    name: "AIcon",
    category: "SSG Landing",
    categoryEs: "Landing page",
    descKey: "p.aicon.desc",
    stack: ["Astro", "Alpine.js", "Vercel", "AWS"],
    url: "https://landing-wisec.vercel.app/",
    img: imgAicon,
    blog: ["landing-page-que-convierte", "velocidad-web-core-web-vitals", "seo-para-empresas-en-lima"],
    caseStudy: {
      es: {
        seoTitle: "AIcon — Landing page de alto rendimiento en Astro",
        seoDescription:
          "Caso de estudio: landing page estática (SSG) para una plataforma de IA, construida con Astro y Alpine.js, desplegada en Vercel y AWS con Mailchimp.",
        sector: "Tecnología / inteligencia artificial",
        challenge:
          "La plataforma necesitaba una landing para presentar su producto y captar registros, que cargara muy rápido y posicionara bien.",
        solution:
          "La construí como sitio estático con Astro, que entrega HTML listo y casi nada de JavaScript, y añadí interactividad ligera con Alpine.js. El formulario de registro se integra con Mailchimp y el despliegue combina Vercel y AWS.",
        highlights: [
          "Sitio estático (SSG) con Astro",
          "Interactividad ligera con Alpine.js",
          "Captación de registros integrada con Mailchimp",
          "Despliegue en Vercel y AWS",
        ],
      },
      en: {
        seoTitle: "AIcon — High-performance landing page built with Astro",
        seoDescription:
          "Case study: a static (SSG) landing page for an AI platform, built with Astro and Alpine.js, deployed on Vercel and AWS with Mailchimp.",
        sector: "Technology / artificial intelligence",
        challenge:
          "The platform needed a landing page to present its product and capture sign-ups, one that loaded very fast and ranked well.",
        solution:
          "I built it as a static site with Astro, which ships ready HTML and almost no JavaScript, and added light interactivity with Alpine.js. The sign-up form integrates with Mailchimp and the deployment combines Vercel and AWS.",
        highlights: [
          "Static site (SSG) with Astro",
          "Light interactivity with Alpine.js",
          "Sign-up capture integrated with Mailchimp",
          "Deployed on Vercel and AWS",
        ],
      },
    },
  },
  {
    slug: "whaticket",
    name: "Whaticket",
    category: "SaaS",
    categoryEs: "SaaS",
    descKey: "p.whaticket.desc",
    stack: ["WordPress", "Elementor", "WP Rocket", "GTM"],
    url: "https://whaticket.com/",
    img: imgWhaticket,
    blog: ["integrar-whatsapp-en-tu-pagina-web", "velocidad-web-core-web-vitals", "seo-para-empresas-en-lima"],
    caseStudy: {
      es: {
        seoTitle: "Whaticket — Web de SaaS en WordPress optimizada para marketing",
        seoDescription:
          "Caso de estudio: sitio web de Whaticket, SaaS de atención por WhatsApp, en WordPress con Elementor, WP Rocket, Cloudflare, HubSpot CRM y GTM.",
        sector: "SaaS / atención al cliente",
        challenge:
          "Whaticket necesitaba un sitio que su equipo de marketing pudiera mover con agilidad, que cargara rápido y que midiera con precisión de dónde venía cada lead.",
        solution:
          "Trabajé el sitio en WordPress con Elementor para que marketing publique sin depender de desarrollo, optimicé la carga con WP Rocket y Cloudflare CDN, conecté los formularios con HubSpot CRM y configuré Google Tag Manager para el seguimiento avanzado de conversiones.",
        highlights: [
          "WordPress + Elementor gestionable por el equipo de marketing",
          "Optimización de carga con WP Rocket y Cloudflare",
          "Leads conectados a HubSpot CRM",
          "Medición de conversiones con Google Tag Manager",
        ],
      },
      en: {
        seoTitle: "Whaticket — Marketing-optimized SaaS website on WordPress",
        seoDescription:
          "Case study: the website for Whaticket, a WhatsApp customer-service SaaS, on WordPress with Elementor, WP Rocket, Cloudflare, HubSpot CRM and GTM.",
        sector: "SaaS / customer service",
        challenge:
          "Whaticket needed a site its marketing team could move fast on, that loaded quickly and tracked exactly where every lead came from.",
        solution:
          "I worked on the site in WordPress with Elementor so marketing can publish without waiting on development, optimized loading with WP Rocket and Cloudflare CDN, connected forms to HubSpot CRM and set up Google Tag Manager for advanced conversion tracking.",
        highlights: [
          "WordPress + Elementor managed by the marketing team",
          "Load optimization with WP Rocket and Cloudflare",
          "Leads connected to HubSpot CRM",
          "Conversion tracking with Google Tag Manager",
        ],
      },
    },
  },
  {
    slug: "astra-medical",
    name: "Astra Medical",
    category: "Corporate",
    categoryEs: "Web corporativa",
    descKey: "p.astra.desc",
    stack: ["WordPress", "WooCommerce", "PHP", "Yoast SEO"],
    url: "https://www.astra-medical.com/",
    img: imgAstra,
    blog: ["pagina-web-para-empresas-checklist", "seo-para-empresas-en-lima", "cuanto-cuesta-una-pagina-web-en-peru"],
    caseStudy: {
      es: {
        seoTitle: "Astra Medical — Web corporativa en WordPress y WooCommerce",
        seoDescription:
          "Caso de estudio: sitio corporativo para empresa del sector salud con WordPress y WooCommerce, diseño responsive desde Figma y SEO con Yoast.",
        sector: "Salud / equipamiento médico",
        challenge:
          "La empresa necesitaba presentar su catálogo y su marca con una web profesional, preparada para buscadores y fácil de ampliar.",
        solution:
          "Llevé el diseño de Figma a un sitio responsive en WordPress con WooCommerce para gestionar el catálogo de productos, con desarrollo a medida en PHP y MySQL sobre Apache, y configuré Yoast SEO para la base del posicionamiento.",
        highlights: [
          "Diseño responsive implementado desde Figma",
          "Catálogo de productos con WooCommerce",
          "Desarrollo a medida en PHP + MySQL",
          "SEO on-page configurado con Yoast",
        ],
      },
      en: {
        seoTitle: "Astra Medical — Corporate website on WordPress and WooCommerce",
        seoDescription:
          "Case study: a corporate site for a healthcare company built on WordPress and WooCommerce, with a responsive design from Figma and Yoast SEO.",
        sector: "Healthcare / medical equipment",
        challenge:
          "The company needed to present its catalog and brand with a professional website, ready for search engines and easy to extend.",
        solution:
          "I turned the Figma design into a responsive WordPress site with WooCommerce to manage the product catalog, with custom PHP and MySQL development on Apache, and set up Yoast SEO as the ranking foundation.",
        highlights: [
          "Responsive design implemented from Figma",
          "Product catalog with WooCommerce",
          "Custom PHP + MySQL development",
          "On-page SEO set up with Yoast",
        ],
      },
    },
  },
  {
    slug: "chapa-tu-beca",
    name: "Chapa Tu Beca",
    category: "Education",
    categoryEs: "Educación",
    descKey: "p.chapa.desc",
    stack: ["WordPress Multisite", "Elementor", "PHP", "SEO"],
    url: "https://www.chapatubeca.org/",
    img: imgChapa,
    blog: ["seo-para-empresas-en-lima", "pagina-web-para-empresas-checklist"],
    caseStudy: {
      es: {
        seoTitle: "Chapa Tu Beca — WordPress Multisite con postulación en línea",
        seoDescription:
          "Caso de estudio: plataforma de becas universitarias en WordPress Multisite con Elementor, desarrollo en PHP y sistema de postulación en línea.",
        sector: "Educación / becas",
        challenge:
          "El programa necesitaba administrar varios sitios relacionados desde un solo lugar y permitir que los estudiantes postularan en línea.",
        solution:
          "Implementé una red WordPress Multisite, que gestiona varios sitios desde una única instalación, con Elementor para editar contenidos, desarrollo en PHP y MySQL, y un sistema de postulación en línea. Trabajé también la base SEO de la plataforma.",
        highlights: [
          "Red WordPress Multisite con administración centralizada",
          "Sistema de postulación en línea",
          "Contenidos editables con Elementor",
          "Configuración SEO de la plataforma",
        ],
      },
      en: {
        seoTitle: "Chapa Tu Beca — WordPress Multisite with online applications",
        seoDescription:
          "Case study: a university scholarship platform on WordPress Multisite with Elementor, custom PHP development and an online application system.",
        sector: "Education / scholarships",
        challenge:
          "The program needed to manage several related sites from one place and let students apply online.",
        solution:
          "I implemented a WordPress Multisite network, which runs several sites from a single installation, with Elementor for content editing, PHP and MySQL development, and an online application system. I also set up the platform's SEO foundation.",
        highlights: [
          "WordPress Multisite network with central administration",
          "Online application system",
          "Content editable with Elementor",
          "Platform-wide SEO setup",
        ],
      },
    },
  },
  {
    slug: "segway-powersports",
    name: "Segway Powersports",
    category: "E-Commerce",
    categoryEs: "E-commerce",
    descKey: "p.segway.desc",
    stack: ["WordPress", "Elementor", "RankMath", "jQuery"],
    url: "https://segwaypowersports.com.pe/",
    img: imgSegway,
    blog: [
      "como-crear-una-tienda-virtual-en-peru",
      "pasarelas-de-pago-en-peru",
      "seo-para-empresas-en-lima",
    ],
    caseStudy: {
      es: {
        seoTitle: "Segway Powersports Perú — Tienda virtual en WordPress",
        seoDescription:
          "Caso de estudio: tienda online de vehículos eléctricos para Segway Powersports Perú con WordPress, Elementor, RankMath SEO y pasarela de pagos local.",
        sector: "E-commerce / movilidad eléctrica",
        challenge:
          "Segway Powersports Perú necesitaba vender sus vehículos eléctricos online, cobrar con medios de pago locales y aparecer en Google cuando los clientes buscan sus modelos.",
        solution:
          "Desarrollé la tienda en WordPress con Elementor sobre Apache, integré una pasarela de pagos para Perú, añadí interacciones con jQuery y configuré RankMath para el SEO de las fichas de producto y las categorías.",
        highlights: [
          "Tienda virtual con catálogo de vehículos eléctricos",
          "Pasarela de pagos para el mercado peruano",
          "SEO de productos y categorías con RankMath",
          "Contenido gestionable con Elementor",
        ],
      },
      en: {
        seoTitle: "Segway Powersports Peru — Online store on WordPress",
        seoDescription:
          "Case study: an electric vehicle online store for Segway Powersports Peru with WordPress, Elementor, RankMath SEO and a local payment gateway.",
        sector: "E-commerce / electric mobility",
        challenge:
          "Segway Powersports Peru needed to sell its electric vehicles online, accept local payment methods and show up on Google when customers search for its models.",
        solution:
          "I built the store on WordPress with Elementor on Apache, integrated a Peruvian payment gateway, added jQuery interactions and set up RankMath for product and category SEO.",
        highlights: [
          "Online store with an electric vehicle catalog",
          "Payment gateway for the Peruvian market",
          "Product and category SEO with RankMath",
          "Content managed with Elementor",
        ],
      },
    },
  },
  {
    slug: "panel-puntoazul",
    name: "Panel PuntoAzul",
    category: "SPA",
    categoryEs: "Aplicación web (SPA)",
    descKey: "p.puntoazul.desc",
    stack: ["React", "Vite", "Tailwind", "react-day-picker"],
    url: "https://staging.puntoazulrestaurante.com/",
    img: imgPuntoAzul,
    demo: { user: "demo", pass: "QCyJ iNW7 sFpl BPPS FoAR cka8" },
    blog: ["integrar-whatsapp-en-tu-pagina-web", "wordpress-vs-shopify-vs-desarrollo-a-medida"],
    caseStudy: {
      es: {
        seoTitle: "Panel PuntoAzul — Sistema de reservas para restaurante en React",
        seoDescription:
          "Caso de estudio: panel administrativo para el restaurante PuntoAzul con gestión de reservas y bloqueo de fechas, en React, Vite y react-day-picker.",
        sector: "Restaurantes / reservas",
        challenge:
          "El restaurante necesitaba controlar qué fechas acepta reservas y gestionarlas desde un panel propio, sin hojas de cálculo ni mensajes sueltos.",
        solution:
          "Desarrollé un panel administrativo en React con Vite y Tailwind, con un calendario interactivo basado en react-day-picker y date-fns para bloquear fechas y gestionar las reservas.",
        highlights: [
          "Gestión de reservas desde un panel propio",
          "Bloqueo de fechas en calendario interactivo",
          "React + Vite para una interfaz rápida",
          "Manejo de fechas con date-fns",
        ],
      },
      en: {
        seoTitle: "PuntoAzul Panel — Restaurant reservation system in React",
        seoDescription:
          "Case study: an admin panel for PuntoAzul restaurant with reservation management and date blocking, built with React, Vite and react-day-picker.",
        sector: "Restaurants / reservations",
        challenge:
          "The restaurant needed to control which dates accept bookings and manage them from its own panel, without spreadsheets or scattered messages.",
        solution:
          "I built an admin panel in React with Vite and Tailwind, with an interactive calendar based on react-day-picker and date-fns to block dates and manage reservations.",
        highlights: [
          "Reservation management from a dedicated panel",
          "Date blocking on an interactive calendar",
          "React + Vite for a fast interface",
          "Date handling with date-fns",
        ],
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Case-study URL for a project in the given language. */
export function projectUrl(slug: string, lang: Lang): string {
  return lang === "en" ? `/en/projects/${slug}/` : `/proyectos/${slug}/`;
}
