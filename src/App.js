import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Book from './components/pages/Book';
import NavBar from './components/NavBar';
import Categories from './components/pages/Categories';

const books = [
  {
    id: '1',
    title: 'Percing the Darkness',
    author: ' Frank E. Peretti',
  },
  {
    id: '2',
    title: 'Experiencing God',
    author: 'Henry T Blackaby',
  },
  {
    id: '3',
    title: 'Fire Proof',
    author: 'Eric Welson',
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Book bookItem={books} />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
