// The 12 named services (per the approved list — Microsoft 365 excluded, and the
// old generic "Inteligencia Artificial" / "Agentes de IA" line items folded into
// the site's overall positioning instead of listed as standalone services).
// `category` is only used to pick "related services" on a detail page — the
// /servicios index itself is a flat editorial list, not a grouped grid.

export type ServiceCategory = 'desarrollo' | 'marketing' | 'visibilidad' | 'estrategia' | 'ia';

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface ServiceStep {
  title: string;
  body: string;
}

export interface ServiceDetail {
  slug: string;
  n: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  h1: string;
  intro: string;
  valueProp: string;
  benefits: ServiceStep[];
  forYouIf: string[];
  process: ServiceStep[];
  pricingNote: string;
  whatWeNeed: string;
  whatsNotIncluded: string;
  faq: ServiceFaqItem[];
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'desarrollo-web',
    n: '01',
    title: 'Desarrollo Web',
    category: 'desarrollo',
    shortDescription: 'Webs corporativas, landings y experiencias digitales orientadas a conversión.',
    h1: 'Desarrollo web para empresas que necesitan resultados reales',
    intro:
      'Construyo webs corporativas, landings y experiencias digitales pensadas para convertir, no solo para existir. Cada proyecto se diseña a medida partiendo del negocio real del cliente: a quién quiere llegar, qué debe hacer el visitante en cada página y qué hay que medir para saber si funciona. Nada de plantillas genéricas retocadas: código propio, pensado para cargar rápido y para posicionar desde el primer día.',
    valueProp:
      'El desarrollo web para empresas de Jaime Bernáldez consiste en construir sitios corporativos, landings y plataformas digitales a medida, sin plantillas genéricas, para empresas que necesitan que su web funcione como un activo comercial y no como una tarjeta de visita digital. Está pensado para negocios que ya tienen una web que carga lenta, no aparece en Google o no genera contactos, y también para quienes van a lanzar un proyecto nuevo y quieren hacerlo bien desde el principio. La diferencia frente a una plantilla de autoservicio o una agencia estándar es que cada decisión técnica —arquitectura, velocidad, estructura SEO, formularios, analítica— se toma en función de lo que ese negocio concreto necesita para captar y convertir clientes, no en función de lo que trae por defecto una plantilla.',
    benefits: [
      { title: 'Velocidad real', body: 'El código se construye a medida para cargar rápido desde el primer segundo, sin el peso muerto de plugins y plantillas genéricas que ralentizan la mayoría de webs corporativas.' },
      { title: 'SEO desde el inicio', body: 'La estructura, las etiquetas y la arquitectura de contenidos se trabajan desde la primera línea de código, no como un parche que se añade al final del proyecto.' },
      { title: 'Diseño orientado a conversión', body: 'Cada página se diseña con un objetivo claro —una llamada, un formulario, una compra— en lugar de perseguir solo la estética.' },
    ],
    forYouIf: [
      'Tu web actual tarda varios segundos en cargar y notas que la gente se va antes de ver nada.',
      'Has invertido en una web con buen diseño pero no aparece en Google ni genera contactos ni llamadas.',
      'Sigues usando una plantilla genérica que no refleja cómo funciona realmente tu negocio.',
      'Vas a lanzar un proyecto nuevo y quieres que la web esté bien construida desde el primer día, no arreglada después.',
    ],
    process: [
      { title: 'Análisis del negocio', body: 'Antes de tocar diseño o código, se revisa cómo funciona el negocio, quién es el cliente objetivo y qué debe conseguir la web para que el proyecto merezca la pena.' },
      { title: 'Arquitectura y SEO técnico', body: 'Se define la estructura de páginas, la jerarquía de contenidos y los aspectos técnicos de SEO antes de maquetar, para no tener que corregirlos después.' },
      { title: 'Desarrollo a medida', body: 'Se construye el sitio con código propio, optimizado en velocidad y pensado para el dispositivo desde el que realmente llegan los visitantes.' },
      { title: 'Lanzamiento y medición', body: 'Se pone en marcha con la analítica configurada para saber qué páginas funcionan y qué hay que ajustar con datos reales, no con intuición.' },
    ],
    pricingNote:
      'El coste de un proyecto de desarrollo web depende del alcance: no es lo mismo una landing con un único objetivo que un sitio corporativo con varias secciones, integraciones o un blog. No se dan cifras cerradas de entrada porque dependen de cuántas páginas necesita el proyecto, qué funcionalidades lleva y qué trabajo de contenido o SEO técnico requiere. El presupuesto se concreta después de una llamada de diagnóstico gratuita en la que se revisa el caso concreto y se plantea qué tiene sentido hacer y qué no.',
    whatWeNeed:
      'Para arrancar un proyecto de desarrollo web hace falta acceso al dominio y al hosting actual, si ya existen, el material de marca disponible —logo, colores, textos o fotografías si los hay— y una persona de contacto que pueda validar decisiones con agilidad durante el proyecto. Si la empresa ya tiene una web, también ayuda tener acceso a las estadísticas actuales (Google Analytics, Search Console) para partir de datos reales en lugar de suposiciones.',
    whatsNotIncluded:
      'El desarrollo web no incluye la redacción final de todos los textos del sitio, aunque sí se orienta la estructura y el mensaje de cada página, ni sesiones de fotografía profesional, ni la gestión continuada de campañas de publicidad una vez lanzada la web. Tampoco cubre el mantenimiento indefinido tras la entrega: el proyecto se deja documentado y funcionando, y cualquier evolución posterior —nuevas secciones, cambios de contenido recurrentes— se plantea como un trabajo aparte.',
    faq: [
      { q: '¿Trabajáis con plantillas de WordPress o hacéis código a medida?', a: 'El desarrollo se hace a medida. Se puede usar WordPress cuando tiene sentido para el proyecto, pero siempre evitando plantillas genéricas que limitan la velocidad y el control sobre el SEO técnico.' },
      { q: '¿Cuánto tarda en estar lista una web?', a: 'Depende del alcance del proyecto: una landing sencilla necesita bastante menos tiempo que un sitio corporativo con varias secciones. El plazo se concreta en la llamada de diagnóstico, una vez está claro qué incluye el proyecto.' },
      { q: '¿La web va a aparecer en Google desde el principio?', a: 'Se trabaja el SEO técnico desde el inicio —velocidad, estructura, etiquetas— para que la web parta con buenas condiciones para posicionar, pero el posicionamiento depende de más factores (competencia, contenido, tiempo) y no se puede prometer una posición ni un plazo concretos.' },
    ],
    seoTitle: 'Desarrollo Web para Empresas | Jaime Bernáldez',
    seoDescription: 'Desarrollo web para empresas a medida: rápida, con SEO técnico desde el inicio y diseñada para convertir visitas en clientes, no solo para existir.',
  },
  {
    slug: 'redes-sociales',
    n: '02',
    title: 'Gestión de Redes Sociales',
    category: 'marketing',
    shortDescription: 'Estrategia, contenido y gestión de presencia social.',
    h1: 'Gestión de redes sociales con estrategia, no solo contenido',
    intro:
      'Gestionar las redes sociales de una empresa va más allá de decidir qué publicar cada semana: implica definir una estrategia con objetivos claros, crear contenido coherente con la marca y hacer seguimiento de lo que realmente funciona. Este servicio se ocupa de esa gestión completa —estrategia, contenido y presencia social— para que las redes sociales trabajen a favor del negocio, no como una obligación más en la lista de tareas.',
    valueProp:
      'La gestión de redes sociales para empresas consiste en administrar de forma estratégica la presencia social de un negocio —contenido, publicación y seguimiento— para que aporte a objetivos concretos como visibilidad, confianza o captación de clientes, no solo mantener los perfiles activos. Está pensada para empresas que ya tienen presencia en redes pero no ven resultado, o que saben que deberían estar presentes y no tienen ni el tiempo ni el criterio para hacerlo con sentido. El valor no está en publicar con frecuencia, sino en que cada publicación responda a una estrategia pensada para el negocio concreto, y no a una plantilla genérica aplicada a cualquier empresa.',
    benefits: [
      { title: 'Foco en objetivos', body: 'Cada publicación responde a un objetivo de negocio concreto, no a la necesidad de mantener el perfil activo por costumbre.' },
      { title: 'Coherencia de marca', body: 'El tono, la imagen y los mensajes se mantienen consistentes en todas las redes en las que la empresa tiene presencia.' },
      { title: 'Decisiones con datos', body: 'Se revisa qué contenido genera resultados reales y se ajusta la estrategia en consecuencia, en lugar de repetir la misma fórmula cada mes.' },
    ],
    forYouIf: [
      'Publicas en redes sociales cuando tienes un rato libre, sin un plan ni un objetivo detrás.',
      'Tienes seguidores o me gusta pero no consigues que eso se traduzca en consultas o ventas.',
      'No sabes qué contenido funciona realmente porque nadie revisa las estadísticas con regularidad.',
      'La gestión de las redes recae en quien tiene un hueco en la agenda, no en alguien con criterio estratégico.',
    ],
    process: [
      { title: 'Auditoría y diagnóstico', body: 'Se revisa el estado actual de las redes de la empresa, qué funciona, qué no, y cómo se compara con la competencia directa.' },
      { title: 'Estrategia y calendario', body: 'Se definen objetivos de negocio, líneas de contenido y un calendario editorial que responde a esos objetivos, no al azar.' },
      { title: 'Producción y publicación', body: 'Se crea y publica el contenido acordado, adaptado a cada red social y siguiendo la línea editorial definida.' },
      { title: 'Medición y ajuste', body: 'Se analiza qué contenido da resultado y se ajusta la estrategia en función de los datos, no de intuiciones.' },
    ],
    pricingNote:
      'El coste de gestionar las redes sociales de una empresa depende del número de redes activas, el volumen de contenido necesario y el nivel de implicación requerido —estrategia, producción, gestión de comunidad—. No se ofrece una tarifa cerrada sin conocer antes el punto de partida: el alcance y el presupuesto se concretan en una llamada de diagnóstico inicial, en función de las necesidades reales del negocio.',
    whatWeNeed:
      'Para empezar hace falta acceso a los perfiles sociales de la empresa (o su creación si todavía no existen), los materiales de marca disponibles —logo, fotografías, tono de comunicación— y una persona de contacto que pueda validar el contenido y aportar información del negocio cuando se necesite.',
    whatsNotIncluded:
      'Este servicio no incluye la gestión de campañas de publicidad de pago en redes sociales, que se trabaja como servicio independiente. Tampoco cubre producción audiovisual profesional —sesiones de fotografía o vídeo con equipo especializado— salvo que se acuerde específicamente, ni la atención de mensajes o comentarios fuera del horario laboral pactado.',
    faq: [
      { q: '¿En qué redes sociales trabajáis?', a: 'Se prioriza en función de dónde está realmente el público objetivo de cada negocio. No tiene sentido mantener presencia en todas las redes si el cliente potencial solo está activo en una o dos.' },
      { q: '¿Cuántas publicaciones se hacen al mes?', a: 'La frecuencia se define según la estrategia y los recursos de cada empresa, no según una cifra estándar. Publicar más no es mejor si el contenido no responde a un objetivo.' },
      { q: '¿Quién aprueba el contenido antes de publicarlo?', a: 'El flujo de aprobación se acuerda al principio: algunas empresas prefieren revisar cada pieza y otras delegan por completo una vez definida la línea editorial.' },
    ],
    seoTitle: 'Gestión de Redes Sociales para Empresas',
    seoDescription: 'Gestión de redes sociales para empresas: estrategia, contenido y publicación con objetivos de negocio, sin publicar por publicar.',
  },
  {
    slug: 'campanas-publicitarias',
    n: '03',
    title: 'Campañas Publicitarias',
    category: 'marketing',
    shortDescription: 'Publicidad digital y campañas orientadas a captación.',
    h1: 'Gestión de campañas publicitarias centrada en captar clientes',
    intro:
      'Diseño y gestiono campañas de publicidad digital en Meta Ads, Google Ads y plataformas similares, pensadas para atraer clientes concretos, no solo para generar visitas o impresiones. El trabajo incluye la configuración de las campañas, la segmentación de audiencias, el control del presupuesto y el seguimiento de qué anuncios convierten y cuáles no. El objetivo es que cada euro invertido en publicidad se pueda relacionar con una acción real: una llamada, un formulario o una venta.',
    valueProp:
      'La gestión de campañas de publicidad digital es el servicio que se encarga de poner anuncios de pago delante de las personas adecuadas en Meta Ads, Google Ads y plataformas similares, y de medir si esos anuncios generan clientes o solo alcance. Está pensado para negocios que ya tienen un producto o servicio claro y necesitan que la inversión publicitaria se traduzca en contactos, reservas o ventas, no solo en visualizaciones. A diferencia de subir un anuncio y esperar, el trabajo se centra en definir bien el objetivo de la campaña, la audiencia y el mensaje, y en revisar los datos con regularidad para ajustar lo que no funciona y reforzar lo que sí.',
    benefits: [
      { title: 'Foco en captación', body: 'Las campañas se diseñan para generar contactos o ventas medibles, no solo alcance o impresiones.' },
      { title: 'Presupuesto bajo control', body: 'El gasto publicitario se revisa de forma continua para evitar invertir en audiencias o anuncios que no rinden.' },
      { title: 'Datos, no intuición', body: 'Cada decisión sobre las campañas se basa en los resultados reales que van dando las plataformas, no en suposiciones.' },
    ],
    forYouIf: [
      'Inviertes en anuncios en Meta o Google pero no tienes claro si te están trayendo clientes o solo visitas.',
      'Has probado a lanzar campañas por tu cuenta y el gasto sube sin que se note en las ventas o en las reservas.',
      'No tienes tiempo de revisar a diario el rendimiento de tus anuncios ni de ajustar la segmentación o el presupuesto.',
      'Quieres escalar la inversión publicitaria pero necesitas saber primero qué está funcionando antes de meter más dinero.',
    ],
    process: [
      { title: 'Diagnóstico inicial', body: 'Se revisa el negocio, el objetivo de captación y, si ya existen, las campañas actuales para entender qué está funcionando y qué no.' },
      { title: 'Planteamiento de campaña', body: 'Se define en qué plataforma tiene sentido invertir, a qué audiencia dirigirse y qué mensaje o creatividad usar según el objetivo.' },
      { title: 'Puesta en marcha', body: 'Se configuran las campañas, la segmentación y el seguimiento de conversiones para poder medir resultados desde el primer día.' },
      { title: 'Seguimiento y ajuste', body: 'Se revisan los datos de forma periódica y se ajustan audiencias, presupuestos y anuncios según lo que realmente esté dando resultado.' },
    ],
    pricingNote:
      'El coste de gestionar campañas de publicidad digital depende de varios factores: el número de plataformas a gestionar, la complejidad de la segmentación y si hay que crear también las creatividades o solo optimizar lo existente. Además, conviene distinguir entre el coste de gestión y la inversión publicitaria en sí, que se paga directamente a Meta o Google y no está incluida en el servicio. Por eso no doy una cifra cerrada sin conocer el caso: en la llamada de diagnóstico inicial se revisa la situación concreta y se plantea un presupuesto ajustado a ese caso, no una tarifa genérica.',
    whatWeNeed:
      'Para empezar hace falta acceso a las cuentas publicitarias (Business Manager de Meta, Google Ads) o, si no existen, crearlas desde cero con los datos del negocio. También conviene tener claro el presupuesto mensual disponible para inversión publicitaria, materiales o imágenes del negocio si no hay creatividades ya preparadas, y una página de destino (web, formulario o similar) a la que dirigir el tráfico. Contar con un punto de contacto que pueda validar decisiones con cierta rapidez ayuda a que los ajustes de campaña no se retrasen.',
    whatsNotIncluded:
      'Este servicio no incluye la inversión publicitaria en sí: el presupuesto de anuncios se paga directamente a Meta, Google u otras plataformas y es independiente del coste de gestión. Tampoco incluye por defecto la producción de vídeo o fotografía profesional, ni el diseño completo de una web o landing page nueva, aunque puede coordinarse si el proyecto lo requiere. No se prometen resultados económicos concretos ni un número fijo de clientes, porque dependen de variables del propio negocio y del mercado que la gestión publicitaria por sí sola no controla.',
    faq: [
      { q: '¿Cuánto hay que invertir en publicidad para que una campaña funcione?', a: 'No hay una cifra única: depende del sector, la competencia en esa plataforma y el objetivo de la campaña. Por eso el presupuesto publicitario se plantea caso por caso, normalmente empezando con un importe de prueba que permite ver datos reales antes de escalar la inversión.' },
      { q: '¿Gestionas Meta Ads y Google Ads a la vez o hay que elegir una plataforma?', a: 'Se puede trabajar con una sola plataforma o con varias en paralelo. La recomendación depende de dónde esté realmente el cliente objetivo del negocio: no siempre tiene sentido repartir el presupuesto entre varios canales desde el principio.' },
      { q: '¿Qué pasa si una campaña no está dando los resultados esperados?', a: 'Se revisan los datos para identificar si el problema está en la segmentación, el mensaje, la oferta o la propia plataforma, y se ajusta en consecuencia. No se puede garantizar un resultado económico, pero sí un seguimiento activo para no mantener una campaña que no funciona sin tocarla.' },
    ],
    seoTitle: 'Gestión de Campañas de Publicidad Digital',
    seoDescription: 'Gestión de campañas de publicidad digital en Meta Ads y Google Ads, enfocada en captar clientes reales, no solo en alcance e impresiones.',
  },
  {
    slug: 'seo',
    n: '04',
    title: 'SEO y Posicionamiento',
    category: 'visibilidad',
    shortDescription: 'Optimización para buscadores y crecimiento orgánico.',
    h1: 'Posicionamiento SEO para empresas que quieren crecer con Google',
    intro:
      'El SEO consiste en que tu web aparezca en los primeros resultados de Google cuando alguien busca lo que tú ofreces, sin pagar por cada clic. Combina trabajo técnico (que Google pueda rastrear e indexar bien la web) con contenido que responde a lo que realmente buscan tus clientes potenciales. Es un servicio distinto del de optimización para motores generativos como ChatGPT o Gemini (ese es el servicio de GEO), aunque ambos comparten base y suelen complementarse.',
    valueProp:
      'El SEO aporta tráfico cualificado y recurrente sin depender de un presupuesto de anuncios que se apaga en cuanto dejas de pagar. Está pensado para negocios cuyos clientes buscan activamente en Google —servicios profesionales, comercio, clínicas, inmobiliarias— y que quieren que esa demanda ya existente los encuentre a ellos antes que a la competencia. El trabajo combina la parte técnica (que la web sea rastreable, rápida y esté bien estructurada) con la de contenido (que exista una página o artículo que responda a cada búsqueda relevante), porque sin ambas piezas el posicionamiento no avanza.',
    benefits: [
      { title: 'Tráfico cualificado', body: 'Las visitas llegan porque buscaban activamente lo que ofreces, no porque hicieron clic en un anuncio genérico.' },
      { title: 'Efecto acumulativo', body: 'A diferencia de la publicidad de pago, el trabajo de SEO sigue generando visitas aunque ese mes no se publique nada nuevo.' },
      { title: 'Base técnica sólida', body: 'Se corrigen antes los problemas que impiden a Google rastrear o entender la web, para que el contenido tenga donde apoyarse.' },
    ],
    forYouIf: [
      'Tu web no aparece en las primeras posiciones de Google para las búsquedas que más te interesan.',
      'Dependes casi por completo de anuncios de pago y las visitas se cortan en cuanto bajas la inversión.',
      'Tienes un blog o páginas de servicio que casi nadie visita porque no responden a lo que la gente busca realmente.',
      'No sabes si tu web tiene errores técnicos (velocidad, indexación, estructura) que le están impidiendo posicionar.',
    ],
    process: [
      { title: 'Auditoría técnica y de contenido', body: 'Se revisa cómo rastrea e indexa Google la web, la velocidad, la estructura y qué contenido existe frente al que falta.' },
      { title: 'Investigación de palabras clave', body: 'Se identifican las búsquedas reales de tus clientes potenciales, su volumen e intención, para priorizar dónde merece la pena invertir esfuerzo.' },
      { title: 'Optimización on-page y técnica', body: 'Se corrigen los problemas detectados y se optimizan las páginas objetivo: títulos, encabezados, enlazado interno y experiencia de usuario.' },
      { title: 'Contenido y medición', body: 'Se produce o mejora el contenido necesario y se hace seguimiento mensual de posiciones, tráfico e indexación para ajustar la estrategia.' },
    ],
    pricingNote:
      'El coste de un proyecto de SEO depende del estado actual de la web, del número de páginas o palabras clave a trabajar y de si hace falta producir contenido nuevo o solo optimizar el existente. No se ofrecen tarifas cerradas sin antes ver la web: en la llamada de diagnóstico inicial, gratuita, se revisa el caso concreto y se plantea un presupuesto ajustado a ese alcance, no una cifra genérica sacada de una tabla de precios.',
    whatWeNeed:
      'Para empezar hace falta acceso de administrador o edición a la web (o a quien la gestione), y acceso o alta en Google Search Console y Google Analytics si no existen ya. También ayuda tener claro quiénes son tus clientes objetivo y qué servicios o productos quieres priorizar, para no dispersar el trabajo de palabras clave en todas direcciones a la vez.',
    whatsNotIncluded:
      'El SEO no incluye la gestión de campañas de publicidad de pago (Google Ads o similares): son inversiones distintas, aunque pueden combinarse. Tampoco cubre por defecto la optimización para motores de respuesta generativos como ChatGPT o Gemini —eso corresponde al servicio de GEO, con el que comparte base pero tiene técnicas propias. Y no se garantiza una posición concreta en los resultados de Google: nadie controla el algoritmo de un buscador de forma predecible, ni siquiera Google mismo.',
    faq: [
      { q: '¿Cuánto se tarda en ver resultados de SEO?', a: 'El SEO no da resultados inmediatos: implica que Google rastree, indexe y reevalúe la web, un proceso que lleva su tiempo y no está bajo control total de quien hace el trabajo. Cualquier propuesta que prometa primeras posiciones en un plazo cerrado de días o pocas semanas merece desconfianza.' },
      { q: '¿En qué se diferencia el SEO del servicio de GEO?', a: 'El SEO optimiza para que tu web aparezca en los resultados de buscadores tradicionales como Google o Bing, donde la persona hace clic y visita la página. El GEO optimiza para que los motores generativos (ChatGPT, Gemini, Perplexity) citen o recomienden tu negocio dentro de una respuesta, sin que necesariamente haya un clic. Comparten fundamentos, pero son disciplinas distintas con tácticas propias.' },
      { q: '¿Necesito hacer también publicidad de pago (SEM) además de SEO?', a: 'No es obligatorio: son inversiones independientes. La publicidad de pago da visibilidad inmediata mientras el SEO madura, pero muchos negocios trabajan solo con SEO si el plazo no es urgente. La decisión depende de cuánto tiempo puedes esperar y de la competencia que haya en tus búsquedas objetivo.' },
    ],
    seoTitle: 'Posicionamiento SEO para Empresas | Jaime Bernáldez',
    seoDescription: 'Posicionamiento SEO para empresas: auditoría técnica, contenido y estrategia de keywords para tráfico orgánico sostenible en Google.',
  },
  {
    slug: 'geo',
    n: '05',
    title: 'GEO — Generative Engine Optimization',
    category: 'visibilidad',
    shortDescription: 'Optimización de contenido y presencia digital para motores generativos y respuestas de IA.',
    h1: 'Que la IA generativa cite y recomiende tu negocio',
    intro:
      'Cuando alguien le pregunta a ChatGPT, Perplexity o Google AI Overviews qué empresa contratar para un servicio, la respuesta que recibe no sale del listado clásico de Google: sale de lo que esos modelos han entendido y consideran fiable sobre cada negocio. El GEO trabaja tu contenido y tu presencia digital para que esa respuesta te incluya a ti. Es un trabajo técnico y de contenido a la vez, no una promesa de aparecer en un ranking.',
    valueProp:
      'GEO (Generative Engine Optimization) es el conjunto de prácticas para que asistentes de IA como ChatGPT, Perplexity o Google AI Overviews citen y recomienden tu empresa cuando alguien les pregunta por un servicio como el tuyo, en lugar de limitarte a aparecer en el listado clásico de resultados de Google. Está pensado para negocios que ya tienen web pero notan que parte de la búsqueda de sus clientes se está moviendo hacia los asistentes de IA antes de llegar al buscador tradicional. Además, en español es todavía una categoría emergente con poca competencia: quien publique contenido serio ahora tiene la oportunidad de quedar posicionado como referencia temprana en su sector antes de que el hueco se llene.',
    benefits: [
      { title: 'Presencia en la IA', body: 'Tu empresa puede aparecer citada cuando alguien pregunta a ChatGPT, Perplexity o Gemini por un servicio como el tuyo, no solo en el listado clásico de Google.' },
      { title: 'Autoridad temprana', body: 'El GEO en español tiene todavía poca competencia, así que publicar contenido serio ahora te da la oportunidad de quedar como referencia antes de que el hueco se llene.' },
      { title: 'Contenido más claro', body: 'Escribir en formato de respuesta directa y con datos verificables mejora también la experiencia de tus clientes humanos y tu posicionamiento SEO tradicional.' },
    ],
    forYouIf: [
      'Buscas tu propio negocio en ChatGPT o Perplexity y no aparece, o aparece un competidor en tu lugar.',
      'Tu web está bien posicionada en Google pero notas que las herramientas de IA no la mencionan cuando deberían.',
      'No sabes si tu robots.txt está bloqueando sin querer a los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot).',
      'Quieres adelantarte a tu sector en este tipo de optimización antes de que se llene de competencia.',
    ],
    process: [
      { title: 'Auditoría de citabilidad', body: 'Revisamos si tu contenido actual responde de forma autocontenida a las preguntas que la gente le hace a la IA sobre tu sector.' },
      { title: 'Revisión técnica', body: 'Comprobamos que el robots.txt y la configuración del servidor no estén bloqueando a GPTBot, ClaudeBot, PerplexityBot y otros rastreadores de IA.' },
      { title: 'Señales de entidad', body: 'Implementamos marcado Organization o Person y revisamos la coherencia de datos de tu negocio entre tu web y otras plataformas donde apareces.' },
      { title: 'Contenido con respuesta directa', body: 'Reescribimos o creamos secciones que respondan la pregunta implícita desde las primeras frases, con datos verificables en lugar de relleno.' },
    ],
    pricingNote:
      'El alcance de un proyecto de GEO varía mucho según cuánto contenido tengas ya publicado, cuántas páginas necesitan revisión técnica y si partimos de cero o de una base existente. Por eso no doy una cifra cerrada sin conocer tu caso: en la llamada de diagnóstico revisamos tu situación y te digo qué tiene sentido hacer y qué coste tiene, sin compromiso.',
    whatWeNeed:
      'Para empezar necesito acceso de lectura a tu web (o a tu gestor de contenido, si lo tienes), acceso al archivo robots.txt y a la configuración del servidor para revisar qué rastreadores están permitidos, y un listado de las preguntas o búsquedas reales que te hacen tus clientes antes de contratarte. Si ya tienes presencia en Google Business Profile, redes sociales o directorios de tu sector, también conviene revisarla para comprobar que los datos son coherentes entre plataformas.',
    whatsNotIncluded:
      'El GEO no sustituye al SEO técnico ni a la gestión de contenido continua: el trabajo consiste en dejar tu presencia optimizada para que los motores generativos puedan citarte, no en escribir artículos nuevos cada semana ni en gestionar tus redes sociales. Tampoco puedo garantizar que una IA concreta vaya a citarte, porque ningún proveedor de IA publica ese criterio ni ofrece ese control, y el servicio no incluye publicidad ni campañas de pago. Si necesitas contenido recurrente o gestión de redes sociales, es un servicio aparte.',
    faq: [
      { q: '¿Qué diferencia hay entre GEO y SEO tradicional?', a: 'El SEO tradicional optimiza para aparecer en el listado de resultados de Google. El GEO optimiza para que un asistente de IA (ChatGPT, Perplexity, Google AI Overviews) te cite o recomiende dentro de la respuesta que le da al usuario, que muchas veces ni siquiera enlaza a una lista de webs. Comparten prácticas de base, pero el objetivo final es distinto.' },
      { q: '¿Puedo saber si una IA me está citando ahora mismo?', a: 'En parte, sí: puedes revisarlo tú mismo haciendo en ChatGPT o Perplexity las preguntas que haría un cliente y viendo si aparece tu negocio. No existe todavía una herramienta de analítica estándar y fiable equivalente a Google Search Console para esto, porque es una categoría muy reciente.' },
      { q: '¿Sirve de algo añadir el schema de preguntas frecuentes (FAQPage) si Google ya no lo muestra visualmente?', a: 'Sí. Google retiró los resultados enriquecidos visuales de FAQPage en 2026, pero el marcado sigue siendo útil: ayuda a que los modelos de lenguaje entiendan la estructura de pregunta y respuesta de tu contenido, aunque ya no se vea como el desplegable que aparecía antes en el buscador.' },
    ],
    seoTitle: 'GEO: Optimización para ChatGPT y AI Overviews',
    seoDescription: 'GEO optimización para ChatGPT y Google AI Overviews: consultoría para que los asistentes de IA citen y recomienden tu negocio.',
  },
  {
    slug: 'formacion-digital',
    n: '06',
    title: 'Formación Digital',
    category: 'estrategia',
    shortDescription: 'Formación para equipos y empresas en herramientas digitales e inteligencia artificial.',
    h1: 'Formación en IA que tu equipo usará de verdad',
    intro:
      'La formación digital resuelve un problema muy concreto: se implementan herramientas y automatizaciones, pero el equipo sigue trabajando como antes porque nadie le ha enseñado a usarlas en su día a día. Por eso esta formación es práctica y no teórica: se trabaja sobre los procesos reales de la empresa y sobre las herramientas que ya están en marcha (o que se van a poner en marcha), para que cada persona sepa qué hacer con ellas en su puesto concreto.',
    valueProp:
      'Formación digital significa enseñar a un equipo a usar de verdad la IA y las herramientas digitales que ya tiene o que va a implementar, no dar una charla genérica sobre inteligencia artificial. Está pensada para empresas que ya han invertido, o van a invertir, en tecnología y quieren que esa inversión se traduzca en trabajo real: menos tareas manuales, menos fricción y un equipo que sabe qué usar y por qué. El enfoque parte siempre de los procesos y herramientas concretas del negocio, no de un temario cerrado, para que lo que se aprende se aplique al día siguiente.',
    benefits: [
      { title: 'Práctica, no teoría', body: 'Cada sesión se trabaja sobre las herramientas y los procesos reales de la empresa, no sobre ejemplos genéricos.' },
      { title: 'A medida del equipo', body: 'El contenido se adapta al nivel y al puesto de cada persona, porque no todos necesitan usar las mismas herramientas del mismo modo.' },
      { title: 'Pensada para durar', body: 'El objetivo es que la herramienta se siga usando cuando termine la formación, no que quede como una sesión aislada.' },
    ],
    forYouIf: [
      'Has implementado una herramienta o automatización nueva y el equipo apenas la usa.',
      'Cada persona usa la IA a su manera, sin un criterio ni un mínimo común en la empresa.',
      'Notas que las herramientas nuevas generan más quejas y resistencia que ahorro de tiempo real.',
      'El equipo depende de ti o de soporte externo para tareas que podría resolver solo con lo que ya tiene.',
    ],
    process: [
      { title: 'Diagnóstico del punto de partida', body: 'Se revisa qué herramientas usa ya el equipo, con qué soltura y dónde están los bloqueos reales.' },
      { title: 'Diseño del contenido', body: 'Se define qué se va a enseñar y con qué ejemplos, tomando como base los procesos y herramientas propias de la empresa.' },
      { title: 'Sesiones prácticas', body: 'Se trabaja con casos reales del negocio, no con ejercicios genéricos, para que lo aprendido sea aplicable de inmediato.' },
      { title: 'Seguimiento posterior', body: 'Se revisa si el equipo está aplicando lo aprendido y se resuelven las dudas que surgen al usar las herramientas en el día a día.' },
    ],
    pricingNote:
      'No hay una tarifa cerrada para la formación digital, y no sería honesto darla sin conocer el punto de partida: no es lo mismo formar a tres personas en el uso de una herramienta ya implementada que diseñar un programa para varios departamentos con niveles distintos. El precio depende del número de personas, del número de sesiones y de la complejidad de las herramientas sobre las que se forma. Ese alcance, y el presupuesto que le corresponde, se concreta en una llamada de diagnóstico gratuita, donde se revisa la situación real del equipo antes de proponer nada.',
    whatWeNeed:
      'Para diseñar la formación hace falta acceso a las herramientas o automatizaciones sobre las que se va a formar, o una explicación clara de cómo funcionan si todavía no están implementadas, además de una persona de contacto que conozca el día a día del equipo y la disponibilidad de quienes van a recibir la formación para las sesiones acordadas. También ayuda tener identificados los procesos donde el equipo tiene más dudas o donde peor se está aprovechando la herramienta, aunque esto también se puede detectar durante el diagnóstico inicial.',
    whatsNotIncluded:
      'La formación digital no incluye el desarrollo ni la implementación de las herramientas o automatizaciones: eso corresponde a los servicios de desarrollo o automatización, y puede combinarse con la formación, pero son procesos distintos. Tampoco incluye soporte técnico continuo ni resolución de incidencias fuera de las sesiones acordadas, ni la emisión de certificados o titulaciones oficiales. Si el equipo necesita soporte permanente además de la formación, es algo que se plantea aparte.',
    faq: [
      { q: '¿La formación es genérica sobre IA o se adapta a mi empresa?', a: 'Se adapta a las herramientas y procesos concretos de la empresa. No es una charla genérica sobre inteligencia artificial, sino trabajo práctico sobre lo que el equipo va a usar realmente en su puesto.' },
      { q: '¿Se puede formar solo a una parte del equipo?', a: 'Sí. La formación se diseña según quién va a usar cada herramienta, así que puede ser para todo el equipo, para un departamento concreto o incluso para una sola persona que luego forme al resto.' },
      { q: '¿La formación va separada de la implementación de herramientas o automatizaciones?', a: 'Puede ir separada o combinada. Si la herramienta ya está implementada, la formación se centra en que el equipo la use bien; si se está implementando algo nuevo, tiene sentido incluir la formación como parte final de ese proceso.' },
    ],
    seoTitle: 'Formación en IA y Transformación Digital para Empresas',
    seoDescription: 'Formación práctica en IA y transformación digital para empresas: que el equipo use de verdad las herramientas y automatizaciones ya implementadas.',
  },
  {
    slug: 'automatizaciones',
    n: '07',
    title: 'Automatizaciones',
    category: 'ia',
    shortDescription: 'Automatización de procesos y eliminación de tareas repetitivas.',
    h1: 'Automatiza procesos y recupera horas de trabajo manual',
    intro:
      'La automatización de procesos consiste en conectar las herramientas que ya usas —CRM, correo, hojas de cálculo, WhatsApp, facturación— para que las tareas repetitivas se ejecuten solas, sin que nadie tenga que copiar datos de un sitio a otro a mano. Se apoya en plataformas de automatización como n8n y, cuando aporta valor real, en IA para tareas que antes exigían criterio humano, como clasificar un correo o extraer datos de un documento. La tecnología es el medio: el objetivo es quitarte de encima el trabajo mecánico que te resta tiempo para lo que de verdad mueve el negocio.',
    valueProp:
      'La automatización de procesos con IA sirve para eliminar las tareas manuales y repetitivas que consumen horas cada semana sin aportar valor añadido: introducir datos a mano, mover información entre aplicaciones, enviar los mismos correos o responder las mismas preguntas una y otra vez. Está pensada para negocios y equipos pequeños que ya usan varias herramientas digitales pero las tienen desconectadas entre sí, obligando a alguien a hacer de puente manualmente entre ellas. El resultado directo es menos horas perdidas en trabajo mecánico y menos errores por transcripción manual, no una cifra de ahorro concreta, que depende de cada proceso.',
    benefits: [
      { title: 'Menos trabajo manual', body: 'Las tareas repetitivas —copiar datos, enviar correos, actualizar hojas de cálculo— pasan a ejecutarse solas entre las herramientas que ya usas.' },
      { title: 'Sistemas conectados', body: 'Tu CRM, correo, facturación o WhatsApp dejan de funcionar como islas separadas y empiezan a compartir información automáticamente.' },
      { title: 'Menos errores humanos', body: 'Al eliminar la transcripción manual de datos entre sistemas se reduce el margen de error habitual en procesos repetidos a mano.' },
    ],
    forYouIf: [
      'Tu equipo dedica horas cada semana a copiar datos entre el CRM, el correo y las hojas de cálculo.',
      'Repites el mismo proceso manual —enviar un email, generar un documento, actualizar un estado— cada vez que entra un cliente o un pedido nuevo.',
      'Usas varias herramientas digitales pero no hablan entre sí, así que alguien tiene que hacer de puente a mano.',
      'Se te escapan seguimientos, avisos o respuestas porque dependen de que una persona se acuerde de hacerlos a tiempo.',
    ],
    process: [
      { title: 'Mapeo del proceso', body: 'Analizamos paso a paso cómo funciona hoy la tarea o el flujo que quieres automatizar, incluyendo las herramientas que intervienen y las excepciones que se salen de lo habitual.' },
      { title: 'Diseño del flujo', body: 'Definimos qué partes del proceso se pueden automatizar por completo, cuáles necesitan IA para tomar pequeñas decisiones y cuáles deben seguir pasando por una persona.' },
      { title: 'Implementación y conexión', body: 'Construimos la automatización con la herramienta más adecuada al caso, habitualmente n8n, y la conectamos con los sistemas que ya usa el negocio.' },
      { title: 'Prueba y ajuste', body: 'Ponemos el flujo a funcionar con casos reales, revisamos los resultados y ajustamos la lógica antes de darlo por cerrado.' },
    ],
    pricingNote:
      'El coste de una automatización depende del número de sistemas a conectar, de la complejidad del flujo y de si requiere lógica de IA para tomar decisiones o solo mover datos entre herramientas. Aquí no se da un precio cerrado porque cada proceso es distinto: el alcance y el presupuesto se concretan en la llamada de diagnóstico inicial, una vez visto qué herramientas usa el negocio y qué tarea concreta se quiere automatizar.',
    whatWeNeed:
      'Para empezar hace falta acceso a las herramientas que van a formar parte del flujo —por ejemplo CRM, correo, hoja de cálculo o plataforma de facturación— y una persona de contacto que conozca cómo funciona el proceso actual en la práctica, más allá de cómo debería funcionar sobre el papel. También ayuda tener identificados los casos límite o excepciones habituales del proceso, porque suelen ser la parte que más tiempo lleva automatizar bien.',
    whatsNotIncluded:
      'Este servicio no incluye el desarrollo de software a medida desde cero ni la sustitución completa de sistemas existentes como un CRM o un ERP: trabaja conectando y automatizando lo que ya tienes. Tampoco incluye mantenimiento indefinido una vez entregado el flujo salvo que se acuerde expresamente; si una herramienta externa cambia su API o sus condiciones, puede requerir un ajuste posterior. Para necesidades de desarrollo de producto o de presencia web hay otros servicios dentro de la misma consultoría.',
    faq: [
      { q: '¿Necesito saber programar para mantener la automatización?', a: 'No. Las automatizaciones se documentan y se explican para que cualquier persona del equipo entienda qué hace cada paso; para un ajuste puntual no hace falta conocimiento técnico previo, aunque cambios más profundos conviene hacerlos con soporte.' },
      { q: '¿Qué pasa si la herramienta que uso (CRM, ERP, etc.) no es compatible?', a: 'La mayoría de herramientas con uso extendido tienen alguna vía de conexión, ya sea integración directa, API o incluso automatización a través del navegador. Se revisa caso por caso en la fase de diagnóstico antes de comprometer nada.' },
      { q: '¿La automatización sustituye a las personas que hacen esa tarea ahora?', a: 'El planteamiento habitual no es sustituir personas, sino quitarles la parte mecánica y repetitiva del trabajo para que dediquen su tiempo a lo que sí requiere criterio o atención al cliente. Cada caso se valora según lo que tenga sentido para ese negocio.' },
    ],
    seoTitle: 'Automatización de procesos con IA para tu empresa',
    seoDescription: 'Automatización de procesos con IA para eliminar tareas repetitivas: conectamos tus herramientas (n8n) y reducimos el trabajo manual del día a día.',
  },
  {
    slug: 'diseno-branding',
    n: '08',
    title: 'Diseño y Branding',
    category: 'marketing',
    shortDescription: 'Identidad visual, diseño y sistemas de marca.',
    h1: 'Identidad de marca coherente en cada punto de contacto',
    intro:
      'Muchas empresas tienen un logo, pero no una marca: cada documento, cada red social y cada presentación comercial se ve distinta, como si fueran negocios distintos. Este servicio construye un sistema de marca completo (identidad visual, tipografías, colores, tono y plantillas de uso) para que la empresa se reconozca igual en cualquier sitio donde aparezca. No es un ejercicio estético aislado: es la base sobre la que se apoyan después la web, el marketing y los materiales comerciales.',
    valueProp:
      'El diseño y branding para empresas consiste en crear un sistema de identidad visual coherente (logo, paleta de color, tipografía, tono de comunicación y reglas de uso) que se aplique de forma consistente en la web, las redes sociales, la documentación comercial y cualquier material de la empresa. Está pensado para negocios que ya funcionan pero cuya imagen no transmite lo que realmente son, o que han crecido y empiezan a necesitar coherencia entre distintos equipos, canales y proveedores externos. El resultado no es solo estético: una marca coherente reduce fricción a la hora de vender porque transmite más confianza, facilita el trabajo a quien produce contenido o materiales nuevos, y evita tener que rediseñar todo cada vez que se abre un canal.',
    benefits: [
      { title: 'Coherencia real', body: 'Un mismo sistema de marca funciona igual en la web, las redes, las propuestas comerciales y la papelería, sin que cada pieza dependa de quién la haya hecho.' },
      { title: 'Base reutilizable', body: 'Plantillas y una guía de uso claras para que el equipo o cualquier proveedor externo pueda producir materiales nuevos sin perder consistencia.' },
      { title: 'Decisiones justificadas', body: 'Cada elemento de la identidad responde a un motivo de negocio, no a una preferencia estética, así que se puede defender ante clientes, socios o inversores.' },
    ],
    forYouIf: [
      'Tu empresa tiene logo, pero cada documento, red social o presentación usa colores, tipografías o tono distintos.',
      'Has crecido o cambiado de enfoque y tu imagen actual ya no representa lo que ofreces hoy.',
      'Dependes de que una persona concreta "sepa cómo se hacen las cosas" porque no existe ninguna guía de marca escrita.',
      'Vas a lanzar una web, una campaña o abrir un canal nuevo y no quieres improvisar la imagen sobre la marcha.',
    ],
    process: [
      { title: 'Diagnóstico de marca', body: 'Se revisa qué existe hoy (logo, materiales, web, redes) y se detecta dónde se rompe la coherencia y por qué.' },
      { title: 'Definición del sistema', body: 'Se define la identidad visual (logo, color, tipografía) y el tono de comunicación en función del negocio y de a quién se dirige.' },
      { title: 'Aplicación a soportes reales', body: 'El sistema se aplica a los soportes que realmente usa la empresa (web, redes, documentación comercial, papelería), no a maquetas genéricas.' },
      { title: 'Entrega y guía de uso', body: 'Se entrega un manual de marca claro para que el equipo o cualquier proveedor pueda aplicarlo de forma autónoma en el futuro.' },
    ],
    pricingNote:
      'El coste de un proyecto de diseño y branding depende del alcance: no es lo mismo definir una identidad desde cero que rediseñar un sistema existente, y no es lo mismo cubrir logo y paleta que extender la marca a decenas de soportes distintos. Por eso no hay una tarifa cerrada publicada: en la llamada de diagnóstico gratuita se revisa qué existe, qué falta y qué tiene sentido para el tamaño y el momento del negocio, y a partir de ahí se plantea un presupuesto ajustado a ese alcance concreto.',
    whatWeNeed:
      'Para arrancar hace falta acceso a lo que ya existe: el logo actual (si lo hay), materiales previos, accesos a redes sociales y web, y cualquier documento de marca anterior aunque esté desactualizado. También conviene tener disponible en las fases de revisión a la persona del negocio que toma la decisión final sobre la identidad, para no alargar el proceso con validaciones cruzadas entre varias personas.',
    whatsNotIncluded:
      'Este servicio cubre la identidad visual y el sistema de marca: no incluye la construcción de la web (aunque el sistema se diseña pensando en que se aplique ahí), ni la gestión continua de redes sociales, ni la impresión física de materiales. Tampoco es un servicio de naming legal ni de registro de marca ante la OEPM. Si el negocio necesita web, automatización o presencia digital sobre esta base, son servicios complementarios que se plantean por separado.',
    faq: [
      { q: '¿Diseño y branding es lo mismo que hacer un logo?', a: 'No. Un logo es un elemento dentro del sistema de marca. El branding incluye también la paleta de color, la tipografía, el tono de comunicación y las reglas de uso para que todo eso se aplique igual en cualquier soporte.' },
      { q: '¿Sirve si ya tengo un logo y no quiero cambiarlo?', a: 'Sí. En muchos casos el logo se mantiene y el trabajo consiste en construir alrededor de él el resto del sistema (color, tipografía, tono, plantillas), que es lo que suele faltar.' },
      { q: '¿Cuánto tarda un proyecto de este tipo?', a: 'Depende del alcance: definir una identidad básica lleva menos tiempo que extenderla a todos los soportes de una empresa con varios canales activos. El plazo se concreta en la llamada de diagnóstico, no antes.' },
    ],
    seoTitle: 'Diseño y Branding para Empresas | Jaime Bernáldez',
    seoDescription: 'Diseño y branding para empresas: identidad visual y sistemas de marca coherentes que funcionan en tu web, redes y materiales comerciales.',
  },
  {
    slug: 'crm-erp',
    n: '09',
    title: 'CRM y ERP',
    category: 'desarrollo',
    shortDescription: 'Implementación, integración y optimización de sistemas de gestión.',
    h1: 'El CRM y ERP que tu equipo termina usando',
    intro:
      'Un CRM ordena cómo tu equipo capta, sigue y cierra clientes; un ERP ordena cómo tu negocio gestiona pedidos, stock, facturación y finanzas por dentro. Esta página cubre ambos porque en una pyme casi nunca se abordan por separado: el mismo diagnóstico que detecta fugas comerciales suele detectar fugas operativas. Seleccionamos, configuramos e integramos el sistema —o los dos— que encajan con cómo trabaja tu negocio hoy, no con una plantilla genérica de manual.',
    valueProp:
      'Implementar un CRM o un ERP en una pyme consiste en elegir la herramienta adecuada al volumen y al proceso reales del negocio, configurarla para que refleje cómo se trabaja de verdad, y conectarla con las demás herramientas (facturación, web, WhatsApp, email) para que los datos no vivan duplicados en tres sitios. Tiene sentido para negocios donde la información de clientes o de operaciones está repartida entre Excel, WhatsApp, la cabeza del dueño y algún papel, y eso ya está costando ventas perdidas, errores de stock o tiempo administrativo que nadie factura. El resultado no es "tener un CRM" o "tener un ERP": es que el equipo comercial sepa en qué punto está cada cliente sin preguntar, y que el equipo operativo sepa qué hay en stock, qué se ha facturado y qué falta por cobrar sin abrir cinco archivos distintos.',
    benefits: [
      { title: 'Menos trabajo duplicado', body: 'Los datos de cliente, pedido y factura viven en un solo sitio en lugar de repetirse a mano en Excel, WhatsApp y el programa de facturación.' },
      { title: 'Decisiones con datos reales', body: 'Saber qué cliente está a punto de perderse, qué producto se agota o qué factura lleva semanas sin cobrar deja de depender de la memoria de alguien.' },
      { title: 'Un sistema que se usa de verdad', body: 'Se configura sobre el proceso que tu negocio ya sigue, no al revés, para que el equipo lo adopte en lugar de abandonarlo a los pocos meses.' },
    ],
    forYouIf: [
      'Tu equipo comercial lleva el seguimiento de clientes en la cabeza, en un cuaderno o en chats de WhatsApp que nadie más puede consultar.',
      'Cada persona de administración, ventas o almacén usa su propio Excel y nadie tiene la misma cifra de stock o de facturación pendiente.',
      'Ya probasteis un CRM o un ERP antes, pero el equipo dejó de usarlo a los pocos meses porque no encajaba con cómo trabajáis realmente.',
      'Cuando un cliente pregunta por el estado de su pedido o presupuesto, alguien tiene que buscar la respuesta en tres sitios distintos.',
    ],
    process: [
      { title: 'Diagnóstico del proceso real', body: 'Mapeamos cómo se mueve hoy la información comercial y operativa dentro del negocio, con sus atascos y duplicidades concretas.' },
      { title: 'Selección del sistema', body: 'Elegimos el CRM, el ERP o la combinación de ambos que encaja con el tamaño, el presupuesto y el sector del negocio, sin sobredimensionar.' },
      { title: 'Configuración e integración', body: 'Adaptamos el sistema al proceso real del cliente y lo conectamos con la facturación, la web, el email o WhatsApp para que los datos no se dupliquen.' },
      { title: 'Puesta en marcha y adopción', body: 'Acompañamos al equipo durante las primeras semanas de uso para resolver la resistencia al cambio antes de que se convierta en abandono.' },
    ],
    pricingNote:
      'El coste de implementar un CRM o un ERP varía mucho según el número de usuarios, el sistema elegido (hay opciones desde gratuitas hasta licencias de pago por usuario), cuántas integraciones hace falta construir y cuánta configuración a medida requiere el proceso del negocio. Dar aquí una cifra cerrada sería inventar un dato que no depende de mí sino del alcance real de cada caso. Por eso el presupuesto se define después de la llamada de diagnóstico inicial, sin coste, en la que se revisa el proceso actual y se acota qué hace falta implementar exactamente.',
    whatWeNeed:
      'Para arrancar hace falta acceso —o la disposición a crearlo— a las herramientas que ya usa el negocio: el Excel o CRM actual si existe, el programa de facturación, el catálogo de productos o servicios, y una persona de referencia en el equipo que conozca el proceso comercial u operativo del día a día. Si hay datos históricos de clientes, pedidos o stock que haya que migrar, conviene tenerlos localizados desde el principio, aunque no estén limpios ni ordenados.',
    whatsNotIncluded:
      'Esta implementación no incluye el desarrollo de software a medida desde cero: se trabaja sobre plataformas de CRM y ERP ya existentes en el mercado, configuradas e integradas para el caso concreto del cliente. Tampoco incluye la gestión contable o fiscal en sí misma —eso corresponde a la gestoría o asesoría del negocio— ni el mantenimiento indefinido del sistema una vez implementado, que se acuerda aparte si el cliente lo necesita. Cuando el negocio necesita automatizaciones adicionales entre el CRM o el ERP y otras herramientas de marketing o atención al cliente, eso se cubre como un servicio complementario.',
    faq: [
      { q: '¿Es mejor empezar por el CRM o por el ERP?', a: 'Depende de dónde esté el problema más urgente. Si las ventas se pierden por falta de seguimiento comercial, se empieza por el CRM; si el caos está en pedidos, stock o facturación, se empieza por el ERP. Muchas pymes acaban necesitando los dos, pero no hace falta implementarlos a la vez: se puede empezar por el que resuelve el dolor más caro ahora mismo.' },
      { q: '¿Tengo que cambiar el sistema de facturación o las herramientas que ya uso?', a: 'No necesariamente. Parte del trabajo de integración consiste precisamente en conectar el CRM o el ERP con lo que el negocio ya utiliza (facturación, web, WhatsApp, email) siempre que sea técnicamente viable, en vez de obligar a sustituirlo todo de golpe.' },
      { q: '¿Qué pasa si el equipo se resiste a usar el nuevo sistema?', a: 'Es el motivo más habitual por el que una implementación de CRM o ERP fracasa. Por eso la configuración se hace sobre el proceso real del equipo en vez de imponer un flujo genérico, y el acompañamiento durante la puesta en marcha forma parte del servicio, no es un extra aparte.' },
    ],
    seoTitle: 'Implementación de CRM y ERP para Pymes | Jaime Bernáldez',
    seoDescription: 'Implementación de CRM y ERP para pymes: elegimos, configuramos e integramos el sistema de gestión adecuado a tu negocio, sin plantillas genéricas.',
  },
  {
    slug: 'desarrollo-apps',
    n: '10',
    title: 'Desarrollo de Apps a Medida',
    category: 'desarrollo',
    shortDescription: 'Aplicaciones y software adaptados a necesidades concretas del negocio.',
    h1: 'Software a medida cuando lo genérico no encaja',
    intro:
      'Cuando un proceso de negocio no cabe en ninguna herramienta que se vende ya hecha, la alternativa es construir la pieza que falta. El desarrollo de aplicaciones a medida parte de cómo trabaja realmente tu equipo —no de una plantilla— y construye solo lo que necesitas, sin funciones de más que nunca vas a usar. El resultado es una herramienta que encaja con tu operativa, en lugar de obligarte a adaptar tu operativa a ella.',
    valueProp:
      'Un desarrollo a medida es una aplicación o sistema construido específicamente para un proceso de tu negocio, en lugar de un software genérico que intentas encajar a la fuerza. Tiene sentido cuando ya has probado herramientas estándar —hojas de cálculo, SaaS genéricos, ERPs poco flexibles— y ninguna cubre cómo funciona realmente tu operativa, o cuando pagas licencias con funciones que no usas mientras faltan justo las que necesitas. El objetivo no es tener "una app" por tener tecnología, sino resolver un cuello de botella concreto —gestión de pedidos, control de stock, un flujo interno entre departamentos— con una herramienta que se ajusta a ese proceso, y no al revés.',
    benefits: [
      { title: 'Encaja con tu proceso', body: 'Se diseña alrededor de cómo trabaja tu equipo hoy, así que no tienes que torcer tu operativa para que quepa en un software genérico.' },
      { title: 'Sin funciones de sobra', body: 'Se construye exactamente lo que el negocio necesita, sin módulos ni pantallas que nunca se van a usar.' },
      { title: 'El código es tuyo', body: 'No dependes de una licencia externa que puede subir de precio, limitar usuarios o desaparecer si el proveedor cambia de rumbo.' },
    ],
    forYouIf: [
      'Gestionas un proceso clave en hojas de Excel que se te han quedado pequeñas y que solo tú sabes mantener en pie.',
      'Pagas varias licencias de software que no se hablan entre sí y acabas copiando el mismo dato a mano de una a otra.',
      'Un SaaS genérico te obliga a adaptar tu forma de trabajar a sus casillas y sus límites, en lugar de al revés.',
      'Un proceso interno —pedidos, reservas, inventario, seguimiento de clientes— depende de la memoria de una persona concreta y no de un sistema.',
    ],
    process: [
      { title: 'Diagnóstico del proceso', body: 'Se analiza cómo funciona hoy el proceso que quieres resolver, qué herramientas usas actualmente y dónde se pierde tiempo o se generan errores.' },
      { title: 'Definición del alcance', body: 'Se acota qué construir primero —la funcionalidad mínima que resuelve el problema real— para no alargar el desarrollo con extras que aún no hacen falta.' },
      { title: 'Desarrollo por fases', body: 'Se construye en entregas visibles y revisables, para poder probar y ajustar sobre la marcha en lugar de esperar a un único lanzamiento final.' },
      { title: 'Entrega y traspaso', body: 'Se entrega el software en funcionamiento junto con la documentación y los accesos necesarios para que el equipo lo use de forma autónoma.' },
    ],
    pricingNote:
      'El coste de un desarrollo a medida depende directamente de su alcance: no es el mismo trabajo automatizar un formulario interno que construir una aplicación con varios módulos y usuarios. Por eso no hay una tarifa cerrada de partida —cualquier cifra dada sin conocer el proceso real sería una estimación al aire, no un presupuesto serio—. El alcance, el tiempo estimado y el coste se concretan en una llamada de diagnóstico inicial sin coste, una vez queda claro qué hay que construir exactamente.',
    whatWeNeed:
      'Para arrancar un desarrollo a medida hace falta, sobre todo, acceso a cómo funciona el proceso real: alguien del equipo que lo conozca de primera mano y pueda explicar los pasos, las excepciones y esos casos raros que no aparecen en ningún manual. Ayuda mucho tener a mano ejemplos concretos de lo que se gestiona hoy —esa hoja de cálculo, ese formulario, esos correos— y acceso a las herramientas o bases de datos actuales si el nuevo sistema tiene que convivir con ellas o sustituirlas. Contar con un único punto de contacto con capacidad de decisión agiliza el proceso, sobre todo a la hora de validar cada fase del desarrollo.',
    whatsNotIncluded:
      'Un desarrollo a medida no incluye el alojamiento (hosting), los dominios ni las licencias de terceros que la aplicación pueda necesitar para funcionar: esos costes son del cliente y se explican de antemano, no aparecen después como sorpresa. Tampoco cubre el mantenimiento indefinido ni la incorporación continua de funciones nuevas una vez entregado el sistema —eso se plantea aparte, como una mejora o un acuerdo de mantenimiento si el negocio lo necesita—. Y si el problema puede resolverse conectando o ajustando herramientas que ya existen, sin programar nada desde cero, tiene más sentido explorar antes esa vía, más cercana a una automatización de procesos que a un desarrollo a medida.',
    faq: [
      { q: '¿Cuánto tiempo lleva desarrollar una aplicación a medida?', a: 'Depende por completo del alcance: no es el mismo trabajo automatizar un proceso puntual que construir un sistema con varios módulos y usuarios. El plazo se estima en el diagnóstico inicial, una vez está claro qué hay que construir, y no antes.' },
      { q: '¿Necesito llegar con los requisitos ya definidos?', a: 'No hace falta un documento cerrado. Es más útil que expliques el problema y cómo trabajas hoy: analizar ese proceso es parte del servicio, y de ahí sale el alcance real de lo que conviene construir.' },
      { q: '¿Qué pasa si más adelante quiero añadir funciones nuevas?', a: 'El software es tuyo y se construye pensado para poder ampliarse. Añadir funciones más adelante es posible y se plantea como un desarrollo adicional cuando llegue el momento, no como algo incluido de forma indefinida en el proyecto inicial.' },
    ],
    seoTitle: 'Desarrollo de Aplicaciones a Medida | Jaime Bernáldez',
    seoDescription: 'Desarrollo de aplicaciones a medida para negocios cuyo proceso no encaja en software genérico. Se analiza primero, se programa después.',
  },
  {
    slug: 'estrategia-digital',
    n: '11',
    title: 'Estrategia Digital',
    category: 'estrategia',
    shortDescription: 'Diagnóstico, estrategia y priorización de acciones digitales.',
    h1: 'Diagnóstico y hoja de ruta digital para tu empresa',
    intro:
      'Antes de invertir en una web nueva, un CRM o una campaña de anuncios, conviene tener claro qué problema se está resolviendo y en qué orden conviene hacerlo. Este servicio consiste en analizar el negocio, identificar dónde se pierde tiempo, dinero o clientes, y construir una hoja de ruta realista de qué implementar primero, qué puede esperar y qué directamente no hace falta. El resultado es un documento de trabajo con criterio propio, no una lista de herramientas de moda.',
    valueProp:
      'La consultoría de estrategia digital consiste en analizar la situación digital real de una empresa —web, presencia online, herramientas, procesos internos— y definir qué acciones tiene sentido implementar y en qué orden. Está pensada para negocios que necesitan tomar decisiones de inversión en digital, automatización o inteligencia artificial pero no cuentan dentro del equipo con el criterio técnico para evaluar qué merece la pena y qué es ruido. El resultado es una hoja de ruta priorizada, con las razones detrás de cada decisión, no un listado de herramientas o proveedores recomendados sin justificar.',
    benefits: [
      { title: 'Visión de conjunto', body: 'Se analiza el negocio completo —no solo la web o el marketing— para localizar los cuellos de botella reales antes de proponer ninguna solución.' },
      { title: 'Prioridades, no listas', body: 'En vez de un listado interminable de mejoras posibles, se entrega un orden concreto de qué abordar primero según impacto y esfuerzo.' },
      { title: 'Sin conflicto de interés', body: 'El diagnóstico no está condicionado por vender después una tecnología concreta: si la conclusión es no hacer nada por ahora, se dice así.' },
    ],
    forYouIf: [
      'Has ido sumando webs, herramientas o automatizaciones sueltas y ya no tienes claro si encajan entre sí o se pisan unas a otras.',
      'Te llegan presupuestos para una web nueva, un CRM o una campaña con IA y no sabes si eso es lo prioritario ahora mismo.',
      'Notas que algo digital falla en el negocio —captación, gestión de clientes, tiempo perdido en tareas repetitivas— pero no sabes por dónde empezar.',
      'Quieres invertir en digital o en IA este año, pero prefieres tener un plan antes que ir contratando por separado según va surgiendo cada necesidad.',
    ],
    process: [
      { title: 'Diagnóstico inicial', body: 'Se revisa el negocio, sus procesos y su presencia digital actual para ver dónde se pierde tiempo, dinero o clientes.' },
      { title: 'Análisis de opciones', body: 'Se valoran las soluciones digitales, de automatización o de IA que tendrían sentido para ese negocio en concreto, sin partir de una tecnología predefinida.' },
      { title: 'Hoja de ruta priorizada', body: 'Se ordenan las acciones por impacto y esfuerzo, distinguiendo lo urgente de lo que puede esperar o de lo que directamente no hace falta.' },
      { title: 'Entrega y siguientes pasos', body: 'Se presenta el diagnóstico y la hoja de ruta, dejando claro qué se puede ejecutar con el equipo interno y qué requeriría ayuda externa.' },
    ],
    pricingNote:
      'El precio de este servicio depende del tamaño del negocio y de la profundidad del diagnóstico que necesite, así que no se fija una cifra cerrada de antemano. Se concreta en la llamada de diagnóstico inicial, una vez se conoce el punto de partida real de la empresa.',
    whatWeNeed:
      'Para arrancar hace falta acceso a la información básica del negocio: qué herramientas se usan hoy (web, CRM, redes, gestión), qué procesos son manuales, y disponibilidad de alguien del equipo —normalmente quien toma las decisiones— para una o varias conversaciones donde explicar cómo funciona el negocio por dentro. Cuanta más transparencia haya sobre lo que no funciona, más útil resulta el diagnóstico.',
    whatsNotIncluded:
      'Este servicio entrega el diagnóstico y la hoja de ruta, no la ejecución de cada acción. Si la hoja de ruta incluye, por ejemplo, montar una automatización o rediseñar una web, esa implementación se contrata aparte, con este consultor o con quien la empresa prefiera. Tampoco sustituye a un plan de negocio completo: se centra en la parte digital, tecnológica y de automatización, no en la estrategia comercial o financiera general.',
    faq: [
      { q: '¿Este servicio incluye ya la implementación de lo que se proponga?', a: 'No. El resultado es el diagnóstico y la hoja de ruta priorizada. La implementación de cada acción —una web, una automatización, una campaña— se aborda después, como proyecto aparte.' },
      { q: '¿Sirve si mi empresa todavía no tiene nada digital montado?', a: 'Sí. De hecho es habitual empezar precisamente aquí, para no invertir a ciegas en la primera herramienta o proveedor que aparece, sino tener claro qué necesita el negocio antes de gastar en ello.' },
      { q: '¿Y si el diagnóstico concluye que no hace falta hacer nada por ahora?', a: 'Puede pasar, y se dice igual. El objetivo es un criterio honesto sobre qué tiene sentido para el negocio en este momento, no justificar un proyecto que no aporta valor real.' },
    ],
    seoTitle: 'Consultoría de estrategia digital para empresas',
    seoDescription: 'Diagnóstico, hoja de ruta y priorización de acciones digitales: qué hacer primero en tu empresa, con criterio, sin vender tecnología porque sí.',
  },
  {
    slug: 'videos-ia',
    n: '12',
    title: 'Producción de Vídeos y Spots con Inteligencia Artificial',
    category: 'marketing',
    shortDescription:
      'Producción audiovisual profesional asistida por IA: spots, creatividades para Meta Ads, Reels y Shorts, vídeos de producto, avatares virtuales y adaptación multiformato.',
    h1: 'Producción audiovisual profesional asistida por inteligencia artificial',
    intro:
      'Esto es un servicio de producción audiovisual y publicitaria, con la IA como motor de velocidad y volumen — no una fábrica de vídeos genéricos. Combino motores de generación de vídeo e imagen (Runway, Kling, Veo) con dirección creativa humana para producir spots, creatividades para Meta Ads, TikTok y Shorts, vídeos de producto y contenido en varios idiomas sin repetir cada rodaje desde cero. La IA se usa donde aporta velocidad y volumen —variantes, formatos, fondos, presentadores virtuales— y la dirección humana entra donde el resultado tiene que ser perfecto: guion, ritmo, marca y validación final.',
    valueProp:
      'Detrás de este servicio hay criterio de estudio creativo y publicitario, no solo acceso a herramientas de IA: la tecnología acelera la producción, pero el guion, la dirección de arte y la validación de marca siguen siendo trabajo humano. Está pensado para negocios que necesitan volumen de creatividades para Meta Ads, TikTok Ads, Reels o Shorts —o vídeo de producto y explicativos— pero no tienen presupuesto para rodar cada variante con equipo completo. Aporta valor donde de verdad importa: acelera el ciclo de test de mensajes y ganchos para campañas de performance, permite adaptar una pieza maestra a decenas de formatos sin recrearla desde cero, y localiza un mismo vídeo explicativo a varios idiomas sin volver a grabar — dejando la pieza hero, la marca y el guion final siempre en manos de dirección creativa humana.',
    benefits: [
      { title: 'Volumen sin perder control', body: 'La IA genera variantes de formato, fondo y mensaje a escala, mientras la dirección humana revisa y valida cada pieza antes de publicarse.' },
      { title: 'Ciclos de test más rápidos', body: 'Pruebas más ganchos y mensajes para campañas de performance en el tiempo que antes llevaba producir una sola variante.' },
      { title: 'Multiidioma sin regrabar', body: 'Con avatares virtuales, un mismo vídeo explicativo o de formación se localiza a varios idiomas sin convocar de nuevo un rodaje.' },
    ],
    forYouIf: [
      'Necesitas decenas de creatividades para Meta Ads, TikTok o Shorts y no puedes rodar una sesión distinta para cada variante.',
      'Tienes fotos reales de producto pero cada campaña estacional implica organizar una sesión fotográfica nueva.',
      'Quieres validar un concepto publicitario con storyboard y previsualización antes de comprometer presupuesto de producción.',
      'Inviertes en campañas de performance pero testas pocos mensajes porque cada variante de vídeo cuesta tiempo y producción.',
    ],
    process: [
      { title: 'Diagnóstico y guion', body: 'Analizamos qué piezas necesitas —spot, UGC, producto, explicativo— y definimos guion, mensaje y dirección de arte antes de generar nada.' },
      { title: 'Storyboard y exploración con IA', body: 'Usamos IA para explorar estilo visual y planos posibles; el boarding final lo valida una persona antes de pasar a producción.' },
      { title: 'Producción combinada', body: 'Generamos con IA lo que puede escalar —variantes, fondos, avatares, formatos— y reservamos rodaje o retoque humano para lo que tiene que ser perfecto.' },
      { title: 'Adaptación y entrega multiformato', body: 'A partir de la pieza maestra entregamos las variantes de formato y proporción —feed, stories, reels, banners— listas para cada plataforma.' },
    ],
    pricingNote:
      'El coste de un proyecto de vídeo con inteligencia artificial depende de variables muy distintas: número de piezas necesarias, si hay rodaje o fotografía real de por medio, cuántos formatos e idiomas hay que entregar, y el nivel de dirección de arte que exige la marca. No manejo una tarifa cerrada de catálogo porque el alcance cambia mucho de un proyecto a otro; el presupuesto se define después de valorar contigo qué necesitas exactamente, no antes.',
    whatWeNeed:
      'Para arrancar necesito acceso a los assets que ya existan: fotos reales de producto, vídeos o imágenes de marca, guía o manual de marca si lo hay, y ejemplos o referencias que te gusten. También es importante tener claro el mensaje o gancho que quieres testar, el objetivo de cada pieza (Meta Ads, TikTok, web, formación interna) y una persona de contacto que pueda validar guion y boarding antes de pasar a producción.',
    whatsNotIncluded:
      'Este servicio no incluye un spot hero generado íntegramente por IA sin ningún rodaje o retoque humano cuando el detalle de marca es crítico: para esas piezas la dirección humana y, si hace falta, fotografía o rodaje real siguen siendo necesarios. Tampoco genera un anuncio completo a partir de una idea en un único paso sin dirección creativa, ni vídeos largos (más de 30-60 segundos) con varios personajes interactuando de forma coherente escena a escena, algo que la tecnología actual todavía no resuelve con garantías. El contenido UGC asistido por IA se comunica siempre como tal, nunca como indistinguible de un creador real.',
    faq: [
      { q: '¿Los vídeos se generan 100% con IA, sin ningún rodaje?', a: 'No. La IA se usa para lo que necesita existir en volumen —variantes, formatos, fondos, presentadores virtuales— pero el guion, la dirección creativa y la validación final son humanos, y cuando la pieza lo exige (un spot hero, un producto donde el detalle de marca es crítico) se combina con rodaje o fotografía real.' },
      { q: '¿Se nota que el contenido UGC está hecho con IA?', a: 'Se comunica siempre como contenido asistido por IA, no como un creador real; el objetivo no es hacerlo pasar por auténtico sino acelerar el testeo de mensajes y ganchos en Meta Ads y TikTok Ads antes de invertir en producción a mayor escala.' },
      { q: '¿Puedo tener presentadores en varios idiomas sin volver a grabar?', a: 'Sí, es uno de los usos donde la IA está más madura: con avatares virtuales se localiza un mismo vídeo explicativo o de formación a varios idiomas sin convocar de nuevo a un presentador, aunque funciona mejor en clips cortos con guion ajustado que en planos largos.' },
    ],
    seoTitle: 'Vídeos Publicitarios con Inteligencia Artificial',
    seoDescription: 'Producción de vídeos publicitarios con inteligencia artificial: spots, UGC, avatares virtuales y adaptación multiformato con dirección creativa humana.',
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(current: ServiceDetail, count = 3): ServiceDetail[] {
  const sameCategory = SERVICES.filter((s) => s.slug !== current.slug && s.category === current.category);
  const others = SERVICES.filter((s) => s.slug !== current.slug && s.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}
