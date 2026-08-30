import React from 'react';
import { Link } from 'react-router-dom';
import { calLinkWithCampaign } from '../../config/brand';
import { getServiceBySlug } from '../../content/services';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

// Was a 12-row text list of every service — now a curated showcase of 6,
// as cards (same visual language as the /servicios index's own cards:
// border, lift + accent border + glow on hover), with a clear "Ver todos"
// escape hatch to the full 12 at /servicios. The Home's job is to prove
// there's real depth to explore, not to list everything itself.
const FEATURED_SLUGS = ['desarrollo-web', 'automatizaciones', 'seo', 'geo', 'estrategia-digital', 'crm-erp'];

export function ServiciosResumen() {
  const featured = FEATURED_SLUGS.map(getServiceBySlug).filter((s) => s !== undefined);

  return (
    <section id="servicios" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          kicker="SERVICIOS"
          headlinePre="Localizado el problema, esto es "
          headlineEmphasis="con lo que lo resolvemos."
          subhead="No empiezo por la tecnología, pero aquí tienes algunos de los servicios que uso para resolver lo que detecto: IA y automatización, desarrollo, marketing y estrategia."
        />

        <RevealStagger as="div" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((s) => (
            <Link
              key={s.slug}
              to={`/servicios/${s.slug}`}
              className="group bg-surface rounded-card border border-brand-border p-6 flex flex-col gap-4 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:border-brand-accent hover:shadow-[0_10px_28px_var(--accent-glow)] active:scale-[0.98]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-serif italic text-ink-tertiary text-sm shrink-0 transition-colors duration-200 group-hover:text-brand-accent">{s.n}</span>
                <span className="text-ink-tertiary group-hover:text-brand-accent group-hover:translate-x-0.5 transition-[color,transform] duration-200" aria-hidden="true">
                  →
                </span>
              </div>
              <div>
                <h3 className="font-sans font-bold text-ink text-[15px] leading-snug">{s.title}</h3>
                <p className="mt-2 font-sans text-[13px] text-ink-secondary leading-relaxed">{s.shortDescription}</p>
              </div>
              <ul className="mt-auto pt-3 border-t border-brand-border flex flex-col gap-1.5">
                {s.benefits.slice(0, 2).map((b) => (
                  <li key={b.title} className="font-sans text-[12px] text-ink-secondary flex gap-2 items-baseline">
                    <span className="text-brand-accent shrink-0" aria-hidden="true">—</span>
                    {b.title}
                  </li>
                ))}
              </ul>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-ink group-hover:text-brand-accent transition-colors duration-200">
                Ver servicio
              </span>
            </Link>
          ))}
        </RevealStagger>

        <div className="reveal mt-12 border-t border-brand-border pt-9 flex flex-col gap-5">
          <p className="font-sans text-ink font-medium max-w-lg">
            No necesitas saber cuál de estos servicios necesitas. Puedes contarme qué está pasando en tu negocio y yo
            te ayudo a identificar por dónde empezar.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to="/servicios"
              className="font-sans text-[13px] uppercase tracking-[0.08em] font-semibold text-ink border-b-2 border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
            >
              Ver todos los servicios &rarr;
            </Link>
            <CtaButton href={calLinkWithCampaign('servicios')}>Reserva tu diagnóstico gratuito</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
