import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import { ChosenThemeProvider, ThemeProvider } from '@/providers';

const container = document.getElementById('root');
// biome-ignore lint/style/noNonNullAssertion: root element is guaranteed to exist
const root = createRoot(container!);
root.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <BrowserRouter basename={import.meta.env.PUBLIC_URL || ''}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
);
