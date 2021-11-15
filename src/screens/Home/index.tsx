import React, { useState } from "react";
import { FlatList } from "react-native";

import { Container, Header, Category, Content } from "./styles";

import Profile from "../../components/Profile";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import Appointment from "../../components/Appointment";
import ListDivider from "../../components/ListDivider";

export default function Home() {
  const [category, setCategory] = useState<string>("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06/2021 as 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10.",
    },

    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: false,
      },
      category: "3",
      date: "22/06/2021 as 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10.",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd activeOpacity={0.8} />
      </Header>

      <Category>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <Content>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointment data={item} />}
            style={{ marginTop: 24, marginLeft: 24 }}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ListDivider}
          />
        </Content>
      </Category>
    </Container>
  );
}
