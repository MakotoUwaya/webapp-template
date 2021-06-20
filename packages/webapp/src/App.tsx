import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import theme from './themes/theme';

const App: () => JSX.Element = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
