import React from "react";
import "./adminAppointments.css";

const adminAppointments = () => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
          <h2>Medsync</h2>
          <span className="admin-badge">Admin</span>
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
              <i className="icon">➕</i> Add Doctor
            </li>
            <li>
              <i className="icon">👨‍⚕️</i> Doctors List
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <button className="logout-button">Logout</button>
        </header>
        <div className="content-area">
          <h1>All Appointments</h1>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Date & Time</th>
                <th>Doctor</th>
                <th>Fees</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Add dynamic rows here */}
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>30</td>
                <td>2025-05-10 10:00 AM</td>
                <td>Dr. Smith</td>
                <td>$100</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default adminAppointments;