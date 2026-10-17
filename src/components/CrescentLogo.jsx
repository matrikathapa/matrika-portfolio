/**
 * CrescentLogo Component
 *
 * Matrika's official brand logo.
 *
 * Features:
 * - Uses the approved light and dark logo artwork.
 * - Smoothly crossfades between themes.
 * - Preserves the existing component API.
 * - Supports responsive sizing through className.
 * - Respects reduced-motion preferences.
 */

import lightLogo from '../assets/reference/light-mode-logo.png';
import darkLogo from '../assets/reference/dark-mode-logo.png';

export default function CrescentLogo({
  className = 'w-8 h-8',
  showText = false,
}) {
  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      {/* Logo container */}
      <span
        className={`
          relative inline-block shrink-0 overflow-hidden
          ${className}
          transition-transform duration-300
          ease-out hover:scale-[1.03]
          motion-reduce:transition-none
        `}
      >
        {/* Light mode logo */}
        <img
          src={lightLogo}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="
            absolute inset-0
            block h-full w-full
            object-contain

            opacity-100
            dark:opacity-0

            transition-opacity duration-[400ms]
            ease-in-out

            motion-reduce:transition-none
          "
        />

        {/* Dark mode logo */}
        <img
          src={darkLogo}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="
            absolute inset-0
            block h-full w-full
            object-contain

            opacity-0
            dark:opacity-100

            transition-opacity duration-[400ms]
            ease-in-out

            motion-reduce:transition-none
          "
        />
      </span>

      {/* Optional additional wordmark */}
      {showText && (
        <span
          className="
            font-serif
            text-lg font-semibold
            tracking-widest

            text-amber-600
            dark:text-amber-100

            transition-colors duration-300
            motion-reduce:transition-none
          "
        >
          MATRIKA
        </span>
      )}
    </div>
  );
}