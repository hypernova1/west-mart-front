import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { useHistory } from 'react-router-dom';
import { logout } from '../actions/auth';

interface HeaderProps {
  handleOpen: any;
}

export default function Header({ handleOpen }: HeaderProps) {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const handleClick = () => {
    dispatch(logout());
    history.push('/login');
  };
  return (
    <header style={{ height: '60px', borderBottom: '0.06rem solid #e7eaec'}}>
      <label htmlFor="slide" onClick={handleOpen} style={{ padding: '10px'}}>
        ☰
      </label>
      <h2 style={{ display: 'inline-block', marginLeft: '10px', margin: 0, padding: '15px' }}>서서울상회</h2>
      <button onClick={handleClick}>로그아웃</button>
    </header>
  );
}
