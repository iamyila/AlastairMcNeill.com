import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  ...(process.env.GITHUB_PAGES === 'true' ? {
    site: 'https://iamyila.github.io',
    base: '/AlastairMcNeill.com',
  } : {}),
});
