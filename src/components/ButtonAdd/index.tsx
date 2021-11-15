import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container } from "./styles";
import { theme } from "../../global/theme";

export default function ButtonAdd({ ...rest }: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color={theme.colors.heading}
      />
    </Container>
  );
}
