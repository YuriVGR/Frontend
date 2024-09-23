import React, { createContext, useState, useEffect, useContext } from 'react';
import { setTheme, getColors, isDarkThemeGlobal } from '../styles/colors';
import { createStyles, createComponentStyles } from '../styles/styles';


interface ThemeContextType {
  isDarkTheme: boolean;
  styles: any;
  componentStyles: any;
  toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeGlobal);
  const [styles, setStyles] = useState(createStyles());
  const [componentStyles, setComponentStyles] = useState(createComponentStyles());

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    setTheme(newTheme);
    setStyles(createStyles());
    setComponentStyles(createComponentStyles());
  };

  useEffect(() => {
    setStyles(createStyles());
    setComponentStyles(createComponentStyles());
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, styles, componentStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};