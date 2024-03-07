import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { Loading } from "@/components/Loading";
import { Ingredients } from "@/components/ingredients";

import { services } from "@/services";

export default function Recipes() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  const { id } = useLocalSearchParams<{ id: string }>();
  const { back } = useRouter();

  function handleBack() {
    back();
  }

  useEffect(() => {
    services.recipes
      .show(id)
      .then((response) => setRecipe(response))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    services.ingredients
      .findByRecipeId(id)
      .then((response) => setIngredients(response));
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
      <Image
        className="w-full h-48 bg-gray-300"
        source={{ uri: recipe?.image }}
      />
      <View className="bg-white -mt-6 rounded-t-3xl">
        <View className="p-8">
          <MaterialIcons name="arrow-back" size={32} onPress={handleBack} />
          <Text className="font-bold text-headingMd mt-5">{recipe?.name}</Text>
          <Text className="font-regular text-bodySm text-gray-400">
            {recipe?.minutes} minutos de preparo
          </Text>
        </View>

        <Ingredients ingredients={ingredients} />
      </View>
    </SafeAreaView>
  );
}
