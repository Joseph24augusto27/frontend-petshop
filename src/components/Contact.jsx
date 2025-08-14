import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const whatsappNumber = '5511981180890'; // formato internacional

  return (
    <section className="contact-section" data-aos="fade-up" data-aos-duration="1000">
      <h2>Fale Conosco</h2>

      <div className="contact-card">
        {/* Endereços */}
        <div className="contact-details">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Av. Guilherme, 1.730 – Vila Guilherme, São Paulo – SP</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>(11) 2901-2233</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Alameda Afonso Schmidt, 580 – Santa Teresinha, São Paulo – SP</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>(11) 2645-0026</span>
          </div>
        </div>

        {/* Botão WhatsApp */}
        <a
          className="whatsapp-button"
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contact;
