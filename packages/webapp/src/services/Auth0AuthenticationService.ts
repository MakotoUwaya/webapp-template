import { Auth0Client } from '@auth0/auth0-spa-js';

import { IAuthenticationService, UserInfo } from './IAuthenticationService';

export class Auth0AuthenticationService implements IAuthenticationService {
  private readonly auth0 = new Auth0Client({
    domain: import.meta.env.SNOWPACK_PUBLIC_AUTH0_DOMAIN,
    client_id: import.meta.env.SNOWPACK_PUBLIC_AUTH0_CLIENT_ID,
    redirect_uri: import.meta.env.SNOWPACK_PUBLIC_MY_CALLBACK_URL,
    useRefreshTokens: true
  });

  constructor() {
    this.auth0.getTokenSilently().catch(error => console.log('Error', error));
  }

  public async logIn(): Promise<void> {
    if (await this.auth0.isAuthenticated()) {
      return Promise.resolve();
    }
    return this.auth0.loginWithRedirect();
  }

  public async logOut(): Promise<void> {
    if (!(await this.auth0.isAuthenticated())) {
      return Promise.resolve();
    }
    return this.auth0.logout({
      returnTo: import.meta.env.SNOWPACK_PUBLIC_MY_CALLBACK_URL
    });
  }

  public async getToken(): Promise<string | undefined> {
    return this.auth0.getTokenSilently();
  }

  public async getUser(): Promise<UserInfo | undefined> {
    const user = await this.auth0.getUser();
    if (user) {
      return {
        userId: user.sub || '',
        userName: user.name || '',
        email: user.email || '',
        avator: user.picture || ''
      };
    }
    return undefined;
  }
}
