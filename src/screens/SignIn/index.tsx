import React from "react";
import { StatusBar } from "react-native";
import ButtonIcon from "../../components/ButtonIcon";

import { Container, Img, Content, Title, SubTitle } from "./styles";

export default function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Img resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se {`\n`} e organize suas {`\n`} jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games favoritos com seus amigos
        </SubTitle>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.8} />
      </Content>
    </Container>
  );
}
