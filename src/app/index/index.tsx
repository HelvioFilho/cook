import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 p-6">
      <Text className="text-headingXl font-bold leading-[44px] mt-10">
        Escolha {"\n"}
        <Text className="font-regular">os produtos</Text>
      </Text>
      <Text className="font-regular text-bodyMd text-gray-400 mt-3 mb-9">
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>
    </View>
  );
}
