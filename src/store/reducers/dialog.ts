import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DialogState = {
  open: boolean;
  title: string;
  message: string;
  callback: any;
};

const initialState: DialogState = {
  open: false,
  title: '',
  message: '',
  callback: undefined,
};

const dialog = createSlice({
  name: 'dialog',
  initialState: initialState,
  reducers: {
    openDialog(state, action: PayloadAction<DialogState>) {
      state = action.payload;
      return state;
    },
    closeDialog(state) {
      state = initialState;
      return state;
    },
  },
});

export const { openDialog, closeDialog } = dialog.actions;

export default dialog;
