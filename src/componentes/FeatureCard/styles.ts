import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 408px!important;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    max-width: 300px!important;
    margin-left: 16px!important;
  }
  @media only screen and (min-width: 769px) {
    margin-left: 32px!important;
  }
`;

export const Iframe = styled.iframe``;
export const Title = styled.h5`
  margin-top: 30px;
`;
export const Description = styled.p`
  text-align: start;
`;

export const Img = styled.img`
  margin: 0;
`;
