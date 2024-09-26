import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import './listausuario.css';

import api from "../../services/api";

const DataList = () => {

 const[data, setData] = useState([]);
 const[loading, setLoading] = useState(true);
 const[error, setError] = useState(null);

 useEffect(() =>{
  api.get("users").then(response =>{
    console.log(response.data)
    setData(response.data);
    setLoading(false);
  })
  .catch(error => {
    setError(error.message);
    setLoading(false);
  });

},[]);

 if (loading) return <p>Carregando...</p>;
 if (error) return <p>Erro: {error}</p>;

 return(
  <ul>
     {data.map(item =>(
      <li key={item.id}>
         <li> ID{item.id} - {item.nome} {item.sobrenome} </li> {item.email} | {item.senha} | {item.dataNascimento}
        <button onClick={''}>Atualizar</button>
      </li>
    ))}
  </ul>
 );
};

export default DataList;