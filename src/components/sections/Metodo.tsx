import React, { useEffect, useRef, useState } from 'react';
import { calLinkWithCampaign } from '../../config/brand';
import { metodo } from '../../content/copy';
import { CtaButton } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function StepRing({ active, index }: { active: boolean; index: number }) {
  return (
    <svg viewBox="0 0 52 52" className="step-ring w-full h-full -rotate-90" aria-hidden="true">
      <circle cx="26" cy="26" r={RADIUS} fill="none" stroke="var(--border-strong)" strokeWidth="2" />
      <circle
        className="step-ring-fill"
        cx="26"
        cy="26"
        r={RADIUS}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={active ? 0 : CIRCUMFERENCE}
        // On the desktop 5-column row all steps sit at the same vertical position,
        // so the IntersectionObserver activates them within the same frame — this
        // per-index delay is what turns that into a left-to-right cascade instead
        // of all five rings filling at once.
        style={{ transitionDelay: active ? `${index * 150}ms` : '0ms' }}
      />
    </svg>
  );
}

// The method narrates on scroll: each numbered circle stays hollow until that step
// is the one centered in view, then its ring draws itself in — one IntersectionObserver
// watching all five steps at once, not five separate observers.
export function Metodo() {
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
    <section id="metodo" className="w-full bg-surface py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          kicker={metodo.kicker}
          headlinePre={metodo.headlinePre}
          headlineEmphasis={metodo.headlineEmphasis}
          align="center"
          className="!max-w-2xl"
        />

        <ol className="method-track mt-16 grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-6 list-none">
          {metodo.steps.map((step, i) => {
            const isActive = i <= activeIndex;
            return (
              <li
                key={step.n}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-step-index={i}
                className="group reveal flex md:flex-col gap-5 md:gap-4 md:text-center"
              >
                <span className="shrink-0 w-14 h-14 md:w-16 md:h-16 md:mx-auto relative z-10">
                  <StepRing active={isActive} index={i} />
                  <span
                    className={`absolute inset-0 flex items-center justify-center font-serif italic text-xl transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-ink-tertiary'
                    }`}
                    style={{ transitionDelay: isActive ? `${i * 150}ms` : '0ms' }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                </span>
                <div className="transition-transform duration-300 md:group-hover:-translate-y-0.5">
                  <h3 className="font-sans font-bold text-ink text-lg">{step.title}</h3>
                  <p className="mt-1.5 font-sans text-ink-secondary text-sm leading-relaxed">{step.body}</p>
                  <p className="mt-2 font-sans text-ink-tertiary text-xs italic leading-relaxed">{step.micro}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <Reveal as="p" className="mt-16 text-center font-serif italic text-ink text-xl md:text-2xl max-w-2xl mx-auto">
          {metodo.cierre}
        </Reveal>

        <div className="reveal mt-10 flex justify-center">
          <CtaButton href={calLinkWithCampaign('metodo')}>{metodo.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
