import en from './translations/en.json';
import es from './translations/es.json';

/**
 * Default locale code
 * @constant @readonly
 */
export const DEFAULT_LOCALE = "en";

/**
 * User-defined locales list
 * @constant @readonly
 */
export const LOCALES = {
  en: {
    label: "English"
  },
  es: {
    label: "Español"
  },
};

export type Locale = keyof typeof LOCALES;

/**
 * User-defined translations list
 * @constant @readonly
 */
export const TRANSLATIONS = {
  en,
  es,
};