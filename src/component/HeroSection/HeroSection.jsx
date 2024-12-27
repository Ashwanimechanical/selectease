import React from 'react';
import { Search } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const circleImages = [
    {
      id: 1,
      src: '/src/assets/circle1.png',
      style: { top: '15%', left: '5%' }
    },
    {
      id: 2,
      src: '/src/assets/circle2.png',
      style: { top: '30%', left: '40%' }
    },
    {
      id: 3,
      src: '/src/assets/circle3.png',
      style: { top: '25%', right: '35%' }
    },
    {
      id: 4,
      src: '/src/assets/circle4.png',
      style: { bottom: '35%', left: '15%' }
    },
    {
      id: 5,
      src: '/src/assets/circle5.png',
      style: { bottom: '30%', right: '25%' }
    },
    {
      id: 6,
      src: '/src/assets/circle6.png',
      style: { bottom: '20%', right: '10%' }
    }
  ];
  
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="background-image">
        <img 
          src="\src\assets\Hero 10.png"
          alt="Background"
        />
      </div>

      <div className="container">
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Find the Best <span className="font-bold">AI Tools</span> with Expert
            <div className="mt-2">Reviews and Comparisons.</div>
          </h1>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="search-button">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Sub Images Grid */}
        <div className="image-grid">
          <div className="sub-image">
            <img 
              src="\src\assets\SE01 1.png"
              alt="AI Chat Interface"
            />
          </div>
          <div className="sub-image">
            <img 
              src="\src\assets\im-950573SE02 1.png"
              alt="AI Features"
            />
          </div>
          <div className="sub-image">
            <img 
              src="\src\assets\SE04 1.png"
              alt="Model Directory"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;