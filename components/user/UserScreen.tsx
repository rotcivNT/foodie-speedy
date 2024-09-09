import { View, Text, Button } from "react-native";
import React from "react";
import { SignedIn, useAuth, useUser } from "@clerk/clerk-expo";

const UserScreen = () => {
  const { user } = useUser();
  const auth = useAuth();
  return (
    <View className="h-screen justify-center items-center">
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Button title="Sign out" onPress={() => auth.signOut()} />
      </SignedIn>
    </View>
  );
};

export default UserScreen;
