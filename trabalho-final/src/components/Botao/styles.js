import styled from "styled-components";

export const BotaoStyle = styled.button`
  background-color: black !important;
  border-radius: 10px !important;
  font-family: Verdana !important;
  font-style: Italic !important;
  margin: 20px 10px !important;
  color: white !important;

  &:hover {
    border-radius: 0px 10px 0px 10px;
    box-shadow: 1px 0px 5px 5px orange inset, 0px 1px 5px 3px white,
      0px -1px 5px white, -1px 0px 5px red inset;

    background-color: red !important;
    color: yellow !important;
  }
`;
