import React from 'react';
import './Products.css'; // Vamos estilizar isso

function Products() {
  // Array de objetos para armazenar os detalhes de cada produto para exibição
  const productList = [
    {
      id: 1,
      imageSrc: '/images/racoes-premium.webp', // Imagem de ração
      name: 'Ração Premium para Cães',
      description: 'Nutrição completa e balanceada para cães adultos de todas as raças. Ingredientes de alta qualidade que promovem saúde digestiva, pelagem brilhante e energia vital. Disponível em diversos tamanhos de embalagem.',
      aosDelay: '100',
    },
    {
      id: 2,
      imageSrc: '/images/brinquedo-mordedor.webp', // Imagem de brinquedo
      name: 'Brinquedo Mordedor Resistente',
      description: 'Projetado para resistir à mastigação intensa, este brinquedo ajuda na higiene bucal e proporciona horas de diversão. Ideal para cães com alta energia e necessidade de roer.',
      aosDelay: '200',
    },
    {
      id: 3,
      imageSrc: '/images/coleira-anti-pulgas.webp', // Imagem de coleira
      name: 'Coleira Antipulgas e Carrapatos',
      description: 'Proteção eficaz e duradoura contra parasitas externos. Sua tecnologia de liberação gradual garante segurança por meses, mantendo seu pet saudável e livre de infestações.',
      aosDelay: '300',
    },
    {
      id: 4,
      imageSrc: '/images/shampoo-hidratante.webp', // Imagem de shampoo
      name: 'Shampoo Hidratante para Cães e Gatos',
      description: 'Fórmula suave com pH balanceado que limpa profundamente e hidrata a pelagem, deixando-a macia, cheirosa e com brilho natural. Perfeito para pets com pele sensível.',
      aosDelay: '400',
    },
    {
      id: 5,
      imageSrc: '/images/cama-ortopedica.webp', // Imagem de cama
      name: 'Cama Ortopédica para Pets',
      description: 'Conforto e suporte para articulações e coluna, ideal para pets de todas as idades, especialmente os mais velhos ou com problemas de mobilidade. Feita com materiais de alta durabilidade.',
      aosDelay: '500',
    },
    {
      id: 6,
      imageSrc: '/images/petiscos-naturais.webp', // Imagem de petiscos
      name: 'Petiscos Naturais de Frango',
      description: 'Deliciosos e saudáveis, feitos com ingredientes 100% naturais e frango de verdade. Perfeitos para recompensar seu pet durante o treinamento ou como um agrado nutritivo.',
      aosDelay: '600',
    },
  ];

  return (
    <div className="page-container" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="products-title" data-aos="fade-down" data-aos-duration="1000">Descubra Nossos Produtos de Qualidade</h2>
      <p className="products-intro" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        Uma seleção cuidadosa de produtos essenciais para a saúde, bem-estar e alegria do seu melhor amigo.
      </p>

      <div className="products-grid">
        {productList.map(product => (
          <div
            key={product.id}
            className="product-card"
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            data-aos-duration="800"
          >
            <div className="product-image-container">
              <img src={product.imageSrc} alt={product.name} className="product-image" />
            </div>
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            {/* Opcional: Você pode manter o preço se quiser, ou removê-lo completamente */}
            {/* <p className="product-price">Consulte na loja</p> */}
            {/* REMOVIDO: <button className="buy-button">Comprar</button> */}
            {/* Você pode adicionar um botão para "Saber Mais" ou "Entrar em Contato" */}
            {/* <button className="info-button">Saber Mais</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;