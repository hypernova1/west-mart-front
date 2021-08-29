import React, { useState } from 'react';
import '../styles/layout/Main.css';
import { Route } from 'react-router-dom';
import Home from '../components/home';
import Post from '../components/post';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

export default function Main() {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="container">
      <Navigation open={open} />
      <div className="wrapper flexbox-item-grow">
        <header className="header">

          <Header handleOpen={handleClick} />
        </header>
        <main className="fill-area-content flexbox-item-grow">
          <Route path="/home" component={Home} />
          <Route path="/category" component={Post} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
