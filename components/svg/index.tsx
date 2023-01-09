import React from 'react'

import { cssText, responsiveTextSize } from 'lib/format'
import { $container, $foreignObject, $foreignHeroObject } from './styles'

export type SvgProps = {
  children?: React.ReactNode
  /**
   * @description Insert style into .container
   */
  style?: React.ReactNode
  type?: 'hero' | 'normal'
  width?: number | string
  height?: number | string
  /**
   * @description svg size will responsive with parent element, parent element require define
   * width & height. Used to preview svg in chrome tab.
   */
  responsive?: boolean
}

const withPx = (str?: string | number, fallback?: string) =>
  str && !str.toString().endsWith('px') ? `${str}px` : fallback

export const Svg = ({ type = 'hero', ...props }: SvgProps) => {
  return (
    <svg
      width={props.responsive ? undefined : withPx(props.width, '800px')}
      height={props.responsive ? undefined : withPx(props.height, '400px')}
      viewBox={
        props.responsive
          ? undefined
          : `0 0 ${props.width ? parseInt(props.width.toString()) : 800} ${
              props.height ? parseInt(props.height.toString()) : 400
            }`
      }
      preserveAspectRatio={props.responsive ? 'none' : undefined}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
    :root {
      font-size: ${responsiveTextSize({ current: props.width, target: 800, base: 16 })}
    }
    foreignObject {
      ${cssText($foreignObject)}
      ${props.responsive ? `width: 100%;` : `width: ${withPx(props.width, '800px')};`}
      ${props.responsive ? `height: 100%;` : `height: ${withPx(props.height, '400px')};`}
      ${type === 'hero' ? cssText($foreignHeroObject) : ''}
    }
    .container {
      ${cssText($container)}
      ${props.responsive ? `width: 100%;` : `width: ${withPx(props.width, '800px')};`}
      ${props.responsive ? `height: 100%;` : `height: ${withPx(props.height, '400px')};`}
    }
  `,
        }}
      ></style>
      <foreignObject>
        {/* @ts-expect-error */}
        <div className="container" xmlns="http://www.w3.org/1999/xhtml">
          {props.style}
          {props.children}
        </div>
      </foreignObject>
    </svg>
  )
}
