import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

const css = readFileSync(require.resolve('devices.css/dist/devices.css')).toString('utf-8')
const raw = `
import { css } from "styled-components"
export const $styles = css\`
${css}
\`
`
writeFileSync(path.join(__dirname, '../components/devices/styles.ts'), raw)
