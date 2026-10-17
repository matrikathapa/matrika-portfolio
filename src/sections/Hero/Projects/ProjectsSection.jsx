import { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import SectionWrapper from '../../../components/SectionWrapper';
import { EASE_COZY, VIEWPORT_ONCE } from '../../../utils/motion';

/* =========================================================
   PROJECT DATA

   Add new projects here.

   The orbit position is calculated automatically, so you
   don't have to manually position every new project.
========================================================= */

const projects = [
  {
    id: 1,
    title: 'Plant Growth Counter',
    category: 'JavaScript',
    description:
      'An interactive project that tracks plant growth through user interaction.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Interactive growth counter',
      'Dynamic DOM updates',
      'Responsive interface',
    ],
    icon: '🌱',
    link: '#',
  },

  {
    id: 2,
    title: 'Weather App',
    category: 'React',
    description:
      'A weather application that fetches and displays useful weather information through an API.',
    tech: ['React', 'JavaScript', 'API', 'CSS'],
    features: [
      'API integration',
      'Dynamic weather data',
      'Responsive UI',
    ],
    icon: '☁',
    link: '#',
  },

  {
    id: 3,
    title: 'E-Commerce Store',
    category: 'React',
    description:
      'A responsive e-commerce experience built while exploring reusable components and interactive interfaces.',
    tech: ['React', 'JavaScript', 'CSS'],
    features: [
      'Reusable components',
      'Product browsing',
      'Interactive UI',
    ],
    icon: '✦',
    link: '#',
  },

  {
    id: 4,
    title: 'Task Manager',
    category: 'JavaScript',
    description:
      'A productivity application for creating, organizing and managing tasks.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Add and remove tasks',
      'Task management',
      'Responsive layout',
    ],
    icon: '✓',
    link: '#',
  },

  {
    id: 5,
    title: 'More Coming Soon',
    category: 'Next Experiment',
    description:
      'This space is waiting for the next idea I decide to build.',
    tech: ['???'],
    features: [
      'Something new',
      'Something I want to learn',
      'Something worth building',
    ],
    icon: '✧',
    link: '#',
  },

  {
    id: 6,
    title: 'Future Project',
    category: 'In Progress',
    description:
      'Another project will find its place here as my skills continue to grow.',
    tech: ['Learning...'],
    features: [
      'More ideas',
      'More experiments',
      'More things to discover',
    ],
    icon: '✦',
    link: '#',
  },
];

/* =========================================================
   SPARKLE
========================================================= */

function Sparkle({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        select-none
        text-[#d97732]/50
        ${className}
      `}
    >
      ✦
    </span>
  );
}

/* =========================================================
   PROJECT ORBIT POSITION

   Projects are automatically distributed between two
   orbital paths.

   This means adding another project doesn't require
   manually placing another card.
========================================================= */

function getOrbitConfig(index) {
  const ring = index % 2 === 0 ? 1 : 2;

  const positionIndex = Math.floor(index / 2);

  // Each ring gets evenly spaced project positions.
  const projectsPerRing = 4;

  const angle =
    (positionIndex * (360 / projectsPerRing)) +
    (ring === 2 ? 45 : 0);

  return {
    ring,
    angle: angle % 360,
  };
}

/* =========================================================
   PROJECT CIRCLE
========================================================= */

function ProjectCircle({
  project,
  index,
  orbitAngle,
  isHovered,
  onHover,
  onInspect,
  universeSize,
}) {
  const { ring, angle } = getOrbitConfig(index);

  /*
    Responsive orbit radii.

    The actual orbit movement is calculated from the
    current animation angle.
  */

     const safeWidth = Math.max(universeSize.width, 320);
     const safeHeight = Math.max(universeSize.height, 420);

     const ringSizes = {
        1: {
            rx: Math.min(safeWidth * 0.22, 230),
            ry: Math.min(safeHeight * 0.18, 140),
        },

        2: {
            rx: Math.min(safeWidth * 0.38, 380),
            ry: Math.min(safeHeight * 0.29, 220),
        },
    };

     const radius = ringSizes[ring];

  const currentAngle = (angle + orbitAngle) % 360;
  const radians = (currentAngle * Math.PI) / 180;

  /*
    The parent orbit stage uses CSS variables for
    responsive scaling.
  */

  const x = Math.cos(radians) * radius.rx;
  const y = Math.sin(radians) * radius.ry;

  /*
    Slight depth illusion.

    Objects coming toward the viewer become a little
    larger and brighter.
  */

  const depth = Math.sin(radians);

  const scale =
    (1 + depth * 0.08) * (isHovered ? 1.08 : 1);

  const opacity = 0.82 + (depth + 1) * 0.09;

  return (
    <button
      type="button"
      aria-label={`Inspect ${project.title}`}
      onClick={() => onInspect(project)}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className="group absolute left-1/2 top-1/2 z-30 outline-none"
      style={{
        transform: `
          translate(-50%, -50%)
          translate(${x}px, ${y}px)
          scale(${scale})
        `,
        opacity,
        transition:
          'opacity 300ms ease, transform 350ms ease',
      }}
    >
      {/* =================================================
          PROJECT GLOW
      ================================================= */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-4
          rounded-full
          bg-[#d97732]/10
          blur-xl
          transition-all
          duration-500
          group-hover:bg-[#d97732]/20
        "
        style={{
          opacity: isHovered ? 1 : 0.6,
        }}
      />

      {/* =================================================
          PROJECT CIRCLE
      ================================================= */}

      <span
        className="
          relative
          flex
          h-[124px]
          w-[124px]
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-[#d97732]/30
          bg-[#fffaf1]
          px-3
          text-center
          shadow-[0_10px_35px_rgba(74,59,50,0.10)]
          transition-all
          duration-500
          hover:border-[#d97732]/70
          hover:shadow-[0_0_35px_rgba(217,119,50,0.25)]
          dark:border-[#d97732]/35
          dark:bg-[#241520]
          dark:shadow-[0_10px_35px_rgba(0,0,0,0.35)]
          dark:hover:border-[#d97732]/80
          dark:hover:shadow-[0_0_35px_rgba(217,119,50,0.35)]
          sm:h-[136px]
          sm:w-[136px]
        "
      >
        {/* Inner ring */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-2
            rounded-full
            border
            border-dashed
            border-[#d97732]/10
            transition-all
            duration-700
            group-hover:rotate-12
            group-hover:border-[#d97732]/30
          "
        />

        {/* Small orbital dot */}
        <span
          aria-hidden="true"
          className="
            absolute
            right-2
            top-5
            h-2
            w-2
            rounded-full
            bg-[#d97732]/70
            shadow-[0_0_8px_rgba(217,119,50,0.35)]
            transition-transform
            duration-300
            group-hover:scale-150
          "
        />

        {/* Icon */}
        <span
          className="
            relative
            z-10
            text-2xl
            transition-transform
            duration-500
            group-hover:-translate-y-1
          "
        >
          {project.icon}
        </span>

        {/* Project title */}
        <span
          className="
            relative
            z-10
            mt-2
            max-w-[90px]
            font-hand-custom
            text-sm
            font-bold
            leading-tight
            text-[#433731]
            transition-colors
            duration-300
            group-hover:text-[#c5682b]
            dark:text-[#f5e8dc]
            dark:group-hover:text-[#f0a05b]
          "
        >
          {project.title}
        </span>

        {/* Category */}
        <span
          className="
            relative
            z-10
            mt-1
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#d97732]/65
            dark:text-[#e8a067]
          "
        >
          {project.category}
        </span>

        {/* Hover instruction */}
        <span
          className="
            pointer-events-none
            absolute
            -bottom-8
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            rounded-full
            bg-[#433731]
            px-3
            py-1
            text-[8px]
            font-medium
            tracking-wide
            text-[#fff8ec]
            opacity-0
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:opacity-100
            dark:border
            dark:border-[#d97732]/30
            dark:bg-[#2e1a29]
            dark:text-[#f5e8dc]
          "
        >
          Inspect project ✦
        </span>
      </span>
    </button>
  );
}

/* =========================================================
   INSPECT PROJECT PANEL
========================================================= */

function InspectPanel({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#2d211e]/35
        dark:bg-[#0d0912]/80
        px-5
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Inspect ${project.title}`}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[2rem]
          border
          border-[#d97732]/25
          bg-[#fffaf2]
          p-7
          shadow-[0_30px_100px_rgba(61,43,35,0.25)]
          dark:border-[#d97732]/35
          dark:bg-[#1e121b]
          dark:shadow-[0_30px_100px_rgba(0,0,0,0.65)]
          sm:p-9
        "
      >
        <Sparkle className="right-8 top-7 text-sm" />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="
            absolute
            right-5
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#d97732]/20
            text-lg
            text-[#786b64]
            transition-all
            duration-300
            hover:rotate-90
            hover:border-[#d97732]/50
            hover:text-[#c5682b]
            dark:border-[#d97732]/30
            dark:text-[#cdbdb4]
            dark:hover:border-[#d97732]/70
            dark:hover:text-[#f0a05b]
          "
        >
          ×
        </button>

        {/* Header */}
        <div className="pr-10">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#d97732]/75
              dark:text-[#e8a067]
            "
          >
            Inspect Project
          </p>

          <div className="mt-3 flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#d97732]/25
                bg-[#fff0db]
                text-xl
                dark:border-[#d97732]/35
                dark:bg-[#2d1a29]
              "
            >
              {project.icon}
            </div>

            <div>
              <h3
                className="
                  font-hand-custom
                  text-3xl
                  font-bold
                  text-[#433731]
                  dark:text-[#f5e8dc]
                "
              >
                {project.title}
              </h3>

              <p className="mt-1 text-xs text-[#a05d36] dark:text-[#e8a067]">
                {project.category}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-[#d97732]/15 dark:bg-[#d97732]/25" />

        {/* Description */}
        <p
          className="
            text-sm
            leading-7
            text-[#665b55]
            dark:text-[#cdbdb4]
          "
        >
          {project.description}
        </p>

        {/* Details */}
        <div
          className="
            mt-7
            grid
            gap-6
            sm:grid-cols-2
          "
        >
          {/* Tech */}
          <div>
            <p
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#d97732]/70
                dark:text-[#e8a067]
              "
            >
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-[#d97732]/15
                    bg-[#fff3df]
                    px-3
                    py-1.5
                    text-xs
                    text-[#665047]
                    dark:border-[#d97732]/25
                    dark:bg-[#291726]
                    dark:text-[#eaded5]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#d97732]/70
                dark:text-[#e8a067]
              "
            >
              Highlights
            </p>

            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="
                    flex
                    gap-2
                    text-xs
                    leading-5
                    text-[#665b55]
                    dark:text-[#cdbdb4]
                  "
                >
                  <span className="text-[#d97732]">
                    ✦
                  </span>

                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* View Project */}
        <div className="mt-8 flex justify-end">
          <a
            href={project.link}
            onClick={(e) => {
              if (project.link === '#') {
                e.preventDefault();
              }
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#d97732]
              px-5
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-[0_8px_20px_rgba(217,119,50,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#c5682b]
            "
          >
            View Project
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT SECTION
========================================================= */

export default function ProjectsSection() {
  const shouldReduce = useReducedMotion();
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const universeRef = useRef(null);

  const [universeSize, setUniverseSize] = useState({
    width: 1000,
    height: 680,
  });

  useEffect(() => {
  const element = universeRef.current;

  if (!element) return;

  const updateSize = () => {
    const rect = element.getBoundingClientRect();

    setUniverseSize({
      width: rect.width,
      height: rect.height,
    });
  };

  updateSize();

  const observer = new ResizeObserver(updateSize);
  observer.observe(element);

  return () => observer.disconnect();
}, []);

  /* =======================================================
     ORBIT ANIMATION

     Slow, continuous movement.

     Hovering a project slows the entire universe down,
     making it easier to interact with.
  ======================================================= */

  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta =
        (currentTime - lastTime) / 1000;

      lastTime = currentTime;

      const speed =
        hoveredProject !== null
          ? 0.8
          : 4;

      setOrbitAngle(
        (previous) =>
          (previous + speed * delta) % 360
      );

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(animationFrame);
  }, [hoveredProject]);

  return (
    <>
      <SectionWrapper
        id="projects"
        aria-label="Matrika's Project Lab"
        maxWidth="max-w-7xl"
        className="
          relative
          overflow-hidden
          border-t
          border-black/5
          dark:border-white/5
          py-20
          md:py-28
        "
      >
        {/* =================================================
            DECORATION
        ================================================= */}

        <Sparkle className="left-[8%] top-16 text-xs" />

        <Sparkle className="right-[9%] top-24 text-sm" />

        <Sparkle className="left-[13%] bottom-24 text-[10px]" />

        <Sparkle className="right-[13%] bottom-20 text-xs" />


        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.55, ease: EASE_COZY }}
          className="
            relative
            z-10
            mx-auto
            mb-12
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#d97732]/70
            "
          >
            A LITTLE UNIVERSE OF THINGS I'VE BUILT
          </p>

          <h2
            className="
              mt-3
              font-hand-custom
              text-4xl
              font-bold
              tracking-wide
              text-[#3b302b]
              dark:text-[#f5e8dc]
              sm:text-5xl
            "
          >
            My Project Lab ✦

            <span className="ml-2 text-[#d97732]">
              ✦
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[#665b55]
              dark:text-[#cdbdb4]
              sm:text-base
            "
          >
            Experiments, ideas and little things I've brought to life.
          </p>
        </motion.div>

        {/* =================================================
            UNIVERSE
        ================================================= */}

        <motion.div
            ref={universeRef}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: EASE_COZY }}
            className="relative z-10 mx-auto flex h-[680px] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] border border-[#d97732]/15 bg-[#fffdf8] shadow-[0_15px_50px_rgba(74,59,50,0.06)] dark:border-[#d97732]/25 dark:bg-[#191019] dark:shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:h-[680px] md:h-[700px]">
          {/* Inner frame */}
          <div
            className="pointer-events-none absolute inset-3 rounded-[1.7rem] border border-[#d97732]/10 dark:border-[#d97732]/15 "/>

          {/* =================================================
              ORBIT RINGS

              These are visual tracks only.
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[250px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
              border-dashed
              border-[#d97732]/25
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[410px]
              w-[720px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[50%]
              border
              border-[#d97732]/15
            "
          />

          {/* Soft middle glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[280px]
              w-[480px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#d97732]/5
              blur-3xl
            "
          />

          {/* =================================================
              CENTRAL LAB
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              flex
              -translate-x-1/2
              -translate-y-1/2
              flex-col
              items-center
            "
          >
            {/* Orbiting decorative ring */}
            <div
              className="
                pointer-events-none
                absolute
                h-44
                w-44
                rounded-full
                border
                border-dashed
                border-[#d97732]/20
                animate-[spin_18s_linear_infinite]
              "
            />

            {/* Central circle */}
            <div
              className="
                relative
                flex
                h-32
                w-32
                flex-col
                items-center
                justify-center
                rounded-full
                border-2
                border-[#d97732]/35
                bg-[#fff8ec]
                text-center
                shadow-[0_10px_45px_rgba(217,119,50,0.13)]
                dark:border-[#d97732]/45
                dark:bg-[#251522]
                dark:shadow-[0_10px_45px_rgba(217,119,50,0.22)]
              "
            >
              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#d97732]/65
                  dark:text-[#e8a067]
                "
              >
                Welcome to
              </span>

              <span
                className="
                  mt-1
                  font-hand-custom
                  text-lg
                  font-bold
                  text-[#433731]
                  dark:text-[#f5e8dc]
                "
              >
                MATRIKA'S
              </span>

              <span
                className="
                  font-hand-custom
                  text-lg
                  font-bold
                  text-[#d97732]
                "
              >
                LAB
              </span>

              <span
                className="
                  absolute
                  -right-1
                  top-3
                  text-xs
                  text-[#d97732]
                "
              >
                ✦
              </span>
            </div>
          </div>

          {/* =================================================
              PROJECTS
          ================================================= */}

          {projects.map((project, index) => (
            <ProjectCircle key={project.id}
            project={project}
            index={index}
            orbitAngle={orbitAngle}
            universeSize={universeSize}
            isHovered={hoveredProject === project.id}
            onHover={setHoveredProject}
            onInspect={setSelectedProject}/>
          ))}

          {/* =================================================
              SMALL ORBITING SATELLITES
          ================================================= */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-[#e7a36c] shadow-[0_0_14px_rgba(217,119,50,0.45)]"
            style={{
              transform: `
                translate(-50%, -50%)
                translate(
                  ${Math.cos(
                    ((orbitAngle * 1.4 + 70) *
                      Math.PI) /
                      180
                  ) * 360}px,
                  ${
                    Math.sin(
                      ((orbitAngle * 1.4 + 70) *
                        Math.PI) /
                        180
                    ) * 205
                  }px
                )
              `,
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-[#d97732]/65 shadow-[0_0_10px_rgba(217,119,50,0.35)]"
            style={{
              transform: `
                translate(-50%, -50%)
                translate(
                  ${Math.cos(
                    ((orbitAngle * 0.7 + 210) *
                      Math.PI) /
                      180
                  ) * 210}px,
                  ${
                    Math.sin(
                      ((orbitAngle * 0.7 + 210) *
                        Math.PI) /
                        180
                    ) * 125
                  }px
                )
              `,}}/>


          {/* =================================================
              INSTRUCTION
          ================================================= */}

          <div
            className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a68f82] dark:text-[#bbaaa1]">
            Click a project to inspect ✦
          </div>
        </motion.div>

        {/* =================================================
            FOOTNOTE
        ================================================= */}

        <div className="relative z-10 mt-10 text-center">
          <p
            className="font-hand-custom text-sm text-[#8b6c5c]/75 dark:text-[#c59b7e]/70">
            More experiments will find their way here. ✦
          </p>
        </div>
      </SectionWrapper>

      {/* =====================================================
          INSPECT MODAL
      ====================================================== */}

      {selectedProject && (
        <InspectPanel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}