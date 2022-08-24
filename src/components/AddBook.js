import React from 'react';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBookAction } from '../redux/books/books';

const AddBook = () => {
  // const { bookItem } = props;
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = e.target[0].value;
    const author = e.target[1].value;

    if (title && author) {
      dispatch(addBookAction(id, title, author));
      e.target.title.value = '';
      e.target.title.value = '';
    }
  };

  return (
    <div>
      <header>
        <h3>ADD NEW BOOKS</h3>
      </header>
      <form onSubmit={clickHandler}>
        <input onChange={() => {}} type="text" placeholder="Book title" />
        <input onChange={() => {}} type="text" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
