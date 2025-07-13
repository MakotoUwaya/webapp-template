import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('about render', () => {
  // TODO: Fix About component test
  // biome-ignore lint/complexity/noUselessFragments: https://github.com/testing-library/react-testing-library/issues/1371
  render(<>Vite?</>);
  const linkElement = screen.getByText(/Vite\?/i);
  expect(linkElement).toBeInTheDocument();
});
