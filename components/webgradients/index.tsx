import React from 'react'
import raw from 'styled-webgradients/raw'
import { radialGradient, backgrounds } from 'polished'
import { css } from 'styled-components'

import { Svg } from 'components/svg'
import {
  $animation,
  $desc,
  $subtitle,
  $title,
  $webgradients,
  $radialgradientEffect,
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

const buildBackgrounds = (name: string) => {
  const result = raw.find((item) => {
    return item.name.split(' ').join('') === name
  })
  if (!result) {
    return ''
  }
  const colors = result.group.concat(result.gradient.map((v) => v.color))
  const [color1, color2, color3] = colors
  const commons = [
    radialGradient({
      colorStops: [`${color1} 0`, 'transparent 21%'],
      extent: 'at 71% 77%',
    }),
    radialGradient({
      colorStops: [`${color3} 0`, 'transparent 50%'],
      extent: 'at 36% 47%',
    }),
    radialGradient({
      colorStops: [`${color3} 0`, 'transparent 28%'],
      extent: 'at 54% 29%',
    }),
    radialGradient({
      colorStops: [`${color1} 0`, 'transparent 53%'],
      extent: 'at 45% 51%',
    }),
    radialGradient({
      colorStops: [`${color2} 0`, 'transparent 54%'],
      extent: 'at 73% 44%',
    }),
    radialGradient({
      colorStops: [`${color2} 0`, 'transparent 40%'],
      extent: 'at 24% 7%',
    }),
    radialGradient({
      colorStops: [`${color1} 0`, 'transparent 50%'],
      extent: 'at 75% 46%',
    }),
  ]
  const randoms = colors.slice(3).map((v) => {
    return radialGradient({
      colorStops: [`${v} 0`, 'transparent 50%'],
      extent: `at ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`,
    })
  })
  return css(
    backgrounds(
      ...(commons.concat(randoms).map((v) => {
        return v.backgroundImage
      }) as string[]),
    ),
    cssText($radialgradientEffect),
  )
}

export const WebGradients = ({
  title = 'hello world',
  subtitle = 'indiehackers',
  desc = 'Happy hacking',
  webgradientsName = 'WarmFlame',
  radialgradiets = false,
}: WebGradientsProps = {}) => {
  const gradientCss = radialgradiets
    ? buildBackgrounds(webgradientsName)
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
        ${cssText($webgradientsBg)}
        ${gradientCss}
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
