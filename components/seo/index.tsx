/* eslint-disable react/no-unknown-property */
import { HOST } from 'lib/constants'

import Head from 'next/head'
import React from 'react'

const intro = `
Realme help you build awesome hero image in seconds.
`

// refs: https://github.com/joshbuchea/HEAD#recommended-minimum
const meta = {
  url: HOST,
  title: 'realme',
  image:
    'https://realme-ten.vercel.app/api/v1/typical.svg?steps=hello&steps=1000&steps=hello%20world&steps=500&steps=hello%20realme',
  // A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters.
  alt: intro,
  description: intro,
  twitter: '@JiangWeixian',
}

type SEOProps = Partial<typeof meta>

export const SEO = (props: SEOProps = meta) => {
  const p = { ...meta, ...props }
  return (
    <Head>
      <title>{props.title}</title>
      {/* fackbook */}
      <meta property="og:url" content={p.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={p.title} />
      <meta property="og:image" content={p.image} />
      <meta property="og:image:alt" content={p.alt} />
      <meta property="og:description" content={p.description} />
      {/* twitter */}
      <meta name="twitter:card" content={p.description} />
      <meta name="twitter:creator" content={p.twitter} />
      <meta name="twitter:url" content={p.url} />
      <meta name="twitter:title" content={p.title} />
      <meta name="twitter:description" content={p.description} />
      <meta name="twitter:image" content={p.image} />
      <meta name="twitter:image:alt" content={p.description} />
      {/* @ts-ignore */}
      <meta name="pinterest" content="nopin" description={p.description} />
      {/* wechat */}
      <meta itemProp="name" content={p.title} />
      <meta itemProp="image" content={p.image} />
      <meta name="description" itemProp="description" content={p.description} />
    </Head>
  )
}
