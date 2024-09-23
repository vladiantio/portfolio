import type { ColorScheme } from "~/types/Theme";

export function loadColorScheme(): ColorScheme {
  if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    return 'dark';
  } else {
    document.documentElement.classList.remove('dark')
    return 'light';
  }
}

function setColorHue(hue: number) {
  document.documentElement.style.setProperty('--hue-primary', hue.toString());
}

function setColorIntensity(intensity: number) {
  document.documentElement.style.setProperty('--intensity', intensity.toString());
}

export function loadColorTheme() {
  if ('huePrimary' in localStorage) {
    setColorHue(localStorage.huePrimary);
  }
  if ('colorIntensity' in localStorage) {
    setColorIntensity(localStorage.colorIntensity);
  }
}

export function getColorHue() {
  if ('huePrimary' in localStorage) {
    return localStorage.huePrimary as number;
  } else {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue-primary'));
  }
}

export function getColorIntensity() {
  if ('colorIntensity' in localStorage) {
    return localStorage.colorIntensity as number;
  } else {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--intensity'));
  }
}

export function saveColorHue(hue: number) {
  setColorHue(hue);
  localStorage.setItem('huePrimary', hue.toString());
}

export function saveColorIntensity(intensity: number) {
  setColorIntensity(intensity);
  localStorage.setItem('colorIntensity', intensity.toString());
}