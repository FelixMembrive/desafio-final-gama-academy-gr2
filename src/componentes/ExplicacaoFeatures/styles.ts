import styled from "styled-components";
import background from "../../assets/imagens/servicosTechDelas/background.png";

export const Wrapper = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  background-image: url(${background});
  background-repeat: no-repeat;
  @media only screen and (max-width: 375px) {
    width: 375px;}
    @media only screen and (max-width: 390px) {
    width: 390px;}
    @media only screen and (max-width: 425px) {
    width: 425px;}
    @media only screen and (max-width: 768px) {
    width: 768px;}
    @media only screen and (max-width: 1024px) {
    width: 768px;}
    @media only screen and (max-width: 1440px) {
    width: 768px;}
    @media only screen and (max-width: 2560px) {
    width: 2560px;}
`;

export const Title = styled.h2`
  margin: 30px auto 30px 2.5em;
  @media only screen and (max-width: 768px) {
    margin: 30px auto 30px 1em;
    text-align: start;
  }
`;
