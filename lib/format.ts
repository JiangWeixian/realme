import trim from 'lodash/trim'
import trimStart from 'lodash/trimStart'
import trimEnd from 'lodash/trimEnd'
import type { FlattenSimpleInterpolation } from 'styled-components'

export const cssText = (source: FlattenSimpleInterpolation) => {
  return trim(trimEnd(trimStart(trim(source.toString()), '& {'), '}'))
}
