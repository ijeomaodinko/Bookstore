import './AddBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookThunk } from '../redux/books/books';

// to add book to the store
const AddBook = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({ title: '', author: '', category: '' });

  const clickSubmit = (e) => {
    e.preventDefault();
    e.target.previousElementSibling.previousElementSibling.value = '';
    e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
    dispatch(addBookThunk(bookInfo));
  };

  const clickHandle = (e) => {
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value,
    });
    // if (title && author) {
    //   dispatch(addBookAction(id, title, author));
    //   e.target[0].value = '';
    //   e.target[1].value = '';
    // }
  };

  return (
    <div className="FormDiv">
      <header className="title">
        <h3 className="titleInput">ADD NEW BOOK</h3>
      </header>
      <form className="form">
        <input className="inputs" onInput={clickHandle} type="text" name="title" placeholder="Book-title" />
        <input className="inputs" onInput={clickHandle} type="text" name="author" placeholder="Author" />
        <select className="options" onInput={clickHandle} name="category">
          <option value="Epic">Epic</option>
          <option value="Educational">Educational</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Romance">Romance</option>
        </select>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <input className="submit-btn" onClick={clickSubmit} type="submit" value="ADD BOOK" />
      </form>
    </div>

  );
};

export default AddBook;
