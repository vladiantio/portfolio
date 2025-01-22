import { DEFAULT_LOCALE, type Locale } from "./constants";

/**
 * A higher-order function that returns a translation function `t` based on the provided translations and an optional language parameter.
 *
 * @param translations - An object containing translations for different locales. Each locale is a key, and its value is another object containing translations for specific keys.
 * @param lang - An optional parameter representing the language to use for translation. If not provided, the default locale will be used.
 *
 * @returns A function `t` that takes a translation key as a parameter and returns the corresponding translation for the given key and language.
 * If the translation for the given key and language is not found, it will fall back to the default locale.
 * If the translation for the given key is not found in any locale, an empty string will be returned.
 *
 * @example
 * const translations = {
 *   en: {
 *     welcome: "Welcome to our website!",
 *   },
 *   es: {
 *     welcome: "¡Bienvenido a nuestro sitio web!",
 *   },
 * };
 *
 * const t = useBaseTranslations(translations, "es");
 * console.log(t("welcome")); // Output: "¡Bienvenido a nuestro sitio web!"
 *
 * const tDefault = useBaseTranslations(translations);
 * console.log(tDefault("welcome")); // Output: "Welcome to our website!"
 */
export function useBaseTranslations(translations: { [key: string]: Record<string, string> }, lang?: Locale) {
  return function t(key: keyof typeof translations[typeof DEFAULT_LOCALE]): string {
    return translations[lang ?? DEFAULT_LOCALE][key] || translations[DEFAULT_LOCALE][key] || "";
  };
}
