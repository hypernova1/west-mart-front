import React, { useEffect, useState } from 'react';
import '../styles/layout/Navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { CategoryType } from '../types/category';
import { getCategoryList } from '../actions/category';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  open: boolean;
}

export default function Navigation({ open }: NavigationProps) {
  const hidden = open ? '' : 'hidden';
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector<RootState, CategoryType[]>(
    (state) => state.category.categories,
  );
  const [selected, setSelected] = useState<string>('all');
  const location = useLocation();

  useEffect(() => {
    dispatch(getCategoryList());
    const categoryId = location.pathname.split('/')[2];
    setSelected(categoryId);
    console.log(selected);
  }, [selected, location, dispatch]);

  return (
    <div>
      <div className={'side-bar side-bar-transform ' + hidden}>
        <div className="side-bar-header">서서울상회</div>
        <div className="category">
          <div className="category-item-wrapper">
            <Link to="/category/all/post" className={'category-item ' + ('all' === selected ? 'selected-item' : '')}>전체</Link>
          </div>
          {categories.map((category) => {
            return (
              <div key={category.name} className="category-item-wrapper">
                <Link
                  className={'category-item ' + ((String(category.id) === selected) ? 'selected-item' : '')}
                  to={`/category/${category.id}/post`}
                >
                  {category.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
