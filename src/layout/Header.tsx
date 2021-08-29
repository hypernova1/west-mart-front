import React from 'react';
import '../styles/layout/Header.css';
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
    <header className="header">
      <label htmlFor="slide" onClick={handleOpen} className="menu-button">
        ☰
      </label>
      <h2 className="header-title">서서울상회</h2>
      <button onClick={handleClick}>로그아웃</button>
    </header>
  );
}
