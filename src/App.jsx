import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';

import './App.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section" data-aos="fade-up" data-aos-duration="1500">
        {/* Corrigido: removido "public/" */}
        <img src="/images/jack-face.jpg" alt="Pets felizes" className="hero-image" />
        <div className="hero-content">
          <h1 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            Seu Melhor Amigo Merece o Melhor Cuidado!
          </h1>
          <div
            className="hero-buttons"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <Link to="/services" className="hero-button primary">Nossos Serviços</Link>
            <Link to="/contact" className="hero-button secondary">Fale Conosco</Link>
          </div>
        </div>
      </section>

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);

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
            <Route path="/products" element={<Products />} />
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
