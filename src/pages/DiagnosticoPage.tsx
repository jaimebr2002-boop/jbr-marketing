import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, SITE_URL, calLinkWithCampaign } from '../config/brand';
import { usePageMeta } from '../hooks/usePageMeta';
import { diagnostico, jaime, comoTrabajamos, faq } from '../content/copy';
import { CtaButton, CtaMicrocopy } from '../components/ui/Button';
import { Reveal, RevealStagger } from '../components/ui/Reveal';
import { DiagnosticoForm } from '../components/sections/DiagnosticoForm';
import { HablemosCalCom } from '../components/sections/HablemosCalCom';

// What the diagnostic call actually reviews — the same checklist that used
// to live duplicated inside the Home's embedded-form section; here it
// answers "qué analizamos" directly, once, in context.
const ANALIZAMOS = [
  'Tu web y tu presencia digital',
  'Redes sociales y contenido',
  'SEO y posicionamiento en buscadores',
  'Captación y procesos comerciales',
  'Automatización de tareas repetitivas',
  'Oportunidades de IA todavía sin explotar',
];

const DIAGNOSTICO_FAQ = faq.filter((item) => item.category === 'Proceso y diagnóstico');

export function DiagnosticoPage() {
  usePageMeta({
    title: `Diagnóstico Gratuito de IA para Empresas | ${BRAND_NAME}`,
    description:
      'Diagnóstico gratuito de 15 minutos: analizo cómo funciona tu negocio hoy y te digo, sin compromiso, si la IA, la automatización o el desarrollo tienen sentido para ti.',
    path: '/diagnostico',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Diagnóstico', item: `${SITE_URL}/diagnostico` },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: DIAGNOSTICO_FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  });

  return (
    <>
      {/* Qué es — dark hero */}
      <section className="w-full bg-surface-inverse text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            Diagnóstico
          </p>
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">{diagnostico.kicker}</p>
          <h1 className="reveal font-sans font-bold leading-[1.12] text-[clamp(2rem,5vw,3.25rem)] text-balance">
            {diagnostico.headlinePre}
            <em className="font-serif italic font-medium">{diagnostico.headlineEmphasis}</em>
          </h1>
          <p className="reveal mt-5 font-serif italic text-brand-accent text-lg">{diagnostico.tagline}</p>
          <p className="reveal mt-5 font-sans text-white/70 leading-relaxed max-w-2xl">{diagnostico.body}</p>
          <div className="reveal mt-8">
            <CtaButton href={calLinkWithCampaign('diagnostico-page-hero')}>{diagnostico.cta}</CtaButton>
            <CtaMicrocopy>
              <span className="text-white/60">{diagnostico.microcopy}</span>
            </CtaMicrocopy>
          </div>
        </div>
      </section>

      {/* Qué analizamos — light */}
      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Qué analizamos</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance max-w-xl">
            Revisamos lo que haga falta, no un guion cerrado.
          </h2>
          <RevealStagger as="ul" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none max-w-2xl">
            {ANALIZAMOS.map((item) => (
              <li key={item} className="font-sans text-[15px] text-ink flex gap-3">
                <span className="text-brand-accent shrink-0" aria-hidden="true">—</span>
                {item}
              </li>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Qué recibe tu empresa / cómo funciona — dark */}
      <section id="como-funciona" className="w-full bg-surface-inverse text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Qué recibe tu empresa</p>
          <h2 className="reveal font-sans font-bold text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance max-w-xl">
            {comoTrabajamos.headline}
          </h2>
          <RevealStagger as="ol" className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 list-none">
            {comoTrabajamos.pasos.map((step, i) => (
              <li key={step.titulo} className="flex gap-4">
                <span className="font-serif italic text-brand-accent text-lg shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-sans font-bold">{step.titulo}</h3>
                  <p className="font-sans text-xs uppercase tracking-[0.06em] text-white/50">{step.plazo}</p>
                  <p className="mt-1.5 font-sans text-[13.5px] text-white/70 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Qué necesitamos de ti — light */}
      <section className="w-full bg-canvas py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Qué necesitamos de ti</p>
          <p className="reveal font-sans text-ink text-lg leading-relaxed max-w-2xl">
            Nada preparado de antemano. Solo 15 minutos y que me cuentes cómo funciona tu negocio hoy, sin dar nada
            por hecho — el resto es trabajo mío.
          </p>
        </div>
      </section>

      {/* Quién hace el diagnóstico — white, authority block */}
      <section className="w-full bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="grid grid-cols-1 md:grid-cols-[minmax(0,38%)_1fr] gap-10 md:gap-14 items-start">
            <div className="corner-marks">
              <div className="aspect-[4/5] w-full max-w-[280px] mx-auto md:max-w-none rounded bg-canvas-alt flex items-center justify-center text-center px-6">
                {/* No photo supplied yet — honest placeholder, not a generated stand-in. */}
                <div>
                  <span className="block font-serif text-4xl text-ink-tertiary">JB</span>
                  <span className="mt-2 block font-sans text-[10px] uppercase tracking-[0.15em] text-ink-tertiary">
                    Foto pendiente
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-3">{jaime.kicker}</p>
              <p className="font-sans font-bold text-2xl leading-tight text-ink">{jaime.name}</p>
              <p className="font-sans text-ink-secondary">{jaime.role}</p>
              <h2 className="mt-5 font-sans font-bold text-xl md:text-2xl leading-snug text-ink">{jaime.headline}</h2>
              <p className="mt-4 font-sans text-ink-secondary leading-relaxed">
                {jaime.bioPre}
                <span className="text-brand-accent">{jaime.bioYears}</span>
                {jaime.bioPost}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {jaime.bullets.map((b) => (
                  <li key={b} className="font-sans text-sm text-ink-secondary flex gap-2.5">
                    <span className="text-brand-accent shrink-0" aria-hidden="true">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ específica de diagnóstico — canvas */}
      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">FAQ</p>
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance mb-8">
            Antes de reservar, esto es lo que más se pregunta.
          </h2>
          <RevealStagger as="div" className="flex flex-col divide-y divide-brand-border border-t border-brand-border">
            {DIAGNOSTICO_FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-sans font-semibold text-ink">
                  {item.q}
                  <span className="shrink-0 text-ink-secondary transition-all duration-200 group-hover:text-brand-accent group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq-answer mt-3 font-sans text-ink-secondary text-sm leading-relaxed max-w-xl">{item.a}</p>
              </details>
            ))}
          </RevealStagger>
          <div className="reveal mt-8">
            <Link
              to="/faq"
              className="font-sans text-[13px] uppercase tracking-[0.08em] font-semibold text-ink border-b-2 border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
            >
              Ver todas las preguntas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Agenda una llamada — reuses the existing Cal.com section as-is */}
      <HablemosCalCom />

      {/* O cuéntamelo por escrito — form path */}
      <section id="formulario" className="w-full bg-canvas py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">O prefieres escribirlo</p>
            <h2 className="font-sans font-bold text-ink text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.15] text-balance">
              Cuéntame qué está <em className="font-serif italic font-medium">pasando en tu negocio.</em>
            </h2>
            <p className="mt-5 font-sans text-ink-secondary leading-relaxed max-w-md">
              Si prefieres no reservar una llamada todavía, rellena el formulario y te digo por dónde empezaríamos.
            </p>
          </Reveal>
          <Reveal className="mt-10 max-w-xl">
            <div className="glass-subtle rounded-panel p-6 md:p-8">
              <DiagnosticoForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
