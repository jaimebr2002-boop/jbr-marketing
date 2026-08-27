import React from 'react';
import { NEW_BRAND_NAME, CONSULTANT, CONTACT, calLinkWithCampaign } from '../../config/brand';
import { footer, navLinks } from '../../content/copy';
import { CtaButton, CtaMicrocopy } from '../ui/Button';

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 md:gap-8">
          <div>
            <p className="font-serif font-bold text-2xl">{NEW_BRAND_NAME}</p>
            <p className="mt-3 font-sans text-sm text-white/60 max-w-xs">{footer.microtext}</p>
            <p className="mt-6 font-sans text-sm text-white/80">
              {CONSULTANT.name}
              <br />
              <span className="text-white/60">{CONSULTANT.role}</span>
            </p>
          </div>

          <nav aria-label="Mapa del sitio">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 mb-4">Navegación</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm text-white/70 hover:text-brand-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 mb-4">Contacto</p>
            <ul className="flex flex-col gap-2.5 font-sans text-sm text-white/70">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-accent transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneE164}`} className="hover:text-brand-accent transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <CtaButton href={calLinkWithCampaign('footer')}>Reserva tu diagnóstico gratuito</CtaButton>
            <CtaMicrocopy>15 minutos directamente con Jaime.</CtaMicrocopy>
          </div>
          <p className="font-sans text-xs text-white/40">
            © {new Date().getFullYear()} {NEW_BRAND_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
