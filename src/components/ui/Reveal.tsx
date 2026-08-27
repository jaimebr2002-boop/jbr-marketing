import React from 'react';

interface RevealProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

// Fades + rises an element into view on scroll (see .reveal in index.css).
// Registration with the IntersectionObserver happens once in App via useScrollReveal.
export function Reveal({ as: Tag = 'div', className = '', children }: RevealProps) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}

interface RevealStaggerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

// Same as Reveal, but staggers direct children in on entry (see .reveal-stagger).
export function RevealStagger({ as: Tag = 'div', className = '', children }: RevealStaggerProps) {
  return <Tag className={`reveal-stagger ${className}`}>{children}</Tag>;
}
