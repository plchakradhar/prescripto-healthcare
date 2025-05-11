import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

function admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminData = { email, password };

    try {
      // Step 1: Check if admin already exists and password matches
      const checkResponse = await fetch("http://localhost:8080/admin/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminData),
      });

      if (checkResponse.ok) {
        const result = await checkResponse.json();

        if (result.exists && result.passwordMatch) {
          alert("Welcome back, Admin!");
          navigate("/admin-details");
        } else if (result.exists && !result.passwordMatch) {
          alert("Incorrect password. Try again.");
        } else {
          // Step 2: Create new admin
          const saveResponse = await fetch("http://localhost:8080/admin/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adminData),
          });

          if (saveResponse.ok) {
            alert("New admin created successfully!");
            navigate("/admin-details");
          } else {
            alert("Failed to create new admin.");
          }
        }
      } else {
        alert("Failed to verify admin.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="admin-page">
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="admin@example.com"
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
  Doctor Login? <a href="/doctor-login">Click here</a>
</p>
        </div>
      </div>
    </div>
  );
}

export default admin;
