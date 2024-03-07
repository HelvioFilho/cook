import { Ingredient } from "@/components/Ingredient";
import { Loading } from "@/components/Loading";
import { Selected } from "@/components/Selected";
import { services } from "@/services";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  const { navigate } = router;

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

  function handleSearch() {
    navigate("/recipes");
  }

  useEffect(() => {
    services.ingredients
      .findAll()
      .then(setIngredients)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 24,
      }}
    >
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
        {ingredients.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            name={ingredient.name}
            image={`${services.storage.imagePath}/${ingredient.image}`}
            selected={selected.includes(ingredient.id)}
            onPress={() => handleToggleSelected(ingredient.id)}
          />
        ))}
      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </SafeAreaView>
  );
}
