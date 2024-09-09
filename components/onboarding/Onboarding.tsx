import { Image, Text } from "react-native";
import OnboardingSwiper, { Page } from "react-native-onboarding-swiper";
import { router } from "expo-router";

const OnboardingTitle = ({ title }: { title: string }) => {
  return (
    <Text
      style={{
        textAlign: "center",
        fontSize: 22,
        letterSpacing: 1.1,
        textTransform: "capitalize",
        color: "#FF6347",
        fontFamily: "Roboto-Medium",
      }}
    >
      {title}
    </Text>
  );
};

const OnboardingSubtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <Text
      style={{
        textAlign: "center",
        fontSize: 18,
        color: "#FF6347",
        fontFamily: "Roboto-Regular",
        marginTop: 12,
      }}
    >
      {subtitle}
    </Text>
  );
};

const onboardingData: Page[] = [
  {
    backgroundColor: "#FF6347",
    title: (
      <Text
        style={{
          fontSize: 40,
          fontFamily: "Roboto-Bold",
          color: "#FFF",
        }}
      >
        FOODIE SPEEDY
      </Text>
    ),
    image: (
      <Image
        width={50}
        height={50}
        source={require("../../assets/images/onboard/Logo.png")}
      />
    ),
    subtitle: (
      <Text
        style={{
          fontSize: 22,
          fontFamily: "Roboto-Medium",
          lineHeight: 36,
          color: "#FFF",
          textAlign: "center",
          marginTop: 12,
        }}
      >
        As fast as lightning,{"\n"}as delicious as thunder!
      </Text>
    ),
  },
  {
    backgroundColor: "#FFF",
    title: <OnboardingTitle title="Wide Selection" />,
    image: (
      <Image
        source={require("../../assets/images/onboard/wide-selection.png")}
      />
    ),
    subtitle: (
      <OnboardingSubtitle subtitle="More than 400 restaurants nationwide." />
    ),
  },
  {
    backgroundColor: "#FFF",
    title: <OnboardingTitle title="Fast Delivery" />,
    image: (
      <Image
        source={require("../../assets/images/onboard/fast-delivery.png")}
      />
    ),
    subtitle: <OnboardingSubtitle subtitle="Receive goods after 10 minutes." />,
  },
  {
    backgroundColor: "#FFF",
    title: <OnboardingTitle title="Order Tracking" />,
    image: (
      <Image
        source={require("../../assets/images/onboard/order-tracking.png")}
      />
    ),
    subtitle: <OnboardingSubtitle subtitle="Track your orders in real-time." />,
  },
  {
    backgroundColor: "#FFF",
    title: <OnboardingTitle title="Special Offers" />,
    image: (
      <Image
        source={require("../../assets/images/onboard/special-offers.png")}
      />
    ),
    subtitle: <OnboardingSubtitle subtitle="Weekly deals and discounts." />,
  },
];

export default function Onboarding() {
  return (
    <OnboardingSwiper
      onDone={() => router.replace("/(auth)/sign-in")}
      pages={onboardingData}
    />
  );
}
