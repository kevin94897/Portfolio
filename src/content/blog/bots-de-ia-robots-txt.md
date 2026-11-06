---
title: "Bots de IA en tu web: ¿bloquearlos o dejarlos entrar? Guía de robots.txt para empresas"
description: "GPTBot, Google-Extended, ClaudeBot y otros bots de IA rastrean tu web. Qué hace cada uno, qué ganas y pierdes al bloquearlos y cómo configurar tu robots.txt."
pubDate: 2026-12-10
category: "SEO"
tags: ["robots.txt", "bots de ia", "gptbot", "seo técnico", "cloudflare"]
image: "../../assets/blog/bots-de-ia-robots-txt.jpg"
imageAlt: "Fila de pequeños robots frente a una puerta luminosa en una página web: algunos pasan y otros quedan bloqueados"
---

Si revisas los registros de tu servidor, vas a encontrar visitantes que no son personas ni Googlebot: **GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bytespider** y varios más. Son los rastreadores de las empresas de inteligencia artificial, y leen tu web para entrenar modelos o para responder preguntas de sus usuarios.

Muchas empresas me preguntan si deberían bloquearlos. La respuesta corta: **depende de qué vendes y de cómo te encuentran tus clientes**. Bloquear todo puede sacarte de las respuestas de la IA; permitir todo puede regalar tu contenido sin recibir nada a cambio. Aquí te explico cómo decidir.

## Los dos tipos de bots de IA

No todos los bots de IA hacen lo mismo, y esa diferencia es clave:

| Tipo | Qué hace | Ejemplo de lo que obtienes |
|---|---|---|
| **Bots de entrenamiento** | Recopilan contenido para entrenar modelos | Nada directo: tu contenido pasa a "saberlo" el modelo |
| **Bots de búsqueda / respuesta** | Leen tu web en el momento para responder a un usuario y citarte | Visibilidad, citas y visitas desde el asistente |

Bloquear un bot de entrenamiento casi no afecta tu visibilidad. Bloquear un bot de búsqueda puede hacer que **ChatGPT o Perplexity no te recomienden** cuando un cliente pregunta por tu servicio, algo que vimos en [cómo aparecer en ChatGPT, Gemini y Perplexity](/blog/aparecer-en-chatgpt-gemini-perplexity/).

## Los bots más comunes y cómo identificarlos

| User-agent | Empresa | Uso principal |
|---|---|---|
| `GPTBot` | OpenAI | Entrenamiento |
| `OAI-SearchBot` | OpenAI | Búsqueda en ChatGPT |
| `ChatGPT-User` | OpenAI | Visitas a pedido de un usuario |
| `ClaudeBot` | Anthropic | Entrenamiento |
| `Claude-SearchBot` / `Claude-User` | Anthropic | Búsqueda y visitas a pedido de un usuario |
| `PerplexityBot` | Perplexity | Búsqueda e indexación |
| `Google-Extended` | Google | Control de uso para modelos de IA de Google (no afecta a Google Search) |
| `Applebot-Extended` | Apple | Control de uso para modelos de IA de Apple |
| `Bytespider` | ByteDance | Entrenamiento |
| `CCBot` | Common Crawl | Datos abiertos usados por muchos modelos |

Los nombres y su comportamiento cambian con el tiempo. Antes de configurar nada, revisa la documentación oficial de cada empresa.

**Importante:** `Google-Extended` no es un rastreador separado. Bloquearlo indica a Google que no use tu contenido para entrenar sus modelos de IA, pero **no te saca de Google Search**. Las respuestas con IA dentro del buscador, como AI Overviews y AI Mode, siguen ligadas al rastreo normal de Googlebot, como explicaba en [qué hacer con tu web en la era de AI Mode](/blog/google-ai-mode-trafico-web/).

## ¿Bloquear o permitir? Depende de tu negocio

| Tipo de negocio | Recomendación general |
|---|---|
| Empresa de servicios, tienda, negocio local | **Permitir bots de búsqueda.** Quieres que te recomienden. Bloquear entrenamiento es opcional. |
| Medio, editorial o creador de contenido de pago | **Bloquear entrenamiento** y evaluar caso por caso los de búsqueda. Tu contenido es tu producto. |
| Web con contenido exclusivo para clientes | Proteger lo privado con login, no con robots.txt. |
| Web que sufre por exceso de tráfico de bots | Limitar o bloquear los más agresivos desde el CDN. |

Para la mayoría de empresas que leen este blog (servicios, comercio, negocios locales), lo que más conviene es **ser visible**: que la IA te entienda, te cite y te recomiende.

## Cómo configurarlo en tu robots.txt

El archivo `robots.txt` está en la raíz de tu dominio (`tudominio.com/robots.txt`). Un ejemplo para una empresa que quiere aparecer en buscadores con IA pero no ceder contenido para entrenamiento:

```txt
# Buscadores y asistentes que citan fuentes: permitidos
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Entrenamiento de modelos: bloqueado
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

Sitemap: https://tudominio.com/sitemap.xml
```

Tres cosas que debes saber:

1. **robots.txt es una petición, no un candado.** Los bots serios lo respetan; los maliciosos lo ignoran. Para bloquear de verdad se usa el firewall o el CDN.
2. **No escondas información privada solo con robots.txt.** El archivo es público, así que listar `/documentos-confidenciales/` le dice a cualquiera dónde buscar. Lo privado va detrás de un login.
3. **Revisa tu CDN.** Servicios como Cloudflare ofrecen opciones para gestionar los bots de IA con un clic, y algunas cuentas los bloquean por defecto. Si quieres aparecer en asistentes de IA, verifica que no los estés bloqueando sin saberlo.

## El caso de esta web

En kevin-gomez.dev el `robots.txt` permite el rastreo general, bloquea las rutas `/api/` (formularios y exportaciones internas, que no tienen nada que indexar) y declara el sitemap. No bloqueo los bots de búsqueda con IA porque, para un desarrollador freelance, que un asistente me recomiende cuando alguien pregunta por un desarrollador web en Lima vale más que proteger artículos que escribo precisamente para que se lean.

## Más allá de robots.txt

Si quieres que los bots de IA te entiendan mejor, no basta con dejarlos entrar:

- **Contenido en HTML,** no solo dentro de imágenes o cargado con JavaScript.
- **Datos estructurados** para que entiendan tu negocio, tus servicios y tus productos.
- **Velocidad:** los rastreadores también abandonan las páginas lentas. Revisa la guía de [velocidad web y Core Web Vitals](/blog/velocidad-web-core-web-vitals/).
- **SEO técnico sólido,** que sigue siendo la base de todo. Lo repaso en [SEO para empresas en Lima](/blog/seo-para-empresas-en-lima/).

## ¿Quieres revisar cómo ven los bots tu web?

Puedo revisar tu `robots.txt`, la configuración de tu CDN y los registros de tu servidor para ver qué bots te visitan, cuáles te convienen y qué conviene bloquear, sin afectar tu posicionamiento en Google.

[Cuéntame tu proyecto](/#contact) y te respondo con un diagnóstico claro.

## Preguntas frecuentes

### ¿Bloquear GPTBot me saca de ChatGPT?

GPTBot se usa principalmente para entrenamiento. Las búsquedas dentro de ChatGPT usan otros agentes, como OAI-SearchBot. Bloquear solo GPTBot reduce el uso de tu contenido para entrenar, pero no necesariamente tu presencia en las respuestas con búsqueda. Revisa siempre la documentación vigente de OpenAI.

### ¿Bloquear Google-Extended afecta mi SEO?

No afecta tu posicionamiento en Google Search. Solo indica a Google que no use tu contenido para entrenar y mejorar sus modelos de IA generativa.

### ¿Los bots de IA hacen lenta mi web?

Algunos rastreadores son muy agresivos y pueden consumir recursos del servidor. Si notas picos de tráfico de bots, un CDN o un firewall pueden limitar su frecuencia sin bloquearlos por completo.

### ¿Cada cuánto debo revisar mi robots.txt?

Al menos dos veces al año y cada vez que rediseñes tu web. Aparecen bots nuevos con frecuencia y un error en este archivo puede sacar páginas importantes de Google.
