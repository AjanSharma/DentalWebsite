import React from 'react';
import './Infosection.css'; // Separate CSS for styling

const InfoSection = () => {
  return (
    <section id="info-section">
      <h5>Don't Be a Stranger</h5>
      <h2>Book Your Next Visit Today!</h2>
      <div className="info-container">
        <div className="info-details">
          <p><strong>Phone:</strong> (514) 553-7673</p>
          <p><strong>Address:</strong> 94 East Ave South, Hamilton</p>
          <p><strong>Email:</strong> hello@email.com</p>
          <div className="working-hours">
            <p><strong>Mon:</strong> 8:00 AM - 5:00 PM</p>
            <p><strong>Tue:</strong> 8:00 AM - 5:00 PM</p>
            <p><strong>Wed:</strong> 8:00 AM - 5:00 PM</p>
            <p><strong>Thu:</strong> 8:00 AM - 5:00 PM</p>
            <p><strong>Fri:</strong> Closed</p>
            <p><strong>Sat:</strong> 9:00 AM - 1:00 PM</p>
            <p><strong>Sun:</strong> Closed</p>
          </div>
          {/* <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div> */}
        </div>
        <div className="map-container">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.548027846891!2d-122.35338978416228!3d47.62211687918544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154caa2e5805%3A0x6a2d5b8b1d5cbd10!2sSeattle%20Dental%20Co.!5e0!3m2!1sen!2sus!4v1633105926077!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="map-frame"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
