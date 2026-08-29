import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { sistemas } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';

// Dark section — a deliberate break in the otherwise light-on-light rhythm of
// the page, and it doubles as the visual stage for "Radiografía 360": the
// differentiated audit capability gets a lime-bordered card instead of the
// plain treatment every other system gets (see the brief's ask to make that
// capability visibly stand out, not just list it as one more item).
export function Sistemas() {
  return (
    <section id="sistemas" className="w-full bg-surface-inverse text-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal max-w-2xl">
          <h2 className="font-sans font-bold leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
            {sistemas.headlinePre}
            <em className="font-serif italic font-medium">{sistemas.headlineEmphasis}</em>
          </h2>
          <p className="mt-5 font-sans text-white/70 leading-relaxed">{sistemas.subhead}</p>
        </div>

        <RevealStagger as="ul" className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
          {sistemas.items.map((s) => {
            const isFeatured = s.name === 'Radiografía 360';
            return (
              <li
                key={s.name}
                className={`rounded-lg p-6 flex flex-col gap-1.5 ${
                  isFeatured ? 'bg-white/5 border border-brand-accent' : 'bg-white/5 border border-white/10'
                }`}
              >
                <p className="font-sans font-bold">
                  {s.name} <span className="font-normal text-white/60 text-sm">— {s.tag}</span>
                  {isFeatured && (
                    <span className="ml-2 align-middle font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-accent-ink bg-brand-accent px-2 py-0.5 rounded">
                      Diferencial
                    </span>
                  )}
                </p>
                <p className="font-sans text-sm text-white/70 leading-relaxed">{s.resuelve}</p>
              </li>
            );
          })}
        </RevealStagger>

        <p className="reveal mt-8 font-sans text-sm text-white/60 italic">Precio: {sistemas.pricePlaceholder}</p>

        <div className="reveal mt-9">
          <CtaButton href={calLinkWithCampaign('sistemas')}>{sistemas.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
