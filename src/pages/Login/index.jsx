import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email, senha);

      localStorage.setItem('token', token)

      const decodedToken = jwtDecode(token);
      console.log('Token Decodificado:', decodedToken)
      const { roles } = decodedToken;

      console.log('roles:', roles);

      if (roles == 'ROLE_FUNCIONARIO') {
        navigate('/funcionario');
      } else if (roles == 'ROLE_CLIENTE') {
        navigate('/cliente');
      } else {
        setError('Tipo de usuário desconhecido.');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input 
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;