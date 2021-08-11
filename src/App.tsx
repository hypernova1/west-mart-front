import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./components/layout/Main";
import Login from './components/layout/Login';
import { RootState } from './store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function App() {
  const { isLogin } = useTypedSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
