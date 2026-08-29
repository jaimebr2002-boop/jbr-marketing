import React, { useEffect, useRef, useState } from 'react';
import { comoTrabajamos } from '../../content/copy';
import { RevealStagger } from '../ui/Reveal';

// Purely logistics — no CTA, no mention of "fugas", no restating of the Método
// philosophy. See the conversion audit: this section's job is reducing operational
// uncertainty right before Resultados, not re-selling the diagnosis.
//
// Same narrative-numbering idea as Método (one shared observer, activeIndex only
// moves forward, per-step transition delay so a single-row desktop layout still
// reads as a left-to-right sequence instead of four badges lighting up at once)
// but with a plain badge instead of an SVG ring — this is a lighter logistics
// list, not the flagship five-step method.
export function ComoTrabajamos() {
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.stepIndex);
          if (entry.isIntersecting) {
            setActiveIndex((current) => Math.max(current, idx));
          }
        });
      },
      { threshold: 0.6, rootMargin: '-15% 0px -15% 0px' }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-trabajamos" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="reveal font-sans font-bold text-ink leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] max-w-2xl text-balance">
          {comoTrabajamos.headline}
        </h2>

        <RevealStagger as="ol" className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6 list-none">
          {comoTrabajamos.pasos.map((p, i) => {
            const isActive = i <= activeIndex;
            return (
              <li
                key={p.titulo}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-step-index={i}
                className="flex flex-col gap-2"
              >
                <span
                  className={`font-sans text-xs font-bold uppercase tracking-[0.1em] inline-block w-fit px-2 py-1 rounded transition-all duration-500 ${
                    isActive ? 'bg-brand-accent text-accent-ink scale-100' : 'bg-surface-inverse text-white/40 scale-95'
                  }`}
                  style={{ transitionDelay: isActive ? `${i * 150}ms` : '0ms' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-sans font-bold text-ink mt-1">{p.titulo}</p>
                <p className="font-sans text-xs uppercase tracking-[0.06em] text-ink-secondary">{p.plazo}</p>
                <p className="font-sans text-sm text-ink-secondary leading-relaxed">{p.body}</p>
              </li>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
