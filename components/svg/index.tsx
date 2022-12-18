import React from 'react'

import { cssText } from 'lib/format'
import { $container, $foreignObject, $foreignHeroObject } from './styles'

type SvgProps = {
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
   * width & height
   */
  responsive?: boolean
}

export const Svg = ({ type = 'hero', ...props }: SvgProps) => {
  return (
    <svg
      width={props.responsive ? undefined : props.width ?? '800px'}
      height={props.responsive ? undefined : props.height ?? '400px'}
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
    foreignObject {
      ${cssText($foreignObject)}
      ${type === 'hero' ? cssText($foreignHeroObject) : ''}
    }
    .container {
      ${cssText($container)}
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
