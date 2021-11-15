import styled from "styled-components/native";

import { theme } from "../../global/theme";

import Illustration from "../../assets/illustration.png";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.Image.attrs({ source: Illustration })`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;

  padding: 0 50px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;
  line-height: 40px;

  text-align: center;
  font-family: ${theme.fonts.title700};
  font-size: 40px;
  color: ${theme.colors.heading};
`;

export const SubTitle = styled.Text`
  line-height: 25px;
  margin-bottom: 64px;

  text-align: center;
  font-family: ${theme.fonts.title500};
  font-size: 16px;
  color: ${theme.colors.heading};
`;
