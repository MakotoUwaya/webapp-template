import {
  Toolbar,
  Typography,
  AppBar,
} from "@material-ui/core";
import React, { VFC } from 'react';
import { Link } from 'react-router-dom';

const TopBar: VFC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h3" color="inherit" component={Link} to="/">
          React + Material UI + TypeScript Sample
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
