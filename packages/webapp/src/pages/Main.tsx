import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';

import TopBar from '../components/TopBar';

const useLocalStyles = makeStyles(theme => ({
  mainLayoutRoot: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  mainLayoutWrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  mainLayoutContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  mainLayoutContent: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const Main: () => JSX.Element = () => {
  const localClasses = useLocalStyles();

  return (
    <div className={localClasses.mainLayoutRoot}>
      <TopBar />
      <div className={localClasses.mainLayoutWrapper}>
        <div className={localClasses.mainLayoutContainer}>
          <div className={localClasses.mainLayoutContent}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
