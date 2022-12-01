import React, { useCallback } from 'react'
import { useControls } from 'leva'
import Link from 'assets/link.svg'
import copy from 'copy-to-clipboard'
import { Toaster, toast } from 'react-hot-toast'

import { Banner, buildUrl } from '@/components/banner'

const Page = () => {
  const params = useControls({
    title: 'hello',
    subtitle: 'world',
    desc: {
      value: 'hello wrold',
      rows: 3,
    },
    colorA: '#831843',
    colorB: '#be185d',
    textColor: '#f472b6',
  })
  const handleBuildUrl = useCallback(() => {
    copy(buildUrl(params))
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-xs w-full bg-slate-900/10 dark:bg-slate-900 shadow-lg rounded-lg pointer-events-auto flex`}
      >
        <div className="flex-1 p-4">
          <p className="text-sm font-medium text-slate-700">Already copy url into clipboard!</p>
        </div>
        <div className="flex">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full p-4 border border-transparent rounded-none rounded-r-lg flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
  }, [params])
  const banner = Banner(params)
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 w-screen h-screen">
      <div className="flex justify-center items-center not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 w-full h-full">
        <div className="absolute z-0 inset-0 bg-grid [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative z-1 flex flex-col gap-2">
          <div className="rounded-xl shadow-lg hover:shadow-xl transition-all ring ring-transparent hover:ring-blue-400/70 ring-offset-4 dark:ring-offset-slate-900">
            {banner}
          </div>
          <div>
            <a title="Click to copy image url">
              <Link className="fill-white cursor-pointer" onClick={handleBuildUrl} />
            </a>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5" />
      </div>
      <div>
        <Toaster position="bottom-right" />
      </div>
    </div>
  )
}

export default Page
