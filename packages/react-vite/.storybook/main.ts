import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config, options) {
    return mergeConfig(config, {
      // TODO: .ts ファイルを解釈できるようにする
      resolve: (await import('../vite.config.js')).default,
      optimizeDeps: {
        include: ['storybook-dark-mode']
      }
    });
  }
};
export default config;
