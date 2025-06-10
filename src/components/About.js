import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeFact, setActiveFact] = useState(null);

  const facts = [
    {
      id: 1,
      title: "Pet-Friendly Benefits",
      content: "Cities with pet-friendly policies see a 15% increase in community engagement and social interaction."
    },
    {
      id: 2,
      title: "Health Impact",
      content: "Pet owners in pet-friendly cities report 30% lower stress levels and better mental health outcomes."
    },
    {
      id: 3,
      title: "Economic Growth",
      content: "Pet-friendly businesses see a 25% increase in customer retention and community support."
    },
    {
      id: 4,
      title: "Community Impact",
      content: "Neighborhoods with pet-friendly parks show 40% higher community satisfaction rates."
    }
  ];

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Our Mission</h1>
        <p>Creating a world where pets and people thrive together in urban spaces</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Vision</h2>
          <p>We envision cities where pets are welcomed as valued members of the community, with dedicated spaces and policies that support their well-being and the happiness of their owners.</p>
        </section>

        <section className="interactive-facts">
          <h2>Did You Know?</h2>
          <div className="facts-grid">
            {facts.map((fact) => (
              <div 
                key={fact.id} 
                className={`fact-card ${activeFact === fact.id ? 'active' : ''}`}
                onClick={() => setActiveFact(activeFact === fact.id ? null : fact.id)}
              >
                <h3>{fact.title}</h3>
                {activeFact === fact.id && (
                  <div className="fact-content">
                    <p>{fact.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="impact-section">
          <h2>Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>50+</h3>
              <p>Cities Transformed</p>
            </div>
            <div className="impact-card">
              <h3>100K+</h3>
              <p>Happy Pets</p>
            </div>
            <div className="impact-card">
              <h3>200+</h3>
              <p>Pet-Friendly Parks</p>
            </div>
            <div className="impact-card">
              <h3>1000+</h3>
              <p>Success Stories</p>
            </div>
          </div>
        </section>

        <section className="join-section">
          <h2>Join Our Movement</h2>
          <p>Be part of the change. Together, we can make our cities more welcoming for pets and their owners.</p>
          <button className="join-button">Get Involved</button>
        </section>
      </div>
    </div>
  );
};

export default About; 