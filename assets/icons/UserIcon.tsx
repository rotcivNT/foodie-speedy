import Svg, { Circle, Path, SvgProps } from "react-native-svg";
export const UserIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={12} cy={6} r={4} fill="#BABDC1" />
    <Path
      fill="#BABDC1"
      d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
    />
  </Svg>
);
