// @flow

import Prism from "./vendor/prism/index";
import theme from "./themes/duotoneDark";

import type { PrismLib } from "./types";

const defaultProps = {
  // $FlowFixMe
  Prism: (Prism: PrismLib),
  theme
};

export default defaultProps;
