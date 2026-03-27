import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // fontSize: {
    //   xs: '0.75rem',
    //   sm: '0.8125rem',
    //   base: '0.875rem',   // 👈 14px instead of 16px
    //   lg: '1rem',
    //   xl: '1.125rem',
    //   '2xl': '1.25rem',
    //   '3xl': '1.5rem',
    //   '4xl': '1.875rem',
    // },

theme: {
  extend: {
    fontSize: {
      // BODY TEXT
      'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
      'body': ['0.95rem', { lineHeight: '1.6' }],    // ~15px

      // HEADINGS
      'h1': ['3rem', { lineHeight: '1.1' }],         // 48px
      'h2': ['2.25rem', { lineHeight: '1.2' }],      // 36px
      'h3': ['1.75rem', { lineHeight: '1.25' }],     // 28px
      'h4': ['1.375rem', { lineHeight: '1.3' }],     // 22px
    }
  }
},
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
