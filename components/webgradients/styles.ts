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
  @apply relative overflow-hidden flex flex-col items-center justify-center w-full h-full m-0 p-0 w-full h-full bg-left-top;
`

export const $webgradientsBg = css`
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-1 opacity-90 filter blur-3xl;
`

/**
 * @description it's a great radial gradient effects
 * @todo maybe should add it into `styled-webgradients`
 */
export const $radialgradients = css`
  --color-gradient-1: #7d7aff;
  --color-gradient-2: #2121e2;
  --color-gradient-3: #00fff0;
  background: radial-gradient(at 71% 77%, var(--color-gradient-1) 0, transparent 21%),
    radial-gradient(at 36% 47%, var(--color-gradient-3) 0, transparent 50%),
    radial-gradient(at 54% 29%, var(--color-gradient-3) 0, transparent 28%),
    radial-gradient(at 45% 51%, var(--color-gradient-1) 0, transparent 53%),
    radial-gradient(at 73% 44%, var(--color-gradient-2) 0, transparent 54%),
    radial-gradient(at 24% 7%, var(--color-gradient-2) 0, transparent 40%),
    radial-gradient(at 76% 46%, var(--color-gradient-1) 0, transparent 50%);
  filter: blur(40px);
  opacity: 40%;
`

export const $title = css`
  @apply text-white text-center text-6xl font-bold m-0 p-0;
`

export const $desc = css`
  @apply text-white text-center font-thin m-0 p-0;
`

export const $subtitle = css`
  @apply text-white text-center font-semibold m-0 p-0;
`
