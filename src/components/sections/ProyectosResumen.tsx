import React from 'react';
import { Link } from 'react-router-dom';
import { proyectos } from '../../content/proyectos';
import { RevealStagger } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const CATEGORIA_LABEL: Record<string, string> = {
  web: 'Web',
  app: 'App a medida',
  chatbot: 'Chatbot',
  video: 'Vídeo con IA',
  crm: 'CRM',
};

// Cards are deliberately not links: there's no /proyectos/:slug detail page
// yet (that's a later phase). This section only proves real work exists and
// points to the full list at /proyectos — same "featured subset + Ver todos"
// pattern as ServiciosResumen, just without a per-card destination for now.
export function ProyectosResumen() {
  const featured = proyectos.filter((p) => p.destacado);

  return (
    <section id="proyectos" className="w-full bg-surface py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          kicker="PROYECTOS"
          headlinePre="No es una lista de servicios. Es "
          headlineEmphasis="lo que ya está funcionando."
          subhead="Más de 30 webs creadas y funcionando para negocios locales, además de apps a medida, CRMs, chatbots y vídeo con IA para clientes reales."
        />

        <RevealStagger as="div" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p) => (
            <div key={p.slug} className="bg-canvas rounded-card border border-brand-border p-6 flex flex-col gap-3">
              <span className="font-sans text-[10.5px] font-bold uppercase tracking-[0.12em] text-brand-accent">
                {CATEGORIA_LABEL[p.categoria]}
              </span>
              <div>
                <h3 className="font-sans font-bold text-ink text-[15px] leading-snug">{p.titulo}</h3>
                {p.cliente && <p className="mt-1 font-sans text-[12.5px] text-ink-tertiary">{p.cliente}</p>}
              </div>
              <p className="font-sans text-[13px] text-ink-secondary leading-relaxed">{p.descripcion}</p>
            </div>
          ))}
        </RevealStagger>

        <div className="reveal mt-10">
          <Link
            to="/proyectos"
            className="font-sans text-[13px] uppercase tracking-[0.08em] font-semibold text-ink border-b-2 border-brand-accent pb-0.5 hover:text-brand-accent transition-colors duration-200"
          >
            Ver todos los proyectos &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
