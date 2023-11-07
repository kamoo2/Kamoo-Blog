import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-green': 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
        'slash-pattern':
          'repeating-linear-gradient(45deg, #747d8c,#747d8c 10px, #f5f5f5 0, #f5f5f5 20px)',
        'slash-pattern-dark':
          'repeating-linear-gradient(45deg, #747d8c,#747d8c 10px, #262626 0, #262626 20px)',
        'slash-pattern-reverse':
          'repeating-linear-gradient(-45deg, #747d8c,#747d8c 10px, #f5f5f5 0, #f5f5f5 20px)',
        'col-pattern':
          'linear-gradient(0deg,#218c74, #218c74 25%, transparent 25%, transparent 50%, #218c74 50%,#218c74 75%, transparent 75%, transparent)',
        'raw-pattern':
          'linear-gradient(90deg,#218c74, #218c74 25%, transparent 25%, transparent 50%, #218c74 50%,#218c74 75%, transparent 75%, transparent)',
      },
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#ededed',
          200: '#e5e5e5',
          250: '#dedede',
          300: '#d4d4d4',
          350: '#b5b5b5',
          400: '#a3a3a3',
          450: '#8a8a8a',
          470: '#808080',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          750: '#363636',
          800: '#262626',
          900: '#171717',
          hr: '#e5e7eb',
        },
        green: {
          trend: '#2F4F4F',
          hunter: '#0B2427',
          deep: '#1E4927',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents, addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
      addComponents({
        '.text-primary': {
          '@apply text-neutral-900 dark:text-neutral-200 transition-colors duration-100': '',
        },
        '.text-secondary': {
          '@apply text-neutral-700 dark:text-neutral-350 transition-colors duration-100': '',
        },
        '.text-tertiary': {
          '@apply text-neutral-600 dark:text-neutral-400 transition-colors duration-100': '',
        },
        '.text-mute': {
          '@apply text-neutral-500 dark:text-neutral-470 transition-colors duration-100': '',
        },
        '.text-sub': {
          '@apply text-neutral-450 dark:text-neutral-250 transition-colors duration-100': '',
        },
        '.text-disabled': {
          '@apply text-neutral-300 dark:text-neutral-700 transition-colors duration-100': '',
        },
        '.bg-primary': {
          '@apply bg-neutral-50 dark:bg-neutral-900 transition-colors duration-100': '',
        },
        '.bg-secondary': {
          '@apply bg-neutral-100 dark:bg-neutral-800 transition-colors duration-100': '',
        },
        '.bg-tertiary': {
          '@apply bg-neutral-200 dark:bg-neutral-750 transition-colors duration-100': '',
        },
        '.bg-mute': {
          '@apply bg-neutral-250 dark:bg-neutral-800 transition-colors duration-100': '',
        },
        '.bg-button': {
          '@apply bg-neutral-900 dark:bg-neutral-700 transition-colors duration-100': '',
        },
        '.border-primary': {
          '@apply border-[rgba(2,23,51,0.1)] dark:border-neutral-500 transition-colors duration-100':
            '',
        },
      });
    }),
  ],
};
export default config;
