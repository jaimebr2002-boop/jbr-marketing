// Real, delivered work — the only source of truth for what's shown as a
// project anywhere on the site. Every entry here must trace back to the
// approved project list: no invented clients, stacks, metrics, URLs or
// functionality. A project described soberly with no numbers is correct; a
// project with a guessed stat is a bug.
//
// No `imagen`/`url` field yet: there are no real screenshots or live links
// approved to publish per project. Add them later exactly like the pattern
// in content/clients.ts — set the field on the entry, no component changes
// needed. Same for a future `slug`-based detail page: this schema already
// carries `slug`, so routing `/proyectos/:slug` in later work is additive.
export interface Proyecto {
  slug: string;
  titulo: string;
  categoria: 'web' | 'app' | 'chatbot' | 'video' | 'crm';
  cliente?: string;
  descripcion: string;
  destacado?: boolean;
}

export const proyectos: Proyecto[] = [
  {
    slug: 'el-casto',
    titulo: 'El Casto',
    categoria: 'web',
    cliente: 'El Casto',
    descripcion: 'Web para El Casto, bar de referencia en Oviedo.',
    destacado: true,
  },
  {
    slug: 'aguaducho',
    titulo: 'Aguaducho',
    categoria: 'web',
    cliente: 'Aguaducho',
    descripcion: 'Web para negocio local.',
  },
  {
    slug: 'wonder-clinic',
    titulo: 'Wonder Clinic',
    categoria: 'web',
    cliente: 'Wonder Clinic',
    descripcion: 'Web para negocio local.',
  },
  {
    slug: 'mamba-negra',
    titulo: 'Mamba Negra',
    categoria: 'web',
    cliente: 'Mamba Negra',
    descripcion: 'Web para negocio local.',
  },
  {
    slug: 'tasacion-hyundai-omoda-byd',
    titulo: 'Tasación de coches a medida',
    categoria: 'app',
    cliente: 'Grupo Hyundai, OMODA y BYD',
    descripcion: 'Desarrollo de app de tasación de coches a medida del cliente, para Grupo Hyundai, OMODA y BYD en Asturias.',
    destacado: true,
  },
  {
    slug: 'subastas-hyundai',
    titulo: 'Subastas de vehículos',
    categoria: 'app',
    cliente: 'Grupo Hyundai',
    descripcion: 'Aplicación de subastas de vehículos para Grupo Hyundai.',
  },
  {
    slug: 'crm-hyundai',
    titulo: 'CRM a medida',
    categoria: 'crm',
    cliente: 'Grupo Hyundai',
    descripcion: 'CRM a medida para Grupo Hyundai.',
    destacado: true,
  },
  {
    slug: 'chatbot-ponce-de-leon',
    titulo: 'Chatbot para gestión de citas',
    categoria: 'chatbot',
    cliente: 'Clínica Ponce de León',
    descripcion:
      'Chatbot para la Clínica Ponce de León: agendamiento de citas, recordatorios de asistencia y confirmación, solicitud de reseñas, y automatizaciones a medida.',
    destacado: true,
  },
  {
    slug: 'chatbot-orgaz-dental',
    titulo: 'Chatbot con automatizaciones',
    categoria: 'chatbot',
    cliente: 'Clínica Orgaz Dental',
    descripcion: 'Chatbot para Clínica Orgaz Dental con automatizaciones a medida.',
  },
  {
    slug: 'videos-naviser-segurma',
    titulo: 'Vídeos con IA y creatividades',
    categoria: 'video',
    cliente: 'Grupo Naviser y Segurma',
    descripcion: 'Vídeos con inteligencia artificial y creatividades para Grupo Naviser y Segurma.',
    destacado: true,
  },
  {
    slug: 'amana',
    titulo: 'Gestión interna a medida',
    categoria: 'app',
    cliente: 'Amana',
    descripcion: 'Aplicación a medida para Amana, bar de referencia de la noche de Oviedo, para la gestión interna.',
  },
  {
    slug: 'app-gavea',
    titulo: 'Aplicación a medida — participación',
    categoria: 'app',
    cliente: 'Grupo Gavea',
    descripcion: 'Participación en la aplicación a medida para Grupo Gavea, grupo con más de 6 locales de hostelería referentes en Oviedo.',
  },
  {
    slug: 'app-naviser',
    titulo: 'Aplicación a medida — participación',
    categoria: 'app',
    cliente: 'Grupo Naviser',
    descripcion: 'Participación en la aplicación a medida para Grupo Naviser, grupo de telefonía del norte de España.',
  },
];
