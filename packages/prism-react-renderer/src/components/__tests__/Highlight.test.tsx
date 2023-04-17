import { render, cleanup } from "@testing-library/react"
import { Highlight } from "../../index"
import { expect } from "vitest"

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim()
describe("<Highlight />", () => {
  afterEach(cleanup)
  describe("snapshots", () => {
    it("renders correctly", () => {
      const { container } = render(
        <Highlight code={exampleCode} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({
                    line,
                  })}
                >
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({
                        token,
                      })}
                    />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
      expect(container).toMatchSnapshot()
    })
    it("renders unsupported languages correctly", () => {
      const { container } = render(
        <Highlight
          code={exampleCode}
          // This is an intentional error to test invalid languages
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          language="abcdefghijklmnop"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({
                    line,
                  })}
                >
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({
                        token,
                      })}
                    />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
      expect(container).toMatchSnapshot()
    })
    it("renders a default theme when no theme is passed", () => {
      const { container } = render(
        <Highlight code={exampleCode} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({
                    line,
                  })}
                >
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({
                        token,
                      })}
                    />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
      expect(container.innerHTML.includes("style")).toBeTruthy()
    })
  })
  describe("getLineProps", () => {
    it("transforms lineProps inputs correctly", () => {
      const input = {
        style: {
          cursor: "pointer",
        },
        className: "line-class",
        line: [
          {
            types: ["punctuation"],
            content: "!",
          },
        ],
        restPropsTest: true,
      }
      render(
        <Highlight code={exampleCode} language="jsx">
          {({ getLineProps }) => {
            const output = getLineProps(input)
            expect(output).toEqual({
              style: {
                cursor: "pointer",
                color: expect.any(String),
              },
              className: "token-line line-class",
              restPropsTest: true,
            })
            return <div></div>
          }}
        </Highlight>
      )
    })
  })
  describe("getTokenProps", () => {
    it("transforms tokenProps inputs correctly", () => {
      const input = {
        style: {
          cursor: "pointer",
        },
        className: "token-class",
        token: {
          types: ["keyword"],
          content: "function",
        },
        restPropsTest: true,
      }
      render(
        <Highlight code={exampleCode} language="jsx">
          {({ getTokenProps }) => {
            const output = getTokenProps(input)
            expect(output).toEqual({
              style: {
                cursor: "pointer",
                color: expect.any(String),
              },
              className: "token keyword token-class",
              restPropsTest: true,
              children: "function",
            })
            return <div></div>
          }}
        </Highlight>
      )
    })
    it("transforms constructor token style correctly", () => {
      // From https://github.com/FormidableLabs/prism-react-renderer/issues/11
      render(
        <Highlight code={"open Common;"} language="reason">
          {({ tokens, getTokenProps }) => {
            const line = tokens[0]
            const token = line[2]
            const output = getTokenProps({
              token,
            })
            expect(typeof output.style).not.toBe("function")
            return <div></div>
          }}
        </Highlight>
      )
    })
  })
})
