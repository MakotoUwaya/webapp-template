import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';
import type { UserConfig } from 'vite';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

const shouldAnalyze = process.env.ANALYZE;

const config: UserConfig = {
  base: '/webapp-template/',
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  build: {
    assetsDir: './',
    sourcemap: !!shouldAnalyze,
  },
  plugins: [
    react(),
    babel({
      plugins: [
        [
          '@emotion',
          {
            importMap: {
              '@mui/material': {
                styled: {
                  canonicalImport: ['@emotion/styled', 'default'],
                  styledBaseImport: ['@mui/material', 'styled'],
                },
              },
              '@mui/material/styles': {
                styled: {
                  canonicalImport: ['@emotion/styled', 'default'],
                  styledBaseImport: ['@mui/material/styles', 'styled'],
                },
              },
            },
          },
        ],
      ],
    }),
    shouldAnalyze &&
      visualizer({
        open: true,
        filename: './bundle-size/bundle.html',
      }),
  ],
};

const getConfig = () => config;

export default getConfig;
