import React, { useEffect } from 'react';
import '../styles/layout/Navigation.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { CategoryType } from '../types/category';
import { getCategoryList } from '../actions/category';
import category from '../store/reducers/category';

interface NavigationProps {
  open: boolean,
}

export default function Navigation({ open }: NavigationProps) {
   const hidden = open ? '' : 'hidden';

   const dispatch = useDispatch<AppDispatch>();
   const categories = useSelector<RootState, { categories: CategoryType[] }>((state) => state.category)

   useEffect(() => {
    dispatch(getCategoryList());
    console.log(categories);
   }, [dispatch])

  return (
    <div className={'side-bar side-bar-transform ' + hidden}>
      SideBar
    </div>
  )
}