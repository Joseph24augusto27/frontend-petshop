import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const stores = [
    {
      id: 1,
      name: 'Vila Guilherme',
      address: 'Av. Guilherme, 1.730 – Vila Guilherme, São Paulo – SP',
      phone: '(11) 2901-2233',
      whatsapp: '5511981180289',
      map: 'https://www.google.com/maps/embed?pb=!1m18!...' // coloque o embed do Google Maps da loja
    },
    {
      id: 2,
      name: 'Santa Teresinha',
      address: 'Alameda Afonso Schmidt, 580 – Santa Teresinha, São Paulo – SP',
      phone: '(11) 2645-0026',
      whatsapp: '5511981180890',
      map: 'https://www.google.com/maps/embed?pb=!1m18!...'
    }
  ];

  return (
    <section className="contact-section" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="contact-title">Fale Conosco</h2>

      <div className="contact-grid">
        {stores.map((store) => (
          <div key={store.id} className="contact-card glass-card">
            <iframe
              src={store.map}
              title={`Mapa ${store.name}`}
              loading="lazy"
              className="map-frame"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="contact-info">
              <h3>{store.name}</h3>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>{store.address}</span>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <span>{store.phone}</span>
              </div>

              <a
                className="whatsapp-button"
                href={`https://wa.me/${store.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="whatsapp-icon" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
