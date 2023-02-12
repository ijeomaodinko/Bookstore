import './Book.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookThunk, removeBookThunk } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookThunk());
    // eslint-disable-next-line
  }, []);

  // to add event to the remove
  const clickHandle = (e) => {
    e.preventDefault();
    dispatch(removeBookThunk(e.target.id));
  };

  // to render the page
  return (
    books.map((book) => (
      <section key={book.id} className="bookSection">
        <div className="bookContainer">
          <div className="bookType">
            <p className="bookCategory">{book.category}</p>
            <h2 className="bookTitle">{book.title}</h2>
            <p className="bookAuthor">{book.author}</p>
            <div className="commentDiv">
              <button className="comment button" type="button">Comments</button>
              <button
                id={book.id}
                className="remove button"
                type="button"
                onClick={clickHandle}
              >
                Remove
              </button>
              <button className="edit button" type="button">Edit</button>
            </div>
          </div>
          <div className="perDiv">
            <p className="showPer">O</p>
            <div className="per">
              <h2 className="percent">64%</h2>
              <h3 className="perCompleted">Completed</h3>
            </div>
          </div>
          <div className="updateDiv">
            <h2 className="currentChapter">CURRENT CHAPTER</h2>
            <h3 className="currentCha">Chapter 17</h3>
            <button className="updateProgram" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </section>
    )));
};

export default Book;
