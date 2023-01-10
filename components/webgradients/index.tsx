import React from 'react'
import { StyledWebGradients } from 'styled-webgradients/utils'

import { Svg, SvgProps } from 'components/svg'
import { $animation, $desc, $subtitle, $title, $webgradients, $webgradientsBg } from './styles'
import { cssText } from 'lib/format'

export type WebGradientsProps = {
  title?: string
  subtitle?: string
  desc?: string
  webgradientsName?: string
  radialgradiets?: boolean
} & Pick<SvgProps, 'width' | 'height'>

const sw = new StyledWebGradients()

export const WebGradients = ({
  title = 'hello world',
  subtitle = 'indiehackers',
  desc = 'Happy hacking',
  webgradientsName = 'WarmFlame',
  radialgradiets = false,
  width,
  height,
}: WebGradientsProps = {}) => {
  const gradientCss = radialgradiets
    ? sw.unstable_buildRadialGradient(webgradientsName as any, { raw: true })
    : sw.buildLinearGradient(webgradientsName as any, { raw: true })
  return (
    <Svg
      width={width}
      height={height}
      style={
        <style
          dangerouslySetInnerHTML={{
            __html: `
      ${$animation}
      .webgradients {
        ${cssText($webgradients)}
      }
      .webgradients-bg {
        ${cssText($webgradientsBg)}
        ${gradientCss}
      }
      .webgradients-bg {
        background-color: #f8fafc;
        animation: move 30s cubic-bezier(.62,0,.45,.99) infinite;
        background-size: 120%;
        width: 120%;
        height: 120%;
      }
      @media (prefers-color-scheme: dark) {
        .webgradients-bg {
          background-color: #0f172a;
        }
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
