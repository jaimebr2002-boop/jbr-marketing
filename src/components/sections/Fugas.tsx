import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { fugas } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';

export function Fugas() {
  return (
    <section id="fugas" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal max-w-2xl">
          <h2 className="font-sans font-bold text-brand-black leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] whitespace-pre-line text-balance">
            {fugas.headlinePre}
            <em className="font-serif italic font-medium">{fugas.headlineEmphasis}</em>
          </h2>
          <p className="mt-5 font-sans text-brand-gray leading-relaxed">{fugas.subhead}</p>
        </div>

        <RevealStagger as="ul" className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
          {fugas.causas.map((c) => (
            <li key={c.title} className="bg-white rounded-lg border border-brand-border p-6">
              <h3 className="font-sans font-bold text-brand-black">{c.title}</h3>
              <p className="mt-2 font-sans text-sm text-brand-gray leading-relaxed">{c.body}</p>
            </li>
          ))}
        </RevealStagger>

        <p className="reveal mt-12 font-serif italic text-brand-black text-xl md:text-2xl max-w-2xl whitespace-pre-line">
          {fugas.remate}
        </p>

        <div className="reveal mt-9">
          <CtaButton href={calLinkWithCampaign('fugas')}>{fugas.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
