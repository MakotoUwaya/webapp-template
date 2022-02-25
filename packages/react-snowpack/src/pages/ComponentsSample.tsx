import { Box, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import MyComponent from '../components/Counter';

type MyComponentProps = ComponentProps<typeof MyComponent>;

const myProps: MyComponentProps = {
  title: 'sample',
  description: '適当な説明',
  isPrimary: true
};

const useLocalStyles = makeStyles(() => ({
  root: {
    bgcolor: 'background.default',
    display: 'flex',
    height: '100%',
    marginTop: '100px',
    justifyContent: 'start'
  },
  buttonSection: {
    marginTop: 50
  }
}));

const ComponentsSample = (): JSX.Element => {
  const classNames = useLocalStyles();
  return (
    <Box className={classNames.root} flexDirection="column">
      <Container maxWidth="md">
        <Box textAlign="center">
          <MyComponent
            title={myProps.title}
            description={myProps.description}
            isPrimary={myProps.isPrimary}
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

export default ComponentsSample;
