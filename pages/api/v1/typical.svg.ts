import { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import { Typical, TypicalProps } from 'components/typical'
import { normalizeSteps } from 'lib/format'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { steps, width, height } = req.query as TypicalProps
    const raw = renderToString(Typical({ steps: normalizeSteps(steps), width, height }))
    res.setHeader('Cache-Control', 'stale-while-revalidate=3600, max-age=3600')
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(raw)
  } catch (err: any) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
