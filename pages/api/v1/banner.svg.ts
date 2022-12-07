import { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import { Banner } from '@/components/banner'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { colorA, colorB, title, subtitle, textColor, desc } = req.query as any
    const banner = renderToString(Banner({ colorA, colorB, title, subtitle, textColor, desc }))
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(banner)
  } catch (err: any) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
}
