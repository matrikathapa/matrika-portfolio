/**
 * AccessibleButton Component
 * 
 * A reusable, accessible button wrapper adhering to accessibility standards.
 * 
 * Educational Notes:
 * - Ensures a clear, visible focus ring for keyboard navigation (focus-visible:ring-2).
 * - Avoids mouse focus clutter by utilizing `focus-visible`.
 * - Forwards native button props like onClick, aria-label, disabled, and type.
 */
export default function AccessibleButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-highlight)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const variantStyles = {
    primary:
      'bg-[var(--accent-highlight)] text-[var(--bg-app)] hover:opacity-90 px-6 py-2.5 shadow-sm active:scale-95',
    secondary:
      'bg-[var(--bg-surface-subtle)] text-[var(--text-main)] border border-[var(--border-subtle)] hover:border-[var(--accent-highlight)] px-6 py-2.5 active:scale-95',
    ghost:
      'bg-transparent text-[var(--text-main)] hover:bg-[var(--bg-surface-subtle)] p-2 active:scale-90',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
