import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PostType from '../../types/post';

type AuthState = {
  posts: PostType[];
  isExistNextPage: boolean;
}

const initialState: AuthState = {
  isExistNextPage: false,
  posts: [] as PostType[],
}

const post = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    getPosts(state, action: PayloadAction<{ posts: PostType[]; isExistNextPage: boolean }>) {
      state.isExistNextPage = action.payload.isExistNextPage;
      state.posts = action.payload.posts;
      return state;
    },
  }
});

export const { getPosts } = post.actions;

export default post;