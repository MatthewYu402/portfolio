import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import styles from './Intro.module.css';

/*
 * React port of the original index.html + script.js intro (initAnimationPage / convertAllText).
 * Timeline (unchanged from the original):
 *   0–6s     lines flicker and sweep, blue panel + silhouette + lyrics unveil
 *   6.0s     "PLANNED BY MATTHEW YU"
 *   6.1–10.1 colour photo fades in and out
 *   6.4s     lines stop flickering and fade
 *   9.6s     "ORIGINAL CONCEPT HAJIME YATATE"
 *   12s      the intro fades out over 1.5s, revealing the page underneath
 * The Skip button (or Esc) skips with a 0.5s fade. Clicking elsewhere on the screen does nothing.
 */
const LINES_FADE_AT = 6400;
const EXIT_AT = 12000;
const EXIT_MS = 1500;
const SKIP_MS = 500;

const CREDITS = [
  { className: styles.textSet1, top: 'PLANNED BY', name: 'MATTHEW YU' },
  { className: styles.textSet2, top: 'ORIGINAL CONCEPT', name: 'HAJIME YATATE' },
];

// `|` is a line break and `*…*` toggles italics, as in the original data-convert text.
const LYRICS = [
  { className: styles.moveLeft1, text: 'Mind over matter is magic, I do magic.' },
  {
    className: styles.moveLeft4,
    text: "Haven't I locked up my failure (sailing off and ore your odd, your honour) *From the core to the sky*|Wouldn't I be last to see? (carry off and up your seas) *From the door till we die*|Deny with love my labour (carry up with love a long), Was it all I could find (atonements defined). Keep waking up high.",
  },
  { className: styles.moveLeft5, text: 'SUNKISSED SUNKISSED SUNKISSED' },
  {
    className: styles.moveLeft2,
    text: "You are sick and you're married and you might be dying. But you're holding me like water in your hands...",
  },
  {
    className: styles.moveLeft3,
    text: "No cap and gown, I ain't go to class (*Uh, yeah*) I'd rather die before I come in last. I ain't feel like this in a long time...",
  },
  {
    className: styles.moveRight1,
    text: "I'm sure we're taller another dimension, You say we're small and|not worth the mention.",
  },
  {
    className: styles.moveRight3,
    text: "Tic-toc, 'til it go away, time waits for nary man. I regret all the things we said in haste...|Knowing the golden hour awaits for me, twilight calls my name. Wrist froze, let the ice call my name too loud.",
  },
  {
    className: styles.moveRight2,
    text: 'If you can take two strangers, Leaning left and right, At a certain place and time. Like you took these strangers|And our two strange lives... And made us new... And took us through... And woke us up.',
  },
];

const FONTS = [styles.fontSpartan, styles.fontPlayfair, styles.fontMono];

/** Mirrors convertAllText(): each letter gets a rotating font and a small random tilt. */
function convertText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let isItalic = false;

  text.split('').forEach((char, charIndex) => {
    if (char === '|') {
      nodes.push(<br key={charIndex} />);
      return;
    }
    if (char === '*') {
      isItalic = !isItalic;
      return;
    }

    const fontStyle = isItalic ? 'italic' : undefined;

    if (char === ' ') {
      nodes.push(
        <span key={charIndex} className={`${styles.char} ${styles.space}`} style={{ fontStyle }}>
          {' '}
        </span>,
      );
      return;
    }

    const rotation = (Math.random() - 0.5) * 6;
    const translateY = (Math.random() - 0.5) * 8;
    const scale = 0.95 + Math.random() * 0.1;

    nodes.push(
      <span
        key={charIndex}
        className={FONTS[charIndex % FONTS.length]}
        style={{
          transform: `rotate(${rotation}deg) translateY(${translateY}px) scale(${scale})`,
          fontStyle,
        }}
      >
        {char}
      </span>,
    );
  });

  return nodes;
}

interface IntroProps {
  /** Called once the intro has fully faded out. */
  onDone: () => void;
  /** Move focus to the Skip button on mount (used when replaying from a button). */
  focusSkip?: boolean;
}

export function Intro({ onDone, focusSkip = false }: IntroProps) {
  const [linesOut, setLinesOut] = useState(false);
  const [exitMs, setExitMs] = useState<number | null>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const onDoneRef = useRef(onDone);
  const exitingRef = useRef(false);
  const doneTimer = useRef<number | undefined>(undefined);

  // Randomised once per play, like the original page load.
  const [lyrics] = useState(() => LYRICS.map((l) => ({ ...l, nodes: convertText(l.text) })));

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  const exit = useCallback((ms: number) => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    setExitMs(ms);
    doneTimer.current = window.setTimeout(() => onDoneRef.current(), ms);
  }, []);

  useEffect(() => {
    const linesTimer = window.setTimeout(() => setLinesOut(true), LINES_FADE_AT);
    const exitTimer = window.setTimeout(() => exit(EXIT_MS), EXIT_AT);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') exit(SKIP_MS);
    };
    window.addEventListener('keydown', onKey);

    // Lock page scroll while the intro covers it.
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(linesTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer.current);
      window.removeEventListener('keydown', onKey);
      root.style.overflow = prevOverflow;
    };
  }, [exit]);

  useEffect(() => {
    if (focusSkip) skipRef.current?.focus();
  }, [focusSkip]);

  const lineClass = (position: string) =>
    [styles.line, position, linesOut && styles.noFlicker, linesOut && styles.fadeOut].filter(Boolean).join(' ');

  return (
    <div
      className={`${styles.overlay} ${exitMs !== null ? styles.exiting : ''}`}
      style={exitMs !== null ? ({ '--exit-ms': `${exitMs}ms` } as CSSProperties) : undefined}
      role="dialog"
      aria-modal="true"
      aria-label="Intro animation"
    >
      <div className={styles.animationContainer} aria-hidden="true">
        <div className={lineClass(styles.lineTop!)} />
        <div className={lineClass(styles.lineBottom!)} />
        <div className={lineClass(styles.lineLeft!)} />
        <div className={lineClass(styles.lineRight!)} />
        <div className={styles.blueBackground} />
        <div className={styles.revealImage} />
        <div className={styles.fadeInImage} />
      </div>

      <div className={styles.authorAnimationContainer}>
        {CREDITS.map((credit) => (
          <div key={credit.top} className={credit.className}>
            <div className={styles.topText}>{credit.top}</div>
            <div className={styles.bottomText} aria-label={credit.name}>
              {credit.name.split('').map((ch, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={ch === ' ' ? `${styles.char} ${styles.space}` : styles.char}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.movingTextContainer} aria-hidden="true">
        {lyrics.map((l) => (
          <div key={l.className} className={`${styles.movingText} ${l.className}`}>
            {l.nodes}
          </div>
        ))}
      </div>

      <button
        ref={skipRef}
        type="button"
        className={styles.skip}
        aria-label="Skip intro"
        onClick={() => exit(SKIP_MS)}
      >
        Skip intro <span aria-hidden="true">▶▶</span>
      </button>
    </div>
  );
}
