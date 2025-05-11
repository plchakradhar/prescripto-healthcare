import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AppointmentPage from './AppointmentPage'; 
import AboutUs from './aboutUs'; // Import the AboutUs component
import './App.css';
import { Alldoctors } from './Alldoctors'; 
import DoctorDetails from './DoctorDetails'; 
import DoctorsLoginPageDetails from './DoctorsLoginPageDetails';
import PatientPaymentPage from './patientPaymentPage'; 
import Admin from './admin';
import AdminDetailsPage from './AdminDetailsPage'; // Import the AdminDetailsPage component
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component
import AdminAppointments from './adminAppointments'; // Import the AdminAppointments component
import Doctor from './doctor'; // Import the Doctor component
import Medicine from './Medicine';


                
                            

// Import the Alldoctors component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              showWidget={showWidget}
              setShowWidget={setShowWidget}
            />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/about" element={<AboutUs />} /> {/* Add this route */}
        <Route path="/doctors" element={<Alldoctors />} /> 
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/payment" element={<PatientPaymentPage />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/admin-details" element={<AdminDetailsPage />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-appointments" element={<AdminAppointments />} />
           <Route path="/doctor-login" element={<Doctor />} />
           <Route path="/doctor-details" element={<DoctorsLoginPageDetails />} />
           <Route path="/medicine" element={<Medicine />} />
           
      </Routes>
    </Router>
  );
}

export default App;