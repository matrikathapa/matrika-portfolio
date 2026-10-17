import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import SectionWrapper from '../../../components/SectionWrapper';
import aboutImage from '../../../assets/about-section-img.png';
import { EASE_COZY, VIEWPORT_ONCE } from '../../../utils/motion'; 

function LeafDoodle({ className = '', flip = false }) {
  return (
    <svg
  viewBox="0 0 100 180"
  fill="none"
  className={`absolute pointer-events-none ${flip ? 'scale-x-[-1]' : ''} ${className}`}
  aria-hidden="true"
>
  {/* Main stem */}
  <path
    d="M50 174 C49 140 48 108 52 78 C55 53 65 29 82 8"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />

  {/* Leaves */}
  {/* Leaf 1 (lower left) */}
  <path
    d="M49 138 C34 142 20 130 20 114 C26 106 41 118 49 138 Z M49 138 Q33 125 20 114"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* Leaf 2 (lower right) */}
  <path
    d="M49 116 C64 118 78 106 78 90 C72 82 57 96 49 116 Z M49 116 Q65 102 78 90"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* Leaf 3 (middle left) */}
  <path
    d="M50 95 C36 99 22 88 22 72 C28 64 43 76 50 95 Z M50 95 Q35 83 22 72"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* Leaf 4 (middle right) */}
  <path
    d="M54 73 C69 74 82 63 82 48 C75 40 61 54 54 73 Z M54 73 Q69 59 82 48"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* Leaf 5 (upper left) */}
  <path
    d="M60 50 C46 53 34 43 35 30 C41 24 54 34 60 50 Z M60 50 Q47 38 35 30"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* Leaf 6 (upper right) */}
  <path
    d="M68 30 C80 30 89 23 88 12 C80 7 72 17 68 30 Z M68 30 Q79 19 88 12"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
  );
}

function Sparkle({ className = '', size = 'text-sm' }) {
  return (
    <span
      className={`absolute pointer-events-none select-none ${size} ${className}`}
      aria-hidden="true"
    >
      ✦
    </span>
  );
}

export default function AboutSection() {
  const shouldReduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    setTilt({
      x: rotateY,
      y: rotateX,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <SectionWrapper
      id="about"
      aria-label="About Matrika"
      className="
        relative
        overflow-hidden
        border-t border-black/5
        dark:border-white/5
        py-20 md:py-28
      "
    >
      {/* =========================================================
          AMBIENT DECORATION
      ========================================================== */}

      {/* Left botanical vine */}
      <LeafDoodle
        className="
          left-2 top-20
          h-40 w-24
          text-[#d97732]/80
          md:left-6 md:h-52 md:w-28
          lg:left-10
          drop-shadow-[0_0_6px_rgba(217,119,50,0.25)]
        "
      />

      {/* Right botanical vine */}
      <LeafDoodle
        flip
        className="
          right-2 bottom-16
          h-44 w-24
          text-[#d97732]/80
          md:right-6 md:h-56 md:w-28
          lg:right-10
          drop-shadow-[0_0_6px_rgba(217,119,50,0.25)]
        "
      />

      {/* Smaller decorative vine */}
      <LeafDoodle
        className="
          hidden
          left-[8%] bottom-8
          h-28 w-16
          text-[#d97732]/50
          lg:block
        "
      />

      <LeafDoodle
        flip
        className="
          hidden
          right-[8%] top-10
          h-32 w-16
          text-[#d97732]/50
          lg:block
        "
      />

      {/* Floating sparkles */}
      <Sparkle
        className="
          left-[10%] top-28
          text-[#e07a5f]/70
          animate-pulse
        "
        size="text-xs"
      />

      <Sparkle
        className="
          right-[12%] top-20
          text-[#e07a5f]/70
          animate-pulse
        "
        size="text-sm"
      />

      <Sparkle
        className="
          left-[18%] bottom-12
          text-[#d97732]/60
        "
        size="text-[10px]"
      />

      <Sparkle
        className="
          right-[18%] bottom-20
          text-[#d97732]/60
        "
        size="text-xs"
      />

      {/* =========================================================
          ABOUT CARD
      ========================================================== */}

      <div
        className="
          relative
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[2rem]
          border
          border-[#c77b42]/25
          bg-[#fffaf3]
          px-6 py-10
          shadow-[0_20px_60px_rgba(74,59,50,0.12)]
          transition-all
          duration-700

          md:px-10
          lg:px-14 lg:py-12

          dark:border-[#c77b42]/30
          dark:bg-[#21131d]
          dark:shadow-[0_20px_70px_rgba(0,0,0,0.45)]
        "
      >
        {/* Subtle inner border */}
        <div
          className="
            pointer-events-none
            absolute inset-[7px]
            rounded-[1.7rem]
            border
            border-[#d97732]/10
            dark:border-[#d97732]/15
          "
        />

        {/* Tiny corner dots */}
        <span className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-[#d97732]/50" />
        <span className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-[#d97732]/50" />
        <span className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-[#d97732]/30" />
        <span className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-[#d97732]/30" />

        {/* =====================================================
            CONTENT GRID
        ====================================================== */}

        <div
          className="
            relative z-10
            grid
            items-center
            gap-12
            lg:grid-cols-12
            lg:gap-14
          "
        >
          {/* ===================================================
              POLAROID
          ==================================================== */}

          <motion.div
            initial={shouldReduce ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.65, ease: EASE_COZY }}
            className="flex justify-center lg:col-span-4"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              data-cursor-text="Matrika"
              className="
                relative
                w-full max-w-[260px]
                cursor-pointer
                transition-transform
                duration-150
                ease-out
              "
              style={{
                transform: `
                  perspective(1000px)
                  rotateX(${tilt.y}deg)
                  rotateY(${tilt.x}deg)
                `,
              }}
            >
              {/* Tape */}
              <div
                className="
                  absolute
                  -top-5
                  left-1/2
                  z-20
                  h-8
                  w-28
                  -translate-x-1/2
                  rotate-[-4deg]
                  rounded-sm
                  border
                  border-[#d9ad65]/30
                  bg-[#f5d99a]/85
                  shadow-sm
                  backdrop-blur-sm
                "
              />

              {/* Polaroid frame */}
              <div
                className="
                  relative
                  rotate-[-3deg]
                  rounded-sm
                  bg-[#fff5dc]
                  p-3
                  pb-5
                  shadow-[0_18px_35px_rgba(45,31,24,0.28)]
                  transition-transform
                  duration-500
                  hover:rotate-0
                  dark:bg-[#f4dfbf]
                "
              >
                {/* Image */}
                <div
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    bg-[#3b2430]
                  "
                >
                  {/* IMPORTANT:
                      Replace this path with your existing About image
                      if it has a different filename.
                  */}
                  <img
                    src={aboutImage}
                    alt="Matrika working at her desk"
                    className="
                      absolute inset-0
                      h-full w-full
                      object-cover
                    "
                  />

                  {/* Warm image overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#5b2831]/30
                      via-transparent
                      to-[#f59e0b]/10
                    "
                  />
                </div>

                {/* Caption */}
                <p
                  className="
                    pt-3
                    text-center
                    font-hand-custom
                    text-base
                    font-semibold
                    tracking-wide
                    text-[#713c32]
                    sm:text-lg
                  "
                >
                  Dream. Plan. Code. Repeat.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              ABOUT TEXT
          ==================================================== */}

          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.6, ease: EASE_COZY, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="max-w-3xl">
              {/* Heading */}
              <div className="mb-7 flex items-center gap-3">
                <h2
                  className="
                    font-hand-custom
                    text-4xl
                    font-bold
                    tracking-wide
                    text-[#d97732]
                    sm:text-5xl
                  "
                >
                  About Me
                </h2>
                
                <span aria-hidden="true" className="text-xl text-[var(--accent)]">
                ❧
              </span>
              </div>

              {/* Paragraph 1 */}
              <p
                className="
                  max-w-3xl
                  text-base
                  leading-8
                  text-[#4e4540]
                  sm:text-lg
                  dark:text-[#eaded5]
                "
              >
                Hey, I'm Matrika, a passionate developer who loves coding and building new, creative projects. I enjoy experimenting with ideas, learning by doing, and turning concepts into working, meaningful experiences.
              </p>

              {/* Paragraph 2 */}
              <p
                className="
                  mt-7
                  max-w-3xl
                  text-base
                  leading-8
                  text-[#4e4540]
                  sm:text-lg
                  dark:text-[#eaded5]
                "
              >
                I aspire to continuously grow as a developer, sharpen my problem-solving skills, and become exceptionally skilled in coding. I'm always eager to learn new programming languages, explore modern technologies, and push myself beyond my comfort zone.
              </p>

              {/* Small decorative line */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-16 bg-[#d97732]/30" />
                <span className="text-xs text-[#d97732]/70">
                  ✦
                </span>
                <span className="h-px w-8 bg-[#d97732]/20" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CARD BOTTOM BOTANICAL DETAIL
        ====================================================== */}

        <LeafDoodle
          flip
          className="
            pointer-events-none
            bottom-[-65px]
            right-[32%]
            hidden
            h-36 w-20
            text-[#d97732]/20
            lg:block
          "
        />
      </div>
    </SectionWrapper>
  );
}