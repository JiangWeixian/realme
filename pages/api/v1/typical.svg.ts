import { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import { Typical, TypicalProps } from 'components/typical'
import { normalizeSteps } from 'lib/format'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { steps } = req.query as TypicalProps
    const raw = renderToString(Typical({ steps: normalizeSteps(steps) }))
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(raw)
  } catch (err: any) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
}
