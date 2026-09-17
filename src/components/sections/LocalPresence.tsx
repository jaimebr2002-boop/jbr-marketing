import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, RevealStagger } from '../ui/Reveal';

const localServices = [
  { to: '/servicios/desarrollo-web', label: 'Diseño y desarrollo web' },
  { to: '/servicios/desarrollo-apps', label: 'Software y aplicaciones a medida' },
  { to: '/servicios/chatbots-agentes-ia', label: 'Chatbots y agentes de IA' },
  { to: '/servicios/automatizaciones', label: 'Automatización de procesos' },
];

export function LocalPresence() {
  return (
    <section className="w-full bg-surface py-16 md:py-20" aria-labelledby="local-presence-title">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
        <Reveal>
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">
            Base en Oviedo · Proyectos sin fronteras
          </p>
          <h2
            id="local-presence-title"
            className="font-sans font-bold text-ink text-[clamp(1.7rem,3.5vw,2.6rem)] leading-[1.12] text-balance"
          >
            Cerca cuando lo necesitas. Disponible <em className="font-serif italic font-medium">donde estés.</em>
          </h2>
          <p className="mt-5 font-sans text-ink-secondary leading-relaxed max-w-2xl">
            Trabajo directamente con pymes y empresas de Asturias, toda España y otros países. Analizo cada caso,
            priorizo lo que puede generar un resultado real y construyo la solución: una web que capte clientes, una
            aplicación interna, una automatización o un agente de inteligencia artificial.
          </p>
          <p className="mt-4 font-sans text-[14px] text-ink-secondary leading-relaxed max-w-2xl">
            La atención es directa con Jaime Bernáldez: reuniones presenciales en Asturias y un proceso remoto preparado
            para desarrollar proyectos nacionales e internacionales con la misma cercanía.
          </p>
          <Link
            to="/asturias"
            className="mt-6 inline-flex font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-ink hover:text-brand-accent transition-colors"
          >
            Ver servicios en Asturias →
          </Link>
        </Reveal>

        <RevealStagger as="ul" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 list-none">
          {localServices.map((service) => (
            <li key={service.to}>
              <Link
                to={service.to}
                className="group flex items-center justify-between gap-4 rounded-card border border-brand-border bg-canvas px-5 py-4 font-sans text-sm font-semibold text-ink transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand-accent"
              >
                {service.label}
                <span className="text-brand-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
