import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { useHistory } from 'react-router-dom';
import { logout } from '../../actions/auth';

export default function Main() {

  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const handleClick = () => {
    dispatch(logout());
    history.push('/login');
  }

  return (
    <div>
      <button
        onClick={handleClick}
      >로그아웃</button>
      <Route path="/home" component={Home} />
    </div>
  );
}