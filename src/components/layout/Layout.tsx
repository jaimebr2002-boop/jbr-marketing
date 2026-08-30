import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useRouteScroll } from '../../hooks/useRouteScroll';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

// Persistent shell across every route — only the <Outlet/> content swaps.
export function Layout() {
  useScrollReveal();
  useRouteScroll();
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // React Router doesn't manage focus on navigation by itself — without this,
  // a screen reader user who follows a nav link stays focused on the old link
  // in a page that has visually changed underneath them. Moving focus to
  // <main> (skip the hash-anchor case, where the target section itself
  // should keep it) announces "you're on a new page" the same way a full
  // page load would. No hash check here since location.hash already implies
  // we're staying on Home and scrolling, not landing on a new page.
  useEffect(() => {
    if (!location.hash) {
      mainRef.current?.focus();
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-grain font-sans">
      <Navbar />
      {/* key={pathname} remounts this wrapper on every route change, which
          restarts the page-enter animation (see .page-transition in
          index.css) — a fast fade + few-px lift so navigating between pages
          reads as fluid, not an instant hard cut. */}
      <main
        key={location.pathname}
        ref={mainRef}
        tabIndex={-1}
        className="flex-grow page-transition outline-none"
      >
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
