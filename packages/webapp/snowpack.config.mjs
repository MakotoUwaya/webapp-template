/** @type {import('snowpack').SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  exclude: [
    '**/node_modules/**/*',
    '**/src/setupTests.ts'
  ],
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: true,
        minifyJS: true
      }
    ],
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv'
  ],
  routes: [
    {
      'match': 'routes',
      'src': '.*',
      'dest': '/index.html'
    },
  ],
  optimize: {
    /* ... */
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
