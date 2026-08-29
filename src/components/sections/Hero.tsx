import React from 'react';
import heroDesktopWebp from '../../assets/hero/hero-hands-desktop.webp';
import heroMobileWebp from '../../assets/hero/hero-hands-mobile.webp';
import { calLinkWithCampaign } from '../../config/brand';
import { hero } from '../../content/copy';
import { CtaButton, CtaMicrocopy } from '../ui/Button';

// Real transparent cutouts (confirmed via alpha channel, not just visual guess)
// of the same "reaching hands" artwork, replacing the old 640px-wide flat
// photo that was being upscaled 2-3x on any screen wider than 640px — that
// upscaling, not a CSS filter or Cloudinary compression, was the actual
// source of the "blurry hero" complaint. <picture> serves the mobile crop
// (tighter, more vertical) below 768px and the desktop crop (wide, low)
// above it — only one ever downloads.
//
// Composited over a designed gradient (built entirely from the existing
// theme tokens, so it re-themes for free) instead of behaving like a
// full-bleed photo — that's what a transparent cutout calls for, and it's
// what lets the Hero's text go back to being theme-reactive (ink/canvas)
// instead of hardcoded white-on-dark-photo.
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start w-full min-h-[88vh] pt-32 pb-10 md:pt-40 md:pb-16 overflow-hidden bg-canvas"
    >
      {/* Designed backdrop: a soft top-to-bottom surface shift plus one very
          controlled lime glow behind the hands' meeting point — no photo,
          no particles, nothing competing with the composition. */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 78%, var(--accent-glow), transparent 70%), linear-gradient(180deg, var(--canvas-alt) 0%, var(--canvas) 55%, var(--surface) 100%)',
        }}
        aria-hidden="true"
      />

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

      {/* Hands graphic — a supporting visual anchored to the bottom of the
          composition, never overlapping the text or CTA above it. */}
      <div
        className="relative z-[5] w-full mt-10 md:mt-16 animate-hero-image-reveal"
        aria-hidden="true"
      >
        {/* WebP-only, no PNG fallback: transparency rules out JPG, and
            WebP-with-alpha support is effectively universal now, so a ~1.6MB
            fallback pair would only ever load for a vanishingly small,
            already-legacy slice of browsers. */}
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktopWebp} type="image/webp" />
          {/* aspect-* reserves the right box per breakpoint before the image
              decodes — the mobile and desktop crops have very different
              ratios (1.5:1 vs 3.79:1), so a single static width/height
              would reserve the wrong space and cause a jump on one of them. */}
          <img
            src={heroMobileWebp}
            alt=""
            fetchPriority="high"
            width={1400}
            height={933}
            className="w-[82%] max-w-[420px] md:max-w-[1100px] md:w-[78%] mx-auto h-auto object-contain aspect-[1400/933] md:aspect-[2200/581]"
          />
        </picture>
      </div>
    </section>
  );
}
