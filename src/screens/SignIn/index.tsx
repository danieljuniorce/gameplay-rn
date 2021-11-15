import React from "react";
import { useNavigation } from "@react-navigation/native";

import ButtonIcon from "../../components/ButtonIcon";

import { Container, Img, Content, Title, SubTitle } from "./styles";

export default function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <Img resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se {`\n`} e organize suas {`\n`} jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games favoritos com seus amigos
        </SubTitle>

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.8}
          onPress={handleSignIn}
        />
      </Content>
    </Container>
  );
}
