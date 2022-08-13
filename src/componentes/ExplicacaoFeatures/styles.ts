import styled from "styled-components";
import background from "../../assets/imagens/servicosTechDelas/background.png";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-image: url(${background});
  background-repeat: no-repeat;
`;

export const Title = styled.h2`
  margin: 30px auto 30px 2.5em;
  @media only screen and (max-width: 768px) {
    margin: 30px auto 20px 20px;
    text-align: start;
  }
`;
