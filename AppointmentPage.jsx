  import React, { useState } from 'react';
  import './AppointmentPage.css';
  import { useNavigate } from 'react-router-dom';

  function AppointmentPage() {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedSymptom, setSelectedSymptom] = useState('');

    const navigate = useNavigate();

    const symptoms = [
      "Fever", "Cold", "Cough", "Body Pain", "Menstrual Issues", "Pregnancy",
      "Hormonal Imbalance", "Skin Rash", "Acne", "Hair Loss", "Child Fever",
      "Vaccination", "Growth Issues", "Headache", "Seizures", "Memory Loss",
      "Stomach Pain", "Indigestion", "Liver Issues"
    ];

    const handleSpecialityClick = (speciality) => {
      if (selectedState && selectedDistrict && selectedCity) {
        navigate('/doctors', {
          state: { state: selectedState, district: selectedDistrict, city: selectedCity, speciality }
        });
      } else {
        alert('Please select State, District, and City before proceeding.');
      }
    };

    const handleSubmit = async () => {
      if (selectedState && selectedDistrict && selectedCity && selectedSymptom) {
        const requestData = {
          state: selectedState,
          district: selectedDistrict,
          city: selectedCity,
          symptom: selectedSymptom,
        };

        try {
          const response = await fetch('http://localhost:8080/api/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData),
          });

          if (response.ok) {
            alert('Appointment data saved successfully!');
            navigate('/doctors', { state: requestData });
          } else {
            const errorMessage = await response.text();
            console.error('Failed to store appointment data:', errorMessage);
            alert(`Failed: ${errorMessage}`);
          }
        } catch (error) {
          console.error('Error during submission:', error);
          alert('Something went wrong. Please try again.');
        }
      } else {
        alert('Please fill in all the details before searching.');
      }
    };

    return (
      <div>
        <header className="App-header">
          <div className="logo"><h1>Prescripto</h1></div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a onClick={() => navigate('/doctors')}>All Doctors</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#admin-panel">Admin Panel</a></li>
            </ul>
          </nav>
        </header>

        <div className="appointment-container">
          <h1>BOOK N MEET A DOCTOR!</h1>
          <p>India's best online appointment scheduling platform</p>

          <div className="search-fields">
            <select onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="TamilNadu">TamilNadu</option>
              <option value="Kerala">Kerala</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
            <select onChange={(e) => setSelectedDistrict(e.target.value)}>
              <option value="">District</option>
              <option value="Kadapa">Kadapa</option>
              <option value="Nellore">Nellore</option>
              <option value="Tirupati">Tirupati</option>
              <option value="Kurnool">Kurnool</option>
              <option value="Nandhyal">Nandhyal</option>
              <option value="Vijayawada">Vijayawada</option>
            </select>
            <select onChange={(e) => setSelectedCity(e.target.value)}>
              <option value="">City</option>
              <option value="Kadapa">Kadapa</option>
              <option value="Proddatur">Proddatur</option>
              <option value="Jammalamadugu">Jammalamadugu</option>
              <option value="Chagalamarri">Chagalamarri</option>
            </select>
            <select onChange={(e) => setSelectedSymptom(e.target.value)}>
              <option value="">Symptoms</option>
              {symptoms.map((symptom, index) => (
                <option key={index} value={symptom}>{symptom}</option>
              ))}
            </select>
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
          <section className="speciality-section">
            <h2>Find by Speciality</h2>
            <p>Browse through our list of specialists.</p>
            <div className="speciality-icons">
              {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((name, index) => (
                <div key={index} className="speciality" onClick={() => handleSpecialityClick(name)} style={{ cursor: 'pointer' }}>
                  <img src={`./doctor${index + 1}.jpg`} alt={name} />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </section>
        <section className="top-doctors-section">
          <h2>Top Doctors to Book</h2>
          <p>Explore popular doctors with high ratings.</p>
          <div className="doctor-cards">
            {[{ name: "Dr. Richard James", spec: "General physician", img: "doctor1.jpeg" },
              { name: "Dr. Emily Larson", spec: "Gynecologist", img: "doctor2.jpg" },
              { name: "Dr. Sarah Patel", spec: "Dermatologist", img: "doctor3.jpg" },
              { name: "Dr. Christopher Lee", spec: "Pediatricians", img: "doctor4.jpg" },
              { name: "Dr. Jennifer Garcia", spec: "Neurologist", img: "doctor5.jpg" },
              { name: "Dr. Andrew Williams", spec: "Gastroenterologist", img: "doctor6.jpg" }].map((doc, i) => (
              <div key={i} className="doctor-card">
                <img src={doc.img} alt={doc.name} />
                <p className="availability">● Available</p>
                <h3>{doc.name}</h3>
                <p>{doc.spec}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  export default AppointmentPage;
