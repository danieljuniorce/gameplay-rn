import styled from "styled-components/native";

import DiscordImg from "../../assets/discord.png";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background: ${theme.colors.primary};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  height: 56px;
  width: 56px;
  border-right-width: 1px;
  border-color: ${theme.colors.line};

  justify-content: center;
  align-items: center;
`;

export const Img = styled.Image.attrs({ source: DiscordImg })`
  width: 24px;
  height: 18px;
`;

export const Name = styled.Text`
  flex: 1;
  color: ${theme.colors.heading};
  text-align: center;
`;
