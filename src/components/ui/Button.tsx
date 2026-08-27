import React from 'react';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  ariaLabel?: string;
}

// Primary = filled lime, inverts to black+lime on hover (matches the existing Impulsa CTA).
// Secondary = outlined, fills to canvas on hover.
export function CtaButton({ href, children, variant = 'primary', className = '', ariaLabel }: CtaButtonProps) {
  const isPrimary = variant === 'primary';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`group inline-flex items-center gap-2 font-sans font-bold uppercase tracking-[0.12em] text-[13px] px-8 py-4 rounded transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black ${
        isPrimary
          ? 'bg-brand-accent text-brand-black hover:bg-brand-black hover:text-brand-accent'
          : 'bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-white'
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
  return <p className="mt-3 font-sans text-[13px] text-brand-gray tracking-[0.01em]">{children}</p>;
}
