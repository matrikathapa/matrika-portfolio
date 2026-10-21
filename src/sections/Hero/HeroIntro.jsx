import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE_COZY } from '../../utils/motion';

/**
 * HeroIntro Component
 * 
 * Renders Matrika's introduction, headline, action buttons, and social links.
 * 
 * Educational Notes:
 * 1. Semantic HTML: Uses <h1> for the developer name, proper <p> elements, and
 *    meaningful anchor links (<a href="#projects">).
 * 2. Pure Inline SVGs: GitHub, LinkedIn, Twitter/X, and Instagram icons are built with
 *    zero external dependencies, ensuring maximum speed, tree-shaking, and custom styling.
 * 3. Smooth Navigation: Primary action buttons trigger smooth scrolling directly
 *    to the relevant sections on the page.
 * 4. Restrained Staggered Entrance: Coordinates with LoadingScreen completion.
 *    Order: 1. Greeting -> 2. Headline -> 3. Tagline & Bio -> 4. Action buttons -> 5. Socials.
 *    Respects `prefers-reduced-motion` for instant accessibility.
 */
export default function HeroIntro({ className = '' }) {
  const shouldReduce = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(() => {
    if (typeof document !== 'undefined' && !document.getElementById('portfolio-loading-screen')) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isLoaded) return;
    const handleLoaded = () => setIsLoaded(true);
    window.addEventListener('matrika-loading-complete', handleLoaded);
    const fallbackTimer = setTimeout(() => setIsLoaded(true), 1500);
    return () => {
      window.removeEventListener('matrika-loading-complete', handleLoaded);
      clearTimeout(fallbackTimer);
    };
  }, [isLoaded]);

  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: customDelay,
        ease: EASE_COZY,
      },
    }),
  };

  return (
    <div
      className={`flex flex-col justify-center space-y-4 sm:space-y-5 text-left select-none ${className}`}
    >
      {/* 1. Script Greeting matching reference */}
      <motion.div
        variants={itemVariant}
        initial={shouldReduce ? false : 'hidden'}
        animate={isLoaded ? 'visible' : 'hidden'}
        custom={0.08}
        className="flex items-center gap-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
      >
        <span className="font-serif italic text-xl sm:text-2xl text-[#e09f3e] tracking-wide">
          Hello,
        </span>
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-[#e09f3e] fill-current"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </motion.div>

      {/* 2. Main Name Heading */}
      <motion.h1
        variants={itemVariant}
        initial={shouldReduce ? false : 'hidden'}
        animate={isLoaded ? 'visible' : 'hidden'}
        custom={0.22}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none font-sans drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
      >
        I’m Matrika.
      </motion.h1>

      {/* 3. Professional Tagline & Narrative Bio */}
      <motion.div
        variants={itemVariant}
        initial={shouldReduce ? false : 'hidden'}
        animate={isLoaded ? 'visible' : 'hidden'}
        custom={0.36}
        className="space-y-3"
      >
        <p className="text-sm sm:text-base md:text-lg font-semibold text-[#e09f3e] leading-snug tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
          Front-End Developer &amp; Creative Problem Solver.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-amber-100/90 leading-relaxed max-w-md font-sans drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
          I build beautiful, responsive and user-friendly web experiences that make an impact.
        </p>
      </motion.div>

      {/* 4. Action Buttons matching reference pill buttons */}
      <motion.div
        variants={itemVariant}
        initial={shouldReduce ? false : 'hidden'}
        animate={isLoaded ? 'visible' : 'hidden'}
        custom={0.50}
        className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
      >
        {/* Primary Action Button: View My Work */}
        <a
          href="#projects"
          onClick={(e) => handleScrollTo(e, 'projects')}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ea7a32] to-[#e09f3e] text-white font-medium text-xs sm:text-sm shadow-lg shadow-[#ea7a32]/25 hover:shadow-[#ea7a32]/40 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd166] cursor-pointer"
        >
          <span>View My Work</span>
          <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Secondary Action Button: Get In Touch */}
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, 'contact')}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1b0c0e]/60 hover:bg-[#1b0c0e]/90 text-white border border-white/20 hover:border-amber-400/60 font-medium text-xs sm:text-sm active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd166] cursor-pointer backdrop-blur-sm"
        >
          <span>Get In Touch</span>
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </a>
      </motion.div>

      {/* 5. Social Links Row */}
      <motion.div
        variants={itemVariant}
        initial={shouldReduce ? false : 'hidden'}
        animate={isLoaded ? 'visible' : 'hidden'}
        custom={0.64}
        className="pt-3 sm:pt-4 space-y-2"
      >
        <span className="block text-[11px] uppercase tracking-widest text-amber-200/60 font-semibold">
          Find me on
        </span>
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Matrika on GitHub"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-amber-400/60 flex items-center justify-center text-amber-100 hover:text-white transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd166]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Matrika on LinkedIn"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-amber-400/60 flex items-center justify-center text-amber-100 hover:text-white transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd166]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Twitter / X */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Matrika on Twitter"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-amber-400/60 flex items-center justify-center text-amber-100 hover:text-white transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd166]"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
