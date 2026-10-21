import { useEffect, useRef, useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper';

/* =========================================================
   HOBBY DATA

   Add/edit hobbies here in the future.
========================================================= */

const hobbies = [
  {
    id: 1,
    title: 'Reading',
    description:
      'Books open new worlds and feed my imagination.',
    art: 'reading',
    rotate: '-rotate-2',
  },
  {
    id: 2,
    title: 'Drawing',
    description:
      'Sketching helps me express ideas in my own way.',
    art: 'drawing',
    rotate: 'rotate-1',
  },
  {
    id: 3,
    title: 'Dancing',
    description:
      "It's my way of expressing emotions and energy.",
    art: 'dancing',
    rotate: '-rotate-1',
  },
  {
    id: 4,
    title: 'Gameplays',
    description:
      'I enjoy watching and discovering the stories behind games.',
    art: 'gaming',
    rotate: 'rotate-2',
  },
];

/* =========================================================
   SMALL DECORATIVE SPARKLE
========================================================= */

function Sparkle({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute pointer-events-none select-none ${className}`}
    >
      ✦
    </span>
  );
}

/* =========================================================
   CORNER PLANT

   Decorative background element.
========================================================= */

function CornerPlant() {
  return (
    <svg
      viewBox="0 0 180 220"
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
    >
      <defs>
        <linearGradient
          id="plantStem"
          x1="0"
          y1="0"
          x2="160"
          y2="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3d492f" />
          <stop offset="100%" stopColor="#556942" />
        </linearGradient>

        <linearGradient
          id="plantLeaf"
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#677c53" />
          <stop offset="100%" stopColor="#3a482b" />
        </linearGradient>
      </defs>

      {/* Main stem */}
      <path
        d="M20 210 C32 166 42 128 66 91 C83 65 105 43 137 20"
        stroke="url(#plantStem)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Branch */}
      <path
        d="M49 137 C29 126 17 108 11 88"
        stroke="url(#plantStem)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M69 98 C92 91 111 78 123 60"
        stroke="url(#plantStem)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <path
        d="M12 88 C-4 72 4 47 30 42 C42 63 34 80 12 88Z"
        fill="url(#plantLeaf)"
      />

      <path
        d="M42 129 C26 110 36 89 61 85 C69 105 61 123 42 129Z"
        fill="url(#plantLeaf)"
      />

      <path
        d="M75 94 C72 69 90 53 114 58 C110 82 95 95 75 94Z"
        fill="url(#plantLeaf)"
      />

      <path
        d="M102 69 C101 43 119 25 145 29 C139 52 125 67 102 69Z"
        fill="url(#plantLeaf)"
      />

      <path
        d="M127 45 C127 21 145 5 169 10 C163 32 148 43 127 45Z"
        fill="url(#plantLeaf)"
      />

      {/* Leaf veins */}
      <path
        d="M12 82 L29 49 M43 123 L58 91 M79 88 L108 63 M106 63 L139 34 M132 39 L160 17"
        stroke="#91a26e"
        strokeWidth="2"
        opacity="0.45"
      />
    </svg>
  );
}

/* =========================================================
   CORNER BOOKS

   Decorative background element.
========================================================= */

function CornerBooks() {
  return (
    <svg
      viewBox="0 0 260 170"
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
    >
      {/* Bottom book */}
      <path
        d="M18 119 L214 145 L252 132 L53 105 Z"
        fill="#4a3545"
      />

      <path
        d="M18 119 L18 143 L215 168 L214 145 Z"
        fill="#392b39"
      />

      {/* Middle book */}
      <path
        d="M29 82 L230 105 L253 94 L51 70 Z"
        fill="#7b4c40"
      />

      <path
        d="M29 82 L29 107 L230 130 L230 105 Z"
        fill="#623c36"
      />

      {/* Top book */}
      <path
        d="M51 43 L239 63 L258 52 L69 28 Z"
        fill="#b87955"
      />

      <path
        d="M51 43 L48 69 L239 90 L239 63 Z"
        fill="#8c5946"
      />

      {/* Page edges */}
      <path
        d="M69 28 L258 52"
        stroke="#dba47c"
        strokeWidth="3"
      />

      <path
        d="M52 69 L239 90"
        stroke="#c88767"
        strokeWidth="2"
        opacity="0.5"
      />

      <path
        d="M30 106 L229 130"
        stroke="#a96d57"
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  );
}

/* =========================================================
   CORNER MUG

   Converted from the SVG you provided.

   Important:
   The mug is intentionally midnight navy + gold so
   it remains visible in dark mode later.
========================================================= */

function CornerMug() {
  return (
    <svg
      viewBox="0 0 220 220"
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
    >
      <defs>
        {/* Mug body */}
        <linearGradient
          id="mug-glaze"
          x1="0"
          y1="0"
          x2="90"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#333b5c" />
          <stop offset="45%" stopColor="#242a47" />
          <stop offset="100%" stopColor="#141827" />
        </linearGradient>

        {/* Coffee */}
        <radialGradient
          id="coffee-surface"
          cx="45%"
          cy="35%"
          r="65%"
        >
          <stop offset="0%" stopColor="#8a573d" />
          <stop offset="60%" stopColor="#54352f" />
          <stop offset="100%" stopColor="#2b2024" />
        </radialGradient>

        {/* Moon */}
        <linearGradient
          id="moon-gold"
          x1="35"
          y1="40"
          x2="70"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#fde89c" />
          <stop offset="55%" stopColor="#f7cc5a" />
          <stop offset="100%" stopColor="#d98b20" />
        </linearGradient>

        {/* Steam blur */}
        <filter
          id="br-steam-blur"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* =================================================
          SOFT RISING STEAM
      ================================================= */}

      <g
        filter="url(#br-steam-blur)"
        opacity="0.45"
      >
        <path
          d="M125 105 C118 85 132 70 124 50 C118 35 128 20 122 5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M142 102 C150 82 136 68 144 48 C148 35 142 22 145 8"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* =================================================
          MIDNIGHT NAVY MUG
      ================================================= */}

      <g transform="translate(85 95)">
        {/* Ground shadow */}
        <ellipse
          cx="48"
          cy="84"
          rx="42"
          ry="10"
          fill="#120c15"
          opacity="0.32"
        />

        {/* Handle */}
        <path
          d="M78 28 C102 28 106 62 76 70"
          stroke="#1e2338"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <path
          d="M78 28 C100 28 104 60 76 69"
          stroke="#333b5c"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Mug body */}
        <path
          d="M12 20 L18 74 C19 81 30 85 48 85 C66 85 77 81 78 74 L84 20 Z"
          fill="url(#mug-glaze)"
          stroke="#0d101a"
          strokeWidth="1"
        />

        {/* Ceramic gloss */}
        <path
          d="M20 24 L24 73 C26 76 30 78 36 78 L32 24 Z"
          fill="white"
          opacity="0.12"
        />

        {/* Rim */}
        <ellipse
          cx="48"
          cy="20"
          rx="36"
          ry="12"
          fill="#2d3554"
          stroke="#48527a"
          strokeWidth="1"
        />

        {/* Coffee */}
        <ellipse
          cx="48"
          cy="21"
          rx="33"
          ry="10"
          fill="url(#coffee-surface)"
        />

        {/* Coffee swirl */}
        <ellipse
          cx="48"
          cy="21"
          rx="27"
          ry="7.5"
          stroke="#df9f58"
          strokeWidth="0.8"
          strokeDasharray="3 4"
          opacity="0.65"
        />

        <path
          d="M48 24 C44 20 40 21 41 23 C42 25 48 27 48 27 C48 27 54 25 55 23 C56 21 52 20 48 24Z"
          fill="#fce2be"
          opacity="0.8"
        />

        {/* =================================================
            GOLD CRESCENT MOON
        ================================================= */}

        <path
          d="M48 42 C41 42 35 48 35 56 C35 64 41 70 48 70 C44 68 41 63 41 56 C41 49 44 44 48 42Z"
          fill="url(#moon-gold)"
          style={{
            filter:
              'drop-shadow(0 0 2px rgba(247,204,90,0.6))',
          }}
        />

        {/* =================================================
            STARS
        ================================================= */}

        <path
          d="M54 43 Q55 46 58 47 Q55 48 54 51 Q53 48 50 47 Q53 46 54 43Z"
          fill="url(#moon-gold)"
        />

        <path
          d="M60 56 Q60.5 58 62.5 58.5 Q60.5 59 60 61 Q59.5 59 57.5 58.5 Q59.5 58 60 56Z"
          fill="url(#moon-gold)"
        />

        <path
          d="M52 66 Q52.5 67.5 54 68 Q52.5 68.5 52 70 Q51.5 68.5 50 68 Q51.5 67.5 52 66Z"
          fill="url(#moon-gold)"
        />

        <circle
          cx="33"
          cy="46"
          r="1"
          fill="#fde8a0"
        />

        <circle
          cx="59"
          cy="49"
          r="0.9"
          fill="#fde8a0"
        />

        <circle
          cx="34"
          cy="65"
          r="0.9"
          fill="#fde8a0"
        />
      </g>
    </svg>
  );
}

/* =========================================================
   HOBBY ART

   Self-contained visual area so the section does not
   depend on missing image paths.
========================================================= */

function HobbyArt({ type }) {
  if (type === 'reading') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#f2b26e] via-[#b9674d] to-[#563747]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,221,160,.8),transparent_32%)]" />

        <div className="absolute right-8 top-7 h-24 w-24 rounded-full bg-[#ffd890]/30 blur-xl" />

        <div className="absolute bottom-8 left-8 flex rotate-[-5deg] flex-col gap-1">
          <div className="h-5 w-36 rounded-sm bg-[#49334a] shadow-md" />
          <div className="h-5 w-32 rounded-sm bg-[#7c4b48] shadow-md" />
          <div className="h-5 w-28 rounded-sm bg-[#9b6749] shadow-md" />
        </div>

        <div className="absolute bottom-7 right-12 h-12 w-12 rounded-b-xl rounded-t-lg bg-[#302437] shadow-lg">
          <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#e8a14d]" />
        </div>

        <div className="absolute bottom-8 left-1/2 h-20 w-28 -translate-x-1/2 rotate-[-4deg] rounded-sm bg-[#f7e7c6] shadow-xl">
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#c8aa87]" />
          <div className="absolute left-3 right-3 top-5 space-y-2">
            <div className="h-px bg-[#a98b74]/50" />
            <div className="h-px bg-[#a98b74]/50" />
            <div className="h-px bg-[#a98b74]/50" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'drawing') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#d88958] via-[#8d5c57] to-[#46384b]">
        <div className="absolute left-7 top-7 h-20 w-20 rounded-full bg-[#ffd9a4]/30 blur-2xl" />

        <div className="absolute bottom-4 left-1/2 h-28 w-40 -translate-x-1/2 rotate-[-7deg] rounded-md bg-[#f4e4c9] shadow-xl">
          <svg
            viewBox="0 0 160 110"
            className="absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)]"
          >
            <path
              d="M25 76 C30 40 48 45 58 68 C69 89 83 42 101 52 C113 59 111 72 137 34"
              stroke="#765c54"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M45 35 C53 22 62 28 65 39 C56 43 49 41 45 35Z"
              stroke="#765c54"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M105 27 C117 17 128 25 126 38 C114 39 108 35 105 27Z"
              stroke="#765c54"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="absolute right-7 top-8 h-24 w-8 rotate-[18deg] rounded-full bg-[#f1c85b] shadow-lg">
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 border-x-[8px] border-t-[12px] border-x-transparent border-t-[#d9b88d]" />
        </div>
      </div>
    );
  }

  if (type === 'dancing') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#bc745e] via-[#72465a] to-[#392d43]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,190,130,.5),transparent_28%)]" />

        <div className="absolute left-1/2 top-1/2 h-28 w-16 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-5 h-7 w-7 -translate-x-1/2 rounded-full bg-[#3a2630]" />

          <div className="absolute left-1/2 top-11 h-12 w-10 -translate-x-1/2 rounded-t-[40%] bg-[#342a39]" />

          <div className="absolute left-1/2 top-12 h-3 w-24 -translate-x-1/2 -rotate-[28deg] rounded-full bg-[#342a39]" />
          <div className="absolute left-1/2 top-12 h-3 w-24 -translate-x-1/2 rotate-[35deg] rounded-full bg-[#342a39]" />

          <div className="absolute left-[38%] top-[55px] h-20 w-3 -rotate-[15deg] rounded-full bg-[#332631]" />
          <div className="absolute left-[57%] top-[55px] h-20 w-3 rotate-[24deg] rounded-full bg-[#332631]" />
        </div>

        <div className="absolute bottom-5 left-1/2 h-1 w-36 -translate-x-1/2 rounded-full bg-[#f4c68d]/50 blur-sm" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#4c3157] via-[#3a2b55] to-[#1d243d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(218,119,255,.45),transparent_35%)]" />

      {/* Monitor */}
      <div className="absolute left-1/2 top-7 h-28 w-44 -translate-x-1/2 rounded-lg border-4 border-[#25223b] bg-[#161b31] shadow-2xl">
        <div className="absolute inset-2 rounded bg-gradient-to-br from-[#754e92] via-[#e18165] to-[#253c63]" />
        <div className="absolute bottom-[-13px] left-1/2 h-3 w-10 -translate-x-1/2 rounded-b bg-[#27253a]" />
      </div>

      {/* Controller */}
      <div className="absolute bottom-8 left-1/2 h-10 w-24 -translate-x-1/2 rounded-[45%] bg-[#282a42] shadow-xl">
        <span className="absolute left-5 top-2 h-3 w-3 rounded-full bg-[#7588a6]" />
        <span className="absolute right-5 top-2 h-3 w-3 rounded-full bg-[#d97961]" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a9a2bd]" />
      </div>
    </div>
  );
}

/* =========================================================
   HOBBY CARD
========================================================= */

function HobbyCard({ hobby, index, visible }) {
  return (
    <article
      className={`
        creative-card
        relative
        ${hobby.rotate}
        ${visible ? 'creative-card-visible' : ''}
      `}
      style={{
        '--card-delay': `${index * 150}ms`,
      }}
    >
      {/* Tape */}
      <div
        aria-hidden="true"
        className="
          absolute
          -top-3
          left-1/2
          z-20
          h-7
          w-28
          -translate-x-1/2
          -rotate-1
          bg-[#e5c77f]/75
          shadow-sm
          backdrop-blur-sm
        "
      />

      {/* Polaroid */}
      <div
        className="
          relative
          h-full
          rounded-sm
          border
          border-[#d6b996]/60
          bg-[#fff9e9]
          p-3
          pb-4
          shadow-[0_12px_30px_rgba(91,61,45,0.12)]
          transition-all
          duration-400
          hover:-translate-y-2.5
          hover:scale-[1.02]
          hover:rotate-0
          hover:border-[#d97732]/50
          hover:shadow-[0_22px_45px_rgba(91,61,45,0.22)]
          dark:border-[#d6b996]/30
          dark:bg-[#281825]
          dark:shadow-[0_12px_30px_rgba(0,0,0,0.40)]
          dark:hover:border-[#d97732]/60
          dark:hover:shadow-[0_22px_45px_rgba(0,0,0,0.60)]
        "
      >
        {/* Photo */}
        <div className="relative aspect-[1.15/1] overflow-hidden border border-[#dbc6a8] dark:border-[#d6b996]/20">
          <HobbyArt type={hobby.art} />

          {/* Soft photo overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2e2031]/15 to-transparent" />
        </div>

        {/* Text */}
        <div className="px-2 pt-5">
          <div className="flex items-center gap-2">
            <h3
              className="
                font-hand-custom
                text-xl
                font-bold
                text-[#713f58]
                dark:text-[#f5e8dc]
              "
            >
              {hobby.title}
            </h3>

            <span className="text-[#d97732]">♡</span>
          </div>

          <p
            className="
              mt-2
              text-xs
              leading-5
              text-[#66554c]
              dark:text-[#cdbdb4]
              sm:text-sm
            "
          >
            {hobby.description}
          </p>

          <p
            className="
              mt-4
              font-hand-custom
              text-xs
              font-semibold
              text-[#8b4f57]
              dark:text-[#e8a067]
            "
          >
            ✦ Hover to explore →
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   CREATIVE CORNER
========================================================= */

export default function CreativeCorner() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* =======================================================
     CARD DEAL ANIMATION

     The animation starts only when the section enters
     the viewport.
  ======================================================= */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper
      id="creative-corner"
      aria-label="Creative Corner and Hobbies"
      maxWidth="none"
      className="
        relative
        h-[calc(100svh-72px)]
        min-h-[680px]
        overflow-hidden
        bg-[#f8e5c2]
        dark:bg-[#140e17]
        px-0
        py-0
      "
    >

    {/* =================================================
            OUTER CORNER DECORATIONS

            These sit BEHIND the rounded inner panel.
        ================================================= */}

        {/* Top-left plant */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[-15px]
            top-[-15px]
            z-0
            h-44
            w-40
            opacity-95
            sm:left-0
            sm:top-0
            sm:h-52
            sm:w-48
          "
        >
          <CornerPlant />
        </div>

        {/* Top-right books */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-15px]
            top-[-8px]
            z-0
            h-36
            w-52
            sm:right-0
            sm:top-0
            sm:h-44
            sm:w-64
          "
        >
          <CornerBooks />
        </div>

        {/* Bottom-left books */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-10px]
            left-[-15px]
            z-0
            h-32
            w-52
            opacity-90
            sm:bottom-0
            sm:left-0
            sm:h-40
            sm:w-64
          "
        >
          <CornerBooks />
        </div>

        {/* Bottom-right mug */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-5px]
            right-[-5px]
            z-0
            h-40
            w-40
            sm:h-48
            sm:w-48
          "
        >
          <CornerMug />
        </div>
      {/* =================================================
          OUTER BACKGROUND
      ================================================= */}

      <div
        ref={sectionRef}
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          overflow-hidden
        "
      >
        {/* Warm background texture */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_40%,rgba(255,249,226,.85),transparent_58%)]
            dark:bg-[radial-gradient(circle_at_50%_40%,rgba(217,119,50,0.10),transparent_60%)]
          "
        />
        {/* =================================================
            INNER CREATIVE PANEL
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            h-[calc(100%-70px)]
            w-[calc(100%-70px)]
            max-w-[1450px]
            flex-col
            overflow-hidden
            rounded-[2rem]
            border
            border-[#d8ad7c]/55
            bg-[#fff4d9]/90
            shadow-[0_20px_70px_rgba(108,72,44,0.10)]
            backdrop-blur-[2px]
            dark:border-[#d8ad7c]/35
            dark:bg-[#1e131d]/95
            dark:shadow-[0_20px_70px_rgba(0,0,0,0.50)]
            sm:h-[calc(100%-80px)]
            sm:w-[calc(100%-80px)]
          "
        >
          {/* Inner frame */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-3
              rounded-[1.6rem]
              border
              border-[#d8ad7c]/30
              dark:border-[#d8ad7c]/20
            "
          />

          {/* =================================================
              DECORATIVE DETAILS
          ================================================= */}

          <Sparkle
            className="
              left-[8%]
              top-[15%]
              text-xl
              text-[#e89e3a]
            "
          />

          <Sparkle
            className="
              right-[7%]
              top-[16%]
              text-xl
              text-[#d97732]/70
            "
          />

          <Sparkle
            className="
              left-[4%]
              bottom-[16%]
              text-sm
              text-[#e89e3a]
            "
          />

          <Sparkle
            className="
              right-[5%]
              bottom-[13%]
              text-sm
              text-[#d97732]/70
            "
          />

          <span
            aria-hidden="true"
            className="
              absolute
              left-[20%]
              top-[24%]
              text-[#d97732]/60
            "
          >
            ♡
          </span>

          <span
            aria-hidden="true"
            className="
              absolute
              right-[19%]
              top-[25%]
              text-[#d97732]/50
            "
          >
            ✿
          </span>

          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              relative
              z-10
              shrink-0
              px-5
              pt-8
              text-center
              sm:px-8
              sm:pt-9
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#9b614d]
                dark:text-[#e8a067]
                sm:text-xs
              "
            >
              THINGS THAT MAKE ME, ME.
            </p>

            <h2
              className="
                mt-2
                font-hand-custom
                text-3xl
                font-bold
                tracking-wide
                text-[#713f58]
                dark:text-[#f5e8dc]
                sm:text-4xl
                md:text-5xl
              "
            >
              My Creative Corner
              <span className="ml-2 text-[#d97732]">
                ✦
              </span>
            </h2>

            {/* Little divider */}
            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-[#d97732]/45" />

              <span className="text-sm text-[#d97732]">
                ♥
              </span>

              <span className="h-px w-16 bg-[#d97732]/45" />
            </div>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-xs
                text-[#66554c]
                dark:text-[#cdbdb4]
                sm:text-sm
              "
            >
              A few things I enjoy when I'm away from the keyboard.
            </p>
          </div>

          {/* =================================================
              HOBBY CARDS
          ================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-0
              flex-1
              w-full
              max-w-6xl
              items-center
              justify-center
              px-5
              pb-5
              pt-5
              sm:px-8
              md:px-10
              md:pb-8
              md:pt-7
            "
          >
            <div
              className="
                grid
                w-full
                max-w-6xl
                grid-cols-2
                gap-3
                sm:gap-5
                md:grid-cols-4
                md:gap-6
              "
            >
              {hobbies.map((hobby, index) => (
                <HobbyCard
                  key={hobby.id}
                  hobby={hobby}
                  index={index}
                  visible={visible}
                />
              ))}
            </div>
          </div>

          {/* =================================================
              BOTTOM MESSAGE
          ================================================= */}

          <div
            className="
              relative
              z-10
              shrink-0
              pb-5
              text-center
              sm:pb-6
            "
          >
            <p
              className="
                font-hand-custom
                text-xs
                text-[#8b5d55]/80
                dark:text-[#c59b7e]/80
                sm:text-sm
              "
            >
              Same girl... different passions ♡
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CARD DEAL ANIMATION
          
          This is deliberately NOT a vine/path animation.
          Each card comes from a slightly different direction,
          rotates while sliding in, then lands on the table.
      ====================================================== */}

      <style>{`
        .creative-card {
          opacity: 0;
          transform:
            translate3d(
              calc((var(--card-index, 1) - 2) * 45px),
              90px,
              0
            )
            rotate(10deg)
            scale(0.88);
          transition:
            opacity 700ms ease,
            transform 850ms cubic-bezier(.22, 1, .36, 1);
          transition-delay: var(--card-delay);
        }

        .creative-card:nth-child(1) {
          --card-index: 1;
          transform:
            translate3d(-90px, 80px, 0)
            rotate(-13deg)
            scale(.88);
        }

        .creative-card:nth-child(2) {
          --card-index: 2;
          transform:
            translate3d(50px, 95px, 0)
            rotate(12deg)
            scale(.88);
        }

        .creative-card:nth-child(3) {
          --card-index: 3;
          transform:
            translate3d(-40px, 105px, 0)
            rotate(-10deg)
            scale(.88);
        }

        .creative-card:nth-child(4) {
          --card-index: 4;
          transform:
            translate3d(100px, 85px, 0)
            rotate(14deg)
            scale(.88);
        }

        .creative-card-visible {
          opacity: 1;
          transform:
            translate3d(0, 0, 0)
            rotate(0deg)
            scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .creative-card {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        @media (max-width: 640px) {
          .creative-card {
            transition-duration: 650ms;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}