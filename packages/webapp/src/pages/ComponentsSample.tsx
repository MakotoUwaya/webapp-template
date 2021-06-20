import { Box, Button, Container } from '@material-ui/core';
import React, { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import MyComponent from '../components/Counter';

type MyComponentProps = ComponentProps<typeof MyComponent>;

const myProps: MyComponentProps = {
  title: 'sample',
  description: '適当な説明',
  isPrimary: true
};

const ComponentsSample: () => JSX.Element = () => (
  <Box
    css={{
      bgcolor: 'background.default',
      display: 'flex',
      height: '100%',
      marginTop: '100px',
      justifyContent: 'start'
    }}
    flexDirection="column"
  >
    <Container maxWidth="md">
      <Box textAlign="center">
        <MyComponent
          title={myProps.title}
          description={myProps.description}
          isPrimary={myProps.isPrimary}
        />
      </Box>
      <Box css={{ marginTop: 50 }} textAlign="center">
        <Button component={Link} variant="outlined" to="/">
          Home
        </Button>
      </Box>
    </Container>
  </Box>
);

export default ComponentsSample;
