import { Auth0Provider } from '@auth0/auth0-react';
import React, { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.SNOWPACK_PUBLIC_AUTH0_DOMAIN}
      clientId={import.meta.env.SNOWPACK_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={import.meta.env.SNOWPACK_PUBLIC_MY_CALLBACK_URL}
      useRefreshTokens
    >
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
