import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { DependencyProvider } from '../hooks/DependencyHook';
import { UserInfoProvider } from '../hooks/UserInfoHooks';
import { FakeAuthenticationService } from '../services/FakeAuthenticationService';
import type { Services } from '../services/SetupDependencies';

import Title from './Title';

test('renders Material-UI text', () => {
  const services: Services = {
    authenticationService: new FakeAuthenticationService()
  };
  render(
    <BrowserRouter>
      <DependencyProvider services={services}>
        <UserInfoProvider>
          <Title />
        </UserInfoProvider>
      </DependencyProvider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Material-UI/i);
  expect(linkElement).toBeInTheDocument();
});
