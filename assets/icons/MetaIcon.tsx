import Svg, { Path, SvgProps } from "react-native-svg";
export const MetaIcon = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill="#1A78F1"
      fillRule="evenodd"
      d="M2.5 12.056c0 4.972 3.61 9.106 8.333 9.944v-7.223h-2.5V12h2.5V9.777c0-2.5 1.611-3.888 3.89-3.888.721 0 1.5.111 2.221.222v2.556h-1.277c-1.223 0-1.5.61-1.5 1.389V12h2.666l-.444 2.777h-2.222V22c4.722-.838 8.333-4.972 8.333-9.944C22.5 6.525 18 2 12.5 2s-10 4.525-10 10.056Z"
      clipRule="evenodd"
    />
  </Svg>
);
