import Svg, { Path, SvgProps } from "react-native-svg";
const HomeIconFill = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M3.02 8.323c-.52.948-.52 2.092-.52 4.38v1.522c0 3.9 0 5.851 1.172 7.063C4.843 22.5 6.729 22.5 10.5 22.5h4c3.771 0 5.657 0 6.828-1.212 1.172-1.212 1.172-3.162 1.172-7.063v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.611 3.122 13.608 2.5 12.5 2.5c-1.108 0-2.11.622-4.116 1.867l-2 1.241C4.487 6.786 3.538 7.374 3.019 8.323ZM9.5 17.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeIconFill;
