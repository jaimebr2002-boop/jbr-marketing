import React from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { metodo } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Metodo() {
  return (
    <section id="metodo" className="w-full bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          kicker={metodo.kicker}
          headlinePre={metodo.headlinePre}
          headlineEmphasis={metodo.headlineEmphasis}
          align="center"
          className="!max-w-2xl"
        />

        <ol className="method-track mt-16 grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-6 list-none">
          {metodo.steps.map((step) => (
            <li key={step.n} className="reveal flex md:flex-col gap-5 md:gap-4 md:text-center">
              <span
                className="shrink-0 w-14 h-14 md:w-16 md:h-16 md:mx-auto flex items-center justify-center rounded-full bg-canvas font-serif italic text-2xl text-brand-black relative z-10"
                aria-hidden="true"
              >
                {step.n}
              </span>
              <div>
                <h3 className="font-sans font-bold text-brand-black text-lg">{step.title}</h3>
                <p className="mt-1.5 font-sans text-brand-gray text-sm leading-relaxed">{step.body}</p>
                <p className="mt-2 font-sans text-brand-gray/70 text-xs italic leading-relaxed">{step.micro}</p>
              </div>
            </li>
          ))}
        </ol>

        <Reveal as="p" className="mt-16 text-center font-serif italic text-brand-black text-xl md:text-2xl max-w-2xl mx-auto">
          {metodo.cierre}
        </Reveal>

        <div className="reveal mt-10 flex justify-center">
          <CtaButton href={calLinkWithCampaign('metodo')}>{metodo.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
