import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const TouchableContainer = styled.TouchableOpacity``;

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 12px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 18px;
  color: ${theme.colors.heading};
`;

export const Category = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 13px;
  color: ${theme.colors.highlight};

  margin-right: 24px;
`;

export const Footer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const Calendar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

type PlayerTextProps = {
  color: boolean;
};

export const PlayerText = styled.Text<PlayerTextProps>`
  margin-left: 7px;
  margin-right: 24px;

  font-family: ${theme.fonts.text500};
  font-size: 13px;
  color: ${(props) => (props.color ? theme.colors.primary : theme.colors.on)};
`;

export const DateTitle = styled.Text`
  margin-left: 7px;

  font-family: ${theme.fonts.text500};
  font-size: 13px;
  color: ${theme.colors.heading};
`;
