import React from 'react';
import { Link } from 'react-router-dom';
import { calLinkWithCampaign } from '../../config/brand';
import { SERVICES } from '../../content/services';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

// Condensed editorial summary for the homepage — every service name stays
// visible (for scanability, SEO and GEO), but without the full card/traits/FAQ
// treatment that lives on the dedicated /servicios pages. Keeps the home page
// from turning into a 12-section wall of detail.
export function ServiciosResumen() {
  return (
    <section id="servicios" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          kicker="SERVICIOS"
          headlinePre="Localizado el problema, esto es "
          headlineEmphasis="con lo que lo resolvemos."
          subhead="No empiezo por la tecnología, pero aquí tienes los servicios que uso para resolver lo que detecto: IA y automatización, desarrollo, marketing y estrategia."
        />

        <RevealStagger as="ul" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 list-none divide-y divide-brand-border md:divide-y-0">
          {SERVICES.map((s) => (
            <li key={s.slug} className="md:border-b md:border-brand-border">
              {/* Negative margin lets the hover background bleed slightly past the
                  text to the row edges without shifting the divider/grid lines —
                  a left border-accent (not a redraw of the whole card) plus a 2px
                  nudge keeps it in line with the site's existing hover language
                  (Sistemas cards, /servicios detail pages) instead of introducing
                  a new, heavier treatment just for this list. */}
              <Link
                to={`/servicios/${s.slug}`}
                className="group flex items-baseline gap-4 py-4 md:py-3.5 pl-3 -ml-3 pr-3 -mr-3 rounded-control border-l-2 border-transparent transition-[background-color,border-color,transform] duration-200 hover:border-brand-accent hover:bg-[color-mix(in_srgb,var(--ink)_5%,transparent)] hover:translate-x-0.5"
              >
                <span className="font-serif italic text-ink-tertiary text-sm shrink-0 w-6 transition-colors duration-200 group-hover:text-brand-accent" aria-hidden="true">
                  {s.n}
                </span>
                <span className="flex-1">
                  <span className="font-sans font-semibold text-ink text-[15px] underline decoration-transparent group-hover:decoration-brand-accent decoration-2 underline-offset-4 transition-colors duration-200">
                    {s.title}
                  </span>
                  <span className="block mt-0.5 font-sans text-[13px] text-ink-secondary leading-snug">{s.shortDescription}</span>
                </span>
                <span
                  className="shrink-0 text-ink-tertiary group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all duration-200"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
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
