import path from 'path';

import initStoryshots, {
  multiSnapshotWithOptions,
  Stories2SnapsConverter
} from '@storybook/addon-storyshots';

const replaceSimpleFileName = (text: string) =>
  text.replace(/react-tutorial\//g, '');
const replaceSpace = (text: string) => text.replace(/ /g, '_');

/**
 * Snapshot ファイル名のカスタマイズ、ならびに保存するディレクトリを調整している
 */
class CustomStories2SnapsConverter extends Stories2SnapsConverter {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  getSnapshotFileName(context: any) {
    const { fileName, kind, name } = context;
    const { dir } = path.parse(fileName);
    const uniqueName = replaceSimpleFileName(
      `${replaceSpace(kind)}.stories@${replaceSpace(name)}`
    );
    const { snapshotsDirName, snapshotExtension } = this.options;

    return path.format({
      dir: path.join('..', dir, snapshotsDirName),
      name: uniqueName,
      ext: snapshotExtension
    });
  }
}

initStoryshots({
  framework: 'react',
  configPath: '.storybook',
  stories2snapsConverter: new CustomStories2SnapsConverter(),
  test: multiSnapshotWithOptions()
});
