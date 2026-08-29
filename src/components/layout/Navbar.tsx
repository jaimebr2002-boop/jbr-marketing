import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BRAND_NAME, POSITIONING, calLinkWithCampaign } from '../../config/brand';
import { navLinks } from '../../content/copy';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Anchor links (e.g. "#metodo") only make sense on the home page — same-page
  // smooth scroll there, or navigate to "/#anchor" from anywhere else so the
  // hash still resolves once HomePage mounts (see useRouteScroll).
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (isHome) {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${targetId}`);
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header
      className="fixed top-0 w-full z-[999] backdrop-blur-md border-b border-brand-border"
      style={{ backgroundColor: 'color-mix(in srgb, var(--canvas-alt) 92%, transparent)' }}
    >
      <div className="w-full h-20 max-w-[1440px] mx-auto px-6 md:px-8 flex justify-between items-center relative">
        <a href="/" onClick={handleBrandClick} className="flex flex-col leading-none group">
          <span className="font-serif font-bold text-ink text-[19px] md:text-[18px]">{BRAND_NAME}</span>
          <span className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.14em] text-ink-secondary mt-0.5">
            {POSITIONING}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-ink-secondary hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-ink-secondary hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
          <ThemeToggle />
          <a
            href={calLinkWithCampaign('navbar')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] uppercase tracking-[0.1em] bg-surface-inverse text-white px-[18px] py-[9px] rounded hover:bg-brand-accent hover:text-accent-ink transition-colors duration-300"
          >
            Reserva tu diagnóstico &rarr;
          </a>
        </nav>

        {/* Mobile: theme toggle + persistent mini-CTA + hamburger — conversion never hidden behind the menu */}
        <div className="md:hidden flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={calLinkWithCampaign('navbar-mobile-mini')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] uppercase tracking-[0.06em] bg-surface-inverse text-white px-3 py-2 rounded"
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
            <span className={`w-5 h-0.5 bg-ink transition-transform duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-5 h-0.5 bg-ink transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-ink transition-transform duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown — aria-hidden + tabIndex=-1 while closed so the collapsed
          (0-height) links can't still be reached by keyboard/screen-reader nav. */}
      <div
        id="mobile-nav"
        aria-hidden={!isOpen}
        className="md:hidden overflow-hidden transition-all duration-300 bg-canvas-alt"
        style={{
          borderBottom: isOpen ? '1px solid var(--border-clr)' : 'none',
          maxHeight: isOpen ? '480px' : '0px',
        }}
      >
        <nav className="flex flex-col px-8 py-6" aria-label="Navegación móvil">
          {navLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm uppercase tracking-[0.08em] text-ink py-3.5 border-b border-brand-border"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={isHome ? link.href : `/${link.href}`}
                tabIndex={isOpen ? 0 : -1}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-sans text-sm uppercase tracking-[0.08em] text-ink py-3.5 border-b border-brand-border"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href={calLinkWithCampaign('navbar-mobile')}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            className="mt-3 inline-block text-center font-sans text-sm uppercase tracking-[0.08em] bg-surface-inverse text-white px-5 py-3 rounded"
          >
            Reserva tu diagnóstico gratuito &rarr;
          </a>
        </nav>
      </div>
    </header>
  );
}
