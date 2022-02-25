import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import { ChosenThemeProvider, ThemeProvider } from '@/providers';

ReactDOM.render(
  <StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <BrowserRouter basename={import.meta.env.PUBLIC_URL || ''}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ChosenThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
