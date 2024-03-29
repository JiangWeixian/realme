import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import type { Language } from 'prism-react-renderer'

import { CodeHighlight } from '../../../components/code-highlight/code-highlight'

import config from '../../../realme.config'
const regex = /[0-9]+/g

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { height, title, range, bg, path } = req.query as any
    const url: string = (req.query.url as string) || `https://${config.host}/${path}`
    const seqs = url.split('.')
    const [start, end] = range.split('-')
    const content = await axios
      .get(url)
      .then((res) => res.data)
      .catch((e) => {
        console.error(e)
      })
    const lines = content.split('\n')
    const startNum = start.match(regex)?.[0]
    const endNum = end.match(regex)?.[0]
    res.setHeader('Content-Type', 'image/svg+xml')
    const code = lines.slice(startNum, endNum).join('\n')
    res
      .status(200)
      .end(CodeHighlight({ code, language: seqs[seqs.length - 1] as Language, title, height, bg }))
  } catch (err: unknown) {
    res.status(404).json({ statusCode: 404, message: (err as Error).message })
  }
}
