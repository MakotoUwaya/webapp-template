import { ThemeProvider } from "@material-ui/core/styles";
import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import theme from '../../themes/theme';

import DialogSample from './DialogSample';

type DialogSampleProps = ComponentProps<typeof DialogSample>;

const story = {
  title: 'react-tutorial/Dialogs/DialogSample',
  component: DialogSample
};

const Template: Story<DialogSampleProps> = (args) => (
  <ThemeProvider theme={theme}>
    <DialogSample {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  // TODO: true にすると Storyshot でエラーになるので、ダイアログの中身だけをコンポーネントに切り出してスナップショットを取る
  isOpen: false,
  onClose: () => {
    // Add action
  }
};

export default story;
