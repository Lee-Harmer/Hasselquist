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
        charcoal: '#1C2027',
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C97E',
          dark: '#A8873A',
        },
        cream: {
          DEFAULT: '#F0EBE0',
          dark: '#E5DDD0',
        },
        stone: {
          50: '#FAFAF8',
          100: '#F5F2ED',
          200: '#EDE8E0',
          300: '#D8D0C4',
          400: '#B8B0A4',
          500: '#9A9086',
          600: '#6E665C',
          700: '#4A4540',
          800: '#2E2A24',
          900: '#1A1714',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.2', letterSpacing: '0em' }],
        'h4': ['1.375rem', { lineHeight: '1.25', letterSpacing: '0em' }],
        'label': ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '88': '22rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#2E2A24',
            '--tw-prose-headings': '#1A1714',
            '--tw-prose-lead': '#4A4540',
            '--tw-prose-links': '#C9A84C',
            '--tw-prose-bold': '#1A1714',
            '--tw-prose-counters': '#6E665C',
            '--tw-prose-bullets': '#C9A84C',
            '--tw-prose-hr': '#EDE8E0',
            '--tw-prose-quotes': '#1A1714',
            '--tw-prose-quote-borders': '#C9A84C',
            '--tw-prose-captions': '#6E665C',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            h1: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '400' },
            h2: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '400' },
            h3: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '500' },
            h4: { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: '500' },
            a: {
              color: '#C9A84C',
              textDecoration: 'none',
              '&:hover': { color: '#A8873A', textDecoration: 'underline' },
            },
            lineHeight: '1.75',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
