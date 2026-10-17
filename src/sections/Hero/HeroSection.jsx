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
 *    - Removed rounded outer card and borders so the room artwork immerses the visitor.
 * 2. Subtle Pointer Depth Interaction:
 *    - Micro-parallax responds to cursor position (max 4-6px) without heavy animation libraries.
 *    - Respects `prefers-reduced-motion` for accessibility.
 * 3. Composition Overlay:
 *    - HeroIntro sits over the left side of the room, while RoomCanvas fills the full viewport.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Matrika Introduction & Creative Workspace"
      className="relative w-full min-h-[100svh] h-[100svh] flex items-center justify-center overflow-hidden bg-[#14080a] select-none"
    >
      {/* 1. Full-Screen Edge-to-Edge Illustrated Room Canvas */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        <RoomCanvas />
      </div>

      {/* 2. Hero Introduction Content Overlay */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center pointer-events-none">
        <div className="pointer-events-auto max-w-xl py-12 pt-20">
          <HeroIntro />
        </div>
      </div>
    </section>
  );
}
