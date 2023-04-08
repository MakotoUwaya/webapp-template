import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof Header>;

const args = {
  onLogin: () => console.debug('onLogin'),
  onLogout: () => console.debug('onLogout'),
  onCreateAccount: () => console.debug('onCreateAccount')
};

export const LoggedIn: Story = {
  render: () => <Header user={{ name: 'Jane Doe' }} {...args} />
};

export const LoggedOut: Story = {
  render: () => <Header {...args} />
};
