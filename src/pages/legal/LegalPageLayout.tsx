import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';

interface LegalPageLayoutProps {
  title: string;
  path: string;
  children: React.ReactNode;
}

// Shared shell for the legal pages. Content is explicitly a structural
// placeholder — see the note rendered at the top of each page — never
// presented as a finished, lawyer-reviewed text.
export function LegalPageLayout({ title, path, children }: LegalPageLayoutProps) {
  usePageMeta({
    title: `${title} | Jaime Bernáldez`,
    description: `${title} — información legal de la web de Jaime Bernáldez.`,
    path,
  });

  return (
    <article className="w-full bg-canvas py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-ink-tertiary mb-5">
          <Link to="/" className="hover:text-ink transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </p>
        <h1 className="font-sans font-bold text-ink text-[clamp(1.6rem,3.6vw,2.25rem)] leading-[1.15] mb-8">{title}</h1>

        <div className="mb-10 rounded-lg border border-dashed border-brand-border bg-surface px-5 py-4">
          <p className="font-sans text-[13px] text-ink-secondary leading-relaxed">
            <strong className="text-ink">Pendiente de revisión legal.</strong> Este texto es una estructura de
            partida, no un documento redactado o validado por un profesional del derecho. Sustitúyelo por el
            contenido definitivo antes de considerar la web publicada de forma oficial.
          </p>
        </div>

        <div className="prose-legal flex flex-col gap-6 font-sans text-[15px] text-ink-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </article>
  );
}
