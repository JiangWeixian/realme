import React, { useCallback } from 'react'
import { useControls } from 'leva'
import Link from 'assets/link.svg'
import copy from 'copy-to-clipboard'
import { Toaster, toast } from 'react-hot-toast'

import { Banner, buildUrl } from '@/components/banner' 

type AlertProps = {
  onClose?: () => void
  title: string
  description: string
}

const Alert = (props: AlertProps) => {
  return (
    <div
      role="alert"
      className="p-4 inset-0 pointer-events-none border border-black/5 rounded-xl bg-slate-50 dark:bg-slate-800/25 dark:border-white/5"
    >
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900 dark:text-white">{props.title}</strong>

          <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">{props.description}</p>
        </div>

        <button
          onClick={props.onClose}
          className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

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
      <Alert
        title="success"
        description="Already copy into clipboard!"
        onClose={() => toast.dismiss(t.id)}
      />
    ))
  }, [params])
  const banner = Banner(params)
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 w-screen h-screen">
      <div className="flex justify-center items-center not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 w-full h-full">
        <div className="absolute z-0 inset-0 bg-grid [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative z-1 flex flex-col gap-4">
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
