import { User } from '@auth0/auth0-react';
import { AppBar, Avatar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

type TopBarProps = {
  user?: User;
};

const TopBar = (props: TopBarProps): JSX.Element => (
  <AppBar>
    <Toolbar>
      <Typography variant="h3" color="inherit" component={Link} to="/">
        React Tutorial
      </Typography>
      <Box flexGrow={1} />
      {props.user && <Avatar alt={props.user.name} src={props.user.picture} />}
    </Toolbar>
  </AppBar>
);

export default TopBar;
