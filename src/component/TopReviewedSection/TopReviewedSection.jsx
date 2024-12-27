import React from 'react';
import './TopReviewedSection.css';

const StarRating = ({ rating, count }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
          ★
        </span>
      ))}
      <span className="rating-count">({count})</span>
    </div>
  );
};

const ReviewCard = ({ quote }) => {
  return (
    <div className="review-card">
      <div className="quote-icon">❝</div>
      <p className="review-text">{quote}</p>
      <StarRating rating={5} count="1156" />
      <a href="#" className="read-more">
        Read More <span className="arrow">→</span>
      </a>
    </div>
  );
};

const TopReviewedSection = ({ buttonText = "All Review" }) => {
  const reviewQuote =
    "Every new business and start-up, big or small, goes through the five stages of business growth. These phases include existence, survival, success, take-off, and resource maturity.";

  const bgStyle = {
    backgroundImage: 'url()', // Update to your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="bg-wrapper" style={bgStyle}>
      <section className="top-reviewed-section">
        <div className="bg-overlay"></div>

        <div className="content-wrapper">
          <div className="left-content">
            <div className="text-container">
              <h2 className="section-title">
                Top 8 Most Reviewed<br />
                Software of June<br />
                2024
              </h2>
              <button className="all-review-btn">{buttonText}</button> {/* Button positioned right below the text */}
            </div>
          </div>

          <div className="reviews-container">
            <ReviewCard quote={reviewQuote} />
            <ReviewCard quote={reviewQuote} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopReviewedSection;
