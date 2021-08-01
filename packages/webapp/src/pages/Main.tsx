import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';

import TopBar from '../components/TopBar';

const useLocalStyles = makeStyles(theme => ({
  mainLayoutRoot: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  mainLayoutWrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  mainLayoutContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  mainLayoutContent: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  },
  loginRoot: {
    bgcolor: 'background.default',
    display: 'flex',
    height: '100%',
    width: '100%',
    paddingTop: '100px',
    justifyContent: 'start'
  }
}));

const Main = (): JSX.Element => {
  const classNames = useLocalStyles();
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <div className={classNames.mainLayoutRoot}>
      {isAuthenticated ? (
        <>
          <TopBar user={user} />
          <div className={classNames.mainLayoutWrapper}>
            <div className={classNames.mainLayoutContainer}>
              <div className={classNames.mainLayoutContent}>
                <Outlet />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Box className={classNames.loginRoot} flexDirection="column">
          <Container maxWidth="md">
            <Box textAlign="center">
              <Grid container>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={() => loginWithRedirect()}
                  >
                    ログインしてサービス利用を開始
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default Main;
