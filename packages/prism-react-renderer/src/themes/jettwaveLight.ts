// light version of code viewer styles built for https://jettwave.com
// only uses colors found in default tailwindCSS => https://tailwindcss.com/docs/customizing-colors
// designed by: https://github.com/ryanmogk
import type { PrismTheme } from "../types"
const theme: PrismTheme = {
  plain: {
    color: "#0f172a",
    backgroundColor: "#f1f5f9",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#000080",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#6A9955",
      },
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#0c4a6e",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#B5CEA8",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "#0f172a",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#0c4a6e",
      },
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#64748b",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#D7BA7D",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#0ea5e9",
      },
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#0ea5e9",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#475569",
      },
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#0e7490",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#0ea5e9",
      },
    },
    {
      types: ["char"],
      style: {
        color: "#D16969",
      },
    },
  ],
}
export default theme
