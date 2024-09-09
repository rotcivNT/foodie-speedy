import { EmailIcon } from "@/assets/icons/EmailIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import Input from "@/components/ui/Input";
import CustomCheckbox from "@/components/ui/MyCheckbox";
import { Link } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PhoneInput from "react-native-international-phone-number";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import SocialList from "./SocialList";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { OAuthStrategy } from "@/constants/enums";
import * as Linking from "expo-linking";

WebBrowser.maybeCompleteAuthSession();

export default function SignUp() {
  useWarmUpBrowser();

  const { startOAuthFlow: startOAuthGoogleFlow } = useOAuth({
    strategy: "oauth_google",
  });
  const { startOAuthFlow: startOAuthFacebookFlow } = useOAuth({
    strategy: "oauth_facebook",
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    fullName: "",
  });

  const onPress = useCallback(async (strategy: OAuthStrategy) => {
    const selectedAuth = {
      oauth_google: startOAuthGoogleFlow,
      oauth_facebook: startOAuthFacebookFlow,
    }[strategy];
    try {
      const { createdSessionId, setActive } = await selectedAuth({
        redirectUrl: Linking.createURL("/home"),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        console.log("NO SESSION ID");
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  function handleInputValue(phoneNumber: any) {
    setPhoneNumber(phoneNumber);
  }

  function handleSelectedCountry(country: any) {
    setSelectedCountry(country);
  }

  const onChangeText = (key: string, value: string) => {
    setFormData((pre) => ({
      ...pre,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView className="flex-1 h-screen">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView className="h-full flex-1 px-6">
          <View className="flex flex-col justify-center items-center pb-5 pt-[60px]">
            <Text className="font-[Roboto-Bold] text-[30px] tracking-[1.5px] text-center text-primary-500">
              Registration
            </Text>

            <View className="mt-8 mb-6">
              <PhoneInput
                value={phoneNumber}
                defaultCountry="VN"
                onChangePhoneNumber={handleInputValue}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
                onFocus={() => setIsFocusInput(true)}
                onBlur={() => setIsFocusInput(false)}
                placeholder="00 0000 0000"
                phoneInputStyles={{
                  flagContainer: {
                    backgroundColor: "transparent",
                  },
                  container: {
                    backgroundColor: "rgba(31, 42, 55, 0.05)",
                    borderColor: isFocusInput ? "#BABDC1" : "#E9EAEB",
                    height: 48,
                  },
                  input: {
                    paddingLeft: 0,
                  },
                }}
              />
            </View>
            <Input
              icon={<EmailIcon />}
              placeholder="Email"
              style="mb-6"
              value={formData.email}
              onChangeText={(value: string) => onChangeText("email", value)}
            />
            <Input
              icon={<UserIcon />}
              placeholder="Full Name"
              style="mb-8"
              onChangeText={(value: string) => onChangeText("fullname", value)}
            />
            <View>
              <CustomCheckbox
                value={rememberMe}
                onValueChange={setRememberMe}
                color="#FF6F61"
                size={22}
                label="Remember me"
              />
            </View>
          </View>

          <View className="w-full mb-8">
            <TouchableOpacity
              activeOpacity={0.9}
              disabled={phoneNumber.length === 0}
              className={`rounded-[28px] flex justify-center items-center px-5 w-full h-[50px]
                ${
                  phoneNumber.length === 0 ? "bg-primary-100" : "bg-primary-500"
                }
              `}
            >
              <Text className="text-white text-lg font-[Roboto-Medium]">
                Sign in
              </Text>
            </TouchableOpacity>

            <View className="flex-row items-center gap-4 my-8">
              <View className="flex-1 h-[1px] bg-[#6d6c69]"></View>
              <Text className="text-[#6d6c69]">Or sign in with</Text>
              <View className="flex-1 h-[1px] bg-[#6d6c69]"></View>
            </View>

            <SocialList onPress={onPress} />
            <View className="mt-6 items-center">
              <Text className="font-[Roboto-Regular] text-neutral-900">
                Already have account?{" "}
                <Link
                  href="/(auth)/sign-in"
                  className="font-[Roboto-Medium] text-primary-500"
                >
                  Sign in
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
