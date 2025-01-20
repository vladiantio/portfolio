import defaultTheme from 'tailwindcss/defaultTheme';
import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector'],
	theme: {
		extend: {
			colors: {
				body: 'oklch(var(--color-body) / <alpha-value>)',
				background: 'oklch(var(--color-background) / <alpha-value>)',
				foreground: 'oklch(var(--color-foreground) / <alpha-value>)',
				soft: 'oklch(var(--color-soft) / <alpha-value>)',
				muted: 'oklch(var(--color-muted) / <alpha-value>)',
				primary: {
					DEFAULT: 'oklch(var(--color-primary) / <alpha-value>)',
					hover: 'oklch(var(--color-primary-hover) / <alpha-value>)',
					light: 'oklch(var(--color-primary-light) / <alpha-value>)',
					dark: 'oklch(var(--color-primary-dark) / <alpha-value>)',
				},
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
			},
			boxShadow: {
				'center-sm':	'0 0 2px 0 rgb(0 0 0 / 0.05)',
				'center':	'0 0 3px 0 rgb(0 0 0 / 0.1), 0 0 2px -1px rgb(0 0 0 / 0.1)',
				'center-md':	'0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)',
				'center-lg':	'0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px rgb(0 0 0 / 0.1)',
				'center-xl':	'0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1)',
				'center-2xl':	'0 0 50px -12px rgb(0 0 0 / 0.25)',
				'neon-sm':	'0 0 2px 0 rgb(0 0 0 / 0.05), inset 0 0 1px 0 rgb(0 0 0 / 0.05)',
				'neon':	'0 0 3px 0 rgb(0 0 0 / 0.1), 0 0 2px -1px rgb(0 0 0 / 0.1), inset 0 0 2px 0 rgb(0 0 0 / 0.1)',
				'neon-md':	'0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1), inset 0 0 3px 0 rgb(0 0 0 / 0.1)',
				'neon-lg':	'0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px rgb(0 0 0 / 0.1), inset 0 0 8px 0 rgb(0 0 0 / 0.1)',
				'neon-xl':	'0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1), inset 0 0 13px 0 rgb(0 0 0 / 0.1)',
				'neon-2xl':	'0 0 50px -12px rgb(0 0 0 / 0.25), inset 0 0 25px 0 rgb(0 0 0 / 0.25)',
			}
		},
	},
	plugins: [animations],
}
