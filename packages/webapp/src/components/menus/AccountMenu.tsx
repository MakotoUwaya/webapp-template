import { User } from '@auth0/auth0-react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  PopoverOrigin,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useCallback, MouseEvent } from 'react';

type AccountMenuProps = {
  buttonComponent: JSX.Element;
  anchorElement: Element | null;
  menuPosition: PopoverOrigin;
  user?: User;
  isOpen: boolean;
  onLogout: () => void;
  onMenuClosed: () => void;
};

type ButtonComponentProps = {
  user?: User;
  onIconClicked: (event: MouseEvent) => void;
};

const useLocalStyles = makeStyles(() => ({
  endIcon: {
    marginLeft: '4px'
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
        <Typography>{props.user?.name || ''} としてログイン中</Typography>
        <Typography variant="body2" color="textSecondary">
          {props.user?.email || ''}
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
      disableElevation
      classes={{ endIcon: props.classNames.endIcon }}
    >
      <Avatar alt={props.user?.name || ''} src={props.user?.picture} />
    </Button>
  </Box>
);

const AccountMenu = (
  props: Pick<AccountMenuProps, 'user' | 'onLogout'>
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
      user={props.user}
      anchorElement={anchorElement}
      menuPosition={menuPosition}
      isOpen={isOpen}
      onLogout={onLogoutCallback}
      onMenuClosed={onMenuClosed}
      buttonComponent={
        <PlainButtonComponent
          classNames={classNames}
          user={props.user}
          onIconClicked={onIconClicked}
        />
      }
    />
  );
};
export default AccountMenu;
