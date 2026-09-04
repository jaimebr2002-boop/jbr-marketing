import React from 'react';
import { CalEmbed } from '../ui/CalEmbed';

export function HablemosCalCom() {
  return (
    <section id="hablemos" className="w-full bg-canvas py-20 md:py-28">
      {/* Stacked, not the old 2-column grid: Cal's own calendar+time-slots
          layout needs real width to sit side-by-side instead of cramming
          into a narrow column (~530px in the old 0.9fr/1.1fr split) — at
          that width Cal falls back to a squeezed, scroll-heavy rendering
          instead of the spacious, mostly-scroll-free view it gives at
          ~800px+, which is what should actually be on screen here. */}
      <div className="max-w-2xl mx-auto px-6 text-center reveal">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Hablemos de tu negocio</p>
        <h2 className="font-sans font-bold text-ink text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.15] text-balance">
          15 minutos, <span className="font-serif italic font-medium">directamente conmigo.</span>
        </h2>
        <p className="mt-5 font-sans text-ink-secondary leading-relaxed">
          Sin compromiso. Elige el hueco que mejor te venga y hablamos: entiendo qué necesitas y decidimos juntos si
          tiene sentido seguir adelante.
        </p>
      </div>

      <div className="reveal mt-10 md:mt-12 max-w-4xl mx-auto px-6">
        <CalEmbed />
      </div>
    </section>
  );
}
