import React from 'react';
import './Footer.css'; // Importa o CSS específico do rodapé

function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Pet Shop. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;