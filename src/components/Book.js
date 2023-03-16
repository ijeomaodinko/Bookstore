import './Book.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookThunk, removeBookThunk } from '../redux/books/books';
import circularImage from './assets/circular-image.png';

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

  // to update progress
  const [showProgress, setShowProgress] = useState(false);
  const progressHandle = () => {
    setShowProgress(true);
  };

  // to update the userss progress
  const [currentChapter, setCurrentChapter] = useState(0);
  const [totalChapters, setTotalChapter] = useState(0);
  const [progress, setProgress] = useState(0);

  const submitHandle = (event) => {
    event.preventDefault();
    const percentageProgress = Math.floor((currentChapter / totalChapters) * 100);
    setProgress(percentageProgress);
    setShowProgress(false);
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
            <img src={circularImage} className="showPer" alt="percentrating" style={{ backgroundImage: `conic-gradient(#4386bf ${progress}%, #f7f7f7 ${progress}% 100%)` }} />
            <div className="per">
              <h2 className="percent">
                {progress}
                %
              </h2>
              <h3 className="perCompleted">Completed</h3>
            </div>
          </div>
          <div className="updateDiv">
            <h2 className="currentChapter">CURRENT CHAPTER</h2>
            <h3 className="currentCha">
              Chapter
              {currentChapter}
            </h3>
            <button className="updateProgram" type="button" onClick={progressHandle}>UPDATE PROGRESS</button>
            {showProgress && (
            <form onSubmit={submitHandle}>
              <label htmlFor="progressForm" className="progressForm">
                Current Chapter
                <input type="number" id="progressForm" value={currentChapter} className="chapterForm" name="Current chapter" onChange={(event) => setCurrentChapter(event.target.value)} />
              </label>
              <br />
              <label htmlFor="progressForm" className="progressForm">
                Total Chapter
                <input type="number" id="progressForm" value={totalChapters} className="chapterForm" name="Total chapter" onChange={(event) => setTotalChapter(event.target.value)} />
              </label>
              <button type="submit" className="updateBtn">Submit</button>
            </form>
            )}
          </div>
        </div>
      </section>
    )));
};

export default Book;
