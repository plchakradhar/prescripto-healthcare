import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [showWidget, setShowWidget] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // Store user details
  const [showProfile, setShowProfile] = useState(false); // Toggle profile dropdown
  const widgetRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleAccountCreation = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setUserDetails(data); // Store user details
        setShowWidget(false);
        alert('Account created successfully! You can now book an appointment.');
      } else {
        alert('Account creation failed.');
      }
    } catch (error) {
      console.error('Error during account creation:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/accounts/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setUserDetails(data); // Store user details
        setShowWidget(false);
        alert('Login successful!');
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong during login.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserDetails(null);
    alert('You have been logged out.');
  };

  const handleBookAppointment = () => {
    if (isAuthenticated) {
      navigate('/appointment'); // Redirect to AppointmentPage if logged in
    } else {
      setIsLogin(true); // Show login form if not logged in
      setShowWidget(true);
    }
  };

  const handleOrderMedicine = () => {
    if (isAuthenticated) {
      navigate('/Medicine'); // Redirect to Medicine.jsx if logged in
    } else {
      setIsLogin(true); // Show login form if not logged in
      setShowWidget(true);
    }
  };

  useEffect(() => {
    if (showWidget) {
      setFormData({
        fullName: '',
        email: '',
        password: ''
      });
    }
  }, [showWidget, isLogin]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setShowWidget(false);
      }
    };

    if (showWidget) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showWidget]);

  return (
    <div>
      <header className="App-header">
        <div className="logo"><h1>Prescripto</h1></div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#all-doctors">All Doctors</a></li>
            <li><a href="/about">About</a></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="/admin">Admin Panel</a></li>
          </ul>
        </nav>
        {isAuthenticated ? (
          <div
            className="profile-section"
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
          >
            <img
              src="/images/user-icon.png"
              alt="User Icon"
              className="profile-icon"
            />
            {showProfile && userDetails && (
              <div className="profile-dropdown">
                <p><strong>Name:</strong> {userDetails.fullName}</p>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="create-account" onClick={() => {
            setIsLogin(false);
            setShowWidget(true);
          }}>
            Create account
          </button>
        )}
      </header>

      <main>
        <section className="bluescreen">
          <div className="bluescreen-content">
            <h1>Book Appointment With Trusted Doctors</h1>
            <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <button className="book-appointment" onClick={handleBookAppointment}>
              Book appointment
            </button>
            <button className="order-medicine" onClick={handleOrderMedicine}>
              Order Medicine
            </button>
          </div>
          <div className="bluescreen-images">
            <img src="doctor1.jpeg" alt="Doctor 1" />
            <img src="doctor2.jpeg" alt="Doctor 2" />
            <img src="doctor3.jpeg" alt="Doctor 3" />
          </div>
        </section>

        <section className="speciality-section">
          <h2>Find by Speciality</h2>
          <p>Browse through our list of specialists.</p>
          <div className="speciality-icons">
            {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((name, index) => (
              <div key={index} className="speciality">
                <img src={`doctor${index + 1}.jpg`} alt={name} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="top-doctors-section">
          <h2>Top Doctors to Book</h2>
          <p>Explore popular doctors with high ratings.</p>
          <div className="doctor-cards">
            {[{ name: "Dr. Richard James", spec: "General physician", img: "doctor1.jpeg" },
              { name: "Dr. Emily Larson", spec: "Gynecologist", img: "doctor2.jpg" },
              { name: "Dr. Sarah Patel", spec: "Dermatologist", img: "doctor3.jpg" },
              { name: "Dr. Christopher Lee", spec: "Pediatricians", img: "doctor4.jpg" },
              { name: "Dr. Jennifer Garcia", spec: "Neurologist", img: "doctor5.jpg" },
              { name: "Dr. Andrew Williams", spec: "Gastroenterologist", img: "doctor6.jpg" }].map((doc, i) => (
              <div key={i} className="doctor-card">
                <img src={doc.img} alt={doc.name} />
                <p className="availability">● Available</p>
                <h3>{doc.name}</h3>
                <p>{doc.spec}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showWidget && (
        <div className="create-account-widget" ref={widgetRef}>
          <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
          <p>{isLogin ? 'Please login to continue' : 'Please sign up to book an appointment'}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              isLogin ? handleLogin() : handleAccountCreation();
            }}
          >
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>
          <p className="toggle-link">
            {isLogin ? 'New user?' : 'Already have an account?'}{' '}
            <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Create Account' : 'Login'}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;