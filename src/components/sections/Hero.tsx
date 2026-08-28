import React from 'react';
import heroJpg640 from '../../assets/hero/hero-hands-640.jpg';
import heroWebp640 from '../../assets/hero/hero-hands-640.webp';
import { calLinkWithCampaign } from '../../config/brand';
import { hero } from '../../content/copy';
import { CtaButton, CtaMicrocopy } from '../ui/Button';

// HERO_IMAGE_PLACEHOLDER — full-bleed treatment of the client-supplied hands photo.
// A background-removed cut-out version is expected later: when it arrives, swap the
// <picture> for a foreground <img> positioned over a plain --canvas/--surface-inverse
// gradient (drop the grayscale/contrast filter and the dark overlay below, since a
// cut-out on a clean ground needs neither) rather than editing this file from scratch.
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-end w-full min-h-[88vh] pt-28 pb-14 md:pt-32 md:pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 animate-hero-image-reveal" aria-hidden="true">
        <picture>
          <source srcSet={heroWebp640} type="image/webp" />
          <img
            src={heroJpg640}
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_38%] md:object-[center_30%] grayscale contrast-[1.05]"
          />
        </picture>
        {/* One quiet gradient for legibility — the image stays the protagonist, nothing competes with it */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.82) 0%, rgba(17,17,17,0.28) 48%, rgba(17,17,17,0.02) 78%)' }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <p className="reveal font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-white/75 mb-6">
          {hero.kicker}
        </p>
        <h1 className="reveal font-sans font-bold text-white leading-[1.1] text-[clamp(1.9rem,4.8vw,3.15rem)] text-balance">
          {hero.headlinePre}
          <em className="font-serif italic font-medium">{hero.headlineEmphasis}</em>
        </h1>
        <p className="reveal mt-6 font-sans text-white/75 text-[1.02rem] md:text-lg leading-relaxed max-w-lg mx-auto">
          {hero.subhead}
        </p>
        <div className="reveal mt-9 flex flex-col items-center">
          <CtaButton href={calLinkWithCampaign('hero')}>{hero.cta}</CtaButton>
          <CtaMicrocopy>
            <span className="text-white/65">{hero.microcopy}</span>
          </CtaMicrocopy>
        </div>
      </div>
    </section>
  );
}
