import React from 'react'
import Link from 'next/link'
import useMeasure from 'react-use-measure'

import { API_URL } from 'lib/constants'
import Docs from 'assets/docs.svg'
import Editor from 'assets/editor.svg'

const wigets = [
  {
    name: 'banner',
    editor: '/editor/banner',
    url: '/banner.svg?colorA=831843&colorB=be185d&textColor=f472b6&title=World!&subtitle=Hello',
  },
  {
    name: 'webgradients',
    editor: '/editor/webgradients',
    url: '/webgradients.svg?title=hello+world&subtitle=indiehackers&desc=happy+hacking&radialgradiets=true&webgradientsName=HappyFisher',
  },
  {
    name: 'typical',
    editor: '/editor/typical',
    url: '/typical.svg?steps=hello&steps=1000&steps=hello%20world&steps=500&steps=hello%20realme',
  },
  {
    name: 'mdx',
    docs: 'https://github.com/JiangWeixian/realme#mdx',
    url: '/mdx.svg?remoteContent=https://ungh.cc/repos/JiangWeixian/realme/files/master/docs/mdx.mdx&width=660&height=1100',
  },
  {
    name: 'devices-iphonex',
    docs: 'https://github.com/JiangWeixian/realme#devices',
    url: '/devices.svg?webgradientsName=BlueVelvet&width=800&height=400&type=iphonex&imgSrc=https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    name: 'devices-ipadpro',
    docs: 'https://github.com/JiangWeixian/realme#devices',
    url: '/devices.svg?webgradientsName=WinterNeva&width=800&height=400&type=ipadpro&imgSrc=https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
]

const RealmeImage = ({ src, name }: { src: string; name: string }) => {
  const [ref, bounds] = useMeasure()
  return (
    <div
      ref={ref}
      className="rounded-lg shadow-lg overflow-y-auto ring ring-transparent hover:ring-blue-400/70 ring-offset-4 dark:ring-offset-slate-900 w-full h-full"
    >
      <img src={`${src}&width=${bounds.width}&height=${bounds.height}`} alt={name} />
    </div>
  )
}

const List = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden overflow-y-auto py-4 pt-12">
      <div className="w-10/12 mb-8">
        <h1 className="text-4xl text-white font-bold font-mono text-left">Available Wigets</h1>
        <p className="text-base text-slate-50/70 text-left">
          Click icon to see all endpoint params
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 py-4 w-10/12 min-h-screen">
        {wigets.map((wiget) => {
          return (
            <div className="rounded-lg w-full aspect-[2/1] overflow-hidden" key={wiget.name}>
              <RealmeImage src={`${API_URL}${wiget.url}`} alt={wiget.name} />
              <div className="flex items-center mt-4 cursor-pointer">
                {wiget.docs && (
                  <a href={wiget.docs} rel="noopener noreferrer" target="_blank">
                    <Docs className="text-slate-400 w-4 h-4" />
                  </a>
                )}
                {wiget.editor && (
                  <Link href={wiget.editor}>
                    <Editor className="text-slate-400 w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
