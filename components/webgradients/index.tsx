import React from 'react'

import { Svg } from 'components/svg'
import {
  $animation,
  $desc,
  $subtitle,
  $title,
  $webgradients,
  $radialgradients,
  $webgradientsBg,
} from './styles'
import { cssText } from 'lib/format'

export type WebGradientsProps = {
  title?: string
  subtitle?: string
  desc?: string
  webgradientsName?: string
  radialgradiets?: boolean
}

export const WebGradients = ({
  title = 'hello world',
  subtitle = 'indiehackers',
  desc = 'Happy hacking',
  webgradientsName = 'WarmFlame',
  radialgradiets = false,
}: WebGradientsProps = {}) => {
  const gradientCss = radialgradiets
    ? $radialgradients
    : require('styled-webgradients')[`${webgradientsName}Css`]
  return (
    <Svg
      style={
        <style
          dangerouslySetInnerHTML={{
            __html: `
      ${$animation}
      .webgradients {
        ${cssText($webgradients)}
      }
      .webgradients-bg {
        ${cssText($webgradientsBg)};
        ${cssText(gradientCss)};
      }
      .webgradients-bg {
        animation: move 30s cubic-bezier(.62,0,.45,.99) infinite;
        background-size: 120%;
        width: 120%;
        height: 120%;
      }
      .title {
        ${cssText($title)}
      }
      .subtitle {
        ${cssText($subtitle)}
      }
      .desc {
        ${cssText($desc)}
      }
      `,
          }}
        />
      }
    >
      <div className="webgradients">
        <div className="webgradients-bg" />
        <h2 className="subtitle">{subtitle}</h2>
        <h1 className="title">{title}</h1>
        <p className="desc">{desc}</p>
      </div>
    </Svg>
  )
}

export default WebGradients
