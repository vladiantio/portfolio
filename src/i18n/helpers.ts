import { useBaseTranslations } from "./base";
import { DEFAULT_LOCALE, LOCALES, TRANSLATIONS, type Locale } from "./constants";

/**
 * Helper to get the translation function
 * @param lang - The current language
 * @returns - The translation function
 */
export const useTranslations = (lang?: Locale) => useBaseTranslations(TRANSLATIONS, lang);

/**
 * Helper to get locale params for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
  params: { lang },
}));

/**
 * Translates a given set of translations based on the provided language.
 * If the specified language is not found, it falls back to the default language.
 *
 * @template T - The type of the translations.
 * @param translations - An object containing the translations for each language.
 * @param lang - The language to translate to. If not provided, the default language is used.
 * @returns - The translated value or `null` if the translation is not found.
 */
export function translate<T>(translations: { [key: string]: T }, lang?: Locale) {
  return translations[lang ?? DEFAULT_LOCALE] || translations[DEFAULT_LOCALE] || null;
}
