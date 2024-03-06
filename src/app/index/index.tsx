import { Ingredient } from "@/components/Ingredient";
import { Selected } from "@/components/Selected";
import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      setSelected((state) => state.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  }

  function handleClearSelected() {
    Alert.alert("Limpar seleção", "Tem certeza que deseja limpar a seleção?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => setSelected([]),
      },
    ]);
  }

  return (
    <View className="flex-1 p-6">
      <Text className="text-headingXl font-bold leading-[44px] mt-10">
        Escolha {"\n"}
        <Text className="font-regular">os produtos</Text>
      </Text>
      <Text className="font-regular text-bodyMd text-gray-400 mt-3 mb-9">
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>
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

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={() => {}}
        />
      )}
    </View>
  );
}
