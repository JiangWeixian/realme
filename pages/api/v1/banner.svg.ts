import { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import { Banner } from '@/components/banner'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { colorA, colorB, title, subtitle, textColor, desc, width, height } = req.query as any
    const raw = renderToString(
      Banner({ colorA, colorB, title, subtitle, textColor, desc, width, height }),
    )
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(raw)
  } catch (err: any) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
