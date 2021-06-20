import { Box, Button, Container } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DialogSample from '../components/dialogs/DialogSample';

const DialogButton: () => JSX.Element = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
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
        <DialogSample
          isOpen={isDialogOpen}
          onClose={() => setDialogOpen(false)}
        />
        <Box textAlign="center">
          <Button
            variant="contained"
            color="secondary"
            // TODO: Console Warning findDOMNode is deprecated in StrictMode.
            // https://github.com/mui-org/material-ui/issues/13394
            onClick={() => setDialogOpen(true)}
          >
            Shot Dialog
          </Button>
        </Box>
        <Box css={{ marginTop: 50 }} textAlign="center">
          <Button component={Link} variant="outlined" to="/">
            Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DialogButton;
