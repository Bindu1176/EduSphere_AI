import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   { DEFAULT: '#4F46E5', light: '#818CF8', dark: '#3730A3' },
        secondary: { DEFAULT: '#7C3AED', light: '#A78BFA', dark: '#5B21B6' },
        accent:    { DEFAULT: '#06B6D4', light: '#67E8F9', dark: '#0891B2' },
        dark:      { DEFAULT: '#0F172A', card: '#1E293B', border: '#334155' },
        light:     { DEFAULT: '#F8FAFC', muted: '#F1F5F9', border: '#E2E8F0' },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
export default config
