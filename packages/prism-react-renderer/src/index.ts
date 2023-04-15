import Prism from "prismjs"
import { Highlight } from "./components/highlight"
import "./prism-langs"
import * as themes from "./themes"

const defaultProps = {
  Prism,
  theme: themes.vsDark,
}

export { defaultProps, Prism, themes }
export default Highlight
