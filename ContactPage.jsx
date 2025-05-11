import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPageContinuation = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src="/prescripto-logo.png" alt="Prescripto Logo" className="footer-logo" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className="footer-section company-info">
                    <h3>COMPANY</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li> {/* Updated to use Link for About */}
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
                <p>© 2024 Greatstack.dev — All Rights Reserved.</p>
            </div>
        </footer>
    );
};

const ContactPage = () => {
    return (
        <>
            <header className="App-header">
                <div className="logo"><h1>Prescripto</h1></div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li> {/* Updated to use Link for Home */}
                        <li><a href="#all-doctors">All Doctors</a></li>
                        <li><Link to="/about">About</Link></li> {/* Updated to use Link for About */}
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="#admin-panel">Admin Panel</a></li>
                    </ul>
                </nav>
                <button className="create-account">
                    Create account
                </button>
            </header>
            <div className="contact-page-container">
                <div className="contact-page-content">
                    <img src="/contact_image.png" alt="Contact Us" className="contact-page-image" />
                    <div className="contact-page-details">
                        <div className="office-info">
                            <h3>OUR OFFICE</h3>
                            <p>00000 Willms Station</p>
                            <p>Suite 000, Washington, USA</p>
                            <p>Tel: (000) 000-0000</p>
                            <p>Email: greatstackdev@gmail.com</p>
                        </div>
                        <div className="careers-info">
                            <h3>CAREERS AT PRESCRIPTO</h3>
                            <p>Learn more about our teams and job openings.</p>
                            <button className="explore-jobs-button">Explore Jobs</button>
                        </div>
                    </div>
                </div>
            </div>
            <ContactPageContinuation />
        </>
    );
};

export default ContactPage;