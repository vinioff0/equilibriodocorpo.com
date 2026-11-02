// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Defina SITE_URL com o domínio definitivo (ex.: https://www.seudominio.com.br)
const site = process.env.SITE_URL || 'https://clinica-equilibrio-do-corpo.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
