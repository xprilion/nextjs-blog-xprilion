"use client";

import React, {createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect} from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

// Create context with initial undefined value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Create a Context Provider Component
interface ThemeContextProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<string>("light");

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
  );
}

// Create custom hook for accessing the context
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}
