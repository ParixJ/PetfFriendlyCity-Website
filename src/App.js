import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<div className="page-content">Stories Page Coming Soon</div>} />
          <Route path="/contact" element={<div className="page-content">Contact Page Coming Soon</div>} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 