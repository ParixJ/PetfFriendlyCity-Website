import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleJoinCampaign = () => {
    navigate('/volunteer');
  };

  const handleViewStories = () => {
    alert('Stories section coming soon!');
  };

  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Transforming cities, one paw at a time</h1>
          <p>Join us in making our cities more welcoming for our furry friends</p>
          <div className="cta-buttons">
            <button className="btn primary-btn" onClick={handleJoinCampaign}>
              Join the Campaign
            </button>
            <button className="btn secondary-btn" onClick={handleViewStories}>
              Read Stories
            </button>
          </div>
        </div>
      </div>

      <div className="mission-section">
        <div className="tabs-container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`tab ${activeTab === 'impact' ? 'active' : ''}`}
              onClick={() => setActiveTab('impact')}
            >
              Our Impact
            </button>
            <button 
              className={`tab ${activeTab === 'join' ? 'active' : ''}`}
              onClick={() => setActiveTab('join')}
            >
              Join Us
            </button>
          </div>
          
          <div className="tab-content">
            <div className={`mission-content ${activeTab === 'mission' ? 'active' : ''}`}>
              <h2>Our Mission</h2>
              <div className="mission-text">
                {/* Add your mission description here */}
                <p>Your mission description will go here. This space is reserved for your compelling story about making cities more pet-friendly.</p>
              </div>
              <div className="mission-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Cities</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100K+</span>
                  <span className="stat-label">Happy Pets</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Parks</span>
                </div>
              </div>
            </div>

            <div className={`impact-content ${activeTab === 'impact' ? 'active' : ''}`}>
              <h2>Our Impact</h2>
              <div className="impact-grid">
                <div className="impact-card">
                  <h3>Community</h3>
                  <p>Building stronger, more connected neighborhoods through pet-friendly initiatives.</p>
                </div>
                <div className="impact-card">
                  <h3>Health</h3>
                  <p>Promoting physical and mental well-being through pet companionship.</p>
                </div>
                <div className="impact-card">
                  <h3>Environment</h3>
                  <p>Creating sustainable, pet-friendly urban spaces for everyone to enjoy.</p>
                </div>
              </div>
            </div>

            <div className={`join-content ${activeTab === 'join' ? 'active' : ''}`}>
              <h2>Join Our Movement</h2>
              <div className="join-options">
                <div className="join-card">
                  <h3>Volunteer</h3>
                  <p>Help us organize events and spread awareness in your community.</p>
                  <button className="join-btn">Learn More</button>
                </div>
                <div className="join-card">
                  <h3>Donate</h3>
                  <p>Support our initiatives to create more pet-friendly spaces.</p>
                  <button className="join-btn">Donate Now</button>
                </div>
                <div className="join-card">
                  <h3>Partner</h3>
                  <p>Businesses and organizations can partner with us to make a difference.</p>
                  <button className="join-btn">Partner With Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Why Pet-Friendly Cities Matter</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏡</div>
            <h3>Community Building</h3>
            <p>Pets bring people together, creating stronger neighborhood bonds.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Health Benefits</h3>
            <p>Pet owners enjoy better physical and mental health outcomes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌳</div>
            <h3>Green Spaces</h3>
            <p>More parks and outdoor areas for everyone to enjoy.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Social Impact</h3>
            <p>Creating inclusive communities that welcome all family members.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 