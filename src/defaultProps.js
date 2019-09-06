// @flow

import Prism from "./vendor/prism";
import theme from "./themes/duotoneDark";

import type { PrismLib } from "./types";

const defaultProps = {
  // $FlowFixMe
  Prism: (Prism: PrismLib),
  theme
};

export default defaultProps;
