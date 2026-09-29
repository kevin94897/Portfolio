---
title: "WhatsApp en tu página web: cómo captar y atender más clientes (sin perder leads)"
description: "Guía de WhatsApp para empresas: cómo poner un botón de WhatsApp en tu web, medir cada lead en GA4 y elegir entre la app Business, la API o un CRM."
pubDate: 2026-09-29
category: "Automatización"
tags: ["whatsapp para empresas", "botón de whatsapp", "ga4", "captación de leads", "automatización"]
---

En Perú, cuando un cliente tiene una duda sobre un producto o un servicio, lo más probable es que prefiera escribir por WhatsApp antes que llenar un formulario o llamar. Por eso **WhatsApp para empresas** se ha vuelto un canal de ventas en sí mismo, y el **botón de WhatsApp en la web** es muchas veces el elemento que más contactos genera.

El problema es que casi siempre se implementa mal. Un botón que abre un chat vacío, sin contexto de qué página vio el cliente. Mensajes que llegan a un celular personal y se pierden entre conversaciones familiares. Ninguna forma de saber qué campaña trajo ese lead. Y cuando el vendedor renuncia, se lleva todas las conversaciones.

En esta guía te explico cómo integro WhatsApp en las webs de mis clientes: desde el botón bien hecho y medido en Google Analytics 4, hasta cuándo conviene dar el salto a la API oficial o a una bandeja compartida con varios asesores.

## ¿Qué opciones hay para integrar WhatsApp en una página web?

No todas las empresas necesitan lo mismo. Estas son las opciones, de la más simple a la más completa:

| Opción | Para quién | Qué permite | Limitaciones |
|---|---|---|---|
| **Botón click-to-chat** (enlace wa.me) | Cualquier negocio | Abrir un chat con mensaje prellenado desde la web | Si no se mide, no sabes de dónde viene cada lead |
| **WhatsApp Business app** | Negocios pequeños, 1–2 personas atendiendo | Perfil de empresa, catálogo, respuestas rápidas, etiquetas | Pensada para pocos dispositivos; poca automatización |
| **WhatsApp Business Platform (API)** | Empresas con volumen o varios equipos | Varios agentes, integraciones, chatbots, mensajes automáticos | Requiere proveedor o desarrollo; tiene costos por conversación según las reglas de Meta |
| **CRM / bandeja compartida** (tipo Whaticket) | Equipos de ventas o soporte | Un número atendido por varios asesores, historial, asignación | Suscripción mensual; conviene definir procesos |
| **Formulario que envía a WhatsApp** | Negocios que necesitan datos antes de conversar | Pedir nombre, producto o distrito y abrir el chat con esa info | Un paso más para el usuario |

Vamos por partes.

## Paso 1: Un botón de WhatsApp bien hecho (no solo un ícono verde)

El botón click-to-chat usa un enlace como `https://wa.me/51XXXXXXXXX?text=...`, con el código de país (51 para Perú) y el número sin espacios ni símbolos. Lo sencillo es pegar un plugin y listo; lo profesional es cuidar estos detalles:

### Mensaje prellenado según la página

Si el cliente está viendo tu servicio de mantenimiento, el mensaje no debería ser "Hola". Debería ser algo como *"Hola, vengo de la web y quiero información sobre el servicio de mantenimiento"*. En una tienda, puede incluir el nombre del producto o el SKU.

Esto tiene dos ventajas: el cliente no tiene que pensar qué escribir (menos fricción) y tu asesor sabe de inmediato de qué se trata.

### Ubicación y diseño

- Botón flotante visible en móvil, pero que **no tape** el botón de compra ni el menú.
- Llamadas a WhatsApp dentro del contenido: en la ficha de producto, en la sección de precios, al final de cada servicio.
- Texto claro ("Cotizar por WhatsApp") en lugar de solo el ícono cuando el contexto lo permite.

Cómo encaja con el resto de la página lo explico en la [anatomía de una landing page que convierte](/blog/landing-page-que-convierte/) y en los [elementos que no pueden faltar en una página web para empresas](/blog/pagina-web-para-empresas-checklist/).

### Que no ralentice tu web

Muchos plugins de "chat flotante" cargan varios scripts pesados solo para mostrar un ícono. Un botón de WhatsApp puede ser un enlace con un SVG ligero, sin librerías externas. Si tu web ya es lenta, revisa mi guía de [velocidad web y Core Web Vitals](/blog/velocidad-web-core-web-vitals/): cada script de terceros suma.

## Paso 2: Mide cada clic en Google Analytics 4

Si no mides, no sabes si tus anuncios, tu SEO o tus publicaciones en redes están generando conversaciones. En mis proyectos configuro esto con Google Tag Manager:

1. **Evento en GA4** al hacer clic en cualquier enlace de WhatsApp (por ejemplo, `whatsapp_click`), con parámetros como la página de origen y la ubicación del botón (flotante, ficha de producto, footer).
2. **Marcar el evento como conversión clave** en GA4 para verlo en los informes de adquisición.
3. **Conservar las UTM** de la visita: así sabes si el lead vino de Google Ads, Meta Ads, orgánico o de una campaña de correo.

Un truco útil: incluir una referencia corta en el mensaje prellenado (por ejemplo, el nombre de la página o un código de campaña). Así, aunque la conversación siga en el celular, el asesor puede anotar el origen del lead.

Ojo con una limitación honesta: GA4 mide el **clic**, no si la persona finalmente envió el mensaje ni si compró. Para cerrar ese ciclo necesitas un CRM o la API, que veremos más abajo.

## Paso 3: ¿WhatsApp Business app o WhatsApp Business Platform (API)?

Esta es la pregunta que más me hacen los dueños de negocio.

### WhatsApp Business app

Es la aplicación gratuita que instalas en el celular. Te da perfil de empresa, horario, catálogo, etiquetas, mensajes de bienvenida y de ausencia, y respuestas rápidas. Permite vincular algunos dispositivos adicionales.

**Te conviene si:** eres tú o una o dos personas quienes responden, el volumen es manejable y no necesitas integrar las conversaciones con otros sistemas.

### WhatsApp Business Platform (API)

Es la versión para empresas que Meta ofrece a través de su nube o de proveedores autorizados. No se usa desde la app del celular, sino conectada a un software: un CRM, un chatbot o una bandeja de atención.

**Te conviene si:**

- Varios asesores deben atender el mismo número.
- Quieres automatizar respuestas, confirmaciones de pedido o recordatorios de citas.
- Necesitas integrar WhatsApp con tu tienda online, tu CRM o tu sistema de reservas.
- Quieres que las conversaciones sean de la empresa, no del celular de un vendedor.

La API tiene reglas propias: plantillas de mensajes aprobadas para iniciar conversaciones, políticas de uso y un modelo de cobro definido por Meta que ha ido cambiando. Antes de decidir, revisa las condiciones vigentes en la documentación oficial de WhatsApp Business y las tarifas de cada proveedor, porque varían.

## Paso 4: Bandejas compartidas y CRMs para no perder leads

Aquí está la diferencia entre "tener WhatsApp" y "vender por WhatsApp". Con una bandeja compartida:

- Un solo número de la empresa atendido por varias personas.
- Cada conversación se **asigna** a un asesor, con estado (nuevo, en seguimiento, cerrado).
- Queda un **historial** aunque cambie el personal.
- Puedes ver tiempos de respuesta y carga de trabajo.

Herramientas como Whaticket están pensadas justamente para esto. Conozco bien el producto porque trabajé en la web de [Whaticket](/proyectos/whaticket/), un SaaS de atención por WhatsApp: la construí en WordPress, optimizada para marketing y rendimiento, con Cloudflare, WP Rocket, HubSpot CRM y Google Tag Manager para medir la captación.

Otros CRMs (HubSpot, por ejemplo) también permiten conectar WhatsApp y unir en un mismo registro la visita a la web, el formulario y la conversación. La elección depende de tu volumen, tu presupuesto y cuántas personas atienden.

## Paso 5: Formularios que terminan en WhatsApp

A veces quieres datos antes de conversar: el distrito para calcular el envío, el modelo que le interesa, el presupuesto aproximado. Una solución que uso a menudo es un formulario corto en la web que:

1. Pide 2–4 datos clave.
2. Guarda el lead en tu CRM, hoja de cálculo o correo (para no depender solo del chat).
3. Abre WhatsApp con un mensaje ya armado con esa información.

El cliente llega a la conversación "precalificado" y tu asesor no pierde tiempo preguntando lo básico. Además, si el usuario cierra WhatsApp sin enviar, igual tienes su registro.

## WhatsApp en tiendas online: del carrito al chat

En e-commerce, WhatsApp funciona muy bien como apoyo, no como reemplazo del checkout. Algunos usos que he visto dar resultado:

- Botón "Consultar por WhatsApp" en fichas de productos caros o técnicos, donde el cliente necesita confianza antes de pagar. Es el caso de tiendas de vehículos como [Segway Powersports Perú](/proyectos/segway-powersports/), donde el producto requiere asesoría.
- Soporte posventa y seguimiento de pedidos.
- Coordinación de pagos por Yape o Plin cuando el negocio aún no tiene pasarela, aunque lo ideal es que el cliente pueda pagar en la web.

Si estás armando tu tienda, te recomiendo leer cómo [crear una tienda virtual en Perú](/blog/como-crear-una-tienda-virtual-en-peru/) y la comparativa de [pasarelas de pago en Perú](/blog/pasarelas-de-pago-en-peru/): WhatsApp acompaña la venta, pero el pago automatizado es lo que escala.

## Privacidad y consentimiento: lo que no puedes ignorar

Cuando un cliente te escribe, te está dando su número y, muchas veces, datos personales. En Perú rige la Ley de Protección de Datos Personales (Ley N.° 29733), así que conviene hacer las cosas bien:

- **Política de privacidad** visible en la web que explique para qué usas los datos que recibes por formularios y WhatsApp.
- **Consentimiento** claro antes de enviar mensajes promocionales. Que alguien te haya escrito una vez no significa que acepte recibir ofertas indefinidamente.
- **Opción de darse de baja** fácil en cualquier comunicación masiva.
- **Cumplir las políticas de WhatsApp:** los envíos masivos no solicitados pueden terminar en bloqueo del número. La API exige opt-in y plantillas aprobadas.
- **Acceso controlado:** números corporativos y herramientas con usuarios por asesor, en lugar de chats en celulares personales.

No soy abogado, así que para casos específicos te recomiendo validar con un asesor legal; pero desde el lado técnico, dejo la web preparada para pedir y registrar el consentimiento.

## ¿Qué opción de WhatsApp le conviene a tu empresa?

| Tu situación | Recomendación |
|---|---|
| Recién empiezas, tú respondes | Botón click-to-chat con mensaje prellenado + evento en GA4 + WhatsApp Business app |
| 2–5 asesores, leads que se pierden | Bandeja compartida / CRM con WhatsApp |
| Alto volumen, pedidos online, recordatorios | WhatsApp Business Platform (API) integrada con tu tienda o sistema |
| Necesitas datos antes de conversar | Formulario corto que guarda el lead y abre WhatsApp |

Si no tienes claro si esto lo resuelve mejor un freelance o una agencia, en [freelance vs agencia de desarrollo web](/blog/freelance-vs-agencia-desarrollo-web/) explico cómo elegir según el tamaño del proyecto.

## ¿Quieres que WhatsApp te traiga clientes medibles?

Puedo revisar cómo está integrado WhatsApp en tu web hoy, configurar el botón con mensajes por página, medirlo en GA4 y, si tu equipo lo necesita, conectarlo con un CRM o una bandeja compartida. Todo sin sacrificar la velocidad de tu sitio.

[Cuéntame tu proyecto](/#contact) y vemos qué opción se ajusta a tu negocio.

## Preguntas frecuentes

### ¿Cómo pongo un botón de WhatsApp en mi página web?

Crea un enlace con el formato `https://wa.me/51` seguido de tu número (sin espacios ni signos) y, opcionalmente, `?text=` con un mensaje codificado. Colócalo como botón flotante y en las secciones clave, y mide los clics con un evento en Google Analytics 4.

### ¿WhatsApp Business es gratis?

La app WhatsApp Business es gratuita. La WhatsApp Business Platform (API) tiene costos según el modelo de cobro de Meta y, si usas un proveedor o CRM, su suscripción. Verifica las tarifas vigentes en la web oficial de cada uno.

### ¿Varias personas pueden atender el mismo número de WhatsApp?

Con la app, de forma limitada mediante dispositivos vinculados. Para un equipo de ventas o soporte lo recomendable es la API con una bandeja compartida o CRM, que asigna conversaciones y guarda el historial.

### ¿Puedo saber cuántos clientes me llegan por WhatsApp desde mi web?

Sí, midiendo los clics al botón como evento de conversión en GA4 y conservando las UTM de la visita. Para saber cuántos terminan comprando necesitas registrar el lead en un CRM o integrar la API.
