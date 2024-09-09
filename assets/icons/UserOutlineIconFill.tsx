import Svg, { Path, SvgProps } from "react-native-svg";
const UserOuntlineIconFill = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M22.5 12.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-7-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-3 11.5a8.46 8.46 0 0 0 4.807-1.489c.604-.415.862-1.205.51-1.848C17.09 16.33 15.59 15.5 12.5 15.5c-3.09 0-4.59.83-5.318 2.163-.351.643-.093 1.433.511 1.848A8.46 8.46 0 0 0 12.5 21Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default UserOuntlineIconFill;
