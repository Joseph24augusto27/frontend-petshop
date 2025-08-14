import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Bichos e Coisas Pet Shop</h2>
          <p>Rua das Flores, 123 - Centro, São Paulo - SP</p>
          <p>Telefone: (11) 98765-4321 | Email: contato@bichosecoisas.com.br</p>
          <p>Horário: Seg - Sex: 8h - 19h | Sáb: 8h - 14h | Dom: Fechado</p>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com/bichosecoisas" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com/bichosecoisas" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://wa.me/5511987654321" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Bichos e Coisas Pet Shop. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
