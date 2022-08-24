import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../redux/books/books';

const BookList = (props) => {
  const { title, author } = props;
  const dispatch = useDispatch();

  const clickHandle = (e) => {
    e.preventDefault();
    dispatch(removeBookAction(title));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={clickHandle}>Delete</button>
    </div>
  );
};

BookList.propTypes = {
  // id: PropTypes.strings.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookList;
