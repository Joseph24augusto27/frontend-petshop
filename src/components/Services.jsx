import React from 'react';
import './Services.css';
import { FaBath, FaStethoscope, FaShoppingCart } from 'react-icons/fa';

function Services() {
  const serviceList = [
    {
      id: 1,
      icon: <FaBath />,
      imageSrc: '/images/B&C-interior.webp',
      title: 'Banho e Tosa',
      description: 'Transforme o visual do seu pet com nosso serviço de banho e tosa, utilizando produtos premium e cuidado especial.',
      aosDelay: '100',
    },
    {
      id: 2,
      icon: <FaStethoscope />,
      imageSrc: '/images/B&C-Frente-Dia.webp',
      title: 'Consultas Veterinárias',
      description: 'Profissionais qualificados prontos para cuidar da saúde do seu pet com carinho, exames e vacinas.',
      aosDelay: '200',
    },
    {
      id: 3,
      icon: <FaShoppingCart />,
      imageSrc: '/images/B&C-interior.webp',
      title: 'Pet Shop Completo',
      description: 'Tudo o que seu pet precisa em um só lugar: rações, brinquedos e acessórios de qualidade.',
      aosDelay: '300',
    },
  ];

  return (
    <section className="services-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="services-header">
        <h2 data-aos="fade-down">Serviços para Seu Melhor Amigo</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Cuidamos do seu pet com amor, atenção e os melhores profissionais.
        </p>
      </div>

      <div className="services-container">
        {serviceList.map(service => (
          <div
            key={service.id}
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay={service.aosDelay}
          >
            <div className="card-image">
              <img src={service.imageSrc} alt={service.title} />
              <span className="service-icon">{service.icon}</span>
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-button">Saiba Mais</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
