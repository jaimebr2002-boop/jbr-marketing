import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, SITE_URL, calLinkWithCampaign } from '../config/brand';
import { usePageMeta } from '../hooks/usePageMeta';
import { CtaButton } from '../components/ui/Button';
import { Reveal, RevealStagger } from '../components/ui/Reveal';

const servicios = [
  { title: 'Desarrollo web', text: 'Webs y landing pages construidas para explicar bien tu oferta y facilitar el contacto.', href: '/servicios/desarrollo-web' },
  { title: 'Software y aplicaciones', text: 'Herramientas a medida cuando una hoja de cálculo o un programa genérico se quedan cortos.', href: '/servicios/desarrollo-apps' },
  { title: 'Chatbots y agentes de IA', text: 'Asistentes que responden, clasifican y ayudan con tareas concretas, con límites claros.', href: '/servicios/chatbots-agentes-ia' },
  { title: 'Automatización y sistemas', text: 'Conexión de herramientas y procesos para reducir tareas manuales y errores repetitivos.', href: '/servicios/automatizaciones' },
  { title: 'SEO y visibilidad digital', text: 'Una base sólida para que clientes potenciales entiendan qué haces y puedan encontrarte.', href: '/servicios/seo' },
  { title: 'Estrategia digital', text: 'Priorización de las acciones que tienen sentido para tu negocio, antes de invertir en tecnología.', href: '/servicios/estrategia-digital' },
];

const principios = [
  { title: 'Primero el problema', text: 'Antes de recomendar IA, una web o una automatización, reviso qué está frenando al negocio y qué merece la pena resolver.' },
  { title: 'Trato directo', text: 'Hablas conmigo durante el diagnóstico y el proyecto. La propuesta se adapta a tu caso, no a un paquete que haya que encajar.' },
  { title: 'Sin promesas mágicas', text: 'La tecnología puede ayudar mucho, pero no garantiza ventas ni posiciones en Google. Acordamos objetivos y medimos lo que se pueda comprobar.' },
];

export function SobreMiPage() {
  const path = '/sobre-mi';

  usePageMeta({
    title: `Sobre Jaime Bernáldez | Consultor de IA en Oviedo`,
    description: 'Conoce a Jaime Bernáldez, consultor independiente de IA y tecnología digital en Oviedo. Desarrollo web, software y automatización para empresas.',
    path,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Sobre mí', item: `${SITE_URL}${path}` },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Sobre Jaime Bernáldez',
        url: `${SITE_URL}${path}`,
        about: { '@id': `${SITE_URL}/#jaime` },
        mainEntity: { '@id': `${SITE_URL}/#jaime` },
        inLanguage: 'es-ES',
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
            Sobre mí
          </nav>
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">Jaime Bernáldez · Oviedo, Asturias</p>
          <h1 className="reveal font-sans font-bold leading-[1.08] text-[clamp(2.1rem,5.5vw,3.6rem)] text-balance max-w-4xl">
            Soy Jaime Bernáldez, consultor de IA y tecnología digital <em className="font-serif italic font-medium">en Oviedo.</em>
          </h1>
          <p className="reveal mt-6 font-sans text-white/70 leading-relaxed max-w-2xl">
            Trabajo con pymes y empresas que quieren mejorar su presencia digital, desarrollar software o aplicar inteligencia artificial con sentido. Mi base está en Asturias y colaboro también a distancia con proyectos de toda España y otros países.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-4">
            <CtaButton href={calLinkWithCampaign('sobre-mi-hero')}>Habla conmigo 15 minutos</CtaButton>
            <Link to="/proyectos" className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 font-sans text-sm text-white hover:bg-white hover:text-ink transition-colors">Ver proyectos</Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.65fr_1.35fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="corner-marks max-w-[300px] mx-auto md:mx-0">
              <div className="aspect-[4/5] rounded bg-surface-inverse text-white flex flex-col justify-between p-7">
                <span className="font-serif text-6xl text-brand-accent">JB</span>
                <div>
                  <p className="font-sans font-bold text-xl">Jaime Bernáldez</p>
                  <p className="mt-1 font-sans text-sm text-white/60">IA · Web · Software</p>
                  <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.18em] text-white/50">Oviedo · Asturias</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Cómo entiendo mi trabajo</p>
            <h2 className="font-sans font-bold text-ink text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.12] text-balance">
              La tecnología solo importa cuando mejora algo concreto.
            </h2>
            <p className="mt-5 font-sans text-ink-secondary leading-relaxed">
              No empiezo por vender una herramienta. Primero escucho cómo funciona hoy el negocio, qué tareas se repiten, dónde se pierden oportunidades y qué quiere conseguir la empresa. Con ese contexto decidimos si conviene desarrollar, automatizar, mejorar la web o no hacer nada todavía.
            </p>
            <p className="mt-4 font-sans text-ink-secondary leading-relaxed">
              La propuesta y el alcance se hablan con claridad antes de empezar. Si una solución no encaja o no puedo justificar su utilidad, prefiero decirlo a tiempo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Mi forma de trabajar</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.12] text-balance max-w-3xl">Cercano en el trato. Claro con las expectativas.</h2>
          <RevealStagger as="div" className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
            {principios.map((item, index) => (
              <article key={item.title} className="border-t border-brand-border pt-5">
                <span className="font-serif italic text-brand-accent">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-sans font-bold text-ink text-lg">{item.title}</h3>
                <p className="mt-2 font-sans text-[14px] text-ink-secondary leading-relaxed">{item.text}</p>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">En qué puedo ayudarte</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.12] text-balance max-w-3xl">Servicios digitales para necesidades distintas.</h2>
          <RevealStagger as="div" className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map((item) => (
              <Link key={item.href} to={item.href} className="group rounded-card border border-brand-border bg-surface p-6 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-brand-accent">
                <h3 className="font-sans font-bold text-ink group-hover:text-brand-accent transition-colors">{item.title} <span aria-hidden="true">→</span></h3>
                <p className="mt-2 font-sans text-sm text-ink-secondary leading-relaxed">{item.text}</p>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="w-full bg-brand-accent text-accent-ink py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="font-sans font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] leading-[1.15] text-balance">¿Tienes un proyecto en mente?</h2>
          <p className="mt-4 font-sans text-accent-ink/80 max-w-xl mx-auto">Cuéntame qué necesitas y vemos juntos si puedo ayudarte. Sin compromiso y hablando directamente conmigo.</p>
          <div className="mt-7 flex justify-center">
            <CtaButton href={calLinkWithCampaign('sobre-mi-final')} className="!bg-surface-inverse !text-white hover:!bg-white hover:!text-ink">Reserva una conversación</CtaButton>
          </div>
          <Link to="/asturias" className="mt-6 inline-block font-sans text-sm underline underline-offset-4">Servicios en Asturias</Link>
        </div>
      </section>
    </>
  );
}
