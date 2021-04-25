import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { Sliders } from '../../components/sliders/sliders'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = req.query.props as string
    const props = await axios.get(url).then(res => res.data).catch(e => {
      console.error(e)
    })
    const sliders = Sliders(props)
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(sliders)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}