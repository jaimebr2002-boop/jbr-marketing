// Central brand configuration.
// NEW_BRAND_NAME is intentionally a placeholder — naming (Umbral / Escruta / Cauce / Zarium)
// is still pending formal OEPM/EUIPO + domain + social verification. Do not hardcode a name
// anywhere else in the codebase; always import NEW_BRAND_NAME from here.
export const NEW_BRAND_NAME = '[NEW BRAND NAME]';

// Placeholder production domain. Replace with the real domain once purchased —
// used for canonical URL, Open Graph, and Schema.org @id / url fields.
export const SITE_URL = 'https://example.com';

export const CONSULTANT = {
  name: 'Jaime Bernáldez',
  role: 'Consultor de Inteligencia Artificial',
  roleForEmpresas: 'Consultor de Inteligencia Artificial para Empresas',
};

export const CONTACT = {
  email: 'jaimebernaldezimpulsa@gmail.com',
  phoneDisplay: '722 785 142',
  phoneE164: '+34722785142',
  linkedin: 'https://www.linkedin.com/in/jaimebernaldez/',
  instagram: 'https://www.instagram.com/jaime4bernal/?hl=es',
  whatsappNumber: '34722785142',
};

export const CAL_LINK = 'https://cal.com/jaime-bernaldez-reina/30min?overlayCalendar=true';

export function calLinkWithCampaign(campaign: string): string {
  const separator = CAL_LINK.includes('?') ? '&' : '?';
  return `${CAL_LINK}${separator}utm_source=web&utm_medium=cta&utm_campaign=${campaign}`;
}

export const WHATSAPP_MESSAGE =
  'Hola Jaime, me gustaría saber más sobre tus servicios y ver si puedes ayudarme con mi negocio.';

export function whatsappLink(): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
