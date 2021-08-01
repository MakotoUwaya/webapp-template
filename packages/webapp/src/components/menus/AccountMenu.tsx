import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  PopoverOrigin,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, { useState, useCallback, MouseEvent } from 'react';

type AccountMenuProps = {
  buttonComponent: JSX.Element;
  anchorElement: Element | null;
  menuPosition: PopoverOrigin;
  userName: string;
  email: string;
  isOpen: boolean;
  onLogout: () => void;
  onMenuClosed: () => void;
};

type ButtonComponentProps = {
  userName: string;
  onIconClicked: (event: MouseEvent) => void;
};

const useLocalStyles = makeStyles(theme => ({
  accountIcon: {
    fontSize: '24px',
    color: theme.palette.text.secondary
  },
  menuToggleIcon: {
    color: 'white'
  },
  endIcon: {
    marginLeft: '4px'
  },
  menuItemIcon: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1)
  },
  userNameText: {
    color: 'white',
    fontSize: theme.typography.pxToRem(16)
  }
}));
type LocalStyles = {
  classNames: ReturnType<typeof useLocalStyles>;
};

/**
 * @private
 */
export const PlainAccountMenu = (
  props: LocalStyles & AccountMenuProps
): JSX.Element => (
  <>
    {props.buttonComponent}
    <Menu
      getContentAnchorEl={null}
      anchorEl={props.anchorElement}
      anchorOrigin={props.menuPosition}
      open={props.isOpen}
      onClose={props.onMenuClosed}
    >
      <Box px={2} py={1}>
        <Typography>{props.userName} としてログイン中</Typography>
        <Typography variant="body2" color="textSecondary">
          {props.email}
        </Typography>
      </Box>
      <Divider />
      <MenuItem onClick={props.onLogout}>ログアウト</MenuItem>
    </Menu>
  </>
);

/**
 * @private
 */
export const PlainButtonComponent = (
  props: LocalStyles & ButtonComponentProps
): JSX.Element => (
  <Box display="flex" flexDirection="row" alignItems="center">
    <Button
      data-testid="accountMenu"
      onClick={props.onIconClicked}
      endIcon={
        <KeyboardArrowDownIcon className={props.classNames.menuToggleIcon} />
      }
      disableElevation
      classes={{ endIcon: props.classNames.endIcon }}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Typography className={props.classNames.userNameText}>
          {props.userName}
        </Typography>
      </Box>
    </Button>
  </Box>
);

const AccountMenu = (
  props: Pick<AccountMenuProps, 'userName' | 'email' | 'onLogout'>
): JSX.Element => {
  const [anchorElement, setAnchorElement] = useState<Element | null>(null);
  const isOpen = anchorElement != null;
  const onMenuClosed = useCallback(() => {
    setAnchorElement(null);
  }, []);
  const onLogoutCallback = useCallback(() => {
    setAnchorElement(null);
    props.onLogout();
  }, [props]);
  const menuPosition: PopoverOrigin = {
    vertical: 'bottom',
    horizontal: 'right'
  };
  const onIconClicked = useCallback((ev: MouseEvent) => {
    setAnchorElement(ev.currentTarget);
  }, []);
  const classNames = useLocalStyles();
  return (
    <PlainAccountMenu
      {...props}
      classNames={classNames}
      userName={props.userName}
      email={props.email}
      anchorElement={anchorElement}
      menuPosition={menuPosition}
      isOpen={isOpen}
      onLogout={onLogoutCallback}
      onMenuClosed={onMenuClosed}
      buttonComponent={
        <PlainButtonComponent
          classNames={classNames}
          userName={props.userName}
          onIconClicked={onIconClicked}
        />
      }
    />
  );
};
export default AccountMenu;
