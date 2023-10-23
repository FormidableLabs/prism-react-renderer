// Gruvbox Material (light)
// Author: Sainnhe Park (https://github.com/sainnhe)
// https://github.com/sainnhe/gruvbox-material
import type { PrismTheme } from "../types"
const theme: PrismTheme = {
  plain: {
    color: "#654735",
    backgroundColor: "#f9f5d7",
  },
  styles: [
    {
      types: [
        "delimiter",
        "boolean",
        "keyword",
        "selector",
        "important",
        "atrule",
        "property",
        "variable",
        "deleted",
      ],
      style: {
        color: "#af2528", // red
      },
    },
    {
      types: [
        "imports",
        "class-name",
        "maybe-class-name",
        "constant",
        "doctype",
        "builtin",
      ],
      style: {
        color: "#b4730e", // yellow
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#477a5b", // aqua
      },
    },
    {
      types: ["property-access"],
      style: {
        color: "#266b79", // blue
      },
    },
    {
      types: ["function", "attr-name", "char", "url"],
      style: {
        color: "#72761e", // green
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#b94c07", // orange
      },
    },
    {
      types: ["comment", "prolog", "cdata", "operator", "inserted"],
      style: {
        color: "#a89984",
      },
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#924f79", // purple
      },
    },
  ],
}
export default theme
