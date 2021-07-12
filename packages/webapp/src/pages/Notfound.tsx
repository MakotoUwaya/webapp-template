import { Box, Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useLocalStyles = makeStyles(() => ({
  root: {
    bgcolor: 'background.default',
    display: 'flex',
    height: '100%',
    justifyContent: 'center'
  },
  buttonSection: {
    marginTop: 50
  }
}));

const Notfound = (): JSX.Element => {
  const classNames = useLocalStyles();
  return (
    <Box className={classNames.root} flexDirection="column">
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h1">
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" color="textPrimary" variant="subtitle2">
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </Typography>
        <Box textAlign="center">
          <img
            alt="Under development"
            src="/images/undraw_page_not_found_su7k.svg"
            style={{
              marginTop: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          />
        </Box>
        <Box className={classNames.buttonSection} textAlign="center">
          <Button component={Link} variant="outlined" to="/">
            Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Notfound;
