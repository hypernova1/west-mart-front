import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertType } from '../../types/alert';

type AlertState = {
  open: boolean;
  type: AlertType;
  message: string;
};

const initialState: AlertState = {
  open: false,
  type: AlertType.INFO,
  message: '',
};

const alert = createSlice({
  name: 'alert',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<AlertState>) {
      state = action.payload;
      return state;
    },
    logout(state) {
      state = initialState;
      return state;
    },
  },
});

export const { login, logout } = alert.actions;

export default alert;
