import type { ColorScheme } from "~/types/Theme";

export function loadColorScheme(): ColorScheme {
  console.log('loaded')
  if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    return 'dark';
  } else {
    document.documentElement.classList.remove('dark')
    return 'light';
  }
}

function setColor(value: string) {
  document.documentElement.style.setProperty('--color-hex', value);
}

export function loadColorTheme() {
  if ('color' in localStorage) {
    setColor(localStorage.color);
    return localStorage.color;
  } else {
    return getComputedStyle(document.documentElement).getPropertyValue('--color-hex');
  }
}

export function saveColor(value: string) {
  setColor(value);
  localStorage.setItem('color', value);
}