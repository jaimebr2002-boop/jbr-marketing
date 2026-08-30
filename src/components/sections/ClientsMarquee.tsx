import React from 'react';
import { Marquee } from '../ui/Marquee';
import { LogoTile } from '../ui/LogoTile';
import { clients } from '../../content/clients';

// No client logos exist yet — see src/content/clients.ts. This renders a discreet,
// clearly-a-placeholder state instead of inventing names/logos. The moment
// `clients` gets populated, the same marquee treatment used for tools/logos
// (infinite loop, fade edges, pause on hover) takes over automatically.
export function ClientsMarquee() {
  return (
    <section id="casos" className="w-full bg-canvas py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center reveal">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-4">Casos y clientes</p>
        <h2 className="font-sans font-bold text-ink text-[clamp(1.6rem,3.5vw,2.25rem)]">Preparado para casos reales.</h2>
        <p className="mt-4 font-sans text-ink-secondary leading-relaxed max-w-lg mx-auto">
          Todavía no hay clientes ni casos publicados bajo este posicionamiento. En cuanto existan, con su
          autorización explícita, aparecerán aquí — con nombre y resultado real, nunca inventados.
        </p>
      </div>

      {clients.length > 0 ? (
        <div className="mt-12">
          {/* Same LogoTile system as ToolsMarquee: consistent visual size across
              logos regardless of each file's own padding/aspect ratio, always
              full color (never grayscale), no duplicate entries in `clients`. */}
          <Marquee ariaLabel="Logos de clientes" durationSeconds={26}>
            {clients.map((client) =>
              client.url ? (
                <a key={client.name} href={client.url} target="_blank" rel="noopener noreferrer" aria-label={client.name}>
                  <LogoTile src={client.logo} alt={client.name} />
                </a>
              ) : (
                <div key={client.name}>
                  <LogoTile src={client.logo} alt={client.name} />
                </div>
              )
            )}
          </Marquee>
        </div>
      ) : (
        <div className="mt-10 max-w-3xl mx-auto px-6 grid grid-cols-3 sm:grid-cols-5 gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="reveal aspect-[3/2] rounded-card border border-dashed border-brand-border flex items-center justify-center"
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.08em] text-ink-tertiary">Logo próximamente</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
