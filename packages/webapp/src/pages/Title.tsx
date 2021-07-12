import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { useDependency } from '../hooks/DependencyHook';

const Title: () => JSX.Element = () => {
  const authenticationService = useDependency('authenticationService');

  const signIn = async () => {
    await authenticationService.logIn();
  };

  const signOut = async () => {
    await authenticationService.logOut();
  };

  return (
    <Box
      css={{
        bgcolor: 'background.default',
        display: 'flex',
        height: '100%',
        paddingTop: '100px',
        justifyContent: 'start'
      }}
      flexDirection="column"
    >
      <Container maxWidth="md">
        <Typography variant="h1" align="center" gutterBottom={true}>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom={true}>
          example project
        </Typography>
        <Box css={{ marginTop: 50 }} textAlign="center">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Button
                color="primary"
                component={Link}
                fullWidth
                size="large"
                to="/btn"
                variant="contained"
              >
                Dialog Button
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                color="primary"
                component={Link}
                fullWidth
                size="large"
                to="/comp"
                variant="contained"
              >
                Sample Component
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                onClick={signIn}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                onClick={signOut}
              >
                Logout
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                // eslint-disable-next-line no-console
                onClick={() => console.log(authenticationService.token)}
              >
                test
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Title;
