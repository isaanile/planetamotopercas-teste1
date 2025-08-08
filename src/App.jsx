import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/NavBar.jsx'; // Importe a Navbar
import HomePage from './pages/HomePage/HomePage.jsx';
import AboutPage from './pages/HomePage/AboutPage.jsx'; // Importe a nova página

function App() {
  return (
    <Router>
      <Navbar /> {/* Renderize a Navbar aqui, fora do 'Routes' */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;