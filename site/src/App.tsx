import { useCallback, useEffect, useRef, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

interface IntroRun {
  key: number;
  /** True when started from the Replay button (rather than on page load). */
  replay: boolean;
}

export function App() {
  // The intro plays on every page load. The site renders underneath it straight away,
  // so when the intro fades out it crossfades into the Hero with no blank frame.
  const [intro, setIntro] = useState<IntroRun | null>({ key: 0, replay: false });
  const replayRef = useRef<HTMLButtonElement>(null);
  const replayingRef = useRef(false);

  const replayIntro = useCallback(() => {
    replayingRef.current = true;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIntro((prev) => ({ key: (prev?.key ?? 0) + 1, replay: true }));
  }, []);

  const onIntroDone = useCallback(() => setIntro(null), []);

  // After a replay, hand focus back to the button that started it. This runs after
  // the commit that removes the intro, so `inert` has already been lifted.
  useEffect(() => {
    if (intro === null && replayingRef.current) {
      replayingRef.current = false;
      replayRef.current?.focus({ preventScroll: true });
    }
  }, [intro]);

  return (
    <>
      <div className="app" inert={intro !== null}>
        <Navbar />
        <main>
          <Hero onReplayIntro={replayIntro} replayRef={replayRef} />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
      {intro && <Intro key={intro.key} onDone={onIntroDone} focusSkip={intro.replay} />}
    </>
  );
}
