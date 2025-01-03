export const COLOR_SCHEMES = ['light', 'dark', 'system'] as const;

export type ColorScheme = (typeof COLOR_SCHEMES)[number];

export function getCurrentColorScheme(): ColorScheme {
  if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    return 'dark';
  } else {
    return 'light';
  }
}

export function loadCurrentColorScheme(scheme: ColorScheme) {
  if (scheme == 'dark')
    document.documentElement.classList.add('dark');
  else
    document.documentElement.classList.remove('dark');
}

export function getColorTheme() {
  if ('color' in localStorage) {
    return localStorage.color;
  } else {
    return getComputedStyle(document.documentElement).getPropertyValue('--color-hex');
  }
}

export function saveColorTheme(value: string) {
  document.documentElement.style.setProperty('--color-hex', value);
  localStorage.setItem('color', value);
}