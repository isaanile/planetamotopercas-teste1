import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  );
}

export default Navbar;