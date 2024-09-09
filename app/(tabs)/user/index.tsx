import UserScreen from "@/components/user/UserScreen";
import { StatusBar } from "expo-status-bar";

export default function UserTab() {
  return (
    <>
      <UserScreen />
      <StatusBar style="auto" />
    </>
  );
}
