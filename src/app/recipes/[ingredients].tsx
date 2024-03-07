import { Loading } from "@/components/Loading";
import { Ingredients } from "@/components/ingredients";
import { services } from "@/services";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { back } = useRouter();
  const params = useLocalSearchParams<{ ingredients: string }>();
  const ingredientsId = params.ingredients.split(",");

  function handleBack() {
    back();
  }

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
    </SafeAreaView>
  );
}
