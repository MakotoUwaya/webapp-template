import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../styles/GlobalStyles';
import theme from '../themes/theme';

import TopBar from './TopBar';

type TopBarProps = ComponentProps<typeof TopBar>;

const story = {
  title: 'react-tutorial/TopBar',
  component: TopBar
};

const Template: Story<TopBarProps> = props => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <BrowserRouter>
      <TopBar user={props.user} logOut={props.logOut} />
    </BrowserRouter>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  user: {
    name: 'サンプル 太郎',
    email: 'taro.sample@test.chukai.example'
  },
  logOut: () => {
    /* eslint-disable-next-line no-console */
    console.log('logOut');
  }
};

export default story;
