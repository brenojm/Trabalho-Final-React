import React, { useContext, useEffect, useState } from "react";
import { Container, Content, Texto} from "./styles";
import { Botao } from "../../components";
import { InputTelefone, InputCpf } from "../../components";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom'
import api from "../../services/api";
import { DataContext } from "../../providers/auth";




export const Produto = (props) => {
  const { id } = useParams()
  const { token } = useContext(DataContext);
  const { carrinho, handleAddCarrinho } = useContext(DataContext);
  

     const [produto, setProduto] = useState([]);
     

     const fetchprodutos = async () => {
       const { data } = await api.get(`produto/${id}`, { headers: { Authorization: token } });
       const products = data
       setProduto(products);
     };

     const addProduto = (produto, quantidade) => {
      
      handleAddCarrinho(produto, 15);
     }
     function teste() {

     }
  useEffect(()=> {
      fetchprodutos();
      // const produtoRecebido = produtos.find((p) => p.id === id );
      
  })
  const history = useHistory
  
  return (
      <Container>
      <div className="container">

        <Content>

          <h1>{produto.nome}</h1>
          <img src={produto.url} alt="Imagem" width="170px" height="170px" />
          <Texto>{produto.descricao}</Texto>
          <Texto>{`R$${produto.preco}`}</Texto>

          <Botao nome="Adicionar ao Carrinho" onClick={() => teste()}/>

        </Content>

      </div>
      </Container>
  );
};
