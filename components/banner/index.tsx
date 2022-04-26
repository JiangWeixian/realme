import React from 'react'
import { renderToString } from 'react-dom/server'

type Props = {
  colorA: string
  colorB: string
  textColor: string
  title: string
  subtitle: string
}

export const Inner = (props: Pick<Props, 'subtitle' | 'title'>) => {
  return (
    <div className="banner">
      <div className="circle" />
      <div className="circle small" />
      <div className="content">
        <p className="subtitle">{props.subtitle}</p>
        <p className="title">{props.title}</p>
      </div>
    </div>
  )
}

const defaultProps: Props = {
  // 900
  colorB: '#373a71',
  // 700
  colorA: '#484fad',
  // 400
  textColor: '#8499d6',
  title: 'Hello',
  subtitle: 'Hello',
}

export const Banner = ({
  colorA = defaultProps.colorA,
  colorB = defaultProps.colorB,
  textColor = defaultProps.textColor,
  ...props
}: Props = defaultProps) => {
  const code = renderToString(<Inner {...props} />)
  return `
  <svg width="800px" height="400px" viewBox="0 0 800 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
  foreignObject {
    overflow: hidden;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  </style>
  <foreignObject>
    <div class="container" xmlns="http://www.w3.org/1999/xhtml">
      <style>
      .container {
        display: flex;
        align-items: center;
        background: linear-gradient(135deg, ${colorA} 0%, ${colorB} 100%);
        width: 800px;
        height: 400px;
        position: relative;
      }
      .circle {
        position: absolute;
        right: -200px;
        top: -200px;
        border-radius: 100%;
        width: 400px;
        height: 400px;
        background: ${colorA};
      }
      .small {
        position: absolute;
        left: 100px;
        top: 80px;
        width: 50px;
        height: 50px;
      }
      p {
        margin: 0px;
        padding: 0px;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
      .content {
        padding: 48px;
      }
      .title {
        font-weight: bolder;
        font-size: 64px;
        color: white;
      }
      .subtitle {
        color: ${textColor};
        font-size: 24px;
        font-weight: 600;
      }
      </style>
      ${code}
    </div>
  </foreignObject>
</svg>
`
}
