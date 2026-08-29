import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Observes every .reveal / .reveal-stagger element currently in the DOM and adds
// .is-visible once each enters the viewport. Re-scans on every route change (not
// just once) now that the site has multiple pages — a freshly mounted page's
// .reveal elements wouldn't otherwise get an observer at all.
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // rAF lets the new route's DOM paint before we query it.
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [location.pathname]);
}
