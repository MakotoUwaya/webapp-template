import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption, UserConfig } from 'vite';
import Checker from 'vite-plugin-checker';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

const shouldAnalyze = process.env.ANALYZE;

const config: UserConfig = {
  base: '/webapp-template/',
  server: {
    host: true
  },
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
  build: {
    assetsDir: './',
    rollupOptions: {
      // FIXME: ad-hoc TypeAssertion https://github.com/vitejs/vite/issues/10081
      plugins: shouldAnalyze ? [visualizer({ open: true, filename: './bundle-size/bundle.html' }) as PluginOption] : []
    },
    sourcemap: !!shouldAnalyze
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@emotion',
            {
              importMap: {
                '@mui/material': {
                  styled: {
                    canonicalImport: ['@emotion/styled', 'default'],
                    styledBaseImport: ['@mui/material', 'styled']
                  }
                },
                '@mui/material/styles': {
                  styled: {
                    canonicalImport: ['@emotion/styled', 'default'],
                    styledBaseImport: ['@mui/material/styles', 'styled']
                  }
                }
              }
            }
          ]
        ]
      }
    }),
    Checker({
      typescript: true,
      overlay: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
      }
    })
  ] as PluginOption[]
};

const getConfig = () => config;

export default getConfig;
