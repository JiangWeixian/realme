import React from 'react'

type Props = {
  colorA: string
  colorB: string
  textColor: string
  title: string
  subtitle: string
  desc: string
}

export const Inner = (props: Pick<Props, 'subtitle' | 'title' | 'desc'>) => {
  return (
    <div className="banner">
      <div className="circle" />
      <div className="circle small" />
      <div className="content">
        <span className="subtitle">{props.subtitle}</span>
        <span className="title">{props.title}</span>
        <span className="desc">{props.desc}</span>
      </div>
    </div>
  )
}

const defaultProps: Props = {
  // 900
  colorB: '373a71',
  // 700
  colorA: '484fad',
  // 400
  textColor: '8499d6',
  title: 'Hello',
  subtitle: 'Hello',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

const hash = (str: string) => (str.startsWith('#') ? str : `#${str}`)

export const Banner = ({
  colorA = defaultProps.colorA,
  colorB = defaultProps.colorB,
  textColor = defaultProps.textColor,
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  ...props
}: Props = defaultProps) => {
  const code = <Inner title={title} subtitle={subtitle} desc={props.desc} />
  return (
    <svg
      width="800px"
      height="400px"
      viewBox="0 0 800 400"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
    foreignObject {
      overflow: hidden;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  `,
        }}
      ></style>
      <foreignObject>
        {/* @ts-expect-error */}
        <div className="container" xmlns="http://www.w3.org/1999/xhtml">
          <style
            dangerouslySetInnerHTML={{
              __html: `
      .container {
        display: flex;
        align-items: center;
        background: linear-gradient(135deg, ${hash(colorA)} 0%, ${hash(colorB)} 100%);
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
        background: ${hash(colorA)};
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
        display: flex;
        flex-direction: column;
      }
      .title {
        font-weight: bolder;
        font-size: 64px;
        color: white;
        line-height: 1;
      }
      .subtitle {
        color: ${hash(textColor)};
        font-size: 24px;
        font-weight: 600;
      }
      .desc {
        color: ${hash(textColor)};
        font-size: 16px;
        font-style: italic;
        font-weight: normal;
        margin-top: 12px;
      }
      `,
            }}
          ></style>
          {code}
        </div>
      </foreignObject>
    </svg>
  )
}
