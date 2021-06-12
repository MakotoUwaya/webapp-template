import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import React, { VFC } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const closeDialog = (props: Props) => props.onClose();

const DialogSample: VFC<Props> = props => {
  return (
    <Dialog
      open={props.isOpen}
      onClose={() => {
        closeDialog(props);
      }}
    >
      <DialogTitle>Dialog Sample</DialogTitle>
      <DialogContent>
        <DialogContentText>Easy to use Material UI Dialog.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => {
            closeDialog(props);
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogSample;
