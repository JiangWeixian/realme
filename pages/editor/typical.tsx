import React from 'react'
import { useControls } from 'leva'
import qs from 'query-string'

import { Editor } from 'components/editor'
import { buildUrl, normalizeSteps } from 'lib/format'
import { Typical } from 'components/typical'
import { SEO } from '@/components/seo'
import { API_URL, HOST } from 'lib/constants'

const Page = () => {
  const params = useControls({
    steps: {
      value: `hello,1000,hello world,500,hello realme`,
      rows: 3,
    },
  })
  const steps = normalizeSteps(
    qs.parse(`steps=${params.steps}`, { arrayFormat: 'comma' }).steps as string[],
  )
  return (
    <Editor buildUrl={() => buildUrl({ steps }, '/typical.svg')}>
      <SEO
        title="realme - typical"
        url={`${HOST}/editor/typical`}
        description="Build animated typical effects in seconds"
        image={`${API_URL}/typical.svg?steps=hello&steps=1000&steps=hello%20world&steps=500&steps=hello%20realme`}
      />
      <Typical steps={steps} />
    </Editor>
  )
}

export default Page
