import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ShoppingBagFillIcon = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M8.25 7.502V6.5a3.75 3.75 0 1 1 7.5 0v1.002c2.684.012 4.11.12 4.91 1.096.9 1.098.569 2.758-.095 6.079l-.6 3c-.462 2.309-.693 3.463-1.523 4.143-.829.68-2.006.68-4.36.68H9.918c-2.355 0-3.532 0-4.362-.68-.829-.68-1.06-1.834-1.522-4.143l-.6-3c-.664-3.32-.996-4.98-.096-6.079.8-.976 2.227-1.084 4.911-1.096ZM9.75 6.5a2.25 2.25 0 0 1 4.5 0v1h-4.5v-1Zm5.25 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ShoppingBagFillIcon;
