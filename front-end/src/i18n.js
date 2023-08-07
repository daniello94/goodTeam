import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    lng: 'pl',
    fallbackLng: 'pl',
    preload: ['en', 'pl','nl','de','fr'],
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
