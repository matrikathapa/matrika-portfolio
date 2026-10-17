import { useState, useEffect } from 'react';
import CrescentLogo from './CrescentLogo';
import MoonToggle from './MoonToggle';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hobbies', href: '#creative-corner' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Navbar Component
 * 
 * Clean, responsive navigation bar consistent with the cozy workspace visual identity.
 * 
 * Educational Notes:
 * 1. Intersection / Scroll Tracking: Listens to scroll position to highlight the currently
 *    active section with an amber underline indicator, mirroring the reference mockup.
 * 2. Accessibility: Includes full ARIA attributes (`aria-expanded`, `aria-controls`, `role="navigation"`)
 *    and closes mobile menu on Escape key press.
 * 3. Glassmorphism / Atmosphere: Uses backdrop-blur with a subtle dark tint so it blends
 *    seamlessly over the room artwork on desktop and mobile.
 */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for glassmorphism and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    } else if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1b0c0e]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#1b0c0e]/75 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Left: Crescent Book Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-highlight)] rounded-lg p-1"
          aria-label="Matrika - Back to Home"
        >
          <CrescentLogo showText={true} className="w-8 h-8" />
        </a>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-highlight)] rounded-md ${
                    isActive
                      ? 'text-[#e09f3e] font-semibold'
                      : 'text-amber-100/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active Link Underline Indicator matching reference */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#e09f3e] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: Signature Moon Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <MoonToggle />

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden p-2 rounded-lg text-amber-100/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-highlight)] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              /* Close Icon (X) */
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Navigation Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#1b0c0e]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <ul className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#e09f3e]/15 text-[#e09f3e] font-semibold'
                        : 'text-amber-100/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
