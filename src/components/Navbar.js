import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Chatbot from './Chatbot';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CollegeTips
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/stories" className="nav-link">Stories</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Chatbot />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 