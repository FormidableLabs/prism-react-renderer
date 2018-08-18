import React from 'react'
import { render } from 'react-dom'
import { Wrapper, Pre, LineNo } from './styles'

import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim()

const App = () => (
  <Wrapper>
    <h1>Welcome to prism-react-renderer!</h1>

    <Highlight {...defaultProps} code={exampleCode} language="jsx" theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  </Wrapper>
)

render(<App />, document.getElementById('root'))
