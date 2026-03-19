import { createContext, useContext, useState, useMemo } from "react";
import { darkTheme, lightTheme } from "../data/theme";

const THEMES = { dark: darkTheme, light: lightTheme };

const ThemeContext = createContext({
  theme: darkTheme,
  themeId: "dark",
  setThemeId: () => {},
  isDark: true,
});

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState("dark");
  const theme = THEMES[themeId] ?? darkTheme;
  const isDark = themeId === "dark";
  const value = useMemo(
    () => ({ theme, themeId, setThemeId, isDark }),
    [theme, themeId, isDark]
  );
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
