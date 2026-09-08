import React, { useState } from 'react';
import { whatsappLink } from '../../config/brand';

// Floating WhatsApp entry point — a secondary conversation channel, never a
// replacement for the primary diagnostic CTA (cal.com).
//
// Pinned to the left (mirrored from the original right-side placement):
// the GoHighLevel chat widget (index.html) loads its own bubble in the
// default bottom-right corner, and that isn't configurable from here, so
// this moved to the opposite corner instead of guessing a vertical offset
// that could still collide with it.
export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed z-[998] left-4 md:left-6"
      style={{ bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))' }}
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp a Jaime Bernáldez"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface-inverse text-brand-accent shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
      >
        <span className="absolute inset-0 rounded-full animate-wa-pulse" aria-hidden="true" />
        <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 relative" />

        {/* Desktop hover tooltip — flipped to open rightward now that the
            button sits on the left edge, so it never runs off-screen. */}
        <span
          role="tooltip"
          className={`hidden md:block absolute left-full ml-3 whitespace-nowrap rounded bg-surface-inverse text-white text-xs font-sans px-3 py-2 transition-opacity duration-200 ${
            showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          Escríbeme por WhatsApp
        </span>
      </a>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.15c-1.6 0-3.14-.43-4.48-1.24l-.32-.19-3.12.82.83-3.04-.21-.31A8.15 8.15 0 1 1 20.19 12c0 4.5-3.66 8.15-8.15 8.15Zm4.47-6.1c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.46-.29Z" />
    </svg>
  );
}
