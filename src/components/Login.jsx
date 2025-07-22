import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Mantenha a importação do seu CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setIsSuccess(false);

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setMessage(data.message || 'Erro ao fazer login.');
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
    <div className="login-container" data-aos="zoom-in" data-aos-duration="800">
      <h2 data-aos="fade-down" data-aos-duration="800">Login de Usuário</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group" data-aos="fade-right" data-aos-delay="100">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group" data-aos="fade-right" data-aos-delay="200">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button" data-aos="fade-up" data-aos-delay="300">Entrar</button>
      </form>
      {message && (
        <p className={`message ${isSuccess ? 'success' : 'error'}`} data-aos="fade-up">
          {message}
        </p>
      )}
    </div>
  );
}

export default Login;