import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arTrans from "./locals/ar.json";
import enTrans from "./locals/en.json";
const resources = {
  en: {
    translation: enTrans,
  },
  ar: {
    translation: arTrans,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "ar"],
  });

export default i18n;
