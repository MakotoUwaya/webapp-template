import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button primary={true} label='Button' />,
};
export const Secondary: Story = {
  render: () => <Button label='Button' />,
};
export const Large: Story = {
  render: () => <Button size='large' label='Button' />,
};
export const Small: Story = {
  render: () => <Button size='small' label='Button' />,
};
