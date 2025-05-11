import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard. Here you can manage all the system's features and view important statistics.</p>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Total Appointments</h2>
          <p>120</p>
        </div>
        <div className="card">
          <h2>Total Doctors</h2>
          <p>15</p>
        </div>
        <div className="card">
          <h2>Pending Approvals</h2>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;