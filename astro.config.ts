import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

// import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';
import vercel from '@astrojs/vercel';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];


export default defineConfig({
  output: 'static',
  adapter: vercel(),  
  site: 'https://www.upbuff.com',

  // Canonical URL form: no trailing slash (matches SITE.trailingSlash in
  // src/config.yaml, which drives getCanonical() and the sitemap).
  // The Vercel adapter turns this into a 308 from /path/ -> /path for every
  // page except the root, so the duplicate URL stops existing at the CDN.
  trailingSlash: 'never',

  // 301 redirects for legacy (old WordPress) URLs → current pages.
  // Keeps old links/search-console entries consolidated onto live pages.
  redirects: {
    '/about-upbuff': { status: 301, destination: '/about' },
    '/schedule-a-upbuff-demo': { status: 301, destination: '/request-demo' },
    '/tos': { status: 301, destination: '/legal/terms' },
    '/vansales-pos': { status: 301, destination: '/products/erp-integrated-sales-distribution' },
    '/partner-program': { status: 301, destination: '/contact' },
    '/knowledge-playbook': { status: 301, destination: '/blog' },
    '/resources/free-sap-consultation': { status: 301, destination: '/resources/sap-consultation' },
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
          // Preserve Cloudflare email-obfuscation opt-outs in the deployed HTML.
          ignoreCustomFragments: [/<!--email_off-->[\s\S]*?<!--\/email_off-->/],
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
