import SignIn from "@/components/auth/SignIn";
import { StatusBar } from "expo-status-bar";
export default function LoginScreen() {
  return (
    <>
      <SignIn />
      <StatusBar style="auto" />
    </>
  );
}
