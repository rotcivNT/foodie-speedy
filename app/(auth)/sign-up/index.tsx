import SignUp from "@/components/auth/SignUp";
import { StatusBar } from "expo-status-bar";

export default function RegisterScreen() {
  return (
    <>
      <SignUp />
      <StatusBar style="auto" />
    </>
  );
}
