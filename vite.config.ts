import { readFile, mkdir, writeFile } from 'node:fs/promises';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const innerPages = {
  'case-studies': 'Case Studies',
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
      async writeBundle(options) {
        const outputDir = options.dir ?? 'dist';
        const html = await readFile(path.join(outputDir, 'index.html'), 'utf8');
        await Promise.all(Object.entries(innerPages).map(async ([route, title]) => {
          const dir = path.join(outputDir, route);
          await mkdir(dir, { recursive: true });
          await writeFile(path.join(dir, 'index.html'), html.replace(/<title>[^<]*<\/title>/, `<title>${title} | Tibin Jacob</title>`));
        }));
      },
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
