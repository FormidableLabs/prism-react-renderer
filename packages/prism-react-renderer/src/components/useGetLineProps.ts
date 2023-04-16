import { ThemeDict } from "../utils/themeToDict"
import { useCallback } from "react"
import { LineInputProps, LineOutputProps } from "../types"
import clsx from "clsx"

export const useGetLineProps = (themeDictionary?: ThemeDict) =>
  useCallback(
    ({ className, style, line, ...rest }: LineInputProps) => {
      const output: LineOutputProps = {
        ...rest,
        className: clsx("token-line", className),
      }

      if (themeDictionary != null) output.style = themeDictionary.plain
      if (style != null) output.style = { ...(output.style || {}), ...style }

      return output
    },
    [themeDictionary]
  )
