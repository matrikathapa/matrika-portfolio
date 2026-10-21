import { motion, useReducedMotion } from 'motion/react';
import { EASE_COZY, VIEWPORT_ONCE } from '../utils/motion';

export default function Footer() {
  const shouldReduce = useReducedMotion();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className="relative w-full overflow-hidden border-t border-[#d97732]/10 bg-[var(--bg-app)] px-6 py-10 transition-colors duration-500 sm:px-10 md:py-12">
      {/* Tiny decorations */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-7 text-xs text-[#d97732]/35">
        ✦
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-9 text-sm text-[#d97732]/30">
        ✧
      </span>

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.65, ease: EASE_COZY }}
        className="mx-auto max-w-6xl"
      >

        {/* =================================================
            MAIN FOOTER IDENTITY
        ================================================= */}

        <div className="flex flex-col items-center text-center"> 

          <span
            aria-hidden="true"
            className="mb-3 text-sm text-[#d97732]/80">
            ✦
          </span>

          <h2 className="font-hand-custom text-3xl font-bold tracking-wide text-[var(--text-main)] sm:text-4xl">
            MATRIKA
          </h2>

          <p className="mt-2 text-xs tracking-[0.08em] text-[var(--text-muted)] sm:text-sm">
            Developer • Reader • Creator
          </p>

          <p className="mt-4 font-hand-custom text-sm text-[#a05d36] dark:text-[#e8a067] sm:text-base">
            Made with curiosity &amp; a little coffee ☕
          </p>
        </div>

        {/* =================================================
            BOTTOM ROW
        ================================================= */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            gap-4
            border-t
            border-[#d97732]/10
            pt-6
            text-xs
            text-[var(--text-muted)]
            sm:flex-row
            sm:justify-between
          "
        >
          <div className="flex items-center gap-2 text-sm">
          <span>© 2026 Matrika</span>
          <span className="opacity-50">·</span>

          <span
            className="cursor-help transition-colors duration-200 hover:text-orange-400"
            title="Portfolio Release 01 — First Edition"
          > v1.0.0 </span>
          </div>

          <button
            type="button"
            onClick={handleBackToTop}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#8b6c5c]
              dark:text-[#cdbdb4]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:text-[#d97732]
              dark:hover:text-[#ffd166]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#d97732]/30
              motion-reduce:transition-none
              motion-reduce:hover:translate-y-0
            "
          >
            <span>
              Back to top
            </span>

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
              ↑
            </span>
          </button>
        </div>
      </motion.div>
    </footer>
  );
}