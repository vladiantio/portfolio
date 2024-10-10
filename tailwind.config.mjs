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
				soft: 'oklch(var(--color-soft) / <alpha-value>)',
				muted: 'oklch(var(--color-muted) / <alpha-value>)',
				primary: 'oklch(var(--color-primary) / <alpha-value>)',
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [animations],
}
