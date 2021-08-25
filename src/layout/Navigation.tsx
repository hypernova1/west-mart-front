import React, { useEffect, useState } from 'react';
import '../styles/layout/Navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { CategoryType } from '../types/category';
import { getCategoryList } from '../actions/category';
import { Link } from 'react-router-dom';

interface NavigationProps {
  open: boolean;
}

export default function Navigation({ open }: NavigationProps) {
  const hidden = open ? '' : 'hidden';
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector<RootState, CategoryType[]>(
    (state) => state.category.categories,
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    dispatch(getCategoryList());
  }, [selected, dispatch]);

  return (
    <div>
      <div className={'side-bar side-bar-transform ' + hidden}>
        <div className="side-bar-header">서서울상회</div>
        <div className="category">
          {categories.map((category) => {
            return (
              <Link
                key={category.name}
                className={'category-item ' + (category.id === selected) && 'category-item'}
                to={`/post/${category.name}`}
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
