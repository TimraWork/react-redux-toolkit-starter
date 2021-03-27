import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en/translation.json";
import ru from "./ru/translation.json";

export const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources,
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
