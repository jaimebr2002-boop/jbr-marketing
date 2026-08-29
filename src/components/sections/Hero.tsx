import React from 'react';
import heroDesktopWebp from '../../assets/hero/hero-hands-desktop.webp';
import heroMobileWebp from '../../assets/hero/hero-hands-mobile.webp';
import { calLinkWithCampaign } from '../../config/brand';
import { hero } from '../../content/copy';
import { CtaButton, CtaMicrocopy } from '../ui/Button';

// The reference site (impulsastudioai.vercel.app) uses this exact technique
// for its own hero, inspected directly rather than guessed: the transparent
// hands cutout is NOT floated as a small contained graphic — it's stretched
// full-bleed with object-cover, grayscale + contrast filtered, then the
// whole layer gets mix-blend-mode (multiply on light, screen on dark) at a
// partial opacity. That's what makes the transparent pixels read as the
// page's own surface instead of a hard rectangular image edge, and it's why
// their hero feels "integrated" instead of "a PNG pasted on top" — the
// problem with the previous version here. Same underlying artwork (same
// Cloudinary asset for desktop); the mobile crop is their own purpose-built
// portrait version, not the landscape one used previously, since a portrait
// cutout composes far better in a tall mobile viewport than a wide one does.
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center w-full min-h-[90vh] pt-32 pb-14 md:pt-28 md:pb-20 overflow-hidden bg-canvas"
    >
      <div className="absolute inset-0 z-0 hero-image-layer" aria-hidden="true">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktopWebp} type="image/webp" />
          <img
            src={heroMobileWebp}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[center_52%] md:object-[center_50%] scale-[1.06] md:scale-[1.08] grayscale contrast-125"
          />
        </picture>
      </div>

      {/* No lime glow here — the reference implementation doesn't use one in
          the hero either, and an early attempt at one large-radius glow read
          as a flat green wash rather than a controlled accent. Lime stays on
          the CTA button, which is exactly the "action" role it should play. */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
        <p className="reveal font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-ink-secondary mb-6">
          {hero.kicker}
        </p>
        <h1 className="reveal font-sans font-bold text-ink leading-[1.1] text-[clamp(1.9rem,4.8vw,3.15rem)] text-balance">
          {hero.headlinePre}
          <em className="font-serif italic font-medium">{hero.headlineEmphasis}</em>
        </h1>
        <p className="reveal mt-6 font-sans text-ink-secondary text-[1.02rem] md:text-lg leading-relaxed max-w-lg mx-auto">
          {hero.subhead}
        </p>
        <div className="reveal mt-9 flex flex-col items-center">
          <CtaButton href={calLinkWithCampaign('hero')}>{hero.cta}</CtaButton>
          <CtaMicrocopy>
            <span className="text-ink-secondary">{hero.microcopy}</span>
          </CtaMicrocopy>
        </div>
      </div>
    </section>
  );
}
