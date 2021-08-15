import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home';
import Post from '../components/post';
import Header from './Header';
import Footer from './Footer';

export default function Main() {
  return (
    <div>
      <Header />
      <main>
        <Route path="/home" component={Home} />
        <Route path="/post" component={Post} />
      </main>
      <Footer />
    </div>
  );
}
