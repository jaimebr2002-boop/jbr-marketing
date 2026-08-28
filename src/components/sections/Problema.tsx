import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { problema } from '../../content/copy';
import { CtaButton } from '../ui/Button';

export function Problema() {
  return (
    <section id="problema" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="reveal font-sans font-bold text-ink leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
          {problema.headlinePre}
          <em className="font-serif italic font-medium">{problema.headlineEmphasis}</em>
        </h2>
        <p className="reveal mt-6 font-sans text-ink-secondary text-lg leading-relaxed max-w-xl mx-auto">
          {problema.body}
        </p>
        <div className="reveal mt-9 flex justify-center">
          <CtaButton href={calLinkWithCampaign('problema')}>{problema.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
