import React from 'react';
import type { Theme } from '../../hooks/useTheme';

// Sun/moon toggle. Deliberately not a text label ("Day"/"Night") per the brief —
// a small icon switch that mirrors the CTA buttons' rounded/pill language.
//
// Takes theme/onToggle as props rather than calling useTheme() itself: Navbar
// renders two of these at once (desktop nav + mobile bar, swapped by a CSS
// breakpoint — both stay mounted), and useTheme() holds its flag in local
// useState, so two independent hook calls could desync (one instance updates
// on click, the other — hidden by CSS, not unmounted — never re-renders and
// keeps showing the stale icon/position until a full remount). A single
// useTheme() call in Navbar, passed down, keeps one source of truth.
interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}

export function ThemeToggle({ theme, onToggle, className = '' }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    // The switch itself stays visually compact (42x24, the size that reads as
    // a toggle rather than a button), but the tappable button around it is a
    // full 44x44px box — confirmed the visual-size-as-hitbox version measured
    // well under the touch-target minimum on the live mobile layout.
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
      title={isDark ? 'Modo día' : 'Modo noche'}
      className={`relative inline-flex items-center justify-center w-11 h-11 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent rounded-full ${className}`}
    >
      <span className="relative inline-flex items-center w-[42px] h-[24px] rounded-full border border-brand-border bg-canvas-alt transition-colors duration-300">
        <span
          className="absolute top-[2px] left-[2px] w-[18px] h-[18px] rounded-full bg-surface shadow-sm flex items-center justify-center transition-transform duration-300 ease-out"
          style={{ transform: isDark ? 'translateX(18px)' : 'translateX(0)' }}
          aria-hidden="true"
        >
          {isDark ? <MoonIcon className="w-3 h-3 text-ink-secondary" /> : <SunIcon className="w-3 h-3 text-ink-secondary" />}
        </span>
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
