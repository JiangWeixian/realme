import React from 'react'
import { useControls } from 'leva'
import { webgradients } from 'styled-webgradients/constants'

import { Editor } from 'components/editor'
import { buildUrl } from 'lib/format'
import dynamic from 'next/dynamic'
import type { WebGradients as WebGradientsTypes } from 'components/webgradients'
import { SEO } from 'components/seo'
import { API_URL, HOST } from 'lib/constants'

const WebGradients = dynamic(
  () => import('components/webgradients').then((mod) => mod.WebGradients) as any,
) as typeof WebGradientsTypes

const Page = () => {
  const { webgradients: webgradientsName, ...params } = useControls({
    title: 'hello world',
    subtitle: 'indiehackers',
    desc: {
      value: 'happy hacking',
      rows: 3,
    },
    webgradients: {
      value: 'WarmFlame',
      options: webgradients,
    },
    radialgradiets: false,
  })
  return (
    <Editor buildUrl={() => buildUrl({ ...params, webgradientsName }, '/webgradients.svg')}>
      <SEO
        title="realme - webgradients"
        url={`${HOST}/editor/webgradients`}
        description="Build magic web gradients background in seconds"
        image={`${API_URL}/webgradients.svg?title=hello+world&subtitle=indiehackers&desc=happy+hacking&radialgradiets=true&webgradientsName=HappyFisher`}
      />
      <WebGradients {...params} webgradientsName={webgradientsName as string} />
    </Editor>
  )
}

export default Page
