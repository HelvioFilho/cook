import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { Step } from "@/components/Step";
import { Loading } from "@/components/Loading";
import { Ingredients } from "@/components/ingredients";

import { services } from "@/services";

export default function Recipes() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [preparation, setPreparation] = useState<PreparationsResponse[]>([]);

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

  useEffect(() => {
    services.preparation
      .findByRecipeId(id)
      .then((response) => setPreparation(response));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!id || !recipe) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1">
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
      <View className="px-8 pt-8 pb-20">
        <Text className="font-medium text-headingSm mb-4">Modo de preparo</Text>
        <FlatList
          data={preparation}
          renderItem={({ item }) => (
            <Step step={item.step} description={item.description} />
          )}
          contentContainerStyle={{ gap: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
