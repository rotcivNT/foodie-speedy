import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LikedOutlineIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      fill="tomato"
      fillRule="evenodd"
      d="M6.093 4.793c-1.797.822-3.114 2.776-3.114 5.106 0 2.38.974 4.215 2.37 5.788 1.152 1.296 2.545 2.37 3.904 3.417.322.25.643.496.958.745.57.45 1.079.843 1.569 1.13.49.286.884.417 1.22.417.335 0 .73-.13 1.22-.417s.998-.68 1.568-1.13c.315-.249.636-.496.959-.745 1.359-1.047 2.752-2.121 3.903-3.417 1.397-1.573 2.37-3.408 2.37-5.788 0-2.33-1.316-4.284-3.113-5.106-1.746-.798-4.092-.587-6.322 1.73a.812.812 0 0 1-1.17 0c-2.23-2.317-4.576-2.528-6.322-1.73ZM13 4.831C10.495 2.59 7.69 2.276 5.417 3.315 3.017 4.412 1.354 6.961 1.354 9.9c0 2.887 1.203 5.09 2.78 6.867 1.264 1.422 2.81 2.613 4.176 3.664.31.239.61.47.895.695.555.438 1.151.904 1.755 1.257.603.352 1.292.639 2.04.639s1.437-.287 2.04-.64c.604-.352 1.2-.819 1.754-1.256.286-.225.586-.456.896-.695 1.365-1.051 2.912-2.242 4.175-3.664 1.578-1.777 2.78-3.98 2.78-6.867 0-2.938-1.662-5.487-4.063-6.584C18.31 2.276 15.505 2.59 13 4.831Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default LikedOutlineIcon;