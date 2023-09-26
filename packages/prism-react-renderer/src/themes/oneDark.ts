/*
    Adapted from the Prism One Dark Theme
    https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css
    Created by Marc Rousavy (@mrousavy) on 26.9.2023
*/
import type { PrismTheme } from "../types"

const theme: PrismTheme = {
  plain: {
    backgroundColor: "hsl(220, 13%, 18%)",
    color: "hsl(220, 14%, 71%)",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(220, 10%, 40%)",
      },
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      types: [
        "attr-name",
        "class-name",
        "maybe-class-name",
        "boolean",
        "constant",
        "number",
        "atrule",
      ],
      style: { color: "hsl(29, 54%, 61%)" },
    },
    {
      types: ["keyword"],
      style: { color: "hsl(286, 60%, 67%)" },
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "hsl(355, 65%, 65%)",
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
      ],
      style: {
        color: "hsl(95, 38%, 62%)",
      },
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(207, 82%, 66%)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "hsl(187, 47%, 55%)",
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
        color: "hsl(220, 14%, 71%)",
      },
    },
  ],
}

export default theme
