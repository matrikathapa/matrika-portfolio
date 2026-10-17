import { useTheme } from '../../hooks/useTheme';
import cleanRoomImg from '../../assets/reference/clean-room.png';

/**
 * Fairy light coordinates across the upper shelf and vertical bookshelf.
 * Positioned as exact percentage anchors along the shelf structure.
 */
const FAIRY_LIGHTS = [
  // Upper shelf above monitor
  { left: '31.5%', top: '25.6%' },
  { left: '35.2%', top: '26.8%' },
  { left: '39.0%', top: '25.8%' },
  { left: '42.8%', top: '27.0%' },
  { left: '46.8%', top: '25.8%' },
  { left: '50.6%', top: '26.8%' },
  { left: '54.2%', top: '25.8%' },
  // Vertical bookshelf garland & shelves
  { left: '58.2%', top: '14.5%' },
  { left: '60.5%', top: '23.5%' },
  { left: '65.2%', top: '19.8%' },
  { left: '70.8%', top: '23.2%' },
  { left: '64.5%', top: '27.5%' },
  { left: '59.0%', top: '33.5%' },
  { left: '71.2%', top: '34.5%' },
  { left: '58.4%', top: '44.0%' },
  { left: '71.8%', top: '48.5%' },
];

/**
 * RoomCanvas Component — Clean, Atmospheric Cozy Room Centerpiece
 * 
 * Educational Notes:
 * 1. Single Base Artwork & Clear Evening Lighting:
 *    - Preserves the original room illustration with zero smoky or foggy overlays.
 *    - In Evening mode, the room transitions via a smooth 850ms CSS filter to a
 *      warm, cozy evening tone (brightness 0.76, contrast 1.08, saturate 1.10),
 *      keeping furniture, books, desk, cat, monitor, and curtains clearly visible.
 * 2. Window Day-to-Night Dimming:
 *    - A restrained multiply gradient dims exterior window daylight naturally
 *      without obscuring fabric textures or casting murky dark shadows.
 * 3. Controlled Warm Ambiance:
 *    - Subtle desk illumination from the retro adventure game monitor.
 *    - Pinpoint incandescent fairy lights on the bookshelf with warm golden glow.
 * 4. Stationary Edge-to-Edge Layout:
 *    - Fills the viewport cleanly with zero mouse-following movement or parallax.
 */
export default function RoomCanvas({ className = '' }) {
  const { theme } = useTheme();
  const isEvening = theme === 'evening';

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none flex items-center justify-center bg-[#14080a] ${className}`}
      aria-label="Matrika's cozy personal workspace"
    >
      {/* 
        Mathematical Aspect-Ratio Artboard Wrapper
        Ensures the 1215x594 artwork fills the screen edge-to-edge without distortion
      */}
      <div
        className="relative shrink-0 flex items-center justify-center select-none"
        style={{
          width: 'max(100%, calc(100svh * (1215 / 594)))',
          height: 'max(100%, calc(100svw * (594 / 1215)))',
          aspectRatio: '1215 / 594',
        }}
      >
        {/* 1. Single Base Room Artwork with Continuous 850ms CSS Transition */}
        <img
          src={cleanRoomImg}
          alt="Matrika's cozy personal workspace"
          className="w-full h-full object-fill pointer-events-none transition-all duration-850 ease-in-out"
          style={{
            filter: isEvening
              ? 'brightness(0.76) contrast(1.08) saturate(1.10)'
              : 'brightness(1) contrast(1) saturate(1)',
          }}
          loading="eager"
        />

        {/* 2. Evening Mode: Window & Curtain Daylight Dimming Layer (Subtle multiply, no smoke/fog) */}
        <div
          className="absolute inset-y-0 right-0 pointer-events-none transition-opacity duration-850 ease-in-out"
          style={{
            width: '30%',
            opacity: isEvening ? 0.65 : 0,
            background:
              'linear-gradient(to right, transparent 0%, rgba(20, 10, 16, 0.35) 40%, rgba(15, 8, 12, 0.65) 100%)',
            mixBlendMode: 'multiply',
          }}
          aria-hidden="true"
        />

        {/* 3. Evening Mode: Subtle Monitor Screen Ambient Glow onto Desk */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-850 ease-in-out"
          style={{
            opacity: isEvening ? 0.75 : 0,
            background:
              'radial-gradient(ellipse at 42.5% 42%, rgba(147, 197, 253, 0.22) 0%, rgba(180, 215, 255, 0.08) 24%, transparent 50%)',
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />

        {/* 4. Evening Mode: Subtle Bookshelf Warm Ambient Aura */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-850 ease-in-out"
          style={{
            opacity: isEvening ? 0.70 : 0,
            background:
              'radial-gradient(circle at 64% 28%, rgba(255, 195, 75, 0.18) 0%, rgba(255, 160, 45, 0.08) 25%, transparent 48%)',
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />

        {/* 5. Evening Mode: Controlled Fairy Light Bulbs (Clean Incandescent Warmth) */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {FAIRY_LIGHTS.map((pos, idx) => (
            <span
              key={idx}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-700 ease-out"
              style={{
                left: pos.left,
                top: pos.top,
                width: '5px',
                height: '5px',
                backgroundColor: '#fffbe8',
                boxShadow:
                  '0 0 3px 1px #fff4cc, 0 0 6px 2.5px #ffd166, 0 0 10px 3px rgba(255, 175, 45, 0.40)',
                opacity: isEvening ? 1 : 0,
                transitionDelay: isEvening ? `${idx * 25}ms` : '0ms',
              }}
            />
          ))}
        </div>

        {/* 6. Subtle Perimeter Vignette for Crisp Framing */}
        <div
          className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(12,4,6,0.4)]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
