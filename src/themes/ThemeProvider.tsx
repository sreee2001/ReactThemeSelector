import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type ITheme } from "./ITheme";
import { LightTheme } from "./options/LightTheme";

type ThemeContextType = {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to convert camelCase to kebab-case
function camelToKebab(str: string) {
  return str.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

// Apply theme properties as CSS variables
function setCSSVariables(theme: ITheme) {
  Object.entries(theme).forEach(([key, value]) => {
    // Convert camelCase to kebab-case for CSS variable names
    const cssVar = `--${camelToKebab(key)}`;
    document.documentElement.style.setProperty(cssVar, String(value));
  });
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ITheme>(LightTheme);

  useEffect(() => {
    setCSSVariables(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function UseTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
