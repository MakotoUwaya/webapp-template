import {
  IAuthenticationService,
  UserChangedReason,
  UserInfo
} from './IAuthenticationService';

const SessionInfoKey = 'session';

const FakeUserInfo: UserInfo = {
  userId: 'fake|userId',
  userName: '管理ユーザ',
  email: 'ebone_client_03@e-bukken-1.com',
  avator: 'https://imageserver.example/userId'
};

export class FakeAuthenticationService implements IAuthenticationService {
  private readonly userChangedSubscriber: ((
    user: UserInfo | null,
    reason: UserChangedReason
  ) => void)[] = [];
  private fakeUserInfo: UserInfo | null = null;
  private lastUserChangedReason: UserChangedReason = UserChangedReason.logOut;

  public logIn(): Promise<void> {
    this.fakeUserInfo = FakeUserInfo;
    localStorage.setItem(SessionInfoKey, 'true');
    this.onUserChanged(this.fakeUserInfo, UserChangedReason.logIn);
    return Promise.resolve();
  }

  public logOut(): Promise<void> {
    this.fakeUserInfo = null;
    localStorage.setItem(SessionInfoKey, 'false');
    this.onUserChanged(this.fakeUserInfo, UserChangedReason.logOut);
    return Promise.resolve();
  }

  public subscribeUserChanged(
    handler: (user: UserInfo | null, reason: UserChangedReason) => void
  ): () => void {
    this.userChangedSubscriber.push(handler);
    handler(this.fakeUserInfo, this.lastUserChangedReason);
    return (): void => {
      this.userChangedSubscriber.splice(
        this.userChangedSubscriber.indexOf(handler),
        1
      );
    };
  }

  public get token(): string | null {
    return 'asdf';
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

  public restoreAuthState(): Promise<void> {
    // 本実装する時は LocalStorage ではなく cookie を応用してトークン再取得、のような仕組みを作らないとセキュアにならないと予想している
    const sessionInfo = localStorage.getItem(SessionInfoKey);
    if (sessionInfo === null) {
      return Promise.resolve();
    }

    const isLoggedIn: boolean = JSON.parse(sessionInfo);
    if (isLoggedIn) {
      this.fakeUserInfo = FakeUserInfo;
      this.onUserChanged(this.fakeUserInfo, UserChangedReason.logIn);
    }

    return Promise.resolve();
  }
}
