import React from 'react';
import { DiagnosticoForm } from './DiagnosticoForm';

// Second conversion path: for the visitor who isn't ready to book a call yet.
// Same underlying diagnosis, lower-friction entry point.
const CHECKS = [
  'Tu web y tu presencia digital',
  'Redes sociales y contenido',
  'SEO y posicionamiento en buscadores',
  'Captación y procesos comerciales',
  'Automatización de tareas repetitivas',
  'Oportunidades de IA todavía sin explotar',
];

export function DiagnosticoDigital() {
  return (
    <section id="diagnostico-digital" className="w-full bg-surface py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16 items-start">
        <div className="reveal">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Sin compromiso</p>
          <h2 className="font-sans font-bold text-ink text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.15] text-balance">
            Diagnóstico digital <em className="font-serif italic font-medium">express.</em>
          </h2>
          <p className="mt-5 font-sans text-ink-secondary leading-relaxed max-w-md">
            Si todavía no quieres reservar una llamada, cuéntanos qué está pasando en tu negocio y te decimos por
            dónde empezaríamos. Revisamos lo que haga falta:
          </p>
          <ul className="mt-6 flex flex-col gap-2.5">
            {CHECKS.map((c) => (
              <li key={c} className="font-sans text-sm text-ink flex gap-2.5">
                <span className="text-brand-accent shrink-0" aria-hidden="true">
                  —
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <DiagnosticoForm />
        </div>
      </div>
    </section>
  );
}
