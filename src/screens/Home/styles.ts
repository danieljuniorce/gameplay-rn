import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 26}px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 42px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.View``;

export const Content = styled.View`
  margin-top: 38px;
`;

export const List = styled.FlatList``;
