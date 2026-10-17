/**
 * Skills Data
 * 
 * Educational Note:
 * Per Matrika's specification, skills avoid corporate progress bars or
 * artificial percentages. Instead, skills are grouped meaningfully into
 * Core Development, Creative Capabilities, and Tooling & Practices.
 */
export const skillsData = [
  {
    category: 'Core Frontend',
    description: 'The foundation of my daily craft, building clean, accessible web interfaces.',
    skills: [
      { name: 'HTML5 Semantic Markup', note: 'Accessible structure & SEO' },
      { name: 'Modern CSS & Tailwind', note: 'Responsive design & design systems' },
      { name: 'JavaScript (ES6+)', note: 'Asynchronous logic, DOM APIs, modern syntax' },
      { name: 'React.js & JSX', note: 'Component architecture, hooks, state flow' },
    ],
  },
  {
    category: 'Creative & Visual',
    description: 'Where technical discipline meets artistic curiosity.',
    skills: [
      { name: 'UI / Layout Design', note: 'Visual hierarchy, typography, whitespace' },
      { name: 'SVG & Vector Art', note: 'Scalable icons & decorative elements' },
      { name: 'Motion & Micro-interactions', note: 'Intentional, smooth CSS transitions' },
      { name: 'Digital Sketching', note: 'Wireframing ideas & visual storyboarding' },
    ],
  },
  {
    category: 'Tools & Workflow',
    description: 'Tools that keep development organized, predictable, and maintainable.',
    skills: [
      { name: 'Git & GitHub', note: 'Version control & collaborative workflows' },
      { name: 'Vite & Modern Tooling', note: 'Fast bundling & hot module replacement' },
      { name: 'Browser DevTools', note: 'DOM debugging, network inspection, performance' },
      { name: 'Responsive Testing', note: 'Mobile-first consistency across viewports' },
    ],
  },
];
