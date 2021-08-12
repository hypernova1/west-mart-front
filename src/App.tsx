import React  from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
        <Route exact path="/">
          { isLogin ? <Main/> : <Redirect to="/login" /> }
        </Route>
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
