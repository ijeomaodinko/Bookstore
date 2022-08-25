import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './pages/Book';
import './pages/Book.css';

// to add the bok container
const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div className="bookdiv">
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default BookList;
