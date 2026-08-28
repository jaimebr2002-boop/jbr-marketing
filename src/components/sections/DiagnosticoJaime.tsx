import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { diagnostico, jaime } from '../../content/copy';
import { CtaButton, CtaMicrocopy } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function DiagnosticoJaime() {
  return (
    <section id="diagnostico" className="w-full bg-surface-inverse text-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Diagnóstico framing */}
        <div className="max-w-2xl reveal">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">{diagnostico.kicker}</p>
          <h2 className="font-sans font-bold leading-[1.12] text-[clamp(1.75rem,4vw,2.5rem)] text-balance">
            {diagnostico.headlinePre}
            <em className="font-serif italic font-medium">{diagnostico.headlineEmphasis}</em>
          </h2>
          <p className="mt-5 font-serif italic text-brand-accent text-lg">{diagnostico.tagline}</p>
          <p className="mt-5 font-sans text-white/70 leading-relaxed">{diagnostico.body}</p>
          <ul className="mt-6 flex flex-col gap-2.5">
            {diagnostico.bullets.map((b) => (
              <li key={b} className="font-sans text-sm text-white/70 flex gap-2.5">
                <span className="text-brand-accent shrink-0" aria-hidden="true">—</span>
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif italic text-white/90 text-lg leading-snug">{diagnostico.honesty}</p>
          <div className="mt-8">
            <CtaButton href={calLinkWithCampaign('diagnostico')}>{diagnostico.cta}</CtaButton>
            <CtaMicrocopy>
              <span className="text-white/60">{diagnostico.microcopy}</span>
            </CtaMicrocopy>
          </div>
        </div>

        {/* Jaime authority block */}
        <Reveal className="mt-20 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-[minmax(0,38%)_1fr] gap-10 md:gap-14 items-start">
          <div className="corner-marks">
            <div className="aspect-[4/5] w-full max-w-[280px] mx-auto md:max-w-none rounded bg-white/5 flex items-center justify-center text-center px-6">
              {/* FOTO_JAIME_PLACEHOLDER — no photo has been supplied yet. Do not
                  generate one; swap this block for a real <img> once it arrives. */}
              <div>
                <span className="block font-serif text-4xl text-white/25">JB</span>
                <span className="mt-2 block font-sans text-[10px] uppercase tracking-[0.15em] text-white/25">
                  Foto pendiente
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-3">{jaime.kicker}</p>
            <p className="font-sans font-bold text-2xl leading-tight">{jaime.name}</p>
            <p className="font-sans text-white/60">{jaime.role}</p>
            <h3 className="mt-5 font-sans font-bold text-xl md:text-2xl leading-snug">{jaime.headline}</h3>
            <p className="mt-4 font-sans text-white/70 leading-relaxed">
              {jaime.bioPre}
              <span className="text-brand-accent">{jaime.bioYears}</span>
              {jaime.bioPost}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {jaime.bullets.map((b) => (
                <li key={b} className="font-sans text-sm text-white/70 flex gap-2.5">
                  <span className="text-brand-accent shrink-0" aria-hidden="true">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
