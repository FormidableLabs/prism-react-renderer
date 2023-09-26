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
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "hsl(230, 4%, 64%)",
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
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "hsl(35, 99%, 36%)",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "hsl(119, 34%, 47%)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "hsl(198, 99%, 37%)",
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
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "hsl(221, 87%, 60%)",
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
};

export default theme;
