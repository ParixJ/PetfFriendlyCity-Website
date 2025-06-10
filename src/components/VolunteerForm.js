import React from 'react';
import './VolunteerForm.css';

const VolunteerForm = () => {
  return (
    <div className="volunteer-form-container">
      <div className="volunteer-form-header">
        <h1>Join Our Volunteer Team</h1>
        <p>Help us make our city more pet-friendly. Fill out the form below to get started.</p>
      </div>
      
      <div className="volunteer-form-wrapper">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfYOUR_FORM_ID_HERE/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Volunteer Registration Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default VolunteerForm; 