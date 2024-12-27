import React from 'react';
import './Blog.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Juan Diego Rodriguez wrote Gatsby Headaches',
      category: 'Category',
      date: '20 June 2023',
      image: '/src/assets/blog1.jpg'
    },
    // Repeat for other blog posts
  ];

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="blog-title">Blog</h1>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-image-container">
              <img 
                src={post.image} 
                alt={post.title}
                className="blog-image"
              />
            </div>
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <div className="blog-meta">
                <div className="category-tag">{post.category}</div>
                <div className="blog-date">
                  <img src="/calendar-icon.svg" alt="calendar" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;