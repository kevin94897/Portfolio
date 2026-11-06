---
title: "Estafas con voz clonada y deepfakes: cómo proteger a tu empresa en Perú"
description: "Las estafas con voz clonada por IA y los deepfakes ya apuntan a empresas en Perú. Cómo funcionan, señales de alerta y un protocolo simple para que tu equipo no caiga."
pubDate: 2026-11-16
category: "Seguridad"
tags: ["deepfake", "voz clonada", "ciberseguridad", "estafas", "inteligencia artificial"]
image: "../../assets/blog/estafas-voz-clonada-deepfake-empresas.jpg"
imageAlt: "Celular con una llamada entrante, una onda de voz duplicada junto a una máscara y un escudo que bloquea un pago"
---

Imagina esta llamada: es el gerente general. Su voz, su forma de hablar, hasta su muletilla de siempre. Está en una reunión, no puede hablar mucho y necesita que finanzas haga una transferencia urgente a un proveedor nuevo. "Después te explico, es confidencial".

Hace unos años, esa llamada habría sonado sospechosa. Hoy, con unos segundos de audio sacados de un video de LinkedIn o de un mensaje de voz, una herramienta de IA puede **clonar una voz** con una calidad que engaña a cualquiera. Y no es teoría: en Perú ya hay casos.

En este artículo te explico cómo funcionan estas estafas, por qué las pymes son un blanco fácil y un protocolo simple que puedes implementar esta semana.

## ¿Qué está pasando en Perú?

Algunos datos y casos reportados por la prensa peruana:

- La agencia Andina informó que los **fraudes en el Perú aumentaron 74%** asociados al uso indebido de la inteligencia artificial ([Andina](https://andina.pe/agencia/noticia-fraudes-peru-aumentan-74-uso-indebido-de-inteligencia-artificial-993963.aspx)).
- En el Callao se detuvo a un sujeto que **clonaba la voz de empresarios** para exigir dinero a sus propios trabajadores ([Panamericana](https://panamericana.pe/buenosdiasperu/locales/406859-cae-garganta-profunda-sujeto-clonaba-voces-empresarios-ia-estafar-trabajadores)).
- Expreso reporta que los deepfakes y la suplantación digital **se incrementan en empresas peruanas**, con llamadas que imitan la voz de un CEO ([Expreso](https://www.expreso.com.pe/tecnologia/deepfakes-y-suplantacion-digital-se-incrementan-en-empresas-peruanas-ciberseguridad-inteligencia-artificial-noticia/1195062/)).
- Gestión señala que los estafadores concentran sus falsificaciones en directores ejecutivos y empresas, y repasa las vías de denuncia disponibles ([Gestión](https://gestion.pe/g-de-gestion/reportaje/estafas-online-y-deepfake-el-area-gris-de-las-denuncias-contra-los-ciberdelincuentes-en-peru-noticia/)).

## Las modalidades más comunes

### 1. La voz del jefe (fraude del CEO)

Llaman o envían audios de WhatsApp con la voz clonada de un gerente, pidiendo una transferencia, el pago de una factura o datos de acceso. Siempre hay urgencia y secreto.

### 2. El proveedor que "cambió de cuenta"

Llega un correo, a veces desde un dominio casi idéntico al real, avisando que el proveedor cambió de cuenta bancaria. Luego llega un audio o una videollamada corta "confirmándolo". Las facturas siguientes se pagan al estafador.

### 3. El familiar o el cliente en apuros

La modalidad más conocida: un audio con la voz de un familiar pidiendo dinero por una emergencia, con ruidos de fondo para hacerlo creíble. En empresas se ve como un "cliente importante" que necesita un reembolso inmediato.

### 4. Videollamadas falsas

Menos común, pero ya ocurre: videollamadas cortas, con mala conexión "a propósito", donde el rostro y la voz de un directivo son generados. La mala calidad disimula los defectos del deepfake.

## ¿Por qué las pymes son el blanco perfecto?

- **Procesos informales:** el gerente pide por WhatsApp y finanzas paga. No hay doble aprobación.
- **Mucho contenido público:** videos en redes, entrevistas, audios en grupos. Material de sobra para clonar una voz.
- **Pocas personas, mucha confianza:** en equipos pequeños nadie quiere "desconfiar del jefe".
- **Datos expuestos en la web:** nombres, cargos, correos directos y teléfonos personales publicados en la página de "Nosotros".

## Señales de alerta que tu equipo debe conocer

- Urgencia extrema y pedido de confidencialidad ("no se lo digas a nadie").
- Cambios de cuenta bancaria, de proveedor o de canal de pago.
- Llamadas desde números nuevos o "el mío se malogró".
- Pausas raras, ritmo demasiado perfecto o respuestas que no encajan con lo que preguntas.
- Se niega a cortar y llamarte de vuelta, o a confirmar por otro medio.
- En video: mala calidad constante, poca gesticulación, labios que no coinciden del todo.

La regla de oro: **la urgencia es la herramienta del estafador**. Cualquier pedido de dinero urgente debe activar el protocolo, aunque la voz suene idéntica.

## Protocolo anti-deepfake en 6 pasos

1. **Palabra clave interna.** Define una palabra o pregunta que solo conozcan las personas autorizadas a pedir pagos. Si no la dicen, no se paga.
2. **Verificación por otro canal.** Si llega un pedido por llamada, confirma por un canal distinto y conocido: cuelga y llama tú al número que ya tienes guardado, o confirma en persona.
3. **Doble aprobación para pagos.** Transferencias por encima de un monto deben ser aprobadas por dos personas. Sin excepciones "por urgencia".
4. **Cambios de cuenta solo con validación formal.** Un cambio de datos bancarios de un proveedor se confirma llamando al contacto habitual, nunca respondiendo al correo que avisa del cambio.
5. **Capacitación corta y repetida.** Quince minutos al mes con ejemplos reales valen más que un curso anual. Incluye a recepción, ventas y finanzas.
6. **Plan de respuesta.** Si alguien cae, cada minuto cuenta: contacta de inmediato a tu banco para intentar bloquear la operación y denuncia ante la Policía o la fiscalía especializada en ciberdelincuencia.

## Lo que tu web puede hacer para reducir el riesgo

Como desarrollador, aquí está mi parte del problema. Tu página web puede facilitarle el trabajo al estafador o complicárselo:

- **No publiques correos y teléfonos personales de cada gerente.** Usa correos de área (ventas@, contacto@) y un formulario. En esta web, por ejemplo, el correo no aparece en texto plano para los bots.
- **Protege tu dominio.** Configura SPF, DKIM y DMARC en tu correo corporativo para que sea más difícil enviar correos falsos a nombre de tu empresa.
- **Canales oficiales visibles.** Publica en tu web cuáles son tus canales oficiales de pago y contacto, y aclara que nunca pedirás pagos a cuentas personales. Si usas WhatsApp, que sea un número de empresa verificado; en la guía de [WhatsApp en tu página web](/blog/integrar-whatsapp-en-tu-pagina-web/) explico cómo hacerlo bien.
- **Pagos solo por pasarelas formales.** Si vendes online, cobra a través de una pasarela integrada y no por transferencias coordinadas por chat. Comparo opciones en [pasarelas de pago en Perú](/blog/pasarelas-de-pago-en-peru/).
- **Formularios protegidos.** Un formulario sin protección es una puerta para spam y phishing. Todo esto forma parte del [checklist de una página web para empresas](/blog/pagina-web-para-empresas-checklist/).

## ¿Quieres revisar qué tan expuesta está tu empresa?

Puedo revisar tu web, tu dominio y tu correo corporativo para detectar qué información facilita la suplantación y qué configuraciones de seguridad te faltan.

[Cuéntame tu proyecto](/#contact) y te respondo con un diagnóstico claro.

## Preguntas frecuentes

### ¿Cuánto audio necesitan para clonar una voz?

Las herramientas actuales pueden generar una imitación convincente con muy pocos segundos de audio limpio. Cuanto más material haya, mejor es el resultado, y por eso los directivos con presencia en redes o medios son blancos frecuentes.

### ¿Dónde denuncio una estafa con deepfake en Perú?

En la Policía Nacional del Perú (División de Investigación de Delitos de Alta Tecnología) o en la fiscalía especializada en ciberdelincuencia. Si hubo transferencias, avisa de inmediato a tu banco. Si se usaron datos personales, también puedes acudir a la Autoridad Nacional de Protección de Datos Personales.

### ¿Existe software para detectar deepfakes?

Hay herramientas de detección, pero ninguna es infalible y los generadores mejoran constantemente. Para una empresa, los procesos (verificación por otro canal y doble aprobación) son más efectivos que depender de un detector.

### ¿El seguro cubre este tipo de fraude?

Algunas pólizas de ciberseguro cubren fraudes por suplantación, con condiciones. Revisa tu póliza y consulta con tu aseguradora; muchas exigen tener controles como la doble aprobación de pagos.
