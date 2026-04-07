import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

export type Locale = "en" | "ja";

export type LocalizedText = Record<Locale, string>;

const STORAGE_KEY = "motion-recipes-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const getSystemLocale = (): Locale => {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
};

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (stored === "en" || stored === "ja") {
    return stored;
  }

  return getSystemLocale();
};

export const pickLocalizedText = (locale: Locale, text: LocalizedText) => text[locale];

export const LocaleProvider = ({ children }: PropsWithChildren) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
};
