import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  /** Plain text preceding the emphasised phrase. Use \n for a manual line break. */
  headlinePre?: string;
  /** Phrase rendered in the Newsreader italic accent — reserve for the one "finding" per section. */
  headlineEmphasis?: string;
  /** Use instead of headlinePre/headlineEmphasis when a heading has no emphasis phrase. */
  headline?: string;
  subhead?: string;
  as?: 'h1' | 'h2';
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  kicker,
  headlinePre,
  headlineEmphasis,
  headline,
  subhead,
  as: Tag = 'h2',
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`reveal max-w-3xl ${alignClass} ${className}`}>
      {kicker && (
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink-secondary mb-4">{kicker}</p>
      )}
      <Tag className="font-sans font-bold text-ink leading-[1.1] text-[clamp(1.9rem,4vw,2.75rem)] text-balance">
        {headline
          ? headline
          : (
            <>
              {headlinePre?.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
              {headlineEmphasis && <em className="font-serif italic font-medium">{headlineEmphasis}</em>}
            </>
          )}
      </Tag>
      {subhead && <p className="mt-5 font-sans text-[1.0625rem] leading-relaxed text-ink-secondary max-w-xl">{subhead}</p>}
    </div>
  );
}
