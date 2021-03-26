import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources,
});

export default i18n;
