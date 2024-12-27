import React from 'react';
import './WriteReview.css';

const WriteReview = () => {
  const products = Array(16).fill({
    id: 1,
    name: 'Salesforce',
    image: '/src/assets/salesforce-icon.png',
    subtitle: 'by Salesforce'
  });

  return (
    <div className="write-review">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Your feedback can make a BIG impact</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2 className="section-title">Here are some popular products to review</h2>
        
        <div className="products-grid">
          {products.slice(0, 8).map((product, index) => (
            <div key={`popular-${index}`} className="product-card">
              <img src={product.image} alt={product.name} className="product-icon" />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-subtitle">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">Select the other solutions you use, and then click to start a review:</h2>
        
        <div className="products-grid">
          {products.slice(8).map((product, index) => (
            <div key={`others-${index}`} className="product-card">
              <img src={product.image} alt={product.name} className="product-icon" />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-subtitle">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WriteReview;