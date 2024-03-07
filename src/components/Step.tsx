import { Text, View } from "react-native";

type StepProps = {
  step: number;
  description: string;
};
export function Step({ step, description }: StepProps) {
  return (
    <View className="flex-1 flex-row items-center gap-5 w-11/12">
      <Text className="font-bold text-bodySm text-black">{step}</Text>
      <Text className="font-regular text-bodySm text-gray-400">
        {description}
      </Text>
    </View>
  );
}
