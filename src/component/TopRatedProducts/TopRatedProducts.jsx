import React from 'react';
import './TopRatedProducts.css';

const categories = [
  {
    id: 1,
    title: "Meta AI",
    image: "src/assets/Img (3).png",
    description: "Lorem ipsum dolor sit amet consectetur.",
    link: "/explore-categories"
  },
  {
    id: 2,
    title: "Meta AI",
    image: "src/assets/Img (4).png",
    description: "Lorem ipsum dolor sit amet consectetur.",
    link: "/explore-categories"
  },
  {
    id: 3,
    title: "Meta AI",
    image: "src/assets/Img (5).png",
    description: "Lorem ipsum dolor sit amet consectetur.",
    link: "/explore-categories"
  },
  {
    id: 4,
    title: "Meta AI",
    image: "src/assets/Img (6).png",
    description: "Lorem ipsum dolor sit amet consectetur.",
    link: "/explore-categories"
  }
];

const TopRatedProducts = () => {
  return (
    <section className="top-rated-products">
      <h2 className="section-title">Top Rated Products</h2>
      
      <div className="products-grid">
        {categories.map((category) => (
          <div key={category.id} className="product-card">
            <div className="product-card__image-container">
              <img
                src={category.image}
                alt={category.title}
                className="product-card__image"
              />
            </div>
            <div className="product-card__content">
              <h3 className="product-card__title">{category.title}</h3>
              <p className="product-card__description">{category.description}</p>
              <a href={category.link} className="product-card__link">
                Explore Categories
                <span className="product-card__arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProducts;