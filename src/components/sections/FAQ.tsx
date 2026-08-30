import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faq } from '../../content/copy';

// Home shows only the curated `home: true` subset (6 of 14) — the full list,
// grouped by category, lives at /faq now. Still emits FAQPage JSON-LD for
// just this subset (accurate structured data for what's actually on this
// page); the full set's schema lives on /faq itself.
const HOME_FAQ = faq.filter((item) => item.home);

export function FAQ() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faqpage-schema';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOME_FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById('faqpage-schema')?.remove();
    };
  }, []);

  return (
    <section id="faq" className="w-full bg-surface py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.75rem,4vw,2.5rem)]">Preguntas frecuentes</h2>

        <div className="reveal mt-10 flex flex-col">
          {HOME_FAQ.map((item) => (
            <details key={item.q} className="group border-b border-brand-border py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-sans font-semibold text-ink">
                {item.q}
                <span className="shrink-0 text-ink-secondary transition-[color,transform] duration-200 group-hover:text-brand-accent group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="faq-answer mt-3 font-sans text-ink-secondary text-sm leading-relaxed max-w-xl">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="reveal mt-8">
          <Link
            to="/faq"
            className="font-sans text-[13px] uppercase tracking-[0.08em] font-semibold text-ink border-b-2 border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
          >
            Ver todas las preguntas &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
