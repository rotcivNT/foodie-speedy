import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";
import ShoppingBagIcon from "@/assets/icons/ShoppingBagIcon";
import { View, Text } from "react-native";

const Header = () => {
  return (
    <View className="mt-12 flex-row justify-between items-center">
      <View>
        <View className="flex-row gap-x-2">
          <Text className="text-neutral-900 text-base">Deliver to</Text>
          <Text className="text-neutral-900 font-[Roboto-Bold] text-base">
            {"->"}
          </Text>
          <Text className="text-neutral-900 font-[Roboto-Bold] text-base">
            Home
          </Text>
        </View>
        <View className="flex-row gap-x-2 items-center">
          <Text className="text-lg font-[Roboto-Medium] text-neutral-200">
            Select Your Location
          </Text>
          <ArrowDownIcon />
        </View>
      </View>
      <View>
        <ShoppingBagIcon />
      </View>
    </View>
  );
};

export default Header;
