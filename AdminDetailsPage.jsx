import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDetailsPage.css";

const AdminDetailsPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome To Admin Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Sidebar Section */}
      <aside className="sidebar">
        <div className="logo">
          <h2>Medsync</h2>
          <span className="admin-badge">Admin</span>
        </div>
        <nav className="menu">
          <ul>
            <li onClick={() => handleNavigation("/admin-dashboard")}>
              <i className="icon">🏠</i> Dashboard
            </li>
            <li onClick={() => handleNavigation("/admin-appointments")}>
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
    </div>
  );
};

export default AdminDetailsPage;