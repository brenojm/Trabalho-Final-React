
import React, { useContext, useEffect, useInsertionEffect, useState } from "react";
import { InputTelefone, InputCpf, Botao } from "../../components";
import "../../App.css";
import { Content, Fundo } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { DataContext } from "../../providers/auth";

export const Cadastro = () => {
  const history = useHistory();

  const [dados, setDados] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    dataNascimento: "",
    usuario: {
      email: "",
      senha: "",
      username: ""
    }
  });

  const [usuarioNovo, setUsuarioNovo] = useState({
    email: "",
    senha: "",
    username: ""
  });

  const [email, setEmail] = useState();

  const { token } = useContext(DataContext);

  const cadastrar = () => {
    if (!dados) {

      return;
    } else {
      const getData = async () => {
        
        
        setDados({ ...dados,  usuario : {email : usuarioNovo.email,
                                        senha : usuarioNovo.senha,
                                        username : usuarioNovo.username}  })
        
          
        

        
        
        const response = await api.post(`cliente`, dados);

      };

      getData();
      // history.push("/");
    }
  }

  return (
    <Fundo>
      <div className="container">

        <Content>

          <label>Nome:</label>
          <input type="text" value={dados.nome}
            onChange={(e) => setDados({ ...dados, nome: e.target.value })} />
          <label>Cpf:</label>
          <InputCpf value={dados.cpf}
            onChange={(e) => setDados({ ...dados, cpf: e.target.value.replace(/\D+/g, '') })} />
          <label>Telefone:</label>
          <InputTelefone value={dados.telefone}
            onChange={(e) => setDados({ ...dados, telefone: e.target.value.replace(/\D+/g, '') })} />
          <label>Data de Nascimento:</label>
          <input type="date" value={dados.dataNascimento}
            onChange={(e) => setDados({ ...dados, dataNascimento: e.target.value })} />

          <label>Email:</label>
          <input type="email" value={usuarioNovo.email}
            onChange={(e) => setUsuarioNovo({ ...usuarioNovo,  email : e.target.value })} />
          <label>Senha:</label>
          <input type="password" value={usuarioNovo.senha}
            onChange={(e) => setUsuarioNovo({ ...usuarioNovo, senha: e.target.value })} />
          <label>Nome de Usuário:</label>
          <input type="text" value={usuarioNovo.username}
            onChange={(e) => setUsuarioNovo({ ...usuarioNovo, username: e.target.value })} />
          <Botao nome="Cadastro" onClick={() => cadastrar()} />

        </Content>

      </div>
    </Fundo>
  );
};
