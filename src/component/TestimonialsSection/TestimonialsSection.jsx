import React from 'react';
import './TestimonialsSection.css';

const ReviewCard = ({ quote, author, role, image }) => (
  <div className="review-card">
    <div className="quote-content">
      <div className="quote-icon">❝</div>
      <p className="quote-text">{quote}</p>
    </div>
    
    <div className="review-divider"></div>
    
    <div className="author-info">
      <img src={image} alt={author} className="author-image" />
      <div className="author-details">
        <h4 className="author-name">{author}</h4>
        <p className="author-role">{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Every new business and start-up, big or small, goes through the five stages of business growth. These phases include existence, survival, success, take-off, and resource maturity.",
      author: "Devon Lane",
      role: "Founder of Brilex",
      image: "src/assets/Photo1.png"
    },
    {
      quote: "Business growth is a point a business reaches where it expands and requires more avenues to generate a profit. This can happen when a company increases revenue.",
      author: "Robert Fox",
      role: "Manager of Miro",
      image: "src/assets/Photo.png"
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Testimonials</h2>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <ReviewCard 
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;