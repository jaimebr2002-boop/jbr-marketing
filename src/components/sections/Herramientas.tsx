import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { herramientas } from '../../content/copy';
import { CtaButton, CtaMicrocopy } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';

export function Herramientas() {
  return (
    <section id="herramientas" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal max-w-2xl">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gray mb-4">{herramientas.kicker}</p>
          <h2 className="font-sans font-bold text-brand-black leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
            {herramientas.headlinePre}
            <em className="font-serif italic font-medium">{herramientas.headlineEmphasis}</em>
          </h2>
          <p className="mt-5 font-sans text-brand-gray leading-relaxed">{herramientas.intro}</p>
          <p className="mt-4 font-sans text-brand-black leading-relaxed font-medium">{herramientas.permission}</p>
        </div>

        <RevealStagger as="div" className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {herramientas.categorias.map((cat) => (
            <div key={cat.n} className="bg-white rounded-lg border border-brand-border p-7">
              <div className="flex items-baseline gap-3">
                <span className="font-serif italic text-brand-gray/60 text-lg" aria-hidden="true">{cat.n}</span>
                <h3 className="font-sans font-bold text-brand-black text-lg">{cat.title}</h3>
              </div>
              <p className="mt-3 font-sans text-brand-gray text-sm leading-relaxed">{cat.subtitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.chips.map((chip) => (
                  <li key={chip} className="font-sans text-xs text-brand-black bg-canvas px-2.5 py-1 rounded-full">
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealStagger>

        <p className="reveal mt-12 font-serif italic text-brand-black text-xl md:text-2xl max-w-2xl">{herramientas.remate}</p>

        <div className="reveal mt-9">
          <CtaButton href={calLinkWithCampaign('herramientas')}>{herramientas.cta}</CtaButton>
          <CtaMicrocopy>{herramientas.microcopy}</CtaMicrocopy>
        </div>
      </div>
    </section>
  );
}
