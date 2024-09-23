import defaultTheme from 'tailwindcss/defaultTheme';
import animations from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector'],
	theme: {
		extend: {
			colors: {
				body: 'hsla(var(--color-body), <alpha-value>)',
				background: 'hsla(var(--color-background), <alpha-value>)',
				soft: 'hsla(var(--color-soft), <alpha-value>)',
				muted: 'hsla(var(--color-muted), <alpha-value>)',
				primary: 'hsla(var(--color-primary), <alpha-value>)',
				secondary: 'hsla(var(--color-secondary), <alpha-value>)',
				accent: 'hsla(var(--color-accent), <alpha-value>)',
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [animations],
}
