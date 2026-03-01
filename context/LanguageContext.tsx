"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "@/lib/translations";

const STORAGE_KEY = "victory-digital-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "tr";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "tr") return stored;
  return "tr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next === "tr" ? "tr" : "en";
    }
  }, []);

  useEffect(() => {
    if (mounted) document.documentElement.lang = locale === "tr" ? "tr" : "en";
  }, [locale, mounted]);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
