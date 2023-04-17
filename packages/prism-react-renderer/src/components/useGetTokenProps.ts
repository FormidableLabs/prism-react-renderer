import { ThemeDict } from "../utils/themeToDict"
import { CSSProperties, useCallback } from "react"
import { Token, TokenInputProps, TokenOutputProps } from "../types"
import clsx from "clsx"

export const useGetTokenProps = (themeDictionary?: ThemeDict) => {
  const styleForToken = useCallback(
    ({ types, empty }: Token) => {
      if (themeDictionary == null) return undefined
      else if (types.length === 1 && types[0] === "plain") {
        return empty != null ? { display: "inline-block" } : undefined
      } else if (types.length === 1 && empty != null) {
        return themeDictionary[types[0]]
      }

      return Object.assign(
        empty != null ? { display: "inline-block" } : {},
        ...types.map(type => themeDictionary[type])
      ) satisfies CSSProperties
    },
    [themeDictionary]
  )

  return useCallback(
    ({ token, className, style, ...rest }: TokenInputProps) => {
      const output: TokenOutputProps = {
        ...rest,
        className: clsx("token", ...token.types, className),
        children: token.content,
        style: styleForToken(token),
      }

      if (style != null) {
        output.style = {
          ...(output.style || {}),
          ...style,
        }
      }

      return output
    },
    [styleForToken]
  )
}
