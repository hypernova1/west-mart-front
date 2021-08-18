import { AppDispatch } from '../store';
import axios from 'axios';
import { getCategories } from '../store/reducers/category';
import { CategoryType } from '../types/category';

export const getCategoryList = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`http://172.30.14.43:3001/category`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`
      }
    });

    const { data } = response;

    const categories = data.map((category: any) => ({
      id: category.id,
      name: category.name,
      managerId: category.managerId,
      sequence: category.sequence,
    } as CategoryType));

    dispatch(getCategories({ categories }));
  } catch (e) {
    console.log(e);
  }
}