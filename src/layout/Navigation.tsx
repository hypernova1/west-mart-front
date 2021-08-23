import React, { useEffect } from 'react';
import '../styles/layout/Navigation.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { CategoryType } from '../types/category';
import { getCategoryList } from '../actions/category';
import { Link } from 'react-router-dom';

interface NavigationProps {
  open: boolean,
}

export default function Navigation({ open }: NavigationProps) {
   const hidden = open ? '' : 'hidden';

   const dispatch = useDispatch<AppDispatch>();
   const categories = useSelector<RootState, CategoryType[]>((state) => state.category.categories)

   useEffect(() => {
    dispatch(getCategoryList());
    console.log(categories);
   }, [dispatch])

  return (
    <div className={'side-bar side-bar-transform ' + hidden}>
      <div>
        SideBar
      </div>
      <div>
        {
          categories.map((category) => {
            return <Link key={category.name} to={`/post/${category.name}`}>{category.name}</Link>
          })
        }
      </div>
    </div>
  )
}