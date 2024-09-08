import Login from "@/components/auth/Login";
import { StatusBar } from "expo-status-bar";
export default function LoginScreen() {
  return (
    <>
      <Login />
      <StatusBar style="auto" />
    </>
  );
}
