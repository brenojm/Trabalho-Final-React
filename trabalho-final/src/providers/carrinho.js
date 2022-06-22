import { createContext, useState, useEffect } from "react";

export const estadoContexto = {
  carrinho: []
};

export const DataContext = createContext(null);

export const Contexto = (props) => {
  const [carrinho, setCarrinho] = useState([]);

  const handleSetCarrinho = (valor) => {
    setCarrinho(valor);
  };

  const handleRemoveCarrinho = () => {
    if(localStorage.getItem('carrinho')){
        localStorage.removeItem('carrinho');
    }
    
  }

  const handleAddCarrinho = (produto, quantidade) => setCarrinho([...carrinho, {
    idProduto: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    quantidade: quantidade
  }]);

    
    
  

  useEffect(() => {
    if(localStorage.getItem('carrinho')) {
      setCarrinho(localStorage.getItem('carrinho'));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('carrinho', carrinho);
  }, [carrinho]);

  return (
    <DataContext.Provider value={{ carrinho, handleSetCarrinho, handleRemoveCarrinho, handleAddCarrinho }}>{props.children}</DataContext.Provider>
  );
};