export const THEMES = ['light', 'dark', 'system'] as const;

export type Theme = (typeof THEMES)[number];

const $html = () => document.documentElement;

export function switchTheme(theme: Theme) {
  localStorage.setItem('theme', theme);
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  $html().classList[isDark ? 'add' : 'remove']('dark');

	// Expressive Code Theme
	$html().dataset.theme = isDark ? 'dark' : 'light';
}

export const getColor = () => localStorage.color ?? getComputedStyle($html()).getPropertyValue('--color-hex');

export function changeColor(value: string) {
  localStorage.setItem('color', value);
  $html().style.setProperty('--color-hex', value);
}
