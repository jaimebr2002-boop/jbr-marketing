import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { problema, fugas, oportunidades } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { RevealStagger } from '../ui/Reveal';

// One "problem" narrative instead of the three near-identical sections this
// used to be split across (Problema / Fugas / Oportunidades), each with its
// own repeated CTA. Every line here is reused verbatim from that existing,
// already-approved copy — nothing new was written, this only recomposes what
// already existed: problema's hook, four representative causas from fugas
// (not all nine — this is a home-page glance, not the full list), fugas'
// closing line, and oportunidades' headline as a short pivot into the CTA.
const CAUSAS_DESTACADAS = ['Procesos manuales', 'Mala gestión de leads', 'Herramientas desconectadas', 'Web que convierte poco'];

export function Problema() {
  const causas = fugas.causas.filter((c) => CAUSAS_DESTACADAS.includes(c.title));

  return (
    <section id="problema" className="w-full bg-canvas py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="reveal font-sans font-bold text-ink leading-[1.15] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
          {problema.headlinePre}
          <em className="font-serif italic font-medium">{problema.headlineEmphasis}</em>
        </h2>
        <p className="reveal mt-6 font-sans text-ink-secondary text-lg leading-relaxed max-w-xl mx-auto">
          {problema.body}
        </p>

        <RevealStagger as="ul" className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 list-none text-left">
          {causas.map((c) => (
            <li key={c.title} className="bg-surface rounded-lg border border-brand-border p-6">
              <h3 className="font-sans font-bold text-ink">{c.title}</h3>
              <p className="mt-2 font-sans text-sm text-ink-secondary leading-relaxed">{c.body}</p>
            </li>
          ))}
        </RevealStagger>

        <p className="reveal mt-12 font-serif italic text-ink text-xl md:text-2xl whitespace-pre-line">{fugas.remate}</p>
        <p className="reveal mt-4 font-sans text-ink-secondary">{oportunidades.headline}</p>

        <div className="reveal mt-9 flex justify-center">
          <CtaButton href={calLinkWithCampaign('problema')}>{problema.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
