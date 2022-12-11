import React from 'react'

import { cssText } from 'lib/format'
import { $container, $foreignObject } from './styles'

type SvgProps = {
  children?: React.ReactNode
  style?: React.ReactNode
}

export const Svg = (props: SvgProps) => {
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
