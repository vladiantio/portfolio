import { DEFAULT_LOCALE, LOCALES, TRANSLATIONS, type Locale } from "./constants";
import { getRelativeLocaleUrl } from "astro:i18n";

/**
 * Helper to get the translation function
 * @param - The current language
 * @returns - The translation function
 */
export function useTranslations(lang?: Locale) {
  return function t(key: keyof typeof TRANSLATIONS[typeof DEFAULT_LOCALE]): string {
    return TRANSLATIONS[lang ?? DEFAULT_LOCALE][key] || TRANSLATIONS[DEFAULT_LOCALE][key] || "";
  };
}

/**
 * Helper to get corresponding path list for all locales
 * @param url - The current URL object
 * @returns - The list of locale paths
 */
export function getLocalePaths(url: URL) {
  return Object.keys(LOCALES).map((lang) => {
    return {
      lang: lang as Locale,
      path: getRelativeLocaleUrl(lang, url.pathname.replace(/^\/[a-zA-Z-]+/, ''))
    };
  });
}

/**
 * Helper to get locale params for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
  params: { lang },
}));
