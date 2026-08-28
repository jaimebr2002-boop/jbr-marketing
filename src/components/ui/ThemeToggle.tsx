import React from 'react';
import { useTheme } from '../../hooks/useTheme';

// Sun/moon toggle. Deliberately not a text label ("Day"/"Night") per the brief —
// a small icon switch that mirrors the CTA buttons' rounded/pill language.
export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
      title={isDark ? 'Modo día' : 'Modo noche'}
      className={`relative inline-flex items-center w-[42px] h-[24px] rounded-full border border-brand-border bg-canvas-alt transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent ${className}`}
    >
      <span
        className="absolute top-[2px] left-[2px] w-[18px] h-[18px] rounded-full bg-surface shadow-sm flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ transform: isDark ? 'translateX(18px)' : 'translateX(0)' }}
        aria-hidden="true"
      >
        {isDark ? <MoonIcon className="w-3 h-3 text-ink-secondary" /> : <SunIcon className="w-3 h-3 text-ink-secondary" />}
      </span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}
