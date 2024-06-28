// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import VideoUpload from './pages/VideoUpload'; // Import VideoUpload component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/upload" element={<VideoUpload />} /> {/* Route for VideoUpload */}
      </Routes>
    </Router>
  );
}

export default App;
