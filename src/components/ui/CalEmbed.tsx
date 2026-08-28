import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Cal?: any;
  }
}

const CAL_LINK_PATH = 'jaime-bernaldez-reina/30min';

// Cal.com's official inline embed, loaded lazily (only once this section is
// actually near the viewport) rather than eagerly on page load — a visitor who
// never scrolls this far never pays for the extra script.
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

// The Cal target div is never given React-managed children — Cal's script injects
// an iframe into it directly, and letting React also try to render/remove children
// there causes DOM-reconciliation errors. The loading state renders as a sibling
// overlay instead, so React only ever toggles that overlay's presence.
export function CalEmbed() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
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
    <div ref={wrapperRef} className="relative w-full min-h-[560px] rounded-xl border border-brand-border bg-surface overflow-hidden">
      <div id="cal-inline-embed" className="w-full h-full min-h-[560px]" />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface pointer-events-none">
          <p className="font-sans text-sm text-ink-tertiary">Cargando calendario…</p>
        </div>
      )}
    </div>
  );
}
