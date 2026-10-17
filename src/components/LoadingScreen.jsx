import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import loadingGif from '../assets/reference/matrika_open_the_book_final_animation.gif';

/**
 * LoadingScreen Component — "Open the Book" Initial Splash Screen
 * 
 * Educational Notes:
 * 1. Initial Splash Behavior:
 *    - Covers the full viewport when the portfolio opens.
 *    - Waits for the window/app to finish loading, with a gentle minimum display
 *      duration so the shimmering animated book can be appreciated.
 *    - Smoothly fades out (700ms CSS transition) and unmounts once the portfolio is ready.
 * 2. Visual Source of Truth:
 *    - Uses `matrika_open_the_book_final_animation.gif` directly so the breathing
 *      golden book glow remains fully animated.
 *    - Hides the legacy progress bar/percentage with an exact background-matched patch.
 * 3. Sequential Pulse Dots:
 *    - Renders three tiny golden dots underneath "Opening my space..." that pulse
 *      sequentially (dot 1 → dot 2 → dot 3 → repeat) using pure CSS keyframes.
 * 4. Day & Evening Theme Adaptation:
 *    - DAY: Warm cream background (#f5eee3), dark warm text, golden dots (#e09f3e).
 *    - EVENING: Dark twilight palette (#191224), warm golden book glow, golden dots (#ffd166).
 */
export default function LoadingScreen() {
  const { theme } = useTheme();
  const isEvening = theme === 'evening';

  const [isReady, setIsReady] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    let minTimerDone = false;
    let pageLoaded = typeof document !== 'undefined' && document.readyState === 'complete';

    const checkReady = () => {
      if (minTimerDone && pageLoaded) {
        setIsReady(true);
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('matrika-loading-complete'));
        }
      }
    };

    // Minimum display time (1300ms) for a cozy, unhurried opening feel
    const minTimer = setTimeout(() => {
      minTimerDone = true;
      checkReady();
    }, 1300);

    const handleLoad = () => {
      pageLoaded = true;
      checkReady();
    };

    if (!pageLoaded && typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minTimer);
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  // Fade out smoothly and unmount from the DOM
  useEffect(() => {
    if (isReady) {
      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 700);
      return () => clearTimeout(unmountTimer);
    }
  }, [isReady]);

  if (!shouldRender) return null;

  return (
    <aside
      id="portfolio-loading-screen"
      aria-label="Loading Matrika Portfolio"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden transition-opacity duration-700 ease-in-out ${
        isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${isEvening ? 'bg-[#191224]' : 'bg-[#f5eee3]'}`}
    >
      {/* Central Illustration Artboard Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] aspect-[1672/941] flex items-center justify-center px-4">
        {/* Animated Open-the-Book Artwork */}
        <img
          src={loadingGif}
          alt="Matrika - Opening the Book"
          className={`w-full h-full object-contain pointer-events-none transition-all duration-500 ${
            isEvening
              ? 'filter invert-[0.92] hue-rotate-180 brightness-105 contrast-110'
              : ''
          }`}
          loading="eager"
        />

        {/* 
          Overlay Patch:
          Completely covers the old progress bar line and percentage text baked into the GIF,
          replacing it with the three real animated loading dots.
        */}
        <div
          className={`absolute top-[70%] left-1/2 -translate-x-1/2 w-[40%] h-[8%] flex items-center justify-center transition-colors duration-500 ${
            isEvening ? 'bg-[#191224]' : 'bg-[#f5eee3]'
          }`}
          aria-hidden="true"
        >
          {/* Three Tiny Real Animated Sequential Pulse Dots */}
          <div
            className="flex items-center justify-center gap-2.5 sm:gap-3"
            role="status"
            aria-label="Loading..."
          >
            {/* Dot 1 */}
            <span
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                isEvening
                  ? 'bg-[#ffd166] shadow-[0_0_6px_rgba(255,209,102,0.6)]'
                  : 'bg-[#e09f3e] shadow-[0_0_5px_rgba(224,159,62,0.4)]'
              }`}
              style={{
                animation: 'dotPulse 1.4s ease-in-out infinite',
                animationDelay: '0s',
              }}
            />

            {/* Dot 2 */}
            <span
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                isEvening
                  ? 'bg-[#ffd166] shadow-[0_0_6px_rgba(255,209,102,0.6)]'
                  : 'bg-[#e09f3e] shadow-[0_0_5px_rgba(224,159,62,0.4)]'
              }`}
              style={{
                animation: 'dotPulse 1.4s ease-in-out infinite',
                animationDelay: '0.25s',
              }}
            />

            {/* Dot 3 */}
            <span
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                isEvening
                  ? 'bg-[#ffd166] shadow-[0_0_6px_rgba(255,209,102,0.6)]'
                  : 'bg-[#e09f3e] shadow-[0_0_5px_rgba(224,159,62,0.4)]'
              }`}
              style={{
                animation: 'dotPulse 1.4s ease-in-out infinite',
                animationDelay: '0.5s',
              }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
