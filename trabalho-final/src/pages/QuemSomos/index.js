import React from "react";
import { IMG } from "../../components/Header/style";
import { Container, ImagemFundo} from "./styles";

export const QuemSomos = () => {
    return(
        <div>
        <Container >
            <p>Fundado no dia 13 de junho de 2022 pelos sócios Matheus Farah, Breno Magrani, Gustavo Azevedo e Rafael Neiva, o Cordeirinho Delivery surgiu para revolucionar o delivery de bebida. Em apenas algumas semanas, o aplicativo já conta com cardápios de 650 restaurantes em Petrópolis e no Rio de Janeiro.
A companhia, subsidiária da Just Eat e Movile, disponibiliza aos usuários do aplicativo cardápios, preços e formas de pagamento de milhares de estabelecimentos, simplificando o pedido de comida, que é feito totalmente online. Além disso, o aplicativo trabalha com geolocalização, permitindo o mapeamento dos restaurantes mais próximos ao endereço de entrega.
A missão do Cordeirinho Delivery é ser a maior e melhor plataforma de delivery da América Latina, dando ao consumidor mais opções e agilidade na hora de pedir bebida. Entre seus valores estão a facilidade, privacidade e respeito com os usuários e parceiros.
Atualmente, a empresa conta com mais de 2 milhões de usuários ativos e é responsável por cerca de 3 milhões de pedidos ao mês. Para isso, a companhia emprega 700 colaboradores no Brasil e, aproximadamente, 150 entre México, Colômbia e Argentina.</p>
<ImagemFundo src="https://images-ext-1.discordapp.net/external/j43EiHjYmvMLJU7n5mHShA6Q84zCm1krMNzoyrpgFdY/https/beefpoint-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/Cordeiro-Chique-1024x1024.png?width=671&height=671" />
        </Container>
        </div>
        
    );
}