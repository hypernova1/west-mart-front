import { AppDispatch } from '../store';
import axios from 'axios';
import PostType from '../types/post';
import { getPosts } from '../store/reducers/post';

export const getPostList = (page: number, keyword: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`http://172.30.14.43:3001/post?pageNo=${page}&keyword=${keyword}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    });

    const { postList, isExistNextPage } = response.data;

    const posts = postList.map((post: any) => ({
      id: post.id,
      content: post.content,
      hits: post.hits,
      writer: post.writer,
    } as PostType));

    dispatch(getPosts({ posts, isExistNextPage }));
  } catch (e) {
    console.log(e);
  }
}