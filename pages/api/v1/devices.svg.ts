import { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

import { Devices, DeviceIPadPro } from 'components/devices'
import { generateStyles } from 'lib/windicss'
import { ofetch } from 'ofetch'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      imgSrc = 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    } = req.query as unknown as { imgSrc: string }
    const img = await ofetch(imgSrc, { responseType: 'blob' })
    const rawImg = Buffer.from(await img.arrayBuffer()).toString('base64')
    const imgB64 = `data:${img.type};base64,${rawImg}`
    const rawContent = renderToString(
      DeviceIPadPro({ title: 'hello world', desc: 'indiehackers', imgSrc: imgB64 }),
    )
    const rawStyles = generateStyles(rawContent)
    const raw = renderToString(Devices({ rawContent, rawStyles }))
    res.setHeader('Cache-Control', 'stale-while-revalidate=3600, max-age=3600')
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(raw)
  } catch (err: any) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
