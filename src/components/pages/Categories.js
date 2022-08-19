/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../Categories.css';

const Categories = () => {
  return (
    <div>
      <form action="#">
        <label htmlFor="category">Choose a category:</label>
        <select name="category" id="category" className="category">
          <option value="fiction">fiction</option>
          <option value="Epic">Epic</option>
          <option value="Motivational">Motivational</option>
        </select>
        <button type="submit">
          check status
        </button>
      </form>
    </div>
  );
};

export default Categories;