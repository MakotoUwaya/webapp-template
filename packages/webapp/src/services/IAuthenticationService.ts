export type UserInfo = {
  readonly userId: string;
  readonly userName: string;
  readonly email: string;
  readonly avator: string;
};

export interface IAuthenticationService {
  logIn(): Promise<void>;
  logOut(): Promise<void>;
  getToken(): Promise<string | undefined>;
  getUser(): Promise<UserInfo | undefined>;
}
