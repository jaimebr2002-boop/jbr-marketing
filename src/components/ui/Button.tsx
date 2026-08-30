import React from 'react';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: '_blank' | '_self';
}

// Primary = filled lime, inverts to a solid dark chip on hover (stays dark in both
// themes — see --surface-inverse). Secondary = outlined in ink, fills to the same
// dark chip on hover. Text sitting directly on the lime fill uses --accent-ink,
// a fixed dark value, never the theme-reactive ink (white-on-lime would be unreadable).
//
// Pill-shaped + a small scale lift on hover/press — matches the pattern
// already used for the navbar's own CTAs (rounded-full, hover:scale-[1.03]
// active:scale-[0.98]); this component just didn't have it, leaving it as
// the one square-cornered button on a page otherwise built from pills.
export function CtaButton({ href, children, variant = 'primary', className = '', ariaLabel, onClick, target = '_blank' }: CtaButtonProps) {
  const isPrimary = variant === 'primary';
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 font-sans font-bold uppercase tracking-[0.12em] text-[13px] px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent ${
        isPrimary
          ? 'bg-brand-accent text-accent-ink hover:bg-surface-inverse hover:text-brand-accent'
          : 'bg-transparent text-ink border border-ink hover:bg-surface-inverse hover:text-white hover:border-surface-inverse'
      } ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </a>
  );
}

// Under-CTA reassurance line, kept in one place so its type treatment stays consistent.
export function CtaMicrocopy({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 font-sans text-[13px] text-ink-secondary tracking-[0.01em]">{children}</p>;
}
