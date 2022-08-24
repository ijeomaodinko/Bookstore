import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../AddBook';
import BookList from '../BookList';
import './Book.css';

const Book = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div className="bookdiv">
      <div>
        {books.map((book) => (
          <BookList
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default Book;
