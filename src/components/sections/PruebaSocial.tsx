import React from 'react';
import { pruebaSocial } from '../../content/copy';

// No testimonials or client logos exist yet for the new brand — this section is
// intentionally built empty-but-ready rather than filled with invented content.
export function PruebaSocial() {
  return (
    <section id="prueba-social" className="w-full bg-canvas py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="reveal font-sans font-bold text-brand-black text-xl md:text-2xl">{pruebaSocial.headline}</h2>
        <p className="reveal mt-3 font-sans text-brand-gray text-sm max-w-lg mx-auto leading-relaxed">{pruebaSocial.body}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: pruebaSocial.placeholderCount }).map((_, i) => (
            <div
              key={i}
              className="reveal aspect-[4/3] rounded-lg border border-dashed border-brand-border flex items-center justify-center"
            >
              <span className="font-sans text-xs uppercase tracking-[0.1em] text-brand-gray/50">Caso próximamente</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
