import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

const CAL_LINK_PATH = 'jaime-bernaldez-reina/30min';
const CAL_FALLBACK_URL = `https://cal.com/${CAL_LINK_PATH}`;

// Cal.com's official inline embed, loaded lazily via scroll proximity — the
// calendar is always visible once you reach this section (no click needed),
// but the ~heavy embed script + iframe still only load once the section is
// actually about to enter view, not on initial page load. Nobody who never
// scrolls this far pays for it.
//
// onLoadError fires if the injected <script> itself fails (ad-blocker,
// offline, cal.com outage) — previously nothing listened for this at all,
// so a blocked script just left a permanently empty box with no explanation.
function loadCalScript(onLoadError: () => void) {
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
          const script = d.createElement('script');
          script.src = A;
          script.onerror = onLoadError;
          d.head.appendChild(script);
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
// experience: a height-capped, internally-scrollable card in our own design
// — never an iframe left free to grow to its native ~1800px.
export function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    try {
      // Read the page's actual theme instead of hardcoding 'light', so the
      // calendar doesn't render as a bright white box inside a dark-mode
      // section — same fallback logic index.html's inline script already
      // uses to pick an initial theme.
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      loadCalScript(() => setLoadError(true));
      window.Cal!('inline', {
        elementOrSelector: '#cal-inline-embed',
        calLink: CAL_LINK_PATH,
        config: { layout: 'month_view' },
      });
      window.Cal!('ui', {
        theme: isDark ? 'dark' : 'light',
        styles: { branding: { brandColor: isDark ? '#C3FF33' : '#B4FF00' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
      // Cal's own "linkReady" event fires once the iframe has actually
      // painted — a real signal instead of guessing a fixed delay, which
      // either wastes time on a fast connection or reveals the placeholder
      // too early on a slow one. A timeout stays as a backstop in case the
      // event is ever missed, so the placeholder can't hang forever.
      window.Cal!('on', { action: 'linkReady', callback: () => setReady(true) });
      const t = window.setTimeout(() => setReady(true), 4000);
      return () => window.clearTimeout(t);
    } catch {
      setLoadError(true);
    }
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="relative w-full max-h-[640px] overflow-y-auto overflow-x-hidden rounded-panel border border-brand-border bg-surface">
      {/* The Cal target div is never given React-managed children — Cal's script
          injects an iframe into it directly, and letting React also try to
          render/remove children there causes DOM-reconciliation errors. */}
      <div id="cal-inline-embed" className="w-full min-h-[560px]" />
      {!ready && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface pointer-events-none">
          <p className="font-sans text-sm text-ink-tertiary">Cargando calendario…</p>
        </div>
      )}
      {loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface text-center px-6">
          <p className="font-sans text-sm text-ink-secondary max-w-xs">
            No se ha podido cargar el calendario. Puedes reservar directamente aquí:
          </p>
          <a
            href={CAL_FALLBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-ink underline underline-offset-4 decoration-brand-accent decoration-2"
          >
            Abrir cal.com &rarr;
          </a>
        </div>
      )}
    </div>
  );
}
