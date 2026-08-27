import React, { useState } from 'react';
import { NEW_BRAND_NAME, calLinkWithCampaign } from '../../config/brand';
import { navLinks } from '../../content/copy';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 w-full z-[999]"
      style={{ backgroundColor: 'rgba(234,234,234,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}
    >
      <div className="w-full h-20 max-w-[1440px] mx-auto px-6 md:px-8 flex justify-between items-center relative">
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, '#hero')}
          className="translate-y-[2px] text-[22px] md:text-[20px] font-serif font-bold text-brand-black"
          aria-label={`${NEW_BRAND_NAME} — ir al inicio`}
        >
          {NEW_BRAND_NAME}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center mr-12 gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-brand-gray hover:text-brand-black transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={calLinkWithCampaign('navbar')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] uppercase tracking-[0.1em] bg-brand-black text-white px-[18px] py-[9px] rounded hover:bg-brand-accent hover:text-brand-black transition-colors duration-300"
          >
            Reserva tu diagnóstico gratuito &rarr;
          </a>
        </nav>

        {/* Mobile: logo + persistent mini-CTA + hamburger — conversion is never hidden behind the menu */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={calLinkWithCampaign('navbar-mobile-mini')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] uppercase tracking-[0.06em] bg-brand-black text-white px-3 py-2 rounded"
          >
            Diagnóstico
          </a>
          <button
            className="flex flex-col justify-center items-center w-5 h-5 gap-[5px] shrink-0"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={`w-5 h-0.5 bg-brand-black transition-transform duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-5 h-0.5 bg-brand-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-brand-black transition-transform duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown — mini-CTA always reachable, never hidden behind the menu.
          aria-hidden + tabIndex=-1 while closed so the collapsed (0-height) links
          can't still be reached by keyboard/screen-reader navigation. */}
      <div
        id="mobile-nav"
        aria-hidden={!isOpen}
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: '#EAEAEA',
          borderBottom: isOpen ? '1px solid rgba(0,0,0,0.08)' : 'none',
          maxHeight: isOpen ? '480px' : '0px',
        }}
      >
        <nav className="flex flex-col px-8 py-6" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="font-sans text-sm uppercase tracking-[0.08em] text-brand-black py-3.5 border-b border-black/[0.06]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={calLinkWithCampaign('navbar-mobile')}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            className="mt-3 inline-block text-center font-sans text-sm uppercase tracking-[0.08em] bg-brand-black text-white px-5 py-3 rounded"
          >
            Reserva tu diagnóstico gratuito &rarr;
          </a>
        </nav>
      </div>
    </header>
  );
}
