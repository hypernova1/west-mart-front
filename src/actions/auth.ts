import { LoginForm, UserInfo } from '../types/auth';
import { AppDispatch, AppThunk } from '../store';
import { login as _login, logout as _logout } from '../store/reducers/auth';
import Network from '../utils/network';

export const login = (loginForm: LoginForm): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const response = await Network.post(`${process.env.REACT_APP_API_URL}/auth/login`, loginForm);
    const token = response.data.token as string;
    const userInfo = {
      ...response.data.userInfo,
    } as UserInfo;

    localStorage.setItem('token', token);
    dispatch(_login(userInfo));
  } catch (e) {
    console.log(e);
  }
}

export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    localStorage.removeItem('token');
    dispatch(_logout())

  } catch (e) {
    console.log(e);
  }
}

export const verify = ():AppThunk => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem('token');

    const response = await Network.post(`${process.env.REACT_APP_API_URL}/auth/verify`, {});

    if (response.status === 200) {
      dispatch(_login(response.data));
    }

  } catch (e) {
    console.log(e);
  }
}