export type UserInfo = {
  readonly userId: string;
  readonly userName: string;
  readonly email: string;
  readonly avator: string;
};

export const UserChangedReason = {
  logIn: 'logIn',
  restored: 'restored',
  logOut: 'logOut',
  sessionExpired: 'sessionExpired'
} as const;
export type UserChangedReason = typeof UserChangedReason[keyof typeof UserChangedReason];

export interface IAuthenticationService {
  logIn(): Promise<void>;
  logOut(): Promise<void>;
  token: string | null;
  subscribeUserChanged(
    handler: (_user: UserInfo | null, _reason: UserChangedReason) => void
  ): () => void;
  restoreAuthState(): Promise<void>;
}
