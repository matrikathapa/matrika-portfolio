import { useState, useEffect } from 'react';
import { ThemeContext } from './themeContext';

/**
 * ThemeProvider Component
 * 
 * Provides global theme state ('day' or 'evening') across the application.
 * 
 * Educational Notes:
 * 1. React Context allows us to share state down the component tree without prop drilling.
 * 2. We initialize state from localStorage if available, defaulting to 'day'.
 * 3. We sync the theme to a DOM attribute `data-theme` on <html>, which drives the CSS
 *    variables defined in index.css without re-rendering unnecessary components.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('matrika-theme');
      if (savedTheme === 'day' || savedTheme === 'evening') {
        return savedTheme;
      }
    }
    return 'day';
  });

  useEffect(() => {
    // Apply data-theme to the document element so CSS custom properties activate
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'evening');
    localStorage.setItem('matrika-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'day' ? 'evening' : 'day'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
