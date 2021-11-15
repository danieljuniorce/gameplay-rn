import React from "react";

import { Container, Img } from "./styles";
import { theme } from "../../global/theme";

type Props = {
  urlImage: string;
};

export default function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <Container colors={[secondary50, secondary70]}>
      <Img source={{ uri: urlImage }} />
    </Container>
  );
}
