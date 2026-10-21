import { motion, useReducedMotion } from 'motion/react';
import SectionWrapper from '../../../components/SectionWrapper';
import { EASE_COZY, VIEWPORT_ONCE } from '../../../utils/motion';

/* =========================================================
   SKILLS DATA

   Keep the skills here so they are easy to edit later.
========================================================= */

const skillGroups = [
  {
    id: 'frontend',
    label: '01',
    title: 'Frontend',
    description: 'The things I use to build interactive experiences.',
    skills: [
      {
        name: 'HTML',
        icon: '</>',
        description: 'Building the structure behind every page.',
      },
      {
        name: 'CSS',
        icon: '#',
        description: 'Turning structure into something expressive.',
      },
      {
        name: 'JavaScript',
        icon: 'JS',
        description: 'Adding logic, interaction and life.',
      },
      {
        name: 'React',
        icon: '⚛',
        description: 'Creating dynamic interfaces with components.',
      },
      {
        name: 'Tailwind CSS',
        icon: 'TW',
        description: 'Styling interfaces efficiently and responsively.',
      },
    ],
  },

  {
    id: 'tools',
    label: '02',
    title: 'Tools & Workflow',
    description: 'The tools that help me turn ideas into working projects.',
    skills: [
      {
        name: 'Git',
        icon: '⌘',
        description: 'Keeping track of changes and experiments.',
      },
      {
        name: 'GitHub',
        icon: '◉',
        description: 'Sharing, managing and collaborating on code.',
      },
      {
        name: 'VS Code',
        icon: '⌁',
        description: 'My little workspace for writing code.',
      },
      {
        name: 'APIs',
        icon: '{ }',
        description: 'Connecting applications to useful data.',
      },
    ],
  },

  {
    id: 'creative',
    label: '03',
    title: 'Creative Side',
    description: 'The things that influence how I think about interfaces.',
    skills: [
      {
        name: 'UI Design',
        icon: '✦',
        description: 'Making interfaces feel intuitive and inviting.',
      },
      {
        name: 'Responsive Design',
        icon: '⌗',
        description: 'Making things work beautifully across screens.',
      },
      {
        name: 'Problem Solving',
        icon: '☼',
        description: 'Breaking complicated problems into smaller ones.',
      },
    ],
  },
];

/* =========================================================
   DECORATIVE SPARKLE
========================================================= */

function Sparkle({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        select-none
        text-[#d97732]/55
        ${className}
      `}
    >
      ✦
    </span>
  );
}

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ skill }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: EASE_COZY },
        },
      }}
      className="
        group
        relative
        min-h-[150px]
        overflow-hidden
        rounded-2xl
        border
        border-[#d97732]/15
        bg-[#fffaf2]
        p-5
        shadow-[0_8px_25px_rgba(74,59,50,0.06)]
        transition-all
        duration-400
        hover:-translate-y-2
        hover:border-[#d97732]/50
        hover:shadow-[0_16px_40px_rgba(217,119,50,0.18)]
        dark:border-[#d97732]/20
        dark:bg-[#241622]
        dark:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
        dark:hover:border-[#d97732]/60
        dark:hover:shadow-[0_16px_40px_rgba(217,119,50,0.25)]
      "
    >
      {/* Decorative corner */}
      <span
        className="
          pointer-events-none
          absolute
          -right-5
          -top-5
          h-14
          w-14
          rounded-full
          border
          border-[#d97732]/10
          transition-transform
          duration-500
          group-hover:scale-150
        "
      />

      {/* Icon */}
      <div
        className="
          mb-5
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-[#d97732]/20
          bg-[#fff3df]
          font-semibold
          text-[#bd642a]
          shadow-sm
          transition-all
          duration-300
          group-hover:-rotate-3
          group-hover:scale-105
          group-hover:border-[#d97732]/40
          dark:border-[#d97732]/30
          dark:bg-[#2d1b2a]
          dark:text-[#f0a05b]
          dark:group-hover:border-[#d97732]/60
        "
      >
        <span className="text-sm">
          {skill.icon}
        </span>
      </div>

      {/* Skill name */}
      <h4
        className="
          font-hand-custom
          text-xl
          font-bold
          tracking-wide
          text-[#433731]
          transition-colors
          duration-300
          group-hover:text-[#c5682b]
          dark:text-[#f5e8dc]
          dark:group-hover:text-[#f0a05b]
        "
      >
        {skill.name}
      </h4>

      {/* Description */}
      <p
        className="
          mt-2
          text-xs
          leading-5
          text-[#786b64]
          dark:text-[#cdbdb4]
        "
      >
        {skill.description}
      </p>

      {/* Bottom accent */}
      <div
        className="
          absolute
          bottom-0
          left-5
          h-[2px]
          w-0
          rounded-full
          bg-[#d97732]
          transition-all
          duration-500
          group-hover:w-12
        "
      />
    </motion.div>
  );
}

/* =========================================================
   SKILL GROUP
========================================================= */

function SkillGroup({ group }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: EASE_COZY },
        },
      }}
      className="
        relative
        rounded-[1.75rem]
        border
        border-[#d97732]/15
        bg-[#fffdf8]/70
        p-6
        shadow-[0_12px_35px_rgba(74,59,50,0.05)]
        dark:border-[#d97732]/20
        dark:bg-[#1a121c]/70
        dark:shadow-[0_14px_40px_rgba(0,0,0,0.35)]
        sm:p-7
        lg:p-8
      "
    >
      {/* Group number */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#d97732]/65
              dark:text-[#e8a067]
            "
          >
            {group.label}
          </span>

          <h3
            className="
              mt-1
              font-hand-custom
              text-2xl
              font-bold
              text-[#433731]
              dark:text-[#f5e8dc]
              sm:text-3xl
            "
          >
            {group.title}
          </h3>

          <p
            className="
              mt-2
              max-w-md
              text-xs
              leading-5
              text-[#786b64]
              dark:text-[#cdbdb4]
              sm:text-sm
            "
          >
            {group.description}
          </p>
        </div>

        <span
          className="
            hidden
            text-xl
            text-[#d97732]/50
            sm:block
          "
        >
          ✦
        </span>
      </div>

      {/* Skills */}
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
        "
      >
        {group.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   SKILLS SECTION
========================================================= */

export default function SkillsSection() {
  const shouldReduce = useReducedMotion();

  return (
    <SectionWrapper
      id="skills"
      aria-label="Matrika's Skills"
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
      {/* ===================================================
          BACKGROUND DECORATION
      ==================================================== */}

      <Sparkle className="left-[7%] top-16 text-xs" />

      <Sparkle className="right-[8%] top-24 text-sm animate-pulse" />

      <Sparkle className="left-[14%] bottom-24 text-[10px]" />

      <Sparkle className="right-[15%] bottom-16 text-xs" />

      {/* Small decorative circles */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-1/2
          h-2
          w-2
          rounded-full
          bg-[#d97732]/25
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[55%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#d97732]/30
        "
      />

      {/* ===================================================
          HEADING
      ==================================================== */}

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.65, ease: EASE_COZY }}
        className="
          relative
          z-10
          mx-auto
          mb-14
          max-w-3xl
          text-center
        "
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
          Things I'm learning & building with
        </p>

        <h2
          className="
            font-hand-custom
            text-4xl
            font-bold
            tracking-wide
            text-[#3b302b]
            dark:text-[#f5e8dc]
            sm:text-5xl
          "
        >
          My Toolbox
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
          A collection of technologies, tools and creative
          skills I'm using to turn ideas into interactive
          experiences.
        </p>
      </motion.div>

      {/* ===================================================
          TOOLBOX
      ==================================================== */}

      <motion.div
        initial={shouldReduce ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.14,
            },
          },
        }}
        className="
          relative
          z-10
          grid
          gap-7
          lg:grid-cols-2
        "
      >
        {skillGroups.map((group) => (
          <SkillGroup
            key={group.id}
            group={group}
          />
        ))}
      </motion.div>

      {/* ===================================================
          LITTLE FOOTNOTE
      ==================================================== */}

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.65, ease: EASE_COZY, delay: 0.2 }}
        className="
          relative
          z-10
          mt-12
          text-center
        "
      >
        <p
          className="
            font-hand-custom
            text-sm
            text-[#8b6c5c]/70
            dark:text-[#c59b7e]/70
          "
        >
          Still learning. Still experimenting. Still adding
          things to the toolbox. ✦
        </p>
      </motion.div>
    </SectionWrapper>
  );
}