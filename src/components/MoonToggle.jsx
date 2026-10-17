import { useTheme } from '../hooks/useTheme';

/**
 * MoonToggle Component
 * 
 * The signature Day / Evening theme switch for Matrika's portfolio.
 * 
 * Educational Notes:
 * 1. Semantic Accessibility: Implements `role="switch"` and `aria-checked` to communicate
 *    its binary state to assistive technologies and screen readers.
 * 2. Pure CSS Transitions: The thumb translates horizontally via CSS `translate-x`
 *    using hardware-accelerated transforms rather than JavaScript timers.
 * 3. Responsive Tactile Feedback: Features active press scaling, keyboard focus rings,
 *    and subtle ambient glow in Evening mode.
 */
export default function MoonToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isEvening = theme === 'evening';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEvening}
      aria-label={isEvening ? 'Switch to Day mode' : 'Switch to Evening mode'}
      onClick={toggleTheme}
      className={`relative inline-flex items-center h-8 w-16 rounded-full p-1 transition-all duration-400 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-highlight)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-app)] ${
        isEvening
          ? 'bg-[#251d38] border border-[#ffd166]/50 shadow-[0_0_14px_rgba(255,209,102,0.25)]'
          : 'bg-[#3b1d1f] border border-[#e09f3e]/40 shadow-[0_0_8px_rgba(224,159,62,0.15)]'
      } ${className}`}
    >
      {/* Background celestial shimmer */}
      <span className="sr-only">
        {isEvening ? 'Currently Evening Mode. Click for Day Mode.' : 'Currently Day Mode. Click for Evening Mode.'}
      </span>

      {/* Sliding circular thumb */}
      <span
        className={`pointer-events-none flex items-center justify-center w-6 h-6 rounded-full shadow-md transform transition-transform duration-400 ease-in-out ${
          isEvening
            ? 'translate-x-8 bg-gradient-to-tr from-[#ffd166] to-[#ffe599] text-[#1a162b]'
            : 'translate-x-0 bg-gradient-to-tr from-[#fdfbf7] to-[#ede4d8] text-[#3b1d1f]'
        }`}
      >
        {isEvening ? (
          /* Radiant Sun Icon (representing switch back to day) */
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          /* Crescent Moon Icon (representing switch to evening) */
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-[#e09f3e]"
            fill="currentColor"
            stroke="none"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </span>

      {/* Static celestial background icon on the opposite side */}
      <span
        className={`absolute text-[10px] pointer-events-none transition-opacity duration-300 ${
          isEvening ? 'left-2 text-[#ffd166]/80' : 'right-2 text-[#fdfbf7]/60'
        }`}
        aria-hidden="true"
      >
        {isEvening ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
