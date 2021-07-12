import { Box, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DialogSample from '../components/dialogs/DialogSample';

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

const DialogButton = (): JSX.Element => {
  const classNames = useLocalStyles();
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
    <Box className={classNames.root} flexDirection="column">
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
        <Box className={classNames.buttonSection} textAlign="center">
          <Button component={Link} variant="outlined" to="/">
            Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DialogButton;
