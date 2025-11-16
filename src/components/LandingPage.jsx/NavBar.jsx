import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '20px' }}>
          <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        </li>
        <li>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
