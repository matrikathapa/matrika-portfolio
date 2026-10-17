import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

/**
 * Custom hook to safely consume the ThemeContext.
 * 
 * Educational Note:
 * Separating the hook into its own file satisfies React Fast Refresh rules,
 * ensuring hot module reloading preserves state smoothly during development.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
