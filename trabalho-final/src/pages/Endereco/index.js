import React, { useContext, useState } from "react";
import { Container } from "./styles";
import { Botao } from "../../components";
import { useHistory } from "react-router-dom";
import { Content } from "./styles";
import api from "../../services/api";
import { DataContext } from "../../providers/auth";

export const Endereco = () => {
    const history = useHistory();
    const { token } = useContext(DataContext);
    const [endereco, setEndereco] = useState({
    cep:"",
    numCasa: "",
    complemento:"",
    idUsuario: 0
    });
    
    const cadastrarEndereco = async () => {
        const { data } = await api.post(`endereco`, endereco, { headers: { Authorization: token } });
    }

    return(
        <Container>
            <Content>
                <p>Cadastro Endereco:</p>
                <label>CEP:</label>
                <input type="text" value={endereco.cep}
                    onChange={(e) => setEndereco({ ...endereco, cep: e.target.value })} />
                <label>Número:</label>
                <input type="text" value={endereco.numCasa}
                    onChange={(e) => setEndereco({ ...endereco, numCasa: e.target.value })} />
                <label>Complemento:</label>
                <input type="text" value={endereco.complemento}
                    onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })} />
                <label>ID Usuário:</label>
                <input type="number" value={endereco.idUsuario}
                    onChange={(e) => setEndereco({ ...endereco, idUsuario: e.target.value })} />
                <Botao nome="Cadastrar" onClick={() => cadastrarEndereco()}/>
                </Content>
            
        </Container>
    );
}