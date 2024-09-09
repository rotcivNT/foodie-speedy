import { useState } from "react";
import { TextInput, View } from "react-native";

interface IProps {
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  style?: string;
}

export default function Input({
  icon,
  placeholder,
  value,
  style,
  onChangeText,
}: IProps) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View
      className={`${
        isFocus ? "border-neutral-100" : "border-neutral-50"
      } w-full flex-row items-center border-neutral-100 space-x-2 min-h-[48px] px-4 rounded-[8px] border bg-[rgba(31, 42, 55, 0.05)] ${style}`}
    >
      {icon}
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className="w-full"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
