import React, { useEffect } from 'react';
import { faq } from '../../content/copy';

export function FAQ() {
  // Emit FAQPage JSON-LD from the exact same data the visible accordion renders,
  // so the structured data can never drift out of sync with what a visitor reads.
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faqpage-schema';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
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
    <section id="faq" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="reveal font-sans font-bold text-brand-black text-[clamp(1.75rem,4vw,2.5rem)]">Preguntas frecuentes</h2>

        <div className="reveal mt-10 flex flex-col">
          {faq.map((item) => (
            <details key={item.q} className="group border-b border-brand-border py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-sans font-semibold text-brand-black">
                {item.q}
                <span className="shrink-0 text-brand-gray transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 font-sans text-brand-gray text-sm leading-relaxed max-w-xl">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
