import React from "react";

import { Container } from "./styles";
import { Categories } from "../../utils/categories";

import Category from "../Category";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export default function CategorySelect({
  categorySelected,
  setCategory,
}: Props) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {Categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
}
