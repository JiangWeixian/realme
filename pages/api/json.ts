import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const props = await axios.get("https://raw.githubusercontent.com/JiangWeixian/realme/master/package.json").then(res => res.data)
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(props)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}