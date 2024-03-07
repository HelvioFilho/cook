import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import { Loading } from "@/components/Loading";
import { Recipe } from "@/components/Recipe";
import { Ingredients } from "@/components/ingredients";

import { services } from "@/services";

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

  const { back, navigate } = useRouter();
  const params = useLocalSearchParams<{ ingredients: string }>();
  const ingredientsId = params.ingredients.split(",");

  function handleBack() {
    back();
  }

  function handleNavigate(id: string) {
    navigate("/recipe/" + id);
  }

  useEffect(() => {
    services.recipes
      .findByIngredientsIds(ingredientsId)
      .then((response) => setRecipes(response))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    services.ingredients
      .findByIds(ingredientsId)
      .then((response) => setIngredients(response))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View className="px-8 pt-15 mb-3">
        <MaterialIcons name="arrow-back" size={32} onPress={handleBack} />
        <Text className="font-bold text-headingMd mt-5">Ingredientes</Text>
      </View>

      <Ingredients ingredients={ingredients} />

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Recipe recipe={item} onPress={() => handleNavigate(item.id)} />
        )}
        className="p-8"
        contentContainerStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
        ListEmptyComponent={() => (
          <Text className="text-gray-400 font-regular text-bodyMd">
            Nenhuma receita encontrada. Escolha outros ingredientes.
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
