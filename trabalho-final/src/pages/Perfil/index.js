import React, { useContext } from "react";
import { Container, Detalhes } from "./styles";
import { Botao } from "../../components";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../providers/auth";
import jwt_decode from "jwt-decode";

export const Perfil = () => {

    const history = useHistory();
    const { token } = useContext(DataContext);
    const decoded = jwt_decode(token);
    const email = decoded.sub?.split("-")[1]
    const role = decoded.sub?.split("-")[2]
    
    function SaudacaoFuncionario() {
        return (
            <div>
                <h1>Perfil Funcionario</h1>
                <h1>-----------------</h1>
                <h1>{email}</h1>
                <Botao nome="Cadastrar Produto" onClick={() => history.push("/CadastroProduto")} />
                <Botao nome="Cadastrar Categoria" onClick={() => history.push("/CadastroCategoria")} />
            </div>

        );
    }

    function SaudacaoCliente() {
        return (
            <div>
                <h1>Perfil Cliente</h1>
                <h1>-----------------</h1>
                <h1>{email}</h1>
            </div>

        );
    }


    function descobrir() {
        if (role === "c") {
            return <SaudacaoCliente />
        } else {
            return <SaudacaoFuncionario />
        }
    }



    return (
        
        <Container>
            {descobrir()}
            <Botao nome="Cadastrar Endereço" onClick={() => history.push("/Endereco")} />

        </Container>
        
    );
}