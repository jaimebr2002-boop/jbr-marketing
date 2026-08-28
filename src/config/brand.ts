// Central brand configuration.
//
// Naming (Umbral / Escruta / Cauce / Zarium) is still pending formal OEPM/EUIPO +
// domain + social verification — see the naming section of the Fases 1-4 proposal.
// Until it's approved, BRAND_NAME uses Jaime's real name rather than a company
// name that isn't decided yet: it's honest (never invented), reads as a normal
// wordmark rather than a dev placeholder, and is exactly how solo consultancies
// commonly present before the company brand is finalized. Swap this one constant
// (and SITE_URL once a domain exists) when the name is approved — nothing else
// in the codebase should hardcode a brand name.
export const BRAND_NAME = 'Jaime Bernáldez';
export const POSITIONING = 'Consultoría de IA · Tecnología Digital';

// Placeholder production domain. Replace with the real domain once purchased —
// used for canonical URL, Open Graph, and Schema.org @id / url fields.
export const SITE_URL = 'https://example.com';

export const CONSULTANT = {
  name: 'Jaime Bernáldez',
  role: 'Consultor de Inteligencia Artificial',
  roleForEmpresas: 'Consultor de Inteligencia Artificial + Tecnología Digital para Empresas',
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
  'Hola Jaime, me gustaría conocer más sobre tus servicios y ver cómo podrías ayudar a mi negocio.';

export function whatsappLink(): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
