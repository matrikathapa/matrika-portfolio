import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import SectionWrapper from '../../../components/SectionWrapper';
import { EASE_COZY, VIEWPORT_ONCE } from '../../../utils/motion';

/* =========================================================
   JOURNEY DATA

   Add future milestones here.
   You do NOT need to change the layout when adding items.
========================================================= */

const journeyItems = [
  {
    id: 1,
    title: 'Where it began',
    description: 'Curiosity about coding.',
    icon: '✦',
    type: 'begin',
  },
  {
    id: 2,
    title: 'HTML & CSS',
    description: 'Learned to structure and style the web.',
    icon: '</>',
    type: 'code',
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'Brought my ideas to life with logic.',
    icon: 'JS',
    type: 'js',
  },
  {
    id: 4,
    title: 'React',
    description: 'Started building dynamic experiences.',
    icon: '⚛',
    type: 'react',
  },
  {
    id: 5,
    title: 'Real Projects',
    description: 'Turning what I learn into things people can use.',
    icon: '✦',
    type: 'project',
  },
  {
    id: 6,
    title: 'Tailwind CSS',
    description: 'Learn more about css frameworks.',
    icon: 'TW',
    type: 'Tailwind',
  },
  {
    id: 7,
    title: 'Currently',
    description: 'Growing as a Front-End Developer.',
    icon: '☾',
    type: 'current',
  }

];

/* =========================================================
   SMALL DECORATIVE SPARKLE
========================================================= */

function Sparkle({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none text-[#d97732]/60 ${className}`}
    >
      ✦
    </span>
  );
}

/* =========================================================
   MILESTONE ICON
========================================================= */

function MilestoneIcon({ item }) {
  return (
    <div
      className={`
        relative z-20
        flex h-20 w-20 shrink-0
        items-center justify-center
        rounded-full
        border
        border-[#d97732]/40
        bg-[#fff7e8]
        text-[#b85f27]
        shadow-[0_8px_25px_rgba(120,70,35,0.12)]
        transition-all duration-500
        group-hover:-translate-y-1
        group-hover:border-[#d97732]/70
        group-hover:shadow-[0_10px_30px_rgba(217,119,50,0.25)]
        dark:border-[#d97732]/50
        dark:bg-[#2a1721]
        dark:text-[#f0a05b]
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      `}
    >
      <span
        className={`
          font-semibold
          ${
            item.type === 'code'
              ? 'text-sm'
              : item.type === 'js'
                ? 'text-lg'
                : 'text-2xl'
          }
        `}
      >
        {item.icon}
      </span>

      {/* Small orbit dot */}
      <span className="absolute -right-1 top-2 h-2 w-2 rounded-full bg-[#d97732] shadow-[0_0_8px_rgba(217,119,50,0.6)]" />
    </div>
  );
}

/* =========================================================
   JOURNEY SECTION
========================================================= */

export default function JourneySection() {
  const shouldReduce = useReducedMotion();
  const scrollRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  /* -------------------------------------------------------
     Allow mouse wheel to naturally explore the horizontal map
  ------------------------------------------------------- */

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    const handleWheel = (event) => {
      /*
       * Only convert vertical wheel movement when the
       * Journey Map actually has horizontal overflow.
       */
      if (element.scrollWidth <= element.clientWidth) return;

      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        element.scrollLeft += event.deltaY;
      }
    };

    element.addEventListener('wheel', handleWheel, {
      passive: true,
    });

    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, []);

  /* -------------------------------------------------------
     Hide the "scroll →" hint after the user starts moving
  ------------------------------------------------------- */

  const handleScroll = () => {
    if (scrollRef.current?.scrollLeft > 20) {
      setShowScrollHint(false);
    }
  };

  return (
    <SectionWrapper
      id="journey"
      aria-label="Matrika's Journey"
      maxWidth="max-w-none"
      className="
        relative
        overflow-hidden
        border-t border-black/5
        py-20 md:py-28
        dark:border-white/5
      "
    >
      {/* ===================================================
          AMBIENT DECORATION
      ==================================================== */}

      <Sparkle
        className="left-[8%] top-16 text-xs animate-pulse"
      />

      <Sparkle
        className="right-[9%] top-20 text-sm"
      />

      <Sparkle
        className="left-[18%] bottom-14 text-[10px]"
      />

      <Sparkle
        className="right-[20%] bottom-10 text-xs animate-pulse"
      />

      {/* ===================================================
          HEADING
      ==================================================== */}

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.55, ease: EASE_COZY }}
        className="relative z-10 mx-auto mb-12 max-w-3xl text-center"
      >
        <p
          className="
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#d97732]/70
          "
        >
          A little story of growth
        </p>

        <h2
          className="
            font-hand-custom
            text-4xl
            font-bold
            tracking-wide
            text-[#3b302b]
            sm:text-5xl
            dark:text-[#f5e8dc]
          "
        >
          My Journey
          <span className="ml-2 text-[#d97732]">✦</span>
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-7
            text-[#665b55]
            sm:text-base
            dark:text-[#cdbdb4]
          "
        >
          Small steps, new discoveries and lots of things still left to
          explore.
        </p>
      </motion.div>

      {/* ===================================================
          JOURNEY MAP PANEL
      ==================================================== */}

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: EASE_COZY }}
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          overflow-hidden
          rounded-[2rem]
          border
          border-[#d97732]/20
          bg-[#fffaf2]
          shadow-[0_20px_60px_rgba(74,59,50,0.10)]
          dark:border-[#d97732]/25
          dark:bg-[#1e121a]
          dark:shadow-[0_25px_70px_rgba(0,0,0,0.40)]
        "
      >
        {/* Inner border */}
        <div
          className="
            pointer-events-none
            absolute inset-[7px]
            z-30
            rounded-[1.7rem]
            border
            border-[#d97732]/10
            dark:border-[#d97732]/15
          "
        />

        {/* Corner dots */}
        <span className="absolute left-7 top-7 z-40 h-1.5 w-1.5 rounded-full bg-[#d97732]/50" />
        <span className="absolute right-7 top-7 z-40 h-1.5 w-1.5 rounded-full bg-[#d97732]/50" />
        <span className="absolute bottom-7 left-7 z-40 h-1.5 w-1.5 rounded-full bg-[#d97732]/30" />
        <span className="absolute bottom-7 right-7 z-40 h-1.5 w-1.5 rounded-full bg-[#d97732]/30" />

        {/* =================================================
            HORIZONTAL SCROLL AREA
        ================================================== */}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            relative
            overflow-x-auto
            overflow-y-hidden
            px-10
            py-14
            sm:px-16
            lg:px-20
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* -------------------------------------------------
              The map itself intentionally has a minimum width.

              This is what allows future milestones to extend
              naturally instead of squeezing everything.
          -------------------------------------------------- */}

          <div className="relative w-max min-w-[1100px] pb-4">
            {/* ===============================================
                THE JOURNEY LINE
            ================================================ */}

                <div className="pointer-events-none absolute left-[80px] right-[180px] top-[94px] h-[2px] bg-gradient-to-r from-[#d97732]/25 via-[#d97732]/50 to-[#d97732]/20"/>
            {/* Glow running along the line */}
                <div className="pointer-events-none absolute left-[80px] right-[180px] top-[92px] h-[5px] rounded-full bg-[#d97732]/10 blur-md"/>

            {/* ===============================================
                MILESTONES
            ================================================ */}

            <div className="relative flex items-start gap-4">
              {journeyItems.map((item) => (
                <article
                  key={item.id}
                  className="
                    group
                    relative
                    flex
                    w-[165px]
                    shrink-0
                    flex-col
                    items-center
                    text-center
                    sm:w-[185px]
                    lg:w-[195px]
                  "
                >
                  {/* Icon */}
                  <MilestoneIcon item={item} />

                  {/* Milestone number */}
                  <span
                    className="
                      mt-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#d97732]/60
                    "
                  >
                    0{item.id}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      mt-2
                      font-hand-custom
                      text-xl
                      font-bold
                      text-[#443934]
                      transition-colors
                      duration-300
                      group-hover:text-[#c5682b]
                      dark:text-[#f1ddd0]
                      dark:group-hover:text-[#f0a05b]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      max-w-[175px]
                      text-xs
                      leading-5
                      text-[#766a63]
                      dark:text-[#bbaaa1]
                    "
                  >
                    {item.description}
                  </p>

                  {/* Little dot beneath milestone */}
                  <span
                    className="
                      absolute
                      left-1/2
                      top-[88px]
                      z-30
                      h-3
                      w-3
                      -translate-x-1/2
                      rounded-full
                      border-2
                      border-[#fffaf2]
                      bg-[#d97732]
                      shadow-[0_0_8px_rgba(217,119,50,0.4)]
                      dark:border-[#1e121a]
                    "
                  />
                </article>
              ))}

              {/* =============================================
                  OPEN-ENDED FUTURE
              ============================================== */}

              <article
                className="
                  group
                  relative
                  flex
                  w-[220px]
                  shrink-0
                  flex-col
                  items-center
                  pt-1
                  text-center
                "
              >
                {/* Future connector */}
                <div
                  className="
                    absolute
                    -left-4
                    top-[31px]
                    w-8
                    border-t
                    border-dashed
                    border-[#d97732]/40
                  "
                />

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-dashed
                    border-[#d97732]/50
                    bg-[#fffaf2]
                    text-2xl
                    text-[#d97732]
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:border-[#d97732]
                    group-hover:shadow-[0_0_25px_rgba(217,119,50,0.18)]
                    dark:bg-[#21141c]
                  "
                >
                  →
                </div>

                <span
                  className="
                    mt-4
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#d97732]/70
                  "
                >
                  Next Chapter
                </span>

                <h3
                  className="
                    mt-2
                    font-hand-custom
                    text-xl
                    font-bold
                    text-[#443934]
                    dark:text-[#f1ddd0]
                  "
                >
                  The journey continues...
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[190px]
                    text-xs
                    leading-5
                    text-[#766a63]
                    dark:text-[#bbaaa1]
                  "
                >
                  More things to learn, build and discover.
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* =================================================
            SCROLL HINT
        ================================================== */}

        <div
          className={`
            pointer-events-none
            absolute
            bottom-5
            right-8
            z-40
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#d97732]/20
            bg-[#fffaf2]/90
            px-4
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#b86632]
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-500
            dark:border-[#d97732]/25
            dark:bg-[#24151e]/90
            dark:text-[#e8a067]
            ${showScrollHint ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
          `}
        >
          <span>Explore</span>
          <span className="animate-pulse text-sm">→</span>
        </div>
      </motion.div>

      {/* Bottom note */}
      <p
        className="mt-7 text-center font-hand-custom text-sm text-[#8b6c5c]/70 dark:text-[#c59b7e]/60">
        Still becoming. Still building. Still moving forward. ✦
      </p>
    </SectionWrapper>
  );
}