import { Auth0AuthenticationService } from './Auth0AuthenticationService';
import { IAuthenticationService } from './IAuthenticationService';

export type Services = {
  readonly authenticationService: IAuthenticationService;
};

export async function setupDependencies(): Promise<Services> {
  const AuthenticationServiceInst = new Auth0AuthenticationService();
  // await AuthenticationServiceInst.restoreAuthState();
  return {
    authenticationService: AuthenticationServiceInst
  };
}
