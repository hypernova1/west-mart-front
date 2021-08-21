import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import auth from './reducers/auth';
import post from './reducers/post';
import category from './reducers/category';
import dialog from './reducers/dialog';

const reducer = combineReducers({
  auth: auth.reducer,
  post: post.reducer,
  category: category.reducer,
  dialog: dialog.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;