// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import { useState } from "react";
import api from "../../services/api";

const Usuario = () => {
 
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [dataNascimento, setData] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('')

  const handleSubmit = async () =>{
    try{
      const response = await api.post('users/cliente',{nome: nome, email: email, senha: senha, dataNascimento: dataNascimento, tipoUsuario: 'Cliente', 
      logradouro: logradouro, bairro: bairro, cidade: cidade, uf: uf, cep: cep, telefone: telefone})
      alert(`${response.data.nome} Cadastrado com Sucesso!`)
      console.log(response.data)
    }catch(error){
      console.log(error)
    }
  }

  const listarUsuario = async () => {
    try{
      const response = await api.get("users",{});

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

return(
           
  <div className="app-container">
      <div class="container">
        <div class="form">
            <form action="#" id="cadForm">
                <div class="form-header">
                    <div className="title">
                        <h1>Cadastre-se</h1>
                    </div>
                </div>

                <div class="input-group continue-button">
                    <div class="input-box">
                        <label for="name">Nome</label>
                        <input type="text" placeholder="Digite seu nome" required onChange={(e)=>setNome(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required onChange={(e)=>setSenha(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="local">Endereço</label>
                        <input id="local" type="text" name="local" placeholder="Digite seu endereço" required onChange={(e)=>setLogradouro(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="bairro">Bairro</label>
                        <input id="bairro" type="text" name="bairro" placeholder="Digite seu bairro" required onChange={(e)=>setBairro(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="cidade">Cidade</label>
                        <input id="cidade" type="text" name="cidade" placeholder="Digite sua cidade" required onChange={(e)=>setCidade(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="uf">Estado</label>
                        <input id="uf" type="text" name="uf" placeholder="Coloque seu estado" required onChange={(e)=>setUf(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="cep">CEP</label>
                        <input id="cep" type="text" name="cep" placeholder="Coloque seu CEP" required onChange={(e)=>setCep(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="tel">Telefone</label>
                        <input id="tel" type="text" name="tel" placeholder="Coloque seu Telefone" required onChange={(e)=>setTelefone(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <label for="date">Data</label>
                        <input id="date" type="date" name="date" placeholder="Digite a data de nascimento" required onChange={(e)=>setData(e.target.value)}/>
                    </div>
                    <button onClick={handleSubmit} className="button">cadastrar-se</button>
                    <div className="login">
                      <p>Ja tem cadastro? <b>Logar-se</b></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>

)

}

export default Usuario;