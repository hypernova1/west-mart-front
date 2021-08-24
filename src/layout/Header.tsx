import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { useHistory } from 'react-router-dom';
import { logout } from '../actions/auth';

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const handleClick = () => {
    dispatch(logout());
    history.push('/login');
  };
  return (
    <header>
      <h2>Header</h2>
      <div>
        <button onClick={handleClick}>로그아웃</button>
      </div>
    </header>
  );
}
