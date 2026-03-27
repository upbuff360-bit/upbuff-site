import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      
    fontSize: {
      xs: ['0.65rem', { lineHeight: '0.9rem' }],
      sm: ['0.725rem', { lineHeight: '1.05rem' }],
      base: ['0.8rem', { lineHeight: '1.3rem' }],
      lg: ['0.925rem', { lineHeight: '1.45rem' }],
      xl: ['0.9rem', { lineHeight: '1.35rem' }],          // was 1.025rem
      '2xl': ['1.1rem', { lineHeight: '1.5rem' }],        // was 1.25rem
      '3xl': ['1.35rem', { lineHeight: '1.8rem' }],
      // '4xl': ['1.55rem', { lineHeight: '1.95rem' }],
      '5xl': ['2rem', { lineHeight: '1' }],
      // '6xl': ['2.5rem', { lineHeight: '1' }],
      // '7xl': ['3rem', { lineHeight: '1' }],
      // '8xl': ['3.75rem', { lineHeight: '1' }],
      // '9xl': ['5rem', { lineHeight: '1' }],
    },
    //  fontSize: {
    //   xs: ['0.65rem', { lineHeight: '0.9rem' }],
    //   sm: ['0.725rem', { lineHeight: '1.05rem' }],
    //   base: ['0.8rem', { lineHeight: '1.3rem' }],
    //   lg: ['0.925rem', { lineHeight: '1.45rem' }],
    // },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(0.75rem)' },
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
