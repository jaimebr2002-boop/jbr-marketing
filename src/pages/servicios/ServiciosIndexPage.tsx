import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, SITE_URL, calLinkWithCampaign } from '../../config/brand';
import { usePageMeta } from '../../hooks/usePageMeta';
import { SERVICES } from '../../content/services';
import { CtaButton } from '../../components/ui/Button';
import { RevealStagger, Reveal } from '../../components/ui/Reveal';
import { DiagnosticoForm } from '../../components/sections/DiagnosticoForm';

export function ServiciosIndexPage() {
  usePageMeta({
    title: `Servicios de Consultoría de IA y Tecnología Digital | ${BRAND_NAME}`,
    description:
      'Los 12 servicios con los que resuelvo lo que detecto en el diagnóstico: desarrollo web, automatizaciones, SEO, GEO, marketing, CRM/ERP, apps a medida y producción de vídeo con IA.',
    path: '/servicios',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE_URL}/servicios` },
        ],
      },
    ],
  });

  return (
    <>
      <section className="w-full bg-surface-inverse text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            Servicios
          </p>
          <h1 className="reveal font-sans font-bold leading-[1.08] text-[clamp(2.1rem,5.5vw,3.5rem)] text-balance max-w-3xl">
            Doce disciplinas, un mismo criterio: <em className="font-serif italic font-medium">resolver lo que de verdad importa.</em>
          </h1>
          <p className="reveal mt-6 font-sans text-white/70 leading-relaxed max-w-xl">
            No vendo tecnología porque sí. Cada uno de estos servicios existe porque resuelve un tipo concreto de
            problema que aparece una y otra vez en los negocios que analizo. Puedes contratarlos por separado o
            dejar que el diagnóstico decida por dónde empezar.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-4">
            <CtaButton href={calLinkWithCampaign('servicios-index')}>Reserva tu diagnóstico gratuito</CtaButton>
          </div>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <RevealStagger as="div" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/servicios/${s.slug}`}
                className="group bg-surface rounded-lg border border-brand-border p-7 flex flex-col gap-4 transition-colors duration-200 hover:border-ink"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serif italic text-ink-tertiary text-sm shrink-0">{s.n}</span>
                  <span
                    className="text-ink-tertiary group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all duration-200"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
                <div>
                  <h2 className="font-sans font-bold text-ink text-lg leading-snug">{s.title}</h2>
                  <p className="mt-2 font-sans text-[13.5px] text-ink-secondary leading-relaxed">{s.shortDescription}</p>
                </div>
                <ul className="mt-auto pt-3 border-t border-brand-border flex flex-col gap-1.5">
                  {s.benefits.map((b) => (
                    <li key={b.title} className="font-sans text-[12px] text-ink-secondary flex gap-2 items-baseline">
                      <span className="text-brand-accent shrink-0" aria-hidden="true">—</span>
                      {b.title}
                    </li>
                  ))}
                </ul>
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-ink group-hover:text-brand-accent transition-colors duration-200">
                  Ver el servicio en detalle
                </span>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section id="diagnostico-digital" className="w-full bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-start">
          <Reveal>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Sin compromiso</p>
            <h2 className="font-sans font-bold text-ink text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.15] text-balance">
              ¿No sabes cuál <em className="font-serif italic font-medium">necesitas?</em>
            </h2>
            <p className="mt-5 font-sans text-ink-secondary leading-relaxed max-w-md">
              No hace falta que lo sepas. Cuéntame qué está pasando en tu negocio y te digo, con criterio y sin
              compromiso, por dónde tiene sentido empezar.
            </p>
          </Reveal>
          <Reveal>
            <DiagnosticoForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
