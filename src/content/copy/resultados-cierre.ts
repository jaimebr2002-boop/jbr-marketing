// `category` groups these for the /faq page's accordion-by-category layout;
// `home` flags the small curated subset shown on the Home page (everything
// still lives here once, so Home and /faq never drift out of sync).
export const faq = [
  {
    q: '¿Qué es exactamente un consultor de IA para empresas?',
    a: 'Es un profesional que primero analiza cómo funciona tu negocio y detecta en qué puntos se pierden tiempo, dinero u oportunidades. Después decide qué tecnología aplicar, y solo si aporta un retorno claro. No vende herramientas por adelantado.',
    category: 'Consultoría e IA',
    home: true,
  },
  {
    q: '¿En qué se diferencia de una agencia de automatizaciones o de marketing?',
    a: 'Una agencia suele partir de un servicio fijo y te lo adapta. Aquí primero se analiza tu negocio para encontrar dónde pierdes oportunidades, y la solución se decide después — puede incluir IA, automatización, desarrollo y marketing, o solo una parte.',
    category: 'Consultoría e IA',
    home: true,
  },
  {
    q: '¿Qué es una "fuga" en un negocio?',
    a: 'Cualquier punto donde tu empresa pierde tiempo, dinero, clientes o leads sin que te des cuenta. Casi todos los negocios tienen varias a la vez; el primer trabajo es localizarlas y priorizarlas.',
    category: 'Proceso y diagnóstico',
    home: false,
  },
  {
    q: '¿Esto es una venta encubierta de automatizaciones o de IA?',
    a: 'No. El diagnóstico inicial no lleva compromiso de compra, y si no hay ninguna fuga que merezca la pena resolver, se te dice en la propia llamada.',
    category: 'Proceso y diagnóstico',
    home: false,
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende de qué fugas se detecten y qué solución tenga sentido — no hay tarifa única. El diagnóstico de 15 minutos es gratuito y, si después hay una propuesta, llega con un precio cerrado antes de empezar nada.',
    category: 'Precios',
    home: true,
  },
  {
    q: '¿Cuánto tiempo tarda en verse resultados?',
    a: 'El análisis con las fugas detectadas y prioridades llega en 48-72h tras el diagnóstico. La implementación, entre 7 y 21 días según su complejidad, y a partir de ahí se mide y se optimiza de forma continua.',
    category: 'Proceso y diagnóstico',
    home: false,
  },
  {
    q: '¿Necesito tener ya una web o un sistema montado?',
    a: 'No. El diagnóstico analiza tu negocio tal como está hoy. De hecho, muchas fugas aparecen precisamente en negocios que aún funcionan con procesos manuales o herramientas sueltas.',
    category: 'Proceso y diagnóstico',
    home: false,
  },
  {
    q: '¿Qué pasa exactamente en el diagnóstico gratuito de 15 minutos?',
    a: 'Una videollamada corta donde se revisan tus procesos actuales para localizar las fugas más evidentes. Al terminar sabrás dónde estás perdiendo tiempo o dinero y si tiene sentido seguir adelante, sin compromiso.',
    category: 'Proceso y diagnóstico',
    home: false,
  },
  {
    q: '¿Con quién hablo en la llamada de diagnóstico?',
    a: 'Conmigo, Jaime Bernáldez. No hay un equipo comercial intermedio: el diagnóstico inicial lo hago yo directamente.',
    category: 'Proceso y diagnóstico',
    home: true,
  },
  {
    q: '¿Sois una agencia de IA o una consultoría?',
    a: 'Funciono como consultoría: primero analizo y decido qué tiene sentido, no vendo un paquete de servicios cerrado desde el principio. Una vez está claro qué hace falta, sí que ejecuto ese trabajo — desarrollo, automatización, marketing o lo que corresponda — igual que haría una agencia, pero la tecnología llega después del diagnóstico, no antes.',
    category: 'Consultoría e IA',
    home: false,
  },
  {
    q: '¿Qué diferencia hay entre automatizar un proceso y usar un agente de IA?',
    a: 'Una automatización sigue reglas fijas: "si pasa X, haz Y siempre igual". Un agente de IA puede interpretar información variable, tomar pequeñas decisiones dentro de un margen definido y usar herramientas para completar una tarea, no solo repetir un paso. La mayoría de negocios necesitan automatización de procesos primero — es más barata y predecible — y solo añaden agentes de IA donde de verdad hace falta ese criterio adicional.',
    category: 'Automatización',
    home: true,
  },
  {
    q: '¿Qué puede automatizar mi empresa con IA?',
    a: 'Depende del negocio, pero lo más habitual es automatizar seguimiento de leads, respuestas y clasificación de mensajes, generación de documentos o presupuestos repetitivos, y el traspaso de datos entre herramientas que hoy se hace a mano. Se identifica en el diagnóstico, no antes — automatizar por automatizar no ahorra nada si el proceso no era realmente un problema.',
    category: 'Automatización',
    home: false,
  },
  {
    q: '¿Cómo empiezo a implementar IA en mi empresa si no sé por dónde?',
    a: 'Por un diagnóstico, no por comprar una herramienta de IA de moda. El punto de partida realista es entender qué procesos consumen más tiempo o generan más errores hoy, y valorar ahí si la IA aporta algo concreto. Empezar al revés — eligiendo la herramienta antes de saber el problema — es la forma más habitual de gastar presupuesto sin ver resultado.',
    category: 'Consultoría e IA',
    home: false,
  },
  {
    q: '¿Hacéis desarrollo web o solo consultoría de IA?',
    a: 'Ambas cosas. El desarrollo web, de apps o de automatizaciones es parte de los servicios que se ejecutan una vez el diagnóstico dice que tiene sentido — la IA no sustituye al desarrollo cuando lo que hace falta es una web o una aplicación bien construida, lo acelera en algunas partes del proceso.',
    category: 'Desarrollo y servicios',
    home: true,
  },
];

export const faqCategories = ['Consultoría e IA', 'Proceso y diagnóstico', 'Automatización', 'Desarrollo y servicios', 'Precios'];

export const ctaFinal = {
  headline: 'Hablemos 15 minutos.',
  subhead: 'Antes de decidir nada, hablamos 15 minutos y vemos si hay algo que merezca la pena resolver.',
  cta: 'Reserva tu diagnóstico gratuito',
  microcopy: 'Agenda 15 minutos. Al otro lado no hay un formulario, soy yo.',
};

export const footer = {
  microtext: 'Diagnóstico primero. Tecnología después.',
};

// Multi-page nav: an href starting with "/" is a real route (Navbar renders
// it as a react-router <Link>); anything else is an anchor into the Home
// page's own sections (Navbar smooth-scrolls there if already home, or
// navigates to "/#id" otherwise). Servicios/FAQ/Diagnóstico now have their
// own dedicated pages with real depth — Home only carries a short preview of
// each, so promoting these to real routes (not anchors into that preview) is
// what actually lets someone skip the Home scroll entirely. "Cómo trabajamos"
// stays an anchor for now since it doesn't have enough differentiated
// content to justify its own /metodologia page yet.
export const navLinks = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Diagnóstico', href: '/diagnostico' },
];
