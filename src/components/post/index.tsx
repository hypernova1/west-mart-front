import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import PostForm from './PostForm';

export default function Post() {
  return (
    <>
      <Route exact path="/post/:name" component={PostList} />
      <Route exact path="/post/create" component={PostForm} />
      <Route exact path="/post/:name/:id" component={PostDetail} />
    </>
  )
}