import { css } from 'styled-components'

export const $foreignObject = css`
  @apply inline w-full h-full rounded-xl overflow-hidden font-sans;
`

export const $container = css`
  @apply flex items-center relative;
`

export const $circle = css`
  @apply absolute rounded-full h-full transform -translate-y-1/2 translate-x-1/2 top-0 right-0;
`

export const $small = css`
  @apply absolute left-24 top-20 w-12 h-12;
`

export const $p = css`
  @apply m-0 p-0;
`

export const $content = css`
  @apply p-12 flex flex-col;
`

export const $title = css`
  @apply font-bold text-white text-6xl;
`

export const $subtitle = css`
  @apply text-2xl font-semibold;
`

export const $desc = css`
  @apply mt-3 italic text-base;
`
