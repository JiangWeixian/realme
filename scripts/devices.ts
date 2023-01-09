import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

let css = readFileSync(require.resolve('devices.css/dist/devices.css')).toString('utf-8')
css = css.replace(/(-?[0-9]*px)/g, (_, p1) => {
  return `calc(var(--tw-scale-x)*${p1})`
})
const raw = `
import { css } from "styled-components"
export const $styles = css\`
${css}
\`
`
writeFileSync(path.join(__dirname, '../components/devices/styles.ts'), raw)
