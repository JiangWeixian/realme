import React from 'react'

import { Svg } from 'components/svg'
import { $animation, $desc, $subtitle, $title, $webgradients } from './styles'
import { cssText } from 'lib/format'

export type WebGradientsProps = {
  title?: string
  substitle?: string
  desc?: string
  webgradientsName?: string
}

export const WebGradients = ({
  title = 'hello world',
  substitle = 'indiehackers',
  desc = 'Happy hacking',
  webgradientsName = 'WarmFlame',
}: WebGradientsProps = {}) => {
  const $webgradientCss = require('styled-webgradients')[`${webgradientsName}Css`]
  return (
    <Svg
      style={
        <style
          dangerouslySetInnerHTML={{
            __html: `
      ${$animation}
      .webgradients {
        animation: move 15s cubic-bezier(.62,0,.45,.99) infinite;
        ${cssText($webgradientCss)};
        background-size: 400%;
      }
      .webgradients {
        ${cssText($webgradients)}
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
        <h2 className="subtitle">{substitle}</h2>
        <h1 className="title">{title}</h1>
        <p className="desc">{desc}</p>
      </div>
    </Svg>
  )
}

export default WebGradients
