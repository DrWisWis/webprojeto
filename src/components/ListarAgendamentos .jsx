import React, { useEffect, useState } from 'react';
import api from './../services/api';

const ListarAgendamentos = () => {
  const [agendamento, setAgendamento] = useState([]);

  useEffect(() => {
    // Função para buscar os agendamentos da API
    const fetchAgendamento = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await api.get('funcionarios/agendamentos', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAgendamento(response.data);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
    };

    fetchAgendamento();
  }, []);

  return (
    <div>
      <h2>Agendamentos</h2>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Serviço</th>
          </tr>
        </thead>
        <tbody>
          {agendamento.length > 0 ? (
            agendamento.map((agendamento) => (
              <tr key={agendamento.id}>
                <td>{agendamento.cliente ? agendamento.cliente.nome : 'Cliente não encontrado'}</td>
                <td>{agendamento.dataAgendamento}</td>
                <td>{agendamento.horarioAgendamento}</td>
                <td>{agendamento.descricaoAgendamento}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum agendamento encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListarAgendamentos;