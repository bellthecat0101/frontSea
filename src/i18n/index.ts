import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "zh", // 預設語言
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // 載入路徑
    },
  });

export default i18n;
