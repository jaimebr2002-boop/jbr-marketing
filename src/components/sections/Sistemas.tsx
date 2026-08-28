import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { sistemas } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';

export function Sistemas() {
  return (
    <section id="sistemas" className="w-full bg-surface py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal max-w-2xl">
          <h2 className="font-sans font-bold text-ink leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
            {sistemas.headlinePre}
            <em className="font-serif italic font-medium">{sistemas.headlineEmphasis}</em>
          </h2>
          <p className="mt-5 font-sans text-ink-secondary leading-relaxed">{sistemas.subhead}</p>
        </div>

        <RevealStagger as="ul" className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
          {sistemas.items.map((s) => (
            <li key={s.name} className="bg-canvas rounded-lg p-6 flex flex-col gap-1.5">
              <p className="font-sans font-bold text-ink">
                {s.name} <span className="font-normal text-ink-secondary text-sm">— {s.tag}</span>
              </p>
              <p className="font-sans text-sm text-ink-secondary leading-relaxed">{s.resuelve}</p>
            </li>
          ))}
        </RevealStagger>

        <p className="reveal mt-8 font-sans text-sm text-ink-secondary italic">Precio: {sistemas.pricePlaceholder}</p>

        <div className="reveal mt-9">
          <CtaButton href={calLinkWithCampaign('sistemas')}>{sistemas.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
