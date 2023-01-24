/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

import '../Categories.css';

const Categories = () => {
  const state = useSelector((state) => state.checkStatusReducer);
  const dispatch = useDispatch();

  // const clickSubmit = () => {
  //   dispatch(checkStatusAction());
  // };

  return (
    <div>
      <p>{state}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
};

export default Categories;
