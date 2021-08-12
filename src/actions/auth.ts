import { LoginForm, UserInfo } from '../types/auth';
import { AppDispatch, AppThunk } from '../store';
import { login as _login } from '../store/reducers/auth';
import axios from 'axios';

export const login = (loginForm: LoginForm): AppThunk => async (dispatch: AppDispatch) => {
  // try {
  //   const response = await axios.post('http://localhost:3001/auth', loginForm);
  //   const token = response.data.token as string;
  //   const userInfo = {
  //     ...response.data.userInfo,
  //   } as UserInfo;
  //
  //   localStorage.setItem('token', token);
  //   dispatch(_login(userInfo));
  // } catch (e) {
  //   console.log(e);
  // }
}