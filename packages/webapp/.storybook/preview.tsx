import '@storybook/addon-console';
import { ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

import theme from '../src/themes/theme';

/**
 * NOTE: Story 単位で makeStyles の className 連番をリセットする
 * https://blog.gaji.jp/2020/08/27/4871/
 *
 * この対応によって Material-UI のコンポーネントが持つ className にも採番されるようになってしまう
 */
const createGenerateId = () => {
  let counter = 0;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return (rule: any, styleSheet: any) =>
    `${styleSheet.options.classNamePrefix}-${rule.key}-${counter++}`;
};

export const decorators = [
  (story: () => JSX.Element) => (
    <StylesProvider generateClassName={createGenerateId()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {story()}
      </ThemeProvider>
    </StylesProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
