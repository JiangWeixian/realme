import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { serialize } from 'next-mdx-remote/serialize'

import { Svg } from 'components/svg'

function Content({ source }: { source: MDXRemoteProps }) {
  return (
    <div className="prose bg-slate-50 dark:bg-slate-900 w-full h-full p-8">
      <MDXRemote {...source} />
    </div>
  )
}

export type MDXProps = {
  rawContent: string
  rawStyle: string
  width: number | string
  height: number | string
}

export const MDX = ({ rawStyle, rawContent, width, height }: MDXProps) => {
  return (
    <Svg
      type="normal"
      width={width}
      height={height}
      responsive={true}
      style={
        <style
          dangerouslySetInnerHTML={{
            __html: `${rawStyle}`,
          }}
        />
      }
    >
      <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: rawContent }} />
    </Svg>
  )
}

export const renderContent = async ({ source }: { source: string }) => {
  const mdxSource = await serialize(source)
  const result = renderToString(Content({ source: mdxSource }))
  return result
}
