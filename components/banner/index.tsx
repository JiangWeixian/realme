import { API_URL } from 'lib/constants'
import React from 'react'
import trimStart from 'lodash/trimStart'
import {
  $foreignObject,
  $container,
  $circle,
  $small,
  $p,
  $content,
  $title,
  $subtitle,
  $desc,
} from './styles'
import { cssText } from 'lib/format'

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
const withoutHash = (str: string) => (str.startsWith('#') ? trimStart(str, '#') : str)

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
      ${cssText($foreignObject)}
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
        ${cssText($container)}
        background: linear-gradient(135deg, ${hash(colorA)} 0%, ${hash(colorB)} 100%);
        width: 800px;
        height: 400px;
      }
      .circle {
        aspect-ratio: 1 / 1;
        ${cssText($circle)}
        background: ${hash(colorA)};
      }
      .small {
        ${cssText($small)}
      }
      p {
        ${cssText($p)}
      }
      .content {
        ${cssText($content)}
      }
      .title {
        ${cssText($title)}
      }
      .subtitle {
        color: ${hash(textColor)};
        ${cssText($subtitle)}
      }
      .desc {
        color: ${hash(textColor)};
        ${cssText($desc)}
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

export const buildUrl = (props: Props) => {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(props)) {
    params.append(key, withoutHash(value))
  }
  return `${API_URL}/banner.svg?${params.toString()}`
}
