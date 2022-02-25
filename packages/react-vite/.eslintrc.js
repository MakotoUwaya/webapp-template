// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierrc = require('rc')('./prettier.config.js');

module.exports = {
  extends: ['eslint:recommended', 'prettier', 'react-app', 'react-app/jest'],
  plugins: ['prettier', 'unused-imports'],
  rules: {
    'prettier/prettier': ['error', prettierrc],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ],
    'sort-imports': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['*.{spec,test,d}.ts'],
      rules: {
        'unused-imports/no-unused-vars-ts': 'off'
      }
    }
  ]
};
