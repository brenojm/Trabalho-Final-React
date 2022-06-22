import { Card } from "../../components";
// import { data } from "../../data/produtos";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fundo } from "./styles";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../providers/auth";
import api from "../../services/api";


export const Home = () => {
  const { token } = useContext(DataContext);
  

     const [produtos, setProdutos] = useState([]);

     const fetchprodutos = async () => {
       const { data } = await api.get(`produto`, { headers: { Authorization: token } });
       const products = data
       setProdutos(products);
     };
    useEffect(() => {


      fetchprodutos()
      
    }, [fetchprodutos]);



  return (
    <Fundo>
      <div className="container">
        <div className="row">
          {produtos.map((produto) => (
            <div className="col" key={produto.id}>
              <Card
                id={produto.id}
                nome={produto.nome}
                preco={`R$${produto.preco}`}
                imagem={produto.url}
              />
            </div>
          ))}
        </div>
      </div>
    </Fundo>
  );
};

