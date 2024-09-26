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

      const decodedToken = jwtDecode(token);
      console.log('Token Decodificado:', decodedToken)
      const { id, nome, tipoUsuario, roles } = decodedToken;

      console.log('ID:', id);
      console.log('Nome:', nome);
      console.log('Tipo de Usuário:', tipoUsuario)
      console.log('roles:', roles);

      if (roles == 'ROLE_FUNCIONARIO') {
        navigate('/funcionario');
      } else if (roles == 'ROLE_CLIENTE') {
        navigate('/cliente');
      } else {
        setError('Tipo de usuário desconhecido.');
      }
    } catch (error) {
      console.error(error);
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