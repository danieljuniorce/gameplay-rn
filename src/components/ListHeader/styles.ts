import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const SubTitle = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;
