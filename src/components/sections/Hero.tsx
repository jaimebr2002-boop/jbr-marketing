import React from 'react';
import heroJpg640 from '../../assets/hero/hero-hands-640.jpg';
import heroWebp640 from '../../assets/hero/hero-hands-640.webp';
import { calLinkWithCampaign } from '../../config/brand';
import { hero } from '../../content/copy';
import { CtaButton, CtaMicrocopy } from '../ui/Button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-end w-full min-h-[92vh] pt-28 pb-14 md:pt-32 md:pb-20 overflow-hidden"
    >
      {/* HERO_IMAGE_PLACEHOLDER — the "Creation of Adam" hands image supplied by the client.
          Do not swap for a generated image. Only a single 640w variant ships here: this
          session's outbound connection could not reliably upload payloads above ~15-20KB
          (see PR/delivery notes), so the larger 800/1400/2400w responsive variants that
          were generated locally could not be pushed. Swap in higher-resolution files under
          src/assets/hero/ (and restore the srcSet in this file) once that isn't a constraint,
          or once a final image is supplied. */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <picture>
          <source srcSet={heroWebp640} type="image/webp" />
          <img
            src={heroJpg640}
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover object-[center_38%] md:object-[center_30%] grayscale contrast-[1.08]"
          />
        </picture>
        {/* Bottom-up gradient so headline/CTA stay legible over the image */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.88) 0%, rgba(17,17,17,0.35) 45%, rgba(17,17,17,0.05) 75%)' }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <p className="reveal font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-white/80 mb-6">
          {hero.kicker}
        </p>
        <h1 className="reveal font-sans font-bold text-white leading-[1.08] text-[clamp(2rem,5.2vw,3.4rem)] text-balance">
          {hero.headlinePre}
          <em className="font-serif italic font-medium">{hero.headlineEmphasis}</em>
        </h1>
        <p className="reveal mt-6 font-sans text-white/80 text-[1.05rem] md:text-lg leading-relaxed max-w-xl mx-auto">
          {hero.subhead}
        </p>
        <div className="reveal mt-9 flex flex-col items-center">
          <CtaButton href={calLinkWithCampaign('hero')}>{hero.cta}</CtaButton>
          <CtaMicrocopy>
            <span className="text-white/70">{hero.microcopy}</span>
          </CtaMicrocopy>
        </div>
      </div>
    </section>
  );
}
