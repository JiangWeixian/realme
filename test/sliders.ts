import fs from 'fs'
import path from 'path'

import { Sliders } from '../components/sliders/sliders'

const content = Sliders()
fs.writeFileSync(path.resolve(__dirname, '../assets/sliders.svg'), content)
