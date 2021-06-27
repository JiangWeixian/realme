import { NextApiRequest, NextApiResponse } from 'next'
// import axios from 'axios'

import { CodeHighlight } from '../../components/code-highlight/code-highlight'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const url = req.query.props as string
    // const props = await axios.get(url).then(res => res.data).catch(e => {
    //   console.error(e)
    // })
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(CodeHighlight({}))
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}