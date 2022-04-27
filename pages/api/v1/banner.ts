import { NextApiRequest, NextApiResponse } from 'next'

import { Banner } from '@/components/banner'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { colorA, colorB, title, subtitle, textColor } = req.query as any
    const banner = Banner({ colorA, colorB, title, subtitle, textColor })
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(banner)
  } catch (err: any) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
