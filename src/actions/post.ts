import { AppDispatch } from '../store';
import PostType from '../types/post';
import { getPosts } from '../store/reducers/post';
import Network from '../utils/network';

export const getPostList = (category: string, page: number, keyword: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await Network.get<PostType>(`${process.env.REACT_APP_API_URL}/category/${category}/post?pageNo=${page}&keyword=${keyword}`);

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