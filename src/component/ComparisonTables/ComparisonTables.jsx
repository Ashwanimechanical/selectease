import React from 'react';
import './ComparisonTables.css';

const ComparisonPair = ({ leftCompany, rightCompany }) => (
  <div className="comparison-pair">
    <div className="company-side">
      <img 
        src={leftCompany.logo} 
        alt={leftCompany.name}
        className="company-logo"
      />
      <span className="company-name">{leftCompany.name}</span>
    </div>
    
    <div className="separator">
      <div className="vertical-line"></div>
      <img 
        src="src/assets/Vs.png" 
        alt="VS" 
        className="vs-icon"
      />
    </div>
    
    <div className="company-side">
      <img 
        src={rightCompany.logo} 
        alt={rightCompany.name}
        className="company-logo"
      />
      <span className="company-name">{rightCompany.name}</span>
    </div>
  </div>
);

const ComparisonTables = () => {
  const comparisonData = [
    {
      left: { name: 'BambooHR', logo: 'src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: 'src/assets/Img (8).png' }
    },
    {
      left: { name: 'BambooHR', logo: '/src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: '/src/assets/Img (8).png' }
    },
    {
      left: { name: 'BambooHR', logo: '/src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: '/src/assets/Img (8).png' }
    },
    {
      left: { name: 'BambooHR', logo: '/src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: '/src/assets/Img (8).png' }
    },
    {
      left: { name: 'BambooHR', logo: '/src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: '/src/assets/Img (8).png' }
    },
    {
      left: { name: 'BambooHR', logo: '/src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: '/src/assets/Img (8).png' }
    },
    {
      left: { name: 'BambooHR', logo: '/src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: '/src/assets/Img (8).png' }
    },
    {
      left: { name: 'BambooHR', logo: '/src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: '/src/assets/Img (8).png' }
    },
    {
      left: { name: 'BambooHR', logo: '/src/assets/Img (7).png' },
      right: { name: 'BambooHR', logo: '/src/assets/Img (8).png' }
    }
  ];

  return (
    <section className="comparison-section">
      <h2 className="comparison-title">Comparison Tables</h2>
      
      <div className="comparison-grid">
        {comparisonData.map((pair, index) => (
          <ComparisonPair
            key={index}
            leftCompany={pair.left}
            rightCompany={pair.right}
          />
        ))}
      </div>
    </section>
  );
};

export default ComparisonTables;