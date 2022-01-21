const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['react-svg-loader'],
      include: path.resolve(__dirname, '../')
    });
    return config;
  }
};
