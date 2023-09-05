import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
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
        'slash-pattern':
          'repeating-linear-gradient(45deg, #747d8c,#747d8c 10px, #f5f5f5 0, #f5f5f5 20px)',
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
          '@apply text-neutral-900 dark:text-neutral-200': '',
        },
        '.text-secondary': {
          '@apply text-neutral-700 dark:text-neutral-350': '',
        },
        '.text-tertiary': {
          '@apply text-neutral-600 dark:text-neutral-400': '',
        },
        '.text-mute': {
          '@apply text-neutral-500 dark:text-neutral-470': '',
        },
        '.bg-primary': {
          '@apply bg-neutral-50 dark:bg-neutral-900': '',
        },
        '.bg-secondary': {
          '@apply bg-neutral-150 dark:bg-neutral-800': '',
        },
        '.bg-tertiary': {
          '@apply bg-neutral-200 dark:bg-neutral-750': '',
        },
        '.bg-mute': {
          '@apply bg-neutral-250 dark:bg-neutral-800': '',
        },
      });
    }),
  ],
};
export default config;
