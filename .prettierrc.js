module.exports = {
  arrowParens: 'avoid',
  semi: true,
  trailingComma: 'none',
  overrides: [
    // TODO: this is temporary due to lerna/npm v8 issue
    // https://github.com/lerna/lerna/issues/2845
    {
      files: 'packages/*/package-lock.json',
      options: {
        tabWidth: 4,
        useTabs: true
      }
    }
  ]
};
