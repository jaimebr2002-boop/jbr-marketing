import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

const CAL_LINK_PATH = 'jaime-bernaldez-reina/30min';

// Cal.com's official inline embed, loaded lazily — only once the visitor
// explicitly asks to see availability (see CalEmbed below), not on page load
// or even on scroll proximity. Nobody who never clicks "Ver disponibilidad"
// pays for the script.
function loadCalScript() {
  if (window.Cal) return;
  (function (C: any, A: string, L: string) {
    const p = (a: any, ar: any) => a.q.push(ar);
    const d = C.document;
    C.Cal =
      C.Cal ||
      function (...args: any[]) {
        const cal = C.Cal;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api: any = (...a: any[]) => p(api, a);
          const namespace = args[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], args);
            p(cal, ['initNamespace', namespace]);
          } else {
            p(cal, args);
          }
          return;
        }
        p(cal, args);
      };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');

  window.Cal!('init', { origin: 'https://cal.com' });
}

// Cal.com's own hosted booking page always pre-selects the earliest available
// day and shows its times immediately below/beside the calendar — that's true
// at every layout ("month_view"/"week_view"/"column_view") and at every width,
// verified directly against the live booking page. It's not something the
// embed's config can defer, since the calendar and the time list live inside
// Cal's own cross-origin iframe. What we DO fully control is the outer
// experience: instead of an iframe that's always present and grows to ~1800px
// tall, this stays a compact card in our own design until the visitor asks to
// see availability, and even once expanded it sits in a height-capped,
// internally-scrollable box — never a giant permanently-visible calendar.
function CalLauncher({ onExpand }: { onExpand: () => void }) {
  return (
    <div className="w-full rounded-panel border border-brand-border bg-surface p-8 flex flex-col items-center text-center gap-4">
      <span className="w-12 h-12 rounded-full bg-canvas flex items-center justify-center text-ink" aria-hidden="true">
        <CalendarGlyph />
      </span>
      <div>
        <p className="font-sans font-bold text-ink">Elige el día y la hora que mejor te venga.</p>
        <p className="mt-1.5 font-sans text-[13.5px] text-ink-secondary max-w-xs mx-auto">
          Se abre el calendario en el sitio: primero el día, después las horas disponibles para ese día.
        </p>
      </div>
      <button
        type="button"
        onClick={onExpand}
        className="mt-1 font-sans font-bold uppercase tracking-[0.1em] text-[13px] px-7 py-3.5 rounded-full bg-surface-inverse text-white transition-all duration-200 hover:bg-brand-accent hover:text-accent-ink hover:scale-[1.03] active:scale-[0.98]"
      >
        Ver disponibilidad
      </button>
    </div>
  );
}

function CalendarGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
    </svg>
  );
}

export function CalEmbed() {
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    try {
      loadCalScript();
      window.Cal!('inline', {
        elementOrSelector: '#cal-inline-embed',
        calLink: CAL_LINK_PATH,
        config: { layout: 'month_view' },
      });
      window.Cal!('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#B4FF00' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
      const t = window.setTimeout(() => setReady(true), 300);
      return () => window.clearTimeout(t);
    } catch {
      setReady(false);
    }
  }, [expanded]);

  if (!expanded) {
    return <CalLauncher onExpand={() => setExpanded(true)} />;
  }

  return (
    <div className="relative w-full max-h-[640px] overflow-y-auto rounded-panel border border-brand-border bg-surface">
      {/* The Cal target div is never given React-managed children — Cal's script
          injects an iframe into it directly, and letting React also try to
          render/remove children there causes DOM-reconciliation errors. */}
      <div id="cal-inline-embed" className="w-full min-h-[560px]" />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface pointer-events-none">
          <p className="font-sans text-sm text-ink-tertiary">Cargando calendario…</p>
        </div>
      )}
    </div>
  );
}
