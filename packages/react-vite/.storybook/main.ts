import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  viteFinal(config, options) {
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      // resolve: (await import('../vite.config.ts')).default,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode']
      }
    });
  }
};

export default config;
