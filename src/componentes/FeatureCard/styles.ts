import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 408px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    max-width: 300px;
    margin-left: 16px;
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
