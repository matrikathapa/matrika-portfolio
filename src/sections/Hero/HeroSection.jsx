import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import RoomCanvas from './RoomCanvas';
import HeroIntro from './HeroIntro';

/**
 * HeroSection Component
 * 
 * The primary visual centerpiece of Matrika's portfolio.
 * 
 * Educational Notes:
 * 1. Full-Screen Viewport Architecture:
 *    - Width: 100% (edge-to-edge, zero outer margins).
 *    - Height: min-height 100svh (fills the screen naturally).
 *    - Preserves room artwork immersion without stretching or distorting.
 * 2. Cinematic Scroll Exit:
 *    - Uses `useScroll` and `useTransform` to gracefully lift foreground content (-85px)
 *      and background canvas (-30px) creating multi-plane depth as visitors scroll down.
 *    - Respects `prefers-reduced-motion` for accessibility.
 * 3. Composition Overlay:
 *    - HeroIntro sits over the left side of the room, while RoomCanvas fills the full viewport.
 */
export default function HeroSection() {
  const heroRef = useRef(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Foreground content moves upward and fades gracefully on scroll-away
  const contentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.7, shouldReduce ? 1 : 0]);

  // Background room canvas has a subtle slower parallax to establish depth
  const bgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -30]);

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="Matrika Introduction & Creative Workspace"
      className="relative w-full min-h-[100svh] h-[100svh] flex items-center justify-center overflow-hidden bg-[#14080a] select-none"
    >
      {/* 1. Full-Screen Edge-to-Edge Illustrated Room Canvas */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full pointer-events-auto"
      >
        <RoomCanvas />
      </motion.div>

      {/* 2. Hero Introduction Content Overlay */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center pointer-events-none"
      >
        <div className="pointer-events-auto max-w-xl py-12 pt-20">
          <HeroIntro />
        </div>
      </motion.div>
    </section>
  );
}
