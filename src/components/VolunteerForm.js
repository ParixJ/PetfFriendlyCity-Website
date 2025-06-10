import React, { useState } from 'react';
import './VolunteerForm.css';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    role: '',
    preferences: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for volunteering! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      city: '',
      role: '',
      preferences: '',
      comments: ''
    });
  };

  return (
    <div className="volunteer-form-container">
      <div className="volunteer-form-header">
        <h1>Join Our Volunteer Team</h1>
        <p>Help us make our city more pet-friendly. Fill out the form below to get started.</p>
      </div>
      
      <div className="volunteer-form-wrapper">
        <form onSubmit={handleSubmit} className="volunteer-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter your city"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Preferred Role *</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select a role</option>
              <option value="event-organizer">Event Organizer</option>
              <option value="community-outreach">Community Outreach</option>
              <option value="social-media">Social Media Manager</option>
              <option value="fundraising">Fundraising Coordinator</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="preferences">Time Availability *</label>
            <select
              id="preferences"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              required
            >
              <option value="">Select availability</option>
              <option value="weekday-mornings">Weekday Mornings</option>
              <option value="weekday-afternoons">Weekday Afternoons</option>
              <option value="weekday-evenings">Weekday Evenings</option>
              <option value="weekends">Weekends</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Additional Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Tell us more about yourself and why you want to volunteer"
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm; 