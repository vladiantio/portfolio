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

export function formatMonth(date?: Date | number | string) {
  if (!date) return '';
  date = parseDate(date);

  const formatter = Intl.DateTimeFormat('es-CL', { year: "numeric", month: "long" });

  return formatter.format(date);
}