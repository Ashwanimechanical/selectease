// src/component/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Logo Section - Left Side */}
        <div className="footer-logo-section" style={{ width: '374px', height: '149px' }}>
          <Link to="/" className="footer-logo">
            <img 
              src="\src\assets\Header (2).png" 
              alt="Select-ease" 
              className="footer-logo-image"
              width="112"
              height="50"
            />
          </Link>
          <p className="footer-description">
            Real Estate Masters Vacant lots, agricultural land, development sites. Real Estate Masters Vacant lots, agricultural land, development sites.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links" style={{ width: '134px', height: '180px' }}>
          <h3 className="footer-heading">Quick Links</h3>
          <nav className="footer-nav">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about-us" className="footer-link">About Us</Link>
            <Link to="/properties" className="footer-link">Properties</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="footer-contact" style={{ width: '256px', height: '180px' }}>
          <h3 className="footer-heading">Contact Information</h3>
          <div className="contact-info">
            <p>3891 Ranchview Dr. Richardson, California 62639</p>
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="tel:+1-239-555-0108">(239) 555-0108</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-social" style={{ width: '196px', height: '180px' }}>
          <h3 className="footer-heading">Social Media Links</h3>
          <nav className="footer-nav">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about-us" className="footer-link">About Us</Link>
            <Link to="/properties" className="footer-link">Properties</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2024 . All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;