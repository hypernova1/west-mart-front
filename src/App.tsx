import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/layout/Login';
import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { verify } from './actions/auth';
import Main from './components/layout/Main';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function App() {
  const { isLogin, userInfo } = useTypedSelector((state) => state.auth)

  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token && !isLogin) {
      dispatch(verify());
    }
  }, [isLogin, token]);


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          { isLogin ? <Redirect to="/home" /> : <Login /> }
        </Route>
        { isLogin && <Route path="/*" component={Main} /> }
      </Switch>
    </BrowserRouter>
  );
}
