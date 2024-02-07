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
        color: "#af2528",
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
        color: "#b4730e",
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#477a5b",
      },
    },
    {
      types: ["property-access"],
      style: {
        color: "#266b79",
      },
    },
    {
      types: ["function", "attr-name", "char", "url"],
      style: {
        color: "#72761e",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#b94c07",
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
        color: "#924f79",
      },
    },
  ],
}
export default theme
