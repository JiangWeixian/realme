import { NextApiRequest, NextApiResponse } from 'next'
import cors from 'nextjs-cors'
import { ofetch } from 'ofetch'

import { MDX, renderContent, MDXProps } from 'components/mdx'
import { generateStyles } from 'lib/windicss'
import { renderToString } from 'react-dom/server'

type UnGhFile = {
  meta: {
    url: string
  }
  file: {
    contents: string
    html: string
  }
}

// FIXME: looks like not working on dev
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await cors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    const {
      width,
      height,
      remoteContent = 'https://ungh.cc/repos/neo-hack/docs/files/master/docs/guide/get-started.md',
    } = req.query as MDXProps & { remoteContent: string }
    const text: UnGhFile = await ofetch(remoteContent, {
      method: 'GET',
    })
    const rawContent = await renderContent({ source: text.file.contents })
    const rawStyle = generateStyles(rawContent)
    const raw = renderToString(MDX({ rawContent, rawStyle, width, height }))
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(raw)
  } catch (err: any) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
