import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: <T>(en: T, zh: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");
  const toggle = useCallback(() => setLang((l) => (l === "en" ? "zh" : "en")), []);
  const t = useCallback(<T,>(en: T, zh: T): T => (lang === "en" ? en : zh), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
