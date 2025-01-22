import { useBaseTranslations } from "./base";
import { LOCALES, TRANSLATIONS, type Locale } from "./constants";

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
