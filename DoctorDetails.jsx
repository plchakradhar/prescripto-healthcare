import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorDetails.css';
import doctor1 from '/doc1.png';
import doctor2 from '/doc2.png';
import doctor3 from '/doc3.png';
import doctor4 from '/doc4.png';
import doctor5 from '/doc5.png';
import doctor6 from '/doc6.png';
import doctor7 from '/doc7.png';
import doctor8 from '/doc8.png';
import doctor9 from '/doc9.png';
import doctor10 from '/doc10.png';

const doctorsData = [
  { id: 1, name: 'Dr. Richard James', specialty: 'General physician', experience: '4 Years', fee: '$50', about: 'Dr. James has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', image: doctor1 },
  { id: 2, name: 'Dr. Emily Larson', specialty: 'Gynecologist', experience: '6 Years', fee: '$60', about: 'Dr. Larson specializes in women’s health and provides exceptional care for her patients.', image: doctor2 },
  { id: 3, name: 'Dr. Sarah Patel', specialty: 'Dermatologist', experience: '5 Years', fee: '$55', about: 'Dr. Patel is an expert in treating skin conditions and improving skin health.', image: doctor3 },
  { id: 4, name: 'Dr. Christopher Lee', specialty: 'Pediatricians', experience: '8 Years', fee: '$70', about: 'Dr. Lee is dedicated to providing excellent care for children.', image: doctor4 },
  { id: 5, name: 'Dr. Jennifer Garcia', specialty: 'Neurologist', experience: '10 Years', fee: '$80', about: 'Dr. Garcia specializes in treating neurological disorders.', image: doctor5 },
  { id: 6, name: 'Dr. Andrew Williams', specialty: 'Gastroenterologist', experience: '7 Years', fee: '$65', about: 'Dr. Williams focuses on digestive system health.', image: doctor6 },
  { id: 7, name: 'Dr. Christopher Davis', specialty: 'General physician', experience: '3 Years', fee: '$45', about: 'Dr. Davis provides comprehensive primary care.', image: doctor7 },
  { id: 8, name: 'Dr. Timothy White', specialty: 'Gynecologist', experience: '9 Years', fee: '$75', about: 'Dr. White is known for his expertise in gynecology.', image: doctor8 },
  { id: 9, name: 'Dr. Ava Mitchell', specialty: 'Dermatologist', experience: '6 Years', fee: '$60', about: 'Dr. Mitchell is passionate about improving skin health.', image: doctor9 },
  { id: 10, name: 'Dr. Jeffrey King', specialty: 'Pediatricians', experience: '5 Years', fee: '$50', about: 'Dr. King provides exceptional care for children.', image: doctor10 },
];

function DoctorDetails() {
  const { id } = useParams();
  const doctor = doctorsData.find((d) => d.id === parseInt(id));
  const navigate = useNavigate();

  const [activeDay, setActiveDay] = useState(null);
  const [activeTime, setActiveTime] = useState(null);

  const days = [
    { day: 'SAT', date: '10' },
    { day: 'SUN', date: '11' },
    { day: 'MON', date: '12' },
    { day: 'TUE', date: '13' },
    { day: 'WED', date: '14' },
    { day: 'THU', date: '15' },
    { day: 'FRI', date: '16' },
  ];

  const times = [
    '10:30 am',
    '12:00 pm',
    '12:30 pm',
    '01:00 pm',
    '01:30 pm',
    '02:00 pm',
    '02:30 pm',
    '03:00 pm',
  ];

  const handleDayClick = (day) => {
    setActiveDay(day);
    setActiveTime(null);
  };

  const handleTimeClick = (time) => {
    if (activeDay) {
      setActiveTime(time);
    }
  };

  const handleBookAppointment = () => {
    if (doctor && activeDay && activeTime) {
      navigate('/payment', {
        state: {
          doctor,
          appointmentDay: activeDay,
          appointmentTime: activeTime,
        },
      });
    }
  };

  if (!doctor) {
    return <div className="error-message">Doctor not found</div>;
  }

  return (
    <div className="doctor-profile-container">
      <div className="doctor-header">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-details">
          <h2 className="doctor-name">
            {doctor.name} <span className="verified-badge">✓</span>
          </h2>
          <p className="doctor-specialty">
            {doctor.specialty} <span className="experience">{doctor.experience}</span>
          </p>

          <div className="about-doctor">
            <h3 className="about-title">About</h3>
            <p className="about-text">{doctor.about}</p>
          </div>

          <p className="appointment-fee">
            Appointment fee: <span className="fee">{doctor.fee}</span>
          </p>
        </div>
      </div>

      <div className="booking-section">
        <h3 className="booking-title">Booking slots</h3>
        <div className="slots-container">
          {days.map(({ day, date }) => (
            <div
              key={day}
              className={`slot ${activeDay === day ? 'active' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              <span className="day">{day}</span>
              <span className="date">{date}</span>
            </div>
          ))}
        </div>
        <div className="timings-container">
          {times.map((time) => (
            <button
              key={time}
              className={`timing ${activeTime === time ? 'active' : ''}`}
              onClick={() => handleTimeClick(time)}
              disabled={!activeDay}
            >
              {time}
            </button>
          ))}
        </div>
        <button
          className="book-appointment-button"
          disabled={!activeDay || !activeTime}
          onClick={handleBookAppointment}
        >
          Book an appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorDetails;
