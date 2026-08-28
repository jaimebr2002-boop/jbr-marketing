import React from 'react';
import { comoTrabajamos } from '../../content/copy';
import { RevealStagger } from '../ui/Reveal';

// Purely logistics — no CTA, no mention of "fugas", no restating of the Método
// philosophy. See the conversion audit: this section's job is reducing operational
// uncertainty right before Resultados, not re-selling the diagnosis.
export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="reveal font-sans font-bold text-ink leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] max-w-2xl text-balance">
          {comoTrabajamos.headline}
        </h2>

        <RevealStagger as="ol" className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6 list-none">
          {comoTrabajamos.pasos.map((p, i) => (
            <li key={p.titulo} className="flex flex-col gap-2">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-brand-accent bg-surface-inverse inline-block w-fit px-2 py-1 rounded">
                {i + 1}
              </span>
              <p className="font-sans font-bold text-ink mt-1">{p.titulo}</p>
              <p className="font-sans text-xs uppercase tracking-[0.06em] text-ink-secondary">{p.plazo}</p>
              <p className="font-sans text-sm text-ink-secondary leading-relaxed">{p.body}</p>
            </li>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
