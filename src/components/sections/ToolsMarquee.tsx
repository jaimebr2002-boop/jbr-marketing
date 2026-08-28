import React from 'react';
import { Marquee } from '../ui/Marquee';
import higgsfield from '../../assets/tools/higgsfield.png';
import n8n from '../../assets/tools/n8n.png';
import claude from '../../assets/tools/claude.png';
import chatgpt from '../../assets/tools/chatgpt.png';
import gohighlevel from '../../assets/tools/gohighlevel.png';
import retell from '../../assets/tools/retell.png';
import nanobanana from '../../assets/tools/nanobanana.png';

// Only real assets are used here (see /PAGINA WEB in the project) — no stock logos,
// and no "Make" tile since that logo file wasn't found among the provided assets.
const TOOLS = [
  { name: 'Higgsfield', src: higgsfield },
  { name: 'n8n', src: n8n },
  { name: 'Claude AI', src: claude },
  { name: 'ChatGPT', src: chatgpt },
  { name: 'GoHighLevel', src: gohighlevel },
  { name: 'Retell AI', src: retell },
  { name: 'Nano Banana', src: nanobanana },
];

export function ToolsMarquee() {
  return (
    <section aria-label="Herramientas y plataformas con las que trabajo" className="w-full bg-canvas py-10 md:py-12 border-y border-brand-border">
      <p className="reveal text-center font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-7">
        Trabajamos con las herramientas que tu negocio necesita
      </p>
      <Marquee ariaLabel="Herramientas y plataformas: Higgsfield, n8n, Claude AI, ChatGPT, GoHighLevel, Retell AI, Nano Banana" durationSeconds={30}>
        {TOOLS.map((tool) => (
          <div key={tool.name} className="flex items-center justify-center h-10 md:h-11 px-8 md:px-10 shrink-0">
            <img
              src={tool.src}
              alt={tool.name}
              // Not lazy: these sit inside a continuously CSS-transformed marquee,
              // so native lazy-loading (viewport-intersection based) sees copies
              // as "off-screen" mid-slide and pops them in blank while animating.
              // The full set is ~230KB, small enough to just load eagerly.
              className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
