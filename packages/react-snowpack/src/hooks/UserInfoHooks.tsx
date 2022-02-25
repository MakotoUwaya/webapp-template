import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState
} from 'react';

import {
  UserInfo,
  UserChangedReason
} from '../services/IAuthenticationService';

import { useDependency } from './DependencyHook';

type UserInfoInternal = {
  changeReason: UserChangedReason;
} & (
  | {
      loggedIn: false;
    }
  | {
      loggedIn: true;
      userInfo: UserInfo;
    }
);

const UserInfoContext = createContext<UserInfoInternal | null>(null);

export const useUserInfo = (): UserInfo | null => {
  const userInfo = useContext(UserInfoContext);
  // if (userInfo === null) {
  //   throw new Error('AuthenticationIsNotSetupError');
  // }
  // if (userInfo.loggedIn === false) {
  //   throw new Error('AuthenticationRequiredError');
  // }
  return userInfo?.loggedIn ? userInfo.userInfo : null;
};

export const useIsAuthenticated = (): boolean | null => {
  const userInfoInternal = useContext(UserInfoContext);
  return userInfoInternal?.loggedIn ?? null;
};

export const useUserChangedReason = (): UserChangedReason | null => {
  const userInfoInternal = useContext(UserInfoContext);
  return userInfoInternal?.changeReason ?? null;
};

export const UserInfoProvider: FC = ({ children }) => {
  const authenticationService = useDependency('authenticationService');
  const [userInfo, setUserInfo] = useState<UserInfoInternal | null>(null);

  useEffect(() => {
    return authenticationService.subscribeUserChanged((user, changedReason) =>
      user !== null
        ? setUserInfo({
            loggedIn: true,
            userInfo: user,
            changeReason: changedReason
          })
        : setUserInfo({ loggedIn: false, changeReason: changedReason })
    );
  }, [authenticationService]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
};
