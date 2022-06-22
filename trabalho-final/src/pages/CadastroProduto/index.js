import React, { useContext, useState } from "react";
import { Container } from "./styles";
import { Botao } from "../../components";
import { useHistory } from "react-router-dom";
import { Content } from "./styles";
import api from "../../services/api";
import { DataContext } from "../../providers/auth";
import { Card } from "../../components";

export const CadastroProduto = () => {
    const history = useHistory();
    const [produto, setProduto] = useState({
        nome: "",
        descricao: "",
        preco: 0,
        quantidadeEstoque: 0,
        dataCadastro: "",
        url: ""
    });
    const [verifica, setVerifica] = useState(false);
    
    const MostrarCard = () => {



        return (
                <Card
                id={produto.id}
                nome={produto.nome}
                preco={`R$${produto.preco}`}
                imagem={produto.url}
              />
        )
    }

    

    return(
        <Container>
            <Content>
                <p>Cadastro Produto:</p>
                <label>Nome:</label>
                <input type="text" value={produto.nome}
                    onChange={(e) => setProduto({ ...produto, nome: e.target.value })} />
                <label>Descrição:</label>
                <input type="text" value={produto.descricao}
                    onChange={(e) => setProduto({ ...produto, descricao: e.target.value })} />
                <label>Preço:</label>
                <input type="text" value={produto.preco}
                    onChange={(e) => setProduto({ ...produto, preco: e.target.value })} />
                <label>Quantidade em Estoque:</label>
                <input type="text" value={produto.quantidadeEstoque}
                    onChange={(e) => setProduto({ ...produto, quantidadeEstoque: e.target.value })} />
                <label>Data de Cadastro:</label>
                <input type="date" value={produto.dataCadastro}
                    onChange={(e) => setProduto({ ...produto, dataCadastro: e.target.value })} />
                <label>Url da Imagem:</label>
                <input type="text" value={produto.url}
                    onChange={(e) => setProduto({ ...produto, url: e.target.value })} />
                <Botao nome="Cadastro" onClick={() => setVerifica(true)} />
                </Content>
                
                {verifica ? <MostrarCard/> : <></>}
        </Container>
    );
}