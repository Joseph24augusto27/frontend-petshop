import React, { useState } from 'react';
import { faHome, faHandshake, faBox, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: '/', name: 'Home', icon: faHome },
    { path: '/services', name: 'Serviços', icon: faHandshake },
    { path: '/products', name: 'Produtos', icon: faBox },
    { path: '/contact', name: 'Contato', icon: faEnvelope },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img
          src="/images/Imagem do WhatsApp de 2025-07-16 à(s) 18.24.09_c7a75d00.jpg"
          alt="Logo Pet Shop"
          className="navbar-logo"
        />

        {/* Botão menu mobile */}
        <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? 'active-link' : ''}`}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={link.icon} className="nav-icon" />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
