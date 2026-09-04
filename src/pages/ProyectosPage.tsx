import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BRAND_NAME, SITE_URL } from '../config/brand';
import { usePageMeta } from '../hooks/usePageMeta';
import { proyectos, webs } from '../content/proyectos';
import { CtaButton } from '../components/ui/Button';
import { RevealStagger, Reveal } from '../components/ui/Reveal';

const CATEGORIA_LABEL: Record<string, string> = {
  app: 'App a medida',
  plataforma: 'Plataforma',
  crm: 'CRM',
  erp: 'ERP',
  chatbot: 'Chatbot',
  'agente-voz': 'Agente de voz',
  video: 'Vídeo con IA',
};

// Cards aren't links yet — no /proyectos/:slug detail page exists in this
// phase (see content/proyectos.ts). The schema already carries `slug`, so
// wiring that route in later is additive, not a rewrite.
export function ProyectosPage() {
  const navigate = useNavigate();

  usePageMeta({
    title: `Proyectos | ${BRAND_NAME}`,
    description:
      'Apps a medida, plataformas, ERPs, CRMs, chatbots y vídeo con IA para clientes reales, además de más de 30 webs creadas y funcionando para negocios locales.',
    path: '/proyectos',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Proyectos', item: `${SITE_URL}/proyectos` },
        ],
      },
    ],
  });

  return (
    <>
      <section className="w-full bg-surface-inverse text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            Proyectos
          </p>
          <h1 className="reveal font-sans font-bold leading-[1.08] text-[clamp(2.1rem,5.5vw,3.5rem)] text-balance max-w-3xl">
            No es una lista de servicios. Es <em className="font-serif italic font-medium">lo que ya está funcionando.</em>
          </h1>
          <p className="reveal mt-6 font-sans text-white/70 leading-relaxed max-w-xl">
            Apps a medida, plataformas, ERPs, CRMs, chatbots y vídeo con IA para clientes reales — desde un grupo de
            tasación de coches hasta un ERP interno para un grupo de telefonía.
          </p>
        </div>
      </section>

      <section className="w-full bg-canvas py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <RevealStagger as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {proyectos.map((p) => (
              <div key={p.slug} className="bg-surface rounded-card border border-brand-border p-6 flex flex-col gap-3">
                <span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.12em] text-brand-accent">
                  {CATEGORIA_LABEL[p.categoria]}
                </span>
                <div>
                  <h2 className="font-sans font-bold text-ink text-[15px] leading-snug">{p.titulo}</h2>
                  {p.cliente && <p className="mt-1 font-sans text-[12.5px] text-ink-tertiary">{p.cliente}</p>}
                </div>
                <p className="font-sans text-[13px] text-ink-secondary leading-relaxed">{p.descripcion}</p>
                {p.stack && p.stack.length > 0 && (
                  <p className="mt-auto pt-3 border-t border-brand-border font-sans text-[11.5px] text-ink-tertiary">
                    {p.stack.join(' · ')}
                  </p>
                )}
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Webs block — deliberately lighter than the client-project cards above:
          no category badge, no stack, most have no url. A showcase of names,
          not another grid of the same visual weight. */}
      <section className="w-full bg-surface py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.5rem,3.2vw,2.1rem)] leading-[1.15] text-balance max-w-2xl">
            Más de 30 webs operativas y funcionando para negocios locales.
          </h2>
          <RevealStagger as="ul" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 list-none max-w-3xl">
            {webs.map((w) => (
              <li key={w.nombre} className="font-sans">
                {w.url ? (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-ink text-[15px] underline underline-offset-2 decoration-brand-border hover:decoration-brand-accent transition-colors"
                  >
                    {w.nombre}
                  </a>
                ) : (
                  <span className="font-bold text-ink text-[15px]">{w.nombre}</span>
                )}
                {w.descripcion && <span className="ml-2 text-[13px] text-ink-secondary">{w.descripcion}</span>}
              </li>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="w-full bg-surface-inverse text-white py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">Sin compromiso</p>
            <h2 className="font-sans font-bold text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.15] text-balance">
              ¿Quieres algo <em className="font-serif italic font-medium">parecido?</em>
            </h2>
            <p className="mt-5 font-sans text-white/70 leading-relaxed max-w-md mx-auto">
              Cuéntame qué necesita tu negocio y vemos, con un diagnóstico gratuito, si tiene sentido construirlo.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaButton
                href="/diagnostico"
                target="_self"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/diagnostico');
                }}
              >
                Solicitar diagnóstico gratuito
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
