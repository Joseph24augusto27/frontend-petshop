import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe useLocation
import './Navbar.css'; // Certifique-se de que este CSS ainda existe e contém estilos básicos de Navbar.

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook para pegar a rota atual

  // Função para fechar o menu mobile ao clicar em um link
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Links de navegação com suas rotas e nomes
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Serviços' },
    { path: '/products', name: 'Produtos' },
    { path: '/contact', name: 'Contato' },
    { path: '/register', name: 'Cadastro' },
    { path: '/login', name: 'Login' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
          {/* SUBSTITUA O TEXTO "Pet Shop" POR ESTE CÓDIGO DA IMAGEM */}
          <img src="/images/Imagem do WhatsApp de 2025-07-16 à(s) 18.24.09_c7a75d00.jpg" alt="Logo Pet Shop" className="navbar-logo" />
          {/* Se o seu logo tiver texto, você pode colocar um <span> aqui para o texto ao lado do logo se desejar */}

        {/* Botão para o menu mobile */}
        <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            // Ícone de fechar (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Ícone de hambúrguer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Links da navegação (desktop e mobile) */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? 'active-link' : ''}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;