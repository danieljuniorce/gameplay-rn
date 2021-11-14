import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Img, Name, IconWrapper } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export default function ButtonIcon({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Img />
      </IconWrapper>
      <Name>{title}</Name>
    </Container>
  );
}
