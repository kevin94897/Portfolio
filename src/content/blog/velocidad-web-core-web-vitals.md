---
title: "Tu web lenta te está costando clientes: guía de velocidad y Core Web Vitals"
description: "Mejora la velocidad de carga de tu página web y aprueba los Core Web Vitals: qué medir, qué la hace lenta y un caso real de 37 a 98 en PageSpeed móvil."
pubDate: 2026-09-29
category: "Rendimiento"
tags: ["velocidad web", "core web vitals", "pagespeed", "rendimiento", "seo técnico"]
---

Un cliente entra desde Google en su celular, en plena combi o con datos móviles, y tu página se queda en blanco. Espera un par de segundos, toca "atrás" y abre la web de tu competencia. No te llamó, no te escribió y nunca sabrás que estuvo ahí. Así es como una mala **velocidad de carga de tu página web** te cuesta ventas en silencio.

Google lo sabe y lo mide con los **Core Web Vitals**, un conjunto de métricas que evalúan qué tan rápido carga, qué tan rápido responde y qué tan estable se ve tu sitio. No son lo único que cuenta para posicionar, pero influyen en si el visitante se queda o se va.

En esta guía te explico, sin tecnicismos innecesarios, qué significan estas métricas, cómo medirlas en cinco minutos, qué suele hacer lenta una web y cómo la arreglo en mis proyectos. Y como ejemplo, uso el caso que mejor conozco: mi propia web, que pasó de **37 a 98 puntos en PageSpeed móvil**.

## ¿Por qué la velocidad de carga afecta tus ventas?

Cuando un cliente me pregunta si vale la pena invertir en velocidad, le pregunto cuánto le cuesta cada visita. Si pagas anuncios, cada clic que abandona por lentitud es dinero perdido.

La velocidad impacta en tres frentes:

- **Conversión:** menos espera significa menos abandonos antes de ver tu oferta, tu botón de WhatsApp o tu formulario.
- **SEO:** Google usa los Core Web Vitals como una de sus señales de experiencia. Si quieres profundizar, revisa mi guía de [SEO para empresas en Lima](/blog/seo-para-empresas-en-lima/).
- **Percepción de marca:** una web que salta, se congela o tarda transmite descuido, aunque tu servicio sea excelente.

En Perú esto pesa más: buena parte del tráfico llega desde celulares de gama media y conexiones móviles variables. Si tu web solo "vuela" en la laptop de la oficina con fibra, no estás viendo la experiencia real de tus clientes.

## ¿Qué son los Core Web Vitals?

Son tres métricas que Google define para medir la experiencia real de los usuarios. Estos son los umbrales para considerarlas "buenas":

| Métrica | Qué mide | En palabras simples | Bueno |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | Carga | Cuánto tarda en verse el elemento principal (título grande, imagen de portada) | ≤ 2,5 s |
| **INP** (Interaction to Next Paint) | Respuesta | Cuánto tarda la página en reaccionar cuando tocas un botón o abres un menú | ≤ 200 ms |
| **CLS** (Cumulative Layout Shift) | Estabilidad | Cuánto "salta" el contenido mientras carga (el botón que se mueve justo cuando vas a tocarlo) | ≤ 0,1 |

Además, en las pruebas de laboratorio verás el **TBT** (Total Blocking Time): el tiempo en que el procesador está tan ocupado con JavaScript que la página no puede responder. No es un Core Web Vital oficial, pero está muy relacionado con el INP y es uno de los factores que más pesa en la puntuación de PageSpeed.

## ¿Cómo medir la velocidad de tu página web?

No necesitas ser programador para un primer diagnóstico. Estas son las herramientas que uso:

1. **PageSpeed Insights** (pagespeed.web.dev): pega tu URL y revisa la pestaña **móvil**. Arriba verás datos de usuarios reales (si tu web tiene suficiente tráfico) y abajo la prueba de laboratorio con Lighthouse.
2. **Google Search Console:** en el informe "Métricas web principales" ves qué URLs de tu sitio aprueban o no, agrupadas.
3. **Chrome DevTools (Lighthouse y Performance):** para diagnóstico técnico fino, que es donde yo encuentro las causas reales.

### Datos de campo vs. datos de laboratorio

Esto confunde a muchos clientes, así que vale aclararlo:

- **Datos de campo:** vienen de usuarios reales de Chrome durante los últimos 28 días. Son los que Google usa para evaluar tu experiencia.
- **Datos de laboratorio:** una simulación con un celular y una conexión estándar. Sirven para diagnosticar y comparar antes/después, pero pueden variar entre una prueba y otra.

Mi recomendación: usa el laboratorio para encontrar y corregir problemas, y el campo para confirmar que la mejora llegó a tus usuarios.

## ¿Qué hace lenta una página web? Las causas más comunes

Después de años auditando sitios en WordPress, Shopify, PrestaShop y desarrollos a medida, casi siempre encuentro los mismos culpables:

- **Imágenes pesadas:** fotos de 3–5 MB subidas directo de la cámara, sin formato moderno (WebP/AVIF) ni tamaños adaptados al celular.
- **Demasiados plugins o apps:** cada uno suma su CSS y JavaScript, aunque no se use en esa página.
- **Scripts de terceros cargados de entrada:** Analytics, píxeles, chats, mapas, widgets de reseñas.
- **Page builders sin optimizar:** Elementor y similares son útiles, pero generan mucho código si no se configuran bien.
- **Fuentes y librerías completas desde CDNs externos** cuando solo se usa una fracción.
- **Animaciones y efectos 3D** que consumen procesador todo el tiempo.
- **Hosting inadecuado:** un plan compartido saturado arruina cualquier optimización.

La plataforma también influye. Si estás decidiendo con qué construir, en [WordPress vs Shopify vs desarrollo a medida](/blog/wordpress-vs-shopify-vs-desarrollo-a-medida/) explico cómo afecta cada opción al rendimiento y al mantenimiento.

## Caso real: cómo llevé kevin-gomez.dev de 37 a 98 en PageSpeed móvil

Mi portfolio está hecho con Astro y desplegado en Cloudflare, dos tecnologías pensadas para ser rápidas. Aun así, la primera auditoría seria en móvil marcó **37 puntos**. Buena prueba de que el framework no te salva si lo que cargas encima es pesado.

### El diagnóstico

Al analizar la carga con Lighthouse y el panel de rendimiento de Chrome, encontré cinco problemas:

1. **Animaciones en bucle infinito.** Un canvas de partículas y un cursor animado se ejecutaban sin parar, incluso cuando no estaban en pantalla. El procesador nunca quedaba libre, a tal punto que PageSpeed a veces agotaba el tiempo de la prueba y devolvía el error `DEADLINE_EXCEEDED`.
2. **Una escena 3D (Spline) cargada al inicio**, compitiendo con el contenido importante.
3. **Una intro animada que ocultaba el título principal**, que era justamente el elemento LCP, hasta que cargaba el JavaScript.
4. **Google Analytics (~177 KB) cargado de entrada**, antes de que el usuario viera nada.
5. **Una fuente de iconos completa de 148 KB desde un CDN externo**, cuando la web solo usaba 18 iconos.

### Las soluciones

- Las animaciones ahora **se detienen cuando no son visibles** en pantalla.
- La escena 3D **se carga solo tras la primera interacción** del usuario.
- En móvil, la entrada del título se hace **solo con CSS**, así el LCP aparece sin esperar JavaScript.
- **Analytics se carga de forma diferida**, sin bloquear la primera pintura.
- La fuente de iconos se **recortó a 3 KB** (solo los iconos usados) y se aloja en el propio dominio.

### Los resultados (pruebas de laboratorio con Lighthouse)

| Métrica | Antes | Después |
|---|---|---|
| Puntuación PageSpeed móvil | 37 | 98 |
| LCP | 6,4 s | ~2,2 s |
| TBT | 1.320 ms | ~60 ms |

Lo importante: **no hubo que sacrificar el diseño**. Las partículas, el 3D y las animaciones siguen ahí; solo cambió *cuándo* y *cómo* se cargan.

## Paso a paso para mejorar los Core Web Vitals de tu web

Este es el orden que sigo cuando un cliente me pide acelerar su sitio.

### Paso 1: Mide y prioriza

Revisa PageSpeed en móvil para tus páginas clave: inicio, servicios, categorías y fichas de producto. No optimices todo a la vez; empieza por las páginas que más visitas o ventas generan.

### Paso 2: Asegura el LCP

- Identifica cuál es el elemento LCP (PageSpeed te lo dice).
- Si es una imagen, sírvela en WebP/AVIF, con el tamaño correcto y **sin** carga diferida (lazy loading).
- Si es un texto, que no dependa de JavaScript ni de animaciones para mostrarse.
- Precarga la fuente o imagen crítica si hace falta.

### Paso 3: Libera el procesador (TBT e INP)

- Difiere Analytics, píxeles y chats hasta después de la carga o la primera interacción.
- Elimina plugins y scripts que no se usan en cada página.
- Pausa animaciones fuera de pantalla y evita bucles que nunca terminan.

### Paso 4: Estabiliza el diseño (CLS)

- Define ancho y alto de imágenes, videos e iframes.
- Reserva espacio para banners, anuncios y avisos de cookies.
- Usa `font-display` adecuado para que el texto no "salte" al cargar la fuente.

### Paso 5: Infraestructura

- Hosting con buen tiempo de respuesta del servidor y caché.
- CDN como Cloudflare para servir archivos cerca del usuario.
- En WordPress, un plugin de caché bien configurado marca diferencia. En la web de [Whaticket](/proyectos/whaticket/) trabajé con Cloudflare y WP Rocket precisamente para sostener el rendimiento en un sitio con mucho marketing encima.

### Paso 6: Vuelve a medir y vigila

Compara antes y después en laboratorio, y revisa Search Console en las semanas siguientes. Cada plugin nuevo, cada píxel o cada banner puede deshacer lo avanzado.

## Checklist rápido de velocidad web

| Revisión | ¿Lo tienes? |
|---|---|
| Imágenes en WebP/AVIF y con tamaño adaptado a móvil | ☐ |
| Imagen o título principal visible sin esperar JavaScript | ☐ |
| Scripts de terceros diferidos (Analytics, píxeles, chat) | ☐ |
| Sin plugins/apps que no se usan | ☐ |
| Fuentes e iconos alojados en tu dominio y recortados | ☐ |
| Animaciones pausadas fuera de pantalla | ☐ |
| Dimensiones definidas en imágenes y embeds | ☐ |
| Hosting con caché y CDN | ☐ |

## ¿Qué tecnología da la web más rápida?

No hay una respuesta única. Frameworks como **Astro** o **Next.js** con generación estática parten con ventaja porque envían menos JavaScript. Por ejemplo, [AIcon](/proyectos/aicon/) es una landing SSG hecha con Astro y Alpine.js, pensada desde el inicio para alto rendimiento, y en [Liwilu](/proyectos/liwilu/) usé Next.js con SSR/SSG sobre un backend PrestaShop para que la tienda cargue rápido sin renunciar al catálogo.

Pero un WordPress bien hecho también puede aprobar los Core Web Vitals, y un Next.js mal hecho puede reprobarlos. Lo que define el resultado es la disciplina: qué cargas, cuándo y cómo.

Si tienes una tienda, la velocidad de las fichas de producto y del checkout es crítica. En la guía para [crear una tienda virtual en Perú](/blog/como-crear-una-tienda-virtual-en-peru/) repaso lo que no puede faltar, y si tu web es una página de campaña, revisa la [anatomía de una landing page que convierte](/blog/landing-page-que-convierte/): ahí cada segundo de carga se nota directo en los leads.

## ¿Cuánto cuesta optimizar la velocidad de una web?

Depende de la plataforma, del estado del sitio y de si la solución pasa por ajustes de configuración o por reescribir partes del código. Una web con imágenes pesadas y plugins de más puede mejorar mucho con una optimización puntual; un sitio con un tema muy pesado a veces conviene rehacerlo.

Por eso siempre empiezo con una auditoría: te digo qué está fallando, qué se puede corregir y qué impacto esperar antes de tocar nada. Si estás evaluando rehacer tu web, en [cuánto cuesta una página web en Perú](/blog/cuanto-cuesta-una-pagina-web-en-peru/) explico de qué depende el presupuesto.

## ¿Tu web tarda en cargar? Revisémosla juntos

Si tu PageSpeed en móvil está en rojo o naranja, o si notas que te llegan visitas pero pocos contactos, la velocidad puede ser parte del problema. Llevo más de 8 años construyendo y optimizando sitios en WordPress, Shopify, PrestaShop, Astro y Next.js, y puedo decirte exactamente qué frena el tuyo.

[Cuéntame tu proyecto](/#contact) y te respondo con un diagnóstico claro de lo que se puede mejorar.

## Preguntas frecuentes

### ¿Qué puntuación de PageSpeed es buena?

De 90 a 100 se considera buena, de 50 a 89 necesita mejoras y por debajo de 50 es deficiente. Pero más que el número, importa que tus Core Web Vitals (LCP, INP y CLS) aprueben con datos de usuarios reales.

### ¿Los Core Web Vitals afectan el posicionamiento en Google?

Sí, forman parte de las señales de experiencia de página que Google tiene en cuenta. No reemplazan a un buen contenido, pero ante páginas similares, la experiencia puede inclinar la balanza, y además influyen en cuántos visitantes se convierten en clientes.

### ¿Por qué mi web carga rápido en mi computadora pero sale lenta en PageSpeed?

Porque PageSpeed simula un celular de gama media con conexión móvil, que es como te visita gran parte de tus clientes. Tu laptop con fibra oculta los problemas de JavaScript pesado, imágenes grandes y scripts de terceros.

### ¿Cuánto tarda en reflejarse la mejora en Google?

Las pruebas de laboratorio cambian de inmediato. Los datos de campo de usuarios reales usan una ventana de 28 días, así que la mejora en Search Console suele verse de forma gradual durante las semanas siguientes.
