import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="menuNav">
    <h1 className="menuTitle">
      Bookstore
      {' '}
      <span>CMS</span>
    </h1>
    <div className="menuContainer">
      <ul className="menuList">
        <li><Link className="menui book vertical" to="/">Books</Link></li>
        <li><Link className="menui categories vertical" to="/Categories">Categories</Link></li>
      </ul>
    </div>
    {/* <div className="imgAccount"><FaUser fa-lg /></div> */}
  </nav>
);

export default NavBar;
