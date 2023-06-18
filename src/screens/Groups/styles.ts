import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 32px;
`;
