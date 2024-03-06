import { colors } from "@/theme/colors";
import { ActivityIndicator } from "react-native";

export function Loading() {
  return <ActivityIndicator className="flex-1" color={colors.green[600]} />;
}
