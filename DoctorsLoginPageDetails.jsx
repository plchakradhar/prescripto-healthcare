import React from "react";
import "./adminAppointments.css"; // Reuse styles from App.css or use a separate CSS if needed

const DoctorsLoginPageDetails = () => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
          <h2>Medsync</h2>
          <span className="admin-badge">Doctor</span>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <i className="icon">🏠</i> Dashboard
            </li>
            <li>
              <i className="icon">📅</i> Appointments
            </li>
            <li>
              <i className="icon">❌</i> Cancel Appointment
            </li>
            <li>
              <i className="icon" style={{ color: "green" }}>✔️</i> Approved Appointment
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <button className="logout-button">Logout</button>
        </header>
        <div className="content-area">
          {/* Add your main content here */}
        </div>
      </main>
    </div>
  );
};

export default DoctorsLoginPageDetails;
