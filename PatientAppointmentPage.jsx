import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './patientPaymentPage.css';

function PatientAppointmentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctor, appointmentDay, appointmentTime } = location.state || {};
  const fee = doctor?.fee;

  const [isCancelled, setIsCancelled] = useState(false);
  const [appointmentStatus, setAppointmentStatus] = useState('');

  const handleCancelAppointment = () => {
    setIsCancelled(true);
    setAppointmentStatus('Appointment has been cancelled.');
  };

  const handleApproveAppointment = () => {
    setAppointmentStatus('Appointment has been approved by doctor.');
  };

  const goToPaymentPage = () => {
    navigate('/patient-payment', {
      state: {
        doctor,
        appointmentDay,
        appointmentTime,
      },
    });
  };

  if (!doctor) {
    return <div className="error-message">Doctor information not available.</div>;
  }

  return (
    <div className="app-container">
      <h1 className="app-title">My Appointments</h1>
      <div className="appointment-card">
        <div className="doctor-info">
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <div className="doctor-details">
            <h2 className="doctor-name">{doctor.name}</h2>
            <p className="doctor-speciality">{doctor.specialty}</p>
            <div className="address-info">
              <strong>Address:</strong>
              <p>24 Main Street</p>
              <p>10 Clause Road</p>
            </div>
            <div className="datetime-info">
              <strong>Date & Time:</strong>
              <p>{appointmentDay?.day} {appointmentDay?.date}, 2025 | {appointmentTime}</p>
            </div>
          </div>
        </div>
        <div className="appointment-fee">
          <strong>Appointment Fee:</strong>
          <p>{fee}</p>
        </div>
        <div className="appointment-actions">
          {isCancelled && <div className="cancelled-message">{appointmentStatus}</div>}
          {appointmentStatus && !isCancelled && <div className="status-message">{appointmentStatus}</div>}
          {!appointmentStatus && (
            <>
              <button className="cancel-appointment-button" onClick={handleCancelAppointment}>
                Cancel Appointment
              </button>
              <button className="approve-appointment-button" onClick={handleApproveAppointment}>
                Approve Appointment (Doctor)
              </button>
            </>
          )}
          {appointmentStatus === 'Appointment has been approved by doctor.' && (
            <button className="pay-online-button" onClick={goToPaymentPage}>
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientAppointmentPage;
