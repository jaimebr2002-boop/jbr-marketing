import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BRAND_NAME, calLinkWithCampaign } from '../../config/brand';
import { navLinks } from '../../content/copy';
import { ThemeToggle } from '../ui/ThemeToggle';

// Full nav (brand + all links + CTA) only fits comfortably from lg (1024px) up —
// at md (768px) that combination measurably overflowed the header width and
// wrapped/overlapped, confirmed against the live 768px layout. Tablet keeps the
// same compact header + menu pattern as mobile instead of a squeezed desktop nav.
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const shouldBeScrolled = window.scrollY > 8;
        return prev === shouldBeScrolled ? prev : shouldBeScrolled;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    // Outer layer spans the full width just to center the floating pill and to
    // host the mobile dropdown — pointer-events are re-enabled only on the
    // pill and the dropdown themselves, so the empty margins never block
    // clicks on the page content behind them.
    <header className="fixed top-0 inset-x-0 z-[999] pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto mt-3 sm:mt-4 max-w-[1260px] px-3 sm:px-4 transition-[margin] duration-300 ${
          scrolled ? 'mt-2 sm:mt-3' : ''
        }`}
      >
        <div
          className={`rounded-panel transition-[background-color,box-shadow] duration-300 ${
            scrolled ? 'glass-strong' : 'glass'
          }`}
        >
          {/* justify-between has no built-in minimum gap — at 1024-1280px the
              brand block and nav measured out to touching with zero space
              between them before this gap-4 was added (confirmed against the
              live 1440px layout, not just a guess). The positioning line
              ("Consultoría de IA...") used to live here as a subtitle — it
              never had room to breathe in a single-line navbar and reads far
              better as the Hero's own eyebrow line, so this is just the
              wordmark now: marca -> qué somos -> propuesta de valor lives in
              the Hero, not stacked into the nav. */}
          <div className="h-16 sm:h-[68px] px-4 sm:px-5 lg:px-7 flex justify-between items-center gap-4">
            <a href="/" onClick={handleBrandClick} className="flex items-center leading-none group shrink-0">
              <span className="font-serif font-bold text-ink text-[17px] sm:text-[18px]">{BRAND_NAME}</span>
            </a>

            {/* Desktop nav — lg+ only, see note above on why md was too tight */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Navegación principal">
              {navLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="relative font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-ink-secondary hover:text-ink transition-colors duration-200 py-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="relative font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-ink-secondary hover:text-ink transition-colors duration-200 py-2"
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
                className="font-sans text-[11px] uppercase tracking-[0.1em] bg-surface-inverse text-white px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-brand-accent hover:text-accent-ink hover:scale-[1.03] active:scale-[0.98]"
              >
                Reserva tu diagnóstico &rarr;
              </a>
            </nav>

            {/* Compact header (mobile + tablet): theme toggle + persistent mini-CTA
                + hamburger — conversion never hidden behind the menu. Every control
                here sits in a >=44px tappable box even though its visible glyph/pill
                is smaller (confirmed the previous 20x20 hamburger hitbox against the
                375px layout — well under the touch-target minimum). */}
            <div className="lg:hidden flex items-center gap-1">
              <ThemeToggle />
              <a
                href={calLinkWithCampaign('navbar-mobile-mini')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] uppercase tracking-[0.06em] bg-surface-inverse text-white px-4 py-2.5 rounded-full ml-1"
              >
                Diagnóstico
              </a>
              <button
                className="flex flex-col justify-center items-center w-11 h-11 gap-[5px] shrink-0 -mr-2"
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
        </div>

        {/* Mobile/tablet dropdown — a floating glass panel of its own, separated
            from the pill above it, not a bar stretching edge-to-edge. Scales +
            fades in rather than just growing height, and aria-hidden/tabIndex=-1
            while closed keeps the collapsed links out of keyboard/SR tab order. */}
        <div
          id="mobile-nav"
          aria-hidden={!isOpen}
          className={`lg:hidden glass-strong rounded-panel mt-2 origin-top transition-all duration-300 ease-out overflow-hidden ${
            isOpen ? 'opacity-100 scale-100 max-h-[520px]' : 'opacity-0 scale-95 max-h-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col px-3 py-3" aria-label="Navegación móvil">
            {navLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-[15px] font-medium text-ink px-3 py-3.5 rounded-control hover:bg-[color-mix(in_srgb,var(--ink)_6%,transparent)] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={isHome ? link.href : `/${link.href}`}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="font-sans text-[15px] font-medium text-ink px-3 py-3.5 rounded-control hover:bg-[color-mix(in_srgb,var(--ink)_6%,transparent)] transition-colors duration-150"
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
              className="mt-2 inline-flex items-center justify-center gap-2 text-center font-sans text-sm font-semibold uppercase tracking-[0.06em] bg-brand-accent text-accent-ink px-5 py-4 rounded-full"
            >
              Reserva tu diagnóstico gratuito &rarr;
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
