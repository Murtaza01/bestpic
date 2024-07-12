import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome to React and react-i18next",
      bestPic: "Best picture",
    },
  },
  ar: {
    translation: {
      Welcome: "اهلا بك في رياكت و رياكت نكست",
      bestPic: "افضل صورة",
    },
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
