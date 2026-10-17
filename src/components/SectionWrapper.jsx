/**
 * SectionWrapper component
 * 
 * Provides consistent layout boundaries and generous vertical breathing room
 * across all portfolio sections as required by the design specification.
 * 
 * Educational Notes:
 * - Uses semantic <section> HTML tag.
 * - Enforces responsive horizontal padding (px-6 md:px-12 lg:px-20) and vertical spacing (py-24 md:py-32).
 * - Avoids cramped layouts while maintaining max-width containment.
 */
export default function SectionWrapper({
  id,
  children,
  className = '',
  maxWidth = 'max-w-6xl',
  'aria-label': ariaLabel,
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`w-full py-20 md:py-28 px-6 sm:px-10 md:px-16 flex flex-col items-center justify-center transition-colors duration-500 ${className}`}
    >
      <div className={`w-full ${maxWidth} mx-auto`}>
        {children}
      </div>
    </section>
  );
}
