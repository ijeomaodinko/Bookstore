import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => (
  <div className="books">
    <Book />
    <AddBook />
  </div>
);

export default BookList;
