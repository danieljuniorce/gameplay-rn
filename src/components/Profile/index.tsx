import React from "react";

import { Container, Header, User, Greeting, Username, Message } from "./styles";
import Avatar from "../Avatar";

export default function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://avatars.githubusercontent.com/u/33224319?v=4" />
      <Header>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>Daniel Souza</Username>
        </User>

        <Message>Hoje é dia de vitória</Message>
      </Header>
    </Container>
  );
}
