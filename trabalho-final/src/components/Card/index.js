import { useHistory } from "react-router-dom";
import { Card as CardContainer, CardBody, CardItem, CardTitle } from "./styles";

const Card = ({ nome, preco, imagem, id }) => {
  const history = useHistory();
  return (
    <CardContainer onClick={() => history.push(`/Produto/${id}`)}>
      <CardBody>
        <CardTitle>{nome}</CardTitle>
        <CardItem>
          {preco}
          <img src={imagem} alt="Imagem" width="170px" height="170px" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
