import { GoogleIcon } from "@/assets/icons/GoogleIcon";
import { MetaIcon } from "@/assets/icons/MetaIcon";
import { OAuthStrategy } from "@/constants/types";
import { TouchableOpacity, View } from "react-native";

interface IProps {
  onPress: (strategy: OAuthStrategy) => void;
}

export default function SocialList({ onPress }: IProps) {
  return (
    <View className="flex-row gap-5 justify-center">
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => onPress(OAuthStrategy.GOOGLE_STRATEGY)}
        className="p-2 rounded-[100px] border border-neutral-40 block self-start"
      >
        <GoogleIcon />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => onPress(OAuthStrategy.FACEBOOK_STRATEGY)}
        className="p-2 rounded-[100px] border border-neutral-40 block self-start"
      >
        <MetaIcon />
      </TouchableOpacity>
    </View>
  );
}
