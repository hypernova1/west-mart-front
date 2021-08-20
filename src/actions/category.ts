import { AppDispatch } from '../store';
import { getCategories } from '../store/reducers/category';
import { CategoryType } from '../types/category';
import Network from '../utils/network';

export const getCategoryList = () => async (dispatch: AppDispatch) => {
  try {
    const response = await Network.get(`${process.env.REACT_APP_API_URL}/category`)

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