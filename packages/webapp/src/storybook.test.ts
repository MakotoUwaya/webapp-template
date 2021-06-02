import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
initStoryshots({
  configPath: '.storybook',
  integrityOptions: { cwd: __dirname }, // it will start searching from the current directory
  test: multiSnapshotWithOptions(),
});