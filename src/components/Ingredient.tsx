import { Image, Pressable, PressableProps, Text } from "react-native";

export type IngredientProps = {
  name: string;
  image: string;
  selected?: boolean;
};

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientProps & PressableProps) {
  return (
    <Pressable
      className={`
        ${selected ? "border-green-600 bg-green-100" : "border-gray-200"}
        border-2
        rounded-full
        px-4
        h-11
        items-center
        flex-row
        gap-4
      `}
      {...rest}
    >
      <Image className="w-4 h-4" source={require("@/assets/emoji/apple.png")} />
      <Text
        className="
          font-medium
          text-bodySm
        "
      >
        {name}
      </Text>
    </Pressable>
  );
}
