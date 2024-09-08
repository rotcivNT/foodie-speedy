import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomCheckboxProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  color?: string;
  size?: number;
  label?: string;
}

const CustomCheckbox = ({
  value,
  onValueChange,
  color = "#FF6F61",
  size = 22,
  label,
}: CustomCheckboxProps) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onValueChange(!value)}
      className="flex-row gap-3 items-center"
    >
      <View
        style={[
          styles.checkbox,
          {
            width: size,
            height: size,
            borderColor: value ? color : "#BABDC1",
            backgroundColor: value ? color : "transparent",
          },
        ]}
      >
        {value && (
          <MaterialIcons name="check" size={size * 0.6} color="white" />
        )}
      </View>
      <Text className="text-base font-[Roboto-Regular] text-neutral-900">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 6,
  },
});

export default CustomCheckbox;
