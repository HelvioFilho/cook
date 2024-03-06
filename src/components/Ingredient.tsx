import { Image, Pressable, Text } from "react-native";

export function Ingredient() {
  return (
    <Pressable
      className="
        border-gray-200
        border-2
        rounded-full
        px-4
        h-11
        items-center
        flex-row
        gap-6
      "
    >
      <Image className="w-5 h-5" source={require("@/assets/emoji/apple.png")} />
      <Text
        className="
          font-medium
          text-bodySm
        "
      >
        Maça
      </Text>
    </Pressable>
  );
}
