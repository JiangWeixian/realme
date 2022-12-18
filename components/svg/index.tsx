import React from 'react'

import { cssText } from 'lib/format'
import { $container, $foreignObject, $foreignHeroObject } from './styles'

type SvgProps = {
  children?: React.ReactNode
  style?: React.ReactNode
  type?: 'hero' | 'normal'
  /**
   * @description svg size will responsive with parent element, parent element require define
   * width & height
   */
  responsive?: boolean
}

export const Svg = ({ type = 'hero', ...props }: SvgProps) => {
  return (
    <svg
      width={props.responsive ? undefined : '800px'}
      height={props.responsive ? undefined : '400px'}
      viewBox={props.responsive ? undefined : '0 0 800 400'}
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
