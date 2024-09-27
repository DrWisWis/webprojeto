import React, { useState } from 'react';
import  api  from "./../services/api";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AgendamentoForm = () => {
  const [dataAgendamento, setDataAgendamento] = useState('');
  const [horarioAgendamento, setHorarioAgendamento] = useState('');
  const [descricaoAgendamento, setDescricaoAgendamento] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    navigate('/login'); // Redireciona para a página de login
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Recuperar o token do localStorage
      const token = localStorage.getItem('token')
      const decodedToken = jwtDecode(token)
      const userId = decodedToken.id

      // Configurar os dados para enviar ao backend
      const agendamentoData = {
        userId,
        dataAgendamento,
        horarioAgendamento,
        descricaoAgendamento
      };

      // Fazer a requisição ao backend com o token no cabeçalho
      const response = await api.post('/clientes/agendamento', agendamentoData, {
        headers: {
          Authorization: `Bearer ${token}` // Enviando o token no cabeçalho
        }
      });

      console.log('Agendamento realizado:', response.data);
    } catch (error) {
      console.error('Erro ao agendar:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Data:</label>
        <input 
          type="date"
          value={dataAgendamento}
          onChange={(e) => setDataAgendamento(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Hora:</label>
        <input 
          type="time"
          value={horarioAgendamento} 
          onChange={(e) => setHorarioAgendamento(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Serviço:</label>
        <input 
          type="text" 
          value={descricaoAgendamento} 
          onChange={(e) => setDescricaoAgendamento(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Agendar</button>
    </form>
    <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default AgendamentoForm;