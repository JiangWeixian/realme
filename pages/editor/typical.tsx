import React from 'react'
import { useControls } from 'leva'
import qs from 'query-string'

import { Editor } from 'components/editor'
import { buildUrl, normalizeSteps } from 'lib/format'
import { Typical } from 'components/typical'

const Page = () => {
  const params = useControls({
    steps: {
      value: `hello,1000,world`,
      rows: 3,
    },
  })
  const steps = normalizeSteps(
    qs.parse(`steps=${params.steps}`, { arrayFormat: 'comma' }).steps as string[],
  )
  return (
    <Editor buildUrl={() => buildUrl({ steps }, '/typical.svg')}>
      <Typical steps={steps} />
    </Editor>
  )
}

export default Page
