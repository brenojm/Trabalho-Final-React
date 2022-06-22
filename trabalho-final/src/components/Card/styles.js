import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: 350px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #000;
  padding:  5px 50px;
  border: 1px solid #000;
  color: #000;
  &:hover{
    cursor: pointer;
    zoom: 102%
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const CardItem = styled.div`
  margin: 0;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h5`
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Preco = styled.h6`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 10px 0;
`;
