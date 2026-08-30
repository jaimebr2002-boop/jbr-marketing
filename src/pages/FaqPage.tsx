import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, SITE_URL, calLinkWithCampaign } from '../config/brand';
import { usePageMeta } from '../hooks/usePageMeta';
import { faq, faqCategories } from '../content/copy';
import { CtaButton } from '../components/ui/Button';
import { RevealStagger } from '../components/ui/Reveal';

export function FaqPage() {
  usePageMeta({
    title: `Preguntas Frecuentes sobre Consultoría de IA | ${BRAND_NAME}`,
    description:
      'Resuelve tus dudas sobre consultoría de IA, automatización de procesos, agentes de IA y cómo funciona el diagnóstico gratuito, organizadas por categoría.',
    path: '/faq',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/faq` },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  });

  return (
    <>
      <section className="w-full bg-surface-inverse text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            FAQ
          </p>
          <h1 className="reveal font-sans font-bold leading-[1.1] text-[clamp(2rem,5vw,3.25rem)] text-balance">
            Preguntas frecuentes.
          </h1>
          <p className="reveal mt-6 font-sans text-white/70 leading-relaxed max-w-xl">
            Todo lo que suelen preguntarme antes de reservar un diagnóstico, organizado por tema. Si no encuentras tu
            duda aquí, la resolvemos directamente en la llamada.
          </p>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          {faqCategories.map((category) => {
            const items = faq.filter((item) => item.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category} className="mb-14 last:mb-0">
                <h2 className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-5">
                  {category}
                </h2>
                <RevealStagger as="div" className="flex flex-col divide-y divide-brand-border border-t border-brand-border">
                  {items.map((item) => (
                    <details key={item.q} className="group py-5">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-sans font-semibold text-ink">
                        {item.q}
                        <span className="shrink-0 text-ink-secondary transition-all duration-200 group-hover:text-brand-accent group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 font-sans text-ink-secondary text-sm leading-relaxed max-w-xl">{item.a}</p>
                    </details>
                  ))}
                </RevealStagger>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-brand-accent text-accent-ink py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-sans font-bold text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance">
            ¿Sigues con dudas?
          </h2>
          <p className="mt-4 font-sans text-accent-ink/80 max-w-lg mx-auto">
            15 minutos conmigo resuelven más que cualquier página de FAQ.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButton
              href={calLinkWithCampaign('faq-page')}
              className="!bg-surface-inverse !text-white hover:!bg-white hover:!text-ink"
            >
              Reserva tu diagnóstico gratuito
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
