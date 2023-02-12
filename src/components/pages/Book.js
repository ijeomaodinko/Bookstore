import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookThunk } from '../../redux/books/books';

// To remove book from the booklist
const Book = (props) => {
  const {
    id, title, author,
  } = props;

  const dispatch = useDispatch();

  const clickHandle = () => {
    dispatch(removeBookThunk(id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={clickHandle}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
