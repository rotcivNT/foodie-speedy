import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PenIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#BABDC1"
      d="M7.662 14.456c.239-.186.455-.402.888-.835l5.547-5.547a7.718 7.718 0 0 1-2.495-1.676 7.718 7.718 0 0 1-1.676-2.495L4.38 9.45c-.433.433-.65.65-.835.888-.22.281-.408.586-.562.908-.13.274-.227.564-.42 1.145L1.54 15.453a.795.795 0 0 0 1.006 1.006l3.062-1.02c.581-.194.872-.291 1.145-.421.322-.154.627-.342.908-.562ZM15.636 6.535a2.95 2.95 0 0 0-4.17-4.171l-.666.665.028.084a6.565 6.565 0 0 0 1.57 2.49A6.565 6.565 0 0 0 14.97 7.2l.665-.665Z"
    />
  </Svg>
);
export default PenIcon;