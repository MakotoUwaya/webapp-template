import { Box, Button, Container } from "@material-ui/core";
import React, { ComponentProps, VFC } from 'react';
import { Link } from 'react-router-dom';

import MyComponent from '../components/Counter';

type MyComponentProps = ComponentProps<typeof MyComponent>;

const myProps: MyComponentProps = {
  title: 'sample',
  description: '適当な説明',
  isPrimary: true
};

const ComponentsSample: VFC = () => {
  return (
    <Box
      css={{
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        marginTop: '100px',
        justifyContent: 'start'
      }}
    >
      <Container maxWidth="md">
        <Box css={{ textAlign: 'center' }}>
          <MyComponent
            title={myProps.title}
            description={myProps.description}
            isPrimary={myProps.isPrimary}
          />
        </Box>
        <Box css={{ textAlign: 'center', marginTop: 50 }}>
          <Button
            component={Link}
            variant="outlined"
            to="/"
          >Home</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ComponentsSample;
