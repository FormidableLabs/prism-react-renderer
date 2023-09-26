import { Highlight, Prism, themes } from "prism-react-renderer"
import styles from "./app.module.css"
import clsx from "clsx"
import { ProjectBadge } from "formidable-oss-badges"
import { useState } from "react"
import { sampleCode } from "./sample-code"

// Example of importing a custom language directly from Prism
;(typeof global !== "undefined" ? global : window).Prism = Prism
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
await import("prismjs/components/prism-applescript")

type SampleCodeType = keyof typeof sampleCode
type ThemeType = keyof typeof themes

function App() {
  const [activeSampleCodeType, setActiveSampleCodeType] =
    useState<SampleCodeType>("TypeScript with React")
  const [activeThemeName, setActiveThemeName] = useState<ThemeType>("oneDark")

  const activeSampleCode = sampleCode[activeSampleCodeType]
  const activeTheme = themes[activeThemeName]

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerBar}>
        <img
          className={styles.formidableLogo}
          src="formidable-wordmark.svg"
          alt="Formidable"
        />
        <ProjectBadge
          className={styles.ossBadge}
          color="#8bddfd"
          abbreviation="Pr"
          description="Prism React Renderer"
        />
      </div>
      <select
        value={activeSampleCodeType}
        className={styles.languageSelect}
        onChange={event =>
          setActiveSampleCodeType(event.target.value as SampleCodeType)
        }
      >
        {Object.keys(sampleCode).map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      &nbsp;
      <select
        value={activeThemeName}
        className={styles.languageSelect}
        onChange={event => setActiveThemeName(event.target.value as ThemeType)}
      >
        {Object.keys(themes).map(theme => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
      <Highlight
        theme={activeTheme}
        code={activeSampleCode.code.trim()}
        language={activeSampleCode.language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={clsx(className, styles.line)} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className={styles.lineNumber}>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default App
