import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img 
            src="\src\assets\Logo.png" 
            alt="Select-ease"
            className="logo-image"
            width="112"
            height="50"
          />
        </Link>

        <nav className="nav">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/add-product" className="nav-link">Add a Product</Link>
          <Link to="/write-review" className="nav-link">Write a Review</Link>
          <Link to="/blogs" className="nav-link">Blog</Link>
        </nav>

        <div className="search-contact">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <button onClick={handleContactClick} className="contact-button">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;