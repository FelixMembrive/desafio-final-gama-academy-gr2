import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 408px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const Iframe = styled.iframe``;
export const Title = styled.h5`
  margin-top: 30px;
`;
export const Description = styled.p`
  text-align: start;
`;
export const Placeholder = styled.div`
  position: relative;
  display: flex;
  height: 400px;
  width: 408px;
  background-color: #d9d9d9;
  border-radius: 10px;
  & > button {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;
