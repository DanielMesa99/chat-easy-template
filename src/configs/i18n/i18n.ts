import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/** Custom dependencies **/
import { en, es } from './locale';

/**
 * Initializes the i18n instance with the necessary configurations.
 *
 * @module i18n
 */

/**
 * English translations.
 * @type {Object}
 */
const enTranslations: object = en;

/**
 * Spanish translations.
 * @type {Object}
 */
const esTranslations: object = es;

i18n
  .use(initReactI18next) // Integrates i18next with React
  .init({
    /**
     * Resources containing translations for different languages.
     * @type {Object}
     */
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
    },
    /**
     * Default language.
     * @type {string}
     */
    lng: 'en',
    /**
     * Fallback language if the current language's translation is not available.
     * @type {string}
     */
    fallbackLng: 'en',
    /**
     * Compatibility mode for JSON version.
     * @type {string}
     */
    compatibilityJSON: 'v4',
    /**
     * Interpolation settings.
     * @type {Object}
     */
    interpolation: {
      /**
       * Disables escaping of values.
       * @type {boolean}
       */
      escapeValue: false,
    },
    /**
     * React-specific settings for i18next.
     * @type {Object}
     */
    react: {
      /**
       * Events to bind to i18next.
       * @type {string}
       */
      bindI18n: 'languageChanged loaded',
      /**
       * Events to bind to the i18next store.
       * @type {string}
       */
      bindI18nStore: 'added',
      /**
       * Enables suspense mode for loading translations.
       * @type {boolean}
       */
      useSuspense: true,
    },
  });

export { i18n };
