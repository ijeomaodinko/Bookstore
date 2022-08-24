import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from './components/pages/Book';
import NavBar from './components/NavBar';
import Categories from './components/pages/Categories';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
