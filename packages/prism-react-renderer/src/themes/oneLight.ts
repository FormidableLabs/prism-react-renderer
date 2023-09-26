/*
    Adapted from the Prism One Light Theme
    https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css
    Created by Marc Rousavy (@mrousavy) on 26.9.2023
*/
import type { PrismTheme } from "../types"

const theme: PrismTheme = {
  plain: {
    backgroundColor: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)",
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(230, 4%, 64%)",
      },
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      types: [
        "attr-name",
        "class-name",
        "boolean",
        "constant",
        "number",
        "atrule",
      ],
      style: {
        color: "hsl(35, 99%, 36%)",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "hsl(301, 63%, 40%)",
      },
    },

    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "hsl(5, 74%, 59%)",
      },
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value",
        "punctuation",
      ],
      style: {
        color: "hsl(119, 34%, 47%)",
      },
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "hsl(198, 99%, 37%)",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },
  ],
}

export default theme
