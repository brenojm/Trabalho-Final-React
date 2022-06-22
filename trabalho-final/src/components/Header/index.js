import { useHistory } from "react-router-dom";
import Cordeirinho from "./imagens/Cordeirinho.png";
import { Botao } from "../../components";
import { HomeStyle, Container, IMG } from "./style";
import { useContext } from "react";
import { DataContext } from "../../providers/auth";

const Header = () => {
  const history = useHistory();

  const { handleSetToken } = useContext(DataContext);
  return (
    <HomeStyle>
      <Container>
        <div>
          <IMG src={Cordeirinho} alt="Cordeirinho" width="60" height="60" />
        </div>
        <div>
          <Botao nome="Home" onClick={() => history.push("/Home")} />
          <Botao
            nome="Quem Somos"
            onClick={() => history.push("/Quem Somos")}
          />
          <Botao nome="Carrinho" onClick={() => history.push("/Carrinho")} />
          <Botao nome="Perfil" onClick={() => history.push("/Perfil")} />
          <Botao nome="Sair" onClick={() => [handleSetToken(""),  history.push("/")] } />
        </div>
      </Container>
    </HomeStyle>
  );
};

export default Header;
