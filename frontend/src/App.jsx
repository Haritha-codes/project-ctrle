import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all your page components
import Home from './pages/Home';
import Client from './pages/Client';
import About from './pages/About';

import Navbar from './components/navbar'; // Your navbar component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
