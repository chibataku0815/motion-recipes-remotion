import {
  Theme,
  type ThemeProps,
} from "@radix-ui/themes";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

type Appearance = NonNullable<ThemeProps["appearance"]>;

const STORAGE_KEY = "motion-recipes-theme";

type ThemeAppearanceContextValue = {
  appearance: Appearance;
  setAppearance: (appearance: Appearance) => void;
};

const ThemeAppearanceContext = createContext<ThemeAppearanceContextValue | null>(
  null,
);

const getSystemAppearance = (): Appearance => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

const getInitialAppearance = (): Appearance => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return getSystemAppearance();
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [appearance, setAppearance] = useState<Appearance>(getInitialAppearance);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, appearance);
  }, [appearance]);

  const value = useMemo(
    () => ({ appearance, setAppearance }),
    [appearance],
  );

  return (
    <ThemeAppearanceContext.Provider value={value}>
      <Theme
        appearance={appearance}
        accentColor="orange"
        grayColor="slate"
        panelBackground="translucent"
        radius="small"
        scaling="100%"
      >
        {children}
      </Theme>
    </ThemeAppearanceContext.Provider>
  );
};

export const useThemeAppearance = () => {
  const context = useContext(ThemeAppearanceContext);

  if (!context) {
    throw new Error("useThemeAppearance must be used within ThemeProvider");
  }

  return context;
};
