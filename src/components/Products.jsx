import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Products.css';

function Products() {
  const navigate = useNavigate();

  const productList = [
    {
      id: 1,
      imageSrc: '/images/pexels-rrodriguesim-18764141.jpg',
      name: 'Rações Super Premium',
      description:
        'Nutrição completa e balanceada para cães adultos de todas as raças. Ingredientes de alta qualidade que promovem saúde digestiva, pelagem brilhante e energia vital.',
      aos: 'fade-up',
      aosDelay: '100',
    },
    {
      id: 2,
      imageSrc: '/images/pexels-magda-ehlers-pexels-32520453.jpg',
      name: 'Brinquedos',
      description:
        'Projetado para resistir à mastigação intensa, este brinquedo ajuda na higiene bucal e proporciona horas de diversão.',
      aos: 'flip-left',
      aosDelay: '200',
    },
    {
      id: 3,
      imageSrc: '/images/seresto.jpg',
      name: 'Coleira Antipulgas e Carrapatos',
      description:
        'Proteção eficaz e duradoura contra parasitas externos com tecnologia de liberação gradual.',
      aos: 'zoom-in',
      aosDelay: '300',
    },
    {
      id: 4,
      imageSrc: '/images/hydra.webp',
      name: 'Shampoo Hidratante para Cães e Gatos',
      description:
        'Fórmula suave com pH balanceado que limpa profundamente e hidrata a pelagem.',
      aos: 'fade-up',
      aosDelay: '400',
    },
    {
      id: 5,
      imageSrc: '/images/cama-ortopedica.webp',
      name: 'Cama Ortopédica para Pets',
      description:
        'Conforto e suporte para articulações e coluna, ideal para pets de todas as idades.',
      aos: 'flip-left',
      aosDelay: '500',
    },
    {
      id: 6,
      imageSrc: '/images/biscoito.webp',
      name: 'Petiscos Naturais',
      description:
        'Feitos com ingredientes 100% naturais, perfeitos para recompensar seu pet.',
      aos: 'zoom-in',
      aosDelay: '600',
    },
  ];

  const handleSaberMaisClick = () => navigate('/contact');

  return (
    <section className="products-section" data-aos="fade-up" data-aos-duration="800">
      <div className="products-header">
        <h2 data-aos="fade-down">Variedade de produtos para cães e gatos</h2>
        <p data-aos="fade-up" data-aos-delay="150">
          Uma seleção cuidadosa para a saúde, bem-estar e alegria do seu melhor amigo.
        </p>
      </div>

      <div className="products-grid">
        {productList.map(product => (
          <div
            key={product.id}
            className="product-card"
            data-aos={product.aos}
            data-aos-delay={product.aosDelay}
          >
            <div className="product-image-wrapper">
              <LazyLoadImage
                src={product.imageSrc}
                alt={product.name}
                effect="blur"
                loading="lazy"
              />
            </div>
            <div className="product-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button className="product-btn" onClick={handleSaberMaisClick}>
                Saber Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
