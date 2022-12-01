import React from 'react'
import { useControls } from 'leva'

import { Banner } from '@/components/banner'

const Page = () => {
  const { desc, title, subtitle, colorA, colorB, textColor } = useControls({
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
  const banner = Banner({
    colorA,
    colorB,
    textColor,
    title,
    subtitle,
    desc,
  })
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 w-screen h-screen">
      <div className="flex justify-center items-center not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25 w-full h-full">
        <div className="absolute z-0 inset-0 bg-grid [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative z-1 shadow-lg rounded-xl hover:shadow-xl">{banner}</div>
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5" />
      </div>
    </div>
  )
}

export default Page
