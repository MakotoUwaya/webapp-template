import { AppBar, Avatar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { UserInfo } from '../services/IAuthenticationService';

type TopBarProps = {
  userInfo: UserInfo | null;
};

const TopBar: (props: TopBarProps) => JSX.Element = props => (
  <AppBar>
    <Toolbar>
      <Typography variant="h3" color="inherit" component={Link} to="/">
        React Tutorial
      </Typography>
      <Box flexGrow={1} />
      {props.userInfo && (
        <Avatar alt={props.userInfo.userName} src={props.userInfo.avator} />
      )}
    </Toolbar>
  </AppBar>
);

export default TopBar;
