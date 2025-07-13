import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { type JSX, useContext, useMemo } from 'react';

import { ChosenTheme } from './ChosenTheme';

export const ThemeProvider = ({
  children,
}: { children?: JSX.Element }): JSX.Element => {
  const { theme } = useContext(ChosenTheme);
  const muiTheme = useMemo(() => createThemeHelper(theme), [theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

const brandColor = '#00b8d4';
const createThemeHelper = (theme: 'dark' | 'light') => {
  const isDark = theme === 'dark';
  return createTheme({
    palette: {
      mode: theme,
      background: {
        default: isDark ? '#303030;' : '#f0f0f0',
        paper: isDark ? '#242526' : '#ffffff',
      },
      primary: {
        main: brandColor,
      },
      error: {
        main: 'rgb(232, 51, 51)',
      },
      success: {
        main: 'rgb(76,175,80)',
      },
    },
  });
};
