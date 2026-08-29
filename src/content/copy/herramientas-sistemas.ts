// 13 named services, grouped into 4 categories for scanability — every service
// keeps its own visible name + description (nothing folded away) so both a
// visitor who wants "desarrollo de apps" and a crawler indexing services can
// find it directly, per the brief's explicit requirement to never bury them.
export const servicios = {
  kicker: 'SERVICIOS',
  headlinePre: 'Localizado el problema, esto es ',
  headlineEmphasis: 'con lo que lo resolvemos.',
  intro:
    'No empiezo por la tecnología, pero aquí tienes los servicios — IA y automatización, desarrollo de apps y software, marketing y captación, web y diseño — que uso para resolver lo que detecto.',
  permission:
    'No necesitas saber cuál de estos servicios necesitas. Puedes contarme qué está pasando en tu negocio y yo te ayudo a identificar por dónde empezar.',
  categorias: [
    {
      n: '01',
      title: 'IA & Automatización',
      items: [
        { n: '12', title: 'Inteligencia Artificial', body: 'Aplicación de IA a procesos, operaciones, atención, ventas y toma de decisiones.' },
        { n: '13', title: 'Agentes de IA', body: 'Agentes inteligentes capaces de ejecutar tareas, asistir equipos e interactuar con clientes.' },
        { n: '07', title: 'Automatizaciones', body: 'Automatización de procesos y eliminación de tareas repetitivas.' },
      ],
    },
    {
      n: '02',
      title: 'Desarrollo & Producto',
      items: [
        { n: '01', title: 'Desarrollo Web', body: 'Webs corporativas, landings y experiencias digitales orientadas a conversión.' },
        { n: '10', title: 'Desarrollo de Apps a medida', body: 'Aplicaciones y software adaptados a necesidades concretas del negocio.' },
        { n: '09', title: 'CRM y ERPs', body: 'Implementación, integración y optimización de sistemas de gestión.' },
      ],
    },
    {
      n: '03',
      title: 'Marketing & Captación',
      items: [
        { n: '02', title: 'Gestión de Redes Sociales', body: 'Estrategia, contenido y gestión de presencia social.' },
        { n: '03', title: 'Campañas Publicitarias', body: 'Publicidad digital y campañas orientadas a captación.' },
        { n: '04', title: 'SEO y Posicionamiento', body: 'Optimización para buscadores y crecimiento orgánico.' },
        { n: '05', title: 'GEO', body: 'Optimización de contenido y presencia digital para motores generativos y respuestas de IA.' },
      ],
    },
    {
      n: '04',
      title: 'Estrategia & Marca',
      items: [
        { n: '11', title: 'Estrategia Digital', body: 'Diagnóstico, estrategia y priorización de acciones digitales.' },
        { n: '08', title: 'Diseño y Branding', body: 'Identidad visual, diseño y sistemas de marca.' },
        { n: '06', title: 'Formación Digital', body: 'Formación para equipos y empresas en herramientas digitales e inteligencia artificial.' },
      ],
    },
  ],
  remate: 'Ninguno de estos servicios es el punto de partida. El punto de partida es tu diagnóstico.',
  ctaPrimary: 'Reserva tu diagnóstico gratuito',
  ctaSecondary: 'Solicita diagnóstico digital',
  microcopy: 'Válido también si ya sabes lo que necesitas — no es obligatorio pasar por un diagnóstico largo.',
};

export const sistemas = {
  headlinePre: 'Soluciones ya montadas para los problemas que ',
  headlineEmphasis: 'más se repiten.',
  subhead:
    'Cada sistema nace de un problema real detectado en el diagnóstico. No se instala lo que queda bien en una demo — se instala lo que tu negocio necesita, y nada más.',
  items: [
    { name: 'Radar de Leads', tag: 'sistema de captación automatizado', resuelve: 'Leads que se enfrían porque nadie los contacta a tiempo.' },
    { name: 'Cierre Asistido', tag: 'sistema comercial con IA', resuelve: 'Presupuestos enviados que nadie vuelve a tocar.' },
    { name: 'Recepción 24/7', tag: 'agente de atención al cliente', resuelve: 'Llamadas y mensajes fuera de horario que hoy se van directos a la competencia.' },
    { name: 'Mando de Control', tag: 'dashboard interno', resuelve: 'Información repartida entre Excels, WhatsApp y la memoria de una sola persona.' },
    { name: 'Motor a Medida', tag: 'aplicación a medida', resuelve: 'Procesos que sólo funcionan si esa persona no falta un día.' },
    { name: 'Piloto Automático', tag: 'automatización de operaciones', resuelve: 'Horas semanales quemadas en tareas repetitivas y copiar-pegar entre programas que no se hablan.' },
    { name: 'Máquina de Contenido', tag: 'sistema de contenido', resuelve: 'Marketing que se publica sin plan y no genera ni una oportunidad comercial.' },
    { name: 'Embudo Sin Fugas', tag: 'funnel automatizado + integraciones', resuelve: 'Leads y datos que se pierden porque las herramientas del negocio no se hablan entre ellas.' },
    { name: 'Radiografía 360', tag: 'auditoría técnica y estratégica a medida', resuelve: 'Decisiones tecnológicas y de marketing tomadas sin datos reales sobre en qué punto está realmente el negocio, qué usa y qué le falta.' },
    { name: 'Playbook Operativo', tag: 'documentación y formación de adopción', resuelve: 'Herramientas y automatizaciones ya implementadas que el equipo no llega a usar, no entiende o abandona a las pocas semanas.' },
  ],
  pricePlaceholder: 'A definir en el diagnóstico',
  cta: 'Reserva tu diagnóstico gratuito',
};

export const comoTrabajamos = {
  headline: 'De la primera llamada a la optimización continua.',
  pasos: [
    { titulo: 'Diagnóstico gratuito', plazo: '15 min', body: 'Reservas la llamada, hablamos de tu negocio y decidimos juntos si tiene sentido seguir.' },
    { titulo: 'Mapa priorizado', plazo: '48–72h', body: 'Recibes por escrito qué encontramos y qué merece la pena resolver primero.' },
    { titulo: 'Implementación', plazo: '7–21 días según alcance', body: 'Construyo o configuro la solución acordada. Tú validas en cada hito.' },
    { titulo: 'Optimización', plazo: 'continua', body: 'Reviso resultados, ajusto lo que haga falta y sigo buscando la siguiente mejora.' },
  ],
};
