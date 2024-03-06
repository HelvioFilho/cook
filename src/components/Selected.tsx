import { Text, View } from "react-native";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/theme/colors";

type SelectedProps = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};
export function Selected({ quantity, onClear, onSearch }: SelectedProps) {
  return (
    <Animated.View
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
      className="
        absolute
        bottom-6
        w-full
        self-center
        p-6
        rounded-3xl
        bg-black
      "
    >
      <View className="flex-row justify-between items-center mb-8">
        <Text className="text-white text-bodySm font-regular">
          {quantity} ingredientes selecionados
        </Text>

        <MaterialIcons
          name="close"
          size={24}
          color={colors.gray[400]}
          onPress={onClear}
        />
      </View>
    </Animated.View>
  );
}
