import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useLocalStyles = makeStyles(() => ({
  root: {
    bgcolor: 'background.default',
    display: 'flex',
    height: '100%',
    paddingTop: '100px',
    justifyContent: 'start'
  },
  buttonSection: {
    marginTop: 50
  }
}));

const Title = (): JSX.Element => {
  const classNames = useLocalStyles();
  const { getAccessTokenSilently } = useAuth0();

  return (
    <Box className={classNames.root} flexDirection="column">
      <Container maxWidth="md">
        <Typography variant="h1" align="center" gutterBottom={true}>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom={true}>
          example project
        </Typography>
        <Box className={classNames.buttonSection} textAlign="center">
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
            <Grid item xs={12}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                onClick={async () =>
                  // eslint-disable-next-line no-console
                  console.log('TOKEN:', await getAccessTokenSilently())
                }
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
