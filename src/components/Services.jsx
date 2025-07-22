import React from 'react';
import './Services.css'; // Importa o CSS para estilizar os cards

function Services() {
  // Array de objetos para armazenar os detalhes de cada serviço
  // Ajuste os 'imageSrc' para os nomes exatos dos seus arquivos de imagem na pasta 'public/images/'
  const serviceList = [
    {
      id: 1,
      imageSrc: '/images/B&C-interior.webp', // Exemplo: verifique o nome do seu arquivo
      title: 'Banho e Tosa',
      description: 'Cuidado completo para a higiene e beleza do seu pet, com produtos de alta qualidade e profissionais experientes.',
      aosDelay: '100',
    },
    {
      id: 2,
      imageSrc: '/images/B&C-Frente-Dia.webp', // Exemplo: verifique o nome do seu arquivo
      title: 'Consultas Veterinárias',
      description: 'Atendimento clínico com veterinários qualificados para garantir a saúde e o bem-estar do seu animal, incluindo vacinação e exames.',
      aosDelay: '200',
    },

    {
      id: 4,
      imageSrc: '/images/B&C-interior.webp', // Exemplo: verifique o nome do seu arquivo
      title: 'Pet Shop Completo',
      description: 'Variedade de rações, petiscos, brinquedos, acessórios e produtos de higiene das melhores marcas.',
      aosDelay: '400',
    },
  ];

  return (
    <div className="page-container" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="services-title" data-aos="fade-down" data-aos-duration="1000">Nossos Serviços para Seu Melhor Amigo</h2>
      <p className="services-intro" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        Oferecemos uma gama completa de serviços para garantir a saúde, felicidade e bem-estar do seu pet.
      </p>

      <div className="services-grid">
        {serviceList.map(service => (
          <div
            key={service.id}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={service.aosDelay}
            data-aos-duration="800"
          >
            {/* Aqui usamos a tag img com o caminho da imagem do objeto service */}
            <div className="service-icon">
              <img src={service.imageSrc} alt={service.title} className="service-image-icon" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;