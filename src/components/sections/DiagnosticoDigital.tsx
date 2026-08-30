import React from 'react';
import { useNavigate } from 'react-router-dom';
import { diagnostico } from '../../content/copy';
import { CtaButton } from '../ui/Button';

// Was a full 2-column section with the checklist AND the embedded form —
// now a short teaser: the actual form + Cal.com + full checklist live on
// the dedicated /diagnostico page, reachable from here and from the navbar,
// so this doesn't need to duplicate them just to make the pitch on Home.
export function DiagnosticoDigital() {
  const navigate = useNavigate();

  return (
    <section id="diagnostico-digital" className="w-full bg-surface py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">{diagnostico.kicker}</p>
        <h2 className="reveal font-sans font-bold text-ink text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.15] text-balance">
          {diagnostico.tagline}
        </h2>
        <p className="reveal mt-5 font-sans text-ink-secondary leading-relaxed max-w-md mx-auto">
          {diagnostico.bullets[0]}
        </p>
        <div className="reveal mt-9 flex justify-center">
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
      </div>
    </section>
  );
}
