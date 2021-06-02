import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Title from './Title';

test('renders Material-UI text', () => {
  render(
    <BrowserRouter>
      <Title />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Material-UI/i);
  expect(linkElement).toBeInTheDocument();
});
