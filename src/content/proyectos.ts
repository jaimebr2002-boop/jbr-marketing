// Real, delivered work — the only source of truth for what's shown as a
// project anywhere on the site. Every entry here must trace back to the
// approved project list: no invented clients, stacks, metrics, URLs or
// functionality. A project described soberly with no numbers is correct; a
// project with a guessed stat is a bug.
//
// Order matters and IS the priority: this array is deliberately sorted by
// weight of the brand/scope (Hyundai group work first, down to the smaller
// single-client chatbots), and every place that renders it — Home's
// featured subset, the /proyectos full list — numbers 01→N from this same
// array order, never from a stored field. Reordering this file is the only
// change needed to reorder the site.
//
// Gavea and Naviser are described by what was actually built (design + several
// modules), not framed as a "collaboration" — that's a deliberate wording
// choice, not an oversight.
//
// No `imagen`/`url` field on client projects: no real screenshots or live
// links are approved to publish for internal/client systems. `slug` is
// already here so a future `/proyectos/:slug` detail page is additive, not a
// rewrite of these components.
export type ProyectoCategoria = 'app' | 'plataforma' | 'crm' | 'erp' | 'chatbot' | 'agente-voz' | 'video';

export interface Proyecto {
  slug: string;
  titulo: string;
  categoria: ProyectoCategoria;
  cliente?: string;
  descripcion: string;
  stack?: string[];
}

export const proyectos: Proyecto[] = [
  {
    slug: 'tasacion-hyundai-omoda-byd',
    titulo: 'App de tasación de coches a medida',
    categoria: 'app',
    cliente: 'Grupo Hyundai, OMODA y BYD',
    descripcion:
      'App de tasación de coches a medida del proceso del concesionario para Grupo Hyundai, OMODA y BYD en Asturias, más una landing de captación de tasaciones.',
  },
  {
    slug: 'subastas-hyundai',
    titulo: 'Plataforma de subastas de vehículos',
    categoria: 'plataforma',
    cliente: 'Grupo Hyundai',
    descripcion:
      'Plataforma B2B de subastas de vehículos: subastas activas con contador, puja en vivo con galería e historial, gestión de stock con chat de negociación, seguimiento de pujas, favoritos, notificaciones y panel analítico con KPIs.',
  },
  {
    slug: 'crm-hyundai',
    titulo: 'CRM a medida',
    categoria: 'crm',
    cliente: 'Grupo Hyundai',
    descripcion: 'CRM a medida para gestión comercial: pipeline de leads por etapas, calendario de seguimiento y ficha de cliente.',
  },
  {
    slug: 'amana',
    titulo: 'App de gestión interna',
    categoria: 'app',
    cliente: 'Amana',
    descripcion:
      'App de gestión interna para el control de plantilla del local, bar de referencia de la noche de Oviedo: fichaje por PIN sin usuario, distinción entre personal fijo y refuerzos puntuales, y liquidación de pagos pendientes.',
  },
  {
    slug: 'app-gavea',
    titulo: 'Diseño y desarrollo de app a medida',
    categoria: 'app',
    cliente: 'Grupo Gavea',
    descripcion:
      'Diseño de la app y desarrollo de varios de sus módulos para Grupo Gavea, grupo con más de 6 locales de hostelería referentes en Oviedo: kiosko de fichaje, panel de gestión y control APPCC.',
  },
  {
    slug: 'erp-naviser',
    titulo: 'ERP interno a medida',
    categoria: 'erp',
    cliente: 'Grupo Naviser',
    descripcion:
      'Diseño de la app y desarrollo de varios de sus módulos para el ERP interno de Grupo Naviser, grupo de telefonía del norte de España: motor de comisiones por línea de producto con reglas por territorio y equipo, liquidaciones, tesorería, CRM y pipeline, gestión de tiendas y stands, objetivos y rankings, automatizaciones y API con webhooks.',
    stack: ['Next.js', 'Supabase (PostgreSQL con RLS)', 'Vercel'],
  },
  {
    slug: 'chatbot-ponce-de-leon',
    titulo: 'Sistema de comunicación con pacientes',
    categoria: 'chatbot',
    cliente: 'Clínica Ponce de León',
    descripcion:
      'Sistema de comunicación con pacientes multi-sede: agendamiento de citas, recordatorios de asistencia y confirmación, solicitud de reseñas y automatizaciones a medida.',
    stack: ['GoHighLevel', 'WhatsApp Business API'],
  },
  {
    slug: 'chatbot-orgaz-dental',
    titulo: 'Chatbot con automatizaciones',
    categoria: 'chatbot',
    cliente: 'Clínica Orgaz Dental',
    descripcion: 'Chatbot con automatizaciones a medida para Clínica Orgaz Dental.',
  },
  {
    slug: 'agente-voz-rehberger',
    titulo: 'Agente de voz con IA',
    categoria: 'agente-voz',
    cliente: 'Clínica Rehberger',
    descripcion: 'Agente de voz con IA que atiende llamadas y agenda citas, integrado con calendario.',
    stack: ['Retell AI', 'Twilio'],
  },
  {
    slug: 'videos-naviser-segurma',
    titulo: 'Vídeos con IA y creatividades',
    categoria: 'video',
    cliente: 'Grupo Naviser y Segurma',
    descripcion: 'Vídeos con inteligencia artificial y creatividades publicitarias para Grupo Naviser y Segurma.',
  },
];

// The "más de 30 webs" block — a lighter, separate showcase from the client
// projects above (no categoria/stack, most have no url yet). Only named
// businesses appear here on purpose, not an exhaustive list. `url` is set
// literally, verbatim, only where one was actually supplied — leave it
// undefined rather than guess or shorten one.
export interface Web {
  nombre: string;
  descripcion?: string;
  url?: string;
}

export const webs: Web[] = [
  { nombre: 'El Casto', descripcion: 'Bar de referencia en Oviedo.', url: 'https://elcasto.vercel.app/' },
  { nombre: 'El Aguaducho' },
  { nombre: 'Wonder Clinic' },
  { nombre: 'Mamba Negra', descripcion: 'Web más carta interactiva por QR.' },
  { nombre: 'Molino de la Romera', url: 'https://molino-de-la-romera.vercel.app/' },
];
