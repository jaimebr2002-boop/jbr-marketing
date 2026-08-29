import React from 'react';

interface LogoTileProps {
  src: string;
  alt: string;
  className?: string;
}

// One consistent visual system for every third-party logo on the site (tools
// marquee today, client logos later): a fixed-height, width-capped box with
// object-fit: contain and centered content. Any logo asset — regardless of how
// much transparent padding or how different an aspect ratio its own file has —
// ends up presenting at the same visual size as its neighbours, because the
// *container* defines the scale, not the image's own canvas. Always full
// color: no grayscale/opacity treatment (logos should stay true to brand).
export function LogoTile({ src, alt, className = '' }: LogoTileProps) {
  return (
    <div className={`group flex items-center justify-center h-9 md:h-10 w-[104px] md:w-[120px] shrink-0 px-2 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
}

// Same footprint as LogoTile (so a marquee mixing real and pending logos keeps
// its rhythm), for a tool that's confirmed but whose logo file hasn't been
// supplied yet — an honest "coming soon" slot instead of a fabricated mark.
// Swap it for <LogoTile src={realAsset} alt={name} /> the moment the asset
// arrives; nothing else about the surrounding marquee needs to change.
export function PendingLogoTile({ name, className = '' }: { name: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center h-9 md:h-10 w-[104px] md:w-[120px] shrink-0 px-2 ${className}`}
      title={`${name} — logo pendiente de incorporar`}
    >
      <span className="w-full text-center rounded border border-dashed border-brand-border px-2 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.04em] text-ink-tertiary leading-tight">
        {name}
      </span>
    </div>
  );
}
