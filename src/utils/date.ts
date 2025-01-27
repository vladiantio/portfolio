import { DEFAULT_LOCALE, type Locale } from "@/i18n/constants";

export function parseDate(date?: Date | number | string) {
  if (!date)
    return undefined;

  if (typeof date === 'number' || typeof date === 'string')
    if (typeof date === 'string' && date.length == 10)
      return new Date(date + ' 00:00:00');
    else
      return new Date(date);
  else
    return date;
}

export function formatDate(date?: Date | number | string, locale: Locale = DEFAULT_LOCALE) {
  if (!date) return '';
  date = parseDate(date);

  return Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric" }).format(date);
}

export function formatShortDate(date?: Date | number | string, locale: Locale = DEFAULT_LOCALE) {
  if (!date) return '';
  date = parseDate(date);

  return Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric" }).format(date);
}

export function formatMonth(date?: Date | number | string, locale: Locale = DEFAULT_LOCALE) {
  if (!date) return '';
  date = parseDate(date);

  return Intl.DateTimeFormat(locale, { year: "numeric", month: "long" }).format(date);
}
