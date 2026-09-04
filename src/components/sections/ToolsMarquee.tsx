import React from 'react';
import { Marquee } from '../ui/Marquee';
import { LogoTile, PendingLogoTile } from '../ui/LogoTile';
import higgsfield from '../../assets/tools/higgsfield.png';
import n8n from '../../assets/tools/n8n.png';
import claude from '../../assets/tools/claude.png';
import chatgpt from '../../assets/tools/chatgpt.png';
import gohighlevel from '../../assets/tools/gohighlevel.png';
import retell from '../../assets/tools/retell.png';
import nanobanana from '../../assets/tools/nanobanana.png';
import codex from '../../assets/tools/codex.png';

// Real assets only (see /PAGINA WEB in the project) — no stock logos, and no
// "Make" tile since that logo file wasn't found among the provided assets.
// Every entry appears exactly once — the Marquee component duplicates the
// *rendered track* for its infinite-loop illusion, but the underlying data
// list itself must never contain the same tool twice.
//
// `src: null` marks a confirmed tool whose logo file hasn't been supplied
// yet: it renders as an honest "logo pendiente" slot via PendingLogoTile
// instead of a fabricated mark. To add the real asset later: drop the file
// in src/assets/tools/, import it above, and set that entry's `src` to the
// import. To add an entirely new tool: append one more { name, src } entry —
// nothing else needs to change.
//
// Claude Code dropped: "Claude AI" above already covers the brand, and
// listing both read as two logos for the same company.
//
// codex.png: the supplied source (logo codex.jfif) was a flattened JPEG with
// no alpha channel — its "transparent" background had been baked in as a
// near-white/light-gray fill (not pure white), which would show as a faint
// square behind the logo on this tile's white plate. Chroma-keyed that
// background back out (low-saturation, bright pixels → transparent) so it
// sits flush like every other logo here; the icon itself is untouched.
const TOOLS = [
  { name: 'Higgsfield', src: higgsfield },
  { name: 'n8n', src: n8n },
  { name: 'Claude AI', src: claude },
  { name: 'ChatGPT', src: chatgpt },
  { name: 'GoHighLevel', src: gohighlevel },
  { name: 'Retell AI', src: retell },
  { name: 'Nano Banana', src: nanobanana },
  { name: 'Codex', src: codex },
];

export function ToolsMarquee() {
  return (
    <section aria-label="Herramientas y plataformas con las que trabajo" className="w-full bg-surface py-10 md:py-12 border-y border-brand-border">
      <div className="max-w-2xl mx-auto px-6 text-center mb-7">
        <p className="reveal font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-tertiary mb-2">
          Siempre a la última, nunca por moda
        </p>
        <p className="reveal font-sans text-[13.5px] text-ink-secondary leading-relaxed">
          Seguimos de cerca la tecnología puntera, pero solo la incorporamos cuando es la opción más fiable y útil
          para el caso concreto — el criterio decide, no la novedad.
        </p>
      </div>
      {/* durationSeconds=58 matches desktop's larger tiles (~1.8x wider track)
          to keep the same px/s scroll speed there. Mobile uses its own,
          smaller tiles again (see LogoTile), so its speed is overridden back
          down via the .tools-marquee CSS rule in index.css instead of here —
          Marquee only takes one duration, and mobile/desktop need different
          ones for the same perceived speed. */}
      <Marquee
        ariaLabel="Herramientas y plataformas: Higgsfield, n8n, Claude AI, ChatGPT, GoHighLevel, Retell AI, Nano Banana, Codex"
        durationSeconds={58}
        className="tools-marquee"
      >
        {TOOLS.map((tool) => (
          <div key={tool.name}>
            {tool.src ? <LogoTile src={tool.src} alt={tool.name} /> : <PendingLogoTile name={tool.name} />}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
