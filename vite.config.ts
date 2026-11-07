import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { CaseStudyPage, caseStudyPages } from './src/components/CaseStudies';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const innerPages = {
  'case-studies/one-product-two-reasons': 'One Product, Two Reasons to Buy',
  'case-studies/when-clicks-hold': 'When Clicks Hold but Orders Fall',
  news: 'D2C Growth Briefs',
  feed: 'My Feed',
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), {
      name: 'portfolio-inner-pages',
      apply: 'build',
      writeBundle: { order: 'post', async handler(options) {
        const outputDir = options.dir ?? 'dist';
        const html = await readFile(path.join(outputDir, 'index.html'), 'utf8');
        await Promise.all(Object.entries(innerPages).map(async ([route, title]) => {
          const dir = path.join(outputDir, route);
          await mkdir(dir, { recursive: true });
          await writeFile(path.join(dir, 'index.html'), html.replace(/<title>[^<]*<\/title>/, `<title>${title} | Tibin Jacob</title>`));
        }));
        const siteUrl = new URL(env.SITE_URL || 'https://ai-creative-strategist-iota.vercel.app').origin;
        await Promise.all(caseStudyPages.map(async ({ route, title, description }) => {
          const dir = path.join(outputDir, route.slice(1));
          const head = renderToStaticMarkup(createElement('meta', { name: 'description', content: description }))
            + renderToStaticMarkup(createElement('link', { rel: 'canonical', href: siteUrl + route + '/' }));
          const body = renderToStaticMarkup(createElement('main', null, createElement(CaseStudyPage, { pathname: route })));
          const page = html.replace(/<title>[^<]*<\/title>/, renderToStaticMarkup(createElement('title', null, title + ' | Tibin Jacob')))
            .replace('</head>', () => head + '</head>')
            .replace('<div id="root"></div>', () => '<div id="root">' + body + '</div>');
          await mkdir(dir, { recursive: true });
          await writeFile(path.join(dir, 'index.html'), page);
        }));
        const routes = ['/', '/news/', '/feed/', ...caseStudyPages.map(page => page.route + '/')];
        const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
          + routes.map(route => '  <url><loc>' + siteUrl + route + '</loc></url>').join('\n')
          + '\n</urlset>\n';
        await writeFile(path.join(outputDir, 'sitemap.xml'), sitemap);
      } },
    }],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
