import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './pages/Login';
import DoctorLogin from './components/DoctorLogin';
import PatientLogin from './components/PatientLogin';
import DoctorRegister from './components/DoctorRegister';
import PatientRegister from './components/PatientRegister';
import DoctorData from './components/DoctorData';
import PatientData from './components/PatientData';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/patient-login" element={<PatientLogin />} />
          <Route path="/doctor-register" element={<DoctorRegister />} />
          <Route path="/patient-register" element={<PatientRegister />} />
          <Route path="/Doctordata" element={<DoctorData />} />
          <Route path="/patientdata" element={<PatientData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
