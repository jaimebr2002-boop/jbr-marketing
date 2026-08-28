import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { resultados } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';

export function Resultados() {
  return (
    <section id="resultados" className="w-full bg-surface py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal max-w-2xl">
          <h2 className="font-sans font-bold text-ink leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
            {resultados.headlinePre}
            <em className="font-serif italic font-medium">{resultados.headlineEmphasis}</em>
          </h2>
          <p className="mt-5 font-sans text-ink-secondary leading-relaxed">{resultados.remate}</p>
        </div>

        <RevealStagger as="ul" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none">
          {resultados.bullets.map((b) => (
            <li key={b.titulo} className="border-t-2 border-brand-accent pt-4">
              <p className="font-sans font-bold text-ink">{b.titulo}</p>
              <p className="mt-1.5 font-sans text-sm text-ink-secondary leading-relaxed">{b.body}</p>
              {b.placeholder && <p className="mt-1.5 font-sans text-xs italic text-ink-secondary/60">{b.placeholder}</p>}
            </li>
          ))}
        </RevealStagger>

        <p className="reveal mt-12 font-serif italic text-ink text-lg md:text-xl max-w-2xl">{resultados.honesty}</p>

        <div className="reveal mt-9">
          <CtaButton href={calLinkWithCampaign('resultados')}>{resultados.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
