import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();
  const auth = useAuth();
  useEffect(() => {
    if (!auth.isSignedIn) {
      router.push("/(auth)/sign-in");
    }
  }, [auth]);
  return (
    <View className="h-screen justify-center items-center">
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Button
          title="Sign Out"
          onPress={() =>
            auth.signOut({
              redirectUrl: "/(auth)/sign-in",
            })
          }
        />
      </SignedIn>
    </View>
  );
}
