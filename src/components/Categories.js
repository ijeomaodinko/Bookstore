import React from 'react';
import './Categories.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const state = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="menuDiv">
      <p className="p">{state}</p>
      <button className="checkButton" type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};
export default Categories;
