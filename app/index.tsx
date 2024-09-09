import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";

const Index = () => {
  const auth = useAuth();

  // Not signed in -> redirect to sign in
  if (!auth.isSignedIn) return <Redirect href="/(auth)/sign-in" />;

  // Already signed in -> redirect to home
  return <Redirect href="/(tabs)/home" />;
};

export default Index;
