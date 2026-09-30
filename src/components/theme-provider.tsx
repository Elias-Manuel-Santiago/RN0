import * as React from "react";

export type ThemeMode = "light" | "dark";

type ThemeColors = {
  accent: string;
  background: string;
  border: string;
  muted: string;
  softAccent: string;
  surface: string;
  text: string;
};

type ThemeContextValue = {
  colors: ThemeColors;
  isDark: boolean;
  mode: ThemeMode;
  toggleTheme: () => void;
};

const colorsByMode: Record<ThemeMode, ThemeColors> = {
  light: {
    accent: "#6D4AFF",
    background: "#FFFFFF",
    border: "#DED6F7",
    muted: "#716C7B",
    softAccent: "#F0ECFF",
    surface: "#F8F6FF",
    text: "#17141F",
  },
  dark: {
    accent: "#BDAEFF",
    background: "#141022",
    border: "#342B4D",
    muted: "#B8B1C8",
    softAccent: "#211B33",
    surface: "#211B33",
    text: "#FFFFFF",
  },
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = React.useState<ThemeMode>("light");

  const value = React.useMemo(
    () => ({
      colors: colorsByMode[mode],
      isDark: mode === "dark",
      mode,
      toggleTheme: () => setMode((currentMode) => (currentMode === "light" ? "dark" : "light")),
    }),
    [mode],
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export function useAppTheme() {
  const theme = React.use(ThemeContext);

  if (!theme) {
    throw new Error("useAppTheme must be used inside ThemeProvider");
  }

  return theme;
}
