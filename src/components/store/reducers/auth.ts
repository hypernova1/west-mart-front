import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isLogin: boolean;
  token: string;
}

export type LoginPayload = {
  email: string;
  password: string;
}

const initialState: AuthState = {
  isLogin: false,
  token: '',
}

const auth = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string }>) {
      state.isLogin = true;
      state.token = action.payload.token
    }
  }
});

export const { login } = auth.actions;

export default auth;