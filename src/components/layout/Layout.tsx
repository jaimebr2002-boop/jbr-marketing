import React from 'react';
import { Outlet } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useRouteScroll } from '../../hooks/useRouteScroll';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

// Persistent shell across every route — only the <Outlet/> content swaps.
export function Layout() {
  useScrollReveal();
  useRouteScroll();

  return (
    <div className="min-h-screen flex flex-col bg-grain font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
