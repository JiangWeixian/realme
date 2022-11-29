import React from 'react'
import { Banner } from '@/components/banner'

const Page = () => {
  const banner = Banner({
    colorA: '831843',
    colorB: 'be185d',
    textColor: 'f472b6',
    title: 'hello',
    subtitle: 'world',
    desc: 'hello wrold',
  })
  return <div className="flex justify-center items-center w-screen h-screen">{banner}</div>
}

export default Page
