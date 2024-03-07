import { ScrollView } from "react-native";
import { services } from "@/services";

import { Ingredient, IngredientProps } from "@/components/Ingredient";

type Props = {
  ingredients: IngredientProps[];
};

export function Ingredients({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      className="h-14 max-h-14"
      contentContainerStyle={{
        paddingHorizontal: 32,
        gap: 12,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
        />
      ))}
    </ScrollView>
  );
}
