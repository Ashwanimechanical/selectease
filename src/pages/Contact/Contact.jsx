import React, { useState } from 'react';
import './Contact.css';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const faqItems = [
    {
      question: "Why should I choose TaskFlow?",
      answer: "TaskFlow provides comprehensive solutions..."
    },
    {
      question: "Do I need to change banks?",
      answer: "No, you can keep your existing bank..."
    },
    {
      question: "How can I order equipment?",
      answer: "You can order equipment through our portal..."
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes, we offer volume discounts..."
    },
    {
      question: "How does signing up work?",
      answer: "Signing up is a simple process..."
    }
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        {/* Form and Map Section */}
        <div className="contact-main">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input 
                  type="text"
                  placeholder="First Name"
                  className="form-input"
                />
                <input 
                  type="text"
                  placeholder="Last Name"
                  className="form-input"
                />
              </div>
              <input 
                type="email"
                placeholder="Email"
                className="form-input"
              />
              <textarea
                placeholder="Message"
                className="form-textarea"
                rows={4}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="map-container">
            <img 
              src="/api/placeholder/600/709" 
              alt="Location Map"
              className="contact-map"
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="contact-options">
          <div className="option">
            <Instagram size={32} />
            <h3>@FIND YOUR DRESS</h3>
            <p>Follow us on Instagram</p>
          </div>
          <div className="option">
            <MapPin size={32} />
            <h3>ADDRESS</h3>
            <p>2644 Royal Ln. Mesa, New Jersey 45463</p>
          </div>
          <div className="option">
            <Phone size={32} />
            <h3>PHONE</h3>
            <p>555-433-2466</p>
          </div>
          <div className="option">
            <Mail size={32} />
            <h3>EMAIL</h3>
            <p>hello@example.com</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">Sed ut perspiciatis unde omnis iste natus errorit voluptatem accusantium.</p>
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <details key={index} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <button className="faq-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;