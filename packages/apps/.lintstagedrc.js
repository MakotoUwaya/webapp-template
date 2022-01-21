module.exports = {
  '**/*.{js,jsx,ts,tsx}': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`
  ],
  'packages/*/package.json': () => [
    'prettier --write packages/*/package-lock.json'
  ]
};
