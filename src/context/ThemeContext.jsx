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
  const [themeId, setThemeId] = useState(
    () => localStorage.getItem("themeId") ?? "dark"  // ← read from storage on init
  );

  const theme = THEMES[themeId] ?? darkTheme;
  const isDark = themeId === "dark";

  // Wrap setThemeId to also save to localStorage
  const handleSetThemeId = (id) => {
    localStorage.setItem("themeId", id);  // ← save on change
    setThemeId(id);
  };

  const value = useMemo(
    () => ({ theme, themeId, setThemeId: handleSetThemeId, isDark }),
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