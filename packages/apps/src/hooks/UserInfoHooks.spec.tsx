import { renderHook } from '@testing-library/react-hooks';

// import { UserInfo } from '../services/IAuthenticationService';

import { useUserInfo } from './UserInfoHooks';

describe('useUserInfo のテスト', () => {
  test('初期値がnullになること', () => {
    const { result } = renderHook(() => useUserInfo());
    expect(result.current).toStrictEqual(null);
  });

  // TODO: useDependency と UserInfoContext を mockup してテストする
  // test('初期値が期待通りの値になること', () => {
  //   const { result } = renderHook(() => useUserInfo());
  //   expect(result.current).toStrictEqual({
  //     userName: 'サンプル 太郎',
  //     email: 'taro.sample@test.chukai.example',
  //     domainName: 'テストテストテスト仲介会社'
  //   });
  // });

  // test('setUserInfoを呼び出したあと、指定した値に変更されること', () => {
  //   const changedUserInfo: UserInfo = {
  //     userName: '変更後 太郎',
  //     email: 'changed.taro.sample@test.chukai.example',
  //     domainName: '変更後テストテストテスト仲介会社'
  //   };
  //   const { result } = renderHook(() => useUserInfo());
  //   act(() => {
  //     result.current[1](changedUserInfo);
  //   });
  //   expect(result.current[0]).toStrictEqual(changedUserInfo);
  // });
});
