// src/i18n/translations.ts

export const translations: Record<'es' | 'en', Record<string, string>> = {
  es: {
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.pricing": "Precios",
    "nav.workflow": "Proceso",
    "nav.contact": "Contacto",
    "nav.cv": "CV 2026",
    "nav.hire": "Contrátame",
    "hero.tag": "Full Stack Developer · Lima, Perú",
    "hero.role1": "Frontend & Backend Development",
    "hero.role2": "Headless CMS & Integración de APIs",
    "hero.role3": "E-Commerce & Soluciones Web",
    "hero.scroll": "Explorar",
    "about.label": "01 — Perfil",
    "about.freelance": "Freelance",
    "about.bio1":
      "Desarrollador Full Stack con trayectoria en proyectos para <strong style='color:var(--white)'>telecomunicaciones, e-commerce y soluciones digitales a medida</strong>. He colaborado con Entel (via SrBurns), NERD, Well-Done Media y One Blush, construyendo desde landing pages de alto rendimiento hasta sistemas distribuidos con NestJS, Next.js y WordPress Headless.",
    "about.bio2":
      "Me destaco por mi responsabilidad, adaptación y compromiso con la entrega de productos eficientes y seguros. Trabajo en equipos ágiles con <strong style='color:var(--white)'>Scrum, Git, Jira y ClickUp</strong>. Certificado SFPC con 95 puntos.",
    "about.stat1": "Años Exp.",
    "about.stat2": "Proyectos",
    "about.stack": "Tech Stack Completo",
    "about.cv": "Descargar CV 2026",
    "about.contact": "Contactar",
    "about.title": "Sobre Mí",
    "services.label": "02 — Servicios",
    "services.title": "Lo Que Hago",
    "services.s1.name": "Full Stack Dev",
    "services.s1.desc":
      "Aplicaciones web end-to-end con React, Next.js, NestJS, Laravel y Node.js. Diseño de APIs REST, autenticación y lógica de negocio.",
    "services.s2.name": "Diseño & UX",
    "services.s2.desc":
      "Interfaces responsivas desde Figma hasta código. Evaluación heurística, prototipado y diseño centrado en el usuario.",
    "services.s3.name": "E-Commerce",
    "services.s3.desc":
      "Tiendas con WooCommerce, Shopify y PrestaShop. Pasarelas de pago, Zoho CRM y automatizaciones con Zapier.",
    "services.s4.name": "SEO & Analytics",
    "services.s4.desc":
      "SEO técnico y on-page, GTM, Google Analytics, Facebook Pixel, SEMRush, Screaming Frog y reportes de leads.",
    "exp.label": "03 — Carrera",
    "exp.title": "Experiencia &amp; Educación",
    "exp.work": "Experiencia Laboral",
    "exp.edu": "Educación",
    "exp.achievements": "Logros",
    "exp.nerd":
      "Backend NestJS + APIs REST. Frontend Next.js y React+Vite (Liwilu, Punto Azul). Integración con ERP, Zoho, Headless WordPress y PrestaShop. Lazy loading, code splitting y optimización.",
    "exp.srburns":
      "Desarrollo para Entel, Urbanova, Paseo Begonias y La Rambla. WordPress Headless + Astro + Tailwind. APIs REST/JSON, SEO técnico, reportes de leads, Scrum con Jira y ClickUp.",
    "exp.wellDone":
      "WordPress, Shopify, PrestaShop con temas personalizados. React y Vue.js en arquitecturas modernas. GTM, Google Analytics, Facebook Pixel, Zoho CRM y Zapier.",
    "exp.oneBlush":
      "Laravel, CodeIgniter, Vue.js y jQuery. REST APIs con token-auth. Sistema de citas online, asistente virtual y módulos de calendario, ventas y profesionales.",
    "exp.soft":
      "WordPress (SOAP), SEMRush, Screaming Frog, análisis On-Page, reportes SEO y vistas responsivas.",
    "exp.vex":
      "WooCommerce, Shopify, WordPress. UX con evaluaciones heurísticas, prototipado y tests con usuarios.",
    "edu.systems": "Ingeniería de Sistemas — Bachiller",
    "edu.ai1": "Fundamentos de AI & Machine Learning",
    "edu.ai2": "Inteligencia Artificial para Empresas",
    "edu.oracle": "Oracle Database Administrator (48h)",
    "edu.english": "Inglés Avanzado",
    "ach.hack.title": "Líder de Equipo — Hackathon",
    "ach.hack.desc":
      "Líder de equipo — Estadio Nacional, IPD & ONPE. Sistema de seguimiento de deportistas con PHP, SQL y Bootstrap.",
    "ach.scrum.desc":
      "Certificación SFPC con 95 puntos. Trabajo activo en equipos ágiles con Git, Jira y ClickUp.",
    "proj.label": "04 — Portfolio",
    "proj.title": "Proyectos Reales",
    "p.colecciones.desc":
      "Arquitectura BaaS + Edge. React SPA con PostgreSQL vía Supabase, Cloudflare CDN (HTTP/3 + RUM) y Apache como servidor origen.",
    "p.kgstore.desc":
      "Dashboard administrativo SPA/PWA con React. Autenticación, métricas en tiempo real, CRUD completo y deploy en Vercel.",
    "p.liwilu.desc":
      "Arquitectura headless desacoplada. SSR/SSG con Next.js, API con NestJS, e-commerce PrestaShop y animaciones con Framer Motion.",
    "p.aicon.desc":
      "Landing SSG de alto rendimiento para plataforma de IA. Astro + Alpine.js en Vercel y AWS con integración Mailchimp.",
    "p.gustos.desc":
      "Tienda Shopify con frontend en Vue.js para Puerto Rico. Cloudflare CDN, pagos Apple Pay / Shop Pay y optimización de conversión.",
    "p.whaticket.desc":
      "WordPress optimizado para marketing y performance. Elementor, Cloudflare CDN, WP Rocket, HubSpot CRM y GTM para tracking avanzado.",
    "p.astra.desc":
      "Sitio corporativo WordPress + WooCommerce. PHP + MySQL, Apache, Yoast SEO y diseño responsivo desde Figma.",
    "p.chapa.desc":
      "WordPress Multisite para becas universitarias. Elementor, PHP + MySQL, múltiples plugins y sistema de postulación en línea.",
    "p.segway.desc":
      "Tienda de vehículos eléctricos con WordPress + Elementor. Apache, RankMath SEO, jQuery y pasarela de pagos para Perú.",
    "p.puntoazul.desc":
      "Panel administrativo para restaurante. Bloqueo de fechas y gestión de reservas con React + Vite. Calendario interactivo con react-day-picker y date-fns.",
    "p.cafeplaza.desc":
      "Sitio corporativo para restaurante en Puerto Rico. WordPress + Elementor con animaciones GSAP, slider Swiper, Cloudflare CDN y hosting en Kinsta.",
    "p.view": "Ver proyecto",
    "p.demo": "Ver demo",
    "skills.label": "05 — Proficiency",
    "skills.title": "Habilidades Técnicas",
    "skills.col.tech": "Tecnología",
    "skills.col.cat": "Categoría",
    "skills.col.level": "Nivel",
    "skills.col.prof": "Proficiency",
    "skills.dev": "Desarrollo",
    "skills.tools": "CMS, Marketing & Tools",
    "t.label": "06 — Testimonios",
    "t.title": "Lo Que Dicen",
    "t.t1.text":
      "Kevin es un profesional comprometido con su labor, siempre estuvo a la altura de los proyectos encomendados. Tiene un gran talento al diseño, UX y desarrollo web. Es una persona que recomendaría para proyectos en fábrica de software.",
    "t.t2.text":
      "Kevin presta mucha atención a los detalles, es dinámico, muy capaz de aprender nuevas tecnologías. Cumple a tiempo sus tareas y responde al trabajo bajo presión. Muy recomendado para cualquier proyecto web.",
    "t.t3.text":
      "Kevin aporta energía creativa y ejecución sólida en cada proyecto. Su ojo para el diseño combinado con su experiencia en backend es una combinación poco común que lo convierte en un desarrollador excepcional.",
    "t.t4.text":
      "Trabajar con Kevin fue una gran experiencia. Su profundidad técnica combinada con sus habilidades de comunicación hicieron que cada entrega fuera fluida.",
    "wf.label": "07 — Proceso",
    "wf.title": "Cómo Trabajo",
    "wf.desc": "Desde el descubrimiento hasta el despliegue final, cada paso está diseñado para entregar resultados de alto impacto.",
    "wf.s1.title": "Discovery Call",
    "wf.s1.desc":
      "Definimos ideas, objetivos y alcance del proyecto en una reunión inicial.",
    "wf.s2.title": "Diseño & Prototipo",
    "wf.s2.desc":
      "Mockups en Figma y esquema de colores aprobado antes de empezar.",
    "wf.s3.title": "Desarrollo",
    "wf.s3.desc":
      "Desarrollo ágil con control de versiones en Git y reuniones de avance periódicas.",
    "wf.s4.title": "Lanzamiento & Soporte",
    "wf.s4.desc":
      "Deploy, QA, SEO técnico, analítica y soporte continuo para óptimo rendimiento.",
    "price.label": "08 — Inversión",
    "price.title": "Planes &amp; Precios",
    "price.popular": "Más Popular",
    "price.cta": "Adquirir",
    "price.seo": "Optimización SEO incluida",
    "price.p1.name": "Básico",
    "price.p1.f1": "Sitio Responsive: HTML, CSS, JS & PHP",
    "price.p1.f2": "Correo incluido (Limitado)",
    "price.p1.f3": "5 páginas: Inicio, Nosotros, Servicios, Contacto + 1",
    "price.p1.f5": "Entrega: 2 sem · Soporte: 3 sem",
    "price.p2.name": "Corporativo",
    "price.p2.f1": "Sistema administrable y escalable",
    "price.p2.f2": "Correo ilimitado",
    "price.p2.f3": "9 páginas incluyendo Blog",
    "price.p2.f5": "Asesoría virtual o presencial",
    "price.p2.f6": "Entrega: 3 sem · Soporte: 4 sem",
    "price.p3.name": "Tienda Virtual",
    "price.p3.f1": "Plataforma e-commerce escalable",
    "price.p3.f3": "Carrito, login, checkout y cuenta",
    "price.p3.f4": "Integración de pasarela de pagos",
    "price.p3.f5": "SEO + asesoría",
    "price.p3.f6": "Entrega: 4 sem · Soporte: 5 sem",
    "contact.label": "09 — Contacto",
    "contact.title": "Hablemos Hoy",
    "contact.desc":
      "¿Tienes un proyecto en mente? Estoy disponible para freelance, colaboraciones y nuevas oportunidades. Escríbeme.",
    "contact.docs": "Documentos",
    "contact.docsub":
      "Descarga mi CV, carta de presentación o carta de recomendación.",
    "contact.dlcv": "Curriculum Vitae 2026 (PDF)",
    "contact.dlcover": "Carta de Presentación (PDF)",
    "contact.dlrecom": "Carta de Recomendación — Burns",
    "form.name": "Nombre",
    "form.namePh": "Juan",
    "form.lastname": "Apellido",
    "form.lastnamePh": "García",
    "form.subject": "Asunto",
    "form.subjectPh": "Consulta de proyecto",
    "form.message": "Mensaje",
    "form.messagePh": "Cuéntame sobre tu proyecto...",
    "form.emailPh": "juan@empresa.com",
    "contact.nav_aria": "Redes y contacto",
    "contact.form_aria": "Formulario de contacto",
    "footer.trabajemos": "Trabajemos.",
    "footer.cta": "Empecemos un proyecto",
    "t.controls_aria": "Controles de testimonios",
    "form.send": "Enviar Mensaje",
    "form.sent": "¡Mensaje Enviado!",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.pricing": "Pricing",
    "nav.workflow": "Process",
    "nav.contact": "Contact",
    "nav.cv": "CV 2026",
    "nav.hire": "Hire Me",
    "hero.tag": "Full Stack Developer · Lima, Peru",
    "hero.role1": "Frontend & Backend Development",
    "hero.role2": "Headless CMS & API Integration",
    "hero.role3": "E-Commerce & Web Solutions",
    "hero.scroll": "Scroll to explore",
    "about.label": "01 — Profile",
    "about.freelance": "Freelance ✓",
    "about.bio1":
      "Full Stack Developer with experience in projects for <strong style='color:var(--white)'>telecommunications, e-commerce, and custom digital solutions</strong>. Collaborated with Entel (via SrBurns), NERD, Well-Done Media, and One Blush, building high-performance landing pages to distributed systems with NestJS, Next.js, and Headless WordPress.",
    "about.bio2":
      "I stand out for responsibility, adaptability, and commitment to delivering efficient, secure products. I work in agile teams using <strong style='color:var(--white)'>Scrum, Git, Jira, and ClickUp</strong>. SFPC certified with a score of 95.",
    "about.stat1": "Years Exp.",
    "about.stat2": "Projects",
    "about.stack": "Full Tech Stack",
    "about.cv": "Download CV 2026",
    "about.contact": "Contact Me",
    "about.title": "About Me",
    "services.label": "02 — Services",
    "services.title": "What I Do",
    "services.s1.name": "Full Stack Dev",
    "services.s1.desc":
      "End-to-end web apps with React, Next.js, NestJS, Laravel, and Node.js. REST API design, authentication, and business logic.",
    "services.s2.name": "Design & UX",
    "services.s2.desc":
      "Responsive interfaces from Figma to code. Heuristic evaluation, prototyping, and user-centered design.",
    "services.s3.name": "E-Commerce",
    "services.s3.desc":
      "Stores with WooCommerce, Shopify, and PrestaShop. Payment gateways, Zoho CRM, and Zapier automations.",
    "services.s4.name": "SEO & Analytics",
    "services.s4.desc":
      "Technical and on-page SEO, GTM, Google Analytics, Facebook Pixel, SEMRush, Screaming Frog, and lead reports.",
    "exp.label": "03 — Career",
    "exp.title": "Experience &amp; Education",
    "exp.work": "Work Experience",
    "exp.edu": "Education",
    "exp.achievements": "Achievements",
    "exp.nerd":
      "NestJS backend + REST APIs. Next.js and React+Vite frontend (Liwilu, Punto Azul). Integration with ERP, Zoho, Headless WordPress, and PrestaShop. Lazy loading, code splitting, and performance optimization.",
    "exp.srburns":
      "Development for Entel, Urbanova, Paseo Begonias, and La Rambla. WordPress Headless + Astro + Tailwind. REST/JSON APIs, technical SEO, lead reports, Scrum with Jira and ClickUp.",
    "exp.wellDone":
      "WordPress, Shopify, PrestaShop with custom themes. React and Vue.js in modern frontend architectures. GTM, Google Analytics, Facebook Pixel, Zoho CRM, and Zapier.",
    "exp.oneBlush":
      "Laravel, CodeIgniter, Vue.js, and jQuery. REST APIs with token auth. Online booking system, virtual assistant, and modules for calendar, sales, and professionals.",
    "exp.soft":
      "WordPress maintenance (SOAP), SEMRush, Screaming Frog, On-Page analysis, SEO reports, and responsive views.",
    "exp.vex":
      "WooCommerce, Shopify, WordPress. UX with heuristic evaluations, prototyping, and user testing.",
    "edu.systems": "Systems Engineering — Bachelor's Degree",
    "edu.ai1": "AI & Machine Learning Fundamentals",
    "edu.ai2": "Artificial Intelligence for Business",
    "edu.oracle": "Oracle Database Administrator (48h)",
    "edu.english": "Advanced English",
    "ach.hack.title": "Hackathon Team Leader",
    "ach.hack.desc":
      "Team leader — National Stadium, IPD & ONPE. Athlete tracking system built with PHP, SQL, and Bootstrap.",
    "ach.scrum.desc":
      "SFPC certification with a score of 95. Active work in agile teams using Git, Jira, and ClickUp.",
    "proj.label": "04 — Portfolio",
    "proj.title": "Real Projects",
    "p.colecciones.desc":
      "BaaS + Edge architecture. React SPA with PostgreSQL via Supabase, Cloudflare CDN (HTTP/3 + RUM), and Apache as origin server.",
    "p.kgstore.desc":
      "SPA/PWA admin dashboard built with React. Authentication, real-time metrics, full CRUD, and deployed on Vercel.",
    "p.liwilu.desc":
      "Decoupled headless architecture. SSR/SSG with Next.js, NestJS API on Railway, PrestaShop e-commerce, and Framer Motion animations.",
    "p.aicon.desc":
      "High-performance SSG landing for an AI platform. Astro + Alpine.js on Vercel and AWS with Mailchimp integration.",
    "p.gustos.desc":
      "Shopify store with Vue.js frontend for Puerto Rico. Cloudflare CDN, Apple Pay / Shop Pay, and conversion optimization.",
    "p.whaticket.desc":
      "WordPress optimized for marketing and performance. Elementor, Cloudflare CDN, WP Rocket, HubSpot CRM, and GTM for advanced tracking.",
    "p.astra.desc":
      "WordPress + WooCommerce corporate site. PHP + MySQL, Apache, Yoast SEO, and responsive design from Figma.",
    "p.chapa.desc":
      "WordPress Multisite for university scholarships. Elementor, PHP + MySQL, multiple plugins, and online application system.",
    "p.segway.desc":
      "Electric vehicle store with WordPress + Elementor. Apache, RankMath SEO, jQuery, and payment gateway for Peru.",
    "p.puntoazul.desc":
      "Restaurant admin panel. Date blocking and reservation management with React + Vite. Interactive calendar using react-day-picker and date-fns.",
    "p.cafeplaza.desc":
      "Corporate site for a Puerto Rico restaurant. WordPress + Elementor with GSAP animations, Swiper slider, Cloudflare CDN, and Kinsta hosting.",
    "p.view": "View Project",
    "p.demo": "View Demo",
    "skills.label": "05 — Proficiency",
    "skills.title": "Technical Skills",
    "skills.col.tech": "Technology",
    "skills.col.cat": "Category",
    "skills.col.level": "Level",
    "skills.col.prof": "Proficiency",
    "skills.dev": "Development",
    "skills.tools": "CMS, Marketing & Tools",
    "t.label": "06 — Testimonials",
    "t.title": "What They Say",
    "t.t1.text":
      "Working with Kevin has been an exceptional experience. He is dedicated, highly professional, and consistently exceeds expectations. He excels in front-end development, UX design, and modern stack architectures.",
    "t.t2.text":
      "Kevin pays outstanding attention to details, learns new technologies with remarkable speed, and maintains calm under pressure. He is highly dependable and has my strongest recommendation for any software project.",
    "t.t3.text":
      "Kevin brings creative energy and solid execution to every project. His eye for design combined with strong backend expertise is a rare combination that makes him an exceptional developer to collaborate with.",
    "t.t4.text":
      "Working with Kevin was a great experience. His technical depth combined with strong communication skills made every milestone smooth. He adapts quickly to new frameworks and delivers clean, performant code.",
    "wf.label": "07 — Process",
    "wf.title": "How I Work",
    "wf.desc": "From discovery to final deployment, every step is designed to deliver high-impact results.",
    "wf.s1.title": "Discovery Call",
    "wf.s1.desc":
      "We define ideas, goals, and project scope in an initial meeting.",
    "wf.s2.title": "Design & Prototype",
    "wf.s2.desc":
      "Figma mockups and color scheme approved by the client before development begins.",
    "wf.s3.title": "Development",
    "wf.s3.desc":
      "Agile development with Git version control and regular progress check-ins.",
    "wf.s4.title": "Launch & Support",
    "wf.s4.desc":
      "Deploy, QA, technical SEO, analytics, and ongoing support for peak performance.",
    "price.label": "08 — Investment",
    "price.title": "Plans & Pricing",
    "price.popular": "Most Popular",
    "price.cta": "Get Started",
    "price.seo": "SEO optimization included",
    "price.p1.name": "Basic",
    "price.p1.f1": "Responsive site: HTML, CSS, JS & PHP",
    "price.p1.f2": "Email included (Limited)",
    "price.p1.f3": "5 pages: Home, About, Services, Contact + 1",
    "price.p1.f5": "Delivery: 2 wks · Support: 3 wks",
    "price.p2.name": "Corporate",
    "price.p2.f1": "Scalable admin system",
    "price.p2.f2": "Unlimited email",
    "price.p2.f3": "9 pages including Blog",
    "price.p2.f5": "Virtual or in-person consultation",
    "price.p2.f6": "Delivery: 3 wks · Support: 4 wks",
    "price.p3.name": "Online Store",
    "price.p3.f1": "Scalable e-commerce platform",
    "price.p3.f3": "Cart, login, checkout, and account",
    "price.p3.f4": "Payment gateway integration",
    "price.p3.f5": "SEO + consultation",
    "price.p3.f6": "Delivery: 4 wks · Support: 5 wks",
    "contact.label": "09 — Contact",
    "contact.title": "Let's Talk Today",
    "contact.desc":
      "Have a project in mind? I'm available for freelance, collaborations, and new opportunities. Write to me.",
    "contact.docs": "Documents",
    "contact.docsub":
      "Download my CV, cover letter, or recommendation letter.",
    "contact.dlcv": "Curriculum Vitae 2026 (PDF)",
    "contact.dlcover": "Cover Letter (PDF)",
    "contact.dlrecom": "Recommendation Letter — Burns",
    "form.name": "First Name",
    "form.namePh": "John",
    "form.lastname": "Last Name",
    "form.lastnamePh": "Doe",
    "form.subject": "Subject",
    "form.subjectPh": "Project inquiry",
    "form.message": "Message",
    "form.messagePh": "Tell me about your project...",
    "form.emailPh": "john@company.com",
    "contact.nav_aria": "Social links and contact",
    "contact.form_aria": "Contact form",
    "footer.trabajemos": "Let's Work.",
    "footer.cta": "Start a project",
    "t.controls_aria": "Testimonial controls",
    "form.send": "Send Message",
    "form.sent": "Message Sent!",
  },
};
