import { NextApiRequest, NextApiResponse } from 'next'
import { Sliders } from '../../components/sliders/sliders'

export default (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sliders = Sliders()
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(sliders)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}