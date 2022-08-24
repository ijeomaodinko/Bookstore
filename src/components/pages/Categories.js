/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../../redux/categories/categories';
import '../Categories.css';

const Categories = () => {
  // const state = useSelector((state) => state.statusReducer);
  const dispatch = useDispatch();

  const clickSubmit = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div>
      {/* <p>{state}</p> */}
      <button type="button" onClick={clickSubmit}>Check Status</button>
    </div>
  );
};

export default Categories;
