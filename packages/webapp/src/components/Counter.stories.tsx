import { ThemeProvider } from '@material-ui/core/styles';
import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import theme from '../themes/theme';

import Counter from './Counter';

type CounterProps = ComponentProps<typeof Counter>;

const story = {
  title: 'react-tutorial/Counter',
  component: Counter
};

const Template: Story<CounterProps> = args => (
  <ThemeProvider theme={theme}>
    <Counter {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'sample',
  description: '適当な説明',
  isPrimary: true
};

export default story;
