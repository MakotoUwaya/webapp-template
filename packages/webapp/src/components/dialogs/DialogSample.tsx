import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DialogSample: (props: Props) => JSX.Element = props => (
  <Dialog open={props.isOpen} onClose={props.onClose}>
    <DialogTitle>Dialog Sample</DialogTitle>
    <DialogContent>
      <DialogContentText>Easy to use Material UI Dialog.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={props.onClose}>
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export default DialogSample;
