import trim from 'lodash/trim'
import trimStart from 'lodash/trimStart'
import trimEnd from 'lodash/trimEnd'
import type { FlattenSimpleInterpolation } from 'styled-components'
import { API_URL } from './constants'
import isString from 'lodash/isString'

export const cssText = (source: FlattenSimpleInterpolation) => {
  return trim(trimEnd(trimStart(trim(source.toString()), '& {'), '}'))
}

const withoutHash = (str: string) => (str.startsWith('#') ? trimStart(str, '#') : str)

export const buildUrl = (props: Record<string, any>, endpoints: string) => {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(props)) {
    if (isString(value)) {
      // currently value is always string
      params.append(key, withoutHash(value as string))
    } else {
      params.append(key, value)
    }
  }
  return `${API_URL}${endpoints}?${params.toString()}`
}
