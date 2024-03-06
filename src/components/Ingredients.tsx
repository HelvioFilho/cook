import { ScrollView } from "react-native";
import { Ingredient } from "./Ingredient";

export function Ingredients() {
  return (
    <ScrollView
      horizontal
      className="h-14 max-h-14"
      contentContainerStyle={{
        gap: 12,
        paddingHorizontal: 32,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <Ingredient />
      <Ingredient />
      <Ingredient />
      <Ingredient />
    </ScrollView>
  );
}
