import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './patientPaymentPage.css';

function patientPaymentPage() {
  const location = useLocation();
  const { doctor, appointmentDay, appointmentTime } = location.state || {};
  const fee = doctor?.fee;  // Fee dynamically passed from DoctorDetails

  const [isCancelled, setIsCancelled] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    upi: '',
    debitCard: '',
    creditCard: '',
  });
  const [appointmentStatus, setAppointmentStatus] = useState('');

  const handleCancelAppointment = () => {
    setIsCancelled(true);
    setAppointmentStatus('Appointment has been cancelled.');
    setIsPaying(false);
    setPaymentSuccess(false);
  };

  const handleApproveAppointment = () => {
    setAppointmentStatus('Appointment has been approved by doctor.');
  };

  const handlePayOnline = () => {
    setIsPaying(true);
    setPaymentSuccess(false);
    setPaymentError('');
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = async () => {
  const { upi, debitCard, creditCard } = paymentDetails;
  if (!upi.trim() && !debitCard.trim() && !creditCard.trim()) {
    setPaymentError('Please enter payment details.');
    setPaymentSuccess(false);
  } else {
    try {
      const response = await fetch('http://localhost:8080/api/patient-appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          doctorName: doctor.name,
          fee: fee,
          action: 'Approved',
          appointmentDate: appointmentDay?.date,
          appointmentTime: appointmentTime,
        }),
      });
      if (response.ok) {
        setPaymentSuccess(true);
        setPaymentError('');
        setIsPaying(false);
      } else {
        setPaymentError('Failed to save appointment.');
      }
    } catch (error) {
      setPaymentError('An error occurred.');
    }
  }
};


  if (!doctor) {
    return <div className="error-message">Doctor information not available.</div>;
  }

  return (
    <div className="app-container">
      <h1 className="app-title">My Appointments</h1>

      {!isPaying && (
        <div className="appointment-card">
          <div className="doctor-info">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-details">
              <h2 className="doctor-name">{doctor.name}</h2>
              <p className="doctor-speciality">{doctor.specialty}</p>
              <div className="address-info">
                <strong className="info-label">Address:</strong>
                <p className="address-line">24 Main Street</p>
                <p className="address-line">10 Clause Road</p>
              </div>
              <div className="datetime-info">
                <strong className="info-label">Date & Time:</strong>
                <p className="datetime-value">
                  {appointmentDay?.day} {appointmentDay?.date}, 2025 | {appointmentTime}
                </p>
              </div>
            </div>
          </div>

          <div className="appointment-fee">
            <strong className="fee-label">Appointment Fee:</strong>
            <p className="fee-value">{fee}</p>
          </div>

          <div className="appointment-actions">
            {paymentSuccess && (
              <div className="success-message">Payment successful!</div>
            )}
            {isCancelled && (
              <div className="cancelled-message">{appointmentStatus}</div>
            )}
            {appointmentStatus && !isCancelled && (
              <div className="status-message">{appointmentStatus}</div>
            )}
            {appointmentStatus === 'Appointment has been approved by doctor.' && !paymentSuccess && !isCancelled && (
              <>
                <button className="pay-online-button" onClick={handlePayOnline}>
                  Pay Online
                </button>
              </>
            )}
            {appointmentStatus !== 'Appointment has been approved by doctor.' && !isCancelled && (
              <>
                <button
                  className="cancel-appointment-button"
                  onClick={handleCancelAppointment}
                >
                  Cancel Appointment
                </button>
                <button
                  className="approve-appointment-button"
                  onClick={handleApproveAppointment}
                >
                  Approve Appointment (Doctor)
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {isPaying && (
        <div className="payment-page">
          <h2>Online Payment</h2>
          <div className="payment-options">
            <label>
              UPI:
              <input
                type="text"
                name="upi"
                placeholder="Enter UPI ID"
                value={paymentDetails.upi}
                onChange={handlePaymentChange}
              />
            </label>
            <label>
              Debit Card:
              <input
                type="text"
                name="debitCard"
                placeholder="Enter Debit Card Number"
                value={paymentDetails.debitCard}
                onChange={handlePaymentChange}
              />
            </label>
            <label>
              Credit Card:
              <input
                type="text"
                name="creditCard"
                placeholder="Enter Credit Card Number"
                value={paymentDetails.creditCard}
                onChange={handlePaymentChange}
              />
            </label>
          </div>
          <button className="submit-payment-button" onClick={handlePaymentSubmit}>
            Submit Payment
          </button>
          {paymentError && <div className="error-message">{paymentError}</div>}
        </div>
      )}
    </div>
  );
}

export default patientPaymentPage;
