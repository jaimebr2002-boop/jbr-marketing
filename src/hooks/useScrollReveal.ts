import { useEffect } from 'react';

// Observes every .reveal / .reveal-stagger element currently in the DOM and adds
// .is-visible once each enters the viewport. Runs once per full page render since
// this is a single static landing page (no client-side routing).
export function useScrollReveal() {
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

    const elements = document.querySelectorAll('.reveal, .reveal-stagger');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
