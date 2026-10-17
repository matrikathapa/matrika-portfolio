import { createContext } from 'react';

/**
 * ThemeContext Definition
 * 
 * Educational Note:
 * Defining the Context object in a pure JS file separate from the React component
 * ensures complete compatibility with React Fast Refresh and linting rules.
 */
export const ThemeContext = createContext(undefined);
