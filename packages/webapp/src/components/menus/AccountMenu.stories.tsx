import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import AccountMenu, {
  PlainAccountMenu,
  PlainButtonComponent
} from './AccountMenu';

type PlainAccountMenuProps = ComponentProps<typeof PlainAccountMenu>;
type PlainButtonComponentProps = ComponentProps<typeof PlainButtonComponent>;
type AccountMenuProps = ComponentProps<typeof AccountMenu>;

const story = {
  title: 'react-tutorial/menus/AccountMenu',
  component: AccountMenu
};

const emptyMethod = () => {
  // Empty
};

const commonProps: Pick<PlainButtonComponentProps, 'classNames'> = {
  classNames: {
    accountIcon: '',
    menuToggleIcon: '',
    endIcon: '',
    menuItemIcon: ''
  }
};

const plainButtonComponent = (args: PlainButtonComponentProps): JSX.Element => (
  <PlainButtonComponent {...args} />
);

const PlainAccountMenuTemplate: Story<PlainAccountMenuProps> = args => (
  <PlainAccountMenu {...args} />
);
export const Plain = PlainAccountMenuTemplate.bind({});
Plain.args = {
  ...commonProps,
  menuPosition: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  user: {
    name: 'サンプル 太郎',
    email: 'taro.sample@test.chukai.example'
  },
  isOpen: false,
  onLogout: emptyMethod,
  onMenuClosed: emptyMethod,
  buttonComponent: plainButtonComponent({
    ...commonProps,
    user: {
      name: 'サンプル 太郎'
    },
    onIconClicked: emptyMethod
  })
};

const Template: Story<AccountMenuProps> = args => (
  <div>
    <AccountMenu {...args} />
  </div>
);
export const Styled = Template.bind({});
Styled.args = {
  user: {
    name: 'サンプル 太郎',
    email: 'taro.sample@test.chukai.example'
  }
};

export default story;
