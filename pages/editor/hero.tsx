import React from 'react'
import { useControls } from 'leva'

import { Banner } from 'components/banner'
import { Editor } from 'components/editor'
import { buildUrl } from 'lib/format'
import { SEO } from '@/components/seo'
import { API_URL, HOST } from 'lib/constants'

const Page = () => {
  const params = useControls({
    title: 'hello world',
    subtitle: 'indiehackers',
    desc: {
      value: 'happy hacking',
      rows: 3,
    },
    colorA: '#831843',
    colorB: '#be185d',
    textColor: '#f472b6',
  })
  return (
    <Editor buildUrl={() => buildUrl(params, '/banner.svg')}>
      <SEO
        title="realme - hero"
        url={`${HOST}/editor/hero`}
        description="Build simple hero image"
        image={`${API_URL}/banner.svg?colorA=831843&colorB=be185d&desc=happy%20hacking&subtitle=indiehackers&textColor=f472b6&title=hello%20world`}
      />
      <Banner {...params} />
    </Editor>
  )
}

export default Page
