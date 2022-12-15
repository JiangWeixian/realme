import { css } from 'styled-components'

export const $typical = css`
  @apply relative text-slate-100 text-2xl w-full h-full bg-black font-mono;
`

export const $word = css`
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
`

export const $character = css`
  @apply opacity-0 overflow-hidden inline-block;
`
