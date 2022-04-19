import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeToggleContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeToggle = () => {
  return useContext(ThemeToggleContext);
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     setIsDark(true);
  //   } else {
  //     setIsDark(false);
  //   }
  // }, []);

  const handler = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={isDark}>
      <ThemeToggleContext.Provider value={handler}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
