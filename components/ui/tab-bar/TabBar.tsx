import { HomeIcon } from "@/assets/icons/HomeIcon";
import HomeIconFill from "@/assets/icons/HomeIconFill";
import LikedIcon from "@/assets/icons/LikedIcon";
import LikedIconFill from "@/assets/icons/LikedIconFill";
import NotificationIcon from "@/assets/icons/NotificationICon";
import NotificationIconFill from "@/assets/icons/NotificationIconFill";
import OrderIcon from "@/assets/icons/OrderIcon";
import OrderIconFill from "@/assets/icons/OrderIconFill";
import UserOutlineIcon from "@/assets/icons/UserOutlineIcon";
import UserOuntlineIconFill from "@/assets/icons/UserOutlineIconFill";
import {
  HOME_TAB_PATH,
  LIKED_TAB_PATH,
  NOTIFICATION_TAB_PATH,
  ORDER_TAB_PATH,
  USER_TAB_PATH,
} from "@/constants/paths";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";

const iconComponents: {
  [key: string]: { default: JSX.Element; fill: JSX.Element };
} = {
  [HOME_TAB_PATH]: { default: <HomeIcon />, fill: <HomeIconFill /> },
  [ORDER_TAB_PATH]: { default: <OrderIcon />, fill: <OrderIconFill /> },
  [LIKED_TAB_PATH]: { default: <LikedIcon />, fill: <LikedIconFill /> },
  [NOTIFICATION_TAB_PATH]: {
    default: <NotificationIcon />,
    fill: <NotificationIconFill />,
  },
  [USER_TAB_PATH]: {
    default: <UserOutlineIcon />,
    fill: <UserOuntlineIconFill />,
  },
};

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View
      className="flex-row absolute bottom-4 left-2 right-2 h-[65px] items-center justify-between rounded-[12px] bg-white"
      style={{
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        shadowColor: "rgba(13, 10, 44, 0.20)",
        elevation: 20,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className={`flex-1 justify-center items-center relative ${
              isFocused ? "-top-3" : ""
            }`}
          >
            <View
              className={
                isFocused
                  ? "w-[50px] h-[50px] rounded-full bg-primary-500 flex justify-center items-center"
                  : ""
              }
            >
              {isFocused
                ? iconComponents[route.name]?.fill
                : iconComponents[route.name]?.default}
            </View>
            {isFocused && (
              <Text className="text-xs font-[Roboto-Bold] text-primary-500 mt-2">
                {label.toString()}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
