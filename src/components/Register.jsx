import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Mantenha a importação do seu CSS

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
        setName('');
        setEmail('');
        setPassword('');
        // Opcional: Redirecionar para a página de login após sucesso
        // setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage(data.message || 'Erro no cadastro. Tente novamente.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      setMessage('Não foi possível conectar ao servidor. Verifique sua conexão.');
      setIsSuccess(false);
    }
  };

  return (
    // Adicione data-aos ao container principal
    <div className="register-container" data-aos="zoom-in" data-aos-duration="800">
      <h2 data-aos="fade-down" data-aos-duration="800">Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group" data-aos="fade-right" data-aos-delay="100">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group" data-aos="fade-right" data-aos-delay="200">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group" data-aos="fade-right" data-aos-delay="300">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button" data-aos="fade-up" data-aos-delay="400">Cadastrar</button>
      </form>
      {message && (
        <p className={`message ${isSuccess ? 'success' : 'error'}`} data-aos="fade-up">
          {message}
        </p>
      )}
    </div>
  );
}

export default Register;