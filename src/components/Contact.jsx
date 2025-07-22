import React from 'react';
import './Page.css'; // Mantenha a importação do seu CSS

function Contact() {
  return (
    <div className="page-container" data-aos="fade-up" data-aos-duration="1000">
      <h2 data-aos="fade-right" data-aos-duration="1000">Fale Conosco</h2>
      <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Estamos prontos para atender você e seu pet. Use os canais abaixo para entrar em contato.</p>

      <div className="contact-info-grid"> {/* Assumindo que você tem essa classe no Page.css ou similar */}
        <div data-aos="fade-right" data-aos-delay="300">
          <h3>Envie uma Mensagem</h3>
          {/* Este é um formulário estático. A lógica de envio será implementada futuramente. */}
          <form className="contact-form">
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu Email" />
            <textarea placeholder="Sua Mensagem" rows="5"></textarea>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </div>
        <div data-aos="fade-left" data-aos-delay="400">
          <h3>Nossos Dados</h3>
          <p><strong>Endereço:</strong> Rua dos Pets Felizes, 123 - Bairro Amigo dos Animais, São Paulo, SP</p>
          <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
          <p><strong>Email:</strong> contato@petshop.com</p>
          <p><strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às 18h | Sábado, das 9h às 13h</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;