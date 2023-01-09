import React from 'react'
import { $container, $circle, $small, $p, $content, $title, $subtitle, $desc } from './styles'
import { cssText } from 'lib/format'
import { Svg, SvgProps } from '../svg'

type Props = {
  colorA: string
  colorB: string
  textColor: string
  title: string
  subtitle: string
  desc: string
} & Pick<SvgProps, 'width' | 'height'>

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
    <Svg
      width={props.width}
      height={props.height}
      style={
        <style
          dangerouslySetInnerHTML={{
            __html: `
      .container {
        ${cssText($container)}
        background: linear-gradient(135deg, ${hash(colorA)} 0%, ${hash(colorB)} 100%);
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
      }
    >
      {code}
    </Svg>
  )
}
