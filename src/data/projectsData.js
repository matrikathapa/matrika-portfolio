/**
 * MATRIKA'S LAB — Project Universe Data
 * 
 * Educational Note:
 * Separating data from presentation components keeps code maintainable.
 * When you want to add or modify projects, simply edit this array without
 * touching any UI layout code.
 * 
 * Schema:
 * - id: unique string identifier
 * - title: project name
 * - subtitle: one-line summary
 * - category: grouping tag for constellation/filtering
 * - description: detailed walkthrough
 * - tags: array of technology keywords
 * - highlights: key learnings or architectural features
 * - demoUrl: live deployment link
 * - repoUrl: repository link
 * - featured: boolean indicating central importance in the constellation
 */
export const projectsData = [
  {
    id: 'interactive-reading-nook',
    title: 'Cozy Reading Nook',
    subtitle: 'An ambient, story-driven web reader with audio atmosphere',
    category: 'Creative Frontend',
    description:
      'A cozy, minimal digital sanctuary for readers featuring ambient soundscapes, customizable serif typography, and bookmark annotations.',
    tags: ['React', 'Tailwind CSS', 'Web Audio API', 'LocalStorage'],
    highlights: [
      'Engineered a distraction-free reading mode with customizable parchment themes.',
      'Synchronized soothing ambient soundscapes using HTML5 Web Audio API.',
      'Implemented offline progress saving using browser LocalStorage.',
    ],
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'sketch-canvas-studio',
    title: 'Sketch Canvas Studio',
    subtitle: 'Lightweight drawing tool with gesture smoothing',
    category: 'Interactive Tools',
    description:
      'An intuitive browser sketchbook created for quick visual notes, digital doodles, and illustration practice with smooth Bézier curve interpolation.',
    tags: ['HTML5 Canvas', 'JavaScript', 'Tailwind CSS', 'Pointer Events'],
    highlights: [
      'Implemented touch and pointer gesture smoothing via Bézier curve algorithms.',
      'Zero external canvas libraries — pure native browser 2D context.',
      'Export options for PNG with transparent or paper-textured backgrounds.',
    ],
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'choreography-beat-visualizer',
    title: 'Rhythm & Motion Visualizer',
    subtitle: 'Audio-reactive beat mapper designed for dance practice',
    category: 'Creative Frontend',
    description:
      'An audio-reactive visualizer that maps beat drops, tempo changes, and rhythm patterns to visual pulses to aid dance choreography practice.',
    tags: ['React', 'CSS Keyframes', 'Web Audio API', 'SVG'],
    highlights: [
      'Extracted real-time audio frequencies with Web Audio AnalyserNode.',
      'Smooth 60fps waveform animations driven by CSS transforms.',
      'Custom playback speed controls for step-by-step dance rehearsals.',
    ],
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    id: 'dev-workspace-dashboard',
    title: 'Minimalist Focus Hub',
    subtitle: 'Personal productivity workspace with focus timers',
    category: 'Web Application',
    description:
      'A quiet, low-stimulus productivity dashboard featuring custom focus timers, daily intention journaling, and personal dev notes.',
    tags: ['React', 'State Management', 'Tailwind CSS', 'CSS Grid'],
    highlights: [
      'Accessible keyboard-first interface with full ARIA landmarks.',
      'Dynamic day/evening ambient color transitions matching circadian rhythms.',
      'Zero telemetry or external tracking for complete personal privacy.',
    ],
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
  },
];
