import styled from "styled-components";

export const Goback = styled.span`
  font-weight: 600;
  color: #601c4f;
`;

export const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 20px;
  margin-left: 50px;
`;

export const Toggle = styled.span<{ active: boolean }>`
  background: ${(props) => (props.active ? "#ECE3E9" : "transparent")};
  padding: 10px 12px;
  border-radius: 23px;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  display: flex;
  color: #601c4f;
  margin: 10px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  padding: 10px;
`;

export const ListWrapper = styled.div`
  gap: 10px;
  padding: 10px;
`;
export const MockItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.span``;
