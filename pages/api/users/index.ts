import { NextApiRequest, NextApiResponse } from 'next'

export const createYearOfProgress = ({ color = 'black' }: { color: string }) => {
  return `
<svg width="800px" height="100px" viewBox="0 0 800 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        .gg-add-r {
          box-sizing: border-box;
          position: relative;
          display: block;
          width: 22px;
          height: 22px;
          border: 2px solid;
          transform: scale(var(--ggs,1));
          border-radius: 4px;
          color: ${color}
      }
      .gg-add-r::after,
      .gg-add-r::before {
          content: "";
          display: block;
          box-sizing: border-box;
          position: absolute;
          width: 10px;
          height: 2px;
          background: currentColor;
          border-radius: 5px;
          top: 8px;
          left: 4px
      }
      .gg-add-r::after {
          width: 2px;
          height: 10px;
          top: 4px;
          left: 8px
      }
      </style>
      <i class="gg-add-r"></i>
    </div>
  </foreignObject>
</svg>
  `
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const yearOfProgress = createYearOfProgress({ color: req.query.color as string })
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).end(yearOfProgress)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}