import { Auth0Client } from '@auth0/auth0-spa-js';

import {
  IAuthenticationService,
  UserChangedReason,
  UserInfo
} from './IAuthenticationService';

export class Auth0AuthenticationService implements IAuthenticationService {
  private readonly userChangedSubscriber: ((
    user: UserInfo | null,
    reason: UserChangedReason
  ) => void)[] = [];
  private lastUserChangedReason: UserChangedReason = UserChangedReason.logOut;
  private idToken: string | null = null;
  private userInfo: UserInfo | null = null;

  private readonly auth0 = new Auth0Client({
    domain: import.meta.env.SNOWPACK_PUBLIC_AUTH0_DOMAIN,
    client_id: import.meta.env.SNOWPACK_PUBLIC_AUTH0_CLIENT_ID,
    redirect_uri: import.meta.env.SNOWPACK_PUBLIC_MY_CALLBACK_URL,
    useRefreshTokens: true
  });

  private async getUser(): Promise<UserInfo | null> {
    const user = await this.auth0.getUser();
    if (user) {
      return {
        userId: user.sub || '',
        userName: user.name || '',
        email: user.email || '',
        avator: user.picture || ''
      };
    }
    return null;
  }

  private onUserChanged(
    user: UserInfo | null,
    reason?: UserChangedReason
  ): void {
    if (reason != null) {
      this.lastUserChangedReason = reason;
    }
    this.userChangedSubscriber.forEach(h =>
      h(user, this.lastUserChangedReason)
    );
  }

  public async logIn(): Promise<void> {
    if (this.userInfo != null) {
      return Promise.resolve();
    }
    return this.auth0.loginWithRedirect();
  }

  public async logOut(): Promise<void> {
    if (this.userInfo == null) {
      return Promise.resolve();
    }
    try {
      await this.auth0.logout({
        returnTo: import.meta.env.SNOWPACK_PUBLIC_MY_CALLBACK_URL
      });
      this.userInfo = null;
      this.onUserChanged(this.userInfo, UserChangedReason.logOut);
    } catch (error) {
      console.error('Error', error);
    }
    return Promise.resolve();
  }

  public get token(): string | null {
    return this.idToken;
  }

  public subscribeUserChanged(
    handler: (user: UserInfo | null, reason: UserChangedReason) => void
  ): () => void {
    this.userChangedSubscriber.push(handler);
    handler(this.userInfo, this.lastUserChangedReason);
    return (): void => {
      this.userChangedSubscriber.splice(
        this.userChangedSubscriber.indexOf(handler),
        1
      );
    };
  }

  public async restoreAuthState(): Promise<void> {
    const token = await this.auth0.getTokenSilently().catch(() => null);
    this.idToken = token;
    if (this.idToken != null) {
      this.userInfo = await this.getUser();
    }
    return Promise.resolve();
  }
}
