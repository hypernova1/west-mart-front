import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getPostList } from '../../actions/post';

export default function PostList() {

  const dispatch = useDispatch<AppDispatch>();

  const { posts, isExistNextPage } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(getPostList(1, ''));
  }, [dispatch]);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {
          posts.map((post) => {
            return (
              <li>
                <span>{post.id}</span>
                <span>{post.title}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
