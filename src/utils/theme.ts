export const THEMES = ['light', 'dark', 'system'] as const;

export type Theme = (typeof THEMES)[number];

const $html = () => document.documentElement;

export function switchTheme(theme: Theme) {
  localStorage.setItem('theme', theme);
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
	$html().dataset.theme = isDark ? 'dark' : 'light';
}

export const getColor = () => getComputedStyle($html()).getPropertyValue('--main-color');

export function changeColor(value: string) {
  localStorage.setItem('color', value);
  $html().style.setProperty('--main-color', value);
}
