import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import {
  TouchableContainer,
  Container,
  Content,
  Header,
  Title,
  Category,
  PlayerInfo,
  PlayerText,
  Footer,
  Calendar,
  DateTitle,
} from "./styles";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import GuildIcon from "../GuildIcon";
import { Categories } from "../../utils/categories";
import { theme } from "../../global/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: null | string;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = TouchableOpacityProps & {
  data: AppointmentProps;
};

export default function Appointment({ data, ...rest }: Props) {
  const [categorySelect] = Categories.filter(
    (item) => item.id === data.category
  );

  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <TouchableContainer {...rest}>
      <Container>
        <GuildIcon />

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{categorySelect.title}</Category>
          </Header>

          <Footer>
            <Calendar>
              <CalendarSvg />

              <DateTitle>{data.date}</DateTitle>
            </Calendar>

            <PlayerInfo>
              <PlayerSvg fill={owner ? primary : on} />

              <PlayerText color={owner}>
                {owner ? "Anfitrião" : "Visitante"}
              </PlayerText>
            </PlayerInfo>
          </Footer>
        </Content>
      </Container>
    </TouchableContainer>
  );
}
