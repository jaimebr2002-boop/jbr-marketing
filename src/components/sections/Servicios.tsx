import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { servicios } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';

// Semantic <article> per service so both the 4 category groupings (for scanning)
// and each of the 13 individual service names (for search/LLM discovery) are
// clearly present in the HTML — grouping is a visual aid, not a way to hide them.
export function Servicios() {
  return (
    <section id="servicios" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal max-w-2xl">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">{servicios.kicker}</p>
          <h2 className="font-sans font-bold text-ink leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
            {servicios.headlinePre}
            <em className="font-serif italic font-medium">{servicios.headlineEmphasis}</em>
          </h2>
          <p className="mt-5 font-sans text-ink-secondary leading-relaxed">{servicios.intro}</p>
        </div>

        <RevealStagger as="div" className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {servicios.categorias.map((cat) => (
            <div key={cat.n} className="bg-surface rounded-lg border border-brand-border p-7">
              <h3 className="font-sans font-bold text-ink text-lg">{cat.title}</h3>
              <ul className="mt-4 flex flex-col gap-4">
                {cat.items.map((item) => (
                  <li key={item.n} className="flex gap-3">
                    <span className="font-serif italic text-ink-tertiary text-sm shrink-0 pt-0.5" aria-hidden="true">
                      {item.n}
                    </span>
                    <div>
                      <p className="font-sans font-semibold text-ink text-sm">{item.title}</p>
                      <p className="mt-0.5 font-sans text-[13px] text-ink-secondary leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealStagger>

        <p className="reveal mt-12 font-serif italic text-ink text-xl md:text-2xl max-w-2xl">{servicios.remate}</p>

        <div className="reveal mt-9 border-t border-brand-border pt-8 flex flex-col gap-4">
          <p className="font-sans text-ink font-medium max-w-lg">
            No necesitas saber cuál de estos servicios necesitas. Puedes contarme qué está pasando en tu negocio y yo te
            ayudo a identificar por dónde empezar.
          </p>
          <div className="flex flex-wrap gap-4">
            <CtaButton href={calLinkWithCampaign('servicios')}>{servicios.ctaPrimary}</CtaButton>
            <CtaButton
              href="#diagnostico-digital"
              target="_self"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('diagnostico-digital')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {servicios.ctaSecondary}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
