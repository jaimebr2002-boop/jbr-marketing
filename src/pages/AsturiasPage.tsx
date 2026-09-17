import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BRAND_NAME, CONTACT, SITE_URL, calLinkWithCampaign } from '../config/brand';
import { usePageMeta } from '../hooks/usePageMeta';
import { CtaButton } from '../components/ui/Button';
import { Reveal, RevealStagger } from '../components/ui/Reveal';

const featuredServices = [
  {
    title: 'Diseño y desarrollo web',
    description: 'Webs rápidas, claras y orientadas a convertir visitas en oportunidades comerciales.',
    to: '/servicios/desarrollo-web',
  },
  {
    title: 'Software y aplicaciones a medida',
    description: 'Herramientas internas, CRM, ERP y aplicaciones que encajan con el proceso real del negocio.',
    to: '/servicios/desarrollo-apps',
  },
  {
    title: 'Chatbots y agentes de IA',
    description: 'Atención, citas, llamadas y seguimiento conectados con las herramientas que ya utilizas.',
    to: '/servicios/chatbots-agentes-ia',
  },
  {
    title: 'Automatización de procesos',
    description: 'Sistemas que eliminan tareas repetitivas, conectan datos y reducen trabajo manual.',
    to: '/servicios/automatizaciones',
  },
];

const localExperience = [
  'Aplicación de tasación de vehículos para Grupo Hyundai, OMODA y BYD en Asturias.',
  'Aplicaciones de gestión y control interno para negocios y grupos de hostelería de Oviedo.',
  'Más de 30 webs creadas para negocios locales, además de CRM, ERP y plataformas a medida.',
];

const localFaq = [
  {
    q: '¿Trabajas presencialmente con empresas de Asturias?',
    a: 'Sí. Puedo reunirme presencialmente en Oviedo y otros puntos de Asturias cuando el proyecto lo requiere, combinándolo con un seguimiento remoto ágil.',
  },
  {
    q: '¿Qué servicios ofreces en Oviedo y Asturias?',
    a: 'Desarrollo web, software y aplicaciones a medida, automatización de procesos, CRM y ERP, chatbots, agentes de IA, SEO, GEO y estrategia digital.',
  },
  {
    q: '¿Solo trabajas con empresas asturianas?',
    a: 'No. Mi base está en Oviedo y mantengo una atención cercana en Asturias, pero desarrollo proyectos para empresas de toda España y de otros países.',
  },
  {
    q: '¿Cómo empieza un proyecto?',
    a: 'Con un diagnóstico inicial gratuito de 15 minutos. Primero entiendo el negocio y detecto la prioridad; después propongo la solución adecuada y su alcance.',
  },
];

export function AsturiasPage() {
  const navigate = useNavigate();
  const path = '/asturias';

  usePageMeta({
    title: `Web, software e IA en Asturias | ${BRAND_NAME}`,
    description:
      'Desarrollo web, software a medida, automatizaciones y agentes de IA para empresas de Oviedo y Asturias. Atención directa y diagnóstico gratuito.',
    path,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Servicios en Asturias', item: `${SITE_URL}${path}` },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: `${BRAND_NAME} — consultoría tecnológica en Asturias`,
        url: `${SITE_URL}${path}`,
        telephone: CONTACT.phoneE164,
        email: CONTACT.email,
        founder: { '@type': 'Person', name: BRAND_NAME, url: `${SITE_URL}/#jaime` },
        areaServed: [
          { '@type': 'City', name: 'Oviedo' },
          { '@type': 'City', name: 'Gijón' },
          { '@type': 'City', name: 'Avilés' },
          { '@type': 'AdministrativeArea', name: 'Asturias' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios tecnológicos para empresas',
          itemListElement: featuredServices.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              url: `${SITE_URL}${service.to}`,
            },
          })),
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: localFaq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  });

  return (
    <>
      <section className="w-full bg-surface-inverse text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <nav aria-label="Ruta de navegación" className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            Asturias
          </nav>
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">
            Oviedo · Gijón · Avilés · Toda Asturias
          </p>
          <h1 className="reveal font-sans font-bold leading-[1.08] text-[clamp(2.1rem,5.5vw,3.6rem)] text-balance max-w-4xl">
            Desarrollo web, software e inteligencia artificial <em className="font-serif italic font-medium">en Asturias.</em>
          </h1>
          <p className="reveal mt-6 font-sans text-white/70 leading-relaxed max-w-2xl">
            Ayudo a pymes y empresas asturianas a detectar dónde pierden tiempo, dinero o clientes y construyo la
            solución adecuada: una web, una aplicación, una automatización o un sistema con inteligencia artificial.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-4">
            <CtaButton href={calLinkWithCampaign('asturias-hero')}>Reserva tu diagnóstico gratuito</CtaButton>
            <CtaButton
              href="/proyectos"
              target="_self"
              variant="secondary"
              className="!border-white/30 !text-white hover:!bg-white hover:!text-ink"
              onClick={(event) => {
                event.preventDefault();
                navigate('/proyectos');
              }}
            >
              Ver proyectos reales
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Servicios</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.12] text-balance max-w-3xl">
            Tecnología útil, elegida después de entender el problema.
          </h2>
          <RevealStagger as="div" className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredServices.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="group bg-surface rounded-card border border-brand-border p-7 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_10px_28px_var(--accent-glow)]"
              >
                <h3 className="font-sans font-bold text-ink text-lg">{service.title}</h3>
                <p className="mt-2 font-sans text-[14px] text-ink-secondary leading-relaxed">{service.description}</p>
                <span className="mt-5 inline-block font-sans text-[11px] font-bold uppercase tracking-[0.08em] text-ink group-hover:text-brand-accent transition-colors">
                  Ver servicio →
                </span>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
          <Reveal>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Experiencia cercana</p>
            <h2 className="font-sans font-bold text-ink text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.12] text-balance">
              Proyectos reales desarrollados <em className="font-serif italic font-medium">desde Asturias.</em>
            </h2>
            <p className="mt-5 font-sans text-ink-secondary leading-relaxed">
              La cercanía local permite entender mejor el contexto del negocio. El proceso remoto permite mantener esa
              misma atención cuando el proyecto está en cualquier otro punto de España o fuera del país.
            </p>
          </Reveal>
          <RevealStagger as="ul" className="flex flex-col gap-4 list-none">
            {localExperience.map((item, index) => (
              <li key={item} className="flex gap-4 border-b border-brand-border pb-4 font-sans text-[15px] text-ink leading-relaxed">
                <span className="font-serif italic text-brand-accent shrink-0">{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Preguntas frecuentes</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.12] text-balance mb-8">
            Trabajar juntos desde Asturias.
          </h2>
          <RevealStagger as="div" className="flex flex-col divide-y divide-brand-border border-t border-brand-border">
            {localFaq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-sans font-semibold text-ink">
                  {item.q}
                  <span className="shrink-0 text-ink-tertiary transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="faq-answer mt-3 font-sans text-[15px] text-ink-secondary leading-relaxed max-w-2xl">{item.a}</p>
              </details>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="w-full bg-brand-accent text-accent-ink py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="font-sans font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] leading-[1.15] text-balance">
            Cuéntame qué está frenando a tu negocio.
          </h2>
          <p className="mt-4 font-sans text-accent-ink/80 max-w-xl mx-auto">
            En 15 minutos podemos identificar si existe una oportunidad clara y cuál debería ser el siguiente paso.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButton href={calLinkWithCampaign('asturias-final')} className="!bg-surface-inverse !text-white hover:!bg-white hover:!text-ink">
              Reserva tu diagnóstico gratuito
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
