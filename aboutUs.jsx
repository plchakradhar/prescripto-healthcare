import React from 'react';
import './aboutUs.css';

function AboutUs() {
  return (
    
    <div className="about-container">
      <h1 className="heading">ABOUT <span>US</span></h1>
      <div className="about-content">
        <img src="/about_image.png" alt="Doctors" className="about-image" />
        <div className="about-text">
          <p>
            Welcome to HealthConnect, your trusted partner in managing your healthcare needs conveniently and efficiently.
            At HealthConnect, we understand the challenges individuals face when it comes to scheduling doctor appointments
            and managing their health records.
          </p>
          <p>
            HealthConnect is committed to excellence in healthcare technology. We continuously strive to enhance our
            platform, integrating the latest advancements to improve user experience and deliver superior service.
            Whether you're booking your first appointment or managing ongoing care, HealthConnect is here to support you
            every step of the way.
          </p>
          <h3>Our Vision</h3>
          <p>
            Our vision at HealthConnect is to create a seamless healthcare experience for every user. We aim to bridge
            the gap between patients and healthcare providers, making it easier for you to access the care you need,
            when you need it.
          </p>
        </div>
      </div>

      <h2 className="choose-heading">WHY <span>CHOOSE US</span></h2>
      <div className="why-choose-us">
        <div className="feature-card efficiency">
          <h3 className="feature-title">EFFICIENCY</h3>
          <p className="feature-description">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="feature-card convenience">
          <h3 className="feature-title">CONVENIENCE</h3>
          <p className="feature-description">Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="feature-card personalization">
          <h3 className="feature-title">PERSONALIZATION</h3>
          <p className="feature-description">Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/prescripto-logo.png" alt="Prescripto Logo" className="footer-logo" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
          </div>
          <div className="footer-section company-info">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section contact-info">
            <h3>GET IN TOUCH</h3>
            <p>+0-000-000-000</p>
            <p>greatstackdev@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;