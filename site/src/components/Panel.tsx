import type { CSSProperties, ReactNode } from 'react';

export type PanelShape = 's1' | 's2' | 's3' | 's4' | 's5' | 's6';

interface PanelProps {
  shape: PanelShape;
  children: ReactNode;
  as?: 'div' | 'article';
  /** Columns spanned in the 12-column grid. */
  span?: number;
  rowSpan?: number;
  /**
   * Hover/focus "pop": the panel scales up and an offset layer grows in behind it.
   * `strong` = red + halftone layer, `subtle` = halftone only with a smaller scale.
   */
  pop?: 'strong' | 'subtle';
  className?: string;
  innerClassName?: string;
  innerStyle?: CSSProperties;
  labelledBy?: string;
}

/**
 * Angled manga panel. The ink outer frame and white inner share one clip-path,
 * so the 4px angled border comes from the clip shape rather than a CSS border.
 */
export function Panel({
  shape,
  children,
  as: Tag = 'div',
  span,
  rowSpan,
  pop,
  className,
  innerClassName,
  innerStyle,
  labelledBy,
}: PanelProps) {
  const style: CSSProperties = {};
  if (span) style.gridColumn = `span ${span}`;
  if (rowSpan) style.gridRow = `span ${rowSpan}`;

  const classes = ['panel', pop && `panel--pop panel--${pop}`, className].filter(Boolean).join(' ');

  return (
    <Tag className={classes} style={style} aria-labelledby={labelledBy}>
      {pop && <span className={`panel__pop ${shape}`} aria-hidden="true" />}
      <div className={`panel__frame ${shape}`}>
        <div className={['panel__inner', shape, innerClassName].filter(Boolean).join(' ')} style={innerStyle}>
          {children}
        </div>
      </div>
    </Tag>
  );
}
