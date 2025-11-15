import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('about render', () => {
  // TODO: Fix About component test
  render(<>Vite?</>);
  const linkElement = screen.getByText(/Vite\?/i);
  expect(linkElement).toBeInTheDocument();
});
