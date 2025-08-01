import React, { useEffect } from 'react'; // Importe useEffect
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos'; // Importe AOS
import 'aos/dist/aos.css'; // Importe o CSS do AOS
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';

import './App.css'; // Mantenha a importação do seu App.css original

function Home() {
  return (
    <div className="home-container"> {/* Adicionei uma classe para estilização */}
     <section className="hero-section" data-aos="fade-up" data-aos-duration="1500">
  <img src="public/images/jack-face.jpg" alt="Pets felizes" className="hero-image" />
  <div className="hero-content">
    <h1 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
      Seu Melhor Amigo Merece o Melhor Cuidado!
    </h1>
    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
      <Link to="/services" className="hero-button primary">Nossos Serviços</Link>
      <Link to="/contact" className="hero-button secondary">Fale Conosco</Link>
    </div>
  </div>
</section>

      {/* Você pode adicionar outras seções aqui futuramente, como "Sobre Nós", "Depoimentos", etc. */}
      {/* Por enquanto, vamos manter este espaço. */}
      <section className="info-section">
        <h2 data-aos="fade-up" data-aos-duration="1000">Cuidado Completo para o Seu Pet</h2>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Desde banho e tosa a consultas veterinárias, garantimos que seu pet receba o carinho e a atenção que merece.
        </p>
      </section>
    </div>
  );
}
function App() {
  // Inicializa AOS quando o componente App é montado
  useEffect(() => {
    AOS.init({
      // offset: 200, // offset (in px) from the original trigger point
      // delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - default
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation
    });
    AOS.refresh(); // Atualiza AOS se o conteúdo mudar dinamicamente (útil em Single Page Apps)
  }, []); // O array vazio garante que rode apenas uma vez

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} /> {/* <-- Linha corrigida AQUI */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 Pet Shop. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;