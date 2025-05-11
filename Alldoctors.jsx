// src/Alldoctors.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Alldoctors.css';

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
  { id: 1, name: 'Dr. Richard James', specialty: 'General physician', image: doctor1 },
  { id: 2, name: 'Dr. Emily Larson', specialty: 'Gynecologist', image: doctor2 },
  { id: 3, name: 'Dr. Sarah Patel', specialty: 'Dermatologist', image: doctor3 },
  { id: 4, name: 'Dr. Christopher Lee', specialty: 'Pediatricians', image: doctor4 },
  { id: 5, name: 'Dr. Jennifer Garcia', specialty: 'Neurologist', image: doctor5 },
  { id: 6, name: 'Dr. Andrew Williams', specialty: 'Gastroenterologist', image: doctor6 },
  { id: 7, name: 'Dr. Christopher Davis', specialty: 'General physician', image: doctor7 },
  { id: 8, name: 'Dr. Timothy White', specialty: 'Gynecologist', image: doctor8 },
  { id: 9, name: 'Dr. Ava Mitchell', specialty: 'Dermatologist', image: doctor9 },
  { id: 10, name: 'Dr. Jeffrey King', specialty: 'Pediatricians', image: doctor10 },
];

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/doctors/${doctor.id}`);
  };

  return (
    <div className="doctor-card" onClick={handleClick}>
      <div className="doctor-image-container">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      </div>
      <div className="doctor-info">
        <div className="availability">
          <span className="available-dot"></span> Available
        </div>
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialty">{doctor.specialty}</p>
      </div>
    </div>
  );
}

function Alldoctors() {
  return (
    <div className="doctors-grid">
      {doctorsData.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

export { Alldoctors, doctorsData };
