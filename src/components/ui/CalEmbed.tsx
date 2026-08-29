import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

const CAL_LINK_PATH = 'jaime-bernaldez-reina/30min';

// Cal.com's official inline embed, loaded lazily via scroll proximity — the
// calendar is always visible once you reach this section (no click needed),
// but the ~heavy embed script + iframe still only load once the section is
// actually about to enter view, not on initial page load. Nobody who never
// scrolls this far pays for it.
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
// experience: a height-capped, internally-scrollable card in our own design
// — never an iframe left free to grow to its native ~1800px.
export function CalEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);

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
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="relative w-full max-h-[640px] overflow-y-auto rounded-panel border border-brand-border bg-surface">
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
