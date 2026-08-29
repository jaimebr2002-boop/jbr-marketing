import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { CtaButton } from '../components/ui/Button';

export function NotFoundPage() {
  usePageMeta({
    title: 'Página no encontrada | Jaime Bernáldez',
    description: 'La página que buscas no existe o se ha movido.',
    path: '/404',
  });

  return (
    <section className="w-full bg-canvas py-24 md:py-32">
      <div className="max-w-lg mx-auto px-6 text-center">
        <p className="font-serif italic text-ink-tertiary text-5xl mb-4">404</p>
        <h1 className="font-sans font-bold text-ink text-2xl mb-3">Esta página no existe.</h1>
        <p className="font-sans text-ink-secondary mb-8">
          Puede que el enlace esté roto o que la página se haya movido. Puedes volver al inicio o ver todos los
          servicios.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton href="/" target="_self" variant="secondary">Volver al inicio</CtaButton>
          <Link
            to="/servicios"
            className="font-sans text-[13px] uppercase tracking-[0.08em] font-semibold text-ink border-b-2 border-brand-accent pb-0.5 self-center"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
