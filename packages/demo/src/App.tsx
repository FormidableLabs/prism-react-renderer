import Highlight, { defaultProps } from "prism-react-renderer"
import styles from "./app.module.css"
import clsx from "clsx"
import { ProjectBadge } from "formidable-oss-badges"
import { useMemo, useState } from "react"
import { sampleCode } from "./sample-code"

/**
 * Example of including custom language definitions beyond
 * what is provided by default from Prism React Renderer
 */
import "prismjs/components/prism-c"
import "prismjs/components/prism-objectivec"
import "prismjs/components/prism-rust"

type SampleCodeType = keyof typeof sampleCode

function App() {
  const [activeSampleCodeType, setActiveSampleCodeType] =
    useState<SampleCodeType>("TypeScript with React")

  const activeSampleCode = useMemo(
    () => sampleCode[activeSampleCodeType],
    [activeSampleCodeType]
  )

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
      <Highlight
        {...defaultProps}
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
