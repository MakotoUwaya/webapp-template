import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../styles/GlobalStyles';
import theme from '../themes/theme';

import TopBar from './TopBar';

const story = {
  title: 'react-tutorial/TopBar',
  component: TopBar
};

const Template: Story = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  </ThemeProvider>
);

export const Primary = Template.bind({});

export default story;
