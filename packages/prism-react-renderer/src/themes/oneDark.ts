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
      types: [
        "comment",
        "prolog",
        "doctype",
        "cdata",
        "punctuation",
      ],
      style: {
        color: "hsl(220, 10%, 40%)",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "hsl(29, 54%, 61%)",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "hsl(95, 38%, 62%)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
      ],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "hsl(207, 82%, 66%)",
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
};

export default theme;
