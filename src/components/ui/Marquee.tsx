import React, { useState } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  durationSeconds?: number;
  className?: string;
  /** Announced once for screen readers; the duplicated visual copy is hidden from them. */
  ariaLabel: string;
}

// Infinite horizontal marquee: the track renders its children twice back-to-back
// and animates translateX(-50%), so the loop point is invisible. Pointer hover
// pauses it (see .marquee-viewport:hover in index.css); a tap/click toggles pause
// on touch devices, where there's no hover to rely on.
export function Marquee({ children, durationSeconds = 32, className = '', ariaLabel }: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`marquee-viewport ${className}`}
      role="group"
      aria-label={ariaLabel}
      onClick={() => setPaused((p) => !p)}
    >
      <div
        className={`marquee-track ${paused ? 'is-paused' : ''}`}
        style={{ ['--marquee-duration' as string]: `${durationSeconds}s` }}
      >
        <div className="flex items-center" aria-hidden="false">
          {children}
        </div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
