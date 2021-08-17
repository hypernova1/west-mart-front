import React, { useState } from 'react';
import '../styles/layout/Main.css';
import { Route } from 'react-router-dom';
import Home from '../components/home';
import Post from '../components/post';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Main() {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className="container">
      <Navigation open={open} />
      <div className="wrapper flexbox-item-grow">
        <header className="header">
          <button onClick={handleClick}>toggle</button>
          Header
        </header>
        <main className="fill-area-content flexbox-item-grow">
          <Route path="/home" component={Home} />
          <Route path="/post" component={Post} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
