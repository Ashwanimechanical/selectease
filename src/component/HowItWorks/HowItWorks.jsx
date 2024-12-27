import React from 'react';
import { Cloud, Package, Settings } from 'lucide-react';
import './HowItWorks.css';

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="feature-item">
    <div className="feature-icon">
      <Icon size={30} className="icon" />
    </div>
    <div className="feature-content">
      <h3 className="feature-title">
        {title}
      </h3>
      <p className="feature-description">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const features = [
    {
      icon: Cloud,
      title: "Sales Analytics:",
      description: "Trends to Drive Informed Decisions and Optimize Performance."
    },
    {
      icon: Package,
      title: "Products Analytics:",
      description: "Unleashing Insights to Enhance Offerings, Maximize Impact, and Delight Customers."
    },
    {
      icon: Settings,
      title: "Customers Analytics:",
      description: "Preferences for Exceptional Customer Experiences and Lasting Relationships."
    }
  ];

  return (
    <section className="how-it-works">
      <div className="content-wrapper">
        <div className="left-content">
          <h2 className="section-title">How It Works</h2>
          
          <div className="features-list">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <button className="explore-button">
            Explore All Tools
          </button>
        </div>

        <div className="right-content">
          <img
            src="src\assets\bg (1).png"
            alt="Workspace setup"
            className="feature-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;