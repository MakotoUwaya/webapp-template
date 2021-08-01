import { User } from '@auth0/auth0-react';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import AccountMenu from '../components/menus/AccountMenu';

type TopBarProps = {
  user?: User;
  logOut: () => void;
};

const TopBar = (props: TopBarProps): JSX.Element => (
  <AppBar>
    <Toolbar>
      <Typography variant="h3" color="inherit" component={Link} to="/">
        React Tutorial
      </Typography>
      <Box flexGrow={1} />
      {props.user && (
        <AccountMenu
          userName={props.user.name || ''}
          email={props.user.email || ''}
          onLogout={props.logOut}
        />
      )}
    </Toolbar>
  </AppBar>
);

export default TopBar;
