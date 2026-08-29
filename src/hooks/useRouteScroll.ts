import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On every navigation: jump to top for a plain path change, or smooth-scroll to
// the target anchor when the URL carries a hash (e.g. the navbar sends a visitor
// on a service page to "/#metodo"). A short delay lets the destination page's
// content mount first so the anchor actually exists to scroll to.
export function useRouteScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash;
      const t = window.setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname, location.hash]);
}
