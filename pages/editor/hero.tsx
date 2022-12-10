import React from 'react'
import { useControls } from 'leva'

import { Banner } from 'components/banner'
import { Editor } from 'components/editor'
import { buildUrl } from 'lib/format'

const Page = () => {
  const params = useControls({
    title: 'hello',
    subtitle: 'world',
    desc: {
      value: 'hello wrold',
      rows: 3,
    },
    colorA: '#831843',
    colorB: '#be185d',
    textColor: '#f472b6',
  })
  return (
    <Editor buildUrl={() => buildUrl(params, '/banner.svg')}>
      <Banner {...params} />
    </Editor>
  )
}

export default Page
