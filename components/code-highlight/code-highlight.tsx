import React from "react";
import { renderToString } from 'react-dom/server'
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import gradients from 'styled-webgradients/lib/gradients.json'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

type CodeHighlightProps = {
  code?: string
  language?: Language
  title?: string
}

export const Core = ({ language = 'tsx', code = exampleCode, title = 'Untitled-1' }: CodeHighlightProps) => {
  return (
    <Highlight {...defaultProps} code={code} theme={theme} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <p className="title">{title}</p>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export const CodeHighlight = (props: CodeHighlightProps) => {
  const code = renderToString(<Core {...props} />)
  const gradient = gradients[0]
  const deg = `${gradient.deg}deg`
  const colors = gradient.gradient.map(g => `${g.color} ${g.pos}%`).join(', ')
  return `
  <svg width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
  foreignObject {
    overflow: visible;
  }
  </style>
  <foreignObject width="1" height="1">
    <div class="container" xmlns="http://www.w3.org/1999/xhtml">
      <style>
      .container {
        background-image: linear-gradient(${deg}, ${colors});
        margin: 0px;
        padding: 0px;
        background-position: 0 0;
        padding: 12px 24px;
        display: inline-block;
        width: 800px;
        box-sizing: border-box;
      }
      .editor {
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
        display: inline-block;
      }
      pre {
        padding: 16px;
        margin: 0px;
        font-family: monospace;
      }
      .title {
        margin: 0px;
        width: 100%;
        text-align: center;
        color: rgba(255, 255, 255, 0.3);
        font-weight: 500;
        font-size: 12px;
        font-family: Inter var,sans-serif;
      }
      </style>
        <div class="editor">
          ${code}
        </div>
    </div>
  </foreignObject>
</svg>
  `
}
