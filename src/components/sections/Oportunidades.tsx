import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { oportunidades } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';

export function Oportunidades() {
  return (
    <section id="oportunidades" className="w-full bg-surface py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="reveal font-sans font-bold text-ink leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
          {oportunidades.headline}
        </h2>
        <p className="reveal mt-5 font-sans text-ink-secondary leading-relaxed max-w-xl mx-auto">{oportunidades.subhead}</p>

        <RevealStagger as="ul" className="mt-12 flex flex-col gap-4 text-left list-none">
          {oportunidades.bullets.map((b) => (
            <li key={b} className="font-sans text-ink text-[1.05rem] leading-relaxed border-l-2 border-brand-accent pl-5 py-1">
              {b}
            </li>
          ))}
        </RevealStagger>

        <div className="reveal mt-11 flex justify-center">
          <CtaButton href={calLinkWithCampaign('oportunidades')}>{oportunidades.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
