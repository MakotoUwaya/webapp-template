import { render, screen } from '@testing-library/react';

import About from '@/about/index';
import { ThemeProvider } from '@/providers/Theme';

test('about render', () => {
  render(
    <ThemeProvider>
      <About />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Vite\?/i);
  expect(linkElement).toBeInTheDocument();
});
