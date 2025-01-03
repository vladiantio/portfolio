import { DEFAULT_LOCALE, type Locale } from "./constants";

/**
 * Helper to get the translation function
 * @param - The current language
 * @returns - The translation function
 */
export function useCustomTranslations(translations: { [key: string]: Record<string, string> }, lang?: Locale) {
  return function t(key: keyof typeof translations[typeof DEFAULT_LOCALE]): string {
    return translations[lang ?? DEFAULT_LOCALE][key] || translations[DEFAULT_LOCALE][key] || "";
  };
}
