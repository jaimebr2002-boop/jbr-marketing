import React from 'react';
import { CalEmbed } from '../ui/CalEmbed';

export function HablemosCalCom() {
  return (
    <section id="hablemos" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
        <div className="reveal md:sticky md:top-28">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Hablemos de tu negocio</p>
          <h2 className="font-sans font-bold text-ink text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.15] text-balance">
            15 minutos, <span className="font-serif italic font-medium">directamente conmigo.</span>
          </h2>
          <p className="mt-5 font-sans text-ink-secondary leading-relaxed max-w-md">
            Sin compromiso. Elige el hueco que mejor te venga y hablamos: entiendo qué necesitas y decidimos juntos si
            tiene sentido seguir adelante.
          </p>
        </div>

        <div className="reveal">
          <CalEmbed />
        </div>
      </div>
    </section>
  );
}
