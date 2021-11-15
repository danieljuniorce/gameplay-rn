import React from "react";
import { SvgProps } from "react-native-svg";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Gradient,
  Content,
  CheckedContent,
  TitleContent,
} from "./styles";
import { theme } from "../../global/theme";

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export default function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <Container {...rest}>
      <Gradient colors={[secondary50, secondary70]}>
        <Content style={{ opacity: checked ? 1 : 0.4 }}>
          <CheckedContent checked={checked} />
          <Icon width={48} height={48} />
          <TitleContent>{title}</TitleContent>
        </Content>
      </Gradient>
    </Container>
  );
}
