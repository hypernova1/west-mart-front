import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import PostForm from './PostForm';

export default function Post() {
  return (
    <>
      <Route path="/post/list" component={PostList} />
      <Route path="/post/create" component={PostForm} />
      <Route path="/post/:id" component={PostDetail} />
    </>
  )
}