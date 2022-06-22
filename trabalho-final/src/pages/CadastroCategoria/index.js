import React, { useContext, useState } from "react";
import { Container } from "./styles";
import { Botao } from "../../components";
import { useHistory } from "react-router-dom";
import { Content } from "./styles";
import api from "../../services/api";
import { DataContext } from "../../providers/auth";

export const CadastroCategoria = () => {
    const history = useHistory
    const { token } = useContext(DataContext);
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState({
        nome: "",
        descricao: ""
    });



    const cadastrarCategoria = () => {


        const getData = async () => {

        
        const response = await api.post(`categoria`, categoria, { headers: { Authorization: token } });
        };

        getData();
        // history.push("/");


    }





    return (
        <Container>
            <Content>
                <p>Cadastro Categoria:</p>
                <label>Nome:</label>
                <input type="text" value={categoria.nome}
                    onChange={(e) => setCategoria({ ...categoria, nome: e.target.value })} />
                <label>Descrição:</label>
                <input type="text" value={categoria.descricao}
                    onChange={(e) => setCategoria({ ...categoria, descricao: e.target.value })} />
                <Botao nome="Cadastro" onClick={() => cadastrarCategoria()} />

            </Content>
        </Container>
    );
}