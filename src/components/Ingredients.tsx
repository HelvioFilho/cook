import { ScrollView } from "react-native";
import { Ingredient } from "./Ingredient";
import { useState } from "react";

export function Ingredients() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      setSelected((state) => state.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexWrap: "wrap",
        flexDirection: "row",
        paddingBottom: 200,
        gap: 12,
      }}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 40 }).map((_, index) => (
        <Ingredient
          key={index}
          name="Maça"
          image=""
          selected={selected.includes(String(index))}
          onPress={() => handleToggleSelected(String(index))}
        />
      ))}
    </ScrollView>
  );
}
