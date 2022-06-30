import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import languagesArray from './assets/languages';
import { store } from './store/index';
import App from './App';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: languagesArray,
    fallbackLng: 'en',
    detection: {
      order: [ 'localStorage', 'htmlTag' ],
    },
    backend: { loadPath: './locales/{{lng}}/translation.json' },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
