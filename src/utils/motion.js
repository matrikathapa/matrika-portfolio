import { useReducedMotion } from 'motion/react';

/**
 * Matrika Portfolio — Shared Motion System
 * 
 * Educational Notes:
 * 1. Restrained Easing:
 *    Uses a smooth cubic-bezier curve [0.25, 0.1, 0.25, 1.0] for a cozy,
 *    bookish, tactile feel rather than bouncy or aggressive motion.
 * 2. Single-Fire Viewport:
 *    Ensures all scroll entrances trigger exactly once per page visit
 *    and remain visible when the user scrolls away and returns.
 * 3. Accessibility:
 *    Integrates with `useReducedMotion()` so users who prefer reduced motion
 *    receive instant, un-animated displays without layout shifts or delays.
 */

export const EASE_COZY = [0.22, 1, 0.36, 1];

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.2,
};

export const VIEWPORT_EARLY = {
  once: true,
  amount: 0.15,
};

// Noticeable fade-up entrance variant (24–36px movement, elegant deceleration)
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.65,
      delay: custom.delay || 0,
      ease: EASE_COZY,
    },
  }),
};

// Subtle fade-in variant (no movement)
export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: EASE_COZY,
    },
  }),
};

// Scale-up entrance variant (for cosmic / visual stages)
export const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 28 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.75,
      delay: custom.delay || 0,
      ease: EASE_COZY,
    },
  }),
};

// Slide in from left
export const slideLeftVariant = {
  hidden: { opacity: 0, x: -36 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: EASE_COZY,
    },
  }),
};

// Slide in from right (e.g. contact torn paper note)
export const slideRightVariant = {
  hidden: { opacity: 0, x: 36 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: EASE_COZY,
    },
  }),
};

// Container stagger
export const staggerContainerVariant = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Custom hook to get reduced motion state with helper for Motion props.
 * When reduced motion is preferred, initial={false} allows components
 * to mount in their final visible state immediately.
 */
export function useMotionConfig() {
  const shouldReduce = useReducedMotion();
  return {
    shouldReduce,
    // When true, initial={false} mounts components immediately in final 'visible' state
    initialProp: (hiddenName = 'hidden') => (shouldReduce ? false : hiddenName),
    viewportConfig: VIEWPORT_ONCE,
  };
}
