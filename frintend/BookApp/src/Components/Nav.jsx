import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <h2 className="logo">BookZone</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Nav;
