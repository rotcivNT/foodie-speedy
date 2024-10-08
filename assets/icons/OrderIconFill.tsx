import Svg, { Path, SvgProps } from "react-native-svg";
const OrderIconFill = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M10 2.5A1.5 1.5 0 0 0 8.5 4v1A1.5 1.5 0 0 0 10 6.5h5A1.5 1.5 0 0 0 16.5 5V4A1.5 1.5 0 0 0 15 2.5h-5Z"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M7 4.537c-1.258.07-2.052.27-2.621.84C3.5 6.256 3.5 7.67 3.5 10.498v6c0 2.829 0 4.243.879 5.122.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121-.569-.57-1.363-.77-2.621-.84V5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-.463Zm.5 5.713a.75.75 0 0 0 0 1.5H8a.75.75 0 0 0 0-1.5h-.5Zm3.5 0a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5H11Zm-3.5 3.5a.75.75 0 0 0 0 1.5H8a.75.75 0 0 0 0-1.5h-.5Zm3.5 0a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5H11Zm-3.5 3.5a.75.75 0 0 0 0 1.5H8a.75.75 0 0 0 0-1.5h-.5Zm3.5 0a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5H11Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default OrderIconFill;
