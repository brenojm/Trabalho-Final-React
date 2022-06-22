import React, { useEffect, useInsertionEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../providers/auth";
import { Link, useHistory } from "react-router-dom";
import "../../App.css";
import { Botao } from "../../components";
import { LabelError } from "./styles";
import api from "../../services/api";
import jwt_decode from "jwt-decode";




export const Login = () => {
  const history = useHistory();
  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const [usuario, setUsuario] = useState([]);
  const [storeToken, setStoreToken] = useState({});
  const { storeEmail, setStoreEmail } = useState();


  const { token, handleSetToken } = useContext(DataContext);

    const checkLogin = () =>{
      if (dados.email === "" || dados.senha === "") {
        setError("Preencha todos os campos");
        return;
      } else {
        const getData = async () => {
          const response = await api.post(`login`, dados);
          const decoded = jwt_decode(response.headers.authorization);
          handleSetToken(response.headers.authorization);
          
        };

        getData();
        history.push("/Home");
      }
    }

    
    

  return (
    <div className="App">
      <header className="App-header">
        
        <label>Usuário:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={dados.email}
          onChange={(e) => [setDados({...dados, email:e.target.value}), setError("")]}
        />
        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={dados.senha}
          onChange={(e) => [setDados({...dados, senha:e.target.value}), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <p className="Cadastro">
          Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link>
        </p>
        <Botao nome="Login" onClick = {() => checkLogin()}/>
      </header>
    </div>
  );
};


