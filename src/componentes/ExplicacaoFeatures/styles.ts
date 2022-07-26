import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 30px auto 30px 2.5em;
  @media only screen and (max-width: 768px) {
    margin: 30px auto 30px 1.7em;
    text-align: start;
  }
`;
