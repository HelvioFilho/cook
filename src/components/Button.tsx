import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = {
  title: string;
};

export function Button({
  title,
  ...rest
}: ButtonProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className={`
        h-12
        w-full
        bg-green-600
        rounded-md 
        items-center 
        justify-center 
      `}
      activeOpacity={0.7}
      {...rest}
    >
      <Text
        className="
          text-white
          font-medium
          text-bodySm
        "
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
