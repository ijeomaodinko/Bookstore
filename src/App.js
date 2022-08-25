import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import Categories from './components/pages/Categories';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
