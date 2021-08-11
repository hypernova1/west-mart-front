import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import auth from './reducers/auth';

const reducer = combineReducers({
  auth: auth.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;