import React from 'react';
import { Marquee } from '../ui/Marquee';
import { LogoTile } from '../ui/LogoTile';
import higgsfield from '../../assets/tools/higgsfield.png';
import n8n from '../../assets/tools/n8n.png';
import claude from '../../assets/tools/claude.png';
import chatgpt from '../../assets/tools/chatgpt.png';
import gohighlevel from '../../assets/tools/gohighlevel.png';
import retell from '../../assets/tools/retell.png';
import nanobanana from '../../assets/tools/nanobanana.png';

// Only real assets are used here (see /PAGINA WEB in the project) — no stock
// logos, and no "Make" tile since that logo file wasn't found among the
// provided assets. Every entry appears exactly once — the Marquee component
// duplicates the *rendered track* for its infinite-loop illusion, but the
// underlying data list itself must never contain the same tool twice.
//
// To add the next tool: drop its logo file in src/assets/tools/, import it
// above, and add one { name, src } entry below. The current count is 7
// (odd) only because that 8th tool hasn't been supplied yet — adding it
// brings this back to the even count the design calls for.
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
          <div key={tool.name}>
            <LogoTile src={tool.src} alt={tool.name} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
