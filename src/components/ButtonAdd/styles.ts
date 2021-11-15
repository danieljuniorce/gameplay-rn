import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
