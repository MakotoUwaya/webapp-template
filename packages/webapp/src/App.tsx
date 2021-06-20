import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';

import { DependencyProvider } from './hooks/DependencyHook';
import { UserInfoProvider } from './hooks/UserInfoHooks';
import routes from './routes';
import type { Services } from './services/SetupDependencies';
import GlobalStyles from './styles/GlobalStyles';
import theme from './themes/theme';

const App: () => JSX.Element = () => {
  const [services, setServices] = useState<Services | null>(null);
  const routing = useRoutes(routes);

  useEffect(() => {
    import(
      /* webpackChunkName: "SetupDependencies" */ './services/SetupDependencies'
    )
      .then(module => module.setupDependencies())
      .then(services => {
        setServices(services);
      });
  }, []);

  return (
    <>
      {services !== null ? (
        <DependencyProvider services={services}>
          <UserInfoProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <GlobalStyles />
              {routing}
            </ThemeProvider>
          </UserInfoProvider>
        </DependencyProvider>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
};

export default App;
