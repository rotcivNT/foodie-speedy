import { TabBar } from "@/components/ui/tab-bar/TabBar";
import {
  HOME_TAB_PATH,
  LIKED_TAB_PATH,
  NOTIFICATION_TAB_PATH,
  ORDER_TAB_PATH,
  USER_TAB_PATH,
} from "@/constants/paths";
import { useAuth } from "@clerk/clerk-expo";
import { router, Tabs } from "expo-router";
import { useEffect } from "react";

export default function TabLayout() {
  const auth = useAuth();
  useEffect(() => {
    if (!auth.isSignedIn) {
      router.push("/(auth)/sign-in");
    }
  }, [auth]);
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name={HOME_TAB_PATH}
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name={ORDER_TAB_PATH}
        options={{
          title: "Orders",
        }}
      />
      <Tabs.Screen
        name={LIKED_TAB_PATH}
        options={{
          title: "Liked",
        }}
      />
      <Tabs.Screen
        name={NOTIFICATION_TAB_PATH}
        options={{
          title: "Notification",
        }}
      />
      <Tabs.Screen
        name={USER_TAB_PATH}
        options={{
          title: "User",
        }}
      />
    </Tabs>
  );
}
