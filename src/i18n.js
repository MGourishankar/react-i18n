import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import Languagedetector from 'i18next-browser-languagedetector';

const fallbackLng = ['en'];

i18n.use(Backend).use(Languagedetector).use(initReactI18next).init({
    lng: 'nl',
    fallbackLng,
    detection: {
        checkWhitelist: true
    },
    backend: {
        loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    },
    ns: ['translations']
});

export default i18n;

