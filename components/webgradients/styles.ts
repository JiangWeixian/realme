import { css } from 'styled-components'

export const $animation = css`
  @keyframes move {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`

export const $webgradients = css`
  @apply flex flex-col items-center justify-center;
`

export const $title = css`
  @apply text-white text-6xl font-bold;
`

export const $desc = css`
  @apply text-white font-thin;
`

export const $subtitle = css`
  @apply text-white text-lg font-semibold;
`
