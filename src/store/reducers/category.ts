import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryType } from '../../types/category';

type CategoryState = {
  categories: CategoryType[];
};

const initialState: CategoryState = {
  categories: [],
};

const category = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    getCategories(
      state,
      action: PayloadAction<{ categories: CategoryType[] }>,
    ) {
      state.categories = action.payload.categories;
      return state;
    },
  },
});

export const { getCategories } = category.actions;

export default category;
