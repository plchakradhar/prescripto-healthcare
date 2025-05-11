import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import "./admin.css"; // Reuse admin styles

function Doctor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctorData = { email, password };

    // Check or create the doctor
    axios
      .post("http://localhost:8080/doctor/check", doctorData)
      .then((response) => {
        const result = response.data;

        if (result.exists && result.passwordMatch) {
          alert("Welcome back, Doctor!");
          navigate("/doctor-details");
        } else if (result.exists && !result.passwordMatch) {
          alert("Incorrect password. Try again.");
        } else if (!result.exists) {
          alert("New doctor account created!");
          navigate("/doctor-details");
        }
      })
      .catch((error) => {
        console.error("Error verifying or creating doctor:", error);
        alert("An error occurred while verifying or creating the doctor.");
      });
  };

  return (
    <div className="admin-page">
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Doctor Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="doctor@example.com"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="doctor-login">
            Admin Login? <a href="/admin">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Doctor;