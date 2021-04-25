import fs from 'fs'
import path from 'path'

import { Sliders } from '../components/sliders/sliders'
import defaultProps from '../components/sliders/constants.json'

const content = Sliders(defaultProps)
fs.writeFileSync(path.resolve(__dirname, './assets/sliders.svg'), content)
