// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rokas.dev',
  markdown: {
    syntaxHighlight: false,
  },
  // Old single-page-app section URLs now map to anchors on the home page
  redirects: {
    '/home': '/',
    '/projects': '/#projects',
    '/about': '/#about',
    '/contacts': '/#contacts',
  },
});
