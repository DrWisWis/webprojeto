import React from 'react';
import { Link } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import AgendamentoForm from '../../components/AgendamentoForm'; // Formulário de agendamento

function Cliente() {
  return (
    <PrivateRoute>
      <div>
        <h1>Página do Cliente</h1>
        <AgendamentoForm />
      </div>
    </PrivateRoute>
  );
};

export default Cliente;