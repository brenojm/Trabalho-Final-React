import React from "react";
import { BotaoStyle } from "./styles";

const Botao = ({nome, onClick}) => {
  
  return <BotaoStyle onClick={onClick}>{nome}</BotaoStyle>;
};

export default Botao;