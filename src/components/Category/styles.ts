import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity``;

export const Gradient = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  border-radius: 8px;
  margin-right: 8px;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100px;
  height: 116px;
  border-radius: 8px;
  padding-top: 7px;
  padding-bottom: 7px;

  background-color: ${theme.colors.secondary40};

  justify-content: space-between;
  align-items: center;
`;

type CheckedContentProps = {
  checked: boolean;
};
export const CheckedContent = styled.View<CheckedContentProps>`
  width: ${(props) => (props.checked ? "10px" : "12px")};
  height: ${(props) => (props.checked ? "10px" : "12px")};
  background-color: ${(props) =>
    props.checked ? theme.colors.primary : theme.colors.secondary100};
  align-self: flex-end;
  margin-right: 7px;
  border-color: ${(props) =>
    props.checked ? "transparent" : theme.colors.secondary50};
  border-width: ${(props) => (props.checked ? "0px" : "2px")};
  border-radius: 3px;
`;

export const TitleContent = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 15px;

  color: ${theme.colors.heading};
`;
