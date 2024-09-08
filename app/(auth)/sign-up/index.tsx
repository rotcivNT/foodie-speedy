import Register from "@/components/auth/Register";
import { StatusBar } from "expo-status-bar";

export default function RegisterScreen() {
  return (
    <>
      <Register />
      <StatusBar style="auto" />
    </>
  );
}
