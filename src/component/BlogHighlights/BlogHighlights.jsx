import React from 'react';
import { Search } from 'lucide-react';
import './BlogHighlights.css';

const categories = [
  {
    id: 1,
    title: "Meta AI",
    image: "/src/assets/Img.png",
    description: "Lorem ipsum dolor sit amet consectetur. Semper ornare viverra volutpat.",
    link: "/explore-categories"
  },
  {
    id: 2,
    title: "Meta AI",
    image: "src/assets/Img (1).png",
    description: "Lorem ipsum dolor sit amet consectetur. Semper ornare viverra volutpat.",
    link: "/explore-categories"
  },
  {
    id: 3,
    title: "Meta AI",
    image: "/src/assets/Img (2).png",
    description: "Lorem ipsum dolor sit amet consectetur. Semper ornare viverra volutpat.",
    link: "/explore-categories"
  }
];

const bloghighlights = () => {
  return (
    <section className="blog-highlights">
      <div className="blog-highlights__header">
        <h2>Blog Highlights</h2>
      </div>
      
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-card__image-container">
              <img
                src={category.image}
                alt={category.title}
                className="category-card__image"
              />
            </div>
            <div className="category-card__content">
              <h3 className="category-card__title">{category.title}</h3>
              <p className="category-card__description">{category.description}</p>
              <a href={category.link} className="category-card__link">
                Explore Categories
                <span className="arrow-icon">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default bloghighlights;