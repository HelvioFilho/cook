import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type RecipeProps = {
  recipe: {
    name: string;
    image: string;
    minutes: number;
  };
};
export function Recipe({
  recipe,
  ...rest
}: RecipeProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className="flex-1 h-48 rounded-3xl overflow-hidden"
      activeOpacity={0.8}
      {...rest}
    >
      <ImageBackground className="flex-1" source={{ uri: recipe.image }}>
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.5)", "#000"]}
          style={{ flex: 1, padding: 12, justifyContent: "flex-end" }}
        >
          <Text
            className="text-white font-bold text-bodySm"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {recipe.name}
          </Text>

          <Text
            className="text-yellow-500 font-regular text-bodyXs"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {recipe.minutes} minutos
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
