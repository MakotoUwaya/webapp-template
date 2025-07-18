import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from 'storybook/test';

import { Page } from './Page';

const meta: Meta<typeof Page> = {
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const LoggedOut: Story = {
  render: () => <Page />,
};

// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
