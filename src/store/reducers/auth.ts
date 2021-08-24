import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../types/auth';

type AuthState = {
  isLogin: boolean;
  userInfo: UserInfo;
};

const initialState: AuthState = {
  isLogin: false,
  userInfo: {
    email: '',
    nickname: '',
    role: '',
  } as UserInfo,
};

const auth = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<UserInfo>) {
      state.isLogin = true;
      state.userInfo = action.payload;
      return state;
    },
    logout(state) {
      state.isLogin = false;
      state.userInfo = {} as UserInfo;
      return state;
    },
  },
});

export const { login, logout } = auth.actions;

export default auth;
