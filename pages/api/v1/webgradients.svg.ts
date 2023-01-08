import { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import { WebGradients, WebGradientsProps } from 'components/webgradients'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { subtitle, title, desc, webgradientsName, radialgradiets, width, height } =
      req.query as WebGradientsProps
    const raw = renderToString(
      WebGradients({ subtitle, title, desc, webgradientsName, radialgradiets, width, height }),
    )
    res.setHeader('Cache-Control', 'stale-while-revalidate=3600, max-age=3600')
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
