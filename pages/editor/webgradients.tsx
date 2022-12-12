import React from 'react'
import { useControls } from 'leva'
import { webgradients } from 'styled-webgradients/constants'

import { Editor } from 'components/editor'
import { buildUrl } from 'lib/format'
import dynamic from 'next/dynamic'
import type { WebGradients as WebGradientsTypes } from 'components/webgradients'

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
      <WebGradients {...params} webgradientsName={webgradientsName as string} />
    </Editor>
  )
}

export default Page
