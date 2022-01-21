const path = require('path');

module.exports = {
  roots: ['<rootDir>'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
    // テスト内容を検討中なので除外
    '!src/*.{js,jsx,ts,tsx}'
  ],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  setupFiles: [require.resolve('react-app-polyfill/jsdom')],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': path.resolve(
      __dirname,
      '.jest/babelTransform.js'
    ),
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': path.resolve(
      __dirname,
      '.jest/fileTransform.js'
    )
  },
  transformIgnorePatterns: ['node_modules'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/storyshots/storyshots.test.tsx'
  ],
  modulePaths: [],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  resetMocks: true
};
