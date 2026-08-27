import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { ctaFinal } from '../../content/copy';
import { CtaButton, CtaMicrocopy } from '../ui/Button';

export function CTAFinal() {
  return (
    <section id="cta" className="w-full bg-brand-black text-white py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="reveal font-serif italic font-medium text-[clamp(2rem,5vw,3rem)] leading-tight">
          {ctaFinal.headline}
        </h2>
        <p className="reveal mt-5 font-sans text-white/70 text-lg">{ctaFinal.subhead}</p>
        <div className="reveal mt-10 flex flex-col items-center">
          <CtaButton href={calLinkWithCampaign('cta-final')}>{ctaFinal.cta}</CtaButton>
          <CtaMicrocopy>
            <span className="text-white/60">{ctaFinal.microcopy}</span>
          </CtaMicrocopy>
        </div>
      </div>
    </section>
  );
}
